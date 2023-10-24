<template>
  <div>
    <Form ref="form" @:submit.prevent="handleSubmit">
      <CustomInput :rules="emailRules" v-model="formData.email" name="email" />
      <CustomInput
        :rules="passwordRules"
        v-model="formData.password"
        name="password"
      />
      <Button type="submit">Login</Button>
    </Form>
  </div>
</template>

<script>
import Form from '../shared/form/index.vue';
import CustomInput from '../shared/CustomInput.vue';
import Button from '../Button.vue';
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from '../../utils/validationRules';

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  components: {
    Form,
    CustomInput,
    Button,
  },
  computed: {
    rules() {
      return { emailValidation, passwordValidation, isRequired };
    },

    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
  },
  methods: {
    handleSubmit() {
      const isFormValid = this.$refs.form.validate();
      this.$refs.form.reset();

      if (isFormValid) {
        console.log(this.formData);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
