<template>
  <v-footer app>
    <span class="ma-auto">
      <strong class="red--text">khanr</strong>
      &copy; {{ new Date().getFullYear() }}
    </span>
  </v-footer>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('blogs/getBlogs')
    this.$store.dispatch('portfolios/getPortfolios')
  }
}
</script>
