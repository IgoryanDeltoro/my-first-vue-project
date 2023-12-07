<template>
  <div class="orders-list">
    <OrdersItem
      v-for="(order, index) in orders"
      :key="index"
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
      const center = windowHeight / 2;
      console.log(center);

      [...this.$el.children].map((item, index) => {
        const rect = item.getBoundingClientRect();
        const elementCenter = rect.top + rect.height /2;
        console.log(elementCenter);
        if (elementCenter >= 0 && elementCenter <= center +120 ) {
          this.activeIndex = index;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
