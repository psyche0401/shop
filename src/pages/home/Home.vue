<template>
  <div>
    <div class="pg_header"></div>
    <div class="pg_content">
      <div class="menu">
        <Menu></Menu>
      </div>
      <div class="content">


        <Input/>

        <!-- <div style="width:100%;height:100%;" class="pg-bg-img">
        </div> -->

      </div>
    </div>

  </div>
  <!-- <Content></Content>   
  <Head></Head> -->
</template>

<script>
  import Menu from './components/menu'
  import Head from './components/Head'
  import Content from './components/Content'
  import axios from 'axios'
  export default {
    name: 'home',
    components: {
      Menu,
      Head,
      // Content
    },

    created(){

      this.$http.get('/api/index.json').then(this.getHomeInfoSucc)



    },
    data() {
      return {
        msg: 'test'
      }
    },
    methods:{


         getHomeInfoSucc(res){

            console.log(res)

        }
       
    
    }
  }
</script>

<style lang='scss' scoped>
  @import 'src/assets/styles/varbles.scss';
  body,
  html {
    margin: 0 auto;
    padding: 0;
    height: 100%;
    width: 100%;
    background: $bgColor
  }
  .pg_header {
    height: 48px;
    background-color: #2459a2;
    color: white;
  }
  .pg_content .content {
    position: fixed;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 202px;
    background-color: darkturquoise;
    overflow: auto;
    // .pg-bg-img{

    //   background-image:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545929266396&di=e493202a36a5228815fd36d490777b1b&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fu%2F00%2F00%2F95%2F36%2F55e6b5ff363e6.jpg');
    //   background-repeat:no-repeat;
    //   background-size:100% 100%

    // }

  }
</style>
