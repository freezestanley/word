<template>
  <div class="menu">
    <div @click="gohome">首页</div>
    <div @click="gouser">用户中心</div>
  </div>
</template>
<script>
export default {
  name: 'menu_bar',
  data () {
    return {
    }
  },
  methods: {
    gohome () {
      this.$router.push({path: "/record"})
    },
    gouser () {
      this.$router.push({path: "/user"})
    }
  }
}
</script>
<style lang="scss" scoped>
.menu{
  width: 100%;
  display: table;
  background:#56CDF9;
  & > div{
    display: table-cell;
    text-align: center;
    line-height: rem-calc(40);
    height: rem-calc(40);
    overflow: hidden;
    color:#fff;
    max-width: 50%;
  }
}
</style>

