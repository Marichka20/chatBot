const { Telegraf } = require("telegraf");
const openai = require("openai");

const telegramToken = "6171327548:AAExBjKdqcJoO6gMzGmbWmfcf9L7T######";
const openaiKey = "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";

const bot = new Telegraf(telegramToken);

bot.on("text", async (ctx) => {
  const chatResponse = await openai.Completion.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: ctx.message.text },
    ],
  });
  ctx.reply(chatResponse.choices[0].message.content);
});

bot.launch();
