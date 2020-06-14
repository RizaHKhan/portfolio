<template>
  <v-app-bar app fixed>
    <nuxt-link to="/">
      <h1 class="display-2 white--text">khanr</h1>
    </nuxt-link>
    <v-spacer></v-spacer>
    <Register />
    <nuxt-link class="ma-2" to="/contact">
      <v-btn class="blue">Contact</v-btn>
    </nuxt-link>
    <nuxt-link class="ma-2" to="/portfolio">
      <v-btn class="blue">Portfolio</v-btn>
    </nuxt-link>
    <nuxt-link class="ma-2" to="/about">
      <v-btn class="orange">About</v-btn>
    </nuxt-link>
    <nuxt-link class="ma-2" to="/">
      <v-btn class="red">Home</v-btn>
    </nuxt-link>
    <nuxt-link class="ma-2" to="/blog">
      <v-btn class="red">Blog</v-btn>
    </nuxt-link>
    <SignIn />
    <v-btn class="red" @click.prevent="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
import SignIn from '@/components/SignIn'
import Register from '@/components/Register'
export default {
  components: {
    SignIn,
    Register
  }, 
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>
