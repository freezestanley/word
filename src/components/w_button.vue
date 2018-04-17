<template>
  <div class="login-btn">
    <a href="javascript:void(0);" class="login-btn" @click="loginHandler">
      <slot></slot>
    </a>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  props: ['txt'],
  methods: {
    loginHandler () {
      this.$emit('wClick')
      console.log('fff')
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-btn{
    display: block;
    line-height: rem-calc(50);
    background-color: #4A90E2;
    border-radius: rem-calc(5);
    color: #fff;
    text-align: center;
    margin-top: rem-calc(20);
    text-decoration: none;
    font-size: rem-calc(16);
    font-weight: bold;
  }
</style>
