<template>
  <div>
    <h3>I'm Hello.vue</h3>
    <p>at src/components/Hello.vue</p>
    <p>I'm a placeholder.</p>
    <div @click="ajaxDemo">AJAXDEMO local</div>
    <div @click="ajaxDemo1">AJAXDEMO cross</div>
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
  methods: {
  }
}
</script>
