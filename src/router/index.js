import Vue from 'vue'
import VueRouter from "vue-router";

import AppLayout from "@/layouts/AppLayout";
import Home from "@/views/home/Home.vue";
import About from "@/views/Recruitment.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
    {
        path : '/',
        component : AppLayout,
        children : [
            {
                path : '/',
                component : Home,
            },
            {
                path : '/recruitment',
                component : About,
            },
            {
                path : '*',
                component : NotFound,
            }
        ] 
    }
];

const router = new VueRouter({
    mode : 'history',
    linkActiveClass : 'active',
    routes
})

export default router;