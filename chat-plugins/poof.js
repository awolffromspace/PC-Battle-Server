const absol98sk = [
	"If you're a trainer, talk with Pokemon!!"
];

const ahrmtic = [
	"ヽ(⩺▾⩹)ﾉ 乁(⩺▾⩹)ㄏ ᕙ(⩺▾⩹)ᕗ"
];

const amiy = [
	"went to find people to flop on.",
	"got swallowed whole by a Snorlax."
];

const anrindas = [
	"went back to the Dragon's Den."
];

const anthny = [
	"~(´・ω・`)~ Bye My Beautiful People ~(´・ω・`)~"
];

const axtheefrost = [
	"went to aliment Wobbuffet."
];

const bidoofftw = [
	"was forced onto bed by Kingdom of Tea."
];

const brcklesnar = [
	"F5! 1, 2, 3!"
];

const ctfrm = [
	"is better than Christos."
];

const christs = [
	"is everyone's favourite moderator."
];

const darkazelf = [
	"ill see you later......naked......wet......staring"
];

const darklight1999 = [
	"returns back to darkness."
];

const darkshadow6 = [
	"Never Give Up"
];

const ddrox13 = [
	"vanished instantly!"
];

const f4n = [
	"evoluciona a Pichu Tipo Hada."
];

const gloom = [
	"ya even ugly for a naga"
];

const hannumikkola = [
	"is stealing your food now."
];

const indiancharizard = [
	"was struck by Dragon Slayer Anrin's dark magic."
];

const kingdomofkappa = [
	"retreats to get more cucumbers."
];

const kingdomoftea = [
	"retreats to get more tea."
];

const kingnovat = [
	"Its time to fade away:/"
];

const mlod = [
	"~I Wanna Shine Sparkle Shine like the Princess Divine~"
];

const nidokingdra44 = [
	"is gone, everybody party! \o/"
];

const noanoodles = [
	" ٩(•౪•٩)三 "
];

const realluneh = [
	"Inhale my enragement child"
];

const rulerofsaprailia = [
	"Happy Flag Day"
];

const shinysquirtlesquad = [
	"is gone for class"
];

const slate = [
	"Believe in a smiling god, mon ch\u00e9ri."
];

const srinator = [
	"elfs smells too much, ima leave"
];

const thedarkaffliction = [
	"used explosion"
];

const wolf = [
	"howls to the moon.",
	"runs off into a forest."
];

const xcrystalberryx = [
	"Please don't be too sad. Crystal will return soon :)"
];

const zincoxide = [
	"reacts with the cosmos and vanishes."
];

exports.commands = {
	d: 'poof',
	cpoof: 'poof',
	poof: function (target, room, user) {
		if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
		if (!this.canTalk(message)) return false;
		var userid = user.name
		userid = userid.replace(/[^a-zA-Z0-9]|\s+/g, "");
		if (userid.toUpperCase() === 'WOLF') {
			var message = target || wolf[Math.floor(Math.random() * wolf.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'ABSOL98SK') {
			var message = target || absol98sk[Math.floor(Math.random() * absol98sk.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'AHRMTIC') {
			var message = target || ahrmtic[Math.floor(Math.random() * ahrmtic.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'AMIY' || userid.toUpperCase() === 'KIMISUMI') {
			var message = target || amiy[Math.floor(Math.random() * amiy.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'ANRINDAS' || userid.toUpperCase() === 'ANRINN') {
			var message = target || anrindas[Math.floor(Math.random() * anrindas.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'ANTHNY' || userid.toUpperCase() === 'AN7HONY') {
			var message = target || anthny[Math.floor(Math.random() * anthny.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'AXTHEEFROST' || userid.toUpperCase() === 'ANDYVENUS') {
			var message = target || axtheefrost[Math.floor(Math.random() * axtheefrost.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'BIDOOFFTW') {
			var message = target || bidoofftw[Math.floor(Math.random() * bidoofftw.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'BRCKLESNAR') {
			var message = target || brcklesnar[Math.floor(Math.random() * brcklesnar.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'CTFRM') {
			var message = target || ctfrm[Math.floor(Math.random() * ctfrm.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'CHRISTS') {
			var message = target || christs[Math.floor(Math.random() * christs.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'DARKAZELF') {
			var message = target || darkazelf[Math.floor(Math.random() * darkazelf.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'DARKLIGHT1999') {
			var message = target || darklight1999[Math.floor(Math.random() * darklight1999.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'DARKSHADOW6') {
			var message = target || darkshadow6[Math.floor(Math.random() * darkshadow6.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'DDROX13') {
			var message = target || ddrox13[Math.floor(Math.random() * ddrox13.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'F4N') {
			var message = target || f4n[Math.floor(Math.random() * f4n.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'GLOOM') {
			var message = target || gloom[Math.floor(Math.random() * gloom.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'HANNUMIKKOLA') {
			var message = target || hannumikkola[Math.floor(Math.random() * hannumikkola.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'INDIANCHARIZARD#' || userid.toUpperCase() === 'ASTRAEA') {
			var message = target || indiancharizard[Math.floor(Math.random() * indiancharizard.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'KINGDOMOFKAPPA') {
			var message = target || kingdomofkappa[Math.floor(Math.random() * kingdomofkappa.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'KINGDOMOFTEA') {
			var message = target || kingdomoftea[Math.floor(Math.random() * kingdomoftea.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'KINGNOVAT' || userid.toUpperCase() === 'KINGASRIEL' || userid.toUpperCase() === 'XELUSIVEEMERALDX') {
			var message = target || kingnovat[Math.floor(Math.random() * kingnovat.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'MLOD' || userid.toUpperCase() === 'PACHY' || userid.toUpperCase() === 'ELDY' || userid.toUpperCase() === 'ELOD') {
			var message = target || mlod[Math.floor(Math.random() * mlod.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'NIDOKINGDRA44') {
			var message = target || nidokingdra44[Math.floor(Math.random() * nidokingdra44.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'NOANOODLES' || userid.toUpperCase() === 'NOATAN') {
			var message = target || noanoodles[Math.floor(Math.random() * noanoodles.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'REALLUNEH') {
			var message = target || realluneh[Math.floor(Math.random() * realluneh.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'RULEROFSAPRAILIA') {
			var message = target || rulerofsaprailia[Math.floor(Math.random() * rulerofsaprailia.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'SHINYSQUIRTLESQUAD') {
			var message = target || shinysquirtlesquad[Math.floor(Math.random() * shinysquirtlesquad.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'EMPERR' || userid.toUpperCase() === 'SLATE') {
			var message = target || slate[Math.floor(Math.random() * slate.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'SRINATOR') {
			var message = target || srinator[Math.floor(Math.random() * srinator.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'THEDARKAFFLICTION') {
			var message = target || thedarkaffliction[Math.floor(Math.random() * thedarkaffliction.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'XCRYSTALBERRYX') {
			var message = target || xcrystalberryx[Math.floor(Math.random() * xcrystalberryx.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'ZINCOXIDE') {
			var message = target || zincoxide[Math.floor(Math.random() * zincoxide.length)];

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else {
			user.leaveRoom(room);
		}
	},

	poofoff: 'nopoof',
	nopoof: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = true;
		return this.sendReply("Poof is now disabled.");
	},

	poofon: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = false;
		return this.sendReply("Poof is now enabled.");
	},
};
