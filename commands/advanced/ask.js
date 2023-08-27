const { SlashCommandBuilder } = require("discord.js");
const { ask } = require('../../ai.js')

module.exports = {
    data:new SlashCommandBuilder()
    .setName('ask')
    .setDescription('Ask question')
    .addStringOption(option =>
        option.setName('prompt')
        .setDescription('input question')
        .setRequired(true)
    ),
    async execute(interaction) {
        const prompt = interaction.options.getString('prompt')
        const userId = interaction.user.id;
        
        await interaction.deferReply();

        const gptResponse = await ask(prompt);

        if (gptResponse.length == 0) {
            await interaction.editReply("...");
        } else {
            await interaction.editReply(
                `> <@${userId}>: ${prompt}\n\n${gptResponse}`)
            }
    },
};
