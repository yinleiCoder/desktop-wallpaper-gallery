import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@renderer/views/HomeView.vue'
import SettingView from '@renderer/views/SettingView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:any(.*)*', // product mode
      // path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/setting',
      name: 'setting',
      component: SettingView
    }
  ]
})

export default router
