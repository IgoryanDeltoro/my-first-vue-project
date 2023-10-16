<template>
  <header class="header">
    <Container>
      <router-link to="/">
        <Logo />
      </router-link>
    </Container>
  </header>
</template>

<script>
import Logo from './Logo.vue';
import Container from './shared/Container.vue';

export default {
  name: 'Header',
  components: {
    Logo,
    Container,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
.header {
  padding: 16px 0;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: $bgc-header-footer;
}
</style>
