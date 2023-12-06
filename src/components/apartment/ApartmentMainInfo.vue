<template>
  <article class="article">
    <div class="article__content">
      <MainTitle class="article__title">{{ apartment.title }}</MainTitle>
      <StarRating :rating="apartment.rating" />
    </div>
    <Skeleton class="article__skelton">
      <img class="article__img" :src="apartment.imgUrl" alt="apartment" />
    </Skeleton>
    <p class="article__descr">{{ apartment.descr }}</p>

    <div class="article__box-btn">
      <Button
        class="article__btn"
        @click="handleBooking"
        v-if="!apartment.ordered.isOrdered"
        :loading="isLoading"
        :outline="false"
        >Book</Button
      >
      <p class="article__attention" v-else>
        Sorry, but this apartment has already been booked!
      </p>
    </div>
  </article>
</template>

<script>
import StarRating from '../StarRating.vue';
import Container from '../shared/Container.vue';
import Button from '../Button.vue';
import MainTitle from '../shared/MainTitle.vue';
import Skeleton from '../Skeleton.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ApartmentMainInfo',
  components: {
    Container,
    StarRating,
    Button,
    MainTitle,
    Skeleton,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('booking', ['isLoading']),
  },
  methods: {
    ...mapActions('booking', ['bookApartment']),

    async handleBooking() {
      try {
        const { id } = this.$route.params;
        const body = {
          apartmentId: id,
          date: this.formatDate(),
        };

        await this.bookApartment(body);

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
@import '../../assets/scss/index.scss';
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
  &__skelton {
    width: 100%;
    height: 410px;
    margin-bottom: 30px;
  }
  &__img {
    width: 100%;
    height: 100%;
  }
  &__descr {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 35px;
  }
  &__box-btn {
    text-align: end;
  }
  &__btn {
    width: 220px;
  }
  &__attention {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    color: $error-color;
  }
}
</style>
