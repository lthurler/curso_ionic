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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
