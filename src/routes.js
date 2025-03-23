import MainPage from "./pageHandlers/MainPage.js";
import ProfilePage from "./pageHandlers/ProfilePage.js";
import LoginPage from "./pageHandlers/LoginPage.js";
import ErrorPage from "./pageHandlers/ErrorPage.js";

const routes = {
  "/": MainPage,
  "/profile": ProfilePage,
  "/login": LoginPage,
  "*": ErrorPage,
};

export default routes;
