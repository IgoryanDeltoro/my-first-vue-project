<template>
  <div class="auth">
    <router-link class="auth__link" :to="{ name: 'login-page' }">
      Login
    </router-link>
    /
    <router-link class="auth__link" :to="{ name: 'register-page' }">
      Registration
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AuthActions',
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.auth {
  color: $white-color;

  &__link {
    transition: color $transition-time;
    color: inherit;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: $main-color;
    }
  }
}
</style>
