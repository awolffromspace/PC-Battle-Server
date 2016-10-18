'use strict';

exports.BattleMovedex = {
	"trickotreat": {
		num: -1,
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "trickotreat",
		name: "Trick-o-Treat",
		pp: 20,
		priority: 0,
		flags: {authentic: 1},
		volatileStatus: 'curse',
		onTryHit: function (target, source, move) {
			var rand = this.random(9);
			if (rand < 3 && target.hp < target.maxhp) {
				delete move.volatileStatus;
				delete move.onHit;
				move.heal = [1, 4];
			} else if (rand === 3) {
				target.trySetStatus('brn', source);
			} else if (rand === 4) {
				target.trySetStatus('par', source);
			} else if (rand === 5) {
				target.trySetStatus('slp', source);
			} else if (rand === 6) {
				target.trySetStatus('frz', source);
			} else if (rand === 7) {
				target.trySetStatus('tox', source);
			} else if (rand === 8) {
				target.trySetStatus('confusion', source);
			} else if (rand === 9 && move.volatileStatus && target.volatiles.curse) {
				return false;
			}
		},
		effect: {
			onStart: function (pokemon, source) {
				this.add('-start', pokemon, 'Curse', '[of] ' + source);
			},
			onResidualOrder: 10,
			onResidual: function (pokemon) {
				this.damage(pokemon.maxhp / 4);
			},
		},
		secondary: false,
		target: "normal",
		type: "Ghost"
	},
};
