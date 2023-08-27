const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data:new SlashCommandBuilder()
    .setName('thoughts')
    .setDescription('Random thoughts'),
    async execute(interaction) {
        const thoughts = [
            "If my calculations were correct, our universe is around 14 billion years old right now",
            "Mankind is drawn to the heavens for the same reason we were once drawn into unknown lands and across the open sea. We choose to explore space because doing so improves our lives and lifts our national spirit. Let us continue the journey.",
            "If you want to make good use of your time, you've got to know what's most important and then give it all you've got",
            "If you want to understand today you have to search yesterday.",
            "Do what you can, with what you have, where you are.",
            "Don’t quit yet, the worst moments are usually followed by the most beautiful silver linings. You have to stay strong, remember to keep your head up and remain hopeful.",
            "The world is full of nice people. If you can’t find one, be one.",
            "Motivation comes from working on things we care about."

        ];
        
        await interaction.deferReply();

        const randomThought = thoughts[Math.floor(Math.random()*thoughts.length)];
        await interaction.editReply(randomThought);
    },
};