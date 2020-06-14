<template>
  <v-app-bar app fixed>
    <nuxt-link to="/">
      <h1 class="display-2 white--text">khanr</h1>
    </nuxt-link>
    <v-spacer></v-spacer>
    <nuxt-link 
          v-for="{ name, route, color } in links"
      :key="name"
      class="ma-2" 
      :to="route">
      <v-btn 
        :class="color">{{ name }}</v-btn>
    </nuxt-link>
    <SignIn class="ma-2"/>
    <Logout class="ma-2" />
    <Register class="ma-2"/>
  </v-app-bar>
</template>

<script>
import SignIn from '@/components/SignIn'
import Register from '@/components/Register'
import Logout from '@/components/Logout'
export default {
  components: {
    SignIn,
    Register,
    Logout
  }, 
  data() {
    return {
      links: [ 
        { name: 'Home', route: '/', color: 'red'},
        { name: 'Portfolio', route: '/portfolio', color: 'green'  },
        { name: 'Blog', route: '/blog', color: 'yellow' },
        { name: 'About', route: '/about', color: 'green' },
        { name: 'Contact', route: '/contact', color: 'green'  },
      ]
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

