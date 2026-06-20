module.exports = {
  config: {
    name: "adminmention",
    version: "1.3.2",
    author: "〲MAMUNツ࿐ T.T　o.O",
    countDown: 0,
    role: 0,
    shortDescription: "Replies angrily when someone tags admins",
    longDescription: "If anyone mentions an admin, bot will angrily reply with random messages.",
    category: "system"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const adminIDs = ["61578037541206", "100091413057011", "100091413057011"].map(String);

    // Skip if sender is admin
    if (adminIDs.includes(String(event.senderID))) return;

    // যদি কেউ মেনশন দেয়
    const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
    const isMentioningAdmin = adminIDs.some(id => mentionedIDs.includes(id));

    if (!isMentioningAdmin) return;

    // র‍্যান্ডম রাগী রিপ্লাই
    const REPLIES = [
 "বসকে মেনশন মানেই অ্যাকশন শুরু 😎🔥"
"আবার বসরে ডাকছস নাকি? 😏🤭"
"বস অনলাইনে আসলে তোর বিচার হবে 😂"
"বসের নাম নিলেই গ্রুপ গরম হয়ে যায় 🔥😆"
"বসরে মেনশন দিয়ে পালাইস না কিন্তু 🐸"
"বসকে ডাকছস, এখন সাহস থাকলে সামনে আয় 
    ];

    const randomReply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    return message.reply(randomReply);
  }
};
