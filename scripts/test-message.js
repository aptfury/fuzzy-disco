Hooks.on("ready", async function() {
    const userId = await game.users.getName("Gamemaster").id;
    ChatMessage.create({content: "hello", user: userId});
});