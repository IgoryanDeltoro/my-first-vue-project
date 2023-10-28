<template>
  <button :type="type" :class="{ btn: true, 'btn--outline': outline }">
    <LoaderCircle class="btn__loader" v-if="loading" :width="38" :height="38" />
    <span class="btn__content" :class="contentStyle">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import LoaderCircle from '../components/loaders/Circle.vue';
export default {
  name: 'Button',
  components: {
    LoaderCircle,
  },
  props: {
    type: {
      type: String,
      default: 'button',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    contentStyle() {
      return {
        'btn__content--hidden': this.loading,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-block;
  font-size: 18px;
  background: #ff662d;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
  transition: background-color 0.4s, color 0.4s;
  font-family: Montserrat, sans-serif;

  &:hover {
    background: #fff;
    color: #ff662d;
    border: 1px solid #ff662d;
  }

  &--outline {
    background: #fff;
    color: #ff662d;
    border: 1px solid #ff662d;
  }
  &__content {
    &--hidden {
      opacity: 0;
    }
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
