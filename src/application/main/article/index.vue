<template>
  <section class="article" id="article">
    <bar>
      <span slot="left" @click="goback">返回</span> 
      <span>{{titleCn}}</span>
    </bar>
    <h2 class="article_title">{{titleCn}}</h2>
    <div @click="uphandler" class="uptop"></div>
    <div class="logobox">
      <img src="~@/assets/image/logo1.png" class="logo">
      <img :src="imgurl" class="tu">
    </div>
    <!-- <div class="article_code">
      <table >
        <tbody>
          <tr data-v-3e25db58="">
            <td data-v-3e25db58="">CAS:</td>
            <td data-v-3e25db58="">{{cas}}</td> 
            <td data-v-3e25db58="" rowspan="3">
              <img :src="imgurl" class="banner">
            </td>
          </tr>  -->
          <!-- <tr data-v-3e25db58="">
            <td data-v-3e25db58="">名称:</td>
            <td data-v-3e25db58="">{{titleCn}}</td>
          </tr>  -->
          <!-- <tr data-v-3e25db58="">
            <td data-v-3e25db58="">英文名:</td>
            <td data-v-3e25db58="">{{titleEn}}</td>
          </tr>
          </tbody>
        </table>
    </div> -->
    <ul>
      <li v-for="(team, idx) of list" :key="idx">
        <part 
        :title = "team.title"
        :son = "team.son"
        ></part>
      </li>
    </ul>

    <div v-show="showMore === '1'">
      <div class="showMore" v-show="!showHidden" @click="showHidden = !showHidden">查看更多</div>

      <ul v-show="showHidden">
        <li v-for="(team, idx) of togglelist" :key="idx">
          <part 
          :title = "team.title"
          :son = "team.son"
          ></part>
        </li>
      </ul>
    </div>


    
    <div class="disscus">
      <div class="disscusTitle">评论</div>
      <textarea class="m_rl10" placeholder="请输入您的评论" v-model="discussTxt"></textarea>
      <wbutton @wClick="publishDisscus" class="m_rl10">发表评论</wbutton>
    </div>
    <ul>
      <li v-for="(item, index) of message" :key="index">
        <msg :title="item.usernick" :des="item.comment" :replynick="item.replyuser" :replycomment="item.replycomment"></msg>
      </li>
    </ul>
    <anchor :record="list" @Anchor="anchorHandler"></anchor>
  </section> 
</template>
<script>
import { IARTICLE, IWRITEMESSAGE, IADDISCUSS, ISEARCH, IARTICLEDETAIL, IARTICLEDLIST } from '@/api'
import anchor from '@/components/anchor'
import part from '@/components/part'
import bar from '@/components/bar'
import wbutton from '@/components/base/w_button'
import msg from '@/components/part/message'

export default {
  name: 'article',
  components: {
    anchor, part, wbutton, msg, bar
  },
  data () {
    return {
      info: null,
      list: [],
      cas: null,
      titleCn: null,
      titleEn: null,
      discussTxt: '',
      message: [
      ],
      imgurl: '',
      togglelist: [],
      extendlist: [],
      showHidden: false,
      showMore: null
    }
  },
  created () {
    this.getData()
    this.getToggleData()
  },
  watch: {
    $route (to, from) {
      this.getData()
      this.getToggleData()
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    getData () {
      // this.axios.post('http://192.168.26.80:3000/home').then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      //   throw new Error(err)
      // })
      // console.log(IARTICLE) // 'http://www.doutu66.com/scdc/content/detail?id=1
      this.axios.get(`${IARTICLEDETAIL}?posionId=${this.$route.query.id}&hidden=0`).then(response => {
        if (response.data.status) {
          this.list = response.data.data.list
          // let togglelist, extendlist
          this.cas = response.data.data.cas
          this.titleCn = response.data.data.titleCn
          this.titleEn = response.data.data.titleEn
          this.imgurl = response.data.data.imgUrl
          this.showMore = response.data.data.showMore
        } else {
          this.$toast.show({'text': `${response.data.errorMsg}`})
        }
      }).catch(err => {
        throw new Error(err)
      })
      this.axios.get(`${IARTICLEDLIST}?posionId=${this.$route.query.id}`, {posionId: this.$route.query.id}).then(response => {
        if (response.data.status) {
          this.message = response.data.data
        } else {
          this.$toast.show({'text': `${response.data.errorMsg}`})
        }
      }).catch(err => {
        throw new Error(err)
      })
    },
    getToggleData () {
      this.axios.get(`${IARTICLEDETAIL}?posionId=${this.$route.query.id}&hidden=1`).then(response => {
        if (response.data.status) {
          this.togglelist = response.data.data.list
        } else {
          this.$toast.show({'text': `${response.data.errorMsg}`})
        }
      }).catch(err => {
        throw new Error(err)
      })
      this.axios.get(`${IARTICLEDLIST}?posionId=${this.$route.query.id}`, {posionId: this.$route.query.id}).then(response => {
        if (response.data.status) {
          this.message = response.data.data
        } else {
          this.$toast.show({'text': `${response.data.errorMsg}`})
        }
      }).catch(err => {
        throw new Error(err)
      })
    },
    publishDisscus () {
      this.axios.post(IADDISCUSS, {posionId: this.$route.query.id, comment: this.discussTxt}).then(response => {
        if (response.data.status) {
          this.$toast.show({'text': `评论成功`})
          this.message = response.data.data
        } else {
          this.$toast.show({'text': `${response.data.errorMsg}`})
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
  .logobox{
    .logo{
    width: rem-calc(80);
    margin: rem-calc(20) rem-calc(20) 0 0; 
    float: right;
    }
    &:after{
      content: ' ';
      clear:both;
      display: block;
    }
    .tu{
      display: block;
      width: 150px;
      margin: 10px;
    }
  }
  
  .showMore{
    font-size: rem-calc(20);
    text-align: center;
 
  }
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
    font-size: rem-calc(15);
    padding: rem-calc(15 0);
    text-indent: rem-calc(10);
    background:#efefef;
    box-shadow: 0 0 5px 0 #ccc;
  }
  .article_code{
    margin: rem-calc(0 10);
    .banner{
      width: 100px;
      height: 100px;
      overflow: hidden;
    }
    & > table {
      width:100%;
      overflow: hidden;
      tr > td{
        vertical-align: top;
        word-break:break-all; 
        word-wrap:break-word;
      }
      tr > td:nth-child(2){
        padding:0 3px;
      }
      tr > td:first-child{
        width: 32px;
      }
      tr > td:last-child{
        width: 100px;
        overflow: hidden;
        
      }
    }
  }
  .disscus{
    margin: rem-calc(10);
    .disscusTitle{
      font-size: rem-calc(16);
      margin-bottom: rem-calc(10);
    }
    & > textarea{
      border-radius: rem-calc(5);
      background:#efefef;
      width:96%;
      padding:2%;
      height: rem-calc(80);
    }
  }
}
</style>
