'use strict';

exports.BattleFormatsData = {
	venusaur: {
		inherit: true,
		requiredItem: "Venusaurite",
	},
	charizard: {
		inherit: true,
		requiredItem: "Charizardite X",
	},
	blastoise: {
		inherit: true,
		requiredItem: "Blastoisinite",
	},
	beedrill: {
		inherit: true,
		requiredItem: "Beedrillite",
	},
	pidgeot: {
		inherit: true,
		requiredItem: "Pidgeotite",
	},
	gengarmega: {
		randomBattleMoves: ["shadowball", "sludgewave", "focusblast", "substitute", "disable", "painsplit", "willowisp"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "focusblast", "substitute", "disable", "taunt", "hypnosis", "willowisp", "dazzlinggleam", "protect"],
		eventPokemon: [
			{"generation": 3, "level": 23, "gender": "F", "nature": "Hardy", "ivs": {"hp": 19, "atk": 14, "def": 0, "spa": 14, "spd": 17, "spe": 27}, "moves":["spite", "curse", "nightshade", "confuseray"]},
			{"generation": 6, "level": 25, "nature": "Timid", "moves":["psychic", "confuseray", "suckerpunch", "shadowpunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "moves":["nightshade", "confuseray", "suckerpunch", "shadowpunch"], "pokeball": "cherishball"},
			{"generation": 6, "level": 50, "moves":["shadowball", "sludgebomb", "willowisp", "destinybond"], "pokeball": "cherishball"},
			{"generation": 6, "level": 25, "shiny": true, "moves":["shadowball", "sludgewave", "confuseray", "astonish"], "pokeball": "duskball"},
		],
		requiredItem: false,
		tier: "OU",
	},
	pinsir: {
		inherit: true,
		requiredItem: "Pinsirite",
	},
	aerodactyl: {
		inherit: true,
		requiredItem: "Aerodactylite",
	},
	ampharos: {
		inherit: true,
		requiredItem: "Ampharosite",
	},
	houndoom: {
		inherit: true,
		requiredItem: "Houndoominite",
	},
	sceptile: {
		inherit: true,
		requiredItem: "Sceptilite",
	},
	gallade: {
		inherit: true,
		requiredItem: "Galladite",
	},
	aggron: {
		inherit: true,
		requiredItem: "Aggronite",
	},
	medicham: {
		inherit: true,
		requiredItem: "Medichamite",
	},
	manectric: {
		inherit: true,
		requiredItem: "Manectite",
	},
	sharpedo: {
		inherit: true,
		requiredItem: "Sharpedonite",
	},
	altaria: {
		inherit: true,
		requiredItem: "Altarianite",
	},
	absol: {
		inherit: true,
		requiredItem: "Absolite",
	},
	salamencemega: {
		randomBattleMoves: ["outrage", "fireblast", "earthquake", "dracometeor", "dragondance", "dragonclaw"],
		randomDoubleBattleMoves: ["protect", "fireblast", "earthquake", "dracometeor", "tailwind", "dragondance", "dragonclaw", "hydropump", "rockslide"],
		eventPokemon: [
			{"generation": 3, "level": 50, "moves":["protect", "dragonbreath", "scaryface", "fly"]},
			{"generation": 3, "level": 50, "moves":["refresh", "dragonclaw", "dragondance", "aerialace"]},
			{"generation": 4, "level": 50, "gender": "M", "nature": "Naughty", "moves":["hydropump", "stoneedge", "fireblast", "dragonclaw"], "pokeball": "cherishball"},
			{"generation": 5, "level": 50, "shiny": 1, "isHidden": false, "moves":["dragondance", "dragonclaw", "outrage", "aerialace"], "pokeball": "cherishball"},
		],
		requiredItem: false,
		tier: "UU",
	},
	lopunny: {
		inherit: true,
		requiredItem: "Lopunnite",
	},
	lucariomega: {
		randomBattleMoves: ["swordsdance", "closecombat", "crunch", "extremespeed", "icepunch", "nastyplot", "aurasphere", "darkpulse", "vacuumwave", "flashcannon"],
		randomDoubleBattleMoves: ["followme", "closecombat", "crunch", "extremespeed", "icepunch", "bulletpunch", "aurasphere", "darkpulse", "vacuumwave", "flashcannon", "protect"],
		eventPokemon: [
			{"generation": 4, "level": 50, "gender": "M", "nature": "Modest", "abilities":["steadfast"], "moves":["aurasphere", "darkpulse", "dragonpulse", "waterpulse"], "pokeball": "cherishball"},
			{"generation": 4, "level": 30, "gender": "M", "nature": "Adamant", "abilities":["innerfocus"], "moves":["forcepalm", "bonerush", "sunnyday", "blazekick"], "pokeball": "cherishball"},
			{"generation": 5, "level": 10, "gender": "M", "isHidden": true, "moves":["detect", "metalclaw", "counter", "bulletpunch"]},
			{"generation": 5, "level": 50, "gender": "M", "nature": "Naughty", "ivs": {"atk": 31}, "isHidden": true, "moves":["bulletpunch", "closecombat", "stoneedge", "shadowclaw"], "pokeball": "cherishball"},
			{"generation": 6, "level": 100, "nature": "Jolly", "isHidden": false, "abilities":["innerfocus"], "moves":["closecombat", "aurasphere", "flashcannon", "quickattack"], "pokeball": "cherishball"},
		],
		requiredItem: false,
		tier: "UU",
	},
	abomasnow: {
		inherit: true,
		requiredItem: "Abomasite",
	},
	diancie: {
		inherit: true,
		requiredItem: "Diancite",
	},
};
