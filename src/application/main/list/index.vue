<template>
  <div class="list-box content">
    <search></search>
    <div class="content_scroll">
      <ul class="list">
        <li v-for="(item, index) of list" :key="index" @click="goarticle">
          <p>CAS号: {{item.name}}</p>
          <p>{{item.desc}}</p>
        </li>
      </ul>
    </div>
    <menubar></menubar>
  </div>
</template>

<script>
  import { IList } from '@/api'
  import search from '@/components/search'
  import menubar from '@/components/menu'
  export default {
    name: 'index',
    components: {
      search, menubar
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
        this.axios.post(IList, {id: this.$route.query.id}).then(response => {
          if (response.data.status) {
            this.list = response.data.data
          }
        }).catch(err => {
          throw new Error(err)
        })
      },
      goarticle () {
        this.$router.push({path: '/article', query: {id: 123}})
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
