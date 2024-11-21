Hooks.once("init", async function() {
    await ChatMessage.create({content: "hello", author: "STrVxwVEHXp9QCoA"});
});