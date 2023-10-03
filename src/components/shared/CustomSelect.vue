<template>
  <select v-model="selected" class="custom-select">
    <option
      v-for="item in formattedItems"
      :value="item.value"
      :key="item.value"
      :selected="item.selected"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: '',
    };
  },
  computed: {
    formattedItems() {
      return this.items.map(item => {
        if (typeof item === 'object') {
          return item;
        } else {
          return { value: item, label: item };
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.custom-select {
  width: 220px;
  height: 44px;
  border: 2px solid $main-color;
  background: $white-color;
  line-height: inherit;
  outline: none;
  padding: 0 20px 0 20px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
}
</style>
