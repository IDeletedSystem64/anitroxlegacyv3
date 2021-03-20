const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'shutdown',
    description: '(Owner Only) Shuts down Nyabot',
    execute(message) {
        if (message.author.id == 309427567004483586n) {
            message.channel.send("<a:NyabotWorking:697147309531594843> Shutting Down...");
            client.destroy().catch(console.error);
        } else {
            message.channel.send("<:NyabotDenied:697145462565896194> Access Denied, You must be bot owner to execute this command.");
        }
    }}