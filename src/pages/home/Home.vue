<template>
  <div >
    
    <div style="width:50%;height:400px;border:thin solid  #ccc;margin:auto">

       {{msg}}

    </div>

  </div>
</template>

<script>

import Menu from './components/menu'



export default {
  name: 'home',
  components:{
    Menu
  },
  data () {
    return {
      msg:'test'
    }
  }
}
</script>

<style lang='scss' scoped>

@import 'src/assets/styles/varbles.scss';

body{

    background: $bgColor
}

</style>
