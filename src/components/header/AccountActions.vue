<template>
  <div class="account-action" @mouseover="open" @mouseleave="close">
    <button class="account-action__button" @click="toggle">
      <span class="account-action__title">profile</span>
      <UserAvatar class="account-action__icon" />
    </button>
    <ul v-show="isOpen" class="account-action__list">
      <li class="account-action__item">
        <span class="account-action__logo">go</span>
        <span class="account-action__logo account-action__logo--color">
          home
        </span>
      </li>
      <li class="account-action__item">
        <UserAvatar class="account-action__img" />
        <span class="account-action__logo">
          {{ user.name }}
        </span>
      </li>
      <li class="account-action__item">
        <img
          class="account-action__img"
          src="../../assets/svg/email.svg"
          alt="envelope"
        />
        <span class="account-action__email">
          {{ user.email }}
        </span>
      </li>
      <li class="account-action__item">
        <router-link class="account-action__link" :to="{}">
          <img
            class="account-action__img"
            src="../../assets/svg/order_icon.svg"
            alt="orders list"
          />
          My orders
        </router-link>
      </li>
      <li class="account-action__item">
        <button @click="handleLogout" class="account-action__logout-btn">
          <img
            class="account-action__img"
            src="../../assets/svg/logout.svg"
            alt="log out"
          />
          Log out
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from '../Logo.vue';
import UserAvatar from './UserAvatar.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    UserAvatar,
    Logo,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapActions('auth', ['logout']),
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    async handleLogout() {
      try {
        await this.logout();
        const { requiresAuth } = this.state;
        
        if (requiresAuth) {
          this.$router.push({ name: 'login-page' });
        }
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.account-action {
  position: relative;
  display: inline-flex;
  padding: 5px 0;
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
  &__icon {
    transition: fill $transition-time;
    fill: currentColor;
    width: 16px;
    height: 18px;
  }
  &__list {
    min-width: 120px;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 100%;
    border: 1px solid $main-color;
    background-color: $white-color;
    color: $black-color;
  }

  &__item {
    display: flex;
    align-items: center;

    &:nth-child(1),
    &:nth-child(3) {
      padding-bottom: 10px;
      border-bottom: 1px solid #eff3f3;
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    &:hover:nth-child(n + 4) {
      color: $main-color;
    }
  }
  &__logo {
    text-transform: uppercase;
    font-weight: 700;

    &--color {
      color: $main-color;
      text-transform: capitalize;
    }
  }
  &__img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
  &__link {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
  }
  &__logout-btn {
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
}
</style>
