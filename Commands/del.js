const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "del",

  /**
   *
   * @param {Client} client The Discord.Client instance
   * @param {Message} message The Discord.Message instance
   * @param {string[]} args The command arguments
   */
  execute(client, message, args) {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) {
      let error_embed = new MessageEmbed()
        .setTitle("Erreur dans les permissions")
        .setDescription(
          "Vous n'avez pas la permission de gérer les salons. Par conséquent, vous ne pouvez pas utiliser cette commande."
        )
        .setColor("#ff0000")
        .setThumbnail(
          "https://imgr.search.brave.com/G8Oyr1y1EsBGe8sOIoBppmJts2nlzChPtzgGpdGwe6Q/fit/800/800/ce/1/aHR0cDovL3d3dy5j/bGlwYXJ0YmVzdC5j/b20vY2xpcGFydHMv/OWl6L0VrZS85aXpF/a2VhRVQucG5n"
        )
        .setFooter("Bot créé par SKKYZ3R#1304")
        .setTimestamp(new Date());

      message.channel.send({
        embeds: [error_embed],
      });
    } else if (args.length < 1) {
      let error_embed = new MessageEmbed()
        .setTitle("Erreur dans l'exécution de la commande.")
        .setDescription(
          "Vous avez oublié de spécifier le nom du salon à supprimer."
        )
        .setColor("#ff0000")
        .setThumbnail(
          "https://imgr.search.brave.com/G8Oyr1y1EsBGe8sOIoBppmJts2nlzChPtzgGpdGwe6Q/fit/800/800/ce/1/aHR0cDovL3d3dy5j/bGlwYXJ0YmVzdC5j/b20vY2xpcGFydHMv/OWl6L0VrZS85aXpF/a2VhRVQucG5n"
        )
        .setFooter("Bot créé par SKKYZ3R#1304")
        .setTimestamp(new Date());

      return message.channel.send({
        embeds: [error_embed],
      });
    } else {
      let name = args[0];

      message.guild.channels.cache.forEach((channel) => {
        if (channel.type === "GUILD_TEXT") {
          if (channel.name === name) {
            if (channel.deletable) {
              channel.delete();
            } else {
              let error_embed = new MessageEmbed()
                .setTitle("Erreur dans les permissions.")
                .setDescription(
                  `Je n'ai pas la permission de gérer les salons. Par conséquent, je ne peux pas supprimer le salon <#${channel.id}>.`
                )
                .setColor("#ff0000")
                .setThumbnail(
                  "https://imgr.search.brave.com/G8Oyr1y1EsBGe8sOIoBppmJts2nlzChPtzgGpdGwe6Q/fit/800/800/ce/1/aHR0cDovL3d3dy5j/bGlwYXJ0YmVzdC5j/b20vY2xpcGFydHMv/OWl6L0VrZS85aXpF/a2VhRVQucG5n"
                )
                .setFooter("Bot créé par SKKYZ3R#1304")
                .setTimestamp(new Date());

              return message.channel.send({
                embeds: [error_embed],
              });
            }
          }
        }
      });
    }
  },
};
