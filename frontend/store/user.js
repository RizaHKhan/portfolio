export const state = () => ({
  logged_in: false,
  user: {}
})

export const getters = {}

export const mutations = {
  ADJUST_STATUS: (state, status) => {
    state.logged_in = status
    console.log(state.logged_in)
  },
  UPDATE_USER: (state, user) => {
    state.user = user
    console.log(user)
  },
  LOGOUT: (state) => {
    state.logged_in = false
    state.user = {}
  }
}

export const actions = {
  async register({ commit }, credentials) {
    try {
      const response = await this.$axios.post('api/registrations',
        credentials, {
        withCredentials: true
      })
      commit('ADJUST_STATUS', response.data.logged_in)
      commit('UPDATE_USER', response.data.user)
    } catch (e) {
      console.log(e)
    }
  },
  async login({ commit }, credentials) {
    try {
      const response = await this.$axios.post('api/sessions', credentials)
      commit('ADJUST_STATUS', response.data.logged_in)
      commit('UPDATE_USER', response.data.user)
    } catch (e) {
      console.log(e)
    }
  },
  async isLogged_in({ commit }) {
    try {
      const response = await this.$axios.get('api/logged_in', { withCredentials: true })
      console.log(response)
      commit('ADJUST_STATUS', response.data.logged_in)
    } catch(e) {
      console.log(e)
    }
  },
  async logout({ commit }) {
    try {
      await this.$axios.delete('api/logout', { withCredentials: true })
      commit('LOGOUT')
    } catch(e) {
      console.log(e)
    }
  }
}
