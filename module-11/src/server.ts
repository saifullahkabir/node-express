import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import { RouteHandler, routes } from "./helpers/RouteHandler";
import "./routes";

function findDynamicRoute(method: string, url: string) {
  const methodMap = routes.get(method);
  if (!methodMap) return null;

  for (const [routePath, handler] of methodMap.entries()) {
    const routeParts = routePath.split("/");
    const urlParts = url.split("/");

    if (routeParts.length !== urlParts.length) continue;

    const params: any = {};
    let matched = true;

    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i]?.startsWith(":")) {
        params[routeParts[i]?.substring(1)!] = urlParts[i];
      } else if (routeParts[i] !== urlParts[i]) {
        matched = false;
        break;
      }
    }

    if (matched) {
      return { handler, params };
    }
  }
  return null;
}

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method?.toUpperCase() || "";
    const path = req.url || "";

    const methodMap = routes.get(method);
    const handler: RouteHandler | undefined = methodMap?.get(path);

    if (handler) {
      handler(req, res);
    } else if (findDynamicRoute(method, path)) {
      const match = findDynamicRoute(method, path);
      (req as any).params = match?.params;
      match?.handler(req, res);
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: false,
          message: "Route not found!!!",
          path,
        })
      );
    }
  }
);

server.listen(config.port, () => {
  console.log(`server is running on port : ${config.port}`);
});
