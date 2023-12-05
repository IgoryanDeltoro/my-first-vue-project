<template>
  <div class="reviews-heading">
    <UserAvatar class="reviews-heading__photo" :src="review.avatar" />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ review.author }}</span>
      <StarRating :rating="review.rating" :switch="false" />
    </div>
  </div>
</template>
<script>
import StarRating from '../../StarRating.vue';
import UserAvatar from '../../shared/UserAvatar.vue';

export default {
  name: 'ReviewHeading',
  components: {
    StarRating,
    UserAvatar,
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
  &__photo {
    width: 34px;
    height: 34px;
  }
  &__author {
    display: block;
    margin-bottom: 2px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
  }
}
</style>
