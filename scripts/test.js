import { startMessage } from "./test-message";

console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
    console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});

Hooks.on("ready", function() {
    console.log("This code runs once core initialization is ready and game data is available.");
});

// Debugging Hooks
Hooks.once("init", function() {
    CONFIG.debug.hooks = true;
})