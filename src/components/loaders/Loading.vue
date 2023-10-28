<template>
  <h1 class="loading" >Loading...</h1>
</template>

<script>
export default {
    name:'Loading'
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.loading {
  text-align: center;
  font-size: large;
  color: $loading-text-color;
}
</style>
