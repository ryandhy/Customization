import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export let store = new Vuex.Store({
    state: {
        arr: [],
        arrall: [],
        arrpants: [],
        arrsuit: [],
        arrjacket: [],
        arrinfo: [],
        arrshare: [],
        arrset: []
    },
    mutations: {
        axiosmut(state) {
            axios({
                url: "/api/me1",
                method: "get"
            }).then((ok) => {
                state.arr = ok.data.me1;
            });
        },
        axiosmutall(state) {
            axios({
                url: "/api/all",
                method: "get"
            }).then((ok) => {
                state.arrall = ok.data.all;
            });
        },
        axiosmutpants(state) {
            axios({
                url: "/api/pants",
                method: "get"
            }).then((ok) => {
                state.arrpants = ok.data.pants;
            });
        },
        axiosmutsuit(state) {
            axios({
                url: "/api/suit",
                method: "get"
            }).then((ok) => {
                state.arrsuit = ok.data.suit;
            });
        },
        axiosmutjacket(state) {
            axios({
                url: "/api/jacket",
                method: "get"
            }).then((ok) => {
                state.arrjacket = ok.data.jacket;
            });
        },
        axiosmutinfo(state) {
            axios({
                url: "/api/info",
                method: "get"
            }).then((ok) => {
                state.arrinfo = ok.data.info;
            });
        },
        axiosmutshare(state) {
            axios({
                url: "/api/share",
                method: "get"
            }).then((ok) => {
                state.arrshare = ok.data.share;
            });
        },
        axiosmutset(state) {
            axios({
                url: "/api/set",
                method: "get"
            }).then((ok) => {
                state.arrset = ok.data.set;
            });
        }
    },
    actions: {
        axiosact(context) {
            context.commit("axiosmut");
        },
        axiosactall(context) {
            context.commit("axiosmutall");
        },
        axiosactpants(context) {
            context.commit("axiosmutpants");
        },
        axiosactsuit(context) {
            context.commit("axiosmutsuit");
        },
        axiosactjacket(context) {
            context.commit("axiosmutjacket");
        },
        axiosactinfo(context) {
            context.commit("axiosmutinfo");
        },
        axiosactshare(context) {
            context.commit("axiosmutshare");
        },
        axiosactset(context) {
            context.commit("axiosmutset");
        }
    }
});