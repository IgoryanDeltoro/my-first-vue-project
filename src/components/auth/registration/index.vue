<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
    <Form ref="form" @:submit.prevent="handleSubmit">
      <CustomInput
        :rules="nameRules"
        v-model="formData.name"
        name="name"
        type="name"
        placeholder="Name"
        class="form__input"
      />
      <CustomInput
        :rules="emailRules"
        v-model="formData.email"
        name="email"
        type="email"
        placeholder="Email"
        class="form__input"
      />
      <CustomInput
        :rules="passwordRules"
        v-model="formData.password"
        name="password"
        type="password"
        placeholder="Password"
        class="form__input"
      />
      <CustomInput
        :rules="confirmPassword"
        v-model="formData.confirmPassword"
        name="password"
        type="password"
        placeholder="Confirm password"
        class="form__input form__input--last"
      />
      <Button class="form__button" type="submit" :loading="isLoading"
        >Enter</Button
      >
    </Form>
  </AuthContainer>
</template>

<script>
import Form from '../../shared/form/index.vue';
import CustomInput from '../../shared/CustomInput.vue';
import Button from '../../Button.vue';
import AuthContainer from '../../auth/AuthContainer.vue';
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from '../../../utils/validationRules';
import MainTitle from '../../shared/MainTitle.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Registration',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  components: {
    Form,
    CustomInput,
    Button,
    AuthContainer,
    MainTitle,
  },
  computed: {
    ...mapState('auth', ['isLoading']),

    rules() {
      return { emailValidation, passwordValidation, isRequired };
    },
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        value => ({
          hasPassed: value === this.formData.password,
          message: "Passwords don't match!",
        }),
      ];
    },
  },
  methods: {
    ...mapActions('auth', ['registerUser']),
    async handleSubmit() {
      const isFormValid = this.$refs.form.validate();
      this.$refs.form.reset();

      if (isFormValid) {
        const { name, email, password } = this.formData;

        try {
          await this.registerUser({ name, email, password });

          this.$router.push({ name: 'homepage' });
        } catch (error) {
          this.$notify({
            type: 'error',
            title: 'Registration error',
            text: error.message,
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    margin-bottom: 18px;
  }
}
 .form {
  &__input {
    width: 100%;
    margin-bottom: 23px;

    &--last {
      margin-bottom: 37px;
    }
  }

  &__button {
    width: 100%;
  }
}
</style>
