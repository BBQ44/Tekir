const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NjE5NjEyMDA3MTc1MjkwODgy.XXKw5g.XNRBqyt1QcrpSHHJz8i4e_yx_9g';

client.on('ready', () => {
  console.log(`Bot ${client.user.tag}Adı İle Giriş Yaptı!`);
});
  client.on('ready', () => {
client.user.setGame(`?yardım`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Serverimize Hoşgeldin.İyi Eğlenceler Dilerim. ${member}`);
});

client.on('message', msg => {
  if (msg.content === '?Yapımcının Adını At') {
    msg.reply('@[TR]BBQ44#2818'); 
  }
});	
client.on('message', message => {
  if (message.content === '?avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', msg => {
  if (msg.content === '%yardım') {
	 msg.reply('Sana Özelden Attım Bakarsın.')
    msg.author.sendMessage(`
**%botlink =Botun Linki.**
**%avatar = Avatar Resminiz.**
**%yapımcının adı = Yapımcının Adını Atar.**
**%çay = Çay Ismarlar**
**%vur =Vurur.**
**%rakı =Rakı**
**%kacserverde=Kaç Serverde Olduğunu Gösterir**`)
  }
});

client.on('message', msg => {
  if (msg.content === 'İyi Geceler') {
    msg.channel.sendMessage('Sanada İyi Geceler'); 
  }
});	
client.on('message', msg => {
  if (msg.content === 'iyi Geceler') {
    msg.channel.sendMessage('Sanada İyi Geceler'); 
  }
});	
client.on('message', msg => {
  if (msg.content === 'iyi geceler') {
    msg.channel.sendMessage('Sanada İyi Geceler'); 
  }
});	
client.on('message', msg => {
  if (msg.content === 'Iyi geceler') {
    msg.channel.sendMessage('Sanada İyi Geceler'); 
  }
});	
client.on('message', msg => {
  if (msg.content === 'Iyı geceler') {
    msg.channel.sendMessage('Sanada İyi Geceler'); 
  }
});	
client.on('message', msg => {
  if (msg.content === 'ıyı geceler') {
    msg.channel.sendMessage('Sanada İyi Geceler'); 
  }
});	
client.on('message', msg => {
  if (msg.content === 'Iyi Geceler') {
    msg.channel.sendMessage('Sanada İyi Geceler'); 
  }
});	
client.on('message', msg => {
  if (msg.content === '?yapımcının adı') {
    msg.reply('@[TR]BBQ44#2818'); 
  }
});	
client.on('message', msg => {
  if (msg.content === '?rakı') {
   msg.channel.sendMessage("https://img-s2.onedio.com/id-54b18cf3bbb996701d715e41/rev-0/bound/w-800/s-1f59f57cdf680d69ab3941d55081a6383d412757.jpg")
  }
});

client.on('message', msg => {
  if (msg.content === '?çay') {
   msg.channel.sendMessage("https://ibb.co/ezwDjc")
  }
});
client.on('message', msg => {
	if (msg.content === '?dil çıkar') {
	msg.channel.sendMessage("https://ibb.co/cuQ5fH")
	}
});			

client.on('message', msg => {
  if (msg.content === '?BotLink') {
   msg.reply("https://discordapp.com/api/oauth2/authorize?client_id=423822262668623872&permissions=0&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D423822262668623872%26permissions%3D0%26scope%3Dbot&scope=bot)")
  }
});

client.on('message', msg => {
	if (msg.content === `?vur ('member')`) {
	msg.reply("Vurdun")
	}
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Serverimize Hoşgeldin.İyi Eğlenceler Dilerim. ${member}`);
});

client.on('message', msg => {
	if (msg.content === '%minigame99') {
	msg.reply("Sana Özelden Attım Nasıl Oynıyacağını");
    msg.author.sendMessage(`[beta]**Bot Çalışmıyo Olabilir**
99 Tane Kasa Vardır 1 Tanesinde 500TP Vardır(Tekir Point) Vardır.`)
	}
});
client.on('message', msg => {
	if (msg.content === '?ping') {
	msg.reply(`Pingin! \`${client.pings[0]}ms\``);
	}
});


client.on('message', msg => {
  if (msg.content === 'Selamın Aleyküm') {
    msg.reply('Aleyküm Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 'selamın aleyküm') {
    msg.reply('Aleyküm Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 'selamun aleyküm') {
    msg.reply('Aleyküm Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 'selamün aleyküm') {
    msg.reply('Aleyküm Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 's.a') {
    msg.reply('Aleyküm Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 's.a.') {
    msg.reply('Aleyküm Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 's a') {
    msg.reply('Aleyküm Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 'Selamın aleyküm') {
    msg.reply('Aleyküm Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 'Selamün aleyküm') {
    msg.reply('Aleyküm Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 'Selamun aleyküm') {
    msg.reply('Aleyküm Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 'Nasılsın') {
    msg.reply('İyiyim Sen Nasılsın');
  }
});
client.on('message', msg => {
  if (msg.content === 'nasılsın') {
    msg.reply('İyiyim Sen Nasılsın');
  }
});

client.on('message', msg => {
	if (msg.content === '?kacserverde') {
	msg.reply(`Şu Kadar Serverde => \`${client.guilds.size}\``);
	}
});

  client.login('NjE5NjEyMDA3MTc1MjkwODgy.XXKw5g.XNRBqyt1QcrpSHHJz8i4e_yx_9g');
