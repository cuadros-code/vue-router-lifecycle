import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/modules/shared/pages/NotFound'
// import ListPage from '@/modules/pokemon/pages/ListPage'
// import PokemonPage from '@/modules/pokemon/pages/PokemonPage'
// import AboutPage from '@/modules/pokemon/pages/AboutPage'

const routes = [
  { 
    path: '/', 
    component: () => import( /*webpackChunkName: "ListPage"*/ '../modules/pokemon/pages/ListPage')  
  },
  { 
    path: '/about', 
    component: () => import( /*webpackChunkName: "AboutPage"*/ '../modules/pokemon/pages/AboutPage') 
  },
  { 
    path: '/:id', 
    component: () => import( /*webpackChunkName: "PokemonPage"*/ '../modules/pokemon/pages/PokemonPage'),
    props: ( route ) => {
      const id = Number( route.params.id )
      return isNaN( id ) ? { id: 1 } : { id }
    } 
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: NotFound 
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})