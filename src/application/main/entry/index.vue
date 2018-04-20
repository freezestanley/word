<template>
  <section class="mod-login">
    <div class="login-wrapper">
      <i class="login-icon login-welcome"></i>
      <ul class="login-input-wrapper">
        <li>
          <input type="text" class="login-input" placeholder="请输入用户名" v-model="loginName">
        </li>
        <li>
          <input type="password" class="login-input" placeholder="请输入密码" v-model="loginPassword">    
        </li>
      </ul>
      <a href="javascript:void(0);" class="login-btn" @click="loginHandler">用 户 登 录</a>
      <div class="login-logo"></div>
    </div>
    <footer :class="{'static-footer': staticFooter}">
      <div class="login-logo"></div>
      <div class="login-copyright">copyright@2018 | 
        <router-link to="/message">联系客服</router-link>
      </div>
    </footer>
  </section>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginName: '',
      loginPassword: '',
      oHeight: window.innerHeight,
      staticFooter: false
    }
  },
  mounted () {
    window.onresize = () => {
      let currentHeight = window.innerHeight
      this.staticFooter = currentHeight < this.oHeight
    }
  },
  methods: {
    loginHandler () {
      this.$router.push({path: "/record"})
    }
  }
}
</script>
<style lang="scss" scoped>
  .mod-login{
    width: 100%;
    height: 100%;
    background-image: url(~@/assets/image/login.jpg);
    background-size: cover;
    box-sizing: border-box;
    padding: 0 rem-calc(30);
    overflow: hidden;

    .login-wrapper{
      .login-icon{
        display: block;
        background-size: cover;
        // &.login-logo{
        //   width: 4.5rem;
        //   height: 2.25rem;
        //   background-image: url('~@/assets/image/logo.png');
        //   margin-top: 2rem;
        // }
        &.login-welcome{
          width: 100%;
          height: rem-calc(170);
          background-image: url('~@/assets/image/title.png');
          margin-top: rem-calc(30);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 0 0;
        }
      }

      .login-input-wrapper{
        // height: 5.5rem;
        border-radius: rem-calc(5);
        background-color: #fff;
        margin-top: rem-calc(30);
        padding: 0 rem-calc(20);        
        li{
          display: block;
          height: rem-calc(55px);
          box-sizing: border-box;
          &:first-child{
            border-bottom: .05rem solid #ccc;
          }
          input{
            display: inline-block;
            width: 100%;
            line-height: rem-calc(50);
            border: none;
            margin-top: .15rem;
            font-size: rem-calc(16);
            outline:none;
            background:transparent;
          }
        }
      }

      .login-btn{
        display: block;
        line-height: rem-calc(50);
        background-color: #246faf;
        border-radius: rem-calc(5);
        color: #fff;
        text-align: center;
        margin-top: rem-calc(20);
        text-decoration: none;
        font-size: rem-calc(16);
        font-weight: bold;
      }
    }

    footer{
        font-size: rem-calc(14);
        position: absolute;
        bottom: rem-calc(10);
        left: 0;
        width: 100%;
      .login-logo{
        width: rem-calc(100);
        height: rem-calc(100);
        background: url('~@/assets/image/logo.png') no-repeat;
        background-size: 100%;
        margin: 0 auto rem-calc(15px);
      }
      .login-copyright{
        width: 100%;
        height: rem-calc(20);
        text-align: center;
        & > a{
          color: #000;
          text-decoration: underline;
        }
      }
      &.static-footer{
        position: static;
        margin-top: rem-calc(20);
      }
    }
  }
</style>

