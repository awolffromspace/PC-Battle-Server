exports.commands = {
	elimtour: 'etour',
	etour: function (target, room, user) {
		if (!target) return this.sendReply("Please provide a format.");
		if ((this.can('tournamentsmoderation', null, room)) || (this.can('voicetourmoderation'))) {
			this.parse('/tour new ' + target + ', elimination');
		}
	},

	roundrobintour: 'rtour',
	rtour: function (target, room, user) {
		if (!target) return this.sendReply("Please provide a format.");
		if ((this.can('tournamentsmoderation', null, room)) || (this.can('voicetourmoderation'))) {
			this.parse('/tour new ' + target + ', roundrobin');
		}
	},

	dtour: 'doutour',
	doubletour: 'doutour',
	doutour: function (target, room, user) {
		if (!target) return this.sendReply("Please provide a format.");
		if ((this.can('tournamentsmoderation', null, room)) || (this.can('voicetourmoderation'))) {
			this.parse('/tour new ' + target + ', elimination, 99, 2');
		}
	},

	ttour: 'tritour',
	tripletour: 'tritour',
	tritour: function (target, room, user) {
		if (!target) return this.sendReply("Please provide a format.");
		if ((this.can('tournamentsmoderation', null, room)) || (this.can('voicetourmoderation'))) {
			this.parse('/tour new ' + target + ', elimination, 99, 3');
		}
	},

	eng: 'en',
	en: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox(
			"Official chat rooms are English only. Other languages are allowed in battle rooms, private messages, and unofficial chat rooms.<br />" +
			"- <a href=\"https://translate.google.com/#en/en/Official%20chat%20rooms%20are%20English%20only.%20Other%20languages%20are%20allowed%20in%20battle%20rooms%2C%20private%20messages%2C%20and%20unofficial%20chat%20rooms.\">TRANSLATION</a><br />" +
			"- <a href=\"http://www.pokecommunity.com/showthread.php?t=289012#rules\">PC Battle Server Rules</a>"
		);
	},

	sampleteam: 'sample',
	sampleteams: 'sample',
	sample: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox(
			"Sample teams:<br />" +
			"- <a href=\"http://www.smogon.com/forums/threads/sm-ou-sample-teams.3598705/\">OU</a><br />" +
			"- <a href=\"http://www.smogon.com/forums/threads/sample-teams-sm-submissions-open.3599816/\">Ubers</a><br />" +
			"- <a href=\"http://www.smogon.com/forums/threads/sm-uu-sample-teams-thread.3591880/\">UU</a><br />" +
			"- <a href=\"http://www.smogon.com/forums/threads/sm-ru-sample-teams-thread.3598090/\">RU</a><br />" +
			"- <a href=\"http://www.smogon.com/forums/threads/multigen-lc-sample-teams-from-adv-to-sm.3588679/\">LC</a><br />" +
			"- <a href=\"http://www.smogon.com/forums/threads/vgc-17-sample-teams.3590391/\">VGC 2017</a><br />" +
			"- <a href=\"http://www.smogon.com/forums/threads/doubles-ou-team-bazaar-sample-teams-here.3590987/\">Doubles OU</a><br />" +
			"- <a href=\"http://www.smogon.com/forums/threads/monotype-sample-teams.3599682/\">Monotype</a>"
		);
	},

	autojoinroom: function (target, room, user) {
		if (!this.can('makeroom')) return;
		if (target === 'off') {
			delete room.autojoin;
			this.addModCommand("" + user.name + " removed this room from the autojoin list.");
			delete room.chatRoomData.autojoin;
			Rooms.global.writeChatRoomData();
		} else {
			room.autojoin = true;
			this.addModCommand("" + user.name + " added this room to the autojoin list.");
			room.chatRoomData.autojoin = true;
			Rooms.global.writeChatRoomData();
		}
	},

	toggleladdermessage: 'toggleladdermsg',
	toggleladdermessages: 'toggleladdermsg',
	toggleladdermsg: function (target, room, user) {
		if (room.id !== 'lobby') return this.errorReply('This command can only be used in Lobby.');
		if (!this.can('warn')) return false;
		room.disableLadderMessages = !room.disableLadderMessages;
		this.sendReply("Disallowing ladder messages is set to " + room.disableLadderMessages + " in this room.");
		if (room.disableLadderMessages) {
			this.add('|raw|<div class=\"broadcast-blue\"><b>Ladder messages are disabled!</b><br>The "Battle!" button will no longer send messages in the Lobby.</div>');
		} else {
			this.add('|raw|<div class=\"broadcast-red\"><b>Ladder messages are enabled!</b><br>The "Battle!" button will send messages in the Lobby.</div>');
		}
	},
	toggleladdermsghelp: ["/toggleladdermsg - Toggle ladder messages on or off."],

	togglebattlemessage: 'togglebattlemsg',
	togglebattlemessages: 'togglebattlemsg',
	togglebattlemsg: function (target, room, user) {
		if (!this.can('warn')) return false;
		if (Config.reportbattles === true) {
			setting = false;
			Config.reportbattles = setting;
			this.add('|raw|<div class=\"broadcast-blue\"><b>Battle messages are disabled!</b><br>Battles will no longer be reported in the Lobby.</div>');
		} else {
			setting = true;
			Config.reportbattles = setting;
			this.add('|raw|<div class=\"broadcast-red\"><b>Battle messages are enabled!</b><br>Battles will be reported in the Lobby.</div>');
		}
	},
	togglebattlemsghelp: ["/togglebattlemsg - Toggle battle messages on or off."],

	plain: 'plaintext',
	plaintext: function (target, room, user) {
		if (!target) return;
		if (!this.runBroadcast()) return;
		let originalVersion = target;
		let newVersion = target;
		newVersion = newVersion.replace(/[^a-zA-Z0-9]|\s+/g, "");
		this.sendReplyBox(
			"Original version: " + originalVersion + "<br />" +
			"Plain text version: " + newVersion
		);
	},

	fancy: 'fancydeclare',
	fancydeclare: function (target, room, user) {
		if (!target) return this.parse('/help declare');
		if (!this.can('declare', null, room)) return false;

		if (!this.canTalk()) return;

		this.add('|raw|<div class="profile-title">' + target + '</div>');
		this.logModCommand(user.name + " declared " + target);
	},
};
