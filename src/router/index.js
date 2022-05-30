import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn'
import Room from '../views/Room'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'signIn'
  },
  {
    path: '/signIn',
    name: 'sign-in',
    component: SignIn,
  },
  {
    path: '/room',
    name: 'room',
    component: Room
  }
]

const router = new VueRouter({
  routes
})

export default router
