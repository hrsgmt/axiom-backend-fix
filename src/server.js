console.log("SERVER_FILE_LOADED_V2");
console.log("BOOT_START");

import Fastify from "fastify";

const app = Fastify();

app.get("/", async () => "AXIOM_BACKEND_ALIVE");

app.get("/__health", async () => {
  return { status: "ok", version: "v2" };
});

console.log("ABOUT_TO_LISTEN");
await app.listen({ port: process.env.PORT || 4000, host: "0.0.0.0" });
