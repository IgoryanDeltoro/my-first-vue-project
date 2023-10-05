<template>
  <button :type="type" :class="{ btn: true, 'btn--outline': outline }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 220px;
  height: 44px;
  background: #ff662d;
  color: #fff;
  text-align: center;
  font-family: Montserrat Medium;
  font-size: 18px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: #e84a11;
  }

  &--outline {
    background: #fff;
    color: #ff662d;
    border: 1px solid #ff662d;
  }
}
</style>
