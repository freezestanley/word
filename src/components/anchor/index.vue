<template>
  <div class="anchor" :class="[status?'anchor_show':'anchor_hide']">
    <div class='arrow_left' v-show="status"  @click="toggleHandle"></div>
    <div class='arrow_right' v-show="!status"  @click="toggleHandle"></div>
      <ul class="anchor_type" v-show="status">
        <li v-for="(item, index) of record" :key="index">
          <div @click="chooseType(index)">{{item.title}}</div>
        </li>
      </ul>
      <ul class="anchor_block" v-show="status">
        <li  v-for="(team, idx) of child" :key="idx">
          <div @click="chooseAnchor(team.id)">{{idx}}.{{team.title}}</div>
        </li>
      </ul>
    </div>
</template>
<script>
  export default {
    name: 'anchor',
    watch: {
      record (newValue, oldValue) {
        this.child = this.record.length > 0 ? this.record[0]['son'] : []
      }
    },
    data () {
      return {
        child: [],
        list: [],
        status: false
      }
    },
    props: {
      record: {
        default: () => []
      }
    },
    methods: {
      toggleHandle () {
        this.status = !this.status
        if (this.status) {
          this.$parent.$el.style.height = '100%'
          this.$parent.$el.style.overflow = 'hidden'
        } else {
          this.$parent.$el.style.height = ''
          this.$parent.$el.style.overflow = 'inherit'
        }
      },
      chooseType (idx) {
        this.child = this.record[idx]['son']
      },
      chooseAnchor (id) {
        this.status = false
        if (this.status) {
          this.$parent.$el.style.height = '100%'
          this.$parent.$el.style.overflow = 'hidden'
        } else {
          this.$parent.$el.style.height = ''
          this.$parent.$el.style.overflow = 'inherit'
        }
        this.$emit('Anchor', id)
      }
    }
  }
</script>
<style lang="scss" scoped>
@keyframes myArrow
  {
    from {
      transform: translate(0px);
    }
    50% {
      transform: translate(5px);
    }
    to {
      transform: translateX(0);
    }
  }
  @-webkit-keyframes myArrow
  {
    from {
      transform: translate(0px);
    }
    50% {
      transform: translate(5px);
    }
    to {
      transform: translateX(0);
    }
  }
  .anchor{
    &.anchor_show{
      position: absolute;
      top:0;left:0;right:0;bottom:0;
      background:#fff;
      padding: rem-calc(5 0);
      display:flex;
    }
    &.anchor_hide{
      position: fixed;
      top:50%;
      right: rem-calc(0);
      width: rem-calc(20);
      height:rem-calc(20);
    }
    .arrow_left{
      position: absolute;
      display: block;
      top:50%;
      left: rem-calc(0);
      width: rem-calc(0);
      height: rem-calc(0);
      border: rem-calc(10) solid transparent;
      border-right-color: #4A90E2;
      animation:myArrow 1s infinite linear;
      -webkit-animation:myArrow 1s infinite linear;
      z-index: 999; 
    }
    .arrow_right{
      z-index: 999;
      position: absolute;
      display: block;
      top:0%;
      right: rem-calc(-5);
      width: rem-calc(0);
      height: rem-calc(0);
      border: rem-calc(10) solid transparent;
      border-left-color: #4A90E2; 
      animation:myArrow 1s infinite linear;
      -webkit-animation:myArrow 1s infinite linear;
    }
    & > .anchor_type{
      margin-left: rem-calc(20);
    }
    & > .anchor_type, & > .anchor_block{
      padding-right: rem-calc(5);
      border-right: 1px dotted #ccc;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      & > li{
        line-height: rem-calc(16);
        vertical-align: middle;
        font-size:rem-calc(14);
        color: #999;
        margin: rem-calc(8);
      }
    }
    & > .anchor_block{
      flex:1;
      border:none;
      margin-left: rem-calc(5);
    }
  }
</style>
