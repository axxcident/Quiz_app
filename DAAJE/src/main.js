import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";
import QuizPage from "./views/QuizPage.vue";
import ResultsPage from "./views/ResultsPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/quiz", component: QuizPage },
  { path: "/results", component: ResultsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
