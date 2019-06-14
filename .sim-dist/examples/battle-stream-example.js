"use strict";/**
 * Battle Stream Example
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Example of how to create AIs battling against each other.
 * Run this using `node build && node .sim-dist/examples/battle-stream-example`.
 *
 * @license MIT
 * @author Guangcong Luo <guangcongluo@gmail.com>
 */

var _battlestream = require('../battle-stream');
var _dex = require('../dex');
var _randomplayerai = require('../tools/random-player-ai');

/*********************************************************************
 * Run AI
 *********************************************************************/
// tslint:disable:no-floating-promises

const streams = _battlestream.getPlayerStreams.call(void 0, new (0, _battlestream.BattleStream)());

const spec = {
	formatid: "gen7customgame",
};
const p1spec = {
	name: "Bot 1",
	team: _dex.Dex.packTeam(_dex.Dex.generateTeam('gen7randombattle')),
};
const p2spec = {
	name: "Bot 2",
	team: _dex.Dex.packTeam(_dex.Dex.generateTeam('gen7randombattle')),
};

const p1 = new (0, _randomplayerai.RandomPlayerAI)(streams.p1);
const p2 = new (0, _randomplayerai.RandomPlayerAI)(streams.p2);

console.log("p1 is " + p1.constructor.name);
console.log("p2 is " + p2.constructor.name);

p1.start();
p2.start();

(async () => {
	let chunk;
	// tslint:disable-next-line no-conditional-assignment
	while ((chunk = await streams.omniscient.read())) {
		console.log(chunk);
	}
})();

streams.omniscient.write(`>start ${JSON.stringify(spec)}
>player p1 ${JSON.stringify(p1spec)}
>player p2 ${JSON.stringify(p2spec)}`);
