<template>
  <DatePicker
    v-model:value="date"
    range
    placeholder="Date: From and to"
    :class="handlePickedDate"
  >
  </DatePicker>
</template>

<script>
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';

export default {
  name: 'Datepicker',
  components: {
    DatePicker,
  },
  data() {
    return {
      date: [],
    };
  },
  computed: {
    handlePickedDate() {
      return this.date?.[0]? 'picked-date' : '';
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/index.scss';
.mx-datepicker.mx-datepicker-range[data-v-5001c7fe] {
  width: 100%;
  margin-bottom: 30px;

  & .mx-input[type='text'] {
    width: 100%;
    height: 44px;
    padding: 11px 20px 11px 20px;
    line-height: inherit;
    font-family: inherit;
    font-size: 18px;
    line-height: 1.2;
    border: 2px solid $main-color;
    background: $white-color;
    border-radius: 0;

    &::placeholder {
      color: $black-color;
    }
  }
  &.picked-date .mx-input[type='text'] {
    font-size: 16px;
  }
}
.mx-datepicker-popup {
  box-shadow: $box-shadow-out;
}
.mx-calendar-content .cell.active {
  background-color: $main-color;
}

.mx-table-date .today {
  color: $main-color;
  background-color: $gray-border-color;
}
.mx-datepicker svg {
  fill: $black-color;
}
</style>
