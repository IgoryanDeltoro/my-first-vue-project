<template>
  <Form @:submit.prevent="handleSubmit" class="form">
    <CloseButton class="form__close-btn" />
    <div class="form__img-box">
      <UserAvatar class="form__photo-img" :src="user.avatarURL" />
      <label class="form__layout">
        <PlusIcon class="form__img" />
        <input
          class="form__upload-input"
          type="file"
          @change="onFileChanged($event)"
          accept="image/*"
          capture
        />
      </label>
    </div>
    <CustomInput
      v-model="userName"
      class="form__input"
      placeholder="Edit name (optionally)"
    />
    <Button :loading="isLoading" class="form__btn" type="submit">
      Submit
    </Button>
  </Form>
</template>

<script>
import UserAvatar from '../shared/UserAvatar.vue';
import Form from '../shared/form/index.vue';
import CustomInput from '../shared/CustomInput.vue';
import Button from '../Button.vue';
import { mapActions, mapState } from 'vuex';
import CloseButton from '../CloseButton.vue';
import PlusIcon from '../../assets/svg/plus.svg';

export default {
  name: 'EditUserProfile',
  components: {
    Form,
    UserAvatar,
    CustomInput,
    Button,
    CloseButton,
    PlusIcon,
  },
  data() {
    return {
      userPhoto: null,
      userName: '',
    };
  },

  computed: {
    ...mapState('auth', ['isLoading', 'user']),
  },
  methods: {
    ...mapActions('auth', ['updateUserProfile']),

    onFileChanged($event) {
      const file = $event.target.files[0];
      this.userPhoto = file;
    },
    async handleSubmit() {
      try {
        const formData = new FormData();
        formData.append('avatar', this.userPhoto);
        formData.append('name', JSON.stringify(this.userName));
        if (this.userName || this.userPhoto) {
          await this.updateUserProfile(formData);
        }
        this.$emit('closeModal', false);
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Edit error',
          text: error.message,
        });
      } finally {
        this.userName = '';
        this.userPhoto = null;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../assets/scss/index.scss';
.form {
  position: absolute;
  top: -1px;
  right: -1px;
  width: 101%;
  padding: 20px 10px;
  border: 2px solid $main-color;
  background-color: $white-color;
  box-shadow: $box-shadow-out;

  &__img-box {
    position: relative;
    margin: 0 auto 0 auto;
    width: 50px;
    margin-bottom: 20px;
  }

  &__photo-img {
    display: block;
    width: 50px;
    margin: 0;
  }
  &__close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 35px;
    height: 35px;
  }
  &__img {
    width: 15px;
  }
  &__layout {
    position: absolute;
    bottom: -8px;
    right: 0;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 50px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    border: 1px solid $black-color;
    background-color: $gray-border-color;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover {
      background-color: $main-color;
      box-shadow: $box-shadow;
      border-color: $gray-border-color;
    }
  }
  &__input {
    width: 100%;
  }
  &__upload-input {
    display: none;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  &__btn {
    display: block;
    width: 100px;
    margin-top: 20px;
    margin-left: auto;
  }
}
</style>
