<template>
  <div id="app">
    <router-view/>
    <FooterGuide/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    }
  }
</script>
<style scoped>
</style>

