<template>
  <section class="password">
    <div class="banner">
      <div class="banner_title">S C D C<br/>毒物数据库</div>
      <div class="banner_info">PassWord</div>
    </div>
    <ul class="list">
      <li>
        <div>当前密码</div>
        <div><input type="password" placeholder="请输入当前密码" maxlength="16" v-model="loginPassword"></div>
      </li>
      <li>
        <div>新密码</div>
        <div><input type="password" placeholder="请输入新密码" maxlength="16" v-model="loginNewPassword"></div>
      </li>
      <li>
        <div>确认新密码</div>
        <div><input type="password" placeholder="确认新密码" maxlength="16" v-model="reLoginNewPassword"></div>
      </li>
    </ul>
    <wbutton @wClick="clickhandler" class="m_rl10">提 交</wbutton>
  </section>
</template>
<script>
import { IPASSWORD } from '@/api'
import wbutton from '@/components/base/w_button'
import validate from '@/widget/validate'
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
      var loginPassword = validate.trimStr(this.loginPassword)
      var loginNewPassword = validate.trimStr(this.loginNewPassword)
      var reLoginNewPassword = validate.trimStr(this.reLoginNewPassword)
      var result
      if (validate.password(loginPassword)) {
        if (validate.password(loginNewPassword)) {
          if (loginPassword != loginNewPassword) {
            if (reLoginNewPassword != loginNewPassword) {
              result = '新密码输入不一致'
            } else {
              this.axios.post(IPASSWORD, {passwordOld: loginPassword, passwordNew: loginNewPassword}).then(response => {
                if (response.data.status == 'true') {
                  this.$toast.show({'text': '密码已修改成功!'})
                  window.setTimeout(() => {
                    this.$router.push({path: "/user"})
                  }, 2000)
                } else {
                  this.$toast.show({'text': response.data.errorMsg})
                }
              }).catch(err => {
                throw new Error(err)
              })
            }
          } else {
            result = '新密码和当前密码不能一致'
          }
        } else {
          result = '密码为6-16数字或字母'
        }
      } else {
        result = '密码为6-16数字或字母'
      }
      if (result)
        this.$toast.show({'text': `${result}`})
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
          text-indent: rem-calc(10);
          font-size: rem-calc(16);
          width:100%;
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
}
</style>