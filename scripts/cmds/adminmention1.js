const axios = require("axios");

let imageIndex = 0;

module.exports = {
  config: {
    name: "singleboy",
    version: "20.0.0",
    author: "Malaysia Single Boy",
    countDown: 0,
    role: 0,
    shortDescription: "Malaysia Single Boy mention reply",
    category: "system"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {

    if (this.config.author !== "Malaysia Single Boy") return;

    const admins = [
      { 
        uid: "100091413057011",
        names: ["@মালয়েশিয়া সিঙ্গেল বয়"]
      }
    ];

    const senderID = String(event.senderID);

    if (admins.some(a => a.uid === senderID)) return;

    const text = (event.body || "").toLowerCase();
    const mentionedIDs = event.mentions ? Object.keys(event.mentions) : [];

    const isMentioning = admins.some(admin =>
      mentionedIDs.includes(admin.uid) ||
      admin.names.some(name => text.includes(name.toLowerCase()))
    );

    if (!isMentioning) return;


    const images = [
      "https://i.imgur.com/Ggq2EZi.jpeg",
      "https://i.imgur.com/Hlvlfdb.jpeg",
      "https://i.imgur.com/B4MMlmd.jpeg"
    ];


    const imageUrl = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;


    const captions = [

      "😎 আমার বস মালয়েশিয়া সিঙ্গেল বয় এখন অনলাইনে আছে 🔥",

      "🥀 মালয়েশিয়া সিঙ্গেল বয় বসকে বেশি মেনশন দিও না, বস বিজি আছে 😼",

      "👑 আমার বস মালয়েশিয়া সিঙ্গেল বয় — সম্মান দিয়ে কথা বলো 😎🔥",

      "🐸 মেনশন দিলে রিপ্লাই আসবে, কিন্তু বসের মুড ভালো থাকতে হবে 😂",

      "💙 মালয়েশিয়া সিঙ্গেল বয় বস এখন ব্যস্ত, ইনবক্সে মেসেজ রেখে যাও 😌",

      "😈 বসকে ডাকছো? আগে সালাম দাও তারপর কথা হবে 🫡",

      "🔥 Malaysia Single Boy Official Vibe 😎💫"

    ];


    const caption = `
╔══❖•ೋ° °ೋ•❖══╗
     🇲🇾 Malaysia Single Boy 🇲🇾

${captions[Math.floor(Math.random()*captions.length)]}

╚══❖•ೋ° °ೋ•❖══╝
`;


    try {

      const imgStream = await axios({
        url: imageUrl,
        method: "GET",
        responseType: "stream",
        timeout: 5000,
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      });


      await message.reply({
        body: caption,
        attachment: imgStream.data
      });


    } catch (err) {

      console.log("Image Error:", err.message);

      await message.reply(
        "😢 Malaysia Single Boy পিক দিতে পারলাম না"
      );

    }
  }
};
