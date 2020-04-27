<template>
    <span>
      {{value}}
    </span>
</template>

<script>
  export default {
    name: 'ConcatString',
    props: {
      //当前行的数据
      record: {
        type: Object,
        default: () => {}
      },
      //当前数据
      content: {
        type: Object,
        default: () => ''
      }
    },
    data() {
      return {
        value : ""
      }
    },
    created(){
      this.parseDate(this.content)
    },
    watch :{
      "record" : function() {
        this.parseDate(this.content);
      }
    },
    methods:{
      parseDate(item){
        this.value = JSON.stringify(item).
        replaceAll(/\"/g," ").
        replaceAll(/\[/g," ").
        replaceAll(/\]/g," ");
        //替换空格
        /*.replaceAll(/\s+/g,"");*/
      }
    }
  }
</script>

<style scoped>

</style>