const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('teste')
		.setDescription('Teste de comando'),
	async execute(interaction) {
		await interaction.reply('Está funcionando');
	},
};