<template>
  <v-header />
  <v-main />
  <v-catalog />
  <v-footer />
</template>

<script>
import vHeader from "./components/v-header.vue";
import vMain from "./components/v-main.vue";
import vFooter from "./components/v-footer.vue";
import VCatalog from './components/v-catalog.vue';

export default {
  name: "App",
  components: {
    vHeader,
    vMain,
    vFooter,
    VCatalog,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
