<template>
  <div>
    <v-row>
      <v-col cols="12" md="12" lg="6">
        <h1 class="display-4">{{ filteredPortfolios[0].title }}</h1>
        <h1 class="display-2">{{ filteredPortfolios[0].mainimageone }}</h1>
        <p>{{ filteredPortfolios[0].body }}</p>
      </v-col>
      <v-col cols="12" md="12" lg="6">
        <v-carousel>
          <v-carousel-item :src="filteredPortfolios[0].imagemainone" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
          <v-carousel-item :src="filteredPortfolios[0].imagemaintwo" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
          <v-carousel-item :src="filteredPortfolios[0].imagemainthree" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      portfolios: 'portfolios/getPortfolios'
    }),
    filteredPortfolios() {
      return this.portfolios.filter(portfolio => {
        return portfolio.id === parseInt(this.$route.params.id)
      })
    }
  }
}
</script>

