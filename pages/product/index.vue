<template>
  <section class="section">
    <product-list/>
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