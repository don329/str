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
   
    `4H_UP `,
    `1M_UP`,
    `★✰LEO 𝐃𝐋𝐌 𝐔𝐏✰★`,
    `IM_NOT_BOT`,
    `....’m HAMW KASM❤`,
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
