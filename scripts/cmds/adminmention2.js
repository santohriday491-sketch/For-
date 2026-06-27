const axios = require("axios");

// 🔒 HARD SECURITY CONFIG
const AUTHOR = "Farhan-Khan";
const COMMAND_NAME = "adminmention2";
const OWNER_UID = "100091413057011";
const EXPIRE_DATE = "2099-12-31";

module.exports = {
  config: {
    name: COMMAND_NAME,
    version: "10.0.0",
    author: AUTHOR,
    countDown: 0,
    role: 0,
    shortDescription: "Admin mention ultra fast voice",
    category: "system"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {

    // ❌ AUTHOR + NAME LOCK
    if (
      this.config.author !== AUTHOR ||
      this.config.name !== COMMAND_NAME
    ) {
      return message.reply("⚠️ File Locked!");
    }

    // ❌ TIME LOCK
    if (new Date() > new Date(EXPIRE_DATE)) {
      return message.reply("⛔ File Expired!");
    }

    const admins = [
      { uid: "100091413057011", names: ["@মালয়েশিয়া সিঙ্গেল বয়"] },
      { uid: "61578037541206", names: ["@hriday hassan shanto"] }
    ];

    const senderID = String(event.senderID);
    const text = (event.body || "").toLowerCase();
    const mentionedIDs = event.mentions ? Object.keys(event.mentions) : [];

    // ❌ admin নিজেকে mention করলে block
    if (
      admins.some(a => a.uid === senderID) &&
      mentionedIDs.includes(senderID)
    ) return;

    // ✅ mention detect
    const isMentioning = admins.some(admin =>
      mentionedIDs.includes(admin.uid) ||
      admin.names.some(name => text.includes(name.toLowerCase()))
    );

    if (!isMentioning) return;

    // 🎤 VOICE LIST (FAST SERVER use করো)
    const voices = [
      "https://files.catbox.moe/wfssgi.mp3",
      "https://files.catbox.moe/fm4rnu.mp3",
      "https://files.catbox.moe/pd8yn8.mp3",
      "https://files.catbox.moe/eck54q.mp3"
    ];

    const voiceUrl = voices[Math.floor(Math.random() * voices.length)];

    try {
      // ⚡ DIRECT STREAM (NO SAVE = SUPER FAST)
      const res = await axios({
        url: voiceUrl,
        method: "GET",
        responseType: "stream",
        timeout: 10000
      });

      await message.reply({
        attachment: res.data
      });

    } catch (err) {
      console.log("VOICE ERROR:", err.message);
      message.reply("😢 ভয়েস লোড করা যায়নি");
    }
  }
};
