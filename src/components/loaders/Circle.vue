<template>
  <span class="circle-loader">
    <CircleIcon :width="width" :height="height" :style="style" />
  </span>
</template>

<script>
import CircleIcon from '../../assets/svg/circle.svg';
export default {
  name: 'Circle',
  components: {
    CircleIcon,
  },
  props: {
    width: {
      type: [Number, String],
      default: 50,
    },
    height: {
      type: [Number, String],
      default: 50,
    },
    color: {
      type: String,
      default: '#fff',
    },
  },
  computed: {
    style() {
      return `stroke:${this.color}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader-icon {
  stroke-dasharray: 0 250;
  animation: preloader 4s infinite;
}

@keyframes preloader {
  0% {
    stroke-dasharray: 0 250;
    transform: rotate(0);
  }

  50% {
    stroke-dasharray: 255 250;
    transform: rotate(650deg);
  }

  100% {
    stroke-dasharray: 0 250;
    transform: rotate(0);
  }
}
</style>
