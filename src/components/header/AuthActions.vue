<template>
  <div class="auth-action">
    <router-link class="auth-action__link" :to="{ name: 'login-page' }">
      Login
    </router-link>
    /
    <router-link class="auth-action__link" :to="{ name: 'register-page' }">
      Registration
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';
.auth-action {
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
