export const state = () => ({
  blogs: [
    { title: 'somet title', body: 'some body' },
    { title: 'somet other title', body: 'some body' },
    { title: 'somet  last title', body: 'some body' }
  ]
})

export const getters = {
  getBlogs: (state) => state.blogs
}
export const mutations = {
  getBlogs: (state, blogs) => {
    state.blogs = blogs
  }
}

export const actions = {
  async getBlogs({ commit }) {
    const response = await this.$axios.$get()
    console.log(response)
  }
}
