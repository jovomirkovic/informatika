const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "addDaughter", component: () => import("pages/addDaughter.vue") },
      { path: "addSon", component: () => import("pages/addSon.vue") },
      { path: "myChildren", component: () => import("pages/myChildren.vue") },
      {
        path: "childInformation",
        component: () => import("pages/childInformation.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
