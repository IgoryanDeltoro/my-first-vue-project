<template>
  <div class="auth-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AuthContainer',
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';

.auth-container {
  padding: 30px;
  max-width: 410px;
  width: 100%;
  background-color: $white-color;
}
</style>
