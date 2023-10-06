<template>
  <div class="apartment-item">
    <div class="apartment-item__inner">
      <img :src="imgSrc" alt="" class="apartment-item__img" />
      <div class="apartment-item__content">
        <p class="apartment-item__description">{{ description }}</p>
        <div class="apartment-item__rating">
          <StarRating :rating="4" />
        </div>
        <p class="apartment-item__price">
          UAH {{ price }}
          <span class="apartment-item__price--desc">per day</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from '../StarRating.vue';

export default {
  name: 'ApartmentItem',
  components: {
    StarRating,
  },
  props: {
    description: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-item {
  width: 350px;
  height: 196px;
  margin-right: 30px;
  margin-bottom: 30px;
  flex-basis: calc((100% - 60px) / 3);

  &:nth-child(3n) {
    margin-right: 0;
  }
  &:nth-last-child(-n + 3) {
    margin-bottom: 0;
  }
}
.apartment-item__inner {
  position: relative;
  width: 100%;
  height: 100%;
}
.apartment-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.apartment-item__content {
  position: absolute;
  padding: 20px;
  transition: opacity 0.4s;
  text-align: left;
  line-height: 1.2;
  background: rgba(15, 29, 45, 0.7);
  cursor: pointer;
  opacity: 0;
  top: 0;
  left: 0;

  &:hover {
    opacity: 1;
  }
}
.apartment-item__description {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.2;
  height: calc(1em * 1.2 * 4);
  overflow: hidden;
}
.apartment-item__rating {
  margin-bottom: 20px;
}
.apartment-item__price {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;

  &--desc {
    font-weight: 500;
  }
}
</style>
