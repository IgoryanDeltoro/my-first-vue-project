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
      const elements = [...this.$el.children];
      
      elements.map((item, index) => {
        const rect = item.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;

        if (index < 1) {
          if (elementCenter > 0 && elementCenter < center ) {
            this.activeIndex = index;
          }
        } else if (index >= 1 && index <= elements.length - 1) {
          if (elementCenter >= center && elementCenter <= center + center) {
            this.activeIndex = index;
          }
        } else if (index > elements.length - 1) {
          if (
            elementCenter >= center + center &&
            elementCenter <= windowHeight 
          ) {
            this.activeIndex = index;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
