<template>
  <div >


     <div class="pg_header"></div>
    <div class="pg_content">

       <div class="menu">

          <Menu></Menu>

       </div>
    <div class="content"></div>

    </div>
    <div class="pg_footer"></div>



  </div>


  

<!-- <Content></Content>   
<Head></Head> -->



</template>

<script>

import Menu from './components/menu'
import Head from './components/Head'
import Content from './components/Content'



export default {
  name: 'home',
  components:{

    Menu,
    Head,
    // Content
   
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

body,html{

    margin:0 auto;
    padding:0;
    height: 100%;
    width:100%;
    background: $bgColor
}

    .pg_header{
        height: 48px;
        background-color: #2459a2;
        color: white;
    }

    .pg_content .content{
            position: fixed;
            top: 50px;
            right: 0;
            bottom: 0;
            left: 202px;
            background-color: darkturquoise;
            overflow: auto;
        }


</style>
