const { Client, Message } = require("discord.js");

const prefix = "?";

/**
 *
 * @param {Client} client
 * @param {Message} message
 */

module.exports = (client, message) => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  let commande = client.commands.get(command);

  if (!commande) {
    return;
  } else {
    commande.execute(client, message, args);
  }
};
