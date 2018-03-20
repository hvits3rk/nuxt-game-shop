<template>
    <div class="card card-equal-height">
      <nuxt-link :to="`/product/${id}`">
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
      </nuxt-link>
      <footer class="card-footer">
        <a class="card-footer-item">КУПИТЬ</a>
      </footer>
    </div>
  
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

<style scoped>
.card-equal-height {
   display: flex;
   flex-direction: column;
   height: 100%;
}
.card-equal-height .card-footer {
   margin-top: auto;
}
</style>

