<template>
  <div >
    <Layout>
      <Sider hide-trigger collapsible style="height: 100vh;">
        <Menu></Menu>
      </Sider>
      <Layout>
        <Header style="background-color: #fff;">


          <img src="../../assets/images/timg.jpg" style="width:50px;height:50px">

        </Header>
        <Content>
          <NavBread></NavBread>

          <Card :style="{margin: '10px', height: $store.state.windHeight - 115 + 'px'}" >
            <router-view></router-view>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import Menu from './components/NavMenu.vue'
  import NavBread from './components/NavBread.vue'

  export default {
    name: 'home',
    components: {
      Menu,
      NavBread
    },
    created() {
      this.$http.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    data() {
      return {}
    },
    methods: {
      getHomeInfoSucc(res) {

        console.log(res)

      }

    }
  }
</script>

<style lang='scss' scoped>
  body,
  html {
    margin: 0 auto;
    padding: 0;
    height: 100%;
    width: 100%;
  }
</style>
