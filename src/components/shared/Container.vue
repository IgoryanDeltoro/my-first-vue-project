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
.container {
  width: 1110px; 
  margin: 0 auto;
}
</style>
