/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vue from "vue";
import MainApp from "./components/MainApp.vue";
import StoreData from './store';
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

import {
    routes
} from "./routes";

Vue.use(VueRouter);
Vue.use(Vuex);


const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    routes,
    mode: "history"
});

// router.beforeEach((to, from, next) => {
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//     const currentUser = store.state.currentUser;
//     if (requiresAuth && !currentUser) {
//         next('/login');
//     } else if (to.path == '/login' && currentUser) {
//         next('/');
//     } else {
//         next();
//     }
// })

const app = new Vue({
    el: "#app",
    router,
    store,
    components: {
        MainApp,
        Home,
        Header

    }
});
