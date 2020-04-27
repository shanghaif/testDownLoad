import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import DocIndex from '@/views/doc/Index'
import ElementIndex from '@/views/element/Index'
import SystemIndex from '@/views/system/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'doc',
          name: 'doc',
          component: DocIndex,
        },
        {
          path: 'element',
          name: 'element',
          component: ElementIndex,
        },
        {
          path: 'system',
          name: 'system',
          component: SystemIndex,
        },
      ]
    }
  ]
})
