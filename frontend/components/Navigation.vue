<template>
  <v-app-bar app fixed>
    <nuxt-link to="/">
      <h1 class="display-2 white--text">khanr</h1>
    </nuxt-link>
    <v-spacer></v-spacer>
    <nuxt-link class="ma-2" to="/contact">
      <v-btn class="blue">Contact</v-btn>
    </nuxt-link>
    <nuxt-link class="ma-2" to="/portfolio">
      <v-btn class="blue">Portfolio</v-btn>
    </nuxt-link>
    <nuxt-link class="ma-2" to="/about">
      <v-btn class="orange">About</v-btn>
    </nuxt-link>
    <nuxt-link class="ma-2" to="/about">
      <v-btn class="red">About</v-btn>
    </nuxt-link>
  </v-app-bar>
</template>

<script>
export default {}
</script>
