module.exports = (client) => {
  console.log(
    `Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`
  );

  const activities = [`Giveaways in ${client.guilds.cache.size} guilds`,">help", `over ${client.users.cache.size} users!`, `Created by Skaryey#0638`];
  setInterval(() => {
    let status = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], { type: "PLAYING" })
  }, 3000)

};
