"use strict";Object.defineProperty(exports, "__esModule", {value: true});/**
 * Simulator Battle
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * @license MIT license
 */

 class Tools {
	/**
	 * Safely converts the passed variable into a string. Unlike '' + str,
	 * String(str), or str.toString(), Dex.getString is guaranteed not to
	 * crash.
	 *
	 * Specifically, the fear with untrusted JSON is an object like:
	 *
	 *     let a = {"toString": "this is not a function"};
	 *     console.log(`a is ${a}`);
	 *
	 * This will crash (because a.toString() is not a function). Instead,
	 * Dex.getString simply returns '' if the passed variable isn't a
	 * string or a number.
	 */
	static getString(str) {
		return (typeof str === 'string' || typeof str === 'number') ? '' + str : '';
	}

	/**
	 * Converts anything to an ID. An ID must have only lowercase alphanumeric
	 * characters.
	 *
	 * If a string is passed, it will be converted to lowercase and
	 * non-alphanumeric characters will be stripped.
	 *
	 * If an object with an ID is passed, its ID will be returned.
	 * Otherwise, an empty string will be returned.
	 *
	 * Dex.getId is generally assigned to the global toID, because of how
	 * commonly it's used.
	 */
	static getId(text) {
		if (text && text.id) {
			text = text.id;
		} else if (text && text.userid) {
			text = text.userid;
		}
		if (typeof text !== 'string' && typeof text !== 'number') return '';
		return ('' + text).toLowerCase().replace(/[^a-z0-9]+/g, '') ;
	}
} exports.Tools = Tools;
const toID = Tools.getId;

 class BasicEffect  {
	/**
	 * ID. This will be a lowercase version of the name with all the
	 * non-alphanumeric characters removed. So, for instance, "Mr. Mime"
	 * becomes "mrmime", and "Basculin-Blue-Striped" becomes
	 * "basculinbluestriped".
	 */
	
	/**
	 * Name. Currently does not support Unicode letters, so "Flabébé"
	 * is "Flabebe" and "Nidoran♀" is "Nidoran-F".
	 */
	
	/**
	 * Full name. Prefixes the name with the effect type. For instance,
	 * Leftovers would be "item: Leftovers", confusion the status
	 * condition would be "confusion", etc.
	 */
	
	/** Effect type. */
	
	/**
	 * Does it exist? For historical reasons, when you use an accessor
	 * for an effect that doesn't exist, you get a dummy effect that
	 * doesn't do anything, and this field set to false.
	 */
	
	/**
	 * Dex number? For a Pokemon, this is the National Dex number. For
	 * other effects, this is often an internal ID (e.g. a move
	 * number). Not all effects have numbers, this will be 0 if it
	 * doesn't. Nonstandard effects (e.g. CAP effects) will have
	 * negative numbers.
	 */
	
	/**
	 * The generation of Pokemon game this was INTRODUCED (NOT
	 * necessarily the current gen being simulated.) Not all effects
	 * track generation; this will be 0 if not known.
	 */
	
	/**
	 * Is this item/move/ability/pokemon unreleased? True if there's
	 * no known way to get access to it without cheating.
	 */
	
	/**
	 * A shortened form of the description of this effect.
	 * Not all effects have this.
	 */
	
	/** The full description for this effect. */
	
	/**
	 * Is this item/move/ability/pokemon nonstandard? Specified for effects
	 * that have no use in standard formats: made-up pokemon (CAP),
	 * glitches (Missingno etc), Pokestar pokemon, etc.
	 */
	
	/** The duration of the effect.  */
	
	/** Whether or not the effect is ignored by Baton Pass. */
	
	/** Whether or not the effect affects fainted Pokemon. */
	
	/** The status that the effect may cause. */
	
	/** The weather that the effect may cause. */
	
	/** HP that the effect may drain. */
	
	
	

	constructor(data, ...moreData) {
		this.exists = true;
		data = combine(this, data, ...moreData);

		this.name = Tools.getString(data.name).trim();
		this.id = data.id  || toID(this.name); // Hidden Power hack
		this.fullname = Tools.getString(data.fullname) || this.name;
		this.effectType = Tools.getString(data.effectType)  || 'Effect';
		this.exists = !!(this.exists && this.id);
		this.num = data.num || 0;
		this.gen = data.gen || 0;
		this.isUnreleased = data.isUnreleased || false;
		this.shortDesc = data.shortDesc || '';
		this.desc = data.desc || '';
		this.isNonstandard = data.isNonstandard || null;
		this.duration = data.duration;
		this.noCopy = !!data.noCopy;
		this.affectsFainted = !!data.affectsFainted;
		this.status = data.status  || undefined;
		this.weather = data.weather  || undefined;
		this.drain = data.drain || undefined;
		this.flags = data.flags || {};
		this.sourceEffect = data.sourceEffect || '';
	}

	toString() {
		return this.name;
	}
} exports.BasicEffect = BasicEffect;

/** rule, source, limit, bans */



/**
 * A RuleTable keeps track of the rules that a format has. The key can be:
 * - '[ruleid]' the ID of a rule in effect
 * - '-[thing]' or '-[category]:[thing]' ban a thing
 * - '+[thing]' or '+[category]:[thing]' allow a thing (override a ban)
 * [category] is one of: item, move, ability, species, basespecies
 */
 class RuleTable extends Map {
	
	
	// tslint:disable-next-line:ban-types
	

	constructor() {
		super();
		this.complexBans = [];
		this.complexTeamBans = [];
		this.checkLearnset = null;
	}

	check(thing, setHas = null) {
		if (setHas) setHas[thing] = true;
		return this.getReason(`-${thing}`);
	}

	getReason(key) {
		const source = this.get(key);
		if (source === undefined) return '';
		return source ? `banned by ${source}` : `banned`;
	}

	getComplexBanIndex(complexBans, rule) {
		const ruleId = toID(rule);
		let complexBanIndex = -1;
		for (let i = 0; i < complexBans.length; i++) {
			if (toID(complexBans[i][0]) === ruleId) {
				complexBanIndex = i;
				break;
			}
		}
		return complexBanIndex;
	}

	addComplexBan(rule, source, limit, bans) {
		const complexBanIndex = this.getComplexBanIndex(this.complexBans, rule);
		if (complexBanIndex !== -1) {
			if (this.complexBans[complexBanIndex][2] === Infinity) return;
			this.complexBans[complexBanIndex] = [rule, source, limit, bans];
		} else {
			this.complexBans.push([rule, source, limit, bans]);
		}
	}

	addComplexTeamBan(rule, source, limit, bans) {
		const complexBanTeamIndex = this.getComplexBanIndex(this.complexTeamBans, rule);
		if (complexBanTeamIndex !== -1) {
			if (this.complexTeamBans[complexBanTeamIndex][2] === Infinity) return;
			this.complexTeamBans[complexBanTeamIndex] = [rule, source, limit, bans];
		} else {
			this.complexTeamBans.push([rule, source, limit, bans]);
		}
	}
} exports.RuleTable = RuleTable;



 class Format extends BasicEffect  {
	
	/**
	 * Name of the team generator algorithm, if this format uses
	 * random/fixed teams. null if players can bring teams.
	 */
	
	
	
	/**
	 * Whether or not a format will update ladder points if searched
	 * for using the "Battle!" button.
	 * (Challenge and tournament games will never update ladder points.)
	 * (Defaults to `true`.)
	 */
	
	/** Game type. */
	
	/** List of rule names. */
	
	/**
	 * Base list of rule names as specified in "./config/formats.js".
	 * Used in a custom format to correctly display the altered ruleset.
	 */
	
	/** List of banned effects. */
	
	/** List of inherited banned effects to override. */
	
	/** List of ruleset and banlist changes in a custom format. */
	
	/** Table of rule names and banned effects. */
	
	/**
	 * The number of Pokemon players can bring to battle and
	 * the number that can actually be used.
	 */
	
	/** An optional function that runs at the start of a battle. */
	
	/**
	 * If no team is selected, this format can generate a random team
	 * for the player.
	 */
	
	/** Pokemon must be obtained from Gen 6 or later. */
	
	/** Pokemon must be obtained from Gen 7 or later. */
	
	/**
	 * Maximum possible level pokemon you can bring. Note that this is
	 * still 100 in VGC, because you can bring level 100 pokemon,
	 * they'll just be set to level 50. Can be above 100 in special
	 * formats.
	 */
	
	/**
	 * Default level of a pokemon without level specified. Mainly
	 * relevant to Custom Game where the default level is still 100
	 * even though higher level pokemon can be brought.
	 */
	
	/**
	 * Forces all pokemon brought in to this level. Certain Game Freak
	 * formats will change level 1 and level 100 pokemon to level 50,
	 * which is what this does.
	 *
	 * You usually want maxForcedLevel instead, which will bring level
	 * 100 pokemon down, but not level 1 pokemon up.
	 */
	
	/**
	 * Forces all pokemon above this level down to this level. This
	 * will allow e.g. level 50 Hydreigon in Gen 5, which is not
	 * normally legal because Hydreigon doesn't evolve until level
	 * 64.
	 */
	
	

	constructor(data, ...moreData) {
		super(data, ...moreData);
		data = this;

		this.mod = Tools.getString(data.mod) || 'gen7';
		this.effectType = Tools.getString(data.effectType)  || 'Format';
		this.debug = !!data.debug;
		this.rated = (data.rated !== false);
		this.gameType = data.gameType || 'singles';
		this.ruleset = data.ruleset || [];
		this.baseRuleset = data.baseRuleset || [];
		this.banlist = data.banlist || [];
		this.unbanlist = data.unbanlist || [];
		this.customRules = data.customRules || null;
		this.ruleTable = null;
		this.teamLength = data.teamLength || undefined;
		this.onBegin = data.onBegin || undefined;
		this.canUseRandomTeam = !!data.canUseRandomTeam;
		this.requirePentagon = !!data.requirePentagon;
		this.requirePlus = !!data.requirePlus;
		this.maxLevel = data.maxLevel || 100;
		this.defaultLevel = data.defaultLevel || this.maxLevel;
		this.forcedLevel = data.forcedLevel || undefined;
		this.maxForcedLevel = data.maxForcedLevel || undefined;
		this.noLog = !!data.noLog;
	}
} exports.Format = Format;

 class PureEffect extends BasicEffect  {
	

	constructor(data, ...moreData) {
		super(data, ...moreData);
		data = this;
		this.effectType = (['Weather', 'Status'].includes(data.effectType) ? data.effectType : 'Effect');
	}
} exports.PureEffect = PureEffect;

 class Item extends BasicEffect  {
	
	/**
	 * A Move-like object depicting what happens when Fling is used on
	 * this item.
	 */
	
	/**
	 * If this is a Drive: The type it turns Techno Blast into.
	 * undefined, if not a Drive.
	 */
	
	/**
	 * If this is a Memory: The type it turns Multi-Attack into.
	 * undefined, if not a Memory.
	 */
	
	/**
	 * If this is a mega stone: The name (e.g. Charizard-Mega-X) of the
	 * forme this allows transformation into.
	 * undefined, if not a mega stone.
	 */
	
	/**
	 * If this is a mega stone: The name (e.g. Charizard) of the
	 * forme this allows transformation from.
	 * undefined, if not a mega stone.
	 */
	
	/**
	 * If this is a Z crystal: true if the Z Crystal is generic
	 * (e.g. Firium Z). If species-specific, the name
	 * (e.g. Inferno Overdrive) of the Z Move this crystal allows
	 * the use of.
	 * undefined, if not a Z crystal.
	 */
	
	/**
	 * If this is a generic Z crystal: The type (e.g. Fire) of the
	 * Z Move this crystal allows the use of (e.g. Fire)
	 * undefined, if not a generic Z crystal
	 */
	
	/**
	 * If this is a species-specific Z crystal: The name
	 * (e.g. Play Rough) of the move this crystal requires its
	 * holder to know to use its Z move.
	 * undefined, if not a species-specific Z crystal
	 */
	
	/**
	 * If this is a species-specific Z crystal: An array of the
	 * species of Pokemon that can use this crystal's Z move.
	 * Note that these are the full names, e.g. 'Mimikyu-Busted'
	 * undefined, if not a species-specific Z crystal
	 */
	
	/** Is this item a Berry? */
	
	/** Whether or not this item ignores the Klutz ability. */
	
	/** The type the holder will change into if it is an Arceus. */
	
	/** Is this item a Gem? */
	

	constructor(data, ...moreData) {
		super(data, ...moreData);
		data = this;

		this.fullname = `item: ${this.name}`;
		this.effectType = 'Item';
		this.fling = data.fling || undefined;
		this.onDrive = data.onDrive || undefined;
		this.onMemory = data.onMemory || undefined;
		this.megaStone = data.megaStone || undefined;
		this.megaEvolves = data.megaEvolves || undefined;
		this.zMove = data.zMove || undefined;
		this.zMoveType = data.zMoveType || undefined;
		this.zMoveFrom = data.zMoveFrom || undefined;
		this.zMoveUser = data.zMoveUser || undefined;
		this.isBerry = !!data.isBerry;
		this.ignoreKlutz = !!data.ignoreKlutz;
		this.onPlate = data.onPlate || undefined;
		this.isGem = !!data.isGem;

		if (!this.gen) {
			if (this.num >= 689) {
				this.gen = 7;
			} else if (this.num >= 577) {
				this.gen = 6;
			} else if (this.num >= 537) {
				this.gen = 5;
			} else if (this.num >= 377) {
				this.gen = 4;
			} else {
				this.gen = 3;
			}
			// Due to difference in gen 2 item numbering, gen 2 items must be
			// specified manually
		}

		if (this.isBerry) this.fling = {basePower: 10};
		if (this.id.endsWith('plate')) this.fling = {basePower: 90};
		if (this.onDrive) this.fling = {basePower: 70};
		if (this.megaStone) this.fling = {basePower: 80};
		if (this.onMemory) this.fling = {basePower: 50};
	}
} exports.Item = Item;

 class Ability extends BasicEffect  {
	
	/** Represents how useful or detrimental this ability is. */
	
	/** Whether or not this ability suppresses weather. */
	

	constructor(data, ...moreData) {
		super(data, ...moreData);
		data = this;

		this.fullname = `ability: ${this.name}`;
		this.effectType = 'Ability';
		this.suppressWeather = !!data.suppressWeather;
		this.rating = data.rating;

		if (!this.gen) {
			if (this.num >= 192) {
				this.gen = 7;
			} else if (this.num >= 165) {
				this.gen = 6;
			} else if (this.num >= 124) {
				this.gen = 5;
			} else if (this.num >= 77) {
				this.gen = 4;
			} else if (this.num >= 1) {
				this.gen = 3;
			}
		}
	}
} exports.Ability = Ability;

 class Template extends BasicEffect  {
	
	/**
	 * Species ID. Identical to ID. Note that this is the full ID, e.g.
	 * 'basculinbluestriped'. To get the base species ID, you need to
	 * manually read toID(template.baseSpecies).
	 */
	
	/**
	 * Species. Identical to name. Note that this is the full name,
	 * e.g. 'Basculin-Blue-Striped'. To get the base species name, see
	 * template.baseSpecies.
	 */
	
	
	/**
	 * Base species. Species, but without the forme name.
	 */
	
	/**
	 * Forme name. If the forme exists,
	 * `template.species === template.baseSpecies + '-' + template.forme`
	 */
	
	/**
	 * Other forms. List of names of cosmetic forms. These should have
	 * `aliases.js` aliases to this entry, but not have their own
	 * entry in `pokedex.js`.
	 */
	
	/**
	 * Other formes. List of names of formes, appears only on the base
	 * forme. Unlike forms, these have their own entry in `pokedex.js`.
	 */
	
	/**
	 * Forme letter. One-letter version of the forme name. Usually the
	 * first letter of the forme, but not always - e.g. Rotom-S is
	 * Rotom-Fan because Rotom-F is Rotom-Frost.
	 */
	
	/**
	 * Sprite ID. Basically the same as ID, but with a dash between
	 * species and forme.
	 */
	
	/** Abilities. */
	
	/** Types. */
	
	/** Added type (used in OMs). */
	
	/** Pre-evolution. '' if nothing evolves into this Pokemon. */
	
	/**
	 * Singles Tier. The Pokemon's location in the Smogon tier system.
	 * Do not use for LC bans.
	 */
	
	/**
	 * Doubles Tier. The Pokemon's location in the Smogon doubles tier system.
	 * Do not use for LC bans.
	 */
	
	/** Evolutions. Array because many Pokemon have multiple evolutions. */
	
	/** Evolution level. falsy if doesn't evolve. */
	
	/** Is NFE? True if this Pokemon can evolve (Mega evolution doesn't count). */
	
	/** Egg groups. */
	
	/**
	 * Gender. M = always male, F = always female, N = always
	 * genderless, '' = sometimes male sometimes female.
	 */
	
	/** Gender ratio. Should add up to 1 unless genderless. */
	
	/** Required item. Do not use this directly; see requiredItems. */
	
	/**
	 * Required items. Items required to be in this forme, e.g. a mega
	 * stone, or Griseous Orb. Array because Arceus formes can hold
	 * either a Plate or a Z-Crystal.
	 */
	
	/** Base stats. */
	
	/** Weight (in kg). */
	
	/** Height (in m). */
	
	/** Color. */
	
	/** Does this Pokemon have an unreleased hidden ability? */
	
	/**
	 * Is it only possible to get the hidden ability on a male pokemon?
	 * This is mainly relevant to Gen 5.
	 */
	
	/** Max HP. Used in the battle engine. */
	
	/**
	 * Keeps track of exactly how a pokemon might learn a move, in the
	 * form moveid:sources[].
	 */
	
	/** True if the only way to get this pokemon is from events. */
	
	/** List of event data for each event. */
	 
	/** True if a pokemon is mega. */
	
	/** True if a pokemon is primal. */
	
	/** True if a pokemon is a forme that is only accessible in battle. */
	

	constructor(data, ...moreData) {
		super(data, ...moreData);
		data = this;

		this.fullname = `pokemon: ${data.name}`;
		this.effectType = 'Pokemon';
		this.speciesid = data.speciesid  || this.id;
		this.species = data.species || data.name;
		this.name = data.species;
		this.baseSpecies = data.baseSpecies || this.name;
		this.forme = data.forme || '';
		this.otherForms = data.otherForms || undefined;
		this.otherFormes = data.otherFormes || undefined;
		this.formeLetter = data.formeLetter || '';
		this.spriteid = data.spriteid ||
			(toID(this.baseSpecies) + (this.baseSpecies !== this.name ? `-${toID(this.forme)}` : ''));
		this.abilities = data.abilities || {0: ""};
		this.types = data.types;
		this.addedType = data.addedType || undefined;
		this.prevo = data.prevo || '';
		this.tier = data.tier || '';
		this.doublesTier = data.doublesTier || '';
		this.evos = data.evos || [];
		this.evoLevel = data.evoLevel || undefined;
		this.nfe = !!this.evos.length;
		this.eggGroups = data.eggGroups || [];
		this.gender = data.gender || '';
		this.genderRatio = data.genderRatio || (this.gender === 'M' ? {M: 1, F: 0} :
			this.gender === 'F' ? {M: 0, F: 1} :
				this.gender === 'N' ? {M: 0, F: 0} :
					{M: 0.5, F: 0.5});
		this.requiredItem = data.requiredItem || undefined;
		this.requiredItems = this.requiredItems || (this.requiredItem ? [this.requiredItem] : undefined);
		this.baseStats = data.baseStats;
		this.weightkg = data.weightkg;
		this.heightm = data.heightm;
		this.color = data.color || '';
		this.unreleasedHidden = !!data.unreleasedHidden;
		this.maleOnlyHidden = !!data.maleOnlyHidden;
		this.maxHP = data.maxHP || undefined;
		this.learnset = data.learnset || undefined;
		this.eventOnly = !!data.eventOnly;
		this.eventPokemon = data.eventPokemon || undefined;
		this.isMega = !!(this.forme && ['Mega', 'Mega-X', 'Mega-Y'].includes(this.forme)) || undefined;
		this.battleOnly = !!data.battleOnly || !!this.isMega || undefined;

		if (!this.gen && this.num >= 1) {
			if (this.num >= 722 || this.forme.startsWith('Alola')) {
				this.gen = 7;
			} else if (this.forme === 'Primal') {
				this.gen = 6;
				this.isPrimal = true;
				this.battleOnly = true;
			} else if (this.num >= 650 || this.isMega) {
				this.gen = 6;
			} else if (this.num >= 494) {
				this.gen = 5;
			} else if (this.num >= 387) {
				this.gen = 4;
			} else if (this.num >= 252) {
				this.gen = 3;
			} else if (this.num >= 152) {
				this.gen = 2;
			} else {
				this.gen = 1;
			}
		}
	}
} exports.Template = Template;

/** Possible move flags. */


























 class Move extends BasicEffect  {
	
	/** Move type. */
	
	/** Move target. */
	
	/** Move base power. */
	
	/** Move base accuracy. True denotes a move that always hits. */
	
	/** Critical hit ratio. Defaults to 1. */
	
	/** Will this move always or never be a critical hit? */
	
	/** Can this move OHKO foes? */
	
	/**
	 * Base move type. This is the move type as specified by the games,
	 * tracked because it often differs from the real move type.
	 */
	
	/**
	 * Secondary effect. You usually don't want to access this
	 * directly; but through the secondaries array.
	 */
	
	/**
	 * Secondary effects. An array because there can be more than one
	 * (for instance, Fire Fang has both a burn and a flinch
	 * secondary).
	 */
	
	/**
	 * Move priority. Higher priorities go before lower priorities,
	 * trumping the Speed stat.
	 */
	
	/** Move category. */
	
	/**
	 * Category that changes which defense to use when calculating
	 * move damage.
	 */
	
	/** Whether or not this move uses the target's boosts. */
	
	/** Whether or not this move uses the user's boosts. */
	
	/** Whether or not this move ignores negative attack boosts. */
	
	/** Whether or not this move ignores positive defense boosts. */
	
	/** Whether or not this move ignores attack boosts. */
	
	/** Whether or not this move ignores defense boosts. */
	
	/**
	 * Whether or not this move ignores type immunities. Defaults to
	 * true for Status moves and false for Physical/Special moves.
	 */
	
	/** Base move PP. */
	
	/** Whether or not this move can receive PP boosts. */
	
	/** Is this move a Z-Move? */
	
	
	/** Whether or not the user must switch after using this move. */
	
	/** Move target only used by Pressure. */
	
	/** Move target used if the user is not a Ghost type (for Curse). */
	
	/** Whether or not the move ignores abilities. */
	
	/**
	 * Move damage against the current target
	 * false = move will always fail with "But it failed!"
	 * null = move will always silently fail
	 * undefined = move does not deal fixed damage
	 */
	
	/** Whether or not this move hit multiple targets. */
	
	/** Modifier that affects damage when multiple targets are hit. */
	
	/**  Modifier that affects damage when this move is a critical hit. */
	
	/** Forces the move to get STAB even if the type doesn't match. */
	
	/** True if it can't be copied with Sketch. */
	
	/** STAB multiplier (can be modified by other effects) (default 1.5). */
	

	

	constructor(data, ...moreData) {
		super(data, ...moreData);
		data = this;

		this.fullname = `move: ${this.name}`;
		this.effectType = 'Move';
		this.type = Tools.getString(data.type);
		this.target = Tools.getString(data.target);
		this.basePower = Number(data.basePower);
		this.accuracy = data.accuracy;
		this.critRatio = Number(data.critRatio) || 1;
		this.baseMoveType = Tools.getString(data.baseMoveType) || this.type;
		this.secondary = data.secondary || null;
		this.secondaries = data.secondaries || (this.secondary && [this.secondary]) || null;
		this.priority = Number(data.priority) || 0;
		this.category = data.category;
		this.defensiveCategory = data.defensiveCategory || undefined;
		this.useTargetOffensive = !!data.useTargetOffensive;
		this.useSourceDefensive = !!data.useSourceDefensive;
		this.ignoreNegativeOffensive = !!data.ignoreNegativeOffensive;
		this.ignorePositiveDefensive = !!data.ignorePositiveDefensive;
		this.ignoreOffensive = !!data.ignoreOffensive;
		this.ignoreDefensive = !!data.ignoreDefensive;
		this.ignoreImmunity = (data.ignoreImmunity !== undefined ? data.ignoreImmunity : this.category === 'Status');
		this.pp = Number(data.pp);
		this.noPPBoosts = !!data.noPPBoosts;
		this.isZ = data.isZ || false;
		this.flags = data.flags || {};
		this.selfSwitch = (typeof data.selfSwitch === 'string' ? (data.selfSwitch ) : data.selfSwitch) || undefined;
		this.pressureTarget = data.pressureTarget || '';
		this.nonGhostTarget = data.nonGhostTarget || '';
		this.ignoreAbility = data.ignoreAbility || false;
		this.damage = data.damage;
		this.spreadHit = data.spreadHit || false;
		this.forceSTAB = !!data.forceSTAB;
		this.noSketch = !!data.noSketch;
		this.stab = data.stab || undefined;
		this.volatileStatus = typeof data.volatileStatus === 'string' ? (data.volatileStatus ) : undefined;

		if (!this.gen) {
			if (this.num >= 622) {
				this.gen = 7;
			} else if (this.num >= 560) {
				this.gen = 6;
			} else if (this.num >= 468) {
				this.gen = 5;
			} else if (this.num >= 355) {
				this.gen = 4;
			} else if (this.num >= 252) {
				this.gen = 3;
			} else if (this.num >= 166) {
				this.gen = 2;
			} else if (this.num >= 1) {
				this.gen = 1;
			}
		}
	}
} exports.Move = Move;



 class TypeInfo  {
	/**
	 * ID. This will be a lowercase version of the name with all the
	 * non-alphanumeric characters removed. e.g. 'flying'
	 */
	
	/** Name. e.g. 'Flying' */
	
	/** Effect type. */
	
	/**
	 * Does it exist? For historical reasons, when you use an accessor
	 * for an effect that doesn't exist, you get a dummy effect that
	 * doesn't do anything, and this field set to false.
	 */
	
	/**
	 * The generation of Pokemon game this was INTRODUCED (NOT
	 * necessarily the current gen being simulated.) Not all effects
	 * track generation; this will be 0 if not known.
	 */
	
	/**
	 * Type chart, attackingTypeName:result, effectid:result
	 * result is: 0 = normal, 1 = weakness, 2 = resistance, 3 = immunity
	 */
	
	/** The IVs to get this Type Hidden Power (in gen 3 and later) */
	
	/** The DVs to get this Type Hidden Power (in gen 2). */
	

	constructor(data, ...moreData) {
		this.exists = true;
		data = combine(this, data, ...moreData);

		this.id = data.id || '';
		this.name = Tools.getString(data.name).trim();
		this.effectType = Tools.getString(data.effectType)  || 'Type';
		this.exists = !!(this.exists && this.id);
		this.gen = data.gen || 0;
		this.damageTaken = data.damageTaken || {};
		this.HPivs = data.HPivs || {};
		this.HPdvs = data.HPdvs || {};
	}

	toString() {
		return this.name;
	}
} exports.TypeInfo = TypeInfo;

function combine(obj, ...data) {
	for (const d of data) {
		if (d) Object.assign(obj, d);
	}
	return obj;
}

// export class PokemonSet {
// 	/**
// 	 * The Pokemon's set's nickname, which is identical to its base
// 	 * species if not specified by the player, e.g. "Minior".
// 	 */
// 	name: string;
// 	/**
// 	 * The Pokemon's species, e.g. "Minior-Red".
// 	 * This should always be converted to an id before use.
// 	 */
// 	species: string;
// 	/**
// 	 * The Pokemon's set's item. This can be an id, e.g. "whiteherb"
// 	 * or a full name, e.g. "White Herb".
// 	 * This should always be converted to an id before use.
// 	 */
// 	item: string;
// 	/**
// 	 * The Pokemon's set's ability. This can be an id, e.g. "shieldsdown"
// 	 * or a full name, e.g. "Shields Down".
// 	 * This should always be converted to an id before use.
// 	 */
// 	ability: string;
// 	/**
// 	 * An array of the Pokemon's set's moves. Each move can be an id,
// 	 * e.g. "shellsmash" or a full name, e.g. "Shell Smash"
// 	 * These should always be converted to ids before use.
// 	 */
// 	moves: string[];
// 	/**
// 	 * The Pokemon's set's nature. This can be an id, e.g. "adamant"
// 	 * or a full name, e.g. "Adamant".
// 	 * This should always be converted to an id before use.
// 	 */
// 	nature: string;
// 	/**
// 	 * The Pokemon's set's gender.
// 	 */
// 	gender: GenderName;
// 	/**
// 	 * The Pokemon's set's effort values, used in stat calculation.
// 	 * These must be between 0 and 255, inclusive.
// 	 */
// 	evs: StatsTable;
// 	/**
// 	 * The Pokemon's individual values, used in stat calculation.
// 	 * These must be between 0 and 31, inclusive.
// 	 * These are also used as DVs, or determinant values, in Gens
// 	 * 1 and 2, which are represented as even numbers from 0 to 30.
// 	 * From Gen 2 and on, IVs/DVs are used to determine Hidden Power's
// 	 * type, although in Gen 7 a Pokemon may be legally altered such
// 	 * that its stats are calculated as if these values were 31 via
// 	 * Bottlecaps. Currently, PS handles this by considering any
// 	 * IV of 31 in Gen 7 to count as either even or odd for the purpose
// 	 * of validating a Hidden Power type, though restrictions on
// 	 * possible IVs for event-only Pokemon are still considered.
// 	 */
// 	ivs: StatsTable;
// 	/**
// 	 * The Pokemon's level. This is usually between 1 and 100, inclusive,
// 	 * but the simulator supports levels up to 9999 for testing purposes.
// 	 */
// 	level: number;
// 	/**
// 	 * Whether the Pokemon is shiny or not. While having no direct
// 	 * competitive effect except in a few OMs, certain Pokemon cannot
// 	 * be legally obtained as shiny, either as a whole or with certain
// 	 * event-only abilities or moves.
// 	 */
// 	shiny?: boolean;
// 	/**
// 	 * The Pokemon's set's happiness value. This is used only for
// 	 * calculating the base power of the moves Return and Frustration.
// 	 * This value must be between 0 and 255, inclusive.
// 	 */
// 	happiness: number;
// 	/**
// 	 * The Pokemon's set's Hidden Power type. This value is intended
// 	 * to be used to manually set a set's HP type in Gen 7 where
// 	 * its IVs do not necessarily reflect the user's intended type.
// 	 * TODO: actually support this in the teambuilder.
// 	 */
// 	hpType?: string;
// 	/**
// 	 * The pokeball this Pokemon is in. Like shininess, this property
// 	 * has no direct competitive effects, but has implications for
// 	 * event legality. For example, any Rayquaza that knows V-Create
// 	 * must be sent out from a Cherish Ball.
// 	 * TODO: actually support this in the validator, switching animations,
// 	 * and the teambuilder.
// 	 */
// 	pokeball?: string;
//
// 	constructor(data: Partial<PokemonSet>) {
// 		this.name = '';
// 		this.species = '';
// 		this.item = '';
// 		this.ability = 'noability';
// 		this.moves = [];
// 		this.nature = '';
// 		this.gender = '';
// 		this.evs = {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0};
// 		this.ivs = {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31};
// 		this.level = 100;
// 		this.shiny = undefined;
// 		this.happiness = 255; // :)
// 		this.hpType = undefined;
// 		this.pokeball = undefined;
// 		Object.assign(this, data);
// 	}
// }
