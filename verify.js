const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require("discord-buttons")
disbut(client);
const { MessageButton, MessageActionRow } = require("discord-buttons")

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


// Commands
client.on("message", message => {
    if (message.content == "!verifica") {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("**Non hai il permesso!** :neutral_face:");
            return;
        }

        var buttonverify = new MessageButton()
            .setLabel("Verify")
            .setEmoji("🔰")
            .setStyle("green")
            .setID("idVerify")

        var embed = new Discord.MessageEmbed()
            .setTitle("VERIFIED BY CLICKING ON THE BUTTON!")
            .setDescription("Embed description")
            .addField("If you want to add a field", "Value here.", true) //True or False

        message.channel.send(embed, buttonverify)
    }
})


client.on("clickButton", async (button) => {
    if (button.id == "idVerify") {

        
        const role = button.guild.roles.cache.get('ROLE_ID')
        const member = button.clicker.member
        await member.roles.add(role)


        button.reply.send("You have verified yourself correctly! <:Verified:825127538350096404>", true)
        //button.reply.defer()

    }
})
