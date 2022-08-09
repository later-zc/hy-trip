import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/views/Home/Home.vue') },
  { path: '/favor', component: () => import('@/views/Favor/Favor.vue') },
  { path: '/order', component: () => import('@/views/Order/Order.vue') },
  { path: '/message', component: () => import('@/views/Message/Message.vue') },
  { path: '/city', component: () => import('@/views/City/City.vue'), 
  // meta: { hideTabBar: true } 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path -> component
  routes
})

export default router
