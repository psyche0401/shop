<template>
  <!-- <span>菜单</span> -->
  <div>
    <Menu theme="dark" width="auto" accordion
          @on-select="handleSelect" @on-open-change="handleOpenChange">
      <template v-for="items of $router.options.routes[0].children">
        <MenuItem v-if="!items.children" :name="items.name" :to="'/' + items.path">
          <Icon :type="items.icon"></Icon><span>{{items.name}}</span>
        </MenuItem>
        <Submenu :name="items.name" v-else>
          <template slot="title">
            <Icon :type="items.icon"></Icon><span>{{items.name}}</span>
          </template>
          <MenuItem v-for="item of items.children" :name="item.name" :to="'/' + items.path + '/' + item.path">
            <Icon :type="item.icon"></Icon><span>{{item.name}}</span>
          </MenuItem>
        </Submenu>
      </template>
    </Menu>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    methods: {
      handleSelect (key) {
        this.$store.commit("subHead", key)
      },
      handleOpenChange (key) {
        if (key.length > 0) {
          this.$store.commit('mainHead', key[0]);
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  /*@import 'src/assets/styles/varbles.scss';*/
</style>

