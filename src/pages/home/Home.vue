<template>
  <div>
    <Layout>
      <Sider hide-trigger collapsible style="height: 100vh;">
        <Menu></Menu>
      </Sider>
      <Layout>
        <Header style="background-color: #fff;">


          <img src="../../assets/images/timg.jpg" style="width:50px;height:50px"></img>

        </Header>
        <Content>
          <Breadcrumb style="margin: 10px 0 0 20px;">
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem>{{this.$store.state.header.mainHead}}</BreadcrumbItem>
            <BreadcrumbItem v-if="$store.state.header.subHead">{{this.$store.state.header.subHead}}</BreadcrumbItem>
          </Breadcrumb>

          <Card :style="{margin: '10px', height: $store.state.windHeight - 115 + 'px'}">
            <router-view></router-view>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import Menu from './components/NavMenu'
  import Content from './components/Content'
  export default {
    name: 'home',
    components: {
      Menu,
    },

    created(){

      this.$http.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    data() {
      return {}
    },
    methods:{


         getHomeInfoSucc(res){

            console.log(res)

        }
      
    }
  }
</script>

<style lang='scss' scoped>
  /*@import 'src/assets/styles/varbles.scss';*/
  body,
  html {
    margin: 0 auto;
    padding: 0;
    height: 100%;
    width: 100%;
    /*background: $bgColor*/
  }
</style>
