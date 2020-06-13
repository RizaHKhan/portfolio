export const state = () => ({
  portfolios: [],
  filter: ''
})

export const getters = {
  getPortfolios: state => state.portfolios
}
export const mutations = {
  GET_PORTFOLIOS: (state, portfolios) => {
    state.portfolios = portfolios
  }
}

export const actions = {
  async getPortfolios({ commit }) {
    try {
      const response = await this.$axios.$get('/api/portfolios')
      commit('GET_PORTFOLIOS', response)
    } catch (error) {
      console.log(error)
    }
  }
}
