import { UserLayout, TabLayout, RouteView, BlankLayout, PageView, BasicLayout } from '@/components/layouts'
// import { ParameterList } from '@/views/application/parameter'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'thirdLogin',
        name: 'thirdLogin',
        component: () => import('@/views/user/ThirdLogin')
      }
    ]
  },
  {
    path: '/ems',
    component: () => import('@/components/layouts/Postlogin'),
    redirect: '/ems/emsLogin',
    hidden: true,
    children: [
      {
        path: 'emsLogin',
        name: 'emsLogin',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/403',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403')
  },

  {
    path: '/404',
    component: () => import('@/views/exception/404')
  },

  {
    path: '/500',
    component: () => import('@/views/exception/500')
  },

  {
    path: '/doc',
    component: () => import('@/views/doc/Index'),
  },
  {
    path: '/doc/:id',
    component: () => import('@/views/doc/Index'),
  },

  {
    path: '/developed',
    component: () => import('@/views/developed/DevelopedPage')
  },

  // 头部上级菜单
  {
    path: '/component/layout/',
    component: TabLayout,
    children: [
      // 个人中心
      {
        path: '/userInfo',
        component: () => import('@/views/application/system/setting/account/Info')
      },
      {
        path: '/noticeLog',
        component: () => import('@/views/doc/modules/NoticeLog')
      }
    ]
  },

  // 头部上级菜单
  {
    path: '/firm/projectHome',
    component: () => import('@/views/application/firm/project/home/Index')
  },


  // 车塔Onlines
  {
    path: '/onlines/',
    component: resolve => require(['@/views/application/onlines/Index'], resolve),
    children: [
      // 文档
      {
        path: 'doc',
        component: resolve => require(['@/views/application/onlines/doc/Content'], resolve)
      },
      // 设置
      {
        path: 'setting',
        component: resolve => require(['@/views/application/onlines/system/Index'], resolve),
        children: [{
          path: 'menu',
          component: () => import('@/views/application/onlines/system/menu/Index')
        },{
          path: 'page',
          component: resolve => require(['@/views/application/onlines/system/page/SearchLayout'], resolve),
          children: [
            {
              path: '/material',
              component: resolve => require(['@/views/application/onlines/system/page/Material'], resolve),
            },
            {
              path: '/apply',
              component: resolve => require(['@/views/application/onlines/hository/HositoryList'], resolve),
            },
            {
              path: '/dataCenter',
              component: resolve => require(['@/views/application/onlines/dataCenter/DataCenter'], resolve)
            }
          ]
        },{
          path: 'dictionary',
          component: resolve => require(['@/views/application/system/setting/dictionary/Dictionary'], resolve)
        },{
          path: 'log',
          component: resolve => require(['@/views/application/system/setting/platform/index'], resolve)
        },{
          path: 'updateLog',
          component: resolve => require(['@/views/application/system/setting/log/Index'], resolve)
        }]
      },
      {
        path: ':type',
        component: resolve => require(['@/views/application/onlines/List'], resolve)
      },
    {
      path: '/dataCenter',
      component: resolve => require(['@/views/application/onlines/dataCenter/DataCenter'], resolve)
    },
    {
      path: '/flow',
      component: resolve => require(['@/views/application/onlines/flow/Flow'], resolve)
    },
    {
      path: ':type/:projectId',
      component: resolve => require(['@/views/application/onlines/List'], resolve)
    }]
  },
  {
    path: '/preview/:id',
    component: resolve => require(['@/views/application/onlines/Preview'], resolve)
  },
  {
    path: '/main',
    component: BasicLayout,
    children: [{
      path: 'menu/:menuId',
      component: () => import('@/views/application/home/workplace/Index')
    }]
  },
  // 车辆基本信息
  {
    path: '/parameterDetail/:id',
    component: () => import('@/views/application/parameter/parameterDetail')
  },
]
