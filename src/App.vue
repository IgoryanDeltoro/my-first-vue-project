<template>
  <div class="body">
    <Header>{{ title }}</Header>
    <Button @click="increment" :outline="isVisible">Enter</Button>
    <StarRating :rating="1.50"/>
  </div>
</template>

<script>
import Button from './components/Button.vue';
import Header from './components/Header.vue';
import StarRating from './components/StarRating.vue';

export default {
  name: 'Body',
  components: {
    Header,
    Button,
    StarRating,
  },
  data() {
    return {
      amountOfOrder: 0,
      fruits: ['banana', 'kiwi'],
      isVisible: false,
    };
  },
  computed: {
    title() {
      return `Yor total order is ${this.amountOfOrder}`;
    },
  },
  methods: {
    increment() {
      return (this.amountOfOrder += 1), (this.isVisible = true);
    },
  },
};
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat Medium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* .content {
  flex-grow: 1;
} */
</style>
