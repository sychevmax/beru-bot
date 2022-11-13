const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');
const express = require('express')

dotenv.config();

const bot = new Telegraf(process.env.botToken);

bot.start((ctx) => {
  ctx.reply("Привет, красавчик! Один здесь?");
});

bot.on("message", (ctx) => {
  ctx.reply(ctx.message.text + "- Ок");
});

bot.launch();

const app = express()
app.all('/', (req, res) => {    
    res.send('Success')
})
app.listen(process.env.PORT || 3000)