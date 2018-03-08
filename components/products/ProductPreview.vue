<template>
  <nuxt-link :to="`product/${id}`">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img
            :src="thumbnail"
            alt="Game preview">
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-4">{{ title }}</p>
        <div class="content">{{ previewText }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'product-preview',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
};
</script>
