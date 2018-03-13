<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">ЛУЧШИЕ ПРЕДЛОЖЕНИЯ</h1>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <product-list :gameList="loadedGames"/>
      </div>
    </section>
  </div>
</template>

<script>
import ProductList from '@/components/products/ProductList';

export default {
  name: 'HomePage',
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
