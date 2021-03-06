import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: [
      { name: 'Apple', amount: 0 },
      { name: 'Pear', amount: 0 },
      { name: 'Orange', amount: 0 }
    ]
  },
  mutations: {
    addOne(state, index) {
      state.fruits[index].amount ++
    },
    reset(state) {
      state.fruits.map(item => item.amount = 0)
    }
  },
  actions: {
  },
  modules: {
  }
})
