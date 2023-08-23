const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data:new SlashCommandBuilder()
    .setName('ask')
    .setDescription('Ask question'),
    async execute(interaction) {
        await interaction.reply(".");
    },
};
