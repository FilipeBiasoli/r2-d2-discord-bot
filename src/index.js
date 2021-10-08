const { Client, Intents } = require('discord.js');
const { token } = require('./config/config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('O bot está on-line!');
});

client.login(token);