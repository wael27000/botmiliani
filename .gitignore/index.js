const Discord = require('discord.js');
const Client = new Discord.Client();
const prefix = "m!"

Client.login('NTU2NTc3NTc0MTg5MjY5MDE2.D3Vdyg.lnyE1_jDAQrIrGvZCxZA0so2nZc');
Client.on("ready", () =>{
    console.log("je suis prêt")
    Client.user.setGame("etre dévelloppé")});

//Comandes de bases
Client.on('message', message =>{
    if(message.content === "infobot"){
        message.channel.sendMessage('mon créateur est Mr Miliani. Il m a créé tout seul. Je suis sont seul bot. ');
        console.log('infobot');
    }
});
Client.on('message', message =>{
    if(message.content === "Slt"){
        message.channel.sendMessage('salut a toi');
    }
    if(message.content === "slt"){
        message.channel.sendMessage('salut a toi');
        console.log('repond a slt');
    }
});
//Comandes Fortnite
Client.on('message', message =>{
    if(message.content === "qui bf"){
        message.vhannel.sendMessage('je pe demander pour toi si tu veux. Tu as juste a marquer **demande qui bf**');
        console.log('repond a qui bf');
    }
});

Client.on('message', message =>{
    if(message.content === "demande qui bf"){
        message.channel.sendMessage('ok @here qui bf');
        console.log('repond a demande qui bf');
    }
});
Client.on('message', message => {
        if (message.content === 'qui duo') {
        message.channel.sendMessage('si tu veux je peux demander pour toi. Tu as juste a marquer **demande qui duo**');
        console.log('qui duo');
    }
});
Client.on('message', message => {        
    if (message.content === 'demande qui duo') {
        message.channel.sendMessage('ok @here qui duo');
        console.log('repond a demande qui duo');
    }
});
//Comandes fun
//Autre
Client.on('message', message => {
    if (message.content === 'ping') {
    message.channel.sendMessage('pong');
    }
});
Client.on('message', message =>{
    if(message.content === "rigolez"){
        message.channel.sendMessage('HAHAHAHA');
        console.log('repond a rgolez');
    }
});



