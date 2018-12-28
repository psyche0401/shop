import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Customer from '@/pages/customer-management/customer'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[

        {path:'/name',
        name:'c',
      component:Customer}
      ]
    },
  ]
})
