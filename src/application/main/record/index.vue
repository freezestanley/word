<template>
  <div class="index content">
    <div class="title">毒物数据库</div>
    <!-- 毒物数据库 -->
    <!-- <img :src="banner" class="banner"> -->
    <img src="~@/assets/image/ban.png" class="banner">
    <div class="content_fix">
      <search @SearchEvent="searchEvent" :title="'Cas号'" :type="'1'" ></search>
      <search @SearchEvent="searchEvent" :title="'毒物名称'" :type="'2'" ></search>
      <search @SearchEvent="searchEvent" :title="'全文检索'" :type="'3'" ></search>
    </div>
    
    <div>
      
    </div>
    <div class="content_scroll">
      <ul class="newlist">
        <li v-for="(item, index) of list" :key="index" @click="clickHandler(item.categoryEn)">
          <!-- <img src="~@/assets/image/huaxue1.jpg" style="width: 100%;"/> -->
          <p :style="{backgroundImage: 'url(' + item.pictPath + ')'}">{{item.category}}</p>
          <p>{{item.categoryDesc}}</p>
        </li>
      </ul>
    </div>
    <menubar></menubar>
  </div>
</template>

<script>
import { ICATEGORY, IBANNER } from '@/api'
import search from '@/components/search'
import menubar from '@/components/menu'
export default {
  name: 'index',
  components: {
    search, menubar
  },
  data () {
    return {
      list: [],
      banner: '/static/img/ban.png'
    }
  },
  created: function () {
    this.getData()
    this.getBanner()
  },
  methods: {
    clickHandler (id) {
      this.$router.push({path: "/list", query: {category: id}})
    },
    getData: function () {
      this.axios.post(ICATEGORY).then(response => {
        if (response.data.status) {
          this.list = response.data.data
        }
      }).catch(err => {
        throw new Error(err)
      })
    },
    getBanner () {
      this.axios.post(IBANNER).then(response => {
        if (response.data.status) {
          this.banner = response.data.data.length > 0 ? response.data.data[0].base64Pict : '/static/img/ban.png'
        }
      }).catch(err => {
        throw new Error(err)
      })
    },
    searchEvent (obj) {
      this.$router.push({path: '/search', query: {type: obj.type, key: obj.key}})
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  &.content{
    display:flex;
    flex-direction: column;
    overflow: hidden;
    width:100%;
    height:100%;
    .content_fix{
      background:#f1f1f1;
      padding: rem-calc(5 0);
      border-bottom: rem-calc(5) solid #005eaa;
    }
    .title{
      background: #005eaa;
      text-align: center;
      height: rem-calc(50);
      line-height: rem-calc(50);
      vertical-align: middle;
      font-size: rem-calc(30);
      color: #fff;
    }
    .content_scroll{
      flex:1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  & .banner {
    width: 100%;
    height: rem-calc(192);
    overflow: hidden;
  }
  & .newlist{
    margin: rem-calc(0 15);
    & > li{
      border-left: rem-calc(3) solid #739cd2;
      border-radius: rem-calc(3 0 0 3);
      padding: rem-calc(10 10 20 10);
      background:#f1f1f1;
      margin: 10px 0;
      // &:before{
      //   content: " ";
        
      // }
      & > p:first-of-type{
        background-repeat: no-repeat;
        background-size: 100%;
        // background-image: url('~@/assets/image/huaxue1.jpg');
        height: rem-calc(100);
        display:block;
        color:#fff;
        font-size: rem-calc(20);
        text-indent: rem-calc(20);
        line-height: rem-calc(100);
        vertical-align: middle;
        margin-bottom: rem-calc(10);
      }
      & > p:nth-child(2){
        line-height: rem-calc(25px);
      }
      &:nth-child(1){
        border-left: rem-calc(3) solid #27586d;
      }
      &:nth-child(2){
        border-left: rem-calc(3) solid #7f6622;
      }
      &:nth-child(3){
        border-left: rem-calc(3) solid #4ebaaa;
      }
      &:nth-child(4){
        border-left: rem-calc(3) solid #4b830d;
      }
      &:nth-child(5){
        border-left: rem-calc(3) solid #ad907b;
      }
      &:nth-child(6){
        border-left: rem-calc(3) solid #af4448;
      }
      // &:nth-child(1) > p:first-of-type{
      //   background-image: url('~@/assets/image/huaxue1.jpg');
      // }
      // &:nth-child(2) > p:first-of-type{
      //   background-image: url('~@/assets/image/yaowu.jpg');
      // }
      // &:nth-child(3) > p:first-of-type{
      //   background-image: url('~@/assets/image/nongye.jpg');
      // }
      // &:nth-child(4) > p:first-of-type{
      //   background-image: url('~@/assets/image/zhiwu.jpg');
      // }
      // &:nth-child(5) > p:first-of-type{
      //   background-image: url('~@/assets/image/xijun1.jpg');
      // }
      // &:nth-child(6) > p:first-of-type{
      //   background-image: url('~@/assets/image/dongwu1.jpg');
      // }
    }
  }
  & .list {
    padding: rem-calc(0 15);
    & > li:last-child{
      border:none;
    }
    li {
      position: relative;
      padding: rem-calc(8 15 5 70);
      list-style: none;
      border-bottom: 1px solid #ccc;
      &:before {
        content: ' ';
        display: inline-block;
        position: absolute;
        left: 0;
        top: rem-calc(8);
        width: rem-calc(55);
        height: rem-calc(55);
        background-repeat: no-repeat;
        background-size: contain;
      }
      &:nth-child(1):before {
        background-image: url('~@/assets/image/icon1.png');
      }
      &:nth-child(2):before {
        background-image: url('~@/assets/image/icon2.png');
      }
      &:nth-child(3):before {
        background-image: url('~@/assets/image/icon3.png');
      }
      &:nth-child(4):before {
        background-image: url('~@/assets/image/icon4.png');
      }
      &:nth-child(5):before {
        background-image: url('~@/assets/image/icon5.png');
      }
      &:nth-child(6):before {
        background-image: url('~@/assets/image/icon6.png');
      }
      &:nth-child(7):before {
        background-image: url('~@/assets/image/icon7.png');
      }
      &:nth-child(8):before {
        background-image: url('~@/assets/image/icon8.png');
      }
    }
    p:nth-child(1) {
      margin-bottom: rem-calc(2);
      font-size: rem-calc(20);
      color: #4A90E2;
    }
    p:nth-child(2) {
      font-size: rem-calc(13);
      line-height: rem-calc(20);
      color: #151515;
      height: rem-calc(40);
      overflow:hidden;
      text-overflow:ellipsis;
    }
  }
  .floating {
    position: fixed;
    bottom: rem-calc(30);
    right: rem-calc(15);
    .home,.user{
      display: block;
      width: rem-calc(22);
      height: rem-calc(22);
      border-radius: rem-calc(5);
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
    }
    .home {
      margin-bottom: rem-calc(10);
      background-image: url('~@/assets/image/home.png');
    }
    .user {
      background-image: url('~@/assets/image/user.png');
    }

    // span {
    //   display: block;
    //   width: rem-calc(22);
    //   height: rem-calc(22);
    //   background-color: #D8D8D8;
    //   border: 1px solid #979797;
    //   border-radius: rem-calc(5);
    //   background-repeat: no-repeat;
    //   background-size: 80%;
    //   background-position: center;
    //   &:nth-child(1) {
    //     margin-bottom: rem-calc(10);
    //     background-image: url('~@/assets/image/home.png');
    //   }
    //   &:nth-child(2) {
    //     background-image: url('~@/assets/image/user.png');
    //   }
    // }
  }
}
</style>
