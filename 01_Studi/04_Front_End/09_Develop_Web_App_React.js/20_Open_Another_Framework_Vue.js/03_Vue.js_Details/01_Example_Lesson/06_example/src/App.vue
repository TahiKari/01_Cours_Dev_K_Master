<template>
  <navbar-component />
  <landing-page />
  <counter-component />
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import LandingPage from "./components/LandingPage.vue";
import CounterComponent from "./components/CounterComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    LandingPage,
    CounterComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
