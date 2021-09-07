module.exports = {
    config: {
          name: "invite",
          description: "Invite the bot to your server!",
          aliases: ['inv']
    },
  run: async (bot, message, args) => {
  
 if (isNaN(args[0])) return message.channel.send(`My invite is: https://discord.com/api/oauth2/authorize?client_id=741438917651464284&permissions=8&scope=bot`);
      
  },
};