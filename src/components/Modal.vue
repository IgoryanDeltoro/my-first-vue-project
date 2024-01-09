<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__container">
        <div class="modal__header">
          <Logo color="black" />
          <CloseButton class="modal__close-btn" @click="closeModal" />
        </div>
        <div class="modal__content">
          <div class="modal__user-content">
            <slot></slot>
          </div>
        </div>
        <div class="modal__footer">
          <Button type="button" @click="handleSubmit" class="modal__btn"
            >Send</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import Logo from './Logo.vue';
import CloseButton from './CloseButton.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'ReviewsModal',
  components: {
    Button,
    Logo,
    CloseButton,
  },
  data() {
    return {
      isModalOpened: true,
    };
  },
  computed: {
    ...mapGetters('booking', ['isPickedDate']),
  },
  methods: {
    closeModal() {
      this.isModalOpened = false;
      this.$emit('closeModal', false);
    },

    handleSubmit() {
      if (this.isPickedDate) this.$emit('subMit');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $overlay-color;
  display: table;

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
    padding: 0 15px;
  }

  &__container {
    max-width: 700px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  }

  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    border-width: 0;
    box-shadow: $box-shadow;
    position: relative;
  }

  &__close-btn {
    width: 50px;
    height: 50px;
  }

  &__content {
    padding: 30px 20px;
  }

  &__btn {
    width: 220px;
    margin-left: auto;
  }

  .active &__container {
    animation: $scale-animation;
  }
}

@keyframes scale {
  0% {
    opacity: 0;
    -moz-transform: scale(0.8);
  }
  100% {
    opacity: 1;
    -moz-transform: scale(1);
  }
}
</style>
