<template>
  <slot name="title"></slot>
  <div class="apartments-list">
    <template v-for="apartment in items">
      <slot name="apartment" :index="index" :apartment="apartment"></slot>
    </template>
  </div>
</template>

<script>
import Container from '../shared/Container.vue';
export default {
  name: 'ApartmentsList',
  components: {
    Container,
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
