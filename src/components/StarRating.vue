<template>
  <div class="star-rating">
    <div class="star-rating__colored" :style="ratingWidth">
      <span class="star star--colored" v-for="index in starLimit" :key="index">
      </span>
    </div>
    <span class="star star--outlined" v-for="index in starLimit" :key="index">
    </span>
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    ratingWidth() {
      return { width: (this.rating / this.starLimit) * 100 + '%' } ;
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating {
  width: 100px;
  height: 16px;
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
  width: 16px;
  height: 16px;
  flex-shrink: 0;

  &:not(:last-child) {
    margin-right: 5px;
  }
}
.star--outlined {
  background: url(.././assets/svg/star-outlined.svg) center no-repeat;
}
.star--colored {
  background: url(.././assets/svg/star-orang.svg) center no-repeat;
}
</style>
