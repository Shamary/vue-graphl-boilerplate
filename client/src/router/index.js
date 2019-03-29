// IMPORTS
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Menu from '../components/Menu'

Vue.use(Router)

// ROUTES
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    meta: {
      title: 'Menu'
    }
  }
]
// EXPORT ROUTER
export default new Router({
  mode: 'history',
  routes
})
