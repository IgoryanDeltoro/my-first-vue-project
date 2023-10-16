<template>
  <div class="reviews-heading">
    <ReviewsAvatar />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ review.author }}</span>
      <StarRating :rating="review.rating" />
    </div>
  </div>
</template>
<script>
import StarRating from '../../StarRating.vue';
import ReviewsAvatar from './ReviewsAvatar.vue';

export default {
  name: 'ReviewHeading',
  components: {
    ReviewsAvatar,
    StarRating,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  display: flex;
  margin-bottom: 20px;

  &__content {
    margin-left: 20px;
  }
  &__author {
    margin-bottom: 2px;
  }
}
</style>
