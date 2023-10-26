<template>
  <main class="login">
    <AuthSection>
      <Login />
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from '../components/auth/AuthSection.vue';
import Login from '../components/auth/login/index.vue';
export default {
  name: 'LoginPage',
  components: {
    Login,
    AuthSection,
  },
};
</script>

<style lang="scss" scoped></style>
