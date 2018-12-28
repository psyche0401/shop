<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      window.addEventListener("resize", this.handleHeight);
      this.$store.commit('windHeight', window.innerHeight)
    },
    methods: {
      handleHeight(event) {

        setTimeout(() => {
          this.$store.commit('windHeight', event.target.innerHeight)
        }, 100)
      }
    }
  }
</script>

<style>

</style>
