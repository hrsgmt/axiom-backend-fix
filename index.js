console.log("STEP_1_INDEX_START");
import http from "http";

const server = http.createServer((req, res) => {
  res.end("AXIOM_BACKEND_ALIVE");
});

server.listen(process.env.PORT || 3000, "0.0.0.0");
