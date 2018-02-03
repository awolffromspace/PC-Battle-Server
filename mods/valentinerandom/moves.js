'use strict';

exports.BattleMovedex = {
	attract: {
		inherit: true,
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (pokemon, source, effect) {
				if (!this.runEvent('Attract', pokemon, source)) {
					this.debug('Attract event failed');
					return false;
				}

				if (effect.id === 'cutecharm') {
					this.add('-start', pokemon, 'Attract', '[from] ability: Cute Charm', '[of] ' + source);
				} else if (effect.id === 'destinyknot') {
					this.add('-start', pokemon, 'Attract', '[from] item: Destiny Knot', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Attract');
				}
			},
			onUpdate: function (pokemon) {
				if (this.effectData.source && !this.effectData.source.isActive && pokemon.volatiles['attract']) {
					this.debug('Removing Attract volatile on ' + pokemon);
					pokemon.removeVolatile('attract');
				}
			},
			onBeforeMovePriority: 2,
			onBeforeMove: function (pokemon, target, move) {
				this.add('-activate', pokemon, 'move: Attract', '[of] ' + this.effectData.source);
				if (this.random(2) === 0) {
					this.add('cant', pokemon, 'Attract');
					return false;
				}
			},
			onEnd: function (pokemon) {
				this.add('-end', pokemon, 'Attract', '[silent]');
			},
		},
	},
};