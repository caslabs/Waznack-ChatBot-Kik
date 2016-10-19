//bot created by Jeraldy Cascayan
//figure out to scan the hello response 
'use strict';
let colors = require('colors')
let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');
 
// Configure the bot API endpoint, details for your bot 
let bot = new Bot({
    username: 'waznack',
    apiKey: 'huh',
    baseUrl: 'https://huh.ngrok.io/'
});
 
bot.updateBotConfiguration();

var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();
var sec = d.getSeconds();
var timestamp = hour + ":" + minute + ":" + sec //00:00:00

var botStart = "v0.2 waznack".rainbow + " online @ " + timestamp.cyan; //v0.2 waznack online @ 00:00:00
var fullusername = "Jeraldy Cascayan".green // uses @ line 26
var HoldUser; //holds 'insult [username]' when insulting
console.log('Created by ' + fullusername + ' a.k.a '.red + '@c0p'.yellow + ' on github'); //Created by Jeraldy Cascayan a.k.a @c0p on github

var insult = require('./ArraysOfInsults.js').insult; //import the variable insults onto here.

//some list
var Hello = ["hello","hallo","watup","hi","hola","bonjour","sup","bruh","boi"];
var goodbye = ["bye","adios","goodbye"]
var nice =["be","stop","bully"]
var you = ["you"]
var deep_down = ["deep"]

//Generates a random number. var rand = insult[0 - insult.length]
function InsGen(which) {
	switch(which){
		case 0:
			return insult[[0]Math.floor(Math.random() * insult[0].length)];
			break;
		case 1:
			return insult[[1] Math.floor(Math.random()* insult[1].length)];
			break;
		case 2:
			return insult[[2] Math.floor(Math.random()* insult[2].length)];
			break;
		case 3:
			return insult[[3] Math.floor(Math.random()* insult[3].length)];
			break;
		case 4:
			return insult[[4] Math.floor(Math.random()* insult[4].length)];
			break;
		case 5:
			return insult[[5] Math.floor(Math.random()* insult[5].length)];
			break;
		case 6: 
			return insult[[6] Math.floor(Math.random() * insult[6].length)];
			break;
		case 7:
			return insult[ Math.floor(Math.random() * insult.length)];
			break;
	};
	
}
//adds time stamp for message
var Timestamp = function(){
	var botsentdate = new Date();
	var bothour = botsentdate.getHours();
	var botminute = botsentdate.getMinutes();
	var botsecond = botsentdate.getSeconds();
	var fullhold = bothour + ":" + botminute + ":" + botsecond
}
	function Search(user_input,list){
		user_input.toLowerCase();
		i = 0;
		if(user_input !== list[i]){
			i++;
			if(list[i] > list.length){
				return False;
			}
		}
		return True 
	};
 
var botInsultReply = ""; 
var BotReplyColor = botInsultReply.magenta; //console.log magneta
UserReplyColor = message.body.green; //console.log green colored user reply

//If user isn't subscribed to bot, then send introduction 
bot.onStartChattingMessage((message, next) => {
    bot.getUserProfile(message.from)
        .then((user) => {
            message.reply('Hey ${user.username}!, I am waznack! the insultor bot!');
        });
});


//When User replies to bot
bot.onTextMessage((message, next) => {
	var WhoInsult = message.body.split(" ") //WhoInsult turns message to ['i', 'am', 'an', 'example'];

//if user says info
	if (message.body === 'info') {

		message.reply('Commands: insult [username]'); //then bot says Commands: insult [username]

	} 
	
	switch(WhoInsult){
		
		case WhoInsult[1] === "insult":  //else if user says 'insult'
			Timestamp();

			/*CREATES TIME STAMP 00:00:00 ^ | SENDS INSULT MESSAGE V*/

			var UserHold = WhoInsult[1]; //UserHold now holds [username]

			bot.getUserProfile(message.from)
			.then((user) => {
				bot.send(InsGen(7), UserHold); //replies insult to Userhold

				console.log(fullhold.cyan + ` ${user.username} ` + ' sent an insult message to : ' + UserHold.yellow); //console logs it
				console.log(fullhold.cyan+ " waznack replied : " + botReplyColor.magenta); //console logs it
			});
			break;
		
		case search(who_insult[1],you): // else insult username back with something from you 
			Timestamp();

		/*CREATES TIME STAMP 00:00:00 ^ | SENDS INSULT MESSAGE V*/
			botInsultReply = InsGen(2);
			UserReplyColor = message.body.green;//console.logs
		//holds Ins()
			bot.getUserProfile(message.from)
			.then((user) => {
			//console.log variable
				message.reply(`${user.username},` + " " + botInsultReply); //!replies [username], InsGen();
				console.log(fullhold.cyan + ` ${user.username} ` + ' said: ' + UserReplyColor); //console.log
				console.log(fullhold.cyan+ " waznack replied : " + botInsultReply); //console.log
			});
			break;
		
		case search(who_insult[1],hello): // add hello responses here
			Timestamp();

		/*CREATES TIME STAMP 00:00:00 ^ | SENDS INSULT MESSAGE V*/
			botInsultReply = InsGen(0);
			UserReplyColor = message.body.green;//console.logs
		//holds Ins()
			bot.getUserProfile(message.from)
			.then((user) => {
			//console.log variable
				message.reply(`${user.username},` + " " + botInsultReply); //!replies [username], InsGen();
				console.log(fullhold.cyan + ` ${user.username} ` + ' said: ' + UserReplyColor); //console.log
				console.log(fullhold.cyan+ " waznack replied : " + botInsultReply); //console.log
			});
			break;
		
		case search(who_insult[1],goodbye): //add good bye responses here
			Timestamp();

		/*CREATES TIME STAMP 00:00:00 ^ | SENDS INSULT MESSAGE V*/
			botInsultReply = InsGen(1);
			UserReplyColor = message.body.green;//console.logs
		//holds Ins()
			bot.getUserProfile(message.from)
			.then((user) => {
			//console.log variable
				message.reply(`${user.username},` + " " + botInsultReply)); //!replies [username], InsGen();
				console.log(fullhold.cyan + ` ${user.username} ` + ' said: ' + UserReplyColor); //console.log
				console.log(fullhold.cyan+ " waznack replied : " + botInsultReply); //console.log
			});
			break;
			
		case WhoInsult[1] === "deep down" || WhoInsult[1] === "Deep down":
			Timestamp();

		/*CREATES TIME STAMP 00:00:00 ^ | SENDS INSULT MESSAGE V*/
			botInsultReply = InsGen(4);
			UserReplyColor = message.body.green;//console.logs
		//holds Ins()
			bot.getUserProfile(message.from)
			.then((user) => {
			//console.log variable
				message.reply(`${user.username},` + " " + botInsultReply)); //!replies [username], InsGen();
				console.log(fullhold.cyan + ` ${user.username} ` + ' said: ' + UserReplyColor); //console.log
				console.log(fullhold.cyan+ " waznack replied : " + botInsultReply); //console.log
			});
			break;
	}	
});


console.log(botStart); //parses through entire code. bot finish loading, then console.log it


// Set up your server and start listening 
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 8080);

