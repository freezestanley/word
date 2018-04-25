<template>
  <section class="article" id="article">
    <h2 class="article_title">{{titleCn}}</h2>
    <div @click="uphandler" class="uptop"></div>
    <div class="article_code">
      <img src="~@/assets/image/banner.png" class="banner">
      <table>
        <tr>
          <td>CAS:</td><td>{{cas}}</td>
        </tr>
        <tr>
          <td>name:</td><td>{{titleEn}}</td>
        </tr>
        <tr>
          <td>名称:</td><td>{{titleCn}}</td>
        </tr>
      </table>
    </div>
    <ul>
      <li v-for="(team, idx) of list" :key="idx">
        <part 
        :title = "team.title"
        :son = "team.son"
        ></part>
      </li>
    </ul>
    <anchor :record="list" @Anchor="anchorHandler"></anchor>
  </section> 
</template>
<script>
import { IARTICLE } from '@/api'
import anchor from '@/components/anchor'
import part from '@/components/part'
export default {
  name: 'article',
  components: {
    anchor, part
  },
  data () {
    return {
      info: null,
      list: [],
      cas: null,
      titleCn: null,
      titleEn: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      // this.axios.post('http://192.168.26.80:3000/home').then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      //   throw new Error(err)
      // })
      this.axios.post(IARTICLE, {id: this.$route.query.id}).then(response => {
        if (response.data.status == 'true') {
          this.list = response.data.data.list
          console.log(this.list)
          this.cas = response.data.data.cas
          this.titleCn = response.data.data.titleCn
          this.titleEn = response.data.data.titleEn
        }
      }).catch(err => {
        throw new Error(err)
      })
    },
    anchorHandler (id) {
      var o = document.getElementById(id).getClientRects()
      this.info = o
      document.getElementById(id).scrollIntoView()
    },
    uphandler () {
      document.getElementById('article').scrollIntoView()
    }
  }
}
</script>
<style lang="scss" scoped>
.article{
  padding: rem-calc(0 0 0);
  .uptop{
    position: fixed;
    bottom: rem-calc(70);
    right: rem-calc(10);
    background:#3BB9E8;
    width: rem-calc(20);
    height: rem-calc(20);
    text-align: center;
    line-height: rem-calc(20);
    vertical-align: middle;
    color:#fff;
    border-radius: rem-calc(5);
    &:before{
      content: " ";
      border: rem-calc(8) solid transparent;
      border-bottom-color:#fff;
      position: relative;
      top:rem-calc(-12);
    }
  }
  .article_title{
    font-size: rem-calc(18);
    text-align: center;
    padding: rem-calc(15 0)
  }
  .article_code{
    margin: rem-calc(0 10);
    height: rem-calc(80);
    .banner{
      width: 45%;
      float: right;
      max-height: rem-calc(80);
    }
    & table {
      width:55%;
      td{
        line-height: rem-calc(20);
      }
      & > tr > td:first-child{
        text-align: right;
        vertical-align: text-top;
      }
      & > tr > td:last-child{
        text-align: left;
        padding-left: rem-calc(10);
        vertical-align: text-top;
      }
    }
  }
}
</style>
