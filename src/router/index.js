import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Secret from "../views/Secret.vue";
import Register from "../views/Register.vue";
import AccessDenied from "../views/AccessDenied.vue";

Vue.use(VueRouter);

function authGuard(to, from, next) {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/access-denied";
    return;
  }
  return next();
}

const routes = [
  {
    path: "/",
    name: "Login",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/secret",
    name: "Secret",
    component: Secret,
    beforeEnter: authGuard
  },
  {
    path: "/access-denied",
    name: "Access Danied",
    component: AccessDenied
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
