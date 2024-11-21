export function startMessage() {
    Hooks.on("ready", function() {
        ChatMessage.create("This is a message to chat for once the software is ready.");
    });
}