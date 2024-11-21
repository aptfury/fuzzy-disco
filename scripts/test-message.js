Hooks.once("init", function() {
    ChatMessage.create({content: "hello", author: Users.current});
});