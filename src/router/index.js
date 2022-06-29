import Vue from 'vue'
import VueRouter from 'vue-router'
import Pesquisa from '../views/Pesquisa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pesquisa',
    component: Pesquisa
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
