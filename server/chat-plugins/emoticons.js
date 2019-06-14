'use strict';

const color = require('../../config/color');
let demFeels = function () {};
demFeels.getEmotes = function () {
	return {};
};
try {
	demFeels = require('dem-feels');
} catch (e) {
	console.error(e);
}

exports.parseEmoticons = parseEmoticons;

// for travis build
if (typeof demFeels.extendEmotes === 'function') {
	// example extending emotes
	demFeels.extendEmotes({
		':4head:': 'https://static.pokecommunity.com/bs/emoticons/4head.png',
		':absol:': 'https://static.pokecommunity.com/bs/emoticons/absol.png',
		':aggron:': 'https://static.pokecommunity.com/bs/emoticons/aggron.png',
		':aids:': 'https://static.pokecommunity.com/bs/emoticons/aids.png',
		':alarm:': 'https://static.pokecommunity.com/bs/emoticons/alarm.gif',
		':ampharos:': 'https://static.pokecommunity.com/bs/emoticons/ampharos.png',
		':ana:': 'https://static.pokecommunity.com/bs/emoticons/ana.png',
		':arcanine:': 'https://static.pokecommunity.com/bs/emoticons/arcanine.png',
		':arceus:': 'https://static.pokecommunity.com/bs/emoticons/arceus.png',
		':armycat:': 'https://static.pokecommunity.com/bs/emoticons/armycat.png',
		':ashhug:': 'https://static.pokecommunity.com/bs/emoticons/ashhug.png',
		':ball:': 'https://static.pokecommunity.com/bs/emoticons/ball.gif',
		':barrel:': 'https://static.pokecommunity.com/bs/emoticons/barrel.gif',
		':bastion:': 'https://static.pokecommunity.com/bs/emoticons/bastion.png',
		':bearhug:': 'https://static.pokecommunity.com/bs/emoticons/bearhug.png',
		':bed:': 'https://static.pokecommunity.com/bs/emoticons/bed.gif',
		':bellossom:': 'https://static.pokecommunity.com/bs/emoticons/bellossom.png',
		':bidoof:': 'https://static.pokecommunity.com/bs/emoticons/bidoof.png',
		':blastoise:': 'https://static.pokecommunity.com/bs/emoticons/blastoise.png',
		':blink:': 'https://static.pokecommunity.com/bs/emoticons/blink.gif',
		':blissey:': 'https://static.pokecommunity.com/bs/emoticons/blissey.png',
		':blush:': 'https://static.pokecommunity.com/bs/emoticons/blush.png',
		':blust:': 'https://static.pokecommunity.com/bs/emoticons/blust.gif',
		':boatydrugs:': 'https://static.pokecommunity.com/bs/emoticons/boatydrugs.png',
		':bowie:': 'https://static.pokecommunity.com/bs/emoticons/bowie.png',
		':bulbasaur:': 'https://static.pokecommunity.com/bs/emoticons/bulbasaur.png',
		':bunny:': 'https://static.pokecommunity.com/bs/emoticons/bunny.gif',
		':camiss:': 'https://static.pokecommunity.com/bs/emoticons/camiss.png',
		':carol:': 'https://static.pokecommunity.com/bs/emoticons/carol.png',
		':castform:': 'https://static.pokecommunity.com/bs/emoticons/castform.png',
		':catflip:': 'https://static.pokecommunity.com/bs/emoticons/catflip.png',
		':censor:': 'https://static.pokecommunity.com/bs/emoticons/censor.png',
		':chansey:': 'https://static.pokecommunity.com/bs/emoticons/chansey.png',
		':charizard:': 'https://static.pokecommunity.com/bs/emoticons/charizard.png',
		':charmander:': 'https://static.pokecommunity.com/bs/emoticons/charmander.png',
		':cheers:': 'https://static.pokecommunity.com/bs/emoticons/cheers.png',
		':chikorita:': 'https://static.pokecommunity.com/bs/emoticons/chikorita.png',
		':choicehug:': 'https://static.pokecommunity.com/bs/emoticons/choicehug.png',
		':choke:': 'https://static.pokecommunity.com/bs/emoticons/choke.png',
		':christos:': 'https://static.pokecommunity.com/bs/emoticons/christos.png',
		':clefairy:': 'https://static.pokecommunity.com/bs/emoticons/clefairy.png',
		':clown:': 'https://static.pokecommunity.com/bs/emoticons/clown.png',
		':cookie:': 'https://static.pokecommunity.com/bs/emoticons/cookie.png',
		':cthulhu:': 'https://static.pokecommunity.com/bs/emoticons/cthulhu.png',
		':curry:': 'https://static.pokecommunity.com/bs/emoticons/curry.png',
		':dab:': 'https://static.pokecommunity.com/bs/emoticons/dab.png',
		':dance:': 'https://static.pokecommunity.com/bs/emoticons/dance.gif',
		':dedenne:': 'https://static.pokecommunity.com/bs/emoticons/dedenne.png',
		':delivert:': 'https://static.pokecommunity.com/bs/emoticons/delivert.png',
		':diddy:': 'https://static.pokecommunity.com/bs/emoticons/diddy.png',
		':dinner:': 'https://static.pokecommunity.com/bs/emoticons/dinner.png',
		':ditto:': 'https://static.pokecommunity.com/bs/emoticons/ditto.png',
		':dk:': 'https://static.pokecommunity.com/bs/emoticons/dk.png',
		':doomfist:': 'https://static.pokecommunity.com/bs/emoticons/doomfist.png',
		':drama:': 'https://static.pokecommunity.com/bs/emoticons/drama.png',
		':drowzee:': 'https://static.pokecommunity.com/bs/emoticons/drowzee.png',
		':dva:': 'https://static.pokecommunity.com/bs/emoticons/dva.png',
		':eevee:': 'https://static.pokecommunity.com/bs/emoticons/eevee.png',
		':electrode:': 'https://static.pokecommunity.com/bs/emoticons/electrode.png',
		':emboar:': 'https://static.pokecommunity.com/bs/emoticons/emboar.png',
		':espurr:': 'https://static.pokecommunity.com/bs/emoticons/espurr.png',
		':eyes:': 'https://static.pokecommunity.com/bs/emoticons/eyes.png',
		':fatbowie:': 'https://static.pokecommunity.com/bs/emoticons/bowie.png',
		':feebas:': 'https://static.pokecommunity.com/bs/emoticons/feebas.png',
		':fish:': 'https://static.pokecommunity.com/bs/emoticons/fish.gif',
		':flirt:': 'https://static.pokecommunity.com/bs/emoticons/flirt.png',
		':flygon:': 'https://static.pokecommunity.com/bs/emoticons/flygon.png',
		':frank:': 'https://static.pokecommunity.com/bs/emoticons/frank.png',
		':gav:': 'https://static.pokecommunity.com/bs/emoticons/gav.png',
		':gawk:': 'https://static.pokecommunity.com/bs/emoticons/gawk.png',
		':genji:': 'https://static.pokecommunity.com/bs/emoticons/genji.png',
		':glare:': 'https://static.pokecommunity.com/bs/emoticons/glare.png',
		':gloom:': 'https://static.pokecommunity.com/bs/emoticons/gloom.png',
		':goodra:': 'https://static.pokecommunity.com/bs/emoticons/goodra.png',
		':goomy:': 'https://static.pokecommunity.com/bs/emoticons/goomy.png',
		':growlithe:': 'https://static.pokecommunity.com/bs/emoticons/growlithe.png',
		':hamster:': 'https://static.pokecommunity.com/bs/emoticons/hamster.png',
		':hamtaro:': 'https://static.pokecommunity.com/bs/emoticons/hamtaro.gif',
		':hanzo:': 'https://static.pokecommunity.com/bs/emoticons/hanzo.png',
		':harambe:': 'https://static.pokecommunity.com/bs/emoticons/harambe.png',
		':helix:': 'https://static.pokecommunity.com/bs/emoticons/helix.png',
		':houndoom:': 'https://static.pokecommunity.com/bs/emoticons/houndoom.png',
		':hug:': 'https://static.pokecommunity.com/bs/emoticons/hug.png',
		':hypno:': 'https://static.pokecommunity.com/bs/emoticons/hypno.png',
		':infernape:': 'https://static.pokecommunity.com/bs/emoticons/infernape.png',
		':jack:': 'https://static.pokecommunity.com/bs/emoticons/jack.png',
		':jigglypuff:': 'https://static.pokecommunity.com/bs/emoticons/jigglypuff.png',
		':joanne:': 'https://static.pokecommunity.com/bs/emoticons/joanne.png',
		':junkrat:': 'https://static.pokecommunity.com/bs/emoticons/junkrat.png',
		':jynx:': 'https://static.pokecommunity.com/bs/emoticons/jynx.png',
		':kanye:': 'https://static.pokecommunity.com/bs/emoticons/kanye.png',
		':kappa:': 'https://static.pokecommunity.com/bs/emoticons/kappa.png',
		':kappapride:': 'https://static.pokecommunity.com/bs/emoticons/kappapride.png',
		':kappaross:': 'https://static.pokecommunity.com/bs/emoticons/kappaross.png',
		':keepo:': 'https://static.pokecommunity.com/bs/emoticons/keepo.png',
		':kermit:': 'https://static.pokecommunity.com/bs/emoticons/kermit.png',
		':khaled:': 'https://static.pokecommunity.com/bs/emoticons/khaled.png',
		':kitty:': 'https://static.pokecommunity.com/bs/emoticons/kitty.png',
		':kreygasm:': 'https://static.pokecommunity.com/bs/emoticons/kreygasm.png',
		':lapras:': 'https://static.pokecommunity.com/bs/emoticons/lapras.png',
		':latias:': 'https://static.pokecommunity.com/bs/emoticons/latias.png',
		':latios:': 'https://static.pokecommunity.com/bs/emoticons/latios.png',
		':ledian:': 'https://static.pokecommunity.com/bs/emoticons/ledian.png',
		':leg:': 'https://static.pokecommunity.com/bs/emoticons/leg.png',
		':lewd:': 'https://static.pokecommunity.com/bs/emoticons/lewd.png',
		':lickilicky:': 'https://static.pokecommunity.com/bs/emoticons/lickilicky.png',
		':lickitung:': 'https://static.pokecommunity.com/bs/emoticons/lickitung.gif',
		':lileep:': 'https://static.pokecommunity.com/bs/emoticons/lileep.png',
		':link:': 'https://static.pokecommunity.com/bs/emoticons/link.png',
		':loudred:': 'https://static.pokecommunity.com/bs/emoticons/loudred.png',
		':lucio:': 'https://static.pokecommunity.com/bs/emoticons/lucio.png',
		':ludicolo:': 'https://static.pokecommunity.com/bs/emoticons/ludicolo.png',
		':luvdisc:': 'https://static.pokecommunity.com/bs/emoticons/luvdisc.png',
		':lyin:': 'https://static.pokecommunity.com/bs/emoticons/lyin.png',
		':magikarp:': 'https://static.pokecommunity.com/bs/emoticons/magikarp.png',
		':mccree:': 'https://static.pokecommunity.com/bs/emoticons/mccree.png',
		':meganium:': 'https://static.pokecommunity.com/bs/emoticons/meganium.png',
		':mei:': 'https://static.pokecommunity.com/bs/emoticons/mei.png',
		':meowstic:': 'https://static.pokecommunity.com/bs/emoticons/meowstic.png',
		':meowsticf:': 'https://static.pokecommunity.com/bs/emoticons/meowsticf.png',
		':meowth:': 'https://static.pokecommunity.com/bs/emoticons/meowth.png',
		':mercy:': 'https://static.pokecommunity.com/bs/emoticons/mercy.png',
		':mermaid:': 'https://static.pokecommunity.com/bs/emoticons/mermaid.png',
		':metagross:': 'https://static.pokecommunity.com/bs/emoticons/metagross.png',
		':mind:': 'https://static.pokecommunity.com/bs/emoticons/mind.png',
		':moo:': 'https://static.pokecommunity.com/bs/emoticons/moo.gif',
		':mrmime:': 'https://static.pokecommunity.com/bs/emoticons/mrmime.png',
		':mudkip:': 'https://static.pokecommunity.com/bs/emoticons/mudkip.png',
		':muk:': 'https://static.pokecommunity.com/bs/emoticons/muk.png',
		':no:': 'https://static.pokecommunity.com/bs/emoticons/no.png',
		':nw:': 'https://static.pokecommunity.com/bs/emoticons/nw.gif',
		':oddish:': 'https://static.pokecommunity.com/bs/emoticons/oddish.png',
		':ok:': 'https://static.pokecommunity.com/bs/emoticons/ok.png',
		':orisa:': 'https://static.pokecommunity.com/bs/emoticons/orisa.png',
		':pachirisu:': 'https://static.pokecommunity.com/bs/emoticons/pachirisu.png',
		':pancham:': 'https://static.pokecommunity.com/bs/emoticons/pancham.png',
		':pangoro:': 'https://static.pokecommunity.com/bs/emoticons/pangoro.png',
		':papabless:': 'https://static.pokecommunity.com/bs/emoticons/papabless.png',
		':papi:': 'https://static.pokecommunity.com/bs/emoticons/papi.png',
		':pear:': 'https://static.pokecommunity.com/bs/emoticons/pear.png',
		':petty:': 'https://static.pokecommunity.com/bs/emoticons/petty.png',
		':pharah:': 'https://static.pokecommunity.com/bs/emoticons/pharah.png',
		':pikachu:': 'https://static.pokecommunity.com/bs/emoticons/pikachu.png',
		':pikahug:': 'https://static.pokecommunity.com/bs/emoticons/pikahug.png',
		':pix:': 'https://static.pokecommunity.com/bs/emoticons/pix.png',
		':pjsalt:': 'https://static.pokecommunity.com/bs/emoticons/pjsalt.png',
		':plot:': 'https://static.pokecommunity.com/bs/emoticons/plot.gif',
		':pogchamp:': 'https://static.pokecommunity.com/bs/emoticons/pogchamp.png',
		':pole:': 'https://static.pokecommunity.com/bs/emoticons/pole.png',
		':pose:': 'https://static.pokecommunity.com/bs/emoticons/pose.gif',
		':potato:': 'https://static.pokecommunity.com/bs/emoticons/potato.png',
		':primeape:': 'https://static.pokecommunity.com/bs/emoticons/primeape.png',
		':psyduck:': 'https://static.pokecommunity.com/bs/emoticons/psyduck.png',
		':pyoshi:': 'https://static.pokecommunity.com/bs/emoticons/pyoshi.png',
		':raffey:': 'https://static.pokecommunity.com/bs/emoticons/raffey.png',
		':raichu:': 'https://static.pokecommunity.com/bs/emoticons/raichu.png',
		':rainbow:': 'https://static.pokecommunity.com/bs/emoticons/rainbow.gif',
		':ralts:': 'https://static.pokecommunity.com/bs/emoticons/ralts.png',
		':reaper:': 'https://static.pokecommunity.com/bs/emoticons/reaper.png',
		':reinhardt:': 'https://static.pokecommunity.com/bs/emoticons/reinhardt.png',
		':respek:': 'https://static.pokecommunity.com/bs/emoticons/respek.png',
		':roadhog:': 'https://static.pokecommunity.com/bs/emoticons/roadhog.png',
		':roll:': 'https://static.pokecommunity.com/bs/emoticons/roll.gif',
		':roselia:': 'https://static.pokecommunity.com/bs/emoticons/roselia.png',
		':rude:': 'https://static.pokecommunity.com/bs/emoticons/rude.gif',
		':sableye:': 'https://static.pokecommunity.com/bs/emoticons/sableye.png',
		':salute:': 'https://static.pokecommunity.com/bs/emoticons/salute.png',
		':scarfhug:': 'https://static.pokecommunity.com/bs/emoticons/scarfhug.png',
		':scizor:': 'https://static.pokecommunity.com/bs/emoticons/scizor.png',
		':seduce:': 'https://static.pokecommunity.com/bs/emoticons/seduce.png',
		':senpai:': 'https://static.pokecommunity.com/bs/emoticons/senpai.png',
		':sharpie:': 'https://static.pokecommunity.com/bs/emoticons/sharpie.png',
		':shift:': 'https://static.pokecommunity.com/bs/emoticons/shift.gif',
		':shifty:': 'https://static.pokecommunity.com/bs/emoticons/shifty.png',
		':shinx:': 'https://static.pokecommunity.com/bs/emoticons/shinx.png',
		':shinyhug:': 'https://static.pokecommunity.com/bs/emoticons/shinyhug.png',
		':sims:': 'https://static.pokecommunity.com/bs/emoticons/sims.png',
		':skarmory:': 'https://static.pokecommunity.com/bs/emoticons/skarmory.png',
		':slowbro:': 'https://static.pokecommunity.com/bs/emoticons/slowbro.png',
		':slowking:': 'https://static.pokecommunity.com/bs/emoticons/slowking.png',
		':slowpoke:': 'https://static.pokecommunity.com/bs/emoticons/slowpoke.png',
		':snivy:': 'https://static.pokecommunity.com/bs/emoticons/snivy.png',
		':snorlax:': 'https://static.pokecommunity.com/bs/emoticons/snorlax.png',
		':soldier76:': 'https://static.pokecommunity.com/bs/emoticons/soldier76.png',
		':sombra:': 'https://static.pokecommunity.com/bs/emoticons/sombra.png',
		':spasm:': 'https://static.pokecommunity.com/bs/emoticons/spasm.gif',
		':spheal:': 'https://static.pokecommunity.com/bs/emoticons/spheal.png',
		':spinda:': 'https://static.pokecommunity.com/bs/emoticons/spinda.png',
		':squint:': 'https://static.pokecommunity.com/bs/emoticons/squint.png',
		':squirtle:': 'https://static.pokecommunity.com/bs/emoticons/squirtle.png',
		':steelix:': 'https://static.pokecommunity.com/bs/emoticons/steelix.png',
		':stephenking:': 'https://static.pokecommunity.com/bs/emoticons/stephenking.png',
		':strut:': 'https://static.pokecommunity.com/bs/emoticons/strut.png',
		':suicune:': 'https://static.pokecommunity.com/bs/emoticons/suicune.png',
		':superman:': 'https://static.pokecommunity.com/bs/emoticons/superman.png',
		':sweep:': 'https://static.pokecommunity.com/bs/emoticons/sweep.gif',
		':swiftrage:': 'https://static.pokecommunity.com/bs/emoticons/swiftrage.png',
		':symmetra:': 'https://static.pokecommunity.com/bs/emoticons/symmetra.png',
		':taco:': 'https://static.pokecommunity.com/bs/emoticons/taco.png',
		':taillow:': 'https://static.pokecommunity.com/bs/emoticons/taillow.png',
		':thinkeng:': 'https://static.pokecommunity.com/bs/emoticons/thinkeng.png',
		':thonkeng:': 'https://static.pokecommunity.com/bs/emoticons/thinkeng.png',
		':thinkform:': 'https://static.pokecommunity.com/bs/emoticons/thinkform.png',
		':thonk:': 'https://static.pokecommunity.com/bs/emoticons/thonk.png',
		':thonkang:': 'https://static.pokecommunity.com/bs/emoticons/thonkang.png',
		':thugga:': 'https://static.pokecommunity.com/bs/emoticons/thugga.png',
		':torbjorn:': 'https://static.pokecommunity.com/bs/emoticons/torbjorn.png',
		':toxic:': 'https://static.pokecommunity.com/bs/emoticons/toxic.png',
		':tracer:': 'https://static.pokecommunity.com/bs/emoticons/tracer.png',
		':tyranitar:': 'https://static.pokecommunity.com/bs/emoticons/tyranitar.png',
		':ugh:': 'https://static.pokecommunity.com/bs/emoticons/ugh.gif',
		':uhhuh:': 'https://static.pokecommunity.com/bs/emoticons/uhhuh.png',
		':venusaur:': 'https://static.pokecommunity.com/bs/emoticons/venusaur.png',
		':victini:': 'https://static.pokecommunity.com/bs/emoticons/victini.gif',
		':viper:': 'https://static.pokecommunity.com/bs/emoticons/viper.png',
		':voltypride:': 'https://static.pokecommunity.com/bs/emoticons/voltypride.png',
		':vulpix:': 'https://static.pokecommunity.com/bs/emoticons/vulpix.png',
		':wailmer:': 'https://static.pokecommunity.com/bs/emoticons/wailmer.png',
		':wave:': 'https://static.pokecommunity.com/bs/emoticons/wave.gif',
		':weedle:': 'https://static.pokecommunity.com/bs/emoticons/weedle.png',
		':what:': 'https://static.pokecommunity.com/bs/emoticons/what.png',
		':why:': 'https://static.pokecommunity.com/bs/emoticons/why.png',
		':widowmaker:': 'https://static.pokecommunity.com/bs/emoticons/widowmaker.png',
		':wigglytuff:': 'https://static.pokecommunity.com/bs/emoticons/wigglytuff.png',
		':wink:': 'https://static.pokecommunity.com/bs/emoticons/wink.png',
		':winston:': 'https://static.pokecommunity.com/bs/emoticons/winston.png',
		':wlink:': 'https://static.pokecommunity.com/bs/emoticons/wlink.gif',
		':wobbuffet:': 'https://static.pokecommunity.com/bs/emoticons/wobbuffet.png',
		':wooper:': 'https://static.pokecommunity.com/bs/emoticons/wooper.png',
		':wutface:': 'https://static.pokecommunity.com/bs/emoticons/wutface.png',
		':wynaut:': 'https://static.pokecommunity.com/bs/emoticons/wynaut.png',
		':y:': 'https://static.pokecommunity.com/bs/emoticons/y.png',
		':yoshi:': 'https://static.pokecommunity.com/bs/emoticons/yoshi.png',
		':zarya:': 'https://static.pokecommunity.com/bs/emoticons/zarya.png',
		':zenyatta:': 'https://static.pokecommunity.com/bs/emoticons/zenyatta.png',
		':zzz:': 'https://static.pokecommunity.com/bs/emoticons/zzz.gif',
	});
}

const emotes = demFeels.getEmotes();

const emotesKeys = Object.keys(emotes).sort();

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

	let match = false;
	let len = emotesKeys.length;

	while (len--) {
		if (message && message.indexOf(emotesKeys[len]) >= 0) {
			match = true;
			break;
		}
	}

	if (!match) return false;

	// escape HTML
	message = Chat.escapeHTML(message);

	// add emotes
	message = demFeels(message);

	// __italics__
	message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>');

	// **bold**
	message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>');

	let group = user.getIdentity().charAt(0);
	if (room && room.auth) group = room.auth[user.userid] || group;
	if (pm && !user.hiding) group = user.group;

	if (pm) return "<div class='chat' style='display:inline'>" + "<em class='mine'>" + message + "</em></div>";

	let style = "background:none;border:0;padding:0 5px 0 0;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:9pt;cursor:pointer";
	message = "<div class='chat'>" + "<small>" + group + "</small>" + "<button name='parseCommand' value='/user " + user.name + "' style='" + style + "'>" + "<b><font color='" + color(user.userid) + "'>" + user.name + ":</font></b>" + "</button><em class='mine'>" + message + "</em></div>";

	room.addRaw(message);

	room.update();

	return true;
}

/**
* Create a two column table listing emoticons.
*
* @return {String} emotes table
*/
function create_table() {
	let emotes_name = Object.keys(emotes);
	let emotes_list = [];
	let emotes_group_list = [];
	let len = emotes_name.length;

	for (let i = 0; i < len; i++) {
		emotes_list.push("<td style='padding: 5px; box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5) inset; border-radius: 5px;'>" + "<img src='" + emotes[emotes_name[i]] + "'' title='" + emotes_name[i] + "' height='50' width='50' style='vertical-align: middle;  padding-right: 5px;' />" + emotes_name[i] + "</td>");
	}

	for (let i = 0; i < len; i += 4) {
		let emoteOutput = [emotes_list[i], emotes_list[i + 1], emotes_list[i + 2], emotes_list[i + 3]];
		if (i < len) emotes_group_list.push("<tr>" + emoteOutput.join('') + "</tr>");
	}

	return (
		"<div class='infobox'><center><font style='font-weight: bold; text-decoration: underline; color: #555;'>List of Emoticons</font></center>" +
		"<div style='max-height: 300px; overflow-y: scroll; padding: 5px 0px;'><table style='background: rgba(245, 245, 245, 0.4); border: 1px solid #BBB;' width='100%'>" +
		emotes_group_list.join("") +
		"</table></div></div>"
	);
}

let emotes_table = create_table();

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

	emotes: 'emoticons',
	emoticons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReply("|raw|" + emotes_table);
	},
	emoticonshelp: ["/emoticons - Get a list of emoticons."],

	toggleemote: 'toggleemoticons',
	toggleemotes: 'toggleemoticons',
	toggleemoticons: function (target, room, user) {
		if (!this.can('declare', null, room)) return false;
		room.disableEmoticons = !room.disableEmoticons;
		this.sendReply("Disallowing emoticons is set to " + room.disableEmoticons + " in this room.");
		if (room.disableEmoticons) {
			this.add("|raw|<div class=\"broadcast-red\"><b>Emoticons are disabled!</b><br />Emoticons will not work.</div>");
		} else {
			this.add("|raw|<div class=\"broadcast-blue\"><b>Emoticons are enabled!</b><br />Emoticons will work now.</div>");
		}
	},
	toggleemoticonshelp: ["/toggleemoticons - Toggle emoticons on or off."],

	rande: 'randemote',
	randemote: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let rng = Math.floor(Math.random() * emotesKeys.length);
		let randomEmote = emotesKeys[rng];
		this.sendReplyBox("<img src='" + emotes[randomEmote] + "' title='" + randomEmote + "' height='50' width='50' />");
	},
	randemotehelp: ["/randemote - Get a random emote."],
};
