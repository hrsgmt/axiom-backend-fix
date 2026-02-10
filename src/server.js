import Fastify from "fastify";

console.log("BOOT_FRESH");

const app = Fastify();

app.get("/", async () => "AXIOM_BACKEND_ALIVE");

app.get("/__health", async () => ({ status: "ok" }));

app.get("/api/test", async () => "API_OK");

await app.listen({ port: process.env.PORT || 4000, host: "0.0.0.0" });
