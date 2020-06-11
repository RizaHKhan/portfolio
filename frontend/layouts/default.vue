<template>
  <v-app dark>
    <v-app-bar app fixed>
      <h1 class="display-2">khanr</h1>
      <v-spacer></v-spacer>
      <nuxt-link class="ma-2" to="/contact">
        <v-btn>Contact</v-btn>
      </nuxt-link>
      <nuxt-link class="ma-2" to="/portfolio">
        <v-btn>Portfolio</v-btn>
      </nuxt-link>
      <nuxt-link class="ma-2" to="/about">
        <v-btn>About</v-btn>
      </nuxt-link>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span class="ma-auto">
        <strong class="red--text">khanr</strong>
        &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
