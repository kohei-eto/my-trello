import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    addlist (state, payload) {
      state.lists.push({ title: payload.title, cards: [] })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
  },
  actions: {
    addlist (context, payload) {
      context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
  },
  getters: {
  }
})
