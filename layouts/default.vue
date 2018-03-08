<template>
  <div>
    <the-header/>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader';

export default {
  components: {
    TheHeader,
  },
};
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>
