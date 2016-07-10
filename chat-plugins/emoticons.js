var color = require('../config/color');

exports.parseEmoticons = parseEmoticons;

var emotes = {
	':4head:': 'http://cbc.pokecommunity.com/config/emoticons/4head.png',
	':absol:': 'http://cbc.pokecommunity.com/config/emoticons/absol.png',
	':aggron:': 'http://cbc.pokecommunity.com/config/emoticons/aggron.png',
	':aids:': 'http://cbc.pokecommunity.com/config/emoticons/aids.png',
	':alarm:': 'http://cbc.pokecommunity.com/config/emoticons/alarm.gif',
	':ampharos:': 'http://cbc.pokecommunity.com/config/emoticons/ampharos.png',
	':arcanine:': 'http://cbc.pokecommunity.com/config/emoticons/arcanine.png',
	':arceus:': 'http://cbc.pokecommunity.com/config/emoticons/arceus.png',
	':armycat:': 'http://cbc.pokecommunity.com/config/emoticons/armycat.png',
	':azelf:': 'http://cbc.pokecommunity.com/config/emoticons/azelf.png',
	':ball:': 'http://cbc.pokecommunity.com/config/emoticons/ball.gif',
	':barrel:': 'http://cbc.pokecommunity.com/config/emoticons/barrel.gif',
	':bed:': 'http://cbc.pokecommunity.com/config/emoticons/bed.gif',
	':bellossom:': 'http://cbc.pokecommunity.com/config/emoticons/bellossom.png',
	':bidoof:': 'http://cbc.pokecommunity.com/config/emoticons/bidoof.png',
	':blastoise:': 'http://cbc.pokecommunity.com/config/emoticons/blastoise.png',
	':blink:': 'http://cbc.pokecommunity.com/config/emoticons/blink.gif',
	':blissey:': 'http://cbc.pokecommunity.com/config/emoticons/blissey.png',
	':blush:': 'http://cbc.pokecommunity.com/config/emoticons/blush.png',
	':boatydrugs:': 'http://cbc.pokecommunity.com/config/emoticons/boatydrugs.png',
	':bowie:': 'http://cbc.pokecommunity.com/config/emoticons/bowie.png',
	':bunny:': 'http://cbc.pokecommunity.com/config/emoticons/bunny.gif',
	':castform:': 'http://cbc.pokecommunity.com/config/emoticons/castform.png',
	':catflip:': 'http://cbc.pokecommunity.com/config/emoticons/catflip.png',
	':chansey:': 'http://cbc.pokecommunity.com/config/emoticons/chansey.png',
	':charizard:': 'http://cbc.pokecommunity.com/config/emoticons/charizard.png',
	':chikorita:': 'http://cbc.pokecommunity.com/config/emoticons/chikorita.png',
	':clefairy:': 'http://cbc.pokecommunity.com/config/emoticons/clefairy.png',
	':clown:': 'http://cbc.pokecommunity.com/config/emoticons/clown.png',
	':cookie:': 'http://cbc.pokecommunity.com/config/emoticons/cookie.png',
	':cthulhu:': 'http://cbc.pokecommunity.com/config/emoticons/cthulhu.png',
	':curry:': 'http://cbc.pokecommunity.com/config/emoticons/curry.png',
	':dab:': 'http://cbc.pokecommunity.com/config/emoticons/dab.png',
	':dance:': 'http://cbc.pokecommunity.com/config/emoticons/dance.gif',
	':dedenne:': 'http://cbc.pokecommunity.com/config/emoticons/dedenne.png',
	':delivert:': 'http://cbc.pokecommunity.com/config/emoticons/delivert.png',
	':diddy:': 'http://cbc.pokecommunity.com/config/emoticons/diddy.png',
	':ditto:': 'http://cbc.pokecommunity.com/config/emoticons/ditto.png',
	':dk:': 'http://cbc.pokecommunity.com/config/emoticons/dk.png',
	':drowzee:': 'http://cbc.pokecommunity.com/config/emoticons/drowzee.png',
	':eevee:': 'http://cbc.pokecommunity.com/config/emoticons/eevee.png',
	':electrode:': 'http://cbc.pokecommunity.com/config/emoticons/electrode.png',
	':emboar:': 'http://cbc.pokecommunity.com/config/emoticons/emboar.png',
	':espurr:': 'http://cbc.pokecommunity.com/config/emoticons/espurr.png',
	':fatbowie:': 'http://cbc.pokecommunity.com/config/emoticons/bowie.png',
	':feebas:': 'http://cbc.pokecommunity.com/config/emoticons/feebas.png',
	':fish:': 'http://cbc.pokecommunity.com/config/emoticons/fish.gif',
	':flirt:': 'http://cbc.pokecommunity.com/config/emoticons/flirt.png',
	':gav:': 'http://cbc.pokecommunity.com/config/emoticons/gav.png',
	':gawk:': 'http://cbc.pokecommunity.com/config/emoticons/gawk.png',
	':glare:': 'http://cbc.pokecommunity.com/config/emoticons/glare.png',
	':gloom:': 'http://cbc.pokecommunity.com/config/emoticons/gloom.png',
	':goodra:': 'http://cbc.pokecommunity.com/config/emoticons/goodra.png',
	':goomy:': 'http://cbc.pokecommunity.com/config/emoticons/goomy.png',
	':growlithe:': 'http://cbc.pokecommunity.com/config/emoticons/growlithe.png',
	':hamster:': 'http://cbc.pokecommunity.com/config/emoticons/hamster.png',
	':hamtaro:': 'http://cbc.pokecommunity.com/config/emoticons/hamtaro.gif',
	':helix:': 'http://cbc.pokecommunity.com/config/emoticons/helix.png',
	':houndoom:': 'http://cbc.pokecommunity.com/config/emoticons/houndoom.png',
	':hug:': 'http://cbc.pokecommunity.com/config/emoticons/hug.png',
	':infernape:': 'http://cbc.pokecommunity.com/config/emoticons/infernape.png',
	':jack:': 'http://cbc.pokecommunity.com/config/emoticons/jack.png',
	':jigglypuff:': 'http://cbc.pokecommunity.com/config/emoticons/jigglypuff.png',
	':jynx:': 'http://cbc.pokecommunity.com/config/emoticons/jynx.png',
	':kanye:': 'http://cbc.pokecommunity.com/config/emoticons/kanye.png',
	':kappa:': 'http://cbc.pokecommunity.com/config/emoticons/kappa.png',
	':kappapride:': 'http://cbc.pokecommunity.com/config/emoticons/kappapride.png',
	':kappaross:': 'http://cbc.pokecommunity.com/config/emoticons/kappaross.png',
	':keepo:': 'http://cbc.pokecommunity.com/config/emoticons/keepo.png',
	':kermit:': 'http://cbc.pokecommunity.com/config/emoticons/kermit.png',
	':khaled:': 'http://cbc.pokecommunity.com/config/emoticons/khaled.png',
	':kitty:': 'http://cbc.pokecommunity.com/config/emoticons/kitty.png',
	':kreygasm:': 'http://cbc.pokecommunity.com/config/emoticons/kreygasm.png',
	':lapras:': 'http://cbc.pokecommunity.com/config/emoticons/lapras.png',
	':latias:': 'http://cbc.pokecommunity.com/config/emoticons/latias.png',
	':latios:': 'http://cbc.pokecommunity.com/config/emoticons/latios.png',
	':ledian:': 'http://cbc.pokecommunity.com/config/emoticons/ledian.png',
	':leg:': 'http://cbc.pokecommunity.com/config/emoticons/leg.png',
	':lewd:': 'http://cbc.pokecommunity.com/config/emoticons/lewd.png',
	':lickilicky:': 'http://cbc.pokecommunity.com/config/emoticons/lickilicky.png',
	':lickitung:': 'http://cbc.pokecommunity.com/config/emoticons/lickitung.gif',
	':lileep:': 'http://cbc.pokecommunity.com/config/emoticons/lileep.png',
	':loudred:': 'http://cbc.pokecommunity.com/config/emoticons/loudred.png',
	':ludicolo:': 'http://cbc.pokecommunity.com/config/emoticons/ludicolo.png',
	':luvdisc:': 'http://cbc.pokecommunity.com/config/emoticons/luvdisc.png',
	':lyin:': 'http://cbc.pokecommunity.com/config/emoticons/lyin.png',
	':lying:': 'http://cbc.pokecommunity.com/config/emoticons/lying.png',
	':magikarp:': 'http://cbc.pokecommunity.com/config/emoticons/magikarp.png',
	':meganium:': 'http://cbc.pokecommunity.com/config/emoticons/meganium.png',
	':meowstic:': 'http://cbc.pokecommunity.com/config/emoticons/meowstic.png',
	':meowsticf:': 'http://cbc.pokecommunity.com/config/emoticons/meowsticf.png',
	':meowth:': 'http://cbc.pokecommunity.com/config/emoticons/meowth.png',
	':mermaid:': 'http://cbc.pokecommunity.com/config/emoticons/mermaid.png',
	':metagross:': 'http://cbc.pokecommunity.com/config/emoticons/metagross.png',
	':mind:': 'http://cbc.pokecommunity.com/config/emoticons/mind.png',
	':moo:': 'http://cbc.pokecommunity.com/config/emoticons/moo.gif',
	':mrmime:': 'http://cbc.pokecommunity.com/config/emoticons/mrmime.png',
	':mudkip:': 'http://cbc.pokecommunity.com/config/emoticons/mudkip.png',
	':muk:': 'http://cbc.pokecommunity.com/config/emoticons/muk.png',
	':no:': 'http://cbc.pokecommunity.com/config/emoticons/no.png',
	':nw:': 'http://cbc.pokecommunity.com/config/emoticons/nw.gif',
	':oddish:': 'http://cbc.pokecommunity.com/config/emoticons/oddish.png',
	':ok:': 'http://cbc.pokecommunity.com/config/emoticons/ok.png',
	':pachirisu:': 'http://cbc.pokecommunity.com/config/emoticons/pachirisu.png',
	':pancham:': 'http://cbc.pokecommunity.com/config/emoticons/pancham.png',
	':pangoro:': 'http://cbc.pokecommunity.com/config/emoticons/pangoro.png',
	':papabless:': 'http://cbc.pokecommunity.com/config/emoticons/papabless.png',
	':papi:': 'http://cbc.pokecommunity.com/config/emoticons/papi.png',
	':pear:': 'http://cbc.pokecommunity.com/config/emoticons/pear.png',
	':pikachu:': 'http://cbc.pokecommunity.com/config/emoticons/pikachu.png',
	':pix:': 'http://cbc.pokecommunity.com/config/emoticons/pix.png',
	':pjsalt:': 'http://cbc.pokecommunity.com/config/emoticons/pjsalt.png',
	':plot:': 'http://cbc.pokecommunity.com/config/emoticons/plot.gif',
	':pogchamp:': 'http://cbc.pokecommunity.com/config/emoticons/pogchamp.png',
	':pole:': 'http://cbc.pokecommunity.com/config/emoticons/pole.png',
	':pose:': 'http://cbc.pokecommunity.com/config/emoticons/pose.gif',
	':potato:': 'http://cbc.pokecommunity.com/config/emoticons/potato.png',
	':primeape:': 'http://cbc.pokecommunity.com/config/emoticons/primeape.png',
	':psyduck:': 'http://cbc.pokecommunity.com/config/emoticons/psyduck.png',
	':pyoshi:': 'http://cbc.pokecommunity.com/config/emoticons/pyoshi.png',
	':raichu:': 'http://cbc.pokecommunity.com/config/emoticons/raichu.png',
	':rainbow:': 'http://cbc.pokecommunity.com/config/emoticons/rainbow.gif',
	':ralts:': 'http://cbc.pokecommunity.com/config/emoticons/ralts.png',
	':respek:': 'http://cbc.pokecommunity.com/config/emoticons/respek.png',
	':roll:': 'http://cbc.pokecommunity.com/config/emoticons/roll.gif',
	':roselia:': 'http://cbc.pokecommunity.com/config/emoticons/roselia.png',
	':rude:': 'http://cbc.pokecommunity.com/config/emoticons/rude.gif',
	':sableye:': 'http://cbc.pokecommunity.com/config/emoticons/sableye.png',
	':salute:': 'http://cbc.pokecommunity.com/config/emoticons/salute.png',
	':scizor:': 'http://cbc.pokecommunity.com/config/emoticons/scizor.png',
	':seduce:': 'http://cbc.pokecommunity.com/config/emoticons/seduce.png',
	':senpai:': 'http://cbc.pokecommunity.com/config/emoticons/senpai.png',
	':shift:': 'http://cbc.pokecommunity.com/config/emoticons/shift.gif',
	':shifty:': 'http://cbc.pokecommunity.com/config/emoticons/shifty.png',
	':shinx:': 'http://cbc.pokecommunity.com/config/emoticons/shinx.png',
	':sims:': 'http://cbc.pokecommunity.com/config/emoticons/sims.png',
	':skarmory:': 'http://cbc.pokecommunity.com/config/emoticons/skarmory.png',
	':slowbro:': 'http://cbc.pokecommunity.com/config/emoticons/slowbro.png',
	':slowking:': 'http://cbc.pokecommunity.com/config/emoticons/slowking.png',
	':slowpoke:': 'http://cbc.pokecommunity.com/config/emoticons/slowpoke.png',
	':snivy:': 'http://cbc.pokecommunity.com/config/emoticons/snivy.png',
	':snorlax:': 'http://cbc.pokecommunity.com/config/emoticons/snorlax.png',
	':spasm:': 'http://cbc.pokecommunity.com/config/emoticons/spasm.gif',
	':spheal:': 'http://cbc.pokecommunity.com/config/emoticons/spheal.png',
	':spinda:': 'http://cbc.pokecommunity.com/config/emoticons/spinda.png',
	':squint:': 'http://cbc.pokecommunity.com/config/emoticons/squint.png',
	':strut:': 'http://cbc.pokecommunity.com/config/emoticons/strut.png',
	':suicune:': 'http://cbc.pokecommunity.com/config/emoticons/suicune.png',
	':superman:': 'http://cbc.pokecommunity.com/config/emoticons/superman.png',
	':sweep:': 'http://cbc.pokecommunity.com/config/emoticons/sweep.gif',
	':swiftrage:': 'http://cbc.pokecommunity.com/config/emoticons/swiftrage.png',
	':taco:': 'http://cbc.pokecommunity.com/config/emoticons/taco.png',
	':taillow:': 'http://cbc.pokecommunity.com/config/emoticons/taillow.png',
	':thugga:': 'http://cbc.pokecommunity.com/config/emoticons/thugga.png',
	':toxic:': 'http://cbc.pokecommunity.com/config/emoticons/toxic.png',
	':tyranitar:': 'http://cbc.pokecommunity.com/config/emoticons/tyranitar.png',
	':ugh:': 'http://cbc.pokecommunity.com/config/emoticons/ugh.gif',
	':uhhuh:': 'http://cbc.pokecommunity.com/config/emoticons/uhhuh.png',
	':venusaur:': 'http://cbc.pokecommunity.com/config/emoticons/venusaur.png',
	':victini:': 'http://cbc.pokecommunity.com/config/emoticons/victini.gif',
	':viper:': 'http://cbc.pokecommunity.com/config/emoticons/viper.png',
	':vulpix:': 'http://cbc.pokecommunity.com/config/emoticons/vulpix.png',
	':wailmer:': 'http://cbc.pokecommunity.com/config/emoticons/wailmer.png',
	':wave:': 'http://cbc.pokecommunity.com/config/emoticons/wave.gif',
	':what:': 'http://cbc.pokecommunity.com/config/emoticons/what.png',
	':why:': 'http://cbc.pokecommunity.com/config/emoticons/why.png',
	':wigglytuff:': 'http://cbc.pokecommunity.com/config/emoticons/wigglytuff.png',
	':wink:': 'http://cbc.pokecommunity.com/config/emoticons/wink.png',
	':wobbuffet:': 'http://cbc.pokecommunity.com/config/emoticons/wobbuffet.png',
	':wooper:': 'http://cbc.pokecommunity.com/config/emoticons/wooper.png',
	':wutface:': 'http://cbc.pokecommunity.com/config/emoticons/wutface.png',
	':wynaut:': 'http://cbc.pokecommunity.com/config/emoticons/wynaut.png',
	':y:': 'http://cbc.pokecommunity.com/config/emoticons/y.png',
	':yoshi:': 'http://cbc.pokecommunity.com/config/emoticons/yoshi.png',
	':zzz:': 'http://cbc.pokecommunity.com/config/emoticons/zzz.gif',
};

var emotesKeys = Object.keys(emotes);
var patterns = [];
var metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

for (var i in emotes) {
	if (emotes.hasOwnProperty(i)) {
		patterns.push('(' + i.replace(metachars, '\\$&') + ')');
	}
}
var patternRegex = new RegExp(patterns.join('|'), 'g');

/**
 * Parse emoticons in message.
 *
 * @param {String} message
 * @param {Object} room
 * @param {Object} user
 * @param {Boolean} pm - returns a string if it is in private messages
 * @returns {Boolean|String}
 */
function parseEmoticons(message, room, user, pm) {
	if (typeof message !== 'string' || (!pm && room.disableEmoticons)) return false;

	var match = false;
	var len = emotesKeys.length;


	while (len--) {
		if (message && message.indexOf(emotesKeys[len]) >= 0) {
			match = true;
			break;
		}
	}

	if (!match) return false;

	// escape HTML
	message = Tools.escapeHTML(message);

	// add emotes
	message = message.replace(patternRegex, function (match) {
		var emote = emotes[match];
		if (match === ':dab:' || match === ':fatbowie:' || match === ':gav:' || match === ':hamtaro:' || match === ':kermit:' || match === ':nw:' || match === ':superman:' || match === ':sweep:' || match === ':yoshi:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="30" height="30"/>' :
			match;
		if (match === ':bed:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="39" height="32"/>' :
			match;
		if (match === ':bowie:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="22" height="30"/>' :
			match;
		if (match === ':bunny:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="28" height="33"/>' :
			match;
		if (match === ':catflip:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="44" height="32"/>' :
			match;
		if (match === ':curry:' || match === ':jack:' || match === ':ok:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="23" height="30"/>' :
			match;
		if (match === ':delivert:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="28" height="42"/>' :
			match;
		if (match === ':fish:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="65" height="42"/>' :
			match;
		if (match === ':glare:' || match === ':shifty:' || match === ':squint:' || match === ':uhhuh:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="21" height="32"/>' :
			match;
		if (match === ':kanye:' || match === ':papabless:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="21" height="30"/>' :
			match;
		if (match === ':khaled:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="40" height="42"/>' :
			match;
		if (match === ':lewd:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="54" height="42"/>' :
			match;
		if (match === ':lyin:' || match === ':thugga:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="25" height="30"/>' :
			match;
		if (match === ':lying:' || match === ':papi:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="20" height="30"/>' :
			match;
		if (match === ':respek:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="24" height="30"/>' :
			match;
		if (match === ':strut:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="23" height="33"/>' :
			match;
		if (match === ':viper:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="27" height="30"/>' :
			match;
		if (match === ':what:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="77" height="30"/>' :
			match;
		if (match === ':wink:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="33" height="30"/>' :
			match;
		return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '"/>' :
			match;
	});

	// __italics__
	message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>');

	// **bold**
	message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>');

	var group = user.getIdentity().charAt(0);
	if (room.auth) group = room.auth[user.userid] || group;

	var style = "background:none;border:0;padding:0 5px 0 0;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:9pt;cursor:pointer";

	message = "<div class='chat'>" + "<small>" + group + "</small>" + "<button name='parseCommand' value='/user " + user.name + "' style='" + style + "'>" + "<b><font color='" + color(user.userid) + "'>" + user.name + ":</font></b>" + "</button><em class='mine'>" + message + "</em></div>";
	if (pm) return message;

	room.addRaw(message);

	return true;
}

/**
 * Create a two column table listing emoticons.
 *
 * @return {String} emotes table
 */
function create_table() {
	var emotes_name = Object.keys(emotes);
	var emotes_list = [];
	var emotes_group_list = [];
	var len = emotes_name.length;
	var i;

	for (i = 0; i < len; i++) {
		emotes_list.push("<td>" +
			"<img src='" + emotes[emotes_name[i]] + "'' title='" + emotes_name[i] + "' height='30' width='30' />" +
			emotes_name[i] + "</td>");
	}

	var emotes_list_right = emotes_list.splice(len / 2, len / 2);

	for (i = 0; i < len / 2; i++) {
		var emote1 = emotes_list[i],
			emote2 = emotes_list_right[i];
		if (emote2) {
			emotes_group_list.push("<tr>" + emote1 + emote2 + "</tr>");
		} else {
			emotes_group_list.push("<tr>" + emote1 + "</tr>");
		}
	}

	return "<div class='infobox'><center><b>List of Emoticons</b></center>" + "<div class='infobox-limited'><table border='1' cellspacing='0' cellpadding='5' width='100%'>" + "<tbody>" + emotes_group_list.join("") + "</tbody>" + "</table></div></div>";
}

var emotes_table = create_table();

exports.commands = {
	blockemote: 'blockemoticons',
	blockemotes: 'blockemoticons',
	blockemoticon: 'blockemoticons',
	blockemoticons: function (target, room, user) {
		if (user.blockEmoticons === (target || true)) return this.sendReply("You are already blocking emoticons in private messages! To unblock, use /unblockemoticons");
		user.blockEmoticons = true;
		return this.sendReply("You are now blocking emoticons in private messages.");
	},
	blockemoticonshelp: ["/blockemoticons - Blocks emoticons in private messages. Unblock them with /unblockemoticons."],

	unblockemote: 'unblockemoticons',
	unblockemotes: 'unblockemoticons',
	unblockemoticon: 'unblockemoticons',
	unblockemoticons: function (target, room, user) {
		if (!user.blockEmoticons) return this.sendReply("You are not blocking emoticons in private messages! To block, use /blockemoticons");
		user.blockEmoticons = false;
		return this.sendReply("You are no longer blocking emoticons in private messages.");
	},
	unblockemoticonshelp: ["/unblockemoticons - Unblocks emoticons in private messages. Block them with /blockemoticons."],

	emote: 'emoticons',
	emotes: 'emoticons',
	emoticon: 'emoticons',
	emoticons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReply("|raw|" + emotes_table);
	},
	emoticonshelp: ["/emoticons - Get a list of emoticons."],

	toggleemote: 'toggleemoticons',
	toggleemotes: 'toggleemoticons',
	toggleemoticons: function (target, room, user) {
		if (!this.can('warn', null, room)) return false;
		room.disableEmoticons = !room.disableEmoticons;
		this.sendReply("Disallowing emoticons is set to " + room.disableEmoticons + " in this room.");
		if (room.disableEmoticons) {
			this.add("|raw|<div class=\"broadcast-red\"><b>Emoticons are disabled!</b><br />Emoticons will not work.</div>");
		} else {
			this.add("|raw|<div class=\"broadcast-blue\"><b>Emoticons are enabled!</b><br />Emoticons will work now.</div>");
		}
	},
	toggleemoticonshelp: ["/toggleemoticons - Toggle emoticons on or off."],
};
