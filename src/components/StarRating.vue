<template>
  <div
    @mouseup="showModal"
    @mouseover="onStars"
    @mouseleave="leaveStars"
    class="star-rating"
    :style="{ width: computeBoxWidth, height: starSize }"
  >
    <div class="star-rating__colored" :style="ratingValue">
      <span
        class="star star--colored"
        v-for="index in starLimit"
        :key="index"
        :aria-label="index"
        ref="star"
        :style="{
          width: this.starSize,
          height: this.starSize,
          marginRight: index !== 5 ? gap : 0,
        }"
      >
      </span>
    </div>
    <span
      class="star star--outlined"
      v-for="index in starLimit"
      :key="index"
      :aria-label="index"
      :style="{
        width: this.starSize,
        height: this.starSize,
        marginRight: index !== 5 ? gap : 0,
      }"
    >
    </span>
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  data() {
    return {
      isModalOpened: false,
      ratingValue: {},
    };
  },
  inject: {
    div: {
      default: null,
    },
  },
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
    starSize: {
      type: String,
      default: '16px',
    },
    switch: {
      type: Boolean,
      default: true,
    },
    gap: {
      type: String,
      default: '5px',
    },
  },

  created() {
    this.ratingValue = this.computeRatingWidth();
  },
  watch: {
    rating() {
      this.ratingValue = this.computeRatingWidth();
    },
  },
  computed: {
    computeBoxWidth() {
      return `${parseInt(this.starSize) * 5 + parseInt(this.gap) * 4}px`;
    },
  },
  methods: {
    computeRatingWidth(value) {
      const ratingValue = value ? value : this.rating;
      const sum = (ratingValue / this.starLimit) * 100;
      return { width: `${sum}%` };
    },
    showModal(event) {
      if (this.switch) {
        const { ariaLabel } = event.target;
        this.isModalOpened = true;
        this.div.showModal(this.isModalOpened, +ariaLabel);
      } else {
        event.stopPropagation();
      }
    },
    onStars(event) {
      if (this.switch) {
        const { ariaLabel } = event.target;
        const value = Number(ariaLabel);

        if (value) {
          this.ratingValue = this.computeRatingWidth(value);
        }
      } else {
        event.stopPropagation();
      }
    },
    leaveStars() {
      this.ratingValue = this.computeRatingWidth();
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating {
  position: relative;

  &__colored {
    display: inline-flex;
    position: absolute;
    width: 0px;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}

.star {
  display: inline-block;
  flex-shrink: 0;

  &:last-child {
    margin-right: 0;
  }
}
.star--outlined {
  background: url(.././assets/svg/star-outlined.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.star--colored {
  background: url(.././assets/svg/star-orang.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
