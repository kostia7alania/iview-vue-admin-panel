import Vue from 'vue'
import VueRouter from 'vue-router'

import iView from 'iview';
import Util from '../libs/util';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        meta: {
            title: 'index'
        },
        component: res => require(['../views/index.vue'], res)
    },
    {
        path: '/register',
        meta: {
            title: 'Register'
        },
        component: res => require(['../views/register.vue'], res)
    },
    {
        path: '/home',
        meta: {
            title: 'Home'
        },
        component: res => require(['../views/home.vue'], res)
    },
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
});


router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;