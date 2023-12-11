<template>
  <main class="homepage">
    <SectionWithHeaderFooterSpaces>
      <Container>
        <Button class="homepage__filter-btn" @click="filterOpener"
          >filter</Button
        >
        <ApartmentsFilterForm
          :class="isOpen ? 'opened' : 'closed'"
          @data="filter"
        />
      </Container>
      <Loading v-if="isLoading" />
      <Container v-else>
        <p class="homepage__inform" v-if="!filteredApartments.length">
          Apartments not found
        </p>
        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:title>
            <MainTitle class="homepage__title"
              >Selection according to choice</MainTitle
            >
          </template>
        </ApartmentsList>
      </Container>
      <Container v-show="!isLoading">
        <Pagination class="homepage__pagination" />
      </Container>
    </SectionWithHeaderFooterSpaces>
  </main>
</template>
<script>
import ApartmentsFilterForm from '../components/apartment/ApartmentsFilterForm.vue';
import ApartmentsItem from '../components/apartment/ApartmentsItem.vue';
import ApartmentsList from '../components/apartment/ApartmentsList.vue';
import Container from '../components/shared/Container.vue';
import SectionWithHeaderFooterSpaces from '../components/shared/SectionWithHeader&FooterSpaces.vue';
import MainTitle from '../components/shared/MainTitle.vue';
import Loading from '../components/loaders/Loading.vue';
import { mapState, mapActions } from 'vuex';
import Button from '../components/Button.vue';
import Pagination from '../components/apartment/Pagination.vue';

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
    Button,
    Pagination,
  },
  data() {
    return {
      filters: {
        city: '',
        price: 0,
      },
      isOpen: false,
    };
  },
  watch: {
    currentPage() {
      this.getAllApartments();
    },
  },
  computed: {
    ...mapState('booking', ['isLoading', 'allApartments', 'currentPage']),

    filteredApartments() {
      return this.filterByCityName(
        this.filterByPrice(this.allApartments.apartments)
      );
    },
  },
  methods: {
    ...mapActions('booking', ['getApartmentsList']),

    filter({ city, price, isOpen }) {
      this.filters.city = city;
      this.filters.price = price;
      this.isOpen = isOpen;
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
    filterOpener() {
      this.isOpen = true;
    },
    async getAllApartments() {
      try {
        await this.getApartmentsList();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
.homepage {
  &__filter-btn {
    display: block;
    position: absolute;
    top: 75px;
    right: 15px;

    @include tablet {
      opacity: 0;
    }
  }

  &__title {
    margin-bottom: 20px;
  }
  &__inform {
    color: red;
    text-align: center;
    font-size: large;
  }
  &__loader {
    margin-top: 50px;
  }
  &__pagination {
    position: relative;
    text-align: center;
    margin-top: 50px;
  }
}
</style>
