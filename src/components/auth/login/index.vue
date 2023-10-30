<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <Form ref="form" @:submit.prevent="handleSubmit">
      <CustomInput
        :rules="emailRules"
        v-model="formData.email"
        name="email"
        type="email"
        placeholder="Email"
        class="form__input form__input--first"
      />
      <CustomInput
        :rules="passwordRules"
        v-model="formData.password"
        name="password"
        type="password"
        placeholder="Password"
        class="form__input form__input--last"
      />
      <Button class="form__button" type="submit" :loading="loading"
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

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      loading: false,
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
    rules() {
      return { emailValidation, passwordValidation, isRequired };
    },

    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    async handleSubmit() {
      const isFormValid = this.$refs.form.validate();
      this.$refs.form.reset();

      if (isFormValid) {
        try {
          this.loading = true;
          const data = await this.$store.dispatch('login', this.formData);

          this.$router.push({ name: 'homepage' });
        } catch (error) {
          this.$notify({
            type: 'error',
            title: 'Log in error',
            text: error.message,
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    margin-bottom: 18px;
  }
}
::v-deep .form {
  &__input {
    width: 350px;

    &--first {
      margin-bottom: 23px;
    }

    &--last {
      margin-bottom: 37px;
    }
  }

  &__button {
    width: 100%;
  }
}
</style>
