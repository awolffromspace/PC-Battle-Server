'use strict';
/*eslint no-restricted-modules: [0]*/

let color = require('../config/color');
let moment = require('moment');

let BR = '<br>';
let SPACE = '&nbsp;';
let profileColor = '#474bb3';
let trainersprites = [1, 2, 101, 102, 169, 170, 265, 266, 168];

/**
 * Profile constructor.
 *
 * @param {Boolean} isOnline
 * @param {Object|String} user - if isOnline then Object else String
 * @param {String} image
 */
function Profile(isOnline, user, image) {
	this.isOnline = isOnline || false;
	this.user = user || null;
	this.image = image;

	this.username = Chat.escapeHTML(this.isOnline ? this.user.name : this.user);
	this.url = Config.avatarurl || '';
}

/**
 * Create an bold html tag element.
 *
 * Example:
 * createFont('Hello World!');
 * => '<b>Hello World!</b>'
 *
 * @param {String} color
 * @param {String} text
 * @return {String}
 */
function bold(text) {
	return '<b>' + text + '</b>';
}

/**
 * Create an font html tag element.
 *
 * Example:
 * createFont('Hello World!', 'blue');
 * => '<font color="blue">Hello World!</font>'
 *
 * @param {String} color
 * @param {String} text
 * @return {String}
 */
function font(color, text) {
	return '<font color="' + color + '">' + text + '</font>';
}

/**
 * Create an img tag element.
 *
 * Example:
 * createImg('phil.png');
 * => '<img src="phil.png" height="80" width="80" align="left">'
 *
 * @param {String} link
 * @return {String}
 */
function img(link) {
	return '<img src="' + link + '" class="trainersprite">';
}

/**
 * Create a font html element wrap around by a bold html element.
 * Uses to `profileColor` as a color.
 * Adds a colon at the end of the text and a SPACE at the end of the element.
 *
 * Example:
 * label('Name');
 * => '<b><font color="#24678d">Name:</font></b> '
 *
 * @param {String} text
 * @return {String}
 */
function label(text) {
	return bold(font(profileColor, text + ':')) + SPACE;
}

function currencyName(amount) {
	let name = " Battle Point";
	return amount === 1 ? name : name + "s";
}

Profile.prototype.avatar = function () {
	if (this.isOnline) {
		if (typeof this.image === 'string') return img(this.url + this.image);
		return img('http://play.pokemonshowdown.com/sprites/trainers/' + this.image + '.png');
	}
	for (let name in Config.customAvatars) {
		if (this.username === name) {
			return img(this.url + Config.customAvatars[name]);
		}
	}
	let selectedSprite = trainersprites[Math.floor(Math.random() * trainersprites.length)];
	return img('http://play.pokemonshowdown.com/sprites/trainers/' + selectedSprite + '.png');
};

Profile.prototype.buttonAvatar = function () {
	let css = 'border:none;background:none;padding:0;float:left;';
	return '<button style="' + css + '" name="parseCommand" value="/user ' + this.username + '">' + this.avatar() + "</button>";
};

Profile.prototype.group = function () {
	if (this.isOnline && this.user.group === ' ') return label('Group') + 'Regular User';
	if (this.isOnline) return label('Group') + Config.groups[this.user.group].name;
	for (let name in Users.usergroups) {
		if (toId(this.username) === name) {
			return label('Group') + Config.groups[Users.usergroups[name].charAt(0)].name;
		}
	}
	return label('Group') + 'Regular User';
};

Profile.prototype.money = function (amount) {
	return label('Battle Points') + amount;
};

Profile.prototype.name = function () {
	return label('Name') + bold(font(color(toId(this.username)), this.username));
};

Profile.prototype.seen = function (timeAgo) {
	if (this.isOnline) return label('Last Seen') + font('#2ECC40', 'Currently Online');
	if (!timeAgo) return label('Last Seen') + 'Never';
	return label('Last Seen') + moment(timeAgo).fromNow();
};

Profile.prototype.title = function (user) {
	let title = Db('titles').get(user);
	if (!Db('titles').has(user)) return '';
	return SPACE + title;
};

Profile.prototype.show = function (callback) {
	let userid = toId(this.username);
	
		return this.buttonAvatar() +
			SPACE + this.name() + this.title(userid) + BR +
			SPACE + this.group() + BR +
			SPACE + this.money(Db('bp').get(userid, 0)) + BR +
			SPACE + this.seen(Db('seen').get(userid)) +
			'<br clear="all">';
	}
};

exports.commands = {
	profile: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (target.length >= 19) return this.sendReply("Usernames are required to be less than 19 characters long.");
		let targetUser = this.targetUserOrSelf(target);
		let profile;
		if (!targetUser) {
			profile = new Profile(false, target);
		} else {
			profile = new Profile(true, targetUser, targetUser.avatar);
		}
		this.sendReplyBox(profile.show());
	},
	profilehelp: ["/profile -	Shows information regarding user'sname, group, Battle Points, and when they were last seen."],
	
		title: function (target) {
		let parts = target.split(', ');
		if (!this.can('broadcast')) return false;
		let user = parts[1];
		if (!user) return this.parse("/help title");
		if (!parts[0]) return this.parse("/help title");
		if (hasUpperCase(user) && parts[0] === 'set') { //Ensure the username isn't capitalized
			return this.parse("/title " + parts[0] + ", " + parts[1].toLowerCase() + ", " + parts[2] + ", " + parts[3]); // Re-Parse the command with the username lowercased
		}

		switch (parts[0]) {
		case 'set':
			let hex = parts[2];
			let text = parts[3];
			if (!hex || !text) return this.errorReply("Ensure you have set a title and hex");

			let title = '<font color = ' + hex + '><b>(' + text + ')</b></font>';
			if (Db('titles').has(user)) return false;
			Db('titles').set(user, title);
			Users(user).send('|popup| You have recieved a custom title');
			this.sendReply('|html|You have set the custom title');
			break;
		case 'delete':
			if (!Db('titles').has(user)) return false;
			Db('titles').delete(user);
			Users(user).send('|popup| Your custom title has been removed');
			this.sendReply("You have removed " + user + "s' custom title");
			break;
		default:
			this.parse("/help title");
		}
	},
	titlehelp: ["/title set, user, hex, title - Sets a users title",
		"/title delete, user - Deletes a users title.",
	],
};
