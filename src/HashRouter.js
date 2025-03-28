import Router from "./Router.js";

export default class HashRouter extends Router {
  constructor(routes, loginStore, basePath) {
    super(routes, loginStore, basePath);
    this.startDetectForHash();
  }

  // override
  startDetectForHash() {
    window.addEventListener("hashchange", () => {
      if (window.location.href.length >= 1) {
        this.currentPath = window.location.hash.slice(1) || "/";
        console.log("hashchange", this.currentPath);
        this.render();
      }
    });
  }
}
