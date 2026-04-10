const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "rUgRRC7a#qgrR8nnvqViy2Vl5btJ7mllURCMCvOa1375Mw1RoX4E",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/l06cb8.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO IM 𝐙𝐎𝐑𝐀-𝐌𝐃 CREATED BY 𝐒𝐄𝐍𝐔𝐊𝐀 𝐃𝐈𝐋𝐒𝐀𝐑𝐀 <NOW ALIVE> "
};
 HASHAN <NOW ALIVE> "
};
