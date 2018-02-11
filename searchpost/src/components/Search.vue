<template>
  <div class="search">
    <Drawer>
    </Drawer>
  </div>
</template>

<script>
import Drawer from './Drawer.vue'
export default {
  name: 'Search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Drawer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
