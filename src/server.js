throw new Error("BOOT_TOP");
import loginRoute from "./routes/auth/login.js";
import Fastify from "fastify";

console.log("BOOT_FRESH");

const app = Fastify();

app.get("/", async () => "RUNNING_FROM_THIS_FILE");

app.get("/__health", async () => ({ status: "ok" }));
app.get("/api/test", async () => "API_OK");

app.get("/api/test", async () => "API_OK");

await app.register(loginRoute, { prefix: "/api" });
await app.listen({ port: process.env.PORT || 4000, host: "0.0.0.0" });
