import Vue from 'vue'
import VueRouter from 'vue-router'
import Pesquisa from '../views/Pesquisa.vue'
import DetalheProjeto from '../views/DetalheProjeto.vue'
import Favoritos from '../views/Favoritos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pesquisa',
    component: Pesquisa
  },
  {
    path: '/detail/:nome/:projeto',
    name: 'detail',
    component: DetalheProjeto
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: Favoritos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
