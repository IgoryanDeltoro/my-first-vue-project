<template>
  <div class="app">
    <div class="content">
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

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
  padding-top: 120px;
  padding-bottom: 100px;
}
</style>
