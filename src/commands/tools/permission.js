const {SlashCommandBuilder, PermissionFlagsBits, PermissionsBitField} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('permission')
        .setDescription('This command requires permissions')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client){
        
    }
}