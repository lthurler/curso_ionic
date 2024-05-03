import { createRouter, createWebHistory } from '@ionic/vue-router';
import ListaIon from '../pages/Lista-ion.vue';


const routes = [
  {
    path: '/',
    redirect: '/home'
  },  
  {
    path: '/home',
    name: 'Home',
    component: ListaIon
  },
  {
    path: '/contato/:id',
    name: 'contato',
    component: () => import('../pages/InformacoesContato.vue')
  },
  {
    path: '/addcontato',
    name: 'addcontato',
    component: () => import('../pages/AdicionarContato.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
