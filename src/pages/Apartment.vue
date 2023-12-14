<template>
  <main>
    <SectionWithHeaderFooterSpaces>
      <Container>
        <Loading v-if="isLoading" />
        <div v-else class="apartment-page">
          <ApartmentMainInfo  :apartment="apartment" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              class="apartment-page__owner"
              :owner="apartment.owner"
            />
            <Reviews
              class="apartment-page__reviews"
              :reviews="apartment.reviews"
            />
          </div>
        </div>
      </Container>
    </SectionWithHeaderFooterSpaces>
  </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
import ApartmentMainInfo from '../components/apartment/ApartmentMainInfo.vue';
import ApartmentsOwner from '../components/apartment/ApartmentsOwner.vue';
import Reviews from '../components/reviews/Reviews.vue';
import Loading from '../components/loaders/Loading.vue';
import SectionWithHeaderFooterSpaces from '../components/shared/SectionWithHeader&FooterSpaces.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentMainInfo,
    ApartmentsOwner,
    Reviews,
    Loading,
    SectionWithHeaderFooterSpaces,
  },
  methods: {
    ...mapActions('booking', ['getApartmentById']),
  },
  computed: {
    ...mapState('booking', ['apartment', 'isLoading']),
  },
  async created() {
    try {
      const { id } = this.$route.params;
      await this.getApartmentById(id);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
.apartment-page {
  display: flex;
  align-items: flex-start;

  @include max-width($desktop) {
    flex-direction: column;
    gap: 30px;
  }

  &__additional-info {
    flex-grow: 0;
    flex-shrink: 1;

    @include max-width(767px) {
      max-width: 350px;
    }

    @include min-max-width(768px, 1199px) {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    @include desktop {
      margin-left: 30px;
      max-width: 350px;
    }
  }

  &__owner {
    margin-bottom: 20px;

    @include min-max-width(768px, 1199px) {
      margin-bottom: 0;
      width: 350px;
    }
  }

  &__reviews {
    @include min-max-width(768px, 1199px) {
      width: 350px;
    }
  }
}
</style>
