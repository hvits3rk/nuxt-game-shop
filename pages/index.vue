<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">ЛУЧШИЕ ПРЕДЛОЖЕНИЯ</h1>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <product-list :gameList="featuredGames"/>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="tabs is-centered">
          <ul>
            <li v-for="(genre, key) in genres" :key="key" @click="selectGenre(key)"><a>{{ genre }}</a></li>
          </ul>
        </div>
        <product-list :gameList="filteredGames"/>
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
  data() {
    return {
      curFilter: 'all',
    };
  },
  computed: {
    filteredGames() {
      /* eslint-disable prefer-destructuring */
      const loadedGames = this.$store.getters.loadedGames;
      if (this.curFilter === 'all') return loadedGames;
      return loadedGames.filter(game => game.genre.includes(this.curFilter));
    },
    featuredGames() {
      return this.$store.getters.loadedGames.filter(game => game.isFeatured);
    },
    genres() {
      return this.$store.getters.genres;
    },
  },
  methods: {
    selectGenre(genre) {
      this.curFilter = genre;
    },
  },
};
</script>
