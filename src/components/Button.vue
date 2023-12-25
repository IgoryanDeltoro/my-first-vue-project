<template>
  <button
    :type="type"
    @mouseover="hover"
    @mouseleave="blur"
    :class="{ btn: true, 'btn--outline': outline }"
  >
    <LoaderCircle
      class="btn__loader"
      v-if="loading"
      :color="color"
      :width="38"
      :height="38"
    />
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
  data() {
    return {
      color: '#ffffff',
    };
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
  methods: {
    hover() {
      this.color = '#ff0000';
    },
    blur() {
      this.color = '#ffffff';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
.btn {
  position: relative;
  display: inline-block;
  font-size: 18px;
  background: $main-color;
  color: $white-color;
  cursor: pointer;
  min-width: 100px;
  border: 1px solid transparent;
  padding: 8px 15px;
  transition: background-color $transition-time, color $transition-time;
  font-family: inherit;
  margin-inline: 0;

  &:hover {
    background: $white-color;
    color: $main-color;
    border: 1px solid $main-color;
  }

  &--outline {
    background: $white-color;
    color: $main-color;
    border: 1px solid $main-color;
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
