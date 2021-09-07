const { ownerID } = require('../../owner.json') 

module.exports = {
    config: {
      name: "gofrickyourself",
      description: "Tells a user to frick themself.",
      aliases: ['gfy']
    },
    run: async (bot, message, args) => {
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") && !ownerID.includes(message.author.id)) return;


      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          "You did not mention a user, or you gave an invalid id"
        );
let userIo = user.ID
        return message.channel.send(
         (`GO FRICK YOURSELF MAN!!`)
          );
    },
  };