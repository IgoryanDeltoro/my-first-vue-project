<template>
  <span class="loading" :style="{ color }">Loading...</span>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    color: {
      type: String,
      default: 'green',
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 25px;
}
</style>
