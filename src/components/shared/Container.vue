<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';
.container {
  margin: 0 auto;

  @include mobile {
        max-width: $mobile;
    }

    @include tablet {
        max-width: $tablet;
    }

    @include desktop {
        max-width: $desktop;
    }
}
</style>
