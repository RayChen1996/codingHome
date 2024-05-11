// @ts-check
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
import Login from "../components/pages/Login.vue";
import Course from "../components/pages/Course.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/course",
    name: "course",
    component: Course,
  },
];

const router = createRouter({
  history: createWebHashHistory("/codingHome/"),
  routes,
});

export default router;
