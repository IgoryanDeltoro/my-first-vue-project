<template>
  <article class="article">
    <div class="article__content">
      <h1 class="article__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>
    <img class="article__img" :src="apartment.imgUrl" alt="apartment" />
    <p class="article__descr">{{ apartment.descr }}</p>
    <Button class="article__btn" :outline="false">Book</Button>
  </article>
</template>

<script>
import StarRating from '../StarRating.vue';
import Container from '../shared/Container.vue';
import Button from '../Button.vue';

export default {
  name: 'ApartmentMainInfo',
  components: {
    Container,
    StarRating,
    Button,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  width: 730px;

  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    margin-right: 20px;
  }
  &__content {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  &__img {
    width: 100%;
    height: 410px;
    margin-bottom: 30px;
  }
  &__descr {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 35px;
  }
  &__btn {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
