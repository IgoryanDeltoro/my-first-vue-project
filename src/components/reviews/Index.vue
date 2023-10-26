<template>
  <section class="reviews">
    <div class="reviews__rating-content">
      <MainTitle class="reviews__title">Overall rating</MainTitle>
      <div class="reviews__total-rating-content">
        <p class="reviews__total-rating-descr">
          {{ amountOfReviews }} feedbacks
        </p>
        <StarRating :rating="totalReviews" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in currentReviews"
      :key="review.author"
      :review="review"
    />
    <button @click="toggleReview" class="reviews__show-more">
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import StarRating from '../StarRating.vue';
import MainTitle from '../shared/MainTitle.vue';
import ReviewsItem from './reviews-item/index.vue';
export default {
  name: 'Reviews',
  components: {
    ReviewsItem,
    StarRating,
    MainTitle,
  },
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalReviews() {
      const total = this.reviews.reduce(
        (acc, element) => acc + element.rating,
        0
      );

      return total / this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    amountOfReviews() {
      return this.reviews.length;
    },
    buttonText() {
      return this.reviewsLimit === 2 ? 'Read more...' : 'Turn off';
    },
  },
  methods: {
    toggleReview() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
        return;
      }
      this.reviewsLimit = this.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';

.reviews {
  &__rating-content {
    padding: 20px;
    height: 80px;
    background-color: $second-bgc;
  }
  &__total-rating-content {
    display: flex;
  }
  &__total-rating-descr {
    margin-right: 66px;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 7px;
  }
  &__show-more {
    width: 100%;
    height: 44px;

    font-family: inherit;
    font-size: 16px;
    font-style: inherit;
    font-weight: 400;
    line-height: 1.2;
    background-color: $second-bgc;
    text-align: center;
    border: none;
    cursor: pointer;
  }
}
</style>
