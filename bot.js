const discord = require('discord.js')
const { Client } = require('discord.js');
const client = new Client({disableEveryone: true})
const PREFIX = ('dwd.')

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('ready', function(){
    console.log(`Server Builder Ready! In ${client.guilds.size} Servers!`);

    client.user.setPresence({ game: { name: 'Watching over the DWD eSports Discord! | Beta Version 0.1', type: "streaming", url: "https://www.twitch.tv/g"}})

    client.user.setStatus('online')
});

client.on('message', async msg => {
	if (msg.author.bot) return undefined;
	let command = msg.content.toLowerCase().split(' ')[0];
    command = command.slice(PREFIX.length)
    if(msg.content.includes('cunt'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('pussy'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('puss'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content = ('ass'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('shit'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('bitch'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('fuck'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('nigger'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('nigga'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('nigguh'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('fag'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('fack'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('fick'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes('f a g g'))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained profanity! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes(`( ͡° ͜ʖ ͡°)`))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained an inappropriate image! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes(`wtf`))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained an inappropriate image! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes(`wth`))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained an inappropriate image! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if(msg.content.includes(`wts`))
    {
        var badword = new discord.RichEmbed()
        .addField('Message Deleted!', `${msg.author} your message contained an inappropriate image! Please refrain from using this language in the future.`)
        .setFooter(' | Beta Version 0.1')
        msg.delete()
        msg.channel.send(badword)
        .then(msg.delete(5000))
    }
    if (!msg.content.startsWith(PREFIX)) return undefined
})
client.login(process.env.BOT_TOKEN)
