// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    'farmer': {
      'minRating': 0,
      'maxRating': 5,
      'type': [],
      'name': '',
      'location': ''
    },
    'name': '',
    'type': '',
    'stage': '',
    'minPricePerUnit': 0,
    'maxPricePerUnit': 1000000,
    'unitSize': '',
    'minNumberOfUnits': 0,
    'maxNumberOfUnits': 100000,
    'effects': {
      'positive': [],
      'negative': [],
      'medical': []
    },
    'measurements': {
      'minThc': 0,
      'maxThc': 1
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    updateFarmerName (state, name) {
      state.farmer.name = name
    },
    updatePostName (state, name) {
      state.name = name
    },
    updateMinThc (state, value) {
      state.measurements.minThc = value
    },
    updateMaxThc (state, value) {
      state.measurements.maxThc = value
    },
    updateMinRating (state, value) {
      state.farmer.minRating = value
    },
    updateMaxRating (state, value) {
      state.farmer.maxRating = value
    },
    updateLocation (state, value) {
      state.farmer.location = value
    },
    updateFarmerType (state, value) {
      state.farmer.type = value
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
