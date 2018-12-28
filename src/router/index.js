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
      children: [
        {
          path: 'test',
          name: '测试',
          icon: 'ios-navigate',
          children: [
            {
              path: 'xxx', name: 'xxx'
            }
          ]
        },
        {
          path: 'tl',
          name: 'tl',
          icon: 'ios-keypad'
        },
        {
          path: 'xxxx',
          name: 'xxxx',
          icon: 'ios-analytics'
        },
        {
          path: '/name',
          name: 'c',
          component: Customer
        }
      ]
    },
  ]
})
