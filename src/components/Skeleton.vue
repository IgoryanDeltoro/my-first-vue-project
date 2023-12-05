<template>
  <div class="skeleton">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Skeleton',
};
</script>

<style lang="scss" scoped>
@import '.././assets/scss/variables.scss';
.skeleton {
  animation: pulse-bg 1000ms linear infinite ;
}
@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}
</style>
