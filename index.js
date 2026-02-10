import Fastify from "fastify";

const app = Fastify();

app.get("/", async () => "AXIOM_BACKEND_ALIVE");

await app.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" });
