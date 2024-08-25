import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PageOneView from '@/views/PageOneView.vue'
import PageTwoView from '@/views/PageTwoView.vue'
import PageThreeView from '@/views/PageThreeView.vue'
import PageFourView from '@/views/PageFourParentView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/1',
      name: 'pageone',
      component: PageOneView
    },
    {
      path: '/2',
      name: 'pagetwo',
      component: PageTwoView
    },
    {
      path: '/3',
      name: 'pagethree',
      component: PageThreeView
    },
    {
      path: '/4',
      name: 'pagefour',
      component: PageFourView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    { 
      path: '/:catchAll(.*)',
      redirect: '/' 
    }
  ]
})

export default router