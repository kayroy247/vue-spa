import MainApp from './components/MainApp.vue';
import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';


export const routes = [{
        path: '/',
        component: Home,
        // meta: {
        //     requiresAuth: false
        // }
    },
    {
        path: '/login',
        component: Login
    }
]
