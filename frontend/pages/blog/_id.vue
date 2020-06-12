<template>
  <v-sheet>
    <h1>{{ filteredBlog[0].title }}</h1>
    <p>{{ filteredBlog[0].body }}</p>
  </v-sheet>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      filteredBlog: 'blogs/filteredBlog'
    })
  },
  mounted() {
    this.$store.commit('blogs/setFilter', this.$route.params.id)
  }
}
</script>
