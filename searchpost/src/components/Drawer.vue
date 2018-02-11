<template>
  <div style='display:flex; flex-direction:column'>
    <div>
      <div style='width:60%; margin:auto'>
          <h3 >Available Offers</h3>
          <Tools></Tools>
      </div>
    </div>
    <div class="drawer" style='display:flex;overflow-x: scroll'>
      <Post v-for='(post,key) in offers.slice(0,250)' :key='key'
      :name='post.name'
      :measurements='post.measurements'
      :type='post.type'
      :farmer='post.farmer'
      :price_per_unit='post.price_per_unit'
      :unit_size='post.unit_size'
      :number_of_units='post.number_of_units'
      :stage='post.stage'
      :image='post.image'
      :effects='post.effects'
      ></Post>
    </div>
</div>
</template>

<script>
// import animated from 'animate.css'
import offers from '../assets/strains.json'
import Post from './Post.vue'
import Tools from './Tools.vue'

export default {
  name: 'Drawer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      offers: []
    }
  },
  components: {
    Post,
    Tools
  },
  methods: {
    loaddata: function () {
      this.offers = offers
    }
  },
  mounted: function () {
    this.loaddata()
  }
}
</script>

<style scoped>
.drawer::-webkit-scrollbar {
  display: none;
}
</style>
