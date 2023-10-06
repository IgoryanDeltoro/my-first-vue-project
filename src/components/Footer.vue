<template>
  <footer class="footer"></footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
.footer {
  background-color: $bgc-header-footer;
  height: 30px;
  flex-shrink: 0;
}
</style>
