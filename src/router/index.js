import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Index = () => import("@/views/index.vue");
const Custom = () => import("@/views/custom.vue");
const Goods = () => import("@/views/goods.vue");
const Me = () => import("@/views/me.vue");
const Me1 = () => import("@/views/me1.vue");
const Info = () => import("@/views/info.vue");
const Settings = () => import("@/views/settings.vue");
const Cart = () => import("@/views/cart.vue");
const Search = () => import("@/views/search.vue");

export default new Router({
    routes: [ //
        {
            name: "index",
            path: "/index",
            component: Index
        },
        {
            name: "custom",
            path: "/custom",
            component: Custom
        },
        {
            name: "goods",
            path: "/goods",
            component: Goods
        },
        {
            name: "me",
            path: "/me",
            component: Me
        },
        {
            name: "me1",
            path: "/me1",
            component: Me1
        },
        {
            name: "info",
            path: "/info",
            component: Info
        },
        {
            name: "settings",
            path: "/settings",
            component: Settings
        },
        {
            name: "cart",
            path: "/cart",
            component: Cart
        },
        {
            name: "search",
            path: "/search",
            component: Search
        },
        {
            path: "/*",
            redirect: "/index"
        }
    ]
});