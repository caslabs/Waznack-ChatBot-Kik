//bot created by Jeraldy Cascayan
'use strict';

var loading = "bot activated!";



console.log(loading);

let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');
 
// Configure the bot API endpoint, details for your bot 
let bot = new Bot({
    username: 'waznack',
    apiKey: '7cfc18d8-1011-4020-852f-aaa4be5f42d3',
    baseUrl: 'https://ea2d6017.ngrok.io/'
});
 
bot.updateBotConfiguration();


var insult = [
	"u fuckin @waznack me and just stare at it. fuckin say hello",
	"fuk off you scrub",
	"faggot",
	"i ought to fuk u up m8",
	"1v1 me",
	"ur mom",
	"ur mom iz gay",
	"stfu fagget",
	"omg nub",
	"u hax i repert u",
	"ill rek u",
	"dirty wanker",
	"u r gay"

]

function InsGen() {
	var rand = insult[Math.floor(Math.random() * insult.length)]
	return rand
}
 
 //bot
bot.onTextMessage((message) => {
    message.reply(InsGen());
});
 

// Set up your server and start listening 
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 8080);

