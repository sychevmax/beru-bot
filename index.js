const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.botToken);

bot.start((ctx) => {
  ctx.reply("Привет, красавчик! Один здесь?");
});

bot.on("message", (ctx) => {
  ctx.reply("Ок");
});

(async () => {
  // Start the app
  await bot.launch();

  console.log('⚡️ Bolt app is running!');
})();
