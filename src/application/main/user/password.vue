<template>
  <section class="password">
    <div class="banner">
      <div class="banner_title">S C D C<br/>毒物数据库</div>
      <div class="banner_info">PassWord</div>
    </div>
    <ul class="list">
      <li>
        <div>当前密码</div>
        <div><input type="password" placeholder="请输入当前密码" v-model="loginPassword"></div>
      </li>
      <li>
        <div>新密码</div>
        <div><input type="password" placeholder="请输入新密码" v-model="loginNewPassword"></div>
      </li>
      <li>
        <div>确认新密码</div>
        <div><input type="password" placeholder="确认新密码" v-model="reLoginNewPassword"></div>
      </li>
    </ul>
    <wbutton @wClick="clickhandler" class="m_rl10">提 交</wbutton>
  </section>
</template>
<script>
import wbutton from '@/components/w_button'
export default {
  name: 'password',
  data () {
    return {
      loginPassword: null,
      loginNewPassword: null,
      reLoginNewPassword: null
    }
  },
  mounted () {
  },
  methods: {
    clickhandler () {
    }
  },
  components: {
    wbutton
  },
  props: ['wbutton']
}
</script>
<style lang="scss" scoped>
.password{
  background:#fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .m_rl10{
    margin: 0 rem-calc(20);
  }
  .list{
    padding: 0;
    margin: rem-calc(10) rem-calc(20) rem-calc(30);
    list-style: none;
    & > li {
      & > div:first-child{
        line-height: rem-calc(30);
        vertical-align: middle;
        margin-bottom: rem-calc(5);
      }
      & > div:last-child{
        line-height: rem-calc(30);
        vertical-align: middle;
        background:#efefef;
        margin-bottom: rem-calc(15);
        & > input{
          background: transparent;
          border:none;
          height: rem-calc(50);
          line-height: rem-calc(50);
          vertical-align: middle;
          padding-left: rem-calc(10);
          font-size: rem-calc(16);
        }
      }
    }
  }
  .banner{
    width: 100%;
    height: rem-calc(188);
    background-image: url(~@/assets/image/banner2.png);
    background-size: cover;
    position: relative;
    .banner_title{
      color:#fff;
      font-size:rem-calc(24);
      position: absolute;
      top: rem-calc(20);
      left: rem-calc(20)
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
}
</style>