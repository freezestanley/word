<template>
  <div class="list-box">
    <search></search>
    <ul class="list">
      <li v-for="(item, index) of list" :key="index">
        <p>{{item.name}}</p>
        <p>{{item.desc}}</p>
      </li>
    </ul>
    <div class="floating">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
  import { IList } from '@/api'
  import search from '@/components/search'
  export default {
    name: 'index',
    components: {
      search
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
        this.axios.post(IList).then(response => {
          if (response.data.status) {
            this.list = response.data.data
          }
        }).catch(err => {
          throw new Error(err)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.list-box {
  padding-bottom: rem-calc(50);
  & > .list {
    padding: rem-calc(20 18 0);
    li {
      position: relative;
      padding: rem-calc(15 15 15 20);
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
        background-image: url('~@/assets/images/text.png');
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
        background-image: url('~@/assets/images/home.png');
      }
      &:nth-child(2) {
        background-image: url('~@/assets/images/user.png');
      }
    }
  }
}
</style>
