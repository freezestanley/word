<template>
  <div class="index">
    <search></search>
    <img src="~@/assets/images/banner.png" class="banner">
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
import { IIndex } from '@/api'
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
      this.axios.post(IIndex).then(response => {
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
.index {
  padding-bottom: rem-calc(50);
  .banner {
    width: 100%;
  }
  & > .list {
    padding: rem-calc(0 18);
    li {
      position: relative;
      padding: rem-calc(25 15 15 70);
      list-style: none;
      border-bottom: 1px solid #ccc;
      &:before {
        content: ' ';
        display: inline-block;
        position: absolute;
        left: 0;
        top: rem-calc(25);
        width: rem-calc(55);
        height: rem-calc(55);
        background-repeat: no-repeat;
        background-size: contain;
      }
      &:nth-child(1):before {
        background-image: url('~@/assets/images/icon1.png');
      }
      &:nth-child(2):before {
        background-image: url('~@/assets/images/icon2.png');
      }
      &:nth-child(3):before {
        background-image: url('~@/assets/images/icon1.png');
      }
      &:nth-child(4):before {
        background-image: url('~@/assets/images/icon2.png');
      }
    }
    p:nth-child(1) {
      margin-bottom: rem-calc(5);
      font-size: rem-calc(20);
      color: #4A90E2;
    }
    p:nth-child(2) {
      font-size: rem-calc(13);
      line-height: rem-calc(20);
      color: #151515;
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
