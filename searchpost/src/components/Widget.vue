<template>
  <!-- <div class="widget" style='width:300px; margin:auto'>
      <div class="row">
        <div class="input-field col s6">
          <input  id="first_name2" type="text" class="validate">
          <label class="active" for="first_name2">Farmers Name</label>
        </div>
      </div>
    <div id="test-slider"></div>
    <h1>dfsadf</h1>
    <input v-model='farma'></input>
    <h1>{{msg}}</h1>
  </div> -->
  <div class='widget'>
    {{msg}}
  </div>
</template>

<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script> -->

<script>
  // var slider = document.getElementById('test-slider');
  // noUiSlider.create(slider, {
  //  start: [20, 80],
  //  connect: true,
  //  step: 1,
  //  orientation: 'horizontal', // 'horizontal' or 'vertical'
  //  range: {
  //    'min': 0,
  //    'max': 100
  //  },
  //  format: wNumb({
  //    decimals: 0
  //  })
  // });

export default {
  name: 'Widget',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<style scoped>

</style>
