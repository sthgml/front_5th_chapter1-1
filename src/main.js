import routes from "./routes.js";
import Router from "./Router.js";
import LoginStore from "./stores/LoginStore.js";

function main() {
  const loginStore = new LoginStore();
  const router = new Router(routes, loginStore);

  // button click 이벤트 감지하기
  window.addEventListener("click", (e) => {
    const targetButton =
      e.target.tagName === "BUTTON" ? e.target : e.target.closest("BUTTON");
    if (targetButton) {
      if (targetButton.dataset.path == null) {
        return;
      }

      if (targetButton.id === "logout") {
        loginStore.setUserInfo(null);
      }

      if (targetButton.id === "login") {
        return;
      }

      router.navigate(targetButton.dataset.path);
    }
  });

  // form 제출 이벤트 감지하기
  window.addEventListener("submit", (e) => {
    console.log("submit");
    if (e.target.id === "login-form") {
      const formElements = e.target.elements;
      loginStore.setUserInfo({
        username: formElements.username.value,
        email: formElements.email.value,
        bio: "",
      });
      router.navigate("/");
    }

    console.log(e.target.id);
    if (e.target.id === "profile-form") {
      const formElements = e.target.elements;
      loginStore.setUserInfo({
        username: formElements.username.value,
        email: formElements.email.value,
        bio: formElements.bio.value,
      });
      router.navigate("");
    }
  });
}

main();
