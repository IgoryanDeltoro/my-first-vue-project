<template>
  <div class="orders-item">
    <Skeleton class="orders-item__img-box">
      <img class="orders-item__img" :src="order.imgUrl" alt="Apartment photo" />
    </Skeleton>
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
        <RemoveIcon class="orders-item__delete-img" />
      </button>
    </div>
  </div>
</template>

<script>
import MainTitle from '../shared/MainTitle.vue';
import { removeOrder } from '../../services/order.service';
import { mapActions, mapState } from 'vuex';
import Skeleton from '../Skeleton.vue';
import RemoveIcon from '../../assets/svg/remove_icon.svg';

export default {
  name: 'OrdersItem',
  components: {
    MainTitle,
    Skeleton,
    RemoveIcon,
  },
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('booking', ['isLoading']),
  },
  methods: {
    ...mapActions('booking', ['getOrders']),

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
      } finally {
        await this.getOrders();
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
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
  transition-duration: $transition-time;
  box-shadow: $cards-box-shadow;

  &__img-box {
    width: 45%;
    height: 190px;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__details {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    padding: 20px;
  }
  &__title {
    margin-bottom: 10px;
  }
  &__price-sum {
    font-size: 20px;
    font-weight: 700;
  }
  &__delete-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: 15px;
    right: 15px;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    transition: opacity $transition-time ease-out;
    opacity: 0;

    &:hover {
      background-color: $gray-border-color;
    }
  }
  &__delete-img {
    width: 25px;
    height: 25px;
  }
  &:hover &__delete-btn {
    opacity: 1;
    color: $main-color;
  }

  &:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
    box-shadow: $box-shadow-out;
  }
}

@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}
</style>
