<template>
  <Container>
    <form @submit.prevent="handelSubmit" type="submit" class="form">
      <CustomSelect class="form__select" :items="cities" v-model="city" />
      <CustomInput
        class="form__input"
        name="name"
        v-model="price"
        :placeholder="'Price, from'"
      />
      <Button type="submit" :outline="false">Selection of house</Button>
    </form>
  </Container>
</template>

<script>
import Button from '../Button.vue';
import Container from '../shared/Container.vue';
import CustomInput from '../shared/CustomInput.vue';
import CustomSelect from '../shared/CustomSelect.vue';
import citiesNames from './citiesNames';

export default {
  name: 'ApartmentsFilterForm',
  components: {
    CustomSelect,
    CustomInput,
    Button,
    Container,
  },
  data() {
    return {
      price: '',
      city: '',
    };
  },
  computed: {
    cities() {
      return [{ value: '', label: 'City', selected: true }, ...citiesNames];
    },
  },
  methods: {
    handelSubmit() {
      this.$emit('submit', { price: this.price, city: this.city });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  margin-bottom: 40px;

  &__select {
    margin-right: 30px;
  }

  &__input {
    margin-right: auto;
  }
}
</style>
