<template>
  <div>
    <h1>Portfolios</h1>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
      v-for="{ id, title, description, imagepreview } in portfolios"
      :key="id"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1">{{
            title
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey">{{
          imagepreview
        }}</v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn text class="red">
          <nuxt-link :to="/portfolio/ + id" class="white--text">View</nuxt-link>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      portfolios: 'portfolios/getPortfolios'
    })
  }
}
</script>
