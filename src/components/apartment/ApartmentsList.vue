<template>
  <slot name="title"></slot>
  <div class="apartments-list">
    <ApartmentsItem
      v-for="(apartment, index) in items"
      :description="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      :imgSrc="apartment.imgUrl"
      :city="apartment.location.city"
      :id="apartment.id"
      :key="apartment.id"
    />
  </div>
</template>

<script>
import Container from '../shared/Container.vue';
import ApartmentsItem from '../../components/apartment/ApartmentsItem.vue';

export default {
  name: 'ApartmentsList',
  components: {
    Container,
    ApartmentsItem,
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  props: {
    items: {
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
  gap: 30px;
}
</style>
