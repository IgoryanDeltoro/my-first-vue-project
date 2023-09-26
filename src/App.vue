<template>
  <div class="app">
    <ApartmentsList :items="apartments">
      <template v-slot:title>Selection according to choice</template>
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :description="apartment.descr"
          :price="apartment.price"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :key="apartment.id"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import apartments from './components/apartment/apartments';
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
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
