const fs = require("fs");
const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "info",
    aliases: ["admininfo", "botinfo", "mamun", "ownerinfo"],
    version: "1.4",
    author: "亗🅼🅰ᥫᩣ🅼ᥫᩣ🆄🅽×͜×",
    countDown: 5,
    role: 0,
    shortDescription: { en: "Show bot & owner info" },
    longDescription: { en: "Display detailed information about the bot and owner" },
    category: "owner",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ message }) {

    // OWNER INFO
    const authorName = "×᷼×hriday hassan shanto ";
    const ownAge = "19+";
    const messenger = "https://m.me/j/Abbx7erH5Jsnyc8a/?send_source=gc%3Acopy_invite_link_t";
    const authorFB = " মালয়েশিয়া সিঙ্গেল বয়";
    const authorNumber = "+60111671390";
    const Status = "Single";

    // SAFE CATBOX VIDEO LINK
    const videoLink = "https://files.catbox.moe/0feqwu.mp4";

    // BANGLADESH TIME
    const now = moment().tz("Asia/Dhaka");
    const date = now.format("MMMM Do YYYY");
    const time = now.format("h:mm:ss A");

    // BOT UPTIME
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / 3600) % 24);
    const days = Math.floor(uptime / 86400);

    const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const text =
`✨《 BOT & OWNER INFORMATION 》🎀

🤖 Bot Name: ${global.GoatBot.config.nickNameBot}
👾 Prefix: ${global.GoatBot.config.prefix}

💙 Owner Name: ${authorName}
📝 Age: ${ownAge}
💕 Relationship: ${Status}

📞 WhatsApp: ${authorNumber}
🌍 Facebook: ${authorFB}

🗓 Date: ${date}
⏰ Time: ${time}

🔰 Contact Owner: ${messenger}
📛 Bot Uptime: ${uptimeString}

==============================`;

    return message.reply({
      body: text,
      attachment: await global.utils.getStreamFromURL(videoLink)
    });
  },

  onChat: async function ({ event, message }) {
    if (event.body?.toLowerCase() === "info") {
      return this.onStart({ message });
    }
  }
};
