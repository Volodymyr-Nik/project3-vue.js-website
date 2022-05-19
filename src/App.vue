<template>
  <div id="app">
    <v-header />
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <v-footer />
  </div>
</template>

<script>
import vHeader from "./components/v-header.vue";
import vFooter from "./components/v-footer.vue";


export default {
  name: "App",
  components: {
    vHeader,
    vFooter,
  },
};
</script>

<style>
#app {
  color: #fff;
}
</style>
