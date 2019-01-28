<template>
  <div class="part">
    <h3>{{title}}</h3>
   
      <div v-for="(team, idx) of son" :key="idx" class="part_txt">
        <partce 
        :wordCn = "team.contentCn" 
        :wordEn = "team.contentEn" 
        :title = "team.titleCn"
        :flag = "team.flag"
        :id = "'a' + team.id">
        </partce>
      </div>
  </div>
</template>
<script>
import partce from '@/components/part/partce'
export default {
  name: 'part',
  components: {
    partce
  },
  data () {
    return {
      status: false
    }
  },
  props: {
    title: {
      default: ''
    },
    son: {
      default: () => []
    }
  },
  methods: {
    toggleHandle () {
      this.status = !this.status
    }
  }
}
</script>
<style lang="scss" scoped>
.part{
  margin: rem-calc(15);
  font-size: rem-calc(14);
  border-bottom: 1px dotted #ccc;
  padding-bottom: rem-calc(5);
  color:#333;
  .toggleButton{
    text-align: right;
    div {
      border-radius: rem-calc(100);
      background: #4A90E2;
      color:#fff;
      padding:rem-calc(5 10);
      display: inline-block;
      font-size:rem-calc(10);
    }
  }
  p{line-height: rem-calc(20);}
  .part_txt{
    margin-bottom: rem-calc(10);
  }
  h3 {
    font-size: rem-calc(16);
    margin-bottom: rem-calc(8);
    background:#eee;
    padding: rem-calc(10);
    border-radius: 3px;
  }
  h4 {
    font-size: rem-calc(14);
    margin-bottom: rem-calc(5);
  }
}
</style>
