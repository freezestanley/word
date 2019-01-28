<template>
  <div class="list-box content">
    <!-- <div class="title">毒物数据库</div> -->
    <!-- <search @SearchEvent="searchEvent"></search> -->
    <bar>
      <span slot="left" @click="goback">返回</span>
      <span>毒物数据库</span>
    </bar>
    <div class="content_fix">
      <search @SearchEvent="searchEvent" :title="'Cas号'" :type="'1'" ></search>
      <search @SearchEvent="searchEvent" :title="'毒物名称'" :type="'2'" ></search>
      <search @SearchEvent="searchEvent" :title="'全文检索'" :type="'3'" ></search>
    </div>



    <div class="content_scroll">
      <ul class="list">
        <li v-for="(item, index) of list" :key="index" @click="goarticle(item.id)">
          <p>{{item.casNo}}</p>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    <menubar></menubar>
  </div>
</template>

<script>
  import search from '@/components/search'
  import menubar from '@/components/menu'
  import { ISEARCH } from '@/api'
  import bar from '@/components/bar'
  export default {
    name: 'searchresult',
    components: {
      search, menubar, bar
    },
    data () {
      return {
        list: []
      }
    },
    created: function () {
      this.getData()
    },
    methods: {
      goback () {
        this.$router.go(-1)
      },
      getData: function () {
        this.axios.get(`${ISEARCH}?keyword=${this.$route.query.key}&queryType=${this.$route.query.type}`).then(response => {
          if (response.data.status) {
            this.list = response.data.data
          } else {
            this.$toast.show({'text': `${response.data.errorMsg}`})
          }
        }).catch(err => {
          throw new Error(err)
        })
      },
      goarticle (id) {
        this.$router.push({path: '/article', query: {id}})
      },
      searchEvent (obj) {
        this.$router.push({path: '/search', query: {type: obj.type, key: obj.key}}, () => {
          this.getData()
        })

        // this.axios.get(`http://www.doutu66.com/scdc/content/search?keyword=${obj.key}&queryType=${obj.type}`).then(response => {
        //   if (response.data.status) {
        //     this.list = response.data.data
        //   } else {
        //     this.$toast.show({'text': `${response.data.errorMsg}`})
        //   }
        // }).catch(err => {
        //   throw new Error(err)
        // })
      }
    }
  }
</script>

<style lang="scss" scoped>
.list-box {
  .title{
      background: #005eaa;
      text-align: center;
      height: rem-calc(50);
      line-height: rem-calc(50);
      vertical-align: middle;
      font-size: rem-calc(30);
      color: #fff;
    }
  .content_fix{
    border-bottom:  1px solid #dfdfdf;
    background: #efefef;
    padding-bottom: rem-calc(10);
  }
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
  & .list {
    padding: rem-calc(0 15 10);
    & > li:last-child{
      border:none;
    }
    li {
      position: relative;
      padding: rem-calc(15 15 5 20);
      list-style: none;
      border-bottom: 1px solid #ccc;
      &:before {
        content: ' ';
        display: inline-block;
        position: absolute;
        left: 0;
        top: rem-calc(15);
        width: rem-calc(11);
        height: rem-calc(14);
        background-image: url('~@/assets/image/text.png');
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    p:nth-child(1) {
      margin-bottom: rem-calc(10);
      font-size: rem-calc(17);
      color: #333;
    }
    p:nth-child(2) {
      font-size: rem-calc(18);
      color: #4A90E2;
    }
  }
  .floating {
    position: fixed;
    bottom: rem-calc(30);
    right: rem-calc(15);
    span {
      display: block;
      width: rem-calc(22);
      height: rem-calc(22);
      background-color: #D8D8D8;
      border: 1px solid #979797;
      border-radius: rem-calc(5);
      background-repeat: no-repeat;
      background-size: 80%;
      background-position: center;
      &:nth-child(1) {
        margin-bottom: rem-calc(10);
        background-image: url('~@/assets/image/home.png');
      }
      &:nth-child(2) {
        background-image: url('~@/assets/image/user.png');
      }
    }
  }
}
</style>
