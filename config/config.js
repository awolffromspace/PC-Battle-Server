'use strict';

/**
 * The server ID - a unique ID describing this Showdown server
 */
exports.serverid = 'pokecommunity';

/**
 * The server token - to access the login database and ladder on pokemonshowdown.com
 *   This token must be registered for accessing the ladder, but you will
 *   still be able to login with an unregistered token.
 */
exports.servertoken = '';

/**
 * The server port - the port to run Pokemon Showdown under
 */
exports.port = 8000;

/**
 * The server address - the address at which Pokemon Showdown should be hosting
 *   This should be kept set to 0.0.0.0 unless you know what you're doing.
 */
exports.bindaddress = '0.0.0.0';

/**
 * workers - the number of networking child processes to spawn
 *   This should be no greater than the number of threads available on your
 *   server's CPU. If you're not sure how many you have, you can check from a
 *   terminal by running:
 *
 *   $ node -e "console.log(require('os').cpus().length)"
 *
 *   Using more workers than there are available threads will cause performance
 *   issues. Keeping a couple threads available for use for OS-related work and
 *   other PS processes will likely give you the best performance, if your
 *   server's CPU is capable of multithreading. If you don't know what any of
 *   this means or you are unfamiliar with PS' networking code, leave this set
 *   to 1.
 */
exports.workers = 1;

/**
 * wsdeflate - compresses WebSocket messages
 *  Toggles use of the Sec-WebSocket-Extension permessage-deflate extension.
 *  This compresses messages sent and received over a WebSocket connection
 *  using the zlib compression algorithm. As a caveat, message compression
 *  may make messages take longer to procress.
 * @type {AnyObject?}
 */
exports.wsdeflate = null;

/*
// example:
exports.wsdeflate = {
	level: 5,
	memLevel: 8,
	strategy: 0,
	noContextTakeover: true,
	requestNoContextTakeover: true,
	maxWindowBits: 15,
	requestMaxWindowBits: 15,
}; */

/**
 * ssl - support WSS, allowing you to access through HTTPS
 *  The client requires port 443, so if you use a different port here,
 *  it will need to be forwarded to 443 through iptables rules or
 *  something.
 * @type {{port: number, options: {key: string, cert: string}} | null}
 */
exports.ssl = null;

/*
// example:
exports.ssl = {
	port: 443,
	options: {
		key: './config/ssl/privkey.pem',
		cert: './config/ssl/fullchain.pem',
	},
};
*/

/*
Main's SSL deploy script from Let's Encrypt looks like:
	cp /etc/letsencrypt/live/sim.psim.us/privkey.pem ~user/Pokemon-Showdown/config/ssl/
	cp /etc/letsencrypt/live/sim.psim.us/fullchain.pem ~user/Pokemon-Showdown/config/ssl/
	chown user:user ~user/Pokemon-Showdown/config/ssl/privkey.pem
	chown user:user ~user/Pokemon-Showdown/config/ssl/fullchain.pem
*/

/**
 * proxyip - proxy IPs with trusted X-Forwarded-For headers
 *   This can be either false (meaning not to trust any proxies) or an array
 *   of strings. Each string should be either an IP address or a subnet given
 *   in CIDR notation. You should usually leave this as `false` unless you
 *   know what you are doing
 * @type {false | string[]}.
 */
exports.proxyip = false;

/**
 * ofe - write heapdumps if the main process or sockets processes run out of memory.
 *   If you wish to enable this, you will need to install node-oom-heapdump,
 *   as it is sometimes not installed by default:
 *     $ npm install node-oom-heapdump
 *
 * You might want to signal processes to put them in debug mode, for completeness
 *
 * kill -s SIGUSR1 [pid]
 */
exports.ofemain = false;
exports.ofesockets = false;

/**
 * Pokemon of the Day - put a pokemon's name here to make it Pokemon of the Day
 *   The PotD will always be in the #2 slot (not #1 so it won't be a lead)
 *   in every Random Battle team.
 */
exports.potd = '';

/**
 * crash guard - write errors to log file instead of crashing
 *   This is normally not recommended - if Node wants to crash, the
 *   server needs to be restarted
 *   However, most people want the server to stay online even if there is a
 *   crash, so this option is provided
 */
exports.crashguard = true;

/**
 * login server data - don't forget the http:// and the trailing slash
 *   This is the URL of the user database and ladder mentioned earlier.
 *   Don't change this setting - there aren't any other login servers right now
 */
exports.loginserver = 'http://play.pokemonshowdown.com/';
exports.loginserverkeyalgo = "RSA-SHA1";
exports.loginserverpublickeyid = 4;
exports.loginserverpublickey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAzfWKQXg2k8c92aiTyN37
dl76iW0aeAighgzeesdar4xZT1A9yzLpj2DgR8F8rh4R32/EVOPmX7DCf0bYWeh3
QttP0HVKKKfsncJZ9DdNtKj1vWdUTklH8oeoIZKs54dwWgnEFKzb9gxqu+z+FJoQ
vPnvfjCRUPA84O4kqKSuZT2qiWMFMWNQPXl87v+8Atb+br/WXvZRyiLqIFSG+ySn
Nwx6V1C8CA1lYqcPcTfmQs+2b4SzUa8Qwkr9c1tZnXlWIWj8dVvdYtlo0sZZBfAm
X71Rsp2vwEleSFKV69jj+IzAfNHRRw+SADe3z6xONtrJOrp+uC/qnLNuuCfuOAgL
dnUVFLX2aGH0Wb7ZkriVvarRd+3otV33A8ilNPIoPb8XyFylImYEnoviIQuv+0VW
RMmQlQ6RMZNr6sf9pYMDhh2UjU11++8aUxBaso8zeSXC9hhp7mAa7OTxts1t3X57
72LqtHHEzxoyLj/QDJAsIfDmUNAq0hpkiRaXb96wTh3IyfI/Lqh+XmyJuo+S5GSs
RhlSYTL4lXnj/eOa23yaqxRihS2MT9EZ7jNd3WVWlWgExIS2kVyZhL48VA6rXDqr
Ko0LaPAMhcfETxlFQFutoWBRcH415A/EMXJa4FqYa9oeXWABNtKkUW0zrQ194btg
Y929lRybWEiKUr+4Yw2O1W0CAwEAAQ==
-----END PUBLIC KEY-----
`;

/**
 * routes - where Pokemon Showdown is hosted.
 *   Don't change this setting - there aren't any other options right now
 */
exports.routes = {
	root: 'pokemonshowdown.com',
	client: 'play.pokemonshowdown.com',
	dex: 'dex.pokemonshowdown.com',
	replays: 'replay.pokemonshowdown.com',
};

/**
 * crashguardemail - if the server has been running for more than an hour
 *   and crashes, send an email using these settings, rather than locking down
 *   the server. Uncomment this definition if you want to use this feature;
 *   otherwise, all crashes will lock down the server. If you wish to enable
 *   this setting, you will need to install nodemailer, as it is not installed
 *   by default:
 *     $ npm install nodemailer
 * @type {AnyObject?}
 */
exports.crashguardemail = null;
/* exports.crashguardemail = {
	options: {
		host: 'mail.example.com',
		port: 465,
		secure: true,
		auth: {
			user: 'example@domain.com',
			pass: 'password'
		}
	},
	from: 'crashlogger@example.com',
	to: 'admin@example.com',
	subject: 'Pokemon Showdown has crashed!'
}; */

/**
 * basic name filter - removes characters used for impersonation
 *   The basic name filter removes Unicode characters that can be used for impersonation,
 *   like the upside-down exclamation mark (looks like an i), the Greek omicron (looks
 *   like an o), etc. Disable only if you need one of the alphabets it disables, such as
 *   Greek or Cyrillic.
 */
exports.disablebasicnamefilter = true;

/**
 * allowrequestingties - enables the use of `/offerdraw` and `/acceptdraw`
 */
exports.allowrequestingties = true;

/**
 * report joins and leaves - shows messages like "<USERNAME> joined"
 *   Join and leave messages are small and consolidated, so there will never
 *   be more than one line of messages.
 *   If this setting is set to `true`, it will override the client-side
 *   /hidejoins configuration for users.
 *   This feature can lag larger servers - turn this off if your server is
 *   getting more than 80 or so users.
 */
exports.reportjoins = true;

/**
 * report joins and leaves periodically - sends silent join and leave messages in batches
 *   This setting will only be effective if `reportjoins` is set to false, and users will
 *   only be able to see the messages if they have the /showjoins client-side setting enabled.
 *   Set this to a positive amount of milliseconds if you want to enable this feature.
 */
exports.reportjoinsperiod = 0;

/**
 * report battles - shows messages like "OU battle started" in the lobby
 *   This feature can lag larger servers - turn this off if your server is
 *   getting more than 160 or so users.
 */
exports.reportbattles = true;

/**
 * report joins and leaves in battle - shows messages like "<USERNAME> joined" in battle
 *   Set this to false on large tournament servers where battles get a lot of joins and leaves.
 *   Note that the feature of turning this off is deprecated.
 */
exports.reportbattlejoins = true;

/**
 * notify staff when users have a certain amount of room punishments.
 *   Setting this to a number greater than zero will notify staff for everyone with
 *   the required amount of room punishments.
 *   Set this to 0 to turn the monitor off.
 */
exports.monitorminpunishments = 3;

/**
 * allow punishmentmonitor to lock users with multiple roombans.
 *	 When set to `true`, this feature will automatically lock any users with three or more
 *	 active roombans, and notify the staff room.
 *   Note that this requires punishmentmonitor to be enabled, and therefore requires the `monitorminpunishments`
 *   option to be set to a number greater than zero. If `monitorminpunishments` is set to a value greater than 3,
 *   the autolock will only apply to people who pass this threshold.
 */
exports.punishmentautolock = false;

/**
 * restrict sending links to autoconfirmed users only.
 *   If this is set to `true`, only autoconfirmed users can send links to either chatrooms or other users, except for staff members.
 *   This option can be used if your server has trouble with spammers mass PMing links to users, or trolls sending malicious links.
 */
exports.restrictLinks = false;

/**
 * whitelist - prevent users below a certain group from doing things
 *   For the modchat settings, false will allow any user to participate, while a string
 *   with a group symbol will restrict it to that group and above. The string
 *   'autoconfirmed' is also supported for chatmodchat and battlemodchat, to restrict
 *   chat to autoconfirmed users.
 *   This is usually intended to be used as a whitelist feature - set these to '+' and
 *   voice every user you want whitelisted on the server.

/**
  * chat modchat - default minimum group for speaking in chatrooms; changeable with /modchat
  * @type {false | string}
 */
exports.chatmodchat = false;
/**
 * battle modchat - default minimum group for speaking in battles; changeable with /modchat
 * @type {false | string}
 */
exports.battlemodchat = false;
/**
 * pm modchat - minimum group for PMing other users, challenging other users
 * @type {false | string}
 */
exports.pmmodchat = false;
/**
 * ladder modchat - minimum group for laddering
 * @type {false | GroupSymbol}
 */
exports.laddermodchat = false;

/**
 * forced timer - force the timer on for all battles
 *   Players will be unable to turn it off.
 *   This setting can also be turned on with the command /forcetimer.
 */
exports.forcetimer = false;

/**
 * backdoor - allows Pokemon Showdown system operators to provide technical
 *            support for your server
 *   This backdoor gives system operators (such as Zarel) console admin
 *   access to your server, which allow them to provide tech support. This
 *   can be useful in a variety of situations: if an attacker attacks your
 *   server and you are not online, if you need help setting up your server,
 *   etc. If you do not trust Pokemon Showdown with admin access, you should
 *   disable this feature.
 */
exports.backdoor = true;

/**
 * List of IPs and user IDs with dev console (>> and >>>) access.
 * The console is incredibly powerful because it allows the execution of
 * arbitrary commands on the local computer (as the user running the
 * server). If an account with the console permission were compromised,
 * it could possibly be used to take over the server computer. As such,
 * you should only specify a small range of trusted IPs and users here,
 * or none at all. By default, only localhost can use the dev console.
 * In addition to connecting from a valid IP, a user must *also* have
 * the `console` permission in order to use the dev console.
 * Setting this to an empty array ([]) will disable the dev console.
 */
exports.consoleips = ['127.0.0.1'];

/**
 * Whether to watch the config file for changes. If this is enabled,
 * then the config.js file will be reloaded when it is changed.
 * This can be used to change some settings using a text editor on
 * the server.
 */
exports.watchconfig = true;

/**
 * logchat - whether to log chat rooms.
 */
exports.logchat = true;

/**
 * logchallenges - whether to log challenge battles. Useful for tournament servers.
 */
exports.logchallenges = false;

/**
 * loguserstats - how often (in milliseconds) to write user stats to the
 * lobby log. This has no effect if `logchat` is disabled.
 */
exports.loguserstats = 1000 * 60 * 10; // 10 minutes

/**
 * validatorprocesses - the number of processes to use for validating teams
 * simulatorprocesses - the number of processes to use for handling battles
 * You should leave both of these at 1 unless your server has a very large
 * amount of traffic (i.e. hundreds of concurrent battles).
 */
exports.validatorprocesses = 1;
exports.simulatorprocesses = 1;

/**
 * inactiveuserthreshold - how long a user must be inactive before being pruned
 * from the `users` array. The default is 1 hour.
 */
exports.inactiveuserthreshold = 1000 * 60 * 60;

// Boilerplate start
/** tellsexpiryage - how long an offline message remains in existence before being removed.
 * By default, 7 days
 */
exports.tellsexpiryage = 1000 * 60 * 60 * 24 * 7;

/** tellrank - the rank that offline messaging is available to. By default, available to voices
 * and above. Set to ' ' to allow all users to use offline messaging and `false` to disable
 * offline messaging completely. Set to `'autoconfirmed'` to allow only autoconfirmed users
 * to send offline messages.
 */
exports.tellrank = ' ';
// Boilerplater end

/**
 * autolockdown - whether or not to automatically kill the server when it is
 * in lockdown mode and the final battle finishes.  This is potentially useful
 * to prevent forgetting to restart after a lockdown where battles are finished.
 */
exports.autolockdown = true;

/**
 * Custom avatars.
 * This allows you to specify custom avatar images for users on your server.
 * Place custom avatar files under the /config/avatars/ directory.
 * Users must be specified as userids -- that is, you must make the name all
 * lowercase and remove non-alphanumeric characters.
 *
 * Your server *must* be registered in order for your custom avatars to be
 * displayed in the client.
 * @type {{[userid: string]: string}}
 */
exports.customavatars = {
	'ppn': 'charizard_ppn.gif',
	'wolf': 'wolf.gif',
	'peanutbutterjelli': 'ctfrm.gif',
	'jelli': 'ctfrm.gif',
	'michonne': 'ctfrm.gif',
	'cstfrm': 'ctfrm.gif',
	'sandfrm': 'ctfrm.gif',
	'powalen': 'ctfrm.gif',
	'pwaln': 'ctfrm.gif',
	'ctfrm': 'ctfrm.gif',
	'novae': 'twilightsky.png',
	'saeyru': 'twilightsky.png',
	'charis': 'twilightsky.png',
	'kjelle': 'megumiii.png',
	'captainsyrup': 'megumiii.png',
	'nabooru': 'megumiii.png',
	'lailahtan': 'megumiii.png',
	'bellssm': 'megumiii.png',
	'kounoodles': 'megumiii.png',
	'deathbychansey': 'megumiii.png',
	'megumiii': 'megumiii.png',
	'lailh': 'megumiii.png',
	'esperterr': 'esperterr.png',
	'altairis': 'altairis.png',
	'winry': 'altairis.png',
	'sanguine': 'sanguine.gif',
	'memro': 'sanguine.gif',
	'zeffy': 'zeffy.gif',
	'zeffyisnothere': 'zeffy.gif',
	'jinofthegale': 'jin.png',
	'squirrel': 'ozzy.png',
	'avogadro': 'ozzy.png',
	'antemortem': 'ante.png',
	'pachy': 'mlod.png',
	'eldy': 'mlod.png',
	'elod': 'mlod.png',
	'mlod': 'mlod.png',
	'ladygunner': 'ladygunner.gif',
	'queenofshipping': 'ladygunner.gif',
	'starrywindy': 'starrywindy.gif',
	'twilightwindy': 'starrywindy.gif',
	'vtn': 'starrywindy.gif',
	'mtsuhney': 'starrywindy2.gif',
	'correcty': 'rizon.png',
	'attrage': 'rizon.png',
	'aceofstars': 'rizon.png',
	'bidoofftw': 'alakapwnage.png',
	'djdoof': 'alakapwnage.png',
	'isit420yet': 'alakapwnage.png',
	'bidf': 'alakapwnage.png',
	'mudk': 'alakapwnage.png',
	'oxidation': 'yukissword.png',
	'gaspppp': 'daydreamsaway.gif',
	'travist': 'daydreamsaway2.gif',
	'slate': 'daydreamsaway3.gif',
	'emperr': 'daydreamsaway3.gif',
	'wdnesd': 'wdnesd.gif',
	'sector': 'sector.gif',
	'milenakunis': 'sectorrevenge.gif',
	'konstantinova': 'sector2.gif',
	'weighty': 'weightywillbill.png',
	'servineking': 'zach.gif',
	'terbte': 'zach.gif',
	'megaservine': 'zach.gif',
	'tstarja': 'zach.gif',
	'hiddenpowerflying': 'tide.png',
	'kingchuckles': 'chuckles.gif',
	'chucklesthegenie': 'chuckles.gif',
	'xxyveltalxx': 'xxyveltalxx.gif',
	'pleurnicheur': 'ravio.gif',
	'acemasterofturtles': 'ace_master_of_turtles.png',
	'turtlebro6': 'ace_master_of_turtles.png',
	'acertony': 'ace_master_of_turtles.png',
	'lati': 'unidentified.png',
	'clacla': 'clacla.png',
	'somniac': 'somniac.png',
	'ptchul': 'patchouliknowledge.gif',
	'patchyknwledg': 'patchouliknowledge.gif',
	'paladinbones': 'paladinbones.png',
	'pervertedpika': 'o07_eleven.gif',
	'o07eleven': 'o07_eleven.gif',
	'detectivededenne': 'pervertedpikachu.png',
	'notspino': 'spinosaurus.gif',
	'witchie': 'witchie.png',
	'doctorsylveon': 'doctorsylveon.png',
	'maidalice': 'scandalice.gif',
	'scandalice': 'scandalice.gif',
	'pnkscandalice': 'scandalice.gif',
	'alcemargatrod': 'scandalice.gif',
	'glaceongirl': 'paigeberlitz.png',
	'paigebryan': 'paigeberlitz.png',
	'littlebrother': 'littlebrother.png',
	'battlebro': 'littlebrother.png',
	'yukinagato': 'yukinagato.gif',
	'yuihirsaw': 'yukinagato.gif',
	'ladypatchouli': 'patchouliknowledge.png',
	'elst': 'patchouliknowledge.png',
	'marisakirisam': 'patchouliknowledge.png',
	'gensokyo': 'patchouliknowledge.png',
	'nidoking76': 'nidoking76.gif',
	'wolfmasin': 'wolfmasin.gif',
	'sargentwolf': 'wolfmasin.gif',
	'jrrkein': 'jrrkein.jpg',
	'anrindas': 'anrindеоaνіs.gif',
	'anrinn': 'anrindеоaνіs.gif',
	'anrindеоaνіs': 'anrindеоaνіs.gif',
	'thefattestsnorlax': 'thefattestsnorlax.gif',
	'sri': 'warpaint.gif',
	'srinator': 'warpaint.gif',
	'srintor': 'warpaint.gif',
	'miguelruizcabal': 'miguelruizcabal.jpg',
	'indiancharizard': 'indiancharizard.gif',
	'supershape': 'supershape.gif',
	'bellpix': 'bellpix.gif',
	'bluray': 'bluray.gif',
	'zaga': 'zaga.gif',
	'ashketchumadmn': 'ashketchumadmn.png',
	'shadowraze': 'shadowraze.png',
	'pixieforest': 'pixieforest.jpg',
	'pinkcessa': 'pixieforest.jpg',
	'cacelyn': 'pixieforest.jpg',
	'nylecac': 'pixieforest.jpg',
	'applejacknred': 'isaac.gif',
	'goldenfun': 'isaac.gif',
	'imjackinred': 'isaac.gif',
	'shadowe': 'nova.jpg',
	'libr': 'nova.jpg',
	'erelenemorgan': 'erelenemorgan.jpg',
	'philmiester': 'philmiester.gif',
	'programfreeze': 'programfreeze.jpg',
	'oakaxxiii': 'oakaxxiii.gif',
	'actuallymr': 'mario.gif',
	'kimisumi': 'kimisumi.png',
	'zwlousquen': 'kimisumi2.gif',
	'wint': 'kimisumi3.jpg',
	'dos': 'kimisumi4.png',
	'yungblds': 'kimisumi5.jpg',
	'sphealkimimi': 'kimisumi6.gif',
	'amiy': 'amiy.gif',
	'madokakanamee': 'furoichi.jpg',
	'sirenttamashii': 'sairentotamashii.jpg',
	'sairenttamashii': 'sairentotamashii.jpg',
	'sirentamashii': 'sairentotamashii.jpg',
	'sairentotamashii': 'sairentotamashii.jpg',
	'ashadowssoul': 'sairentotamashii.jpg',
	'lostchristms': 'sairentotamashii.jpg',
	'kingdomoftea': 'sairentotamashii.jpg',
	'kingdomofkappa': 'sairentotamashii.jpg',
	'mk1091': 'mk1091.png',
	'brndncullum': 'brndncullum.jpg',
	'ejgmorgan': 'ejgmorgan.jpg',
	'omicronhuh': 'omicron.png',
	'omicrn': 'omicron.png',
	'elheroeoscuro': 'elheroeoscuro.gif',
	'imdonionrings': 'elheroeoscuro.gif',
	'lightrestore': 'lightrestore.png',
	'heracrossdude': 'heracrossdude.png',
	'darkvswhite': 'heracrossdude.png',
	'gymlederhera': 'heracrossdude.png',
	'nimo': 'nimo.png',
	'1ee7': 'nimo.png',
	'sharingiscaring': 'nimo.png',
	'hollowicrus': 'hollowicrus.jpg',
	'gymlederzolt': 'gymlederzolt.jpg',
	'galladebosszolt': 'gymlederzolt.jpg',
	'bearticsmalls': 'bearticsmalls.gif',
	'shaneo': 'shaneo.png',
	'pokecommbot': 'pokecommbot.png',
	'ilovepokehack': 'ilovepokehack.jpg',
	'achromaticlv': 'achromaticlv.png',
	'aevon': 'aevon.gif',
	'qwertypops': 'qwertypops.png',
	'kfcutman': 'kfcutman.gif',
	'infernogirl': 'kfcutman.gif',
	'kfcpupitar': 'kfcutman.gif',
	'megaman775': 'megaman775.gif',
	'jeran': 'jeran.png',
	'dracomasterpain': 'dracomasterpain.gif',
	'langur': 'langur.gif',
	'masterneyney': 'masterneyney.png',
	'chaos': 'chaos.png',
	'seif': 'seif.gif',
	'dsrlop95': 'dsrlop95.png',
	'tutur31': 'dsrlop95.png',
	'pomman': 'pomman.gif',
	'dracomasterbrit': 'pomman.gif',
	'arguso': 'arguso.png',
	'duzzy': 'jellicent.gif',
	'cluricaun': 'clur.png',
	'allianceclur': 'clur.png',
	'clur': 'clur.png',
	'insanelover': 'insanelover.png',
	'slrloer': 'insanelover.png',
	'alliancelver': 'insanelover.png',
	'pinkrabbit': 'pinkrabbit.gif',
	'affinitymssih': 'affinitymssih.png',
	'fromazeleatown': 'allianceazelea.jpg',
	'alliancegallade': 'alliancegallade.png',
	'gyaradosislove': 'alliancegallade.png',
	'ghastslegacy': 'allianceghast.gif',
	'allianceguy': 'allianceguy.png',
	'shadowguy1': 'allianceguy.png',
	'allianceiluvppl': 'allianceiluvppl.png',
	'ih8someppl': 'allianceiluvppl.png',
	'allianceshz': 'allianceshz.png',
	'shz': 'allianceshz.png',
	'alliancesoulace': 'alliancesoulace.png',
	'acesoul': 'alliancesoulace.png',
	'emperorace': 'alliancesoulace.png',
	'alliancewalker': 'alliancewalker.gif',
	'archer99': 'archer99.gif',
	'hannumikkola': 'hannumikkola.gif',
	'lucifr': 'lucifr.gif',
	'orgen': 'lucifr.gif',
	'nayslayer': 'nayslayer.png',
	'alliancejustice': 'nayslayer.png',
	'dayummmm': 'nightcore4evah.gif',
	'nightcore4evah': 'nightcore4evah.gif',
	'lehux': 'terra.png',
	'theace22': 'theace22.png',
	'flamingarcanine75': 'theace22.png',
	'virg099': 'virg099.gif',
	'wudibou': 'wudibou.png',
	'silverhulkwolf': 'silverhulkwolf.jpg',
	'agnt': 'agnt.jpg',
	'shaymiin': 'shaymiin.gif',
	'silverpainis': 'silverpainis.gif',
	'thoughts': 'thoughts.png',
	'thjoker': 'thjoker.jpg',
	'clownjoker': 'thjoker.jpg',
	'asunaxkirito': 'asunaxkirito.PNG',
	'allianceazelea': 'allianceazelea.png',
	'pcho': 'pcho.jpg',
	'allianceghast': 'allianceghast.jpg',
	'alliancemystle': 'alliancemystle.png',
	'mystletaynn': 'alliancemystle.png',
	'alliancelemon': 'alliancelemon.gif',
	'allianclemn': 'alliancelemon.gif',
	'alliancespook': 'alliancespook.png',
	'alliancenidaime': 'alliancenidaime.gif',
	'thenidaime': 'alliancenidaime.gif',
	'alliancecarn0x': 'alliancecarn0x.png',
	'allianceaqua': 'allianceaqua.png',
	'pmtkred': 'pmtkred.png',
	'funkycrackudocat': 'funkycrackudocat.png',
	'dudugoissilva': 'funkycrackudocat.png',
	'abnegation': 'abnegation.png',
	'sranger': 'abnegation.png',
	'rabinov': 'arcaneum.png',
	'arcaneum': 'arcaneum.png',
	'darklight1999': 'darklight1999.png',
	'alliancedyla': 'alliancedyla.png',
	'hanaaa': 'hanaaa.png',
	'hanalyse': 'hanaaa.png',
	'connwaer': 'connwaer.jpg',
	'oocyst': 'oocyst.png',
	'thedressisalie': 'thedressisalie.jpg',
	'weshbien': 'weshbien.png',
	'kridaneladd': 'weshbien.png',
	'kingsyn': 'syndrome.png',
	'syndrome': 'syndrome.png',
	'lonnybreaux': 'syndrome.png',
	'loveonmypiano': 'syndrome.png',
	'fkasyndrome': 'syndrome.png',
	'tahliahbarnett': 'syndrome.png',
	'theservant35': 'syndrome.png',
	'clydedrexler': 'syndrome.png',
	'theintrnet': 'syndrome.png',
	'commedesgarcon': 'syndrome.png',
	'cmmedesgrcons': 'syndrome.png',
	'wdowmakr': 'wdowmakr.png',
	'haxnyancat1': 'haxnyancat1.jpg',
	'koha': 'koha.jpg',
	'loliable': 'koha.jpg',
	'marcisaxy': 'marcisaxy.gif',
	'xanaplana': 'xanaplana.gif',
	'valkyriaanna': 'valkyriaanna.gif',
	'yinyanganna': 'valkyriaanna.gif',
	'annavalkyria': 'valkyriaanna.gif',
	'annapique': 'valkyriaanna.gif',
	'annabrunehilde': 'valkyriaanna.gif',
	'valkbrunehilde': 'valkyriaanna.gif',
	'froginfected': 'froginfected.gif',
	'choicespecsp2': 'froginfected.gif',
	'yungfrog420xxxog': 'froginfected.gif',
	'lucy2512': 'lucy2512.gif',
	'shawott': 'shawott.gif',
	'absol98sk': 'absol98sk.jpg',
	'alelobo': 'alelobo.gif',
	'bisquaza': 'bisquaza.png',
	'spatacus': 'spatacus.png',
	'quilachy': 'quilachy.png',
	'lucasrecrear': 'lucasrecrear.gif',
	'axtheefrost': 'axtheefrost.gif',
	'andyvenus': 'axtheefrost.gif',
	'darkshadow6': 'darkshadow6.gif',
	'ejoseluiis': 'ejoseluiis.png',
	'f4n': 'f4n.gif',
	'jeandbz': 'jeandbz.gif',
	'juudaime103': 'juudaime103.gif',
	'lukey': 'lukey.gif',
	'ppgore': 'ppgore.gif',
	'prateeksingh': 'prateeksingh.gif',
	'gleamy': 'prateeksingh.gif',
	'principebaka': 'principebaka.gif',
	'punkysaur': 'punkysaur.gif',
	'quatuorgamer': 'quatuorgamer.png',
	'jungkodu07': 'quatuorgamer.png',
	'roxyjadhav': 'roxyjadhav.gif',
	'ryukiry': 'ryukiry.gif',
	'suraku75': 'suraku75.gif',
	'destinedjagold': 'destinedjagold.jpg',
	'megalucariov': 'megalucariov.gif',
	'shinmei971': 'shinmei971.png',
	'shinmeitensai': 'shinmei971.png',
	'dariiangamer': 'dariiangamer.gif',
	'gallamex': 'gallamex.jpg',
	'holiano': 'holiano.png',
	'letmeshine': 'holiano.png',
	'invincibleswampert': 'invincibleswampert.png',
	'its103': 'its103.gif',
	'mlanie': 'mlanie.png',
	'elodie': 'mlanie.png',
	'rookiedoce': 'rookiedoce.jpg',
	'situm': 'situm.png',
	'situmparletmort': 'situm.png',
	'skyrio': 'skyrio.png',
	'toto013': 'toto013.jpg',
	'yanignacio1': 'yanignacio1.png',
	'zincoxide': 'zincoxide.jpg',
	'ansirent': 'zincoxide.jpg',
	'blueshrek': 'blueshrek.png',
	'bleushrek': 'blueshrek.png',
	'blueshrekt': 'blueshrek.png',
	'blshrek': 'blueshrek.png',
	'devonrawr': 'devonrawr.gif',
	'drapionjosi': 'drapionjosi.png',
	'fairypeak': 'fairypeak.png',
	'firegames1212': 'firegames1212.png',
	'kiritobladekun': 'kiritobladekun.gif',
	'mindnight': 'mindnight.gif',
	'sarl': 'sarl.png',
	'soulstryke': 'soulstryke.png',
	'zucch': 'zucch.png',
	'darkletenebreux': 'darkletenebreux.gif',
	'funkiyouonline': 'funkiyouonline.png',
	'kantio': 'kantio.jpg',
	'mattsuper': 'mattsuper.gif',
	'duo1000': 'mattsuper.gif',
	'siry': 'siry.png',
	'suglit': 'suglit.png',
	'akaitou': 'akaitou.gif',
	'atharva19': 'atharva19.jpg',
	'lapilazuli': 'lapiѕlazuli.gif',
	'odye': 'odye.gif',
	'jesuisstyle': 'odye.gif',
	'landothegod': 'odye.gif',
	'princeharrison': 'princeharrison.gif',
	'roxierosalinaxl': 'roxierosalinaxl.gif',
	'learna': 'learna.jpg',
	'soulcooler': 'soulcooler.gif',
	'xcrystalberryx': 'xcrystalberryx.png',
	'aeerca': 'aeerca.gif',
	'dracostatics': 'aeerca.gif',
	'chessurcat': 'chessurcat.gif',
	'bacteriophaget4': 'chessurcat.gif',
	'darkazelf': 'darkazelf.gif',
	'mysteryxgris': 'mysteryxgris.gif',
	'greninjashadow': 'mysteryxgris.gif',
	'pelipperzachary': 'pelipperzachary.gif',
	'silverlaguna': 'silverlaguna.gif',
	'ahrmtic': 'ahrmtic.png',
	'itssopheria': 'itssopheria.jpg',
	'sopheria7': 'itssopheria.jpg',
	'noatan': 'nodles.png',
	'noanoodles': 'nodles.png',
	'noav': 'nodles.png',
	'nodles': 'nodles.png',
	'digitalesper': 'digitalesper.png',
	'snflr': 'snflr.png',
	'nakasu': 'nakasu.gif',
	'pmseth': 'savash.png',
	'savashy': 'savash.png',
	'savash': 'savash.png',
	'mskiei': 'savash.png',
	'dedenne1': 'dedenne1.gif',
	'nidokingdra44': 'nidokingdra44.png',
	'nidohorsea': 'nidokingdra44.png',
	'kingfeebas': 'nidokingdra44.png',
	'tn44': 'nidokingdra44.png',
	'nakuzami': 'nakuzami.png',
	'an7hony': 'an7hony.png',
	'anthny': 'an7hony.png',
	'squeetz': 'squeetz.png',
	'whatagimmick': 'squeetz.png',
	'brcklesnar': 'brcklesnar.jpg',
	'elektraheart': 'elektraheart.gif',
	'lordgrizz': 'lordgrizz.jpg',
	'serrh': 'serrh.gif',
	'foreverburning': 'foreverburning.png',
	'allybugd': 'allybugd.png',
	'allybugg': 'allybugd.png',
	'ddrox13': 'ddrox13.png',
	'stormlinoooone': 'stormlinoooone.png',
	'yunowhoitis': 'stormlinoooone.png',
	'snow': 'snow.gif',
	'moocyst': 'moocyst.png',
	'oddsh': 'oddsh.png',
	'wifinetwork': 'wifinetwork.png',
	'everlastingsnow': 'wifinetwork.png',
	'pdge': 'yehw.png',
	'jnssen': 'yehw.png',
	'sria': 'yehw.png',
	'pabloocean': 'yehw.png',
	'blnd': 'yehw.png',
	'yehw': 'yehw.png',
	'kwstaspaokara': 'kwstaspaokara.png',
	'jannasheep': 'sheep.png',
	'jnna': 'sheep.png',
	'mrep': 'sheep.png',
	'madnessftw': 'madnessftw.png',
	'mdki': 'mdki.png',
	'violentcharizard21': 'violentcharizard21.gif',
	'voltyshocks': 'voltyshocks.png',
	'nekyokun': 'voltyshocks.png',
	'saincweedle12': 'saincweedle12.png',
	'snorlaxtherain': 'snorlaxtherain.png',
	'pinktwinkle': 'pinktwinkle.gif',
};

// Boilerplate start
/** custom avatars appear in profile by specifiying server url.
*/
exports.avatarurl = '';
// Boilerplate end

/**
 * tourroom - specify a room to receive tournament announcements (defaults to
 * the room 'tournaments').
 * tourannouncements - announcements are only allowed in these rooms
 * tourdefaultplayercap - a set cap of how many players can be in a tournament
 * ratedtours - toggles tournaments being ladder rated (true) or not (false)
 */
exports.tourroom = '';
/** @type {string[]} */
exports.tourannouncements = [/* roomids */];
exports.tourdefaultplayercap = 0;
exports.ratedtours = false;

/**
 * appealurl - specify a URL containing information on how users can appeal
 * disciplinary actions on your section. You can also leave this blank, in
 * which case users won't be given any information on how to appeal.
 */
exports.appealurl = 'https://www.pokecommunity.com/showthread.php?t=434307';

/**
 * repl - whether repl sockets are enabled or not
 * replsocketprefix - the prefix for the repl sockets to be listening on
 * replsocketmode - the file mode bits to use for the repl sockets
 */
exports.repl = true;
exports.replsocketprefix = './logs/repl/';
exports.replsocketmode = 0o600;

/**
 * disablehotpatchall - disables `/hotpatch all`. Generally speaking, there's a
 * pretty big need for /hotpatch all - convenience. The only advantage any hotpatch
 * forms other than all is lower RAM use (which is only a problem for Main because
 * Main is huge), and to do pinpoint hotpatching (like /nohotpatch).
 */
exports.disablehotpatchall = false;

/**
 * forcedpublicprefixes - user ID prefixes which will be forced to battle publicly.
 * Battles involving user IDs which begin with one of the prefixes configured here
 * will be unaffected by various battle privacy commands such as /modjoin, /hideroom
 * or /ionext.
 * @type {string[]}
 */
exports.forcedpublicprefixes = [];

/**
 * startuphook - function to call when the server is fully initialized and ready
 * to serve requests.
 */
exports.startuphook = function () {};


/**
 * chatlogreader - the search method used for searching chatlogs.
 * @type {'ripgrep' | 'fs'}
 */
exports.chatlogreader = 'fs';
/**
 * permissions and groups:
 *   Each entry in `grouplist` is a seperate group. Some of the members are "special"
 *     while the rest is just a normal permission.
 *   The order of the groups determines their ranking.
 *   The special members are as follows:
 *     - symbol: Specifies the symbol of the group (as shown in front of the username)
 *     - id: Specifies an id for the group.
 *     - name: Specifies the human-readable name for the group.
 *     - root: If this is true, the group can do anything.
 *     - inherit: The group uses the group specified's permissions if it cannot
 *                  find the permission in the current group. Never make the graph
 *                  produced using this member have any cycles, or the server won't run.
 *     - jurisdiction: The default jurisdiction for targeted permissions where one isn't
 *                       explictly specified. "Targeted permissions" are permissions
 *                       that might affect another user, such as `ban' or `promote'.
 *                       's' is a special group where it means the user itself only
 *                       and 'u' is another special group where it means all groups
 *                       lower in rank than the current group.
 *     - roomonly: forces the group to be a per-room moderation rank only.
 *     - globalonly: forces the group to be a global rank only.
 *   All the possible permissions are as follows:
 *     - console: Developer console (>>).
 *     - lockdown: /lockdown and /endlockdown commands.
 *     - hotpatch: /hotpatch, /crashfixed and /savelearnsets commands.
 *     - ignorelimits: Ignore limits such as chat message length.
 *     - promote: Promoting and demoting. Will only work if the target user's current
 *                  group and target group are both in jurisdiction.
 *     - room<rank>: /roompromote to <rank> (eg. roomvoice)
 *     - makeroom: Create/delete chatrooms, and set modjoin/roomdesc/privacy
 *     - editroom: Editing properties of rooms
 *     - editprivacy: Set modjoin/privacy only for battles
 *     - ban: Banning and unbanning.
 *     - mute: Muting and unmuting.
 *     - lock: locking (ipmute) and unlocking.
 *     - receivemutedpms: Receive PMs from muted users.
 *     - forcerename: /fr command.
 *     - ip: IP checking.
 *     - alts: Alt checking.
 *     - modlog: view the moderator logs.
 *     - broadcast: Broadcast informational commands.
 *     - declare: /declare command.
 *     - announce: /announce command.
 *     - modchat: Set modchat.
 *     - potd: Set PotD.
 *     - forcewin: /forcewin command.
 *     - battlemessage: /a command.
 *     - tournaments: creating tournaments (/tour new, settype etc.)
 *     - gamemoderation: /tour dq, autodq, end etc.
 *     - gamemanagement: enable/disable games, minigames, and tournaments.
 *     - minigame: make minigames (hangman, polls, etc.).
 *     - game: make games.
 */
exports.grouplist = [
	{
		symbol: '~',
		id: "admin",
		name: "Administrator",
		root: true,
		globalonly: true,
	},
	{
		symbol: '&',
		id: "leader",
		name: "Leader",
		inherit: '@',
		jurisdiction: 'u',
		promote: 'u',
		roomowner: true,
		roombot: true,
		roommod: true,
		roomdriver: true,
		forcewin: true,
		declare: true,
		rangeban: true,
		makeroom: true,
		editroom: true,
		potd: true,
		disableladder: true,
		globalonly: true,
		gamemanagement: true,
		exportinputlog: true,
		editprivacy: true,
	},
	{
		symbol: '#',
		id: "owner",
		name: "Room Owner",
		inherit: '@',
		jurisdiction: 'u',
		roombot: true,
		roommod: true,
		roomdriver: true,
		editroom: true,
		declare: true,
		addhtml: true,
		roomonly: true,
		gamemanagement: true,
	},
	{
		symbol: '\u2605',
		id: "host",
		name: "Host",
		inherit: '@',
		jurisdiction: 'u',
		declare: true,
		addhtml: true,
		modchat: true,
		roomonly: true,
		gamemanagement: true,
		joinbattle: true,
	},
	{
		symbol: '*',
		id: "bot",
		name: "Bot",
		inherit: '@',
		jurisdiction: 'u',
		declare: true,
		addhtml: true,
		bypassafktimer: true,
	},
	{
		symbol: '@',
		id: "mod",
		name: "Moderator",
		inherit: '%',
		jurisdiction: 'u',
		ban: true,
		modchatall: true,
		roomvoice: true,
		forcerename: true,
		ip: true,
		tournaments: true,
		game: true,
		rangeban: true,
		potd: true,
		gamemanagement: true,
		exportinputlog: true,
		gdeclare: true,
		editprivacy: true,
		pban: true,
	},
	{
		symbol: '%',
		id: "driver",
		name: "Driver",
		inherit: '+',
		jurisdiction: 'u',
		announce: true,
		warn: '\u2606u',
		kick: true,
		mute: '\u2606u',
		lock: true,
		forcerename: true,
		timer: true,
		modlog: true,
		bypassblocks: 'u%@&~',
		receiveauthmessages: true,
		gamemoderation: true,
		jeopardy: true,
		joinbattle: true,
		minigame: true,
		modchat: true,
	},
	{
		symbol: '\u2606',
		id: "player",
		name: "Player",
		inherit: '+',
		roomvoice: true,
		modchat: true,
		roomonly: true,
		joinbattle: true,
		nooverride: true,
		editprivacy: true,
		exportinputlog: true,
		modchatall: true,
	},
	{
		symbol: '+',
		id: "voice",
		name: "Voice",
		inherit: ' ',
		broadcast: true,
		announce: true,
		tournaments: true,
		tournamentsmoderation: true,
		tournamentsmanagement: true,
		jeopardy: true,
		minigame: true,
		game: true,
		gamemoderation: true,
		declare: true,
	},
	{
		symbol: ' ',
		ip: 's',
		broadcast: true,
		alts: '~u',
	},
	{
		name: 'Locked',
		id: 'locked',
		symbol: '\u203d',
		punishgroup: 'LOCK',
	},
	{
		name: 'Muted',
		id: 'muted',
		symbol: '!',
		punishgroup: 'MUTE',
	},
];
