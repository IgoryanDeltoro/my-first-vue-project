<template>
  <div class="app">
    <ApartmentsList :apartments="apartments" />
  </div>
</template>

<script>
import apartments from './components/apartment/apartments';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
export default {
  name: 'App',
  components: {
    ApartmentsList,
  },
  data() {
    return {
      apartments,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
