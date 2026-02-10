console.log("STEP_2_SERVER_FILE");
console.log("SERVER_FILE_LOADED_V2");
console.log("BOOT_START");

import Fastify from "fastify";

const app = Fastify();
console.log("STEP_3_FASTIFY_CREATED");

app.get("/", async () => "AXIOM_BACKEND_ALIVE");

app.get("/__health", async () => {
  return { status: "ok", version: "v2" };
});

console.log("ABOUT_TO_LISTEN");
console.log("STEP_4_ABOUT_TO_LISTEN");
app.get("/__health", async () => ({ status: "ok" }));
await app.listen({ port: process.env.PORT || 4000, host: "0.0.0.0" });
console.log("STEP_5_LISTENED");
