<template>
  <div class="orders-item">
    <img class="orders-item__img" :src="order.imgUrl" alt="Apartment photo" />
    <div class="orders-item__details">
      <div class="orders-item__text">
        <MainTitle class="orders-item__title" :level="2">
          {{ order.title }}
        </MainTitle>
        <p class="orders-item__location">{{ order.location.city }}</p>
      </div>
      <div class="orders-item__price">
        <span class="orders-item__price-sum">UAH {{ order.price }}</span>
        per night
      </div>
    </div>
  </div>
</template>

<script>
import MainTitle from '../shared/MainTitle.vue';

export default {
  name: 'OrdersItem',
  components: {
    MainTitle,
  },
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-item {
  margin-bottom: 20px;
  display: flex;

  &__img {
    width: 45%;
    height: 190px;
    object-fit: cover;
  }
  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    padding: 20px;
    border: 2px solid #e1efff;
    border-left: none;
  }
  &__title {
    margin-bottom: 10px;
  }
  &__price-sum {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
