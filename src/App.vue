<template>
  <div class="app">
  <ApartmentsFilterForm @submit="logger"/>
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
import ApartmentsFilterForm from './components/apartment/ApartmentsFilterForm.vue';
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
import CustomInput from './components/shared/CustomInput.vue';
import CustomSelect from './components/shared/CustomSelect.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    CustomInput,
    CustomSelect,
    ApartmentsFilterForm
},
  data() {
    return {
      text: '',
      name: '',
      apartments,
    };
  },
  computed: {},
  methods: {
    logger(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
