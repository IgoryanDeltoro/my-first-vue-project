<template>
  <slot name="title"></slot>
  <div class="apartments-list">
    <ApartmentsItem
      v-for="(apartment, index) in items"
      :description="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      :imgSrc="apartment.imgUrl"
      :id="apartment.id"
      :key="apartment.id"
      :class="{ centered: index === activeIndex }"
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
      const elements = [...this.$el.parentNode.childNodes[5].children];

      elements.map((item, index) => {
        const rect = item.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;

        if (index < 2) {
          if (elementCenter > 0 && elementCenter < center + 150) {
            this.activeIndex = index;
          }
        } else if (index >= 2 && index <= elements.length) {
          if (elementCenter >= center && elementCenter <= center + center) {
            this.activeIndex = index;
          }
        } else if (index > elements.length) {
          if (
            elementCenter >= center + center &&
            elementCenter <= windowHeight - 150
          ) {
            this.activeIndex = index;
          }
        }
      });
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
