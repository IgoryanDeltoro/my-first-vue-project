<template>
  <div class="body">
    <ApartmentsItem
      :description="apartment.description"
      :price="apartment.price"
      :rating="apartment.rating"
      :imgSrc="apartment.imgSrc"
    />
  </div>
</template>

<script>
import ApartmentsItem from './components/apartments/index';
import image from '../public/image/Rectangle 42.jpg';
export default {
  name: 'Body',
  components: {
    ApartmentsItem,
  },
  data() {
    return {
      apartment: {
        description:
          'Роскошные апартаменты в скайндинавском стиле с панорамным видом на реку и бесплатным Wi-Fi.',
        rating: 4,
        price: 1500,
        imgSrc: image,
      },
    };
  },
  computed: {},
  methods: {},
};
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* .content {
  flex-grow: 1;
} */
</style>
