import Vue from "vue";
import VueCookies from "vue-cookies";
import { createRouter, createWebHistory } from "vue-router";
import ListTodo from "../views/home";
import Auth from "../views/auth";

const isLoggedIn = (to, from, next) => {
  if (!VueCookies.get("accessToken")) {
    return router.push({ name: "authentication" });
  }
  return next();
};

const isNotLoggedIn = (to, from, next) => {
  if (VueCookies.get("accessToken")) {
    return router.push({ name: "home" });
  }
  return next();
};

const routes = [
  {
    path: "/",
    name: "home",
    component: ListTodo,
    beforeEnter: isLoggedIn,
  },
  {
    path: "/authentication",
    name: "authentication",
    component: Auth,
    beforeEnter: isNotLoggedIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

export default router;