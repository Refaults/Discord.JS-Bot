const Discord = require('discord.js');
const bot = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


client.on("message", (message) =>{ // Send time
    if(message.content == '!time'){
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();

        message.channel.send(":alarm_clock: Current time: " + hour + ":" + minute); // Message with the time (:alarm_clock: is the emoji clock)
    }
})
