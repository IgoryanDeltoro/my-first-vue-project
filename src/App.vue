<template>
  <div class="app">
    <p>{{ text }}</p>
    <CustomInput
      type="text"
      name="name"
      v-model="text"
      :placeholder="'Price, from'"
    />
    <CustomSelect :items="['Country', 'City']" />

    <ApartmentsList :items="apartments">
      <template v-slot:title>Selection according to choice</template>
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :description="apartment.descr"
          :price="apartment.price"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :key="apartment.id"
          @click="handler"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import apartments from './components/apartment/apartments';
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';
import ApartmentsList from './components/apartment/ApartmentsList.vue';
import CustomInput from './components/shared/CustomInput.vue';
import CustomSelect from './components/shared/CustomSelect.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    CustomInput,
    CustomSelect,
  },
  data() {
    return {
      text: '',
      name: '',
      apartments,
    };
  },
  computed: {},
  methods: {
    handler(event) {
      console.log(event.target.tagName);
    },
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
