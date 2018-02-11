<template>
  <div>
    <br><br>
    <div class="row">
      <div class="input-field col s6">
        <input v-model='farmername' value="" id="first_name2" type="text" class="validate">
        <label class="active" for="first_name2">Farmer</label>
      </div>
      <div class="input-field col s6">
        <input v-model='postname' value="" id="first_name2" type="text" class="validate">
        <label class="active" for="first_name2">Post Name</label>
      </div>
      <div class="input-field col s6">
        <input v-model='location' value="" id="first_name2" type="text" class="validate">
        <label class="active" for="first_name2">Location</label>
      </div>
      <div class="input-field col s6">
        <select v-model='selectedData' multiple>
          <option value="" disabled>Choose your option</option>
          <option value='a'>family owned</option>
          <option value="old">Old</option>
          <option>hidroponic</option>
          <option>organic</option>
          <option>outdoor</option>
          <option>Small</option>
        </select>
        <label>Harvest Type</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input v-model='minThc' value="" type="number" step='0.05' id="first_name2" class="validate">
        <label class="active" for="first_name2"> Min. THC</label>
      </div>
      <div class="input-field col s6">
        <input v-model='maxThc' value="" id="first_name2" type="number" step='0.05' class="validate">
        <label class="active" for="first_name2"> Max. THC</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input v-model='minRating' value="" type="number" step='0.5' id="first_name2" class="validate">
        <label class="active" for="first_name2"> Min. Rating</label>
      </div>
      <div class="input-field col s6">
        <input v-model='maxRating' value="" id="first_name2" type="number" step='0.5' class="validate">
        <label class="active" for="first_name2"> Max. Rating</label>
      </div>
    </div>
  </div>
</template>

<script>
$(document).ready(function () {
  $('select').material_select()
})
export default {
  name: 'Tools',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selectedData: []
    }
  },
  computed: {
    farmername: {
      get () {
        return this.$store.state.farmer.name
      },
      set (value) {
        this.$store.commit('updateFarmerName', value)
      }
    },
    postname: {
      get () {
        return this.$store.state.name
      },
      set (value) {
        this.$store.commit('updatePostName', value)
      }
    },
    minThc: {
      get () {
        return this.$store.state.measurements.minThc
      },
      set (value) {
        this.$store.commit('updateMinThc', value)
      }
    },
    maxThc: {
      get () {
        return this.$store.state.measurements.maxThc
      },
      set (value) {
        this.$store.commit('updateMaxThc', value)
      }
    },
    minRating: {
      get () {
        return this.$store.state.farmer.minRating
      },
      set (value) {
        this.$store.commit('updateMinRating', value)
      }
    },
    maxRating: {
      get () {
        return this.$store.state.farmer.maxRating
      },
      set (value) {
        this.$store.commit('updateMaxRating', value)
      }
    },
    location: {
      get () {
        return this.$store.state.farmer.location
      },
      set (value) {
        this.$store.commit('updateLocation', value)
      }
    },
    selected: {
      get () {
        return this.$store.state.farmer.type
      },
      set (value) {
        console.log(value)
        this.$store.commit('updateFarmerType', value)
      }
    }
  }
}
</script>

<style scoped>

</style>
