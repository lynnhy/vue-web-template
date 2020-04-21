import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const requireContext = require.context(
  './',
  true,
  /\.js$/
)
requireContext.keys().forEach(fileName => {
  if (fileName !== './index.js') {
    const routeFile = requireContext(fileName)
    // eslint-disable-next-line no-const-assign
    routes = [...routes, ...(routeFile.default || routeFile)]
  }
})

const router = new VueRouter({
  routes
})
router.addRoutes([
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404')
  }
])
export default router
