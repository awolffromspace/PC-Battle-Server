var fs = require('fs');
var path = require('path');

var shop = [
	['Star', 'Buy a \u2606 that goes in front of your name and puts you at the top of the user list. It goes away whether you leave for more than one hour or the server restarts.', 3],
	['Ticket', 'Buy a lottery ticket for a chance to win lots of Battle Points. However, if you buy too many tickets, you may not make a profit.', 5],
	['Poof', 'Buy a poof message to be added into your pool of possible poofs. Poofs are custom leave messages that are used via "/poof".', 20],
	['Adjustment', 'Buy a one-time change for either your avatar or your join phrase. Don\'t buy this if you haven\'t bought an avatar or join phrase before. If you have a custom avatar and would like to apply it to other usernames, contact the admin wolf and don\'t buy this.', 30],
	['Title', 'Buy a user title for your profile. It can be seen via "/profile username". Check "/profile wolf" for an example.', 30],
	['BlackStar', 'Buy a \u2605 that goes in front of your name and puts you at the top of the user list. It lasts for four weeks.', 50],
	['Avatar', 'Buy a custom avatar to be applied to your name. You supply the image. Images larger than 80px by 80px don\'t show correctly in battles.', 60],
	['JoinPhrase', 'Buy a join phrase that the bot submits in the chat every time you join the Lobby.', 60]
];

var shopDisplay = getShopDisplay(shop);

/**
 * Gets an amount and returns the amount with the name of the currency.
 *
 * @examples
 * currencyName(0); // 0 bucks
 * currencyName(1); // 1 buck
 * currencyName(5); // 5 bucks
 *
 * @param {Number} amount
 * @returns {String}
 */
function currencyName(amount) {
	var name = " Battle Point";
	return amount === 1 ? name : name + "s";
}

/**
 * Checks if the money input is actually money.
 *
 * @param {String} money
 * @return {String|Number}
 */
function isBP(bp) {
	var numBP = Number(bp);
	if (isNaN(bp)) return "Must be a number.";
	if (String(bp).includes('.')) return "Cannot contain a decimal.";
	if (numBP < 1) return "Cannot be less than one Battle Point.";
	return numBP;
}

/**
 * Log money to logs/money.txt file.
 *
 * @param {String} message
 */
function logBP(message) {
	if (!message) return;
	var file = path.join(__dirname, '../logs/bp.txt');
	var date = "[" + new Date().toUTCString() + "] ";
	var msg = message + "\n";
	fs.appendFile(file, date + msg);
}

/**
 * Displays the shop
 *
 * @param {Array} shop
 * @return {String} display
 */
function getShopDisplay(shop) {
	var display = "<table border='1' cellspacing='0' cellpadding='5' width='100%'>" +
					"<tbody><tr><th>Command</th><th>Description</th><th>Cost</th></tr>";
	var start = 0;
	while (start < shop.length) {
		display += "<tr>" +
						"<td align='center'><button name='send' value='/buy " + shop[start][0] + "'><b>" + shop[start][0] + "</b></button>" + "</td>" +
						"<td align='center'>" + shop[start][1] + "</td>" +
						"<td align='center'>" + shop[start][2] + "</td>" +
					"</tr>";
		start++;
	}
	display += "</tbody></table><center>To buy an item from the shop, use /buy <em>command</em>.</center>";
	return display;
}


/**
 * Find the item in the shop.
 *
 * @param {String} item
 * @param {Number} money
 * @return {Object}
 */
function findItem(item, bp) {
	var len = shop.length;
	var price = 0;
	var amount = 0;
	while (len--) {
		if (item.toLowerCase() !== shop[len][0].toLowerCase()) continue;
		price = shop[len][2];
		if (price > bp) {
			amount = price - bp;
			this.sendReply("You don't have enough Battle Points for this. You need " + amount + currencyName(amount) + " more to buy " + item + ".");
			return false;
		}
		return price;
	}
	this.sendReply(item + " not found in shop.");
}

/**
 * Handling the bought item from the shop.
 *
 * @param {String} item
 * @param {Object} user
 * @param {Number} cost - for lottery
 */
function handleBoughtItem(item, user, cost) {
	if (item === 'star') {
		user.canCustomSymbol = true;
		this.sendReply("You have purchased a \u2606. You can use /star to get your \u2606.");
		this.sendReply("You will have this until you log off for more than an hour.");
		this.sendReply("If you do not want your \u2606 anymore, you may use /resetsymbol to go back to your old symbol.");
	} else if (item === 'ticket') {
		var _this = this;
		Database.get('pot', function (err, pot) {
			if (err) throw err;
			if (!pot) pot = 5;
			Database.set('pot', pot + 3,  function (err, pot) {
				if (err) throw err;
				Database.read('tickets', user.userid, function (err, tickets) {
					if (err) throw err;
					if (!tickets) tickets = [];
					var ticket = '' + rng() + rng() + rng();
					tickets.push(ticket);
					Database.write('tickets', tickets, user.userid, function (err) {
						if (err) throw err;
						_this.sendReply("Your ticket has this id: " + ticket + ". The jackpot is currently worth " + pot + currencyName(pot) + ". Use /tickets to view your ticket(s).");
					});
				});
			});
		});
	} else if (item === 'poof') {
		var msg = '**' + user.name + " has bought " + item + ".**";
		this.sendReply('Please contact the admin wolf to get ' + item + '. Use "/tell wolf, poof message here". If you want it to be set to any other usernames, mention them as well.');
	} else if (item === 'title' || item === 'joinphrase' || item === 'blackstar') {
		var msg = '**' + user.name + " has bought " + item + ".**";
		this.sendReply('Please contact the admins Castform, wolf, or Zeffy to get ' + item + '. Use "/tell wolf, message here". Swap "wolf" with "ctfrm" or "zeffy" to contact a different admin. If you bought a title or a join phrase, include your desired title or join phrase in the message.');
	} else {
		var msg = '**' + user.name + " has bought " + item + ".**";
		this.sendReply('Please contact the admin wolf to get ' + item + '. Use "/tell wolf, message here". If you bought an avatar or an adjustment for your avatar, include the image link in the message. If you bought an adjustment for your join phrase, include your desired join phrase in the message. If you want either of these to be set to any other usernames, mention them as well.');
	}
}

/**
 * Generates a random number between 0 and 1000.
 *
 * @return {Number}
 */
function rng() {
	return Math.floor(Math.random() * 1000);
}

exports.commands = {
	atm: 'wallet',
	purse: 'wallet',
	wallet: function (target, room, user) {
		if (!this.canBroadcast()) return;
		if (!target) target = user.name;

		Database.read('bp', toId(target), function (err, amount) {
			if (err) throw err;
			if (!amount) amount = 0;
			this.sendReplyBox(Tools.escapeHTML(target) + " has " + amount + currencyName(amount) + ".");
			room.update();
		}.bind(this));
	},
	wallethelp: ["/wallet [user] - Shows the amount of Battle Points a user has."],

	givebp: function (target, room, user) {
		if (!this.can('forcewin')) return false;
		if (!target || target.indexOf(',') < 0) return this.parse('/help givebp');

		var parts = target.split(',');
		var username = parts[0];
		var amount = isBP(parts[1]);

		if (typeof amount === 'string') return this.sendReply(amount);

		var _this = this;
		Database.read('bp', toId(username), function (err, initial) {
			if (err) throw err;
			if (!initial) initial = 0;
			Database.write('bp', initial + amount, toId(username), function (err, total) {
				if (err) throw err;
				amount = amount + currencyName(amount);
				total = total + currencyName(total);
				_this.sendReply(username + " was given " + amount + ". " + username + " now has " + total + ".");
				if (Users.get(username)) Users.get(username).popup(user.name + " has given you " + amount + ". You now have " + total + ".");
				logBP(username + " was given " + amount + " by " + user.name + ".");
			});
		});
	},
	givebphelp: ["/givebp [user], [amount] - Give a user a certain amount of Battle Points."],

	takebp: function (target, room, user) {
		if (!this.can('forcewin')) return false;
		if (!target || target.indexOf(',') < 0) return this.parse('/help takebp');

		var parts = target.split(',');
		var username = parts[0];
		var amount = isBP(parts[1]);

		if (typeof amount === 'string') return this.sendReply(amount);

		var _this = this;
		Database.read('bp', toId(username), function (err, initial) {
			if (err) throw err;
			if (!initial) initial = 0;
			Database.write('bp', initial - amount, toId(username), function (err, total) {
				if (err) throw err;
				amount = amount + currencyName(amount);
				total = total + currencyName(total);
				_this.sendReply(username + " lost " + amount + ". " + username + " now has " + total + ".");
				if (Users.get(username)) Users.get(username).popup(user.name + " has taken " + amount + " from you. You now have " + total + ".");
				logBP(username + " had " + amount + " taken away by " + user.name + ".");
			});
		});
	},
	takebphelp: ["/takebp [user], [amount] - Take a certain amount of Battle Points from a user."],

	resetbp: function (target, room, user) {
		if (!this.can('forcewin')) return false;
		Database.write('bp', 0, toId(target), function (err, total) {
			if (err) throw err;
			this.sendReply(target + " now has " + total + currencyName(total) + ".");
			logBP(user.name + " reset the bp of " + target + ".");
		}.bind(this));
	},
	resetbphelp: ["/resetbp [user] - Reset user's Battle Points to zero."],

	transfer: 'transferbp',
	transferbp: function (target, room, user) {
		if (!target || target.indexOf(',') < 0) return this.parse('/help transferbp');

		var parts = target.split(',');
		var username = parts[0];
		var amount = isBP(parts[1]);

		if (toId(username) === user.userid) return this.sendReply("You cannot transfer to yourself.");
		if (username.length > 19) return this.sendReply("Username cannot be longer than 19 characters.");
		if (typeof amount === 'string') return this.sendReply(amount);

		var _this = this;
		Database.read('bp', user.userid, function (err, userTotal) {
			if (err) throw err;
			if (!userTotal) userTotal = 0;
			if (amount > userTotal) return _this.sendReply("You cannot transfer more Battle Points than what you have.");
			Database.read('bp', toId(username), function (err, targetTotal) {
				if (err) throw err;
				if (!targetTotal) targetTotal = 0;
				Database.write('bp', userTotal - amount, user.userid, function (err, userTotal) {
					Database.write('bp', targetTotal + amount, toId(username), function (err, targetTotal) {
						amount = amount + currencyName(amount);
						userTotal = userTotal + currencyName(userTotal);
						targetTotal = targetTotal + currencyName(targetTotal);
						_this.sendReply("You have successfully transferred " + amount + " to " + username + ". You now have " + userTotal + ".");
						if (Users.get(username)) Users.get(username).popup(user.name + " has transferred " + amount + ". You now have " + targetTotal + ".");
						logBP(user.name + " transferred " + amount + " to " + username + ". " + user.name + " now has " + userTotal + " and " + username + " now has " + targetTotal + ".");
					});
				});
			});
		});
	},
	transferbphelp: ["/transfer [user], [amount] - Transfer a certain amount of Battle Points to a user."],

	store: 'shop',
	shop: function (target, room, user) {
		if (!this.canBroadcast()) return;
		return this.sendReply("|raw|" + shopDisplay);
	},
	shophelp: ["/shop - Display items you can buy with Battle Points."],

	buy: function (target, room, user) {
		if (!target) return this.parse('/help buy');
		var _this = this;
		Database.read('bp', user.userid, function (err, amount) {
			if (err) throw err;
			if (!amount) amount = 0;
			var cost = findItem.call(_this, target, amount);
			if (!cost) return room.update();
			Database.write('bp', amount - cost, user.userid, function (err, total) {
				if (err) throw err;
				_this.sendReply("You have bought " + target + " for " + cost +  currencyName(cost) + ". You now have " + total + currencyName(total) + " left.");
				room.addRaw(user.name + " has bought <b>" + target + "</b> from the shop.");
				logBP(user.name + " has bought " + target + " from the shop. This user now has " + total + currencyName(total) + ".");
				handleBoughtItem.call(_this, target.toLowerCase(), user, cost);
				room.update();
			});
		});
	},
	buyhelp: ["/buy [command] - Buys an item from the shop."],

	star: function (target, room, user) {
		if (!user.canCustomSymbol && user.id !== user.userid) return this.sendReply("You need to buy this item from the shop.");
		var symbol = '\u2606';
		user.getIdentity = function() {
			if (this.muted) return '!' + this.name;
			if (this.locked) return '‽' + this.name;
			return symbol + this.name;
		};
		user.updateIdentity();
		user.canCustomSymbol = false;
		user.hasCustomSymbol = true;
		return this.sendReply("Your \u2606 has been set.");
	},
	starhelp: ["/star - Get a \u2606."],

	resetcustomsymbol: 'resetsymbol',
	resetsymbol: function (target, room, user) {
		if (!user.hasCustomSymbol) return this.sendReply("You don't have a custom symbol.");
		user.getIdentity = function() {
			if (this.muted) return '!' + this.name;
			if (this.locked) return '‽' + this.name;
			return this.group + this.name;
		};
		user.hasCustomSymbol = false;
		delete user.getIdentity;
		user.updateIdentity();
		this.sendReply('Your symbol has been reset.');
	},
	resetsymbolhelp: ["/resetsymbol - Resets your custom symbol."],

	givetitle: function (target, room, user) {
		if (!this.can('forcewin')) return false;
		if (!target || target.indexOf(',') < 0) return this.parse('/help givetitle');

		var parts = target.split(',');
		var username = parts[0];
		var title = parts[1];

		if (typeof amount === 'string') return this.sendReply(amount);

		var _this = this;
		Database.read('title', toId(username), function (err, initial) {
			if (err) throw err;
			Database.write('title', title, toId(username), function (err, total) {
				if (err) throw err;
				_this.sendReply(username + " was given the profile title " + title + ".");
			});
		});
	},
	givetitlehelp: ["/givetitle [message] - Give a user a profile title."],

	bplog: function (target, room, user, connection) {
		if (!this.can('modlog')) return;
		var numLines = 15;
		var matching = true;
		if (target.match(/\d/g) && !isNaN(target)) {
			numLines = Number(target);
			matching = false;
		}
		var topMsg = "Displaying the last " + numLines + " lines of transactions:\n";
		var file = path.join(__dirname, '../logs/bp.txt');
		fs.exists(file, function (exists) {
			if (!exists) return connection.popup("No transactions.");
			fs.readFile(file, 'utf8', function (err, data) {
				data = data.split('\n');
				if (target && matching) {
					data = data.filter(function (line) {
						return line.toLowerCase().indexOf(target.toLowerCase()) >= 0;
					});
				}
				connection.popup('|wide|' + topMsg + data.slice(-(numLines + 1)).join('\n'));
			});
		});
	},

	bpladder: 'richestuser',
	richladder: 'richestuser',
	richestusers: 'richestuser',
	richestuser: function (target, room, user) {
		if (!this.canBroadcast()) return;
		var _this = this;
		var display = '<center><u><b>Richest Users</b></u></center><br><table border="1" cellspacing="0" cellpadding="5" width="100%"><tbody><tr><th>Rank</th><th>Username</th><th>bp</th></tr>';
		Database.sortDesc('bp', 10, function (err, users) {
			if (err) throw err;
			if (!users.length) {
				_this.sendReplyBox("Battle Points ladder is empty.");
			} else {
				users.forEach(function (user, index) {
					display += "<tr><td>" + (index + 1) + "</td><td>" + user.username + "</td><td>" + user.bp + "</td></tr>";
				});
				display += "</tbody></table>";
				_this.sendReply("|raw|" + display);
			}
			room.update();
		});
	},

	dicegame: 'startdice',
	dicestart: 'startdice',
	startdice: function (target, room, user) {
		if (!this.can('broadcast', null, room)) return false;
		if (!target) return this.parse('/help startdice');
		if (!this.canTalk()) return this.errorReply("You can not start dice games while unable to speak.");

		var amount = isBP(target);

		if (typeof amount === 'string') return this.sendReply(amount);
		if (!room.dice) room.dice = {};
		if (room.dice.started) return this.errorReply("A dice game has already started in this room.");

		room.dice.started = true;
		room.dice.bet = amount;
		// Prevent ending a dice game too early.
		room.dice.startTime = Date.now();

		room.addRaw("<div class='infobox'><h2><center><font color=#24678d>" + user.name + " has started a dice game for </font><font color=red>" + amount + "</font><font color=#24678d>" + currencyName(amount) + ".</font><br><button name='send' value='/joindice'>Click to join.</button></center></h2></div>");
	},
	startdicehelp: ["/startdice [bet] - Start a dice game to gamble for Battle Points."],

	joindice: function (target, room, user) {
		if (!room.dice || (room.dice.p1 && room.dice.p2)) return this.errorReply("There is no dice game in it's signup phase in this room.");
		if (!this.canTalk()) return this.errorReply("You may not join dice games while unable to speak.");
		if (room.dice.p1 === user.userid) return this.errorReply("You already entered this dice game.");
		var _this = this;
		Database.read('bp', user.userid, function (err, userBP) {
			if (err) throw err;
			if (!userBP) userBP = 0;
			if (userBP < room.dice.bet) return _this.errorReply("You don't have enough Battle Points to join this game.");
			Database.write('bp', userBP - room.dice.bet, user.userid, function (err) {
				if (err) throw err;
				if (!room.dice.p1) {
					room.dice.p1 = user.userid;
					room.addRaw("<b>" + user.name + " has joined the dice game.</b>");
					return room.update();
				}
				room.dice.p2 = user.userid;
				room.addRaw("<b>" + user.name + " has joined the dice game.</b>");
				var p1Number = Math.floor(6 * Math.random()) + 1;
				var p2Number = Math.floor(6 * Math.random()) + 1;
				var output = "<div class='infobox'>Game has two players, starting now.<br>Rolling the dice.<br>" + room.dice.p1 + " has rolled a " + p1Number + ".<br>" + room.dice.p2 + " has rolled a " + p2Number + ".<br>";
				while (p1Number === p2Number) {
					output += "Tie... rolling again.<br>";
					p1Number = Math.floor(6 * Math.random()) + 1;
					p2Number = Math.floor(6 * Math.random()) + 1;
					output += room.dice.p1 + " has rolled a " + p1Number + ".<br>" + room.dice.p2 + " has rolled a " + p2Number + ".<br>";
				}
				var winner = room.dice[p1Number > p2Number ? 'p1' : 'p2'];
				var loser = room.dice[p1Number < p2Number ? 'p1' : 'p2'];
				var bet = room.dice.bet;
				output += "<font color=#24678d><b>" + winner + "</b></font> has won <font color=#24678d><b>" + bet + "</b></font>" + currencyName(bet) + ".<br>Better luck next time " + loser + "!</div>";
				room.addRaw(output);
				room.update();
				delete room.dice;
				Database.read('bp', winner, function (err, total) {
					if (err) throw err;
					if (!total) total = 0;
					Database.write('bp', total + bet * 2, winner, function (err) {
						if (err) throw err;
					});
				});
			});
		});
	},

	enddice: function (target, room, user) {
		if (!user.can('broadcast', null, room)) return false;
		if (!room.dice) return this.errorReply("There is no dice game in this room.");
		if ((Date.now() - room.dice.startTime) < 15000 && !user.can('broadcast', null, room)) return this.errorReply("Regular users may not end a dice game within the first minute of it starting.");
		if (room.dice.p2) return this.errorReply("Dice game has already started.");
		var dice = room.dice;
		if (dice.p1) {
			Database.read('bp', dice.p1, function (err, total) {
				if (err) throw err;
				if (!total) total = 0;
				Database.write('bp', total + dice.bet, dice.p1, function (err) {
					if (err) throw err;
				});
			});
		}
		delete room.dice;
		room.addRaw("<b>" + user.name + " ended the dice game.</b>");
	},

	ticket: 'tickets',
	tickets: function (target, room, user) {
		if (!this.canBroadcast()) return;
		Database.read('tickets', user.userid, function (err, tickets) {
				if (err) throw err;
				if (!tickets || !tickets.length) {
					this.sendReplyBox("You have no tickets.");
				} else {
					this.sendReplyBox("You have a total of " + tickets.length + " ticket(s). These are your ticket's ids: " + tickets.join(", ") + ".");
				}
				room.update();
			}.bind(this));
	},

	picklottery: function (target, room, user) {
		if (!this.can('picklottery')) return false;
		var _this = this;
		Database.users(function (err, users) {
			if (err) throw err;
			users = users.filter(function (user) {
				return user.tickets && user.tickets.length > 0;
			});
			var tickets = [];
			users.forEach(function (user) {
				if (!Array.isArray(user.tickets)) user.tickets = user.tickets.split(', ');
				user.tickets.forEach(function (ticket) {
					tickets.push({username: user.username, ticket: ticket});
				});
			});
			var winningIndex = Math.floor(Math.random() * tickets.length);
			var winner = tickets[winningIndex];
			Database.get('pot', function (err, pot) {
				if (err) throw err;
				var winnings = pot;
				if (!winner) return _this.sendReply("No one has bought tickets.");
				Database.read('bp', winner.username, function (err, amount) {
					if (err) throw err;
					if (!amount) amount = 0;
					Database.write('bp', amount + winnings, winner.username, function (err, total) {
						if (err) throw err;
						var msg = "<center><h2>Lottery!</h2><h4><font color='red'><b>" + winner.username + "</b></font> has won the lottery with the ticket id of " + winner.ticket + "! This user has gained " + winnings + currencyName(winnings) + " and now has a total of " + total + currencyName(total) + ".</h4></center>";
						_this.parse('/declare ' + msg);
						room.update();
						Database.set('pot', 5, function (err) {
							if (err) throw err;
							users.forEach(function (user) {
								Database.write('tickets', null, user.username, function (err) {
									if (err) throw err;
								});
							});
						});
					});
				});
			});
		});
	},

	jackpot: 'pot',
	pot: function (target, room, user) {
		if (!this.canBroadcast()) return;
		Database.get('pot', function (err, pot) {
			if (err) throw err;
			if (!pot) pot = 5;
			this.sendReplyBox("The current jackpot is " + pot + currencyName(pot) + ".");
		}.bind(this));
	},

	bpstats: 'economystats',
	economystats: function (target, room, user) {
		if (!this.canBroadcast()) return;
		var _this = this;
		Database.total('bp', function (err, total) {
			Database.countUsers(function (err, numUsers) {
				var average = Math.floor(total / numUsers);
				var output = "There is " + total + currencyName(total) + " circulating in the economy. ";
				output += "The average user has " + average + currencyName(average) + ".";
				_this.sendReplyBox(output);
			});
			room.update();
		});
	}

};
