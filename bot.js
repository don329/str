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
    `ββ°LEO πππ ππβ°β`,
    `IM_NOT_BOT`,
    `....βm HAMW KASMβ€`,
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
