<template>
  <main class="homepage">
    <SectionWithHeaderFooterSpaces>
      <Container>
        <div class="homepage__filter">
          <Button class="homepage__filter-btn" @click="filterOpener"
            >filter
          </Button>
          <ApartmentsFilterForm
            :class="isOpen ? 'opened' : 'closed'"
            @data="filter"
          />
        </div>
      </Container>
      <Loading v-if="isLoading" />
      <Container v-else>
        <p class="homepage__inform" v-if="!allApartments.apartments.length">
          Apartments not found
        </p>
        <ApartmentsList v-else :items="allApartments.apartments">
          <template v-slot:title>
            <MainTitle class="homepage__title"
              >Selection according to choice</MainTitle
            >
          </template>
        </ApartmentsList>
      </Container>
      <Container>
        <Pagination v-show="!isLoading" class="homepage__pagination" />
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
import { mapState, mapActions, mapGetters } from 'vuex';
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
      isOpen: false,
    };
  },
  created() {
    this.getAllApartments();
  },
  watch: {
    $route: 'getAllApartments',
  },
  computed: {
    ...mapState('booking', ['isLoading', 'allApartments']),
  },
  methods: {
    ...mapActions('booking', ['getApartmentsList']),

    filter({ isOpen }) {
      this.isOpen = isOpen;
    },
    filterOpener() {
      this.isOpen = true;
    },
    async getAllApartments() {
      if (!this.$route.params.id) {
        const params = {
          page: this.$route.query.page,
          limit: this.$route.query.limit,
          city: this.$route.query.city,
          price: this.$route.query.price,
          rating: this.$route.query.rating,
        };

        try {
          await this.getApartmentsList(params);
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
.homepage {
  &__filter {
    position: relative;
    margin-bottom: 20px;

    &-btn {
      display: block;
      margin-left: auto;

      @include desktop {
        opacity: 0;
      }
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
