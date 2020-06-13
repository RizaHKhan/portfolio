<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Sign In</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline dark lighten-2" primary-title
          >Add a New Project</v-card-title
        >
        <v-card-actions>
          <v-form ref="form" lazy-validation @submit.prevent="signIn">
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="Password"
              required
            ></v-text-field>
            <input type="submit" value="Sign In" />
          </v-form>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    email: '',
    password: ''
  }),
  methods: {
    signIn() {
      this.$store.dispatch('user/signIn', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
