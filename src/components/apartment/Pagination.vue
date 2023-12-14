<template>
  <div class="pagination-box">
    <vue-awesome-paginate
      v-show="getApartmentsCount"
      :total-items="getApartmentsCount"
      :items-per-page="4"
      :max-pages-shown="5"
      v-model="currentPage"
      paginate-buttons-class="btn"
      active-page-class="btn-active"
      back-button-class="back-btn"
      next-button-class="next-btn"
      :on-click="onClickHandler"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Pagination',
  data() {
    return {
      currentPage: 1,
      limitItems: 4,
    };
  },
  watch: {
    $route: 'handleCurrentPage',
    getApartmentsCount() {
      this.currentPage = 1;
    },
  },
  created() {
    this.handleCurrentPage();
  },
  computed: {
    ...mapGetters('booking', ['getApartmentsCount']),
  },
  methods: {
    handleCurrentPage() {
      if (this.$route.query?.page)
        this.currentPage = Number(this.$route.query.page);
    },
    onClickHandler() {
      const { city, price } = this.$route.query;

      this.$router.push({
        path: '',
        query: { page: this.currentPage, city, price },
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

.btn {
  height: 40px;
  width: 40px;
  border: none;
  margin-inline: 5px;
  cursor: pointer;
}
.back-btn {
  background-color: $second-bgc;
}
.next-btn {
  background-color: $second-bgc;
}
.btn-active {
  background-color: $main-color;
  color: $white-color;
}
</style>
