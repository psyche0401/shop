<template>
  <div>
    <Breadcrumb style="margin: 10px 0 0 20px;">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem v-if="$store.state.header.mainHead">{{this.$store.state.header.mainHead}}</BreadcrumbItem>
      <BreadcrumbItem v-if="$store.state.header.subHead">{{this.$store.state.header.subHead}}</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "NavBread"
  }
</script>

<style scoped>

</style>
