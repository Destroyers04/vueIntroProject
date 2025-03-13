import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
console.log("HomeView:", HomeView);

import JobsView from "@/views/JobsView.vue";
console.log("JobsView:", JobsView);
const baseUrl = process.env.BASE_URL || "/";
console.log("Using BASE_URL:", baseUrl);

import NotFoundView from "@/views/NotFoundView.vue";

import JobView from "@/views/JobView.vue";

import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
const router = createRouter({
  history: createWebHistory(baseUrl),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: AddJobView,
    },
    {
      path: "/jobs/edit/:id",
      name: "edit-job",
      component: EditJobView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});
export default router;
