<template>
  <section class="hero is-primary">
    <div class="hero-foot">
      <nav class="tabs is-boxed">
        <div class="container">
          <ul>
            <nuxt-link to="/" tag="li" exact><a>Home</a></nuxt-link>
            <nuxt-link to="/product" tag="li"><a>Game List</a></nuxt-link>
            <nuxt-link to="/about" tag="li"><a>About</a></nuxt-link>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'the-header',
};
</script>

<style scoped>
</style>

