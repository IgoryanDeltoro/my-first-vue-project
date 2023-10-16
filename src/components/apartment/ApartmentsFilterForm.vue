<template>
  <form @submit.prevent="handelSubmit" class="form">
    <CustomSelect class="form__select" :items="cities" v-model="city" />
    <CustomInput
      class="form__input"
      name="name"
      v-model="price"
      :placeholder="'Price, from'"
    />
    <Button type="submit" :outline="false">Selection of house</Button>
  </form>
</template>

<script>
import Button from '../Button.vue';
import CustomInput from '../shared/CustomInput.vue';
import CustomSelect from '../shared/CustomSelect.vue';
import { getCities } from '../../services/apartment.service';

export default {
  name: 'ApartmentsFilterForm',
  components: {
    CustomSelect,
    CustomInput,
    Button,
  },
  data() {
    return {
      cities: [],
      price: '',
      city: '',
    };
  },
  async created() {
    try {
      const { data } = await getCities();
      this.cities = data;
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    cities() {
      return [{ value: '', label: 'City', selected: true }, ...this.cities];
    },
  },
  methods: {
    handelSubmit() {
      this.$emit('data', { price: this.price, city: this.city });
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
