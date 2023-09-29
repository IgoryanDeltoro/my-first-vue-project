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
@import '../../assets/scss/variables.scss';
.custom-input {
  width: 220px;
  height: 44px;
  border: 2px solid $main-color;
  background: $white-color;
  line-height: inherit;
  outline: none;
  padding: 11px 20px 11px 20px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
}
</style>
