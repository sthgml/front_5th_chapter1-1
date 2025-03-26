import Router from "./Router.js";

export default class HashRouter extends Router {
  constructor(routes, loginStore) {
    super(routes, loginStore);
    // this.currentPath = window.location.hash.slice(1) || "/";
    // this.startDetectForHash();
  }

  // override
  startDetectForHash() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash.slice(1) || "/";
      this.render();
    });
  }
}
