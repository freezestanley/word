<template>
  <div class="partce">

    <h4  :id="id">{{title}}</h4>

    <a :herf = "link" style="line-height: 22px;" v-html="wordCn">
      <!-- {{wordCn}} -->
    </a>
    <a  :herf = "link" v-show="status" style="background:#eee;padding:5px; line-height: 22px;border-radius:10px;" v-html="wordEn">
      <!-- {{wordEn}} -->
    </a>
    <div v-if="imgurl"><img :src="imgurl" class="banner"></div>
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
    link: {
      type: String
    },
    title: {
      default: ''
    },
    imgurl: {
      type: String
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
  a:link{
    text-decoration: underline;
    color:#005eaa;
  }
  .toggleButton{
    text-align: right;
    div {
      border-radius: rem-calc(100);
      color:#000;
      padding:rem-calc(5 10);
      display: block;
      text-align: center;
      font-size:rem-calc(15);
      text-align: right;
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
