import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import University from '../views/University.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/university/:id',
    name: 'University',
    component: University
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
