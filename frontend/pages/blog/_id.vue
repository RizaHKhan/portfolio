<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="7">
        <h1>{{ filteredBlog[0].title }}</h1>
        <p>{{ filteredBlog[0].body }}</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="6" lg="3">
        <v-list>
          <v-card>
            <v-list-item>
              <v-list-item-title class="display-1">Blogs:</v-list-item-title>
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
        return blog.id !== parseInt(this.$route.params.id)
      })
    }
  }
}
</script>
