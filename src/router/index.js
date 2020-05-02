import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import Project from '../views/Project.vue'
import Team from '../views/Team.vue'
//import Settings from '@/components/Settings'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/settings',
    name: 'Settings',
    // component: Settings,
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
