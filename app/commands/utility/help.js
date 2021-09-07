const { ownerID } = require('../../owner.json') 

module.exports = {
    config: {
      name: "help",
      description: "Helps you lol.",
      aliases: ['hlp']
    },
    run: async (bot, message, args) => {
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") && !ownerID.includes(message.author.id)) return;


      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          "Moderation: ban, deafen, disablemodlogchannel, disablemuterole, dm, hackban/forceban, invite, kick, lock, lockdown --Be careful with this one, mute, reloadmod, roleadd, setmodlogchannel, setmuterole, setnick, setxp, slowmode, svr, unban, undeafen, unlock, unmute, voicemove, warn. Utility: prefix, help."
        );
        return message.channel.send(
         (`Moderation: ban, deafen, disablemodlogchannel, disablemuterole, dm, hackban/forceban, invite, kick, lock, lockdown --Be careful with this one, mute, reloadmod, roleadd, setmodlogchannel, setmuterole, setnick, setxp, slowmode, svr, unban, undeafen, unlock, unmute, voicemove, warn. Utility: prefix, help.`)
          );
    },
  };