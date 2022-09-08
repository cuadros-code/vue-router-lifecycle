import { createRouter, createWebHashHistory } from 'vue-router'
import ListPage from '@/modules/pokemon/pages/ListPage'
import AboutPage from '@/modules/pokemon/pages/AboutPage'
import PokemonPage from '@/modules/pokemon/pages/PokemonPage'
import NotFound from '@/modules/shared/pages/NotFound'

const routes = [
  { path: '/', component: ListPage },
  { path: '/about', component: AboutPage },
  { path: '/id', component: PokemonPage },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})