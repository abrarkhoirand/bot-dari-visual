const {Client, MessageEmbed} = require('discord.js');
const bot = new Discord.Client;

const token = 'NzcwMTI3NDQzOTIxOTkzNzI4.X5ZDEg.PngiBuSY9n53eM5bk_zRj8Y1Xi0'
var PREFIX = '+'
var version = '1.1.02'

bot.on('ready',() => {
    console.log('bot sudah online');
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    switch (args[0]) {
        case 'ping':
            message.reply('pong');
            break;
            


            case 'info':
                if (+args[1]) {
                    message.channel.send('Command : \n-author\n-versi');
                    break;
                } else {
                     if (args[1] === 'author') {
                      message.channel.send('Abrar.Khoirand');
                      break;
                     }   else if (args[1] === 'versi'){
                       message.channel.send('Version : ' + version);
                     break;
                     } else {
                      message.channel.send('commandnya gak ada om');
                     break;
                    }    
                }   
        case 'embed':        
        const embed = new MessageEmbed()
        .setTitle('informasi owner')
        .addField('Nama : ', 'Abrar Khoirand')
        .setFooter('HVB' + version)
        message.channel.send(embed);
        break;
    }
})

bot.login(token);