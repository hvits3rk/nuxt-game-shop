<template>
  <section class="hero is-primary">
    <div class="hero-foot">
      <nav class="tabs is-boxed">
        <div class="container">
          <ul>
            <nuxt-link to="/" tag="li" exact><a>ГЛАВНАЯ</a></nuxt-link>
            <nuxt-link to="/product" tag="li"><a>МАГАЗИН</a></nuxt-link>
            <nuxt-link to="/support" tag="li"><a>ПОДДЕРЖКА</a></nuxt-link>
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
