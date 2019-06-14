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
		':4head:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/4head.png',
		':absol:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/absol.png',
		':aggron:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/aggron.png',
		':aids:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/aids.png',
		':alarm:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/alarm.gif',
		':ampharos:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/ampharos.png',
		':ana:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/ana.png',
		':arcanine:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/arcanine.png',
		':arceus:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/arceus.png',
		':armycat:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/armycat.png',
		':ashhug:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/ashhug.png',
		':ball:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/ball.gif',
		':barrel:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/barrel.gif',
		':bastion:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/bastion.png',
		':bearhug:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/bearhug.png',
		':bed:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/bed.gif',
		':bellossom:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/bellossom.png',
		':bidoof:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/bidoof.png',
		':blastoise:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/blastoise.png',
		':blink:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/blink.gif',
		':blissey:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/blissey.png',
		':blush:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/blush.png',
		':blust:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/blust.gif',
		':boatydrugs:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/boatydrugs.png',
		':bowie:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/bowie.png',
		':bulbasaur:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/bulbasaur.png',
		':bunny:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/bunny.gif',
		':camiss:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/camiss.png',
		':carol:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/carol.png',
		':castform:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/castform.png',
		':catflip:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/catflip.png',
		':censor:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/censor.png',
		':chansey:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/chansey.png',
		':charizard:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/charizard.png',
		':charmander:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/charmander.png',
		':cheers:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/cheers.png',
		':chikorita:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/chikorita.png',
		':choicehug:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/choicehug.png',
		':choke:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/choke.png',
		':christos:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/christos.png',
		':clefairy:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/clefairy.png',
		':clown:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/clown.png',
		':cookie:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/cookie.png',
		':cthulhu:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/cthulhu.png',
		':curry:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/curry.png',
		':dab:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/dab.png',
		':dance:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/dance.gif',
		':dedenne:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/dedenne.png',
		':delivert:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/delivert.png',
		':diddy:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/diddy.png',
		':dinner:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/dinner.png',
		':ditto:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/ditto.png',
		':dk:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/dk.png',
		':doomfist:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/doomfist.png',
		':drama:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/drama.png',
		':drowzee:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/drowzee.png',
		':dva:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/dva.png',
		':eevee:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/eevee.png',
		':electrode:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/electrode.png',
		':emboar:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/emboar.png',
		':espurr:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/espurr.png',
		':eyes:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/eyes.png',
		':fatbowie:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/bowie.png',
		':feebas:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/feebas.png',
		':fish:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/fish.gif',
		':flirt:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/flirt.png',
		':flygon:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/flygon.png',
		':frank:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/frank.png',
		':gav:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/gav.png',
		':gawk:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/gawk.png',
		':genji:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/genji.png',
		':glare:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/glare.png',
		':gloom:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/gloom.png',
		':goodra:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/goodra.png',
		':goomy:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/goomy.png',
		':growlithe:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/growlithe.png',
		':hamster:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/hamster.png',
		':hamtaro:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/hamtaro.gif',
		':hanzo:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/hanzo.png',
		':harambe:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/harambe.png',
		':helix:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/helix.png',
		':houndoom:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/houndoom.png',
		':hug:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/hug.png',
		':hypno:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/hypno.png',
		':infernape:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/infernape.png',
		':jack:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/jack.png',
		':jigglypuff:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/jigglypuff.png',
		':joanne:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/joanne.png',
		':junkrat:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/junkrat.png',
		':jynx:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/jynx.png',
		':kanye:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/kanye.png',
		':kappa:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/kappa.png',
		':kappapride:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/kappapride.png',
		':kappaross:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/kappaross.png',
		':keepo:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/keepo.png',
		':kermit:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/kermit.png',
		':khaled:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/khaled.png',
		':kitty:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/kitty.png',
		':kreygasm:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/kreygasm.png',
		':lapras:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/lapras.png',
		':latias:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/latias.png',
		':latios:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/latios.png',
		':ledian:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/ledian.png',
		':leg:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/leg.png',
		':lewd:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/lewd.png',
		':lickilicky:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/lickilicky.png',
		':lickitung:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/lickitung.gif',
		':lileep:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/lileep.png',
		':link:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/link.png',
		':loudred:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/loudred.png',
		':lucio:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/lucio.png',
		':ludicolo:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/ludicolo.png',
		':luvdisc:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/luvdisc.png',
		':lyin:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/lyin.png',
		':magikarp:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/magikarp.png',
		':mccree:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/mccree.png',
		':meganium:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/meganium.png',
		':mei:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/mei.png',
		':meowstic:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/meowstic.png',
		':meowsticf:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/meowsticf.png',
		':meowth:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/meowth.png',
		':mercy:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/mercy.png',
		':mermaid:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/mermaid.png',
		':metagross:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/metagross.png',
		':mind:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/mind.png',
		':moo:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/moo.gif',
		':mrmime:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/mrmime.png',
		':mudkip:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/mudkip.png',
		':muk:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/muk.png',
		':no:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/no.png',
		':nw:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/nw.gif',
		':oddish:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/oddish.png',
		':ok:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/ok.png',
		':orisa:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/orisa.png',
		':pachirisu:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pachirisu.png',
		':pancham:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pancham.png',
		':pangoro:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pangoro.png',
		':papabless:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/papabless.png',
		':papi:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/papi.png',
		':pear:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pear.png',
		':petty:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/petty.png',
		':pharah:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pharah.png',
		':pikachu:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pikachu.png',
		':pikahug:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pikahug.png',
		':pix:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pix.png',
		':pjsalt:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pjsalt.png',
		':plot:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/plot.gif',
		':pogchamp:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pogchamp.png',
		':pole:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pole.png',
		':pose:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pose.gif',
		':potato:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/potato.png',
		':primeape:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/primeape.png',
		':psyduck:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/psyduck.png',
		':pyoshi:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/pyoshi.png',
		':raffey:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/raffey.png',
		':raichu:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/raichu.png',
		':rainbow:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/rainbow.gif',
		':ralts:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/ralts.png',
		':reaper:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/reaper.png',
		':reinhardt:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/reinhardt.png',
		':respek:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/respek.png',
		':roadhog:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/roadhog.png',
		':roll:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/roll.gif',
		':roselia:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/roselia.png',
		':rude:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/rude.gif',
		':sableye:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/sableye.png',
		':salute:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/salute.png',
		':scarfhug:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/scarfhug.png',
		':scizor:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/scizor.png',
		':seduce:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/seduce.png',
		':senpai:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/senpai.png',
		':sharpie:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/sharpie.png',
		':shift:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/shift.gif',
		':shifty:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/shifty.png',
		':shinx:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/shinx.png',
		':shinyhug:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/shinyhug.png',
		':sims:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/sims.png',
		':skarmory:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/skarmory.png',
		':slowbro:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/slowbro.png',
		':slowking:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/slowking.png',
		':slowpoke:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/slowpoke.png',
		':snivy:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/snivy.png',
		':snorlax:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/snorlax.png',
		':soldier76:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/soldier76.png',
		':sombra:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/sombra.png',
		':spasm:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/spasm.gif',
		':spheal:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/spheal.png',
		':spinda:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/spinda.png',
		':squint:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/squint.png',
		':squirtle:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/squirtle.png',
		':steelix:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/steelix.png',
		':stephenking:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/stephenking.png',
		':strut:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/strut.png',
		':suicune:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/suicune.png',
		':superman:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/superman.png',
		':sweep:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/sweep.gif',
		':swiftrage:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/swiftrage.png',
		':symmetra:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/symmetra.png',
		':taco:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/taco.png',
		':taillow:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/taillow.png',
		':thinkeng:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/thinkeng.png',
		':thonkeng:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/thinkeng.png',
		':thinkform:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/thinkform.png',
		':thonk:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/thonk.png',
		':thonkang:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/thonkang.png',
		':thugga:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/thugga.png',
		':torbjorn:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/torbjorn.png',
		':toxic:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/toxic.png',
		':tracer:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/tracer.png',
		':tyranitar:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/tyranitar.png',
		':ugh:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/ugh.gif',
		':uhhuh:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/uhhuh.png',
		':venusaur:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/venusaur.png',
		':victini:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/victini.gif',
		':viper:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/viper.png',
		':voltypride:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/voltypride.png',
		':vulpix:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/vulpix.png',
		':wailmer:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/wailmer.png',
		':wave:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/wave.gif',
		':weedle:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/weedle.png',
		':what:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/what.png',
		':why:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/why.png',
		':widowmaker:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/widowmaker.png',
		':wigglytuff:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/wigglytuff.png',
		':wink:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/wink.png',
		':winston:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/winston.png',
		':wlink:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/wlink.gif',
		':wobbuffet:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/wobbuffet.png',
		':wooper:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/wooper.png',
		':wutface:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/wutface.png',
		':wynaut:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/wynaut.png',
		':y:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/y.png',
		':yoshi:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/yoshi.png',
		':zarya:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/zarya.png',
		':zenyatta:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/zenyatta.png',
		':zzz:': 'https://raw.githubusercontent.com/awolffromspace/PS-Server/master/config/emoticons/zzz.gif',
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
