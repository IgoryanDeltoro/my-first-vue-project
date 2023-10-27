<template>
  <section class="error">
    <Container>
      <h1 class="error__title">Oops!</h1>
      <h3 class="error__descr">404 - PAGE NOT FOUND</h3>
    </Container>
  </section>
</template>

<script>
import Container from '../components/shared/Container.vue';

export default {
  name: 'ErrorPage',
  components: { Container },
};
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  
  &__title {
    text-align: center;
    font-size: 100px;
    font-weight: 900;
    line-height: 1.8;
  }
  &__descr {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
  }
}
</style>
