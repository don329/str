const Discord = require('discord.js');
const tpoints = {};
const prefix = "-"
const vpoints = {};
const jimp = require("jimp");
const client = new Discord.Client();



client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
   
    `FOG_UP `,
    `ڕازی کردنی دڵی خەڵکی یاسایەکە شمولی من ناکات`,
    `★✰𝐋𝐄𝐕𝐄𝐋 𝐃𝐋𝐌 𝐔𝐏✰★`,
    `NAQEB_UP`,
    `PERYA’m HAMW KASM❤`,
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {      
    type:"Playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.login("");
