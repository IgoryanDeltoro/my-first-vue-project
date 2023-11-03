<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link to="/">
          <Logo />
        </router-link>
        <AuthActions />
      </div>
    </Container>
  </header>
</template>

<script>
import Logo from '../Logo.vue';
import Container from '../shared/Container.vue';
import AuthActions from './AuthActions.vue';

export default {
  name: 'Header',
  components: {
    Logo,
    Container,
    AuthActions,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';
.header {
  padding: 16px 0;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: $bgc-header-footer;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
