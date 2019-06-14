"use strict";Object.defineProperty(exports, "__esModule", {value: true});/**
 * Crash logger
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Logs crashes, sends an e-mail notification if you've set up
 * config.js to do that.
 *
 * @license MIT
 */

var _fs = require('fs'); var fs = _fs;
var _path = require('path'); var path = _path;

const CRASH_EMAIL_THROTTLE = 5 * 60 * 1000; // 5 minutes
const LOCKDOWN_PERIOD = 30 * 60 * 1000; // 30 minutes

const logPath = path.resolve(__dirname, '../logs/errors.txt');
let lastCrashLog = 0;
let transport;

/**
 * Logs when a crash happens to console, then e-mails those who are configured
 * to receive them.
 */
 function crashlogger(
	error, description, data = null
) {
	const datenow = Date.now();

	let stack = typeof error === 'string' ? error : error.stack;
	if (data) {
		stack += `\n\nAdditional information:\n`;
		for (const k in data) {
			stack += `  ${k} = ${data[k]}\n`;
		}
	}

	console.error(`\nCRASH: ${stack}\n`);
	const out = fs.createWriteStream(logPath, {flags: 'a'});
	out.on('open', () => {
		out.write(`\n${stack}\n`);
		out.end();
	}).on('error', (err) => {
		console.error(`\nSUBCRASH: ${err.stack}\n`);
	});

	if (Config.crashguardemail && ((datenow - lastCrashLog) > CRASH_EMAIL_THROTTLE)) {
		lastCrashLog = datenow;

		if (!transport) {
			try {
				require.resolve('nodemailer');
			} catch (e) {
				throw new Error(
					'nodemailer is not installed, but it is required if Config.crashguardemail is configured! ' +
					'Run npm install --no-save nodemailer and restart the server.'
				);
			}
		}

		let text = `${description} crashed `;
		if (transport) {
			text += `again with this stack trace:\n${stack}`;
		} else {
			try {
				// tslint:disable-next-line:no-implicit-dependencies
				transport = require('nodemailer').createTransport(Config.crashguardemail.options);
			} catch (e) {
				throw new Error("Failed to start nodemailer; are you sure you've configured Config.crashguardemail correctly?");
			}

			text += `with this stack trace:\n${stack}`;
		}

		transport.sendMail({
			from: Config.crashguardemail.from,
			to: Config.crashguardemail.to,
			subject: Config.crashguardemail.subject,
			text,
		}, (err) => {
			if (err) console.error(`Error sending email: ${err}`);
		});
	}

	if (process.uptime() * 1000 < LOCKDOWN_PERIOD) {
		// lock down the server
		return 'lockdown';
	}

	return null;
} exports.crashlogger = crashlogger;
