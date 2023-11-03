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
    color: $white-color;
    transition: color 250ms;

    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    text-decoration: none;

    &:hover {
      color: $main-color;
    }
  }
}
</style>
