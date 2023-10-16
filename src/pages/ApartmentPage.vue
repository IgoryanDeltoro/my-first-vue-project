<template>
  <main>
    <Container>
      <div class="apartment-page">
        <ApartmentMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviews" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
import ApartmentMainInfo from '../components/apartment/ApartmentMainInfo.vue';
import apartments from '../components/apartment/apartments';
import ApartmentsOwner from '../components/apartment/ApartmentsOwner.vue';
import Reviews from '../components/reviews/Reviews.vue';
import reviews from '../components/reviews/reviews.json';
export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentMainInfo,
    ApartmentsOwner,
    Reviews,
  },
  computed: {
    reviews() {
      return reviews;
    },
    apartment() {
      return apartments.find(
        apartment => apartment.id === this.$route.params.id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  display: flex;
  align-items: flex-start;

  &__owner{
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
