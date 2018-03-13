<template>
  <section class="section">
    <div class="container">
      <product-list :gameList="loadedGames"/>
    </div>
  </section>
</template>

<script>
import ProductList from '@/components/products/ProductList';

export default {
  name: 'ProductsPage',
  components: {
    ProductList,
  },
  computed: {
    loadedGames() {
      return this.$store.getters.loadedGames;
    },
  },
};
</script>