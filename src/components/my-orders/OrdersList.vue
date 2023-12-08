<template>
  <div class="orders-list">
    <OrdersItem
      v-for="(order, index) in orders"
      :key="order.id"
      :order="order.apartment"
      :class="{ centered: index === activeIndex }"
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
  data() {
    return {
      activeIndex: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const windowHeight = window.innerHeight;
      const center = windowHeight / 3;

      [...this.$el.children].map((item, index) => {
        const rect = item.getBoundingClientRect();
        const elementCenter = rect.top + rect.height /2;
        if (elementCenter >= center && elementCenter <= center + center ) {
          this.activeIndex = index;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
