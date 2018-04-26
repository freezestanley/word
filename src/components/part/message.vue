<template>
  <div class="message">
    <div class="title">{{title}}</div>
    <p class="txt">{{des}}</p>
  </div>
</template>
<script>
export default {
  name: 'msg',
  data () {
    return {
      status: false
    }
  },
  props: ['title', 'des'],
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.message{
  margin: rem-calc(10);
  border-bottom: 1px dotted #ccc;
  .title{
    color:#333;
    font-size:rem-calc(16);
    margin-bottom: rem-calc(5);
  }
  .txt {
    color:#ddd;
    font-size:rem-calc(14);
    margin-bottom: rem-calc(10);
  }
}
</style>
