export const state = () => ({
  user: ''
})

export const getters = {}

export const mutations = {}

export const actions = {
  async register({ commit }, credentials) {
    try {
      const response = await this.$axios.post('api/signup', credentials)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  },
  async login({ commit }, credentials) {
    try {
      const response = await this.$axios.post('api/login', credentials)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
}
