<template>
  <div class="axaButton" @click="clickMethod" :class="disabled ? 'disabled': ''">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'axaButton',
  data () {
    return {
      // messageClass: 'axaInput',
      required: '',
      hasMessages: false
    }
  },
  props: {
    disabled: {
      type: Boolean
    }
  },
  methods: {
    clickMethod () {
      if (!this.disabled)
        this.$emit('click', () => this)
    }
  },
  computed: {
    messageClass () {
      return {
        'md-invalid': this.hasMessages
      }
    }
  }
}
</script>
<style lang='scss' rel="stylesheet/scss" scoped>
@import '~@/assets/scss/function';
@import '~@/assets/scss/mixin';
.axaButton{
  background: #00008F;
  min-height: rem-calc(60px);
  color:#fff;
  font-size: rem-calc(16px);
  vertical-align: middle;
  height: rem-calc(60px);
  line-height: rem-calc(60px);
  text-indent: rem-calc(30px);
  position: relative;
  &.disabled {
    background: #ccc;
  }
  &:before{
    content: ' ';
    border-left: 1px solid #999;
    position: absolute;
    top:0;
    right: 0;
    width: rem-calc(63px);
    height: 100%;
  }
  &:after {
    content: '';
    // background-image: url(~@/assets/image/index_phone.png);
    background-repeat: no-repeat;
    background-size: 100%;
    width: rem-calc(20px);
    height: rem-calc(20px);
    position: absolute;
    top: 50%;
    right: rem-calc(19px);
    margin-top: rem-calc(-10px);
  }
}
</style>
