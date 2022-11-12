const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');
const express = require('express');
const packageInfo = require('package.json');

dotenv.config();

const bot = new Telegraf(process.env.botToken);

bot.start((ctx) => {
  ctx.reply("Привет, красавчик! Один здесь?");
});

bot.on("message", (ctx) => {
  ctx.reply("Ок");
})

bot.launch();

var app = express();

app.get('/', function(req, res) {
    res.json({ version: packageInfo.version });
});

var server = app.listen(process.env.PORT, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Web server started at http://%s:%s', host, port);
});
