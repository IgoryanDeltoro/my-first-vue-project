<template>
  <div class="app">
    <ApartmentsFilterForm @submit="filter" />
    <p class="inform" v-if="!filteredApartments.length">Apartments not found</p>
    <ApartmentsList
      v-else="filteredApartments.length"
      :items="filteredApartments"
    >
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
    ApartmentsFilterForm,
  },
  data() {
    return {
      apartments,
      filters: {
        city: '',
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },

  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      return apartments.filter(apartment => {
        if (!this.filters.city) return apartments;

        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      return apartments.filter(apartment => {
        if (!this.filters.price) return apartments;

        return apartment.price >= this.filters.price;
      });
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
.inform {
  color: red;
  text-align: center;
  font-size: large;
}
</style>
