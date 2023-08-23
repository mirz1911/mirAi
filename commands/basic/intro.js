const { SlashCommandBuilder } = require('discord.js');
let intro = "Hi, I'am mirAi my pronouns are: sis/sheesh I work at BRUH ENTERPRISE as Wilbruh's assistant/secretary, Nice to meet you! >.<";

module.exports = {
    data:new SlashCommandBuilder()
    .setName('intro')
    .setDescription('Introduction'),
    async execute(interaction) {
        await interaction.reply(intro);

    },
};