<template>
  <main>
    <Container>
      <ApartmentMainInfo :apartment="apartment" />
    </Container>
  </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
import ApartmentMainInfo from '../components/apartment/ApartmentMainInfo.vue';
import apartments from '../components/apartment/apartments';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentMainInfo,
  },
  computed: {
    apartment() {
      return apartments.find(
        apartment => apartment.id === this.$route.params.id
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
