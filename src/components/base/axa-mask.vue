<!--
  event

-->
<template>
  <div class="axaMask" :style="{display: viewShow}" @click = "clickEvent">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'axaMask',
  data () {
    return {
      isShow: this.visible,
      hasAnimate: true
    }
  },
  created () {
  },
  watch: {
    visible: function (newValue) {
      this.isShow = newValue
    }
  },
  computed: {
    viewShow () {
      if (this.isShow) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'inherit'
      }
      return this.isShow ? 'block' : 'none'
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
    clickEvent () {
      this.$emit('Hide')
    }
  }
}
</script>

<style lang='scss' rel="stylesheet/scss" scoped>
  .axaMask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .2);
    z-index: 9000;
    display:none;
  }
</style>