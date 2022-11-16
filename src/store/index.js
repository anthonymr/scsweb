import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[],
    categories:[],

    currentCateogry: 'Ver todo',
    sortBy: 'A-Z',
  },
  getters: {
  },
  mutations: {
    setItems(state, items){
      state.items = items;
    },
    setCategories(state, categories){
      state.categories = categories;
    },
    sercurrentCateogry(state, category){
      state.currentCateogry = category.category;
    }
  },
  actions: {
  },
  modules: {
  }
})
