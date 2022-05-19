import {createRouter, createWebHashHistory} from 'vue-router'


import vMain from "../components/v-main.vue";
import vPerformances from "../components/v-performances.vue";
import vConcerts from "../components/v-concerts.vue";
import vBasket from "../components/v-basket.vue";

const routes = [
  {
    Path: "/",
    name: "main",
    component: vMain,
  },
  {
    Path: "/concerts",
    name: "concerts",
    component: vConcerts,
  },
  {
    Path: "/performances",
    name: "performances",
    component: vPerformances,
  },
  {
    Path: "/basket",
    name: "basket",
    component: vBasket,
    props: true,
  },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;