<template>
  <div class="partce">
    <h4 :id="id">{{title}}</h4>
    <p>
      {{wordCn}}
    </p>
    <p v-show="status">
      {{wordEn}}
    </p>
    <div v-if="flag" class="toggleButton"  @click="toggleHandle">
      <div>查看原文</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'partce',
  data () {
    return {
      status: false
    }
  },
  props: {
    title: {
      default: ''
    },
    wordCn: {
      type: String
    },
    wordEn: {
      type: String
    },
    id: {
      type: String | Number
    },
    flag: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleHandle () {
      this.status = !this.status
    }
  }
}
</script>
<style lang="scss" scoped>
.partce{
  margin: rem-calc(15);
  font-size: rem-calc(14);
  padding-bottom: rem-calc(5);
  color:#333;
  .toggleButton{
    text-align: right;
    div {
      border-radius: rem-calc(100);
      background: #4A90E2;
      color:#fff;
      padding:rem-calc(5 10);
      display: block;
     float:right;
      font-size:rem-calc(10);
    }
  }
  p{line-height: rem-calc(20);}
  .part_txt{
    margin-bottom: rem-calc(10);
  }
  h4 {
    font-size: rem-calc(14);
    margin-bottom: rem-calc(5);
  }
}
</style>
