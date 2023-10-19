<template>
  <form @submit.prevent="handelSubmit" class="form">
    <CustomSelect class="form__select" :items="cities" v-model="city" />
    <CustomInput
      class="form__input"
      name="name"
      type="number"
      v-model="price"
      error-message="this field is empty"
      :placeholder="'Price, from'"
      :rules="rules"
    />
    <Button class="form__button" type="submit" :outline="false"
      >Selection of house</Button
    >
  </form>
</template>

<script>
import Button from '../Button.vue';
import CustomInput from '../shared/CustomInput.vue';
import CustomSelect from '../shared/CustomSelect.vue';
import { getCities } from '../../services/apartment.service';
import { isRequired, charLimit } from '../../utils/validationRules';
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
      this.cities = [{ value: '', label: 'City', selected: true }, ...data];
    } catch (error) {
      console.log(error);
    }
  },

  computed: {
    // cities() {
    //   return [{ value: '', label: 'City', selected: true }, ...this?.cities];
    // },
    rules() {
      return [isRequired, charLimit(5)];
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

  &__button {
    margin-left: auto;
  }
}
.form__input {
  margin-right: auto;
}
</style>
