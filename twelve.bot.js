//bot created by Jeraldy Cascayan
'use strict';
let colors = require('colors')
let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');
 
// Configure the bot API endpoint, details for your bot 
let bot = new Bot({
    username: 'waznack',
    apiKey: '7cfc18d8-1011-4020-852f-aaa4be5f42d3',
    baseUrl: 'https://6644357b.ngrok.io/'
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

var insult = require('./ArraysOfInsults.js').insult //import the variable insults onto here.

//Generates a random number. var rand = insult[0 - insult.length]
function InsGen() {
	var rand = insult[Math.floor(Math.random() * insult.length)]
	return rand
}

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

} else if (WhoInsult[0] === "insult") { //else if user says 'insult'
var botsentdate = new Date();
var bothour = botsentdate.getHours();
var botminute = botsentdate.getMinutes();
var botsecond = botsentdate.getSeconds();
var fullhold = bothour + ":" + botminute + ":" + botsecond

/*CREATES TIME STAMP 00:00:00 ^ | SENDS INSULT MESSAGE V*/

var botInsultReply = InsGen() //now holds random insult 
var botReplyColor = botInsultReply.magenta, //console.log magneta colored bot reply
UserReplyColor = message.body.green; //console.log green colored user reply
var UserHold = WhoInsult[1]; //UserHold now holds [username]

bot.getUserProfile(message.from)
	.then((user) => {
		bot.send(botInsultReply, UserHold); //replies insult to Userhold

    console.log(fullhold.cyan + ` ${user.username} ` + ' sent an insult message to : ' + UserHold.yellow); //console logs it
    console.log(fullhold.cyan+ " waznack replied : " + botReplyColor.magenta); //console logs it
        });
  } else { 
	// else insult username back
var botsentdate = new Date();
var bothour = botsentdate.getHours();
var botminute = botsentdate.getMinutes();
var botsecond = botsentdate.getSeconds();
var fullhold = bothour + ":" + botminute + ":" + botsecond

/*CREATES TIME STAMP 00:00:00 ^ | SENDS INSULT MESSAGE V*/

UserReplyColor = message.body.green; //console.logs
var BotReplyInsult = InsGen(); //holds Ins()

bot.getUserProfile(message.from)
	.then((user) => {
			var ReplybotInsultReply = BotReplyInsult.magenta //console.log variable
	message.reply(`${user.username},` + " " + BotReplyInsult); //!replies [username], InsGen();
    console.log(fullhold.cyan + ` ${user.username} ` + ' said: ' + UserReplyColor); //console.log
    console.log(fullhold.cyan+ " waznack replied : " + ReplybotInsultReply); //console.log
        });
  
}
});


console.log(botStart); //parses through entire code. bot finish loading, then console.log it


// Set up your server and start listening 
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 8080);

