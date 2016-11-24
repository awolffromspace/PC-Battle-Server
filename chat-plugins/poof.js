'use strict';

const absol98sk = [
	"If you're a trainer, talk with Pokemon!!",
];

const ahrmtic = [
	"ヽ(⩺▾⩹)ﾉ 乁(⩺▾⩹)ㄏ ᕙ(⩺▾⩹)ᕗ",
];

const amiy = [
	"went to find people to flop on.",
	"got swallowed whole by a Snorlax.",
];

const anrindas = [
	"went back to the Dragon's Den.",
];

const anthny = [
	"~(´・ω・`)~ Bye My Beautiful People ~(´・ω・`)~",
];

const axtheefrost = [
	"went to aliment Wobbuffet.",
];

const bidoofftw = [
	"was forced onto bed by Kingdom of Tea.",
];

const brcklesnar = [
	"F5! 1, 2, 3!",
];

const ctfrm = [
	"is better than Christos.",
];

const christs = [
	"is everyone's favourite moderator.",
];

const darkazelf = [
	"ill see you later......naked......wet......staring",
];

const darklight1999 = [
	"returns back to darkness.",
];

const darkshadow6 = [
	"Never Give Up",
];

const ddrox13 = [
	"vanished instantly!",
];

const f4n = [
	"evoluciona a Pichu Tipo Hada.",
];

const gloom = [
	"ya even ugly for a naga",
];

const hannumikkola = [
	"is stealing your food now.",
];

const indiancharizard = [
	"was struck by Dragon Slayer Anrin's dark magic.",
];

const kingdomofkappa = [
	"retreats to get more cucumbers.",
];

const kingdomoftea = [
	"retreats to get more tea.",
];

const kingnovat = [
	"Its time to fade away:/",
];

const mlod = [
	"~I Wanna Shine Sparkle Shine like the Princess Divine~",
];

const nidokingdra44 = [
	"is gone, everybody party! \o/",
];

const noanoodles = [
	" ٩(•౪•٩)三 ",
];

const pelipperzachary = [
	"See you Later, Punks!",
];

const realluneh = [
	"Inhale my enragement child",
];

const rulerofsaprailia = [
	"Happy Flag Day",
];

const shinysquirtlesquad = [
	"is gone for class",
];

const slate = [
	"Believe in a smiling god, mon ch\u00e9ri.",
];

const srinator = [
	"elfs smells too much, ima leave",
];

const thedarkaffliction = [
	"used explosion",
];

const wolf = [
	"howls to the moon.",
	"runs off into a forest.",
];

const xcrystalberryx = [
	"Please don't be too sad. Crystal will return soon :)",
];

const zincoxide = [
	"reacts with the cosmos and vanishes.",
];

exports.commands = {
	d: 'poof',
	cpoof: 'poof',
	poof: function (target, room, user) {
		if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
		if (!this.canTalk()) return;
		if (target && !this.can('broadcast')) return false;

		let userid = user.name
		userid = userid.replace(/[^a-zA-Z0-9]|\s+/g, "");
		if (userid.toUpperCase() === 'WOLF') {
			let message = target || wolf[Math.floor(Math.random() * wolf.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'ABSOL98SK') {
			let message = target || absol98sk[Math.floor(Math.random() * absol98sk.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'AHRMTIC') {
			let message = target || ahrmtic[Math.floor(Math.random() * ahrmtic.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'AMIY' || userid.toUpperCase() === 'KIMISUMI') {
			let message = target || amiy[Math.floor(Math.random() * amiy.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'ANRINDAS' || userid.toUpperCase() === 'ANRINN') {
			let message = target || anrindas[Math.floor(Math.random() * anrindas.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'ANTHNY' || userid.toUpperCase() === 'AN7HONY') {
			let message = target || anthny[Math.floor(Math.random() * anthny.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'AXTHEEFROST' || userid.toUpperCase() === 'ANDYVENUS') {
			let message = target || axtheefrost[Math.floor(Math.random() * axtheefrost.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'BIDOOFFTW') {
			let message = target || bidoofftw[Math.floor(Math.random() * bidoofftw.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'BRCKLESNAR') {
			let message = target || brcklesnar[Math.floor(Math.random() * brcklesnar.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'CTFRM') {
			let message = target || ctfrm[Math.floor(Math.random() * ctfrm.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'CHRISTS') {
			let message = target || christs[Math.floor(Math.random() * christs.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'DARKAZELF') {
			let message = target || darkazelf[Math.floor(Math.random() * darkazelf.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'DARKLIGHT1999') {
			let message = target || darklight1999[Math.floor(Math.random() * darklight1999.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'DARKSHADOW6') {
			let message = target || darkshadow6[Math.floor(Math.random() * darkshadow6.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'DDROX13') {
			let message = target || ddrox13[Math.floor(Math.random() * ddrox13.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'F4N') {
			let message = target || f4n[Math.floor(Math.random() * f4n.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'GLOOM') {
			let message = target || gloom[Math.floor(Math.random() * gloom.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'HANNUMIKKOLA') {
			let message = target || hannumikkola[Math.floor(Math.random() * hannumikkola.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'INDIANCHARIZARD#' || userid.toUpperCase() === 'ASTRAEA') {
			let message = target || indiancharizard[Math.floor(Math.random() * indiancharizard.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'KINGDOMOFKAPPA') {
			let message = target || kingdomofkappa[Math.floor(Math.random() * kingdomofkappa.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'KINGDOMOFTEA') {
			let message = target || kingdomoftea[Math.floor(Math.random() * kingdomoftea.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'KINGNOVAT' || userid.toUpperCase() === 'KINGASRIEL' || userid.toUpperCase() === 'XELUSIVEEMERALDX') {
			let message = target || kingnovat[Math.floor(Math.random() * kingnovat.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'MLOD' || userid.toUpperCase() === 'PACHY' || userid.toUpperCase() === 'ELDY' || userid.toUpperCase() === 'ELOD') {
			let message = target || mlod[Math.floor(Math.random() * mlod.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'NIDOKINGDRA44') {
			let message = target || nidokingdra44[Math.floor(Math.random() * nidokingdra44.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'NOANOODLES' || userid.toUpperCase() === 'NOATAN') {
			let message = target || noanoodles[Math.floor(Math.random() * noanoodles.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'PELIPPERZACHARY') {
			let message = target || noanoodles[Math.floor(Math.random() * noanoodles.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'REALLUNEH') {
			let message = target || realluneh[Math.floor(Math.random() * realluneh.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'RULEROFSAPRAILIA' || userid.toUpperCase() === 'RULRFSAPRAILIA') {
			let message = target || rulerofsaprailia[Math.floor(Math.random() * rulerofsaprailia.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'SHINYSQUIRTLESQUAD') {
			let message = target || shinysquirtlesquad[Math.floor(Math.random() * shinysquirtlesquad.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'EMPERR' || userid.toUpperCase() === 'SLATE') {
			let message = target || slate[Math.floor(Math.random() * slate.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'SRINATOR') {
			let message = target || srinator[Math.floor(Math.random() * srinator.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'THEDARKAFFLICTION') {
			let message = target || thedarkaffliction[Math.floor(Math.random() * thedarkaffliction.length)];
			if (message.indexOf('{{user}}') < 0) {
				message = '{{user}} ' + message;
			}
			message = message.replace(/{{user}}/g, user.name);

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'XCRYSTALBERRYX') {
			let message = target || xcrystalberryx[Math.floor(Math.random() * xcrystalberryx.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
			user.leaveRoom(room);
		} else if (userid.toUpperCase() === 'ZINCOXIDE') {
			let message = target || zincoxide[Math.floor(Math.random() * zincoxide.length)];

			let colour = '#' + [1, 1, 1].map(function () {
				let part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Chat.escapeHTML(message) + ' ~~</font></strong></center>');
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
