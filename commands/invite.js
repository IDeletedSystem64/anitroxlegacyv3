module.exports = {
	name: 'invite',
	description: 'Sends invite to add the bot to a server.',
	execute(message) {
		message.channel.send('<:NyabotDenied:697145462565896194> **projectcanary is not a public bot, Once it is at final release both Canary and Stable will be publically invitable, Sorry about that.**');
	},
};