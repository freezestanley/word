<template>
  <div class="index content">
    <div class="content_fix">
      <search @SearchEvent="searchEvent"></search>
    </div>
    <img :src="banner" class="banner">
    <div class="content_scroll">
      <ul class="list">
        <li v-for="(item, index) of list" :key="index" @click="clickHandler(item.categoryEn)">
          <p>{{item.category}}</p>
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
      banner: '/static/img/banner.png'
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
          this.banner = response.data.data[0].base64Pict
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
