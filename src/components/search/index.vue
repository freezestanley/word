<template>
  <div class="search-box">
    <div class="search-sel">
      <selector class="searchOr" v-model="select" placeholder="或" :options="list"></selector>
      {{title}}
    </div>
    <input type="text" placeholder="请输入" v-model.trim="searchModel" class="search-input" maxlength="200" @focus="show()" @blur="hide()">
    <a class="search-btn" @click="searchHandler"></a>
    <ul class="searched-text" v-show="showSearched" @click="clickText">
      <li v-for="(item, index) of record" :key="index">
        {{item.keyword}}
      </li>
    </ul>
  </div>
</template>

<script>
import { ISEARCH, ISEARCHLOG } from '@/api'
import { Selector } from 'vux'
export default {
  name: 'search',
  components: {
    Selector
  },
  data () {
    return {
      searchModel: '',
      select: '与',
      list: ['与', '或'],
      showSearched: false,
      record: [],
      relative: 'AND'
    }
  },
  props: ["title", "type"],
  methods: {
    show: function () {
      this.showSearched = true
      this.axios.post(ISEARCHLOG).then(response => {
        if (response.data.status) {
          this.record = response.data.data
        } else {
          this.$toast.show({'text': `${response.data.errorMsg}`})
        }
      }).catch(err => {
        throw new Error(err)
      })
    },
    hide: function () {
      this.showSearched = false
    },
    clickText: function (event) {
      let $event = event.target
      this.searchModel = ($event.innerHTML).replace(/\s+/g, "")
      this.showSearched = false
      this.relative = this.select === '与' ? 'AND' : 'OR'
    },
    searchHandler () {
      debugger
      console.log('ffff')
      // this.$router.push({path: '/search', query: {type: this.relative, key: this.searchModel}})
      this.$emit('SearchEvent', {type: this.type, key: this.searchModel, relative: this.select === '与' ? 'AND' : 'OR'})
      // debugger
      // this.$router.push({path: '/search', query: {type: 'OR', key: '123asd'}})
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  position: relative;
  display: flex;
  padding: rem-calc(1 0 1 15);
  align-items: center;

  & > .searchOr .weui-cell_select .weui-select {
    padding: 0;
    color: #000;
  }
  
  .search-sel {
    position: relative;
    width: rem-calc(100);
    font-size: rem-calc(14);
  }
  .search-input {
    padding: rem-calc(0 10);
    width: rem-calc(190);
    line-height: rem-calc(40);
    box-sizing: border-box;
    border-radius: rem-calc(5);
    border: rem-calc(1) solid #ccc;
    font-size: rem-calc(16);
   
  }
  .search-btn {
    flex: 1;
    display: block;
    text-align: center;
    font-size: rem-calc(18);
    color: #000;
    &:before{
      background: url("~@/assets/image/eye.png") no-repeat;
      background-size: 100%;
      display: block;
      content: " ";
      width: rem-calc(30);
      height: rem-calc(30);
      margin-left: rem-calc(10);
    }
  }
  .searched-text {
    position: absolute;
    left: rem-calc(65);
    top: rem-calc(50);
    width: rem-calc(255);
    background: #fff;
    border: 1px solid #efefef;
    border-radius: rem-calc(5);
    z-index: 9999999;
    li {
      padding: 10px 15px;
      list-style: none;
      color: #333;
      font-size: rem-calc(18);
      &:not(:last-child) {
        border-bottom: 1px dotted #efefef;
      }
    }
  }
}
</style>
<style lang="scss">
.search-box {
  .weui-cell_select{
    width: rem-calc(30);
  }
  .weui-cell{
    display: inline-block;
  }
  .weui-cell_select .weui-select {
    padding: 0;
    color: #000;
    width: rem-calc(30);
    option {
      color: #333;
    }
  }
  .weui-cell_select .weui-cell__bd:after {
    right: rem-calc(5);
    margin-top: rem-calc(-5);
    width: rem-calc(5);
    height: rem-calc(5);
    border-color: #000;
    transform: rotate(135deg);
  }
}
</style>
