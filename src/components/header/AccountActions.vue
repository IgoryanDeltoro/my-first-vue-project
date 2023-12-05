<template>
  <div class="account-action">
    <button class="account-action__button" @click="toggle">
      <span class="account-action__title">Profile</span>
      <UserAvatar class="account-action__img" :src="getUserData.avatarURL" />
    </button>

    <ul v-show="isOpen" class="account-action__list">
      <li class="account-action__item">
        <span class="account-action__logo">go</span>
        <span class="account-action__logo account-action__logo--color">
          home
        </span>
        <CloseButton class="account-action__close-btn" @closeModal="toggle" />
      </li>
      <li class="account-action__item">
        <AvatarIcon class="account-action__icon" />
        <span class="account-action__logo">
          {{ user.name }}
        </span>
        <button
          @click="onEditClick"
          type="button"
          class="account-action__setup-btn"
          title="Edit profile"
        >
          <PenIcon class="account-action__icon" />
        </button>
      </li>
      <li class="account-action__item">
        <EmailIcon class="account-action__icon" />
        <span class="account-action__email">
          {{ user.email }}
        </span>
      </li>
      <li class="account-action__item">
        <router-link
          @mouseup="() => (isOpen = false)"
          :to="{ name: 'my-orders-page' }"
          class="account-action__link"
        >
          <OrdersIcon
            :style="{ width: '20px', height: '20px', marginRight: '6px' }"
            class="account-action__icon"
          />
          My orders
        </router-link>
      </li>
      <li class="account-action__item">
        <button @click="handleLogout" class="account-action__logout-btn">
          <LogOutIcon class="account-action__icon" />
          Log out
        </button>
      </li>
      <EditUserProfile
        v-show="editIsOpen"
        @closeModal="e => (editIsOpen = e)"
        class="account-action__profile-form"
      />
    </ul>
  </div>
</template>

<script>
import Logo from '../Logo.vue';
import UserAvatar from '../shared/UserAvatar.vue';
import { mapActions, mapGetters } from 'vuex';
import EditUserProfile from './EditUserProfile.vue';
import PenIcon from '../../assets/svg/pen.svg';
import OrdersIcon from '../../assets/svg/orders-icon.svg';
import LogOutIcon from '../../assets/svg/logout.svg';
import AvatarIcon from '../../assets/svg/avatar.svg';
import CloseButton from '../CloseButton.vue';
import EmailIcon from '../../assets/svg/email.svg';

export default {
  components: {
    UserAvatar,
    Logo,
    EditUserProfile,
    PenIcon,
    OrdersIcon,
    LogOutIcon,
    AvatarIcon,
    EmailIcon,
    CloseButton,
  },
  data() {
    return {
      isOpen: false,
      editIsOpen: false,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('auth', ['getUserData']),
    ...mapActions('auth', ['logout']),
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    onEditClick() {
      this.editIsOpen = true;
    },
    async handleLogout() {
      try {
        await this.logout;

        const { requiresAuth } = this.$route.meta;
        if (requiresAuth) {
          this.$router.push({ name: 'login-page' });
        }
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Log out error',
          text: error.message,
        });
      } finally {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.account-action {
  position: relative;
  display: inline-flex;
  color: $white-color;

  &__button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    font-size: 16px;
    padding: 0;
    transition: color $transition-time;

    &:hover {
      color: $main-color;
    }
  }
  &__title {
    margin-right: 5px;
  }
  &__img {
    width: 30px;
    height: 30px;
  }
  &__list {
    min-width: 320px;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 100%;
    border: 2px solid $main-color;
    background-color: $white-color;
    color: $black-color;
    box-shadow: $box-shadow-out;

    &[style] {
      animation: animateY100 $transition-time linear;
    }
    & .account-action__profile-form {
      animation: scale $transition-time linear;
    }
  }

  &__item {
    display: flex;

    align-items: center;
    width: 100%;
    padding: 10px;

    &:nth-child(1),
    &:nth-child(3) {
      border-bottom: 1px solid #eff3f3;
    }

    &:hover:nth-child(n + 4) {
      color: $main-color;
    }
    &:not(:first-child):hover {
      background-color: $gray-border-color;
    }
  }
  &__link {
    display: flex;
    align-items: center;
  }
  &__logo {
    text-transform: uppercase;
    font-weight: 700;

    &--color {
      color: $main-color;
      text-transform: capitalize;
    }
  }
  &__close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 35px;
    height: 35px;
  }
  &__icon {
    width: 15px;
    height: 15px;
    margin-right: 10px;

    .account-action__item:hover:nth-child(n + 4) & {
      fill: $main-color;
    }

    &:hover {
      fill: $main-color;
    }
  }

  &__link {
    width: 100%;
    color: inherit;
    text-decoration: none;
    font-weight: 500;
  }
  &__email {
    font-weight: 500;
  }
  &__setup-btn {
    width: 20px;
    border: 1px solid transparent;
    background: none;
    margin-left: auto;
    cursor: pointer;
  }
  &__logout-btn {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0;
    font-size: inherit;
    font-weight: 500;
    font-family: inherit;
    text-align: start;
    cursor: pointer;
    background: none;
    border: none;
    color: inherit;
  }

  @keyframes animateY100 {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scale {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
