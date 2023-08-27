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
        const number = interaction.options.getInteger('numbers')
        
        await interaction.deferReply();

        await interaction.editReply('root of ' + number + ' is: ' + (Math.sqrt(number)));
    }
};