<template>
  <div>
    <Layout style="height: 100vh;">
      <Sider hide-trigger collapsible>
        <Menu></Menu>
      </Sider>
      <Layout>
        <Header class="menu-header">
          <img src="../../assets/images/timg.jpg"  class="header-logo">
        </Header>
        <Content>
          <NavBread></NavBread>

          <Card :style="{margin: '10px', height: $store.state.windHeight - 115 + 'px'}">
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
  .menu-header {
    background-color: #fff;

    .header-logo {
      width: 50px;
      height: 50px;
      margin: 7px;
    }
  }
</style>
