/**
 *路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './roures'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes
})
