// plugins/developer.js
const { cmd } = require("../command");

cmd(
  {
    pattern: "developer",
    alias: ["dev", "creator"],
    desc: "Show developer info with image and intro text",
    category: "info",
    react: "👨‍💻",
    filename: __filename,
    fromMe: false,
  },
  async (malvin, mek, m, { reply }) => {
    const developerInfo = {
      name: "ALPHA-KING-TECH",
      number: "wa.me/264718728504",
      github: "https://github.com/ALPHA-KING-TECH-OFC",
      note: "බොට් එක ගැන support එකක් ඕන නම් msg එකක් දාන්න!",
      image:
        "",
    };

    // STEP 1: Intro reaction (optional)
    await malvin.sendMessage(mek.key.remoteJid, {
      react: { text: "👨‍💻", key: mek.key },
    });

    // STEP 2: Intro Message
    await malvin.sendMessage(
      mek.key.remoteJid,
      { text: "👋 *HEY I AM THE DEVELOPER!*" },
      { quoted: mek }
    );

    // STEP 3: Developer Info with Image
    const caption = `
*👨‍💻 Developer Info*

👤 *Name:* ALPHA-KING-TECH 

📞 *Contact:* 263 71 803 6108 

💻 *GitHub:* CHECK MY CHANNEL OPS

📝 *Note:* ${developerInfo.note}
    `.trim();

    await malvin.sendMessage(
      mek.key.remoteJid,
      { image: { url: developerInfo.image }, caption },
      { quoted: mek }
    );
  }
);
