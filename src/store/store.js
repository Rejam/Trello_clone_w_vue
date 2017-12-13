import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lists: [
      {
        listName: 'Ideas',
        items: ['item 1', 'item 2', 'item 3']
      },
      {
        listName: 'Complete',
        items: ['item 4', 'item 5', 'item 6']
      }
    ]
  },
  mutations: {
    moveCard(state, payload) {
      state.lists[payload.index].items = payload.value
    },
    moveList(state, payload) {
      state.lists = payload
    },
    addNewList(state, value) {
      state.lists.push({
        listName: value,
        items: []
      })
    },
    addNewCard(state, payload) {
      state.lists[payload.index].items.push(payload.newCardName)
    }
  }
})

export default store
