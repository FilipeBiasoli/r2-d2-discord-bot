const { Client, Intents } = require('discord.js');
const { token } = require('./config/config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('O bot está on-line!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'teste') {
		await interaction.reply('Está funcionando!');
	}
});

client.login(token);