<template>
  <div class="pagination-box">
    <vue-awesome-paginate
      :total-items="20"
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
import { mapState, mapMutations } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'Pagination',
  data() {
    return {
      currentPage: ref(1),
      limitItems: 4,
    };
  },
  methods: {
    ...mapMutations('booking', ['SET_CURRENT_PAGE']),

    async onClickHandler() {
      this.$router.push({
        path: '',
        query: { page: this.currentPage, limit: this.limitItems },
      });
      this.SET_CURRENT_PAGE({ page: this.currentPage, limit: this.limitItems });
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
