export const state = () => ({
  list: []
})

export const mutations = {
  add(state, id) {
    state.list.push(id)
  },
  remove(state, id) {
    state.list.splice(state.list.indexOf(id), 1)
  }
}
