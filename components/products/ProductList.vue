<template>
  <div class="columns is-multiline">
    <div
      class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-3-fullhd"
      v-for="game in gameList"
      :key="game.id"
    >
      <product-preview
        :id="game.id"
        :title="game.title"
        :previewText="game.previewText"
        :thumbnail="game.thumbnail"
      />
    </div>
  </div>
</template>

<script>
import ProductPreview from '@/components/products/ProductPreview';

export default {
  name: 'product-list',
  components: {
    ProductPreview,
  },
  props: {
    gameList: {
      type: Array,
      required: true,
    },
  },
};
</script>

