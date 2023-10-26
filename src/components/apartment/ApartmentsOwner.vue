<template>
  <section class="apartments-owner">
    <MainTitle class="apartments-owner__title" :level="2"
      >Information about owner</MainTitle
    >
    <ul class="apartments-owner__list">
      <li class="apartments-owner__item">
        <p class="apartments-owner__descr">Name: {{ owner.name }}</p>
      </li>
      <li class="apartments-owner__item">
        <a :href="`tel:${owner.phone}`" class="apartments-owner__descr--style"
          >tel: {{ owner.phone }}</a
        >
      </li>
      <li class="apartments-owner__item">
        <a
          :href="`mailto:${owner.email}`"
          target="_blank"
          class="apartments-owner__descr--style"
          >e-mail: {{ `${owner.email}` }}</a
        >
      </li>
    </ul>
  </section>
</template>

<script>
import MainTitle from '../shared/MainTitle.vue';

export default {
  name: 'ApartmentsOwner',
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
  components: { MainTitle },
};
</script>

<style lang="scss" scoped>
@import '../../assets//scss//index.scss';

.apartments-owner {
  width: 350px;
  padding: 20px;
  background-color: $second-bgc;

  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  &__descr {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;

    &--style {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
