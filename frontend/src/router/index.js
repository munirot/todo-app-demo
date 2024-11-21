import { createRouter, createWebHistory } from 'vue-router'
import ListTodo from '../views/home'
import Auth from "../views/auth";

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListTodo
  },
  {
    path: "/authentication",
    name: "authentication",
    component: Auth,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes
})

export default router
