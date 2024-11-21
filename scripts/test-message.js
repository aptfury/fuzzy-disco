export function startMessage() {
    const data = [
        {
            flavor: "A Test Message",
            content: "This is a message to chat for once the software is ready."
        }
    ];
    Hooks.on("ready", function() {
        BaseChatMessage.create(data);
    });
}