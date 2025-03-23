import routes from "./routes.js";
import Router from "./Router.js";

function main() {
  const router = new Router(routes);
  router.navigate("/");
}

main();
