<template>
  <div class="app">
    <div class="content">
      <notifications :duration="5000" />
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/header/index.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex-grow: 1;
}
</style>
