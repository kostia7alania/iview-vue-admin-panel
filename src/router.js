const routers = [
    {
        path: '/',
        meta: {
            title: 'index'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/register',
        meta: {
            title: 'Register'
        },
        component: (resolve) => require(['./views/register.vue'], resolve)
    },
    {
        path: '/home',
        meta: {
            title: 'Home'
        },
        component: (resolve) => require(['./views/home.vue'], resolve)
    },
];
export default routers;