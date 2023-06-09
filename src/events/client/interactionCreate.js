const { InteractionType } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client){
        if (interaction.isChatInputCommand()){
            const{commands} = client;
            const{commandName} = interaction;
            const command = commands.get(commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: `Something went wrong while executing this command :(`,
                    ephemeral: true
                });
            }
        } else if (interaction.isButton()){
            const {buttons} = client;
            const {customId} = interaction;
            const button = buttons.get(customId);
            if(!button) return new Error('No button found');

            try {
                await button.execute(interaction, client);
            } catch (error) {
                console.error(error);
            }
        }else if(interaction.isStringSelectMenu()) {
            const {selecMenus} = client;
            const {customId} = interaction;
            const menu = selecMenus.get(customId);
            if(!menu) return new Error("Menu hasn't been born yet");

            try {
                await menu.execute(interaction, client);
            } catch (error) {
                console.error(error);
            }
        } else if (interaction.type == InteractionType.ApplicationCommandAutocomplete){
            const {commands} = client;
            const {commandName} = interaction;
            const command = commands.get(commandName);
            if(!command) return;

            try {
                await command.autocomplete(interaction, client);
            } catch (error) {
                console.error(error)
            }
        }
    }
}