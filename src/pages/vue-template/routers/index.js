export default [
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "home" */ "../pages/404/index.vue")
  },
  {
    path: "/",
    name: "Home",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "home" */ "../pages/home/index.vue")
  }
];
