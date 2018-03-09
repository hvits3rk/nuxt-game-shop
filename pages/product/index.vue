<template>
  <section class="section">
    <div class="container">
      <product-list/>
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
};
</script>