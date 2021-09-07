const { ownerID } = require('../../owner.json') 

module.exports = {
    config: {
      name: "spam",
      description: "Spam a message in chat",
      aliases: ['pm']
    },
    run: async (bot, message, args) => {
        
        if(message.member.ID = 503449693448044555) return;
              if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Sufficient Permissions!- [MANAGE_MESSAGES]")
        if (isNaN(args[0]))
            return message.channel.send('**Please say the message you want to spam in the command: e.g. ~spam [message]**');

      let user =
        message.mentions.message.first() ||
        message.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          'spam'
        );

    },
  };