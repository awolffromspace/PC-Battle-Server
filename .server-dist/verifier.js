"use strict";Object.defineProperty(exports, "__esModule", {value: true});/**
 * Verifier process
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * This is just an asynchronous implementation of a verifier for a
 * signed key, because Node.js's crypto functions are synchronous,
 * strangely, considering how everything else is asynchronous.
 *
 * I wrote this one day hoping it would help with performance, but
 * I don't think it had any noticeable effect.
 *
 * @license MIT
 */
var _crypto = require('crypto'); var crypto = _crypto;

var _processmanager = require('../.lib-dist/process-manager');

 const PM = new (0, _processmanager.QueryProcessManager)(module, async ({data, signature}) => {
	const verifier = crypto.createVerify(Config.loginserverkeyalgo);
	verifier.update(data);
	let success = false;
	try {
		success = verifier.verify(Config.loginserverpublickey, signature, 'hex');
	} catch (e) {}

	return success;
}); exports.PM = PM;

 function verify(data, signature) {
	return exports.PM.query({data, signature});
} exports.verify = verify;

if (!exports.PM.isParentProcess) {
	// This is a child process!
	// @ts-ignore This file doesn't exist on the repository, so Travis checks fail if this isn't ignored
	global.Config = require('../config/config'); // tslint:disable-line: no-var-requires

	const Repl = require('../.lib-dist/repl').Repl; // tslint:disable-line: no-var-requires
	// tslint:disable-next-line: no-eval
	Repl.start('verifier', (cmd) => eval(cmd));
} else {
	exports.PM.spawn(global.Config ? Config.verifierprocesses : 1);
}
