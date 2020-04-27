<template>
  <div>
    <span>{{data.title}}</span>
    <a-input-search
      placeholder="请输入要搜索内容"
      :style="`width: ${data.width||200}px;margin-left:8px`"
      @search="onSearch"
      :enterButton="data.enterButton"
    />
  </div>
</template>

<script>
  export default {
    name: 'CSearch',
    props: {
      data: {
        type: Object
      },
    },
    methods:{
      onSearch(value){
        let that = this;
        let dt = {};
        if(that.data.fields){
          that.data.fields.forEach(item =>{
            dt[item.fieldName] = value;
          })
        }
        this.$emit('refreshList',dt)
      }
    }
  }
</script>

<style scoped>

</style>