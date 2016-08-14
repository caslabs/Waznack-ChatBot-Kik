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
    baseUrl: 'https://14a72c56.ngrok.io/'
});
 
bot.updateBotConfiguration();

var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();
var sec = d.getSeconds();
var timestamp = hour + ":" + minute + ":" + sec


var botStart = "v0.2 waznack".rainbow + " online @ " + timestamp.cyan;
var fullusername = "Jeraldy Cascayan".green
var HoldUser;


console.log('Created by ' + fullusername + ' a.k.a '.red + '@c0p'.yellow + ' on github');

var insult = require('./ArraysOfInsults.js').insult





function InsGen() {
	var rand = insult[Math.floor(Math.random() * insult.length)]
	return rand
}

 //bot

bot.onStartChattingMessage((message, next) => {
    bot.getUserProfile(message.from)
        .then((user) => {
            message.reply('Hey ${user.username}!, I am waznack! the insultor bot!');
        });
});


//OnTextMessage
var insult = require('./ArraysOfInsults.js').insult;





bot.onTextMessage((message, next) => {

	var WhoInsult = message.body.split(" ")




	//if user says info
	if (message.body === 'info') {
		message.reply('Commands: insult [username]');
	} else if (WhoInsult[0] === "insult") {
	var botsentdate = new Date();
	var bothour = botsentdate.getHours();
	var botminute = botsentdate.getMinutes();
	var botsecond = botsentdate.getSeconds();
	var fullhold = bothour + ":" + botminute + ":" + botsecond
	var botInsultReply = InsGen()
	var botReplyColor = botInsultReply.magenta,
    UserReplyColor = message.body.green;
	var UserHold = WhoInsult[1]; //username



		bot.getUserProfile(message.from)
	.then((user) => {

			bot.send(botInsultReply, UserHold);
    console.log(fullhold.cyan + ` ${user.username} ` + ' sent an insult message to : ' + UserHold.yellow);
    console.log(fullhold.cyan+ " waznack replied : " + botReplyColor.magenta);
        });
  
} else { 
	// else do insults
	var botsentdate = new Date();
	var bothour = botsentdate.getHours();
	var botminute = botsentdate.getMinutes();
	var botsecond = botsentdate.getSeconds();
	var fullhold = bothour + ":" + botminute + ":" + botsecond
    UserReplyColor = message.body.green;
    var BotReplyInsult = InsGen();

bot.getUserProfile(message.from)
	.then((user) => {
			var ReplybotInsultReply = BotReplyInsult.magenta
	message.reply(`${user.username},` + " " + BotReplyInsult);
    console.log(fullhold.cyan + ` ${user.username} ` + ' said: ' + UserReplyColor);
    console.log(fullhold.cyan+ " waznack replied : " + ReplybotInsultReply);
        });
  
}
});


 
console.log(botStart); //bot activate





// Set up your server and start listening 
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 8080);

