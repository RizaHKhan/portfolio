export const state = () => ({
  blogs: [],
  filter: ''
})

export const getters = {
  getBlogs: state => state.blogs,
  filteredBlog: state =>
    state.blogs.filter(blog => {
      return blog.id === state.filter
    })
}
export const mutations = {
  GET_BLOGS: (state, blogs) => {
    state.blogs = blogs
  },
  SET_FILTER(state, filter) {
    state.filter = parseInt(filter)
  }
}

export const actions = {
  async getBlogs({ commit }) {
    try {
      const response = await this.$axios.$get('/api/blogs')
      commit('GET_BLOGS', response)
    } catch (error) {
      console.log(error)
    }
  }
}
