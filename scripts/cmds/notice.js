module.exports = {
  config: {
    name: "adminnotice",
    aliases: ["notice", "admin"],
    version: "2.0",
    author: "MD ALAMIN",
    countDown: 5,
    role: 1,
    shortDescription: "Big Admin Notice",
    longDescription: "Stylish GOD BOT Admin Notice System",
    category: "group",
    guide: {
      en: "{pn} [message]"
    }
  },

  onStart: async function ({ api, event, args, threadsData }) {

    const msg = args.join(" ");

    if (!msg) {
      return api.sendMessage(
`╔━━━❖❖━━━━━━❖❖━━━╗
      👑 ──╬❆🙋‍♂️💞.💞🙋‍♀️❅╬──►
     ❌❌এঁডঁমিঁনঁ নোঁটিঁশঁ❌❌👑
╚━━━❖❖━━━━━━❖❖━━━╝

◄──╬❌

᛫ꔸ͎̽ꔸ͎̽̽ꔸ͎̽̽̽ꔸ͎̽̽̽̽ꔸ͎̽̽̽̽̽ꔸ͎̽̽̽̽ꔸ͎̽̽̽ꔸ͎̽̽ꔸ͎̽ꔰ─⃜⃜͢͢❥⃟⋆⃝🌺 সবাই এগুলো মেনে চলার চেষ্টা করবেন ─⃜⃜͢͢❥⃟🌺ꔰꔸ͎̽ꔸ͎̽̽ꔸ͎̽̽̽ꔸ͎̽̽̽̽ꔸ͎̽̽̽̽̽ꔸ͎̽̽̽̽ꔸ͎̽̽̽ꔸ
................. 🙋‍♂️❌🙋‍♀️................. 
1.👉 প্রথম গ্রুপে আসার সাথে সাথে সালাম দিতে হবে... 🥰🥰
2.👉 সবার সাথে ভালোভাবে কথা বলতে হবে... 🥰🥰
3.👉 গ্রুপে কোন ধরনের আজে বাজে কথা বলা নিষেধ❌❌
4.👉 গ্রুপে খারাপ ভিডিও বা পিক  দেওয়া নিষেধ❌❌
5.👉 অনুমতি ছাড়া কারো ইনবক্সে যাওয়া নিষেধ❌❌
6.👉 নামাজের জন্য  ৩০ মিনিট করে গ্রুপ বন্ধ রাখা হবে❌❌
7.👉 2 .3. টার বেশি ইমোজি দেওয়া নিষেধ ❌❌
🌺🌺Only Adda🫰🌺🌺
❌❌Group Rules❌❌
👉না মানলে কিক দেওয়া হবে.
🌺..Grouper..C.E.O..⎯͢𝐀𝐝𝐦𝐢𝐧★⎯͢
................ ❌❌. ...................

━━━━━━━━━━━━━━━━━━

💎 POWERED BY nijhum BOT 💎`,
        event.threadID,
        event.messageID
      );
    }

    const threadInfo = await api.getThreadInfo(event.threadID);
    const threadName = threadInfo.threadName || "Unknown Group";

    const time = new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Dhaka"
    });

    const form =
`╔══════════════════════╗
       👑 𝗚𝗢𝗗 𝗕𝗢𝗧 👑
╚══════════════════════╝

╭━━━〔 ⚠️ ADMIN NOTICE ⚠️ 〕━━━╮

📢 | সকল সদস্যদের দৃষ্টি আকর্ষণ করা যাচ্ছে

━━━━━━━━━━━━━━━━━━

📝 | 𝗡𝗢𝗧𝗜𝗖𝗘 :

${msg}

━━━━━━━━━━━━━━━━━━

🏠 | 𝗚𝗥𝗢𝗨𝗣 :
➤ ${threadName}

⏰ | 𝗧𝗜𝗠𝗘 :
➤ ${time}

👑 | 𝗙𝗥𝗢𝗠 :
➤ গ্রুপ এডমিন প্যানেল

━━━━━━━━━━━━━━━━━━

⚡ সকল সদস্যকে অনুরোধ করা যাচ্ছে
এই নোটিশ গুরুত্ব সহকারে পড়ার জন্য।

💬 অপ্রয়োজনীয় স্প্যাম করা থেকে বিরত থাকুন
💬 গ্রুপের নিয়ম মেনে চলুন
💬 এডমিনদের সম্মান করুন

━━━━━━━━━━━━━━━━━━

🌸 ধন্যবাদ সবাইকে 🌸

╭━━━━━━━━━━━━━━━━╮
┃ 💎 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 💎
┃       👑 nijhum bot 👑
╰━━━━━━━━━━━━━━━━╯`;

    return api.sendMessage(form, event.threadID);
  }
};
