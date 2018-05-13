<template>
  <div class="axabar">
    <div><slot name="left"></slot></div>
    <div><slot></slot></div>
    <div><slot name="right"></slot></div>
  </div>
</template>
<script>
  export default {
    name: 'axabar',
    data () {
      return {
      }
    },
    props: {
    },
    methods: {
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss" scoped>
@import '~@/assets/scss/function';
@import '~@/assets/scss/mixin';
.axabar{
  display: flex;
  flex-direction: row;
  &>div{
    height: rem-calc(45);
    line-height: rem-calc(45);
    vertical-align: middle;
    background: #124888;
    color:#fff;
    &:first-child{
      flex:1;
      padding-left: rem-calc(10);
    }
    &:nth-child(2){
      flex:1;
      text-align: center;
    }
    &:last-child{
      flex:1;
      text-align: right;
      padding-right: rem-calc(10);
    }
  }
}
</style>
