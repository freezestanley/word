<template>
  <section class="message">
    <div class="banner">
      <div class="banner_title">S C D C<br/>毒物数据库</div>
      <div class="banner_info">Contact Us</div>
    </div>
    <ul class="list">
      <li>
        <div>姓名</div>
        <div><input type="text" placeholder="请输入姓名"  maxlength="10" v-model="messageName"></div>
      </li>
      <li>
        <div>手机号码</div>
        <div><input type="text" placeholder="请输入电话" maxlength="11" v-model="messagePhone"></div>
      </li>
      <li>
        <div>EMAIL</div>
        <div><input type="text" placeholder="请输入EMAIL"  maxlength="30" v-model="messageEmail"></div>
      </li>
      <li>
        <div>留言</div>
        <div>
          <textarea type="password" placeholder="请输入留言内容" v-model="messageInfo">
          </textarea>
        </div>
      </li>
    </ul>
    <wbutton @wClick="clickhandler" class="m_rl10">提 交</wbutton>
  </section>
</template>
<script>
import { IMESSAGE } from '@/api'
import wbutton from '@/components/base/w_button'
import validate from '@/widget/validate'
export default {
  name: 'message',
  data () {
    return {
      messageName: null,
      messagePhone: null,
      messageEmail: null,
      messageInfo: null
    }
  },
  mounted () {
  },
  methods: {
    clickhandler () {
      var messageName = validate.trimStr(this.messageName)
      var messagePhone = validate.phone(this.messagePhone)
      var messageEmail = validate.email(this.messageEmail)
      var messageInfo = validate.trimStr(this.messageInfo)
      var result = ''
      if (messageName.length >= 2) {
        if (messagePhone) {
          if (messageEmail) {
            if (messageInfo.length > 10) {
              this.axios.post(IMESSAGE, {messageName, messagePhone, messageEmail, messageInfo}).then(response => {
                if (response.data.status == 'true') {
                  this.$toast.show({'text': '您的留言已成功!'})
                } else {
                  this.$toast.show({'text': response.data.errorMsg})
                }
              }).catch(err => {
                throw new Error(err)
              })
            } else {
              result = '留言需大于10字'
            }
          } else {
            result = '请输入正确的Email'
          }
        } else {
          result = '请出入11位手机号码'
        }
      } else {
        result = '请输入正确的姓名'
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
.message{
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
    margin: rem-calc(10) rem-calc(20) rem-calc(20);
    list-style: none;
    & > li {
      & > div:first-child{
        line-height: rem-calc(30);
        vertical-align: middle;
        margin-bottom: rem-calc(5);
      }
      & > div:last-child{
        line-height: rem-calc(20);
        vertical-align: middle;
        background:#efefef;
        padding: rem-calc(5) 0;
        margin-bottom: rem-calc(10);
        & > input{
          background: transparent;
          width: 100%;
          border:none;
          height: rem-calc(40);
          line-height: rem-calc(20);
          vertical-align: middle;
          padding-left: 0;
          text-indent: rem-calc(10);
          font-size: rem-calc(16);
        }
        & > textarea{
          background: transparent;
          border:none;
          width:100%;
          height: rem-calc(60);
          line-height: rem-calc(20);
          vertical-align: middle;
          padding-left: rem-calc(10);
          width: 95%;
          font-size: rem-calc(16);
        }
      }
    }
  }
  .banner{
    width: 100%;
    height: rem-calc(188);
    background-image: url(~@/assets/image/banner3.png);
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