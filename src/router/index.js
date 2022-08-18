import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/:pathMatch(.*)', component: () => import('@/views/NotFound/NotFound.vue') },
  { path: '/home', component: () => import('@/views/Home/Home.vue') },
  { path: '/favor', component: () => import('@/views/Favor/Favor.vue') },
  { path: '/order', component: () => import('@/views/Order/Order.vue') },
  { path: '/message', component: () => import('@/views/Message/Message.vue') },
  { path: '/city', component: () => import('@/views/City/City.vue'), 
  // meta: { hideTabBar: true } 
  },
  { path: '/search', component: () => import('@/views/Search/Search.vue') },
  { path: '/detail/:id', component: () => import('@/views/Detail/Detail.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path -> component
  routes
})

export default router
