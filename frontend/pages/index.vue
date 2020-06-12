<template>
  <div>
    <ul>
      <li v-for="{ title, body } in blogs" :key="title">
        <h1>{{ title }}</h1>
        <p>{{ body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      blogs: 'blogs/getBlogs'
    })
  },
  mounted() {
    this.$store.dispatch('blogs/getBlogs')
  }
}
</script>
