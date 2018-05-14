<template>
  <div class="list-box content">
    <search @SearchEvent="searchEvent"></search>
    <div class="content_scroll">
      <ul class="list">
        <li v-for="(item, index) of list" :key="index" @click="goarticle(item.id)">
          <p>CAS号: {{item.casNo}}</p>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    <menubar></menubar>
  </div>
</template>

<script>
  import { ILIST } from '@/api'
  import search from '@/components/search'
  import bar from '@/components/bar'
  import menubar from '@/components/menu'
  export default {
    name: 'index',
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
      getData: function () {
        this.axios.post(ILIST, {id: this.$route.query.category}).then(response => {
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
        this.$router.push({path: '/search', query: {type: obj.type, key: obj.key}})
      }
    }
  }
</script>

<style lang="scss" scoped>
.list-box {
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
