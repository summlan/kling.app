import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { auth } from '@/firebaseConfig'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/skattjakt', name: 'skattjakt', component: () => import(/* webpackChunkName: "skattjakt" */ '../views/Skattjakt.vue') },
    { path: '/documents', name: 'documents', component: () => import(/* webpackChunkName: "documents" */ '../views/Documents.vue') },
    { path: '/letters', name: 'letters', component: () => import(/* webpackChunkName: "letters" */ '../views/Letters.vue') }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/')
  } else if (requiresAuth && auth.currentUser) {
    next()
  } else {
    next()
  }
})

export default router
