<template>
  <main class="orders-page">
    <SectionWithHeaderFooterSpaces>
      <Container>
        <Loading v-if="isLoading" />
        <template v-else>
          <p v-if="!orders.length" class="orders-page__info">
            Oops! There are no orders!
          </p>
          <section v-else class="orders-page__content">
            <MainTitle class="orders-page__title">Orders</MainTitle>
            <OrdersList :orders="orders" />
          </section>
        </template>
      </Container>
    </SectionWithHeaderFooterSpaces>
  </main>
</template>

<script>
import Loading from '../components/loaders/Loading.vue';
import OrdersList from '../components/my-orders/OrdersList.vue';
import Container from '../components/shared/Container.vue';
import MainTitle from '../components/shared/MainTitle.vue';
import SectionWithHeaderFooterSpaces from '../components/shared/SectionWithHeader&FooterSpaces.vue';
import { getOrders } from '../services/order.service';
export default {
  name: 'MyOrders',
  components: {
    SectionWithHeaderFooterSpaces,
    Container,
    MainTitle,
    OrdersList,
    Loading,
  },
  data() {
    return {
      orders: [],
      isLoading: false,
    };
  },
  async created() {
    try {
      this.isLoading = true;
      const { data } = await getOrders();
      this.orders = data;
    } catch (error) {
      this.$notify({
        type: 'error',
        title: 'The page has error during loading',
        text: error.message,
      });
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.orders-page {
  &__content {
    max-width: 730px;
    margin-left: auto;
    margin-right: auto;
  }
  &__title {
    margin-bottom: 20px;
  }
  &__info {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
}
</style>
