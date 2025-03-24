import routes from "./routes.js";
import Router from "./Router.js";
import LoginStore from "./stores/LoginStore.js";
import Page from "./pageHandlers/Page.js";

function main() {
  console.log("main");
  const loginStore = new LoginStore();
  const router = new Router(routes, loginStore);
  const page = new Page(router);
  page.addEventListener((e, targetButton) => {
    console.log(targetButton.dataset.path);
    router.navigate(targetButton.dataset.path);
  });

  router.init();
}

main();
