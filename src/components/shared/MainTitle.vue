<template>
  <component class="general-title" :is="tagName">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'MainTitle',
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    tagName() {
      return `h${this.level}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.general-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
}
</style>
