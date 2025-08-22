const { cmd } = require("../command");

cmd(
  {
    pattern: "ping",
    desc: "Check bot latency",
    react: "🖥️",
    category: "utility",
    filename: __filename,
  },
  async (malvin, mek, m, { reply }) => {
    const start = Date.now();
    await malvin.sendMessage(mek.key.remoteJid, { text: "Pinging..." }, { quoted: mek });

    const ping = Date.now() - start;
    reply(`╭───「 *PRIVATE XMD * 」───╮
│ LIGHTNING SPEED IS ${ping} ms 

> ALPHA-KING...TYPING....
╰──────────────────────────╯`);
  }
);
