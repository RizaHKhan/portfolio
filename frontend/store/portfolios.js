export const state = () => ({
  portfolios: [],
  portfolio: {}
})

export const getters = {
  getPortfolios: state => state.portfolios,
  getPortfolio: state => state.portfolio
}

export const mutations = {
  SETUP_PORTOFLIOS: (state, portfolios) => {
    state.portfolios = portfolios
  },
  SETUP_PORTFOLIO: (state, portfolio) => {
    state.portfolio = portfolio
  }
}

export const actions = {
  async getPortfolios({ commit }) {
    try {
      const response = await this.$axios.$get('/api/portfolios')
      commit('SETUP_PORTFOLIOS', response)
    } catch (error) {
      console.log(error)
    }
  },
  async getPortfolio({ commit }, id) {
    try {
      const response = await this.$axios.$get('/api/portfolios/' + id)
      commit('SETUP_PORTFOLIO', response)
    } catch (error) {
      console.log(error)
    }
  },
  async updatePortfolio(portfolio) {
    try {
      const response = await this.$axios.$put('./api/portfolios/' + portfolio.id, portfolio, { withCredentials: true })
    } catch (error) {
      console.log(error)
    }
  }
}
