import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is running....");

    // root route
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Hello from node js with typescript...",
          path: req.url,
        })
      );
    }

    // health route
    if (req.url === "/api" && req.method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Health status ok",
          path: req.url,
        })
      );
    }

    //
    if (req.url === "/api/users" && req.method === "POST") {
      //   const user = {
      //     id: 1,
      //     name: "alice",
      //   };
      //   res.writeHead(200, { "content-type": "application/json" });
      //   res.end(JSON.stringify(user));

      let body = "";

      // listen for data chunk
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        try {
          const parseBody = JSON.parse(body);
          console.log(parseBody);
          console.log('catching current change');
          res.end(JSON.stringify(parseBody));
        } catch (err: any) {
          console.log(err.message);
        }
      });
    }
  }
);

server.listen(config.port, () => {
  console.log(`server is running on port : ${config.port}`);
});
