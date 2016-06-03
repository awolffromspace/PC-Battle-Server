'use strict';

exports.BattleFormatsData = {
	gengar: {
		inherit: true,
		requiredItem: "Gengarite",
	},
	kangaskhan: {
		inherit: true,
		requiredItem: "Kangaskhanite",
	},
	mawile: {
		inherit: true,
		requiredItem: "Mawilite",
	},
	salamence: {
		inherit: true,
		requiredItem: "Salamencite",
	},
	rayquazamega: {
		randomBattleMoves: ["outrage", "vcreate", "extremespeed", "dragondance", "earthquake", "dracometeor", "dragonclaw"],
		randomDoubleBattleMoves: ["tailwind", "vcreate", "extremespeed", "dragondance", "earthquake", "dracometeor", "dragonclaw", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 70, "shiny": 1, "moves":["fly", "rest", "extremespeed", "outrage"]},
			{"generation": 4, "level": 50, "shiny": 1, "moves":["rest", "airslash", "ancientpower", "outrage"]},
			{"generation": 5, "level": 70, "shiny": true, "moves":["dragonpulse", "ancientpower", "outrage", "dragondance"], "pokeball": "cherishball"},
			{"generation": 5, "level": 100, "moves":["extremespeed", "hyperbeam", "dragonpulse", "vcreate"], "pokeball": "cherishball"},
			{"generation": 6, "level": 70, "moves":["extremespeed", "dragonpulse", "dragondance", "dragonascent"]},
			{"generation": 6, "level": 70, "shiny": true, "moves":["dragonpulse", "thunder", "twister", "extremespeed"], "pokeball": "cherishball"},
			{"generation": 6, "level": 70, "shiny": true, "moves":["dragonascent", "dragonclaw", "extremespeed", "dragondance"], "pokeball": "cherishball"},
		],
		eventOnly: true,
		requiredItem: false,
		tier: "Uber",
	},
	lucario: {
		inherit: true,
		requiredItem: "Lucarionite",
	}
};
