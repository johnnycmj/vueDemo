/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Router from 'vue-router';

import Routes from './router';

Vue.use(Router);

export default new Router({
  hashbang: false,
  history: true,
  routes: Routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    };
  },
});


// scrollBehaviorzr作用是后退时回到之前的滚动的位置的
