<template>
  <button class="close-button" @click="onCloseButton">
    <CloseIcon class="close-button__icon" />
    <slot></slot>
  </button>
</template>

<script>
import CloseIcon from '../assets/svg/close.svg';
export default {
  name: 'CloseButton',
  components: {
    CloseIcon,
  },
  methods: {
    onCloseButton() {
      this.$emit('closeModal', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '.././assets/scss/index.scss';

.close-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: $white-color;

  &:hover {
    background-color: $gray-border-color;
  }

  &__icon {
    width: 18px;
    height: 18px;
  }
}
</style>
