<template>
  <v-sheet>
    <h1>{{ filteredBlog[0].title }}</h1>
    <p>{{ filteredBlog[0].body }}</p>
  </v-sheet>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  asyncData({ params, store }) {
    store.commit('blogs/SET_FILTER', params.id)
  },
  computed: {
    ...mapGetters({
      filteredBlog: 'blogs/filteredBlog'
    })
  }
}
</script>
