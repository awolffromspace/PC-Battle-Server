var Poll = {
	reset: function (roomId) {
		Poll[roomId] = {
			question: undefined,
			optionList: [],
			options: {},
			display: '',
			topOption: '',
		};
	},

	splint: function (target) {
		var parts = target.split(',');
		var len = parts.length;
		while (len--) {
			parts[len] = parts[len].trim();
		}
		return parts;
	},
};

for (var id in Rooms.rooms) {
	if (Rooms.rooms[id].type === 'chat' && !Poll[id]) {
		Poll[id] = {};
		Poll.reset(id);
	}
}

exports.commands = {
	defunctpoll: function (target, room, user) {
		if (!this.can('poll', null, room)) return false;
		if (!Poll[room.id]) Poll.reset(room.id);
		if (Poll[room.id].question) return this.sendReply("There is currently a tournament poll going on already.");
		if (!this.canTalk()) return;

		var options = Poll.splint(target);
		if (options.length < 3) return this.parse('/help defunctpoll');

		var question = options.shift();

		options = options.join(',').toLowerCase().split(',');

		Poll[room.id].question = question;
		Poll[room.id].optionList = options;

		var pollOptions = '';
		var start = 0;
		while (start < Poll[room.id].optionList.length) {
			pollOptions += '<button name="send" value="/tourvote ' + Tools.escapeHTML(Poll[room.id].optionList[start]) + '">' + Tools.escapeHTML(Poll[room.id].optionList[start]) + '</button>&nbsp;';
			start++;
		}
		Poll[room.id].display = '<h2>' + Tools.escapeHTML(Poll[room.id].question) + '&nbsp;&nbsp;<font size="1" color="#AAAAAA">/tourvote OPTION</font><br><font size="1" color="#AAAAAA">Tournament poll started by <em>' + user.name + '</em></font><br><hr>&nbsp;&nbsp;&nbsp;&nbsp;' + pollOptions;
		room.add('|raw|<div class="infobox">' + Poll[room.id].display + '</div>');
	},
	defunctpollhelp: ["/defunctpoll [question], [option 1], [option 2]... - Create a poll where users can vote on an option."],

	endtpoll: 'endtourpoll',
	endtournamentpoll: 'endtourpoll',
	endtourpoll: function (target, room, user) {
		if (!this.can('poll', null, room)) return false;
		if (!Poll[room.id]) Poll.reset(room.id);
		if (!Poll[room.id].question) return this.sendReply("There is no tournament poll to end in this room.");

		var votes = Object.keys(Poll[room.id].options).length;

		if (votes === 0) {
			Poll.reset(room.id);
			return room.add('|raw|<h3>The tournament poll was canceled because of lack of voters.</h3>');
		}

		var options = {};

		for (var l in Poll[room.id].optionList) {
			options[Poll[room.id].optionList[l]] = 0;
		}

		for (var o in Poll[room.id].options) {
			options[Poll[room.id].options[o]]++;
		}

		var data = [];
		for (var i in options) {
			data.push([i, options[i]]);
		}
		data.sort(function (a, b) {
			return a[1] - b[1];
		});

		var results = '';
		var len = data.length;
		var topOption = data[len - 1][0];
		while (len--) {
			if (data[len][1] > 0) {
				results += '&bull; ' + data[len][0] + ' - ' + Math.floor(data[len][1] / votes * 100) + '% (' + data[len][1] + ')<br>';
			}
		}
		room.add('|raw|<div class="infobox"><h2>Results to "' + Poll[room.id].question + '"</h2><font size="1" color="#AAAAAA"><strong>Tournament poll ended by <em>' + user.name + '</em></font><br><hr>' + results + '</strong></div>');
		Poll.reset(room.id);
		Poll[room.id].topOption = topOption;
	},

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

	tpollremind: 'tourpollremind',
	tremind: 'tourpollremind',
	tourremind: 'tourpollremind',
	tourpollremind: function (target, room, user) {
		if (!Poll[room.id]) Poll.reset(room.id);
		if (!Poll[room.id].question) return this.sendReply("There is no tournament poll currently going on in this room.");
		if (!this.canBroadcast()) return;
		this.sendReplyBox(Poll[room.id].display);
	},

	tpoll: 'tourpoll',
	tournamentpoll: 'tourpoll',
	tourneypoll: 'tourpoll',
	tourpoll: function (target, room, user) {
		if (!this.can('poll', null, room)) return false;
		this.parse("/defunctpoll Tournament format?," + "OU, Ubers, UU, RU, NU, PU, LC, Monotype, Random, [Seasonal] Random, Battle Factory, 1v1 Random, High Tier Random, Low Tier Random, Uber Random, LC Random, Monotype Random, Generational Random, Color Random, Inverse Random, Community Random, Hoenn Random, Hoenn Weather Random, Super Smash Bros. Random, Orb Random, Metronome 3v3 Random, Hackmons Cup, Doubles Random, Triples Random, [Gen 5] Random, [Gen 2] Random, [Gen 1] Random");
	},

	teampoll: function (target, room, user) {
		if (!this.can('poll', null, room)) return false;
		this.parse("/defunctpoll Tournament format?," + "OU, Ubers, UU, RU, NU, PU, LC, Monotype, Mix and Mega");
	},

	randbatpoll: 'randompoll',
	randbatspoll: 'randompoll',
	randpoll: 'randompoll',
	randompoll: function (target, room, user) {
		if (!this.can('poll', null, room)) return false;
		this.parse("/defunctpoll Tournament format?," + "Random, 1v1 Random, High Tier Random, Low Tier Random, Uber Random, LC Random, Monotype Random, Generational Random, Color Random, Inverse Random, Community Random, Hoenn Random, Hoenn Weather Random, Super Smash Bros. Random, Orb Random, Metronome 3v3 Random, Doubles Random, Triples Random, Battle Factory, Hackmons Cup, [Seasonal] Random, [Gen 5] Random, [Gen 2] Random, [Gen 1] Random");
	},

	tvote: 'tourvote',
	tournamentvote: 'tourvote',
	tourvote: function (target, room, user) {
		if (!Poll[room.id]) Poll.reset(room.id);
		if (!Poll[room.id].question) return this.sendReply("There is no tournament poll currently going on in this room.");
		if (!target) return this.parse('/help tourvote');
		if (Poll[room.id].optionList.indexOf(target.toLowerCase()) === -1) return this.sendReply("'" + target + "' is not an option for the current poll.");

		var ips = JSON.stringify(user.ips);
		Poll[room.id].options[ips] = target.toLowerCase();

		return this.sendReply("You are now voting for " + target + ".");
	},
	tourvotehelp: ["/vote [option] - Vote for an option in the tournament poll."],

	tvotes: 'tourvotes',
	tournamentvotes: 'tourvotes',
	tourvotes: function (target, room, user) {
		if (!this.canBroadcast()) return;
		if (!Poll[room.id]) Poll.reset(room.id);
		if (!Poll[room.id].question) return this.sendReply("There is no tournament poll currently going on in this room.");
		this.sendReply("NUMBER OF VOTES: " + Object.keys(Poll[room.id].options).length);
	},
};
