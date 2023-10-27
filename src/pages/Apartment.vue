<template>
  <main>
    <SectionWithHeaderFooterSpaces>
      <Container>
        <Loading v-if="isLoading" />
        <div v-else="!isLoading" class="apartment-page">
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
import Reviews from '../components/reviews/index.vue';
import Loading from '../components/Loading.vue';
import { getApartmentById } from '../services/apartment.service';
import SectionWithHeaderFooterSpaces from '../components/shared/SectionWithHeader&FooterSpaces.vue';
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
  data() {
    return {
      isLoading: false,
      apartment: {},
    };
  },
  async created() {
    try {
      this.isLoading = true;
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      this.apartment = data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    reviews() {
      return reviews;
    },
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
