<template>
  <router-link to="/">
    <img v-if="switch" src="../assets/svg/logo.svg" alt="logo" />
    <img v-else src="../assets/svg/logo-2.svg" alt="logo" />
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      switch: true,
    };
  },
  props: {
    color: {
      type: String,
      default: '#fff',
    },
  },

  created() {
    const color = ['black', '#000000', '#000'];
    this.switch = color.includes(this.color) ? false : true;
  },
};
</script>

<style lang="scss" scoped></style>
