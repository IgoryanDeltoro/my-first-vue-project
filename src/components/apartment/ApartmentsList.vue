<template>
  <Container>
    <div class="apartments-list">
      <ApartmentsItem
        class="apartments-item"
        v-for="{ id, price, descr, rating, imgUrl } in apartments"
        :description="descr"
        :price="price"
        :rating="rating"
        :imgSrc="imgUrl"
        :key="id"
      /></div
  ></Container>
</template>

<script>
import ApartmentsItem from './ApartmentsItem.vue';
import Container from '../shared/Container.vue';
export default {
  name: 'ApartmentsList',
  components: {
    ApartmentsItem,
    Container,
  },
  props: {
    apartments: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
}
.apartments-item {
  margin-right: 30px;
  margin-bottom: 30px;
  flex-basis: calc((100% - 60px) / 3);

  &:nth-child(3n) {
    margin-right: 0;
  }
  &:nth-last-child(-n + 3) {
    margin-bottom: 0;
  }
}
</style>
