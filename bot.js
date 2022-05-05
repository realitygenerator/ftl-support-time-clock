require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
//maybe make this a clickable reaction to prevent typos
client.on('messageCreate', msg => {
	//input validation - if previous message to @user === 'You are signed in!' reply 'You are alrady signed in.'
  if (msg.content === 'sign in') {
    msg.reply('You are signed in!');
	//add timestamp and username to DB entry
  }
});

client.on('messageCreate', msg => {
	//input validation - if previous message to @user === 'You are signed out!' reply 'You are alrady signed out.'
  if (msg.content === 'sign out') {
    msg.reply('You are signed out!');
	//add timestamp and username to DB entry
  }
});

client.login(process.env.DISCORD_TOKEN);
