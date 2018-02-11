<template>
  <transition name="fade">
  <div class="post" style='margin:0.75rem' v-if="validatePost()">
    <div class="card" style='min-width:20rem'>
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="image">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{{name}}<i class="material-icons right"></i></span>
        <p><a href="#">{{farmer.name}}</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{name}}<i class="material-icons right" style='font-weight:800'>close</i> </span>
        <ul class="collection">
          <li class="collection-item" style='font-weight:800'>{{farmer.name}} {{farmer.rating}}</li>
          <li class="collection-item">type: {{type}}</li>
          <li class="collection-item">THC: {{measurements.thc}}</li>
          <li class="collection-item">stage: {{stage}}</li>
          <li class="collection-item">Alvin</li>
   </ul>
      </div>
    </div>
  </div>
</transition>

</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['name', 'measurements', 'type', 'farmer', 'price_per_unit', 'unit_size', 'number_of_units', 'stage', 'image', 'effects'],
  computed: {

  },
  methods: {
    validatePost: function () {
      console.log(this.$store.state.farmer.name)
      if (this.farmer.name.includes(this.$store.state.farmer.name) && this.name.includes(this.$store.state.name) && this.farmer.location.includes(this.$store.state.farmer.location)) {
        if (this.$store.state.measurements.maxThc > this.measurements.thc && this.$store.state.measurements.minThc < this.measurements.thc) {
          if (this.$store.state.farmer.maxRating > this.farmer.rating && this.$store.state.farmer.minRating < this.farmer.rating) {
            return true
          }
        }
      }
      return false
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
