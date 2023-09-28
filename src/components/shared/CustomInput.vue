<template>
  <input class="custom-input" v-bind="$attrs" v-model="value" />
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      value: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.custom-input {
  width: 349px;
  height: 44px;
  border: 2px solid $main-color;
  background: #fff;
  line-height: inherit;
  outline: none;
  padding: 8px, 15px;
}
</style>
