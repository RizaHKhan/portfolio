<template>
  <div>
    <v-row>
      <v-col cols="12" md="12" lg="6">
        <Card
          v-for="{ title, body, id } in blogs"
          :key="id"
          :title="title"
          :body="body"
          :id="id"
        />
      </v-col>
      <v-col cols="12" md="12" lg="6">1</v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '@/components/Blog'
export default {
  components: {
    Card
  },
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
