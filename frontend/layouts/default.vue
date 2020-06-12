<template>
  <v-app dark>
    <Navigation />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
export default {
  components: {
    Footer,
    Navigation
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
