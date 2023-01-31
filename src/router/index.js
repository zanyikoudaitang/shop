import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store/index.js";
const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Layout/Pages/login.vue"),
  },
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/Layout/Layout.vue"),
    redirect: "userList",

    children: [
      {
        path: "rolesList",
        name: "rolesList",
        component: () => import("@/views/Layout/Pages/rolesList.vue"),
      },
      {
        path: "userList",
        name: "userList",
        component: () => import("@/views/Layout/Pages/userList.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  // TODO
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
    hidden: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(store.getters.userInfo);
  if (!store.getters.userInfo) {
    if (to.path === "/login") {
      next();
      return;
    }
    next("/login")
  } else {
    next();
  }
});
export default router;
