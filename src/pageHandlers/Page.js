export default class Page {
  innerHTML = "";
  router;

  constructor(router) {
    if (Page.instance) {
      return Page.instance;
    }
    Page.instance = this;
    this.router = router;
  }

  addEventListener(callback) {
    window.addEventListener("click", (e) => {
      if (e.target.closest("BUTTON")) {
        callback(e, e.target.closest("BUTTON"));
      }
    });
  }
}
