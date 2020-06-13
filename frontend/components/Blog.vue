<template>
  <v-card class="ma-3 pa-3">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ bodyTruncated }}</v-card-text>
    <v-card-actions>
      <v-btn :to="'blog/' + id" color="blue">Read</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    bodyTruncated() {
      return this.body.substring(0, 200).concat('...')
    }
  }
}
</script>
