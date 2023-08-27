const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data:new SlashCommandBuilder()
    .setName('percentage')
    .setDescription('Usage: </percentage (quantity) from (total)> Basic percentage operation')
    .addIntegerOption(option =>
        option.setName('quantity')
        .setDescription('selected quantity...')
        .setMinValue(0)
        .setRequired(true)
    )
    .addIntegerOption(option =>
        option.setName('total')
        .setDescription('..from the total amounts')
        .setMinValue(0)
        .setRequired(true)
    ),
    async execute(interaction){
        const quant = interaction.options.getInteger('quantity')
        const total = interaction.options.getInteger('total')
        const per = ((quant/total) * 100).toFixed(3);
        
        await interaction.deferReply();

        await interaction.editReply(quant + ' is ' + per +'%' + ' of ' + total);
    }
};