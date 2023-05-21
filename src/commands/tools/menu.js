const {SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Returns a select menu'),
    async execute(interaction, client){
        const menu = new StringSelectMenuBuilder()
            .setCustomId(`sub-menu`)
            .setMinValues(1)
            .setMaxValues(1)
            .setPlaceholder('Test placeholder')
            .setOptions(
                new StringSelectMenuOptionBuilder({
                    label: `Option 1`,
                    value: `test 1`
                }),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Label 2')
                    .setDescription('Desc 2')
                    .setValue('value 2'),
            );
        await interaction.reply({
            content: 'Chose one',
            components: [new ActionRowBuilder().addComponents(menu)]
        });
    }
}