<template>
  <section class="reviews-item">
    <div class="reviews-item__content">
      <ReviewsHeading :review="review" />
    </div>
    <p class="reviews-item__descr">{{ review.comment }}</p>
  </section>
</template>

<script>
import ReviewsHeading from './ReviewsHeading.vue';

export default {
  name: 'ReviewsItem',
  props: {
    review: {
      types: Object,
      required: true,
    },
  },
  components: {
    ReviewsHeading,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/index.scss';

.reviews-item {
  padding: 20px;
  position: relative;

  border-top: 1px solid $second-bgc;
  border-left: 2px solid $second-bgc;
  border-right: 2px solid $second-bgc;
  border-bottom: 1px solid $second-bgc;

  &__descr {
    font-size: 16px;
    line-height: 1.2;
  }
}
</style>
