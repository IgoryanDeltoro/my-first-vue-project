<template>
  <main class="registration">
    <AuthSection>
      <Registration />
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from '../components/auth/AuthSection.vue';
import Registration from '../components/auth/registration/index.vue';

export default {
  name: 'RegistrationPage',
  components: {
    AuthSection,
    Registration,
  },
};
</script>

<style lang="scss" scoped></style>
