require('dotenv').config(); // Load environment variables from .env
const { Telegraf } = require('telegraf');
const axios = require('axios');

// Use the token from .env file
const bot = new Telegraf(process.env.BOT_TOKEN);

// 🔹 Aapke Telegram Channels (Channel IDs)
const channel1 = '-1002212177790'; // mines prediction channel
const channel2 = '-1002345203858'; // goal game prediction channel
const channel3 = '-1002185963371'; // team 19 secrets
const channel4 = '-1002382031113'; // wingo prediction
const channel5 = '-1002262588651'; // prediction tool selling

// 🔹 Ad Configuration
const adVideo = 'https://t.me/Only_4_photos/6';
const adLink = 'https://superprofile.bio/vp/668a5f81a064bd00137afb43';

// 🔹 Function to Show Ad
const showAd = async (ctx) => {
    await ctx.replyWithVideo(
        adVideo,
        {
            caption: "📢 *Telegram Ad* 📢\n\n" +   
                     "🚀 *Exclusive Winning Strategy!*\n\n" +
                     "🎲 * ₹968 to ₹7291 Just IN 3 Minute*\n" +
                     "🎲 *Big small game tool | Color Prediction Game*\n" +
                     "✅ Works in *all* games\n" +
                     "🎯 Higher accuracy, real-time results!\n" +
                     "💸 Start winning today! 🔥",
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🎮 Visit Now", url: adLink }]
                ]
            }
        }
    );
};

// 🔹 Start Command
bot.start(async (ctx) => {
    await showAd(ctx); // हर बार ad दिखेगा

    await ctx.replyWithPhoto(
        'https://t.me/Only_4_photos/4',
        {
            caption: "👋 ᴡᴇʟᴄᴏᴍᴇ! ᴊᴏɪɴ ᴀʟʟ ᴄʜᴀɴɴᴇʟꜱ ᴀɴᴅ ᴄʟɪᴄᴋ ᴠᴇʀɪꜰʏ.",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟭", url: "https://telegram.me/+XmYJ9G_z_D5kZGQ1" },
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟮", url: "https://t.me/+Ilk9wZ1OsMdiODM1" }
                    ],
                    [
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟯", url: "https://telegram.me/+anWRjjpfP3NjYjI9" },
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟰", url: "https://t.me/+6PJfm3k9NThmOThl" }
                    ],
                    [
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟱", url: "https://t.me/+gpt7bMQia4kyMzJl" }
                    ],
                    [
                        { text: "✅ 𝗩𝗘𝗥𝗜𝗙𝗬", callback_data: "verify" }
                    ]
                ]
            }
        }
    );
});

// 🔹 Verification Button
bot.action('verify', async (ctx) => {
    const userId = ctx.from.id;

    try {
        const res1 = await ctx.telegram.getChatMember(channel1, userId);
        const isMember1 = ['member', 'administrator', 'creator'].includes(res1.status);

        const res2 = await ctx.telegram.getChatMember(channel2, userId);
        const isMember2 = ['member', 'administrator', 'creator'].includes(res2.status);

        const res3 = await ctx.telegram.getChatMember(channel3, userId);
        const isMember3 = ['member', 'administrator', 'creator'].includes(res3.status);

        const res4 = await ctx.telegram.getChatMember(channel4, userId);
        const isMember4 = ['member', 'administrator', 'creator'].includes(res4.status);

        if (isMember1 && isMember2 && isMember3 && isMember4) {
            await ctx.replyWithPhoto(
                'https://t.me/Only_4_photos/37',
                {
                    caption: `🎉 *Congratulations, ${ctx.from.first_name}!* 🎉\n\n✅ You have successfully verified!\n\n🚀 Now, choose a prediction below and start winning! 🎮🔥`,
                    parse_mode: "Markdown",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "⚽️ Goal Prediction", web_app: { url: "https://www.correctprediction.in/goal.html" } }],
                            [{ text: "⭐️ Mines Prediction", web_app: { url: "https://www.correctprediction.in/mines.html" } }],
                            [{ text: "🚀 Aviator Prediction", web_app: { url: "https://www.correctprediction.in/aviator.html" } }],
                            [{ text: "🎯 Wingo Prediction", web_app: { url: "https://www.correctprediction.in/wingo.html" } }]
                        ]
                    }
                }
            );
        } else {
            await ctx.reply("⚠️ ʏᴏᴜ ᴍᴜꜱᴛ ᴊᴏɪɴ ᴀʟʟ ᴄʜᴀɴɴᴇʟꜱ ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ.");
        }
    } catch (error) {
        console.error("Verification Error:", error);
        await ctx.reply("⚠️ Error checking your membership. Please try again later.");
    }
});

// 🔹 Bot Launch
bot.launch();
console.log("🤖 Bot is running...");
