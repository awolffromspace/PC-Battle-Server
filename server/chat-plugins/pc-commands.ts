export const commands: ChatCommands = {
	elimtour: 'etour',
	etour(target, room, user) {
		if (!target) return this.sendReply(`Please provide a format.`);
		this.parse(`/tour new ${target}, elimination`);
	},

	roundrobintour: 'rtour',
	rtour(target, room, user) {
		if (!target) return this.sendReply(`Please provide a format.`);
		this.parse(`/tour new ${target}, roundrobin`);
	},

	dtour: 'doutour',
	doubletour: 'doutour',
	doutour(target, room, user) {
		if (!target) return this.sendReply(`Please provide a format.`);
		this.parse(`/tour new ${target}, elimination, 99, 2`);
	},

	ttour: 'tritour',
	tripletour: 'tritour',
	tritour(target, room, user) {
		if (!target) return this.sendReply(`Please provide a format.`);
		this.parse(`/tour new ${target}, elimination, 99, 3`);
	},

	eng: 'en',
	en(target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox(
			`Official chat rooms are English only. Other languages are allowed in battle rooms, private messages, and unofficial chat rooms.<br />` +
			`- <a href="https://translate.google.com/#en/en/Official%20chat%20rooms%20are%20English%20only.%20Other%20languages%20are%20allowed%20in%20battle%20rooms%2C%20private%20messages%2C%20and%20unofficial%20chat%20rooms.">TRANSLATION</a>`
		);
	},

	autojoinroom(target, room, user) {
		if (!this.can('makeroom')) return;
		if (target === 'off') {
			delete room.autojoin;
			this.addModAction(user.name + ` removed this room from the autojoin list.`);
			delete room.chatRoomData.autojoin;
			Rooms.global.writeChatRoomData();
		} else {
			room.autojoin = true;
			this.addModAction(user.name + ` added this room to the autojoin list.`);
			room.chatRoomData.autojoin = true;
			Rooms.global.writeChatRoomData();
		}
	},

	toggleladdermessage: 'toggleladdermsg',
	toggleladdermessages: 'toggleladdermsg',
	toggleladdermsg(target, room, user) {
		if (room.id !== 'lobby') return this.errorReply(`This command can only be used in Lobby.`);
		if (!this.can('warn')) return false;
		room.disableLadderMessages = !room.disableLadderMessages;
		this.sendReply(`Disallowing ladder messages is set to ` + room.disableLadderMessages + ` in this room.`);
		if (room.disableLadderMessages) {
			this.add(`|raw|<div class="broadcast-blue"><b>Ladder messages are disabled!</b><br>The "Battle!" button will no longer send messages in the Lobby.</div>`);
		} else {
			this.add(`|raw|<div class="broadcast-red"><b>Ladder messages are enabled!</b><br>The "Battle!" button will send messages in the Lobby.</div>`);
		}
	},
	toggleladdermsghelp: [`/toggleladdermsg - Toggle ladder messages on or off.`],

	togglebattlemessage: 'togglebattlemsg',
	togglebattlemessages: 'togglebattlemsg',
	togglebattlemsg(target, room, user) {
		if (!this.can('warn')) return false;
		if (Config.reportbattles === true) {
			Config.reportbattles = false;
			this.add(`|raw|<div class="broadcast-blue"><b>Battle messages are disabled!</b><br>Battles will no longer be reported in the Lobby.</div>`);
		} else {
			Config.reportbattles = true;
			this.add(`|raw|<div class="broadcast-red"><b>Battle messages are enabled!</b><br>Battles will be reported in the Lobby.</div>`);
		}
	},
	togglebattlemsghelp: [`/togglebattlemsg - Toggle battle messages on or off.`],

	plain: 'plaintext',
	plaintext(target, room, user) {
		if (!target) return;
		if (!this.runBroadcast()) return;
		const originalVersion = target;
		let newVersion = target;
		newVersion = newVersion.replace(/[^a-zA-Z0-9]|\s+/g, "");
		this.sendReplyBox(
			`Original version: ` + originalVersion + `<br />` +
			`Plain text version: ` + newVersion
		);
	},
};
