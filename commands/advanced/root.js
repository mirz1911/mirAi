const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data:new SlashCommandBuilder()
    .setName('root')
    .setDescription('Usage: </root (numbers)> Basic root operation')
    .addIntegerOption(option =>
        option.setName('numbers')
        .setDescription('target number')
        .setMinValue(0)
        .setRequired(true)
    ),
    async execute(interaction){
        await interaction.reply(toString(Math.sqrt(Number)));
    }
};