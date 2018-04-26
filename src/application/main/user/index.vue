<template>
  <section class="user_center">
    <div class="banner">
      <div class="banner_title">S C D C<br/>毒物数据库</div>
      <div class="banner_info">User Center</div>
    </div>
    <div class="line_block">
      <div class="line_title">用 户 名</div>
      <div class="line_info">{{username}}</div>
    </div>
    <div class="line_block">
      <div class="line_button" @click="jump">修改密码</div>
    </div>
    <wbutton @wClick="clickhandler" class="m_rl10">退 出</wbutton>
  </section>
</template>
<script>
import { ILOGOUT, IUSERNAME } from '@/api'
import wbutton from '@/components/base/w_button'
export default {
  name: 'user_center',
  data () {
    return {
      username: ' '
    }
  },
  created () {
    this.init()
  },
  mounted () {
  },
  components: {
    wbutton
  },
  methods: {
    init () {
      this.axios.get(IUSERNAME).then(response => {
        if (response.data.status) {
          this.username = response.data.data.username
        } else {
          this.$toast.show({'text': `${response.data.errorMsg}`})
        }
      }).catch(err => {
        throw new Error(err)
      })
    },
    clickhandler () {
      this.axios.post(ILOGOUT).then(response => {
        if (response.data.status) {
          this.$store.dispatch('userlogin', false)
          this.$router.push({path: '/'})
        } else {
          this.$toast.show({'text': `${response.data.errorMsg}`})
        }
      }).catch(err => {
        throw new Error(err)
      })
    },
    jump () {
      this.$router.push({path: "/password"})
    }
  }
}
</script>
<style lang="scss" scoped>
.user_center{
  background:#efefef;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .banner{
    width: 100%;
    height: rem-calc(188);
    background-image: url(~@/assets/image/banner1.png);
    background-size: cover;
    position: relative;
    .banner_title{
      color:#fff;
      font-size:rem-calc(24);
      position: absolute;
      top: rem-calc(20);
      left: rem-calc(20);
      line-height: rem-calc(40);
    }
    .banner_info{
      color:#fff;
      font-size:rem-calc(20);
      position: absolute;
      bottom: rem-calc(10);
      right: rem-calc(20);
      letter-spacing: rem-calc(5);
    }
  }
  .line_block{
    margin-bottom: rem-calc(15);
    .line_title{
      font-size: rem-calc(16);
      color: #333;
      padding: 0 rem-calc(20);
      margin:rem-calc(15) 0 rem-calc(20) 0;
    }
    .line_info{
      font-size: rem-calc(16);
      border: 1px solid #ddd;
      border-left:none;
      border-right:none;
      background:#fff;
      color:#333;
      padding: rem-calc(5px) rem-calc(20);
      line-height: rem-calc(40);
    }
    .line_button{
      font-size: rem-calc(16);
      background:#fff;
      color:#333;
      padding: rem-calc(5px) rem-calc(0);
      line-height: rem-calc(40);
      position: relative;
      width: 100%;
      text-indent: rem-calc(20px);
      &:after{
        content: '';
        position: absolute;
        border: 2px solid #4A90E2;
        border-left:none;
        border-top:none;
        transform: rotate(-45deg) scale(.5);
        display:block;
        top:rem-calc(15);
        right:rem-calc(20);
        width: rem-calc(20);
        height:rem-calc(20);
      }
    }
  }
  .m_rl10{
    margin: 0 rem-calc(20);
  }
}
</style>