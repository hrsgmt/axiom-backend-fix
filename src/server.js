console.log("BUILD_VERSION_95e4044");
console.log("SERVER_START");
console.log("BOOT_START");
import Fastify from "fastify";

const app = Fastify();

app.get("/", () => "AXIOM_V2_PIPELINE_TEST_999");
});

console.log("ABOUT_TO_LISTEN");
await app.listen({ port: process.env.PORT || 4000, host: "0.0.0.0" });

app.get("/__health", async () => {
  return { status: "ok", version: "v2" };
});

