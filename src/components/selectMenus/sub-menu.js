module.exports = {
    data: {
        name: 'sub-menu'
    },
    async execute(interaction, client){
        await interaction.reply({
            content: `You selected: ${interaction.value[0]}` //one option
        })
    }
}