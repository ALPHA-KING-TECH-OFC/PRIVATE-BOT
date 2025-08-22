const { cmd, commands } = require("../command");
const config = require('../config');
const os = require('os'); // To get RAM info
const moment = require('moment'); // For uptime formatting

cmd(
  {
    pattern: "menu",
    alias: ["getmenu"],
    react: "📜",
    desc: "Get bot command list",
    category: "main",
    filename: __filename,
  },
  async (malvin, mek, m, { from, pushname, sender, reply }) => {
    try {
      // Calculate dynamic values
      const uptime = moment.duration(process.uptime() * 1000).humanize();
      const totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB";
      const usedRam = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB";
      const owner = config.OWNER_NUMBER || "Unknown"; // fallback
      const user = pushname || sender.split("@")[0];

      // Create menu categories
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        const oneCmd = commands[i]; // <== changed cmd -> oneCmd
        if (oneCmd.pattern && !oneCmd.dontAddCommandList) {
          const line = `┃   ▪️ ${config.PREFIX}${oneCmd.pattern}\n`;
          if (menu[oneCmd.category]) {
            menu[oneCmd.category] += line;
          }
        }
      }

      const madeMenu = `  ${user}
*꧁༒☬PRIVATE- ⃝⃤⟦TECH♰𝕯☬༒꧂*
||                                            ||
|| IF DEVELOPING WAS EASY MAKE YOURS ||
||                                            ||
╭━━━━━〔ALPHA-KING-TECH〕━━━━╮
┃ 👑 Owner      : PRIVATE MD BOT
┃ ⚙️ Prefix     : [.]
┃ 🌐 Platform   : HEROKU.COM
┃ 📦 Version    : 1.0.0
┃ ⏱️ Runtime    : ${uptime}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
╭─「 *THIS IS JUST A GLIMPSE*」 
│ ⚙️ _*MAIN COMMANDS*_
│   .alive 
│   .menu 
│   .ai <text> 
│   .system 
│   .owner 
│
│ 📥 _*DOWNLOAD*_
│   .song  
│   .video  
│   .fb 
│
│ 👑 _*OWNER*_
│   .restart 
│   .update 
│
│ 🔁 *CONVERT_*
│   ➥ .sticker  
│   ➥ .img 
│   ➥ .tr 
│   ➥ .tts  
╰──────────●●►
MORE CMDS SOON 🔜 | • YOU LIKE IT

> *POWERED BY ALPHA*
`;

      await malvin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/5a19t0.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );

    } catch (e) {
      console.error(e);
      reply("❌ Menu error:\n" + e.message);
    }
  }
);
