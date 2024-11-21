Hooks.once("init", async function() {
    await ChatMessage.create({content: "hello", user: "STrVxwVEHXp9QCoA"});
});