<template>
  <form @submit.prevent="handelSubmit" class="form">
    <CustomSelect class="form__select" :items="cities" v-model="filters.city" />
    <CustomSelect
      class="form__select"
      :items="[
        { value: '', label: 'By rating', selected: true },
        1,
        2,
        3,
        4,
        5,
      ]"
      v-model="filters.rating"
    />
    <CloseButton class="form__close-btn" />
    <CustomInput
      class="form__input"
      name="name"
      type="number"
      v-model="filters.price"
      :placeholder="'Price, from'"
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
import { handleQueryString } from '../../utils/handleQueryString';

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
      filters: {},
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
  watch: {
    $route: 'handleCurrentFilter',
  },
  computed: {
    rules() {
      return [isRequired, charLimit(5)];
    },
  },
  methods: {
    handleCurrentFilter() {
      if (this.$route.query) {
        this.filters.city = this.$route.query.city;
        this.filters.price = this.$route.query.price;
        this.filters.rating = this.$route.query.rating;
      }
    },
    handelSubmit() {
      this.$router.push({
        path: '',
        query: handleQueryString(this.filters),
      });

      this.$emit('data', {
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

  @include max-width(1199px) {
    flex-direction: column;
    position: absolute;
    width: 280px;
    padding: 55px 20px;
    top: -1px;
    right:-1px;
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

  @include desktop {
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
