const { Client, Collection, Intents } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

client.commands = new Collection();

const commands = fs.readdirSync("./Commands").filter((f) => f.endsWith(".js"));

for (let f of commands) {
  let files = require(`./Commands/${f}`);

  client.commands.set(files.name, files);

  console.log(`Commande ${f.replace(".js", "")} chargée`);
}

fs.readdir("./Events/", (error, f) => {
  if (error) throw error;

  f.forEach((f) => {
    const events = require(`./Events/${f}`);
    const event = f.split(".")[0];

    client.on(event, events.bind(null, client));

    console.log(`Event ${f.replace(".js", "")} chargé !`);
  });
});

fs.readFile("./token", "utf-8", (err, data) => {
    if(err) {
        throw err;
    } else {
        client.login(data);
    }
})
