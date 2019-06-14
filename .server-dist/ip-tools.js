"use strict";Object.defineProperty(exports, "__esModule", {value: true}); var _class;/**
 * IP Tools
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * IPTools file has various tools for IP parsing and IP-based blocking.
 *
 * These include DNSBLs: DNS-based blackhole lists, which list IPs known for
 * running proxies, spamming, or other abuse.
 *
 * We also maintain our own database of datacenter IP ranges (usually
 * proxies). These are taken from https://github.com/client9/ipcat
 * but include our own database as well.
 *
 * @license MIT
 */

'use strict';

const BLOCKLISTS = ['sbl.spamhaus.org', 'rbl.efnetrbl.org'];

var _dns = require('dns'); var dns = _dns;
var _fs = require('../.lib-dist/fs');

 const IPTools = new (_class = class {constructor() { _class.prototype.__init.call(this);_class.prototype.__init2.call(this); }
	__init() {this.dnsblCache = new Map([
		['127.0.0.01', null],
	])}

	async lookup(ip) {
		const [dnsbl, host] = await Promise.all([
			exports.IPTools.queryDnsbl(ip),
			exports.IPTools.getHost(ip),
		]);
		return {dnsbl, host};
	}

	queryDnsblLoop(ip, callback, reversedIpDot, index) {
		if (index >= BLOCKLISTS.length) {
			// not in any blocklist
			exports.IPTools.dnsblCache.set(ip, null);
			callback(null);
			return;
		}
		const blocklist = BLOCKLISTS[index];
		dns.resolve4(reversedIpDot + blocklist, (err, addresses) => {
			if (!err) {
				// blocked
				exports.IPTools.dnsblCache.set(ip, blocklist);
				callback(blocklist);
				return;
			}
			// not blocked, try next blocklist
			exports.IPTools.queryDnsblLoop(ip, callback, reversedIpDot, index + 1);
		});
	}

	/**
	 * IPTools.queryDnsbl(ip, callback)
	 *
	 * Calls callb
	 * ack(blocklist), where blocklist is the blocklist domain
	 * if the passed IP is in a blocklist, or null if the IP is not in
	 * any blocklist.
	 *
	 * Return value matches isBlocked when treated as a boolean.
	 */
	queryDnsbl(ip) {
		if (exports.IPTools.dnsblCache.has(ip)) {
			return Promise.resolve(exports.IPTools.dnsblCache.get(ip) || null);
		}
		const reversedIpDot = ip.split('.').reverse().join('.') + '.';
		return new Promise((resolve, reject) => {
			exports.IPTools.queryDnsblLoop(ip, resolve, reversedIpDot, 0);
		});
	}

/*********************************************************
 * IP parsing
 *********************************************************/

	ipToNumber(ip) {
		if (ip.includes(':') && !ip.includes('.')) {
			// IPv6
			return -1;
		}
		if (ip.startsWith('::ffff:')) ip = ip.slice(7);
		else if (ip.startsWith('::')) ip = ip.slice(2);
		let num = 0;
		const parts = ip.split('.');
		for (const part of parts) {
			num *= 256;
			num += parseInt(part);
		}
		return num;
	}

	getCidrPattern(cidr) {
		if (!cidr) return null;
		const index = cidr.indexOf('/');
		if (index <= 0) {
			return [exports.IPTools.ipToNumber(cidr), exports.IPTools.ipToNumber(cidr)];
		}
		const low = exports.IPTools.ipToNumber(cidr.slice(0, index));
		const bits = parseInt(cidr.slice(index + 1));
		// fun fact: IPTools fails if bits <= 1 because JavaScript
		// does << with signed int32s.
		const high = low + (1 << (32 - bits)) - 1;
		return [low, high];
	}
	getRangePattern(range) {
		if (!range) return null;
		const index = range.indexOf(' - ');
		if (index <= 0) {
			return [exports.IPTools.ipToNumber(range), exports.IPTools.ipToNumber(range)];
		}
		const low = exports.IPTools.ipToNumber(range.slice(0, index));
		const high = exports.IPTools.ipToNumber(range.slice(index + 3));
		return [low, high];
	}
	getPattern(str) {
		if (!str) return null;
		if (str.indexOf(' - ') > 0) return exports.IPTools.getRangePattern(str);
		return exports.IPTools.getCidrPattern(str);
	}
	cidrToPattern(cidr) {
		if (!cidr || !cidr.length) {
			return [];
		}
		if (typeof cidr === 'string') {
			const pattern = exports.IPTools.getCidrPattern(cidr);
			if (!pattern) return [];
			return [pattern];
		}
		return cidr.map(exports.IPTools.getCidrPattern).filter(x => x) ;
	}
	rangeToPattern(range) {
		if (!range || !range.length) {
			return [];
		}
		if (typeof range === 'string') {
			const pattern = exports.IPTools.getRangePattern(range);
			if (!pattern) return [];
			return [pattern];
		}
		return range.map(exports.IPTools.getRangePattern).filter(x => x) ;
	}
	checkPattern(patterns, num) {
		for (const pattern of patterns) {
			if (num >= pattern[0] && num <= pattern[1]) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Returns a checker function for the passed IP range or array of
	 * ranges. The checker function returns true if its passed IP is
	 * in the range.
	 */
	checker(ranges) {
		if (!ranges || !ranges.length) return () => false;
		let patterns = [];
		if (typeof ranges === 'string') {
			const rangePatterns = exports.IPTools.getPattern(ranges);
			if (rangePatterns) patterns = [rangePatterns];
		} else {
			patterns = ranges.map(exports.IPTools.getPattern).filter(x => x) ;
		}
		return (ip) => exports.IPTools.checkPattern(patterns, exports.IPTools.ipToNumber(ip));
	}

/*********************************************************
 * Datacenter parsing
 *********************************************************/

	urlToHost(url) {
		if (url.startsWith('http://')) url = url.slice(7);
		if (url.startsWith('https://')) url = url.slice(8);
		if (url.startsWith('www.')) url = url.slice(4);
		const slashIndex = url.indexOf('/');
		if (slashIndex > 0) url = url.slice(0, slashIndex);
		return url;
	}

	__init2() {this.datacenters = []}
	async loadDatacenters() {
		const data = await _fs.FS.call(void 0, 'config/datacenters.csv').readIfExists();
		const rows = data.split('\n');
		const datacenters = [];
		for (const row of rows) {
			if (!row) continue;
			const rowSplit = row.split(',');
			const rowData = [
				exports.IPTools.ipToNumber(rowSplit[0]),
				exports.IPTools.ipToNumber(rowSplit[1]),
				exports.IPTools.urlToHost(rowSplit[3]),
			];
			datacenters.push(rowData);
		}
		exports.IPTools.datacenters = datacenters;
	}

	/**
	 * Will not reject; IPs with no RDNS entry will resolve to
	 * '[byte1].[byte2].unknown-nohost'.
	 */
	getHost(ip) {
		return new Promise(resolve => {
			if (!ip) {
				resolve('');
				return;
			}

			const ipNumber = exports.IPTools.ipToNumber(ip);
			if (exports.IPTools.checkPattern(rangeOVHres, ipNumber)) {
				resolve('ovh.fr.res-nohost');
				return;
			}
			if (exports.IPTools.checkPattern(rangeWindres, ipNumber)) {
				resolve('wind.it.res-nohost');
				return;
			}
			for (const row of exports.IPTools.datacenters) {
				if (ipNumber >= row[0] && ipNumber <= row[1]) {
					resolve(row[2] + '.proxy-nohost');
					return;
				}
			}
			if (
				ip.startsWith('106.76.') || ip.startsWith('106.77.') || ip.startsWith('106.78.') ||
				ip.startsWith('106.79.') || ip.startsWith('112.110.') || ip.startsWith('27.97.') ||
				ip.startsWith('49.15.') || ip.startsWith('49.14.') || ip.startsWith('1.187.')
			) {
				resolve('ideacellular.mobile-nohost');
				return;
			}
			if (exports.IPTools.checkPattern(rangeTmobile, ipNumber) || ip.startsWith('149.254.')) {
				resolve('tmobile.mobile-nohost');
				return;
			}
			if (
				exports.IPTools.checkPattern(rangeCenet, ipNumber) || exports.IPTools.checkPattern(rangeQlded, ipNumber) ||
				ip.startsWith('153.107.') || exports.IPTools.checkPattern(rangeCathednet, ipNumber)
			) {
				resolve('edu.au.res-nohost');
				return;
			}
			if (ip.startsWith('179.7.')) {
				resolve('claro.com.pe.mobile-nohost');
				return;
			}
			if (ip.startsWith('190.') || exports.IPTools.checkPattern(rangeTelefonica, ipNumber)) {
				resolve('telefonica.net.pe.mobile-nohost');
				return;
			}
			if (ip.startsWith('180.191.') || ip.startsWith('112.198.')) {
				resolve('globe.com.ph.mobile-nohost');
				return;
			}
			if (ip.startsWith('218.188.') || ip.startsWith('218.189.')) {
				resolve('hgc.com.hk.mobile-nohost');
				return;
			}
			if (ip.startsWith('172.242.') || ip.startsWith('172.243.')) {
				resolve('viasat.com.mobile-nohost');
				return;
			}
			if (ip.startsWith('201.141.')) {
				resolve('cablevision.net.mx.mobile-nohost');
				return;
			}
			if (exports.IPTools.checkPattern(rangeStarhub, ipNumber)) {
				resolve('starhub.com.mobile-nohost');
				return;
			}
			if (ip.startsWith('202.12.94.') || ip.startsWith('202.12.95.')) {
				resolve('nyp.edu.sg.res-nohost');
				return;
			}
			if (ip.startsWith('64.150.')) {
				resolve('illinois.net.res-nohost');
				return;
			}
			if (ip.startsWith('147.129.')) {
				resolve('ithaca.edu.res-nohost');
				return;
			}
			if (ip.startsWith('189.204.')) {
				resolve('bestel.com.mx.res-nohost');
				return;
			}
			if (exports.IPTools.checkPattern(rangePsci, ipNumber)) {
				resolve('psci.net.res-nohost');
				return;
			}
			if (exports.IPTools.checkPattern(rangeOcde, ipNumber)) {
				resolve('ocde.us.res-nohost');
				return;
			}
			if (exports.IPTools.checkPattern(rangeIhet, ipNumber)) {
				resolve('iu.edu.res-nohost');
				return;
			}
			if (exports.IPTools.checkPattern(rangeTimcelular, ipNumber)) {
				resolve('tim.com.br.mobile-nohost');
				return;
			}
			if (ip.startsWith('121.54.')) {
				resolve('smart.com.ph.mobile-nohost');
				return;
			}
			if (ip.startsWith('179.52.') || ip.startsWith('179.53.')) {
				resolve('codetel.net.do.mobile-nohost');
				return;
			}
			if (ip.startsWith('46.16.36.')) {
				resolve('anchorfree.proxy-nohost');
				return;
			}
			if (
				ip.startsWith('198.144.104.') || ip.startsWith('198.47.115.') || ip.startsWith('199.255.215.') ||
				ip.startsWith('204.14.76.') || ip.startsWith('204.14.77.') || ip.startsWith('204.14.78.') ||
				ip.startsWith('204.14.79.') || ip.startsWith('205.164.32.') || ip.startsWith('209.73.132.') ||
				ip.startsWith('209.73.151.') || ip.startsWith('216.172.135.') || ip.startsWith('46.16.34.') ||
				ip.startsWith('46.16.35.') || ip.startsWith('50.117.45.') || ip.startsWith('63.141.198.') ||
				ip.startsWith('63.141.199.') || ip.startsWith('74.115.1.') || ip.startsWith('74.115.5.') ||
				ip.startsWith('85.237.197.') || ip.startsWith('85.237.222.')
			) {
				resolve('anchorfree.proxy-nohost');
				return;
			}
			if (ip === '127.0.0.1') {
				resolve('localhost');
				return;
			}
			dns.reverse(ip, (err, hosts) => {
				if (err) {
					resolve('' + ip.split('.').slice(0, 2).join('.') + '.unknown-nohost');
					return;
				}
				if (!hosts || !hosts[0]) {
					if (ip.startsWith('50.')) {
						resolve('comcast.net.res-nohost');
					} else if (exports.IPTools.checkPattern(rangeTelstra, ipNumber)) {
						resolve('telstra.net.res-nohost');
					} else {
						resolve('' + ip.split('.').slice(0, 2).join('.') + '.unknown-nohost');
					}
				}
				resolve(hosts[0]);
			});
		});
	}
}, _class); exports.IPTools = IPTools;

const rangeTmobile = exports.IPTools.cidrToPattern('172.32.0.0/11');
const rangeCenet = exports.IPTools.cidrToPattern('27.111.64.0/21');
const rangeQlded = exports.IPTools.cidrToPattern('203.104.0.0/20');
const rangeCathednet = exports.IPTools.cidrToPattern('180.95.40.0/21');
const rangeTelefonica = exports.IPTools.cidrToPattern('181.64.0.0/14');
const rangeStarhub = exports.IPTools.cidrToPattern([
	'27.125.128.0/18', '58.96.192.0/18', '101.127.0.0/17', '116.88.0.0/17', '122.11.192.0/18', '182.19.128.0/17', '182.55.0.0/16', '183.90.0.0/17', '203.116.122.0/23',
]);
const rangeTelstra = exports.IPTools.cidrToPattern('101.160.0.0/11');
const rangePsci = exports.IPTools.cidrToPattern(['96.31.192.0/20', '209.239.96.0/20', '216.49.96.0/19']);
const rangeOcde = exports.IPTools.cidrToPattern(['104.249.64.0/18', '209.232.144.0/20', '216.100.88.0/21']);
const rangeIhet = exports.IPTools.cidrToPattern('199.8.0.0/16');
const rangeTimcelular = exports.IPTools.cidrToPattern('191.128.0.0/12');

const rangeOVHres = exports.IPTools.rangeToPattern([
	'109.190.0.0 - 109.190.63.255', '109.190.64.0 - 109.190.127.255', '109.190.128.0 - 109.190.191.255', '109.190.192.0 - 109.190.255.255', '151.80.228.0 - 151.80.228.255', '178.32.37.0 - 178.32.37.255', '178.33.101.0 - 178.33.101.255', '185.15.68.0 - 185.15.69.255', '185.15.70.0 - 185.15.71.255',
]);
const rangeWindres = exports.IPTools.rangeToPattern([
	'151.3.0.0 - 151.79.255.255', '151.81.0.0 - 151.84.255.255', '151.93.0.0 - 151.93.255.255', '151.95.0.0 - 151.95.255.255', '176.206.0.0 - 176.207.255.255',
]);

exports. default = exports.IPTools;
