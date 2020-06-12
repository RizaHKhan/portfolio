export const state = () => ({
  blogs: [],
  filter: ''
})

export const getters = {
  getBlogs: (state) => state.blogs,
  filteredBlog: (state) =>
    state.blogs.filter((blog) => {
      return blog.id === parseInt(state.filter)
    })
}
export const mutations = {
  getBlogs: (state, blogs) => {
    state.blogs = blogs
  },
  setFilter(state, filter) {
    state.filter = filter
  }
}

export const actions = {
  async getBlogs({ commit }) {
    try {
      const response = await this.$axios.$get('/api/')
      commit('getBlogs', response)
    } catch (error) {
      console.log(error)
    }
  }
}
