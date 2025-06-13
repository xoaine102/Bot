const { createClient } = require("bedrock-protocol");

const client = createClient({
  host: "severoppen.aternos.me",
  port: 24970,
  username: "Bot.oppen.24/7-help"
});

client.on("player_join", (packet) => {
  const username = packet.username;
  client.queue("text", {
    type: "chat",
    needs_translation: false,
    source_name: "",
    xuid: "",
    platform_chat_id: "",
    message: `CHÀO MỪNG ${username} ĐÃ VÀO SEVER`
  });
});

client.on("spawn", () => console.log("✅ Bot ready!"));
