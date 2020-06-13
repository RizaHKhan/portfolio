<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="8">
        <h1>{{ filteredBlog[0].title }}</h1>
        <p>{{ filteredBlog[0].body }}</p>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-list>
          <v-card>
            <v-list-item>
              <v-list-item-title>Blogs:</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-for="{ id, title } in removeCurrentBlogFromList"
              :key="id"
            >
              <v-list-item-content>
                <nuxt-link :to="/blog/ + id">
                  <v-list-item-title class="white--text">{{
                    title
                  }}</v-list-item-title>
                </nuxt-link>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  asyncData({ params, store }) {
    store.commit('blogs/SET_FILTER', params.id)
  },
  computed: {
    ...mapGetters({
      filteredBlog: 'blogs/filteredBlog',
      blogsList: 'blogs/getBlogs'
    }),
    removeCurrentBlogFromList() {
      return this.blogsList.filter(blog => {
        console.log(this.$route.params.id)
        return blog.id !== parseInt(this.$route.params.id)
      })
    }
  }
}
</script>
