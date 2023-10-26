<template>
  <div class="header-footer-spaces">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SectionWithHeader&FooterSpaces',
};
</script>

<style lang="scss" scoped>
.header-footer-spaces {
  padding-top: 120px;
  padding-bottom: 100px;
}
</style>
