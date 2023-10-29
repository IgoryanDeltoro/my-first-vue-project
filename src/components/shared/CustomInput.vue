<template>
  <div class="wrapper-input">
    <input
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
      @blur="blurHandler"
      v-bind="$attrs"
      v-model="value"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      value: '',
      error: '',
      isValid: true,
      isFirstInput: true,
    };
  },
  inheritAttrs: false,
  inject: {
    form: {
      default: null,
    },
  },
  props: {
    errorMessage: {
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      default: () => [],
    },
    success: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value() {
      if (this.isFirstInput) return;

      this.validate();
    },
  },
  mounted() {
    if (!this.form) return;

    this.form.registerInput(this);
  },
  beforeDestroy() {
    if (!this.form) return;

    this.form.unRegisterInput(this);
  },
  methods: {
    validate() {
      this.isValid = this.rules.every(rule => {
        const { hasPassed, message } = rule(this.value);

        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }

        return hasPassed;
      });

      return this.isValid;
    },
    blurHandler() {
      if (this.isFirstInput) {
        this.validate();
      }

      this.isFirstInput = false;
    },
    reset() {
      this.isFirstInput = true;
      this.isValid = true;
      this.value = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.wrapper-input {
  position: relative;
  display: inline-flex;
}
.custom-input {
  width: 100%;
  height: 44px;
  padding: 11px 20px 11px 20px;

  line-height: inherit;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  border: 2px solid $main-color;
  background: $white-color;
  outline: none;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: $error-color;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    line-height: 1.3;
    color: $error-color;
  }
}
</style>
