const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "+"

  client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }

    if (msg.content === '+avert' ) {
      msg.delete()
      msg.reply('Avertissement du modo!');
      }

    if (msg.content === '+avatar') {
      msg.reply(msg.author.avatarURL);
    }

    if (msg.content === `on m'appelle l'ovni`) {
      msg.reply(`on m'appelle Franklin!`);
    }

    if (msg.content === 'bonjour') {
      msg.reply('Hey!');
    }

    if (msg.content === 'Salut') {
      msg.reply('Coucou!');  
    }
 
    if (msg.content === 'yo') {
      msg.reply('Bonjour!');
    }
 
    if (msg.content === 'wesh') {
      msg.reply('Bonjour!');
    }

    if (msg.content === 'c') {
      msg.reply(`T'aurais aimé que je dise D ? dommage...`);
    }

    if (msg.content === 'C') {
      msg.reply(`T'aurais aimé que je dise D ? dommage...`);
    }

    if (msg.content === 'mdr') {
      msg.reply(`Qu'est ce qu'on rigole!`);
    }

    if (msg.content === 'photo') {
      msg.reply(`cheese!!`);
    }

    if (msg.content === 'hey') {
      msg.reply('Bonjour!');
    }

    if (msg.content === 'cv') {
      msg.reply('Bien et vous cher humain?');
    }

    if (msg.content === 'ça va?') {
      msg.reply('Comme une tortue ;)');
    }

    if (msg.content === `tortue`) {
      msg.reply(`Oui?`);  
    }

    if (msg.content === `tg franklin`) {
      msg.reply(`ok...🤐`);  
    }

    if (msg.content === `ah`) {
      msg.reply(`B`);  
    }

    if (msg.content === `Ha`) {
      msg.reply(`B`);  
    }

    if (msg.content === `ha`) {
      msg.reply(`B`);  
    }

    if (msg.content === `a`) {
      msg.reply(`B`);  
    }

    if (msg.content === `A`) {
      msg.reply(`B`);  
    }

    if (msg.content === `+emoji mdrr`) {
      msg.delete()
      msg.reply(`🤣`);  
    }

    if (msg.content === `+emoji lol`) {
      msg.delete()
      msg.reply(`😄`);  
    }

    if (msg.content === `+emoji xd`) {
      msg.delete()
      msg.reply(`😆`);  
    }

    if (msg.content === `+emoji bg`) {
      msg.delete()
      msg.reply(`😎`);  
    }

    if (msg.content === `+emoji mdr`) {
      msg.delete()
      msg.reply(`😂`);  
    }

    if (msg.content === `+emoji pleure`) {
      msg.delete()
      msg.reply(`😪`);  
    }

    if (msg.content === `+emoji tortue`) {
      msg.delete()
      msg.reply(`🐢`);  
    }

    if (msg.content === `+emoji omg`) {
      msg.delete()
      msg.reply(`😱`);  
    }

    if (msg.content === `+emoji wtf`) {
      msg.delete()
      msg.reply(`😵`);  
    }

    if (msg.content === `+emoji what`) {
      msg.delete()
      msg.reply(`🤔`);  
    }

    if (msg.content === `+emoji boum`) {
      msg.delete()
      msg.reply(`🤯`);  
    }
      
    if (msg.content === `+emoji shut`) {
      msg.delete()
      msg.reply(`🤫`);  
    }

    if (msg.content === `+emoji vent`) {
      msg.delete()
      msg.reply(`💨`);  
    }

    if(msg.content === `+emoji`) {
      msg.reply(`https://getemoji.com/`);
    }
    
    if(msg.content === `+emoji-list`) {
      msg.reply(`😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 🤤 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🥳 🥴 🥺 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 👿`);
    }  

    if(msg.content === `+fuck`) {
      msg.delete()
      msg.reply(`https://media.tenor.com/images/6f6cf958f88ab1cff769ffa20f1d8a92/tenor.gif`);
    }

    if(msg.content === `+mdr`) {
      msg.delete()
      msg.reply(`https://tenor.com/view/rire-rigoler-marrer-nicolas-sarkozy-gif-5242881`);
    }

    if(msg.content === `+love`) {
      msg.delete()
      msg.reply(`https://media1.tenor.com/images/3264bcc47ee47ebbdd441f9f1d203542/tenor.gif?itemid=12498539`);
    }

    if(msg.content === `+omg`) {
      msg.delete()
      msg.reply(`https://media1.tenor.com/images/b7d855d18ae9ddcac3ef87e70fec42d5/tenor.gif?itemid=4795768`);
    }

    if(msg.content === `+vodka`) {
      msg.delete()
      msg.reply(`https://media1.tenor.com/images/9f9694177d581cec0ace3199de0d22e2/tenor.gif?itemid=4425374`);
    }

    if(msg.content === `+blk`) {
      msg.delete()
      msg.reply(`https://media1.tenor.com/images/cca812791a4c80b26fdcd5f8e368da45/tenor.gif?itemid=7213678`);
    }

    if(msg.content === `+bim-bam-boum`) {
      msg.delete()
      msg.reply(`https://youtu.be/rfEcAqSmu-g`);
    }

    if(msg.content === `+tg`) {
      msg.delete()
      msg.reply(`😮🤐😶`);
    }

    if(msg.content === `+codecrea`) {
      msg.delete()
      msg.reply(`Mon code créateur:   https://cdn.discordapp.com/attachments/636925787337130004/637243691412488203/1549554588-3734-card_1.png`);
    }

    if(msg.content === `+insta`) {
      msg.delete()
      msg.reply(`Instagram: https://www.instagram.com/alex.ruskof.yt/ `);
    }

    if(msg.content === `+snap`) {
      msg.delete()
      msg.reply(`Snapchat: https://www.snapchat.com/add/alexruskofyt`);
    }

    if(msg.content === `+youtube`) {
      msg.delete()
      msg.reply(`Youtube: https://www.youtube.com/c/AlexRuskof`);
    }

    if(msg.content === `+ytb`) {
      msg.delete()
      msg.reply(`Youtube: https://www.youtube.com/c/AlexRuskof`);
    }

    if(msg.content === `+twitch`) {
      msg.delete()
      msg.reply(`Twitch: https://www.twitch.tv/alex_ruskof`);
    }

    if(msg.content === `+steam`) {
      msg.delete()
      msg.reply(`Code d'ami steam: 493376121`);
    }

    if(msg.content === `+epic`) {
      msg.delete()
      msg.reply(`Epic Games: Code ALEX-RUSKOF`);
    }

    if(msg.content === `+discord`) {
      msg.delete()
      msg.reply(`Discord: @Alex Ruskof#9958`);
    }
});

client.on('message' , function (message) {
  if(message.content === prefix + "ping") {
      let début = Date.now()
      message.channel.send('.').then((n) => n.edit(`${Date.now() - début} ms`));
  };
  if(message.content === prefix + "help") {
      let help_embed = new Discord.RichEmbed()
      .setTitle("Menu de Franklin:")
      .addField("𝓒𝓸𝓶𝓶𝓪𝓷𝓭𝓮 𝓹𝓻𝓮𝓯𝓲𝔁:", "`+`")
      .addField("𝓒𝓸𝓶𝓶𝓪𝓷𝓭𝓮𝓼 𝓹𝓻𝓲𝓷𝓬𝓲𝓹𝓪𝓵𝓮𝓼 👨‍💻 ", "`ping` `say` `emoji` `emoji-list`")
      .addField("𝓒𝓸𝓶𝓶𝓪𝓷𝓭𝓮𝓼 𝓶𝓸𝓭𝓸𝓼 😎 ", "`clear` `avert`")
      .addField("𝓒𝓸𝓶𝓶𝓪𝓷𝓭𝓮𝓼 𝓭𝓻ô𝓵𝓮𝓼 🤣 ", "`omg` `vodka` `love` `fuck` `bim-bam-boum` `mdr` `tg`")
      .addField("𝓒𝓸𝓶𝓶𝓪𝓷𝓭𝓮𝓼 𝒓é𝒔𝒆𝒂𝒖𝒙 📲 ", "`youtube ou ytb` `twitch` `insta` `snap` `discord` `epic` `steam` `codecrea` ")
      message.channel.send({
          embed: help_embed
      })
  }

  if(message.content.startsWith(prefix + "clear")) {
    let bb = message.content.slice(7)
                    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("⚠️ pas la permissions !!");
                    
                    if (!bb[0]) { return message.channel.send("défini les messages à supprimer !!!")}
                message.delete()
                message.channel.bulkDelete(bb[0]).then(() => {
                    message.channel.send(`${bb[0]} messages ont été supprimés !`)
       })
     }
});

client.on('message' , function (message) {
if(message.content.startsWith(prefix + "say")) {
  message.delete();
   let aa = message.content.slice(5)
        if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("⚠️ pas la permissions !!");
        
        message.channel.send(aa);
     }    
});

client.on('ready' , () => {
  console.log("+help pour les commandes")
   client.user.setActivity('+help: by Ruskof' , {type : "STREAMING"})
});

client.login(process.env.TOKEN);  
