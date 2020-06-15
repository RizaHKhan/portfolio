<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field v-model="title" color="purple darken-2" label="Title"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="subtitle" color="blue darken-2" label="Subtitle"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea color="teal" v-model="body">
          <template v-slot:label>
            <div>
              Body
            </div>
          </template>
        </v-textarea>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text class="orange">Cancel</v-btn>
      <v-btn text class="green" @click="updatePortfolio">Accept</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      id: '',
      title: '',
      subtitle: '',
      body: ''
    }
  },
  computed: {
    ...mapGetters({
      portfolio: 'portfolios/getPortfolio'
    })
  },
  methods: {
    setup() {
      this.id = this.portfolio.id
      this.title = this.portfolio.title
      this.subtitle = this.portfolio.subtitle
      this.body = this.portfolio.body
      console.log(this.portfolio)
    },
    updatePortfolio() {
      this.$store.dispatch('portfolios/updatePortfolio', { id: this.id, title: this.title, subtitle: this.subtitle, body: this.body })
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('portfolios/getPortfolio', this.$route.params.id)
      this.setup()
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
