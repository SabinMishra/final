import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Cart from '../views/Cart.vue'
import Feedback from '../views/Feedback.vue'

Vue.use(VueRouter)

  const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/menu',
    name:'Menu',
    component:Menu
  },
  {
    path:'/cart',
    name:'Cart',
    component:Cart
  },
  {
    path:'/feedback',
    name:'Feedback',
    component:Feedback
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
