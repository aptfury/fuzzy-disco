function startMessage(msg) {
    return ChatMessage.create({content: msg});
};

export { startMessage };