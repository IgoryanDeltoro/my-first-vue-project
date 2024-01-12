<template>
  <main>
    <SectionWithHeaderFooterSpaces>
      <Container>
        <Loading v-if="isLoading" />
        <div v-else class="apartment-page">
          <ApartmentMainInfo :apartment="apartment" :fetcher="fetcher" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              class="apartment-page__owner"
              :owner="apartment.owner"
            />
            <Reviews
              class="apartment-page__reviews"
              :reviews="apartment.reviews"
            />
          </div>
        </div>
        <Modal
          @closeModal="closeModal"
          @subMit="handleModalSubmit"
          v-show="isModalOpened"
        >
          <Datepicker
            v-if="identifier"
            class="apartment-page__date-picker"
            text="Please, select a date to book this apartment"
          />
          <FeedBack v-else="identifier" :rating="rating" :fetcher="fetcher" />
        </Modal>
      </Container>
    </SectionWithHeaderFooterSpaces>
  </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
import ApartmentMainInfo from '../components/apartment/ApartmentMainInfo.vue';
import ApartmentsOwner from '../components/apartment/ApartmentsOwner.vue';
import Reviews from '../components/reviews/Reviews.vue';
import Loading from '../components/loaders/Loading.vue';
import SectionWithHeaderFooterSpaces from '../components/shared/SectionWithHeader&FooterSpaces.vue';
import FeedBack from '../components/reviews/FeedBack.vue';
import Modal from '../components/Modal.vue';
import Datepicker from '../components/Datepicker.vue';

import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentMainInfo,
    ApartmentsOwner,
    Reviews,
    Loading,
    Modal,
    Datepicker,
    FeedBack,
    SectionWithHeaderFooterSpaces,
  },
  data() {
    return {
      isModalOpened: false,
      rating: 0,
      identifier: false,
      fetcher: null,
    };
  },
  provide() {
    return {
      div: this,
    };
  },
  computed: {
    ...mapState('booking', ['apartment', 'isLoading']),
    ...mapGetters('booking', ['isPickedDate']),
  },
  methods: {
    ...mapActions('booking', ['getApartmentById']),

    showModal(value, rating) {
      if (rating) {
        this.isModalOpened = value; 
        this.rating = rating;
      } else {
        this.isModalOpened = true;
        this.identifier = true;
      }
    },
    closeModal() {
      this.isModalOpened = false;
      this.identifier = false;
    },
    handleModalSubmit() {
      if (this.identifier) {
        if (this.isPickedDate) {
          this.fetcher = 'makeBooking';
          this.isModalOpened = false;
          this.identifier = false;
        }
      } else {
        this.fetcher = 'leaveFeedBack';
        this.isModalOpened = false;
      }
    },
  },

  async created() {
    try {
      const { id } = this.$route.params;
      await this.getApartmentById(id);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
.apartment-page {
  display: flex;
  align-items: flex-start;

  @include max-width($desktop) {
    flex-direction: column;
    gap: 30px;
  }

  &__additional-info {
    flex-grow: 0;
    flex-shrink: 1;

    @include max-width(767px) {
      max-width: 350px;
    }

    @include min-max-width(768px, 1199px) {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    @include desktop {
      margin-left: 30px;
      max-width: 350px;
    }
  }

  &__owner {
    margin-bottom: 20px;

    @include min-max-width(768px, 1199px) {
      margin-bottom: 0;
      width: 350px;
    }
  }

  &__reviews {
    @include min-max-width(768px, 1199px) {
      width: 350px;
    }
  }
  &__date-picker {
    width: 100%;
  }
}
</style>
