import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Subs from './views/Subs.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/subs',
      name: 'subs',
      component: Subs,
      // component: () => import('./views/Subs.vue'),
    },
  ],
});
