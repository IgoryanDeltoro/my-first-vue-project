<template>
  <main>
    <SectionWithHeaderFooterSpaces>
      <Container>
        <Loading v-if="isLoading" />
        <div v-else class="apartment-page">
          <ApartmentMainInfo :apartment="apartment" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              class="apartment-page__owner"
              :owner="apartment.owner"
            />
            <Reviews :reviews="apartment.reviews" />
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
.apartment-page {
  display: flex;
  align-items: flex-start;

  &__owner {
    margin-bottom: 20px;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
