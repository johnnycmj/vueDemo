/* eslint-disable global-require,import/no-dynamic-require */
import main from '../components/main';

export default [
  {
    path: '/',
    component: main,
    children: [
      {
        path: '/',
        redirect: '/example',
      },
      {
        path: 'home',
        component: main,
        children: [
          {
            path: '/',
            meta: {
              title: '首页',
            },
            component: resolve => require(['../view/example/index'], resolve),
          },
        ],
      },
      {
        path: 'example',
        component: main,
        children: [
          {
            path: '/',
            meta: {
              title: 'Example',
            },
            component: resolve => require(['../view/example/main'], resolve),
          },
          {
            path: 'index',
            meta: {
              title: '模板语法',
            },
            component: resolve => require(['../view/example/index'], resolve),
          },
          {
            path: 'list',
            meta: {
              title: '列表渲染',
            },
            component: resolve => require(['../view/example/list'], resolve),
          },
          {
            path: 'calculate',
            meta: {
              title: '计算属性',
            },
            component: resolve => require(['../view/example/calculate'], resolve),
          },
          {
            path: 'rendering',
            meta: {
              title: '条件渲染',
            },
            component: resolve => require(['../view/example/rendering'], resolve),
          },
          {
            path: 'class',
            meta: {
              title: 'class与style绑定',
            },
            component: resolve => require(['../view/example/styleclass'], resolve),
          },
          {
            path: 'email',
            meta: {
              title: '方法demo',
            },
            component: resolve => require(['../view/example/email'], resolve),
          },
          {
            path: 'countdown',
            meta: {
              title: '短信倒计时组件',
            },
            component: resolve => require(['../view/example/countDownView'], resolve),
          },
          {
            path: 'spinner',
            meta: {
              title: 'spinner组件',
            },
            component: resolve => require(['../view/example/spinnerView'], resolve),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    meta: {
      title: '页面不存在',
    },
    component: resolve => require(['../view/other/error'], resolve),
  },
];


/**
  说明：
  1、redirect ：请求重定向.

 * */
