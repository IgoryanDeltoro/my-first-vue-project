<template>
  <div class="app">
    <div class="content">
      <notifications />
      <Header />
      <router-view></router-view>
      <ReviewsModal v-if="isShowModal" :rating="rating" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/header/index.vue';
import ReviewsModal from './components/reviews/modal/ReviewsModal.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    ReviewsModal,
  },
  data() {
    return {
      isShowModal: false,
      rating: 0,
    };
  },
  provide() {
    return {
      div: this,
    };
  },
  methods: {
    showModal(value, rating) {
      this.isShowModal = value;
      this.rating = rating;
    },
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex-grow: 1;
}
</style>
