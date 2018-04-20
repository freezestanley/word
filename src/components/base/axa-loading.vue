<template>
  <axaMask :visible = "isShow">
    <div class="axaLoading">
      <div class="rotate"></div>
    </div>
  </axaMask>
</template>

<script>
import axaMask from './axa-mask'
export default {
  name: 'axaLoading',
  data () {
    return {
      isShow: false,
      count: 0
    }
  },
  created () {
  },
  computed: {
  },
  props: ['background'],
  components: {
    axaMask
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    }
  }
}
</script>
<style lang='scss' rel="stylesheet/scss" scoped>
@keyframes myfirst
{
from {transform:rotate(0deg);}
to {transform:rotate(360deg);}
}
@-webkit-keyframes myfirst
{
from {transform:rotate(0deg);}
to {transform:rotate(360deg);}
}

</style>
<style lang='scss' rel="stylesheet/scss">
  @keyframes myfirst
  {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
  @-webkit-keyframes myfirst
  {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
  .axaLoading {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: auto;
    touch-action: none;
    & > .rotate{
      border-radius: 999px;
      border: rem-calc(5px) solid;
      display: block;
      width: 30px;
      height: 30px;
      overflow: hidden;
      border-color: transparent #6D9EE1 #6D9EE1 #6D9EE1;
      animation:myfirst 1s infinite linear;
      -webkit-animation:myfirst 1s infinite linear;
    }
  }
</style>