<template>
  <main class="homepage">
    <SectionWithHeaderFooterSpaces>
      <Container>
        <ApartmentsFilterForm @data="filter" />
      </Container>
      <Loading v-if="loading" />
      <Container v-else="!loading">
        <p class="homepage__inform" v-if="!filteredApartments.length">
          Apartments not found
        </p>
        <ApartmentsList
          v-else="filteredApartments.length"
          :items="filteredApartments"
        >
          <template v-slot:title>
            <MainTitle class="homepage__title"
              >Selection according to choice</MainTitle
            >
          </template>
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :description="apartment.descr"
              :price="apartment.price"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :id="apartment.id"
              :key="apartment.id"
            />
          </template>
        </ApartmentsList>
      </Container>
    </SectionWithHeaderFooterSpaces>
  </main>
</template>
<script>
import ApartmentsFilterForm from '../components/apartment/ApartmentsFilterForm.vue';
import ApartmentsItem from '../components/apartment/ApartmentsItem.vue';
import ApartmentsList from '../components/apartment/ApartmentsList.vue';
import { getApartments } from '../services/apartment.service';
import Container from '../components/shared/Container.vue';
import SectionWithHeaderFooterSpaces from '../components/shared/SectionWithHeader&FooterSpaces.vue';
import MainTitle from '../components/shared/MainTitle.vue';
import Loading from '../components/loaders/Loading.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    Container,
    SectionWithHeaderFooterSpaces,
    MainTitle,
    Loading,
  },
  data() {
    return {
      apartments: [],
      loading: false,
      filters: {
        city: '',
        price: 0,
      },
    };
  },
  async created() {
    try {
      this.loading = true;
      const { data } = await getApartments();

      this.apartments = data;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
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
.homepage__title {
  margin-bottom: 20px;
}
.homepage__inform {
  color: red;
  text-align: center;
  font-size: large;
}
.homepage__loader {
  margin-top: 50px;
}
</style>
