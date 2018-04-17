
<template>
<div id="app">
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  width:100%;
  position: relative;
}
* {
font-family: SourceSansPro-Bold, 'Avenir', Helvetica, Arial, sans-serif, PingFangSC-Regular;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-weight: lighter;
}
</style>
<style lang="scss" scoped>
@import '~@/assets/scss/global';
#app {
  height: 100%;
  width: 100%;
  position: relative;
}

</style>

