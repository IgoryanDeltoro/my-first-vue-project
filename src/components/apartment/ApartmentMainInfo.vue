<template>
  <article class="article">
    <div class="article__content">
      <MainTitle class="article__title">{{ apartment.title }}</MainTitle>
      <StarRating :rating="apartment.rating" />
    </div>
    <img class="article__img" :src="apartment.imgUrl" alt="apartment" />
    <p class="article__descr">{{ apartment.descr }}</p>
    <div class="article__btn">
      <Button @click="handleBooking" :loading="isLoading" :outline="false"
        >Book</Button
      >
    </div>
  </article>
</template>

<script>
import StarRating from '../StarRating.vue';
import Container from '../shared/Container.vue';
import Button from '../Button.vue';
import MainTitle from '../shared/MainTitle.vue';
import { bookApartment } from '../../services/order.service';

export default {
  name: 'ApartmentMainInfo',
  components: {
    Container,
    StarRating,
    Button,
    MainTitle,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async handleBooking() {
      const body = {
        apartmentId: this.$route.params.id,
        date: this.formatDate(),
      };

      try {
        this.isLoading = true;
        await bookApartment(body);
        this.$notify({
          type: 'success',
          title: 'You have successful order',
        });
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Booking error',
          text: error.message,
        });
      } finally {
        this.isLoading = false;
      }
    },

    formatDate() {
      const UNIX = Date.now();
      const date = new Date(UNIX);
      return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'short',
        timeStyle: 'short',
      }).format(date);
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  width: 730px;

  &__title {
    max-width: calc(100% - 120px);
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    margin-right: 20px;
  }

  &__content {
    display: flex;
    align-items: baseline;
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
    text-align: center;
  }
}
</style>
