<template>
  <router-link to="/">
    <LogoIcon v-if="switch" />
    <SecondLogoIcon v-else />
  </router-link>
</template>

<script>
import LogoIcon from '../assets/svg/logo.svg';
import SecondLogoIcon from '../assets/svg/logo-2.svg';

export default {
  name: 'Logo',
  components: {
    LogoIcon,
    SecondLogoIcon,
  },
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
