<!--********************************************************************
 * Author        : lisanmei
 * Filename      : axa-dialog
 * Description   : 弹窗
 * Time          : 2017/12/25
 *
 *@params className 类名
 *@params content 提示内容，可传入html
 *@params confirmText 传入则显示确认按钮
 *@params cancelText 传入则显示取消按钮
 *@params onConfirm 确认后的回调函数
 *@params onCancel 取消后的回调函数
********************************************************************-->
<template>
  <axaMask :visible = "isShow" :class="options.className">
    <div class="axa-dialog">
      <div class="dialog-body">
        <div class="dialog-header" v-if="options.title">{{options.title}}</div>
        <div class="dialog-content" v-html="options.content"></div>
        <div class="dialog-footer">
          <a :class="options.confirmClass" @click="confirm" v-if="options.confirmText">{{options.confirmText}}</a>
          <a :class="options.cancelClass" @click="cancel" v-if="options.cancelText">{{options.cancelText}}</a>
        </div>
      </div>
    </div>
  </axaMask>
</template>

<script>
import axaMask from './axa-mask'
import AxaButton from "./axa-button"
export default {
  name: 'axaDialog',
  data () {
    return {
      isShow: false,
      options: {}
    }
  },
  created () {
  },
  computed: {

  },
  components: {
    AxaButton,
    axaMask
  },
  methods: {
    show (options) {
      this.options = options
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
    confirm () {
      this.options.onConfirm()
    },
    cancel () {
      this.hide()
      this.options.onCancel()
    }
  }
}
</script>
<style lang='scss' rel="stylesheet/scss">
  .axa-dialog {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    align-items: center;
    padding: rem-calc(0 26);
    .dialog-body {
      width: 100%;
      background: #fff;
    }
    .dialog-header {
      padding-top: rem-calc(30);
      font-size: rem-calc(30);
      text-align: center;
    }
    .dialog-content {
      padding: rem-calc(30 25);
      line-height: rem-calc(24);
      font-size: rem-calc(16);
    }
    .dialog-footer {
      display: flex;
      padding: rem-calc(0 14);
      margin-bottom: rem-calc(14);
      a {
        display: inline-block;
        padding: rem-calc(10 0);
        flex: 1;
        font-size: rem-calc(16);
        background: #00008F;
        color: #fff;
        text-align: center;
        &:not(:first-child) {
          margin-left: rem-calc(10);
        }
      }
    }
  }
</style>
