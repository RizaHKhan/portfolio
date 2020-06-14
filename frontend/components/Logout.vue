<template>

  <v-btn class="red">Logout</v-btn>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  } 
}
</script>

<style lang="scss">

</style>
