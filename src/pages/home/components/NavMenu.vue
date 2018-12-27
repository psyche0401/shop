<template>
  <!-- <span>菜单</span> -->
  <div>
    <Menu theme="dark" width="auto" accordion
          @on-select="handleSelect" @on-open-change="handleOpenChange">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-navigate"></Icon>
          导航一
        </template>
        <MenuItem name="1-1">选项 1</MenuItem>
        <MenuItem name="1-2">选项 2</MenuItem>
        <MenuItem name="1-3">选项 3</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          导航二
        </template>
        <MenuItem name="2-1">选项 1</MenuItem>
        <MenuItem name="2-2">选项 2</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          <span>导航三</span>
        </template>
        <MenuItem name="3-1">选项 1</MenuItem>
        <MenuItem name="3-2">选项 2</MenuItem>
      </Submenu>
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

