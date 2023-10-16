<template>
  <section class="reviews-item">
    <div class="reviews-item__content">
      <ReviewsHeading :review="review" />
    </div>
    <p class="reviews-item__descr">{{ review.content }}</p>
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
    color: #000;

    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    height: calc(1em * 1.2 * 5);
    overflow: hidden;
    white-space: pre-line;
  }
 
  &__descr::after {
    content: '...';
    position: absolute;
    right: 20px;
    bottom: 23px;

    width: 1rem;
    height: 1rem;
    color: black;
    background: white;
  }
}
</style>
