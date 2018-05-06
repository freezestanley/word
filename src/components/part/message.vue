<template>
  <div class="message">
    <div class="title">{{title}}</div>
    <div class="reply" v-if="replycomment">
      <div class="replycomment">{{replycomment}}</div>
      <div class="replynick">{{replynick}}</div>
    </div>
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
  props: ['title', 'des', 'replycomment', 'replynick'],
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.message{
  margin: rem-calc(10);
  border-bottom: 1px dotted #ccc;
  .reply{
    background: #eee;
    border:1px solid #ccc;
    border-radius: rem-calc(5);
    margin: rem-calc(10px 0 10px 20px);
    padding: rem-calc(10px);
    .replycomment{
      font-size:rem-calc(16);
      font-weight: normal;
      color: #333;
    }
    .replynick{
      text-align: right;
    }
  }
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
