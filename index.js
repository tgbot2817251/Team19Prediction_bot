require('dotenv').config(); // Load environment variables from .env
const { Telegraf } = require('telegraf');
const axios = require('axios');

// Use the token from .env file
const bot = new Telegraf(process.env.BOT_TOKEN);

// 🔹 Aapke Telegram Channels
const channel1 = '@mines_Prediction';
const channel2 = '@goalgame_prediction';
const channel3 = '@team19_secrets';
const channel4 = '@team19sachin';
const channel5 = '@+gpt7bMQia4kyMzJl';

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
                     "🎲 *Live Proof ₹477 to ₹27037 Just IN 3 Minute*\n" +
                     "🎲 *Big & Small Hack | Color Prediction Game*\n" +
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
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟭", url: `https://t.me/${channel1.replace('@', '')}` },
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟮", url: `https://t.me/${channel2.replace('@', '')}` }
                    ],
                    [
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟯", url: `https://t.me/${channel3.replace('@', '')}` },
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟰", url: `https://t.me/${channel4.replace('@', '')}` }
                    ],
                    [
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟱", url: `https://t.me/${channel5.replace('@', '')}` }
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
