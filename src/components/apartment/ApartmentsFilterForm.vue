<template>
  <form @submit.prevent="handelSubmit" class="form">
    <CustomSelect class="form__select" :items="cities" v-model="city" />
    <CloseButton class="form__close-btn" />
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
import CloseButton from '../CloseButton.vue';
export default {
  name: 'ApartmentsFilterForm',
  components: {
    CustomSelect,
    CustomInput,
    Button,
    CloseButton,
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
    rules() {
      return [isRequired, charLimit(5)];
    },
  },
  methods: {
    handelSubmit() {
      this.$emit('data', {
        price: this.price,
        city: this.city,
        isOpen: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';

.form {
  display: flex;

  @include max-width(767px) {
    flex-direction: column;
    position: absolute;
    width: 280px;
    padding: 55px 20px;
    top: 75px;
    right: 15px;
    border: 2px solid $main-color;
    background-color: $white-color;
    z-index: 100;

    &__select {
      width: 100%;
      margin-bottom: 30px;
    }

    &__input {
      width: 100%;
      margin-bottom: 30px;
    }
    &__button {
      width: 100%;
    }
    &__close-btn {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 40px;
      height: 40px;
    }

    &.opened {
      opacity: 1;
    }
  }

  @include tablet {
    margin-bottom: 40px;

    &__select {
      width: 220px;
      margin-right: 30px;
    }

    &__button {
      margin-left: auto;
    }
    &__input {
      width: 220px;
      margin-right: auto;
    }
    &__button {
      width: 220px;
    }
  }
}
</style>
