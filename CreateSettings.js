const fs = require("fs");

module.exports = function createsettings() {
    var settings = {
        token: "",
        prefix: "%",
        host: "cosmicpvp.com",
        version: "1.8.9",
        hub_command: "/server spiritplanet",
        anti_afk_command: "/lag",
        Chat_anti_AFK: true,
        Chat_anti_AFK_delay: 300,
        Already_logged_in_msg: "§l[CosmicProxy]§r\n     §7You seem to be logged in already.\n",
        LoginDelay: 60 
    }
    
    
    const data = JSON.stringify(settings, null, 2);
    fs.writeFileSync("./settings.json", data, "utf-8", (err) => {
        if (err) {
            console.log(`Error Creating Settings File: ${err}`)
        }
    })
};