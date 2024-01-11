<template>
  <div class="feed-back">
    <div class="feed-back__user-content">
      <UserAvatar class="feed-back__user-avatar" :src="getUserData.avatarURL" />
      <div>
        <span class="feed-back__user-name">{{ this.getUserData.name }}</span>
        <p>
          Reviews are visible to everyone and contain information about your
          account. Public data includes your name, profile photo.
        </p>
      </div>
    </div>
    <div class="feed-back__box">
      <div class="feed-back__descr">Please, rate this apartment</div>
    </div>
    <StarRating
      class="feed-back__rating"
      title="Press to leave feedback"
      starSize="30px"
      gap="25px"
      :rating="rating"
    />
    <textarea
      class="feed-back__comment-text"
      rows="2"
      cols
      v-model="message"
      maxlength="500"
      placeholder="Describe your impressions (optionally)"
    ></textarea>
    <span class="feed-back__comment-quantity">{{
      `${wordsQuantity}/500`
    }}</span>
  </div>
</template>

<script>
import Button from '../Button.vue';
import Logo from '../Logo.vue';
import StarRating from '../StarRating.vue';
import { mapGetters, mapActions } from 'vuex';
import UserAvatar from '../shared/UserAvatar.vue';
import CloseButton from '../CloseButton.vue';
export default {
  name: 'FeedBack',
  components: {
    StarRating,
    UserAvatar,
    Button,
    Logo,
    CloseButton,
  },
  data() {
    return {
      isModalOpened: true,
      message: '',
    };
  },
  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },
  inject: {
    div: {
      default: null,
    },
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'getUserData']),

    wordsQuantity() {
      return this.message.length;
    },
  },
  methods: {
    ...mapActions('booking', ['createReview']),

    closeModal() {
      this.isModalOpened = false;
      this.div.showModal(this.isModalOpened);
    },

    async handleSubmit() {
      if (this.rating !== 0) {
        try {
          const { id } = this.$route.params;
          const data = {
            comment: this.message,
            rating: this.rating,
          };

          await this.createReview({ id, data });
          this.closeModal();
        } catch (error) {
          this.$notify({
            type: 'error',
            title: 'Rating error',
            text: error.message,
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';
.feed-back {
  &__wrapper {
    display: table-cell;
    vertical-align: middle;
    padding: 0 15px;
  }

  &__container {
    max-width: 700px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  }

  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    border-width: 0;
    box-shadow: $box-shadow;
    position: relative;
  }

  &__close-btn {
    width: 50px;
    height: 50px;
  }

  &__content {
    padding: 30px 20px;
  }

  &__user-avatar {
    width: 50px;
    margin-right: 15px;
  }

  &__rating {
    margin: 0 auto 20px auto;
  }

  &__label {
    widows: 100%;
    border: 0;
    color: inherit;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  &__comment-text {
    max-width: 100%;
    min-width: 100%;
    min-height: 50px;
    padding: 15px;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    overflow-x: hidden;
    overflow-y: auto;

    &:focus {
      outline: none;
      border: 2px solid $main-color;
    }
  }

  &__comment-quantity {
    font-size: 14px;
    display: block;
    text-align: end;
  }

  &__btn {
    width: 220px;
    margin-left: auto;
  }

  &__user-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
  }

  &__user-name {
    display: inline-block;
    font-weight: 500;
    margin-bottom: 5px;
  }

  &__descr {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
    position: relative;

    &::before {
      content: '';

      @include tablet {
        width: 25%;
      }
      position: absolute;
      display: block;
      top: 50%;
      transform: translate(0, -50%);
      left: 0;

      height: 1px;
      border: 1px solid $gray-border-color;
    }

    &::after {
      content: '';

      @include tablet {
        width: 25%;
      }
      position: absolute;
      display: block;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
      height: 1px;
      border: 1px solid $gray-border-color;
    }
  }
}
</style>
