<template>
  <div class="orders-list">
    <OrdersItem
      v-for="order in orders"
      :key="order.id"
      :order="order.apartment"
    />
  </div>
</template>

<script>
import OrdersItem from './OrdersItem.vue';

export default {
  name: 'OrdersList',
  components: {
    OrdersItem,
  },
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
