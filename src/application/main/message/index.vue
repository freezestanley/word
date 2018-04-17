<template>
  <section class="message">
    <div class="banner">
      <div class="banner_title">S C D C<br/>毒物数据库</div>
      <div class="banner_info">Contact Us</div>
    </div>
    <ul class="list">
      <li>
        <div>姓名</div>
        <div><input type="password" placeholder="请输入姓名" v-model="loginPassword"></div>
      </li>
      <li>
        <div>电话</div>
        <div><input type="password" placeholder="请输入电话" v-model="loginNewPassword"></div>
      </li>
      <li>
        <div>留言</div>
        <div>
          <textarea type="password" placeholder="请输入留言内容" v-model="reLoginNewPassword">
          </textarea>
        </div>
      </li>
    </ul>
    <wbutton @wClick="clickhandler" class="m_rl10">提 交</wbutton>
  </section>
</template>
<script>
import wbutton from '@/components/w_button'
export default {
  name: 'message',
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
          margin-left: rem-calc(10);
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