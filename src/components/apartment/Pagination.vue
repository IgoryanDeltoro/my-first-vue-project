<template>
  <div class="pagination-box">
    <vue-awesome-paginate
      v-show="getApartmentsCount > getItemsLimit"
      :total-items="getApartmentsCount"
      :items-per-page="getItemsLimit"
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
import { handleQueryString } from '../../utils/handleQueryString';

export default {
  name: 'Pagination',
  data() {
    return {
      currentPage: 1,
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
    ...mapGetters('booking', ['getApartmentsCount', 'getItemsLimit']),
  },
  methods: {
    handleCurrentPage() {
      if (this.$route.query?.page)
        this.currentPage = Number(this.$route.query.page);
    },
    onClickHandler() {
      const queryStr = this.$route.query;
      const queries = handleQueryString(this.$route.query);

      this.$router.push({
        path: '',
        query: { ...queries, page: this.currentPage },
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
