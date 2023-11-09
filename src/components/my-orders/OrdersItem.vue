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
      <button @click="removeApartment" class="orders-item__delete-btn">
        <img
          class="orders-item__delete-img"
          src="../../assets/svg/remove_icon.svg"
          alt="Recycle Bin"
        />
      </button>
    </div>
  </div>
</template>

<script>
import MainTitle from '../shared/MainTitle.vue';
import { removeOrder } from '../../services/order.service';

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
  methods: {
    async removeApartment() {
      try {
        await removeOrder(this.order.id);

        this.$notify({
          type: 'success',
          title: 'The apartment was successfully deleted',
        });
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Delete error',
          text: error.message,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.orders-item {
  margin-bottom: 20px;
  display: flex;

  &__img {
    width: 45%;
    height: 190px;
    object-fit: cover;
  }
  &__details {
    position: relative;
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
  &__delete-btn {
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: none;
    border: none;
    cursor: pointer;
    transition: opacity $transition-time;
    opacity: 0;
  }
  &__delete-img {
    width: 25px;
    height: 25px;
  }
  &:hover &__delete-btn {
    opacity: 1;
  }
}
</style>
