import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import University from '../views/University.vue'
import Course from '../views/Course.vue';

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
  },
  {
    path: '/course/:uni_id/:course_id',
    name: 'Course',
    component: Course
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
