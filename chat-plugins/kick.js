'use strict';

exports.commands = {
	rk: 'kick',
	roomkick: 'kick',
	k: 'kick',
	kick: function (target, room, user) {
		if (!target) return;
		target = this.splitTarget(target);
		let targetUser = this.targetUser;
		if (!targetUser || !targetUser.connected) {
			return this.sendReply("User " + this.targetUsername + " not found.");
		}
		if (!this.can('kick', targetUser, room)) return false;
		let msg = "kicked by " + user.name + (target ? " (" + target + ")" : "") + ".";
		this.addModCommand("" + targetUser.name + " was " + msg);
		targetUser.popup("You have been " + msg);
		targetUser.leaveRoom(room);
	},

	ck: 'customkick',
	ckick: 'customkick',
	customkick: function (target, room, user) {
		if (!target) return;
		target = this.splitTarget(target);
		let targetUser = this.targetUser;
		if (!targetUser || !targetUser.connected) {
			return this.sendReply("User " + this.targetUsername + " not found.");
		}
		if (targetUser.userid === user.userid && !this.can('kick', targetUser, room)) return this.sendReply('Please buy a poof from the "/shop" instead.');
		let msg = (target ? " " + target + "" : "");
		this.add(targetUser.name + msg);
		this.logModCommand("" + targetUser.name + " was kicked by " + user.name + ".");
		targetUser.popup(targetUser.name + msg);
		targetUser.leaveRoom(room);
	},
};
