export default [
  {
    path: '/',
    component: '../layouts/LoadingLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/resources',
          },
          // {
          //   name: '优选资源',
          //   icon: 'like',
          //   path: '/recommend',
          //   component: './Recommend',
          // },
          {
            name: '资源大全',
            path: '/resources',
            component: './Resources',
            authority: ['user', 'admin'],
          },
          {
            name: '资源专栏',
            path: '/resources/:category',
            component: './Resources',
            authority: ['user', 'admin'],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
