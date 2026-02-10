import Fastify from "fastify";

const app = Fastify();

app.get("/", async () => {
  return "AXIOM_BACKEND_OK";
});

await app.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" });

console.log("SERVER_STARTED");
