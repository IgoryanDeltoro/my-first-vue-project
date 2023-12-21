<template>
  <div class="apartment-item">
    <div class="apartment-item__inner">
      <Skelton class="apartment-item__skeleton">
        <img :src="imgSrc" alt="" class="apartment-item__img" />
      </Skelton>
      <div class="apartment-item__content">
        <p class="apartment-item__description">
          {{ description }}
        </p>
        <div>
          <div class="apartment-item__rating">
            <span class="apartment-item__location">{{ city }}</span>
            <StarRating :rating="rating" />
          </div>
          <p class="apartment-item__price">
            UAH {{ price }}
            <span class="apartment-item__price--desc">per day</span>
          </p>
        </div>
        <router-link
          :to="{ name: 'apartment', params: { id } }"
          class="apartment-item__link"
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from '../StarRating.vue';
import Skelton from '../Skeleton.vue';

export default {
  name: 'ApartmentItem',
  components: {
    StarRating,
    Skelton,
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
    city: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';
.apartment-item {
  box-shadow: $cards-box-shadow;
  @include max-width(767px) {
    width: 100%;
  }
  @include min-max-width(768px, 1199px) {
    width: 350px;
  }
  @include min-max-width(768px, 1199px) {
    flex-basis: calc((100% - 30px) / 2);
  }
  @include desktop {
    flex-basis: calc((100% - 2 * 30px) / 3);
  }
  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
  &__skeleton {
    width: 100%;
    height: 200px;
  }
  &__img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  &__content {
    text-align: left;
    line-height: 1.2;

    @include max-width(1199px) {
      padding: 10px;
    }
    @include desktop {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      widows: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
      top: 0;
      left: 0;
      padding: 20px;
      transition: opacity 0.4s;
      background: rgba(15, 29, 45, 0.7);
    }
    &:hover {
      @include tablet {
        opacity: 1;
      }
    }
  }
  &__description {
    display: none;

    @include desktop {
      display: block;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 20px;
      line-height: 1.2;
      height: calc(1em * 1.2 * 4);
      color: #fff;
      overflow: hidden;
    }
  }
  &__location {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    @include desktop {
      display: none;
    }
  }
  &__rating {
    @include max-width(1199px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    @include desktop {
      margin-bottom: 20px;
    }
  }
  &__price {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;

    &--desc {
      font-weight: 500;
    }
    @include desktop {
      color: #fff;
    }
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
