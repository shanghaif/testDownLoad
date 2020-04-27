<template>
  <div>
    <a-form-item  v-bind="item">
      <a-time-picker @change="onChange" v-decorator="[bind.fieldName, bind.rules]"  style="width: 100%" />
    </a-form-item>
  </div>
</template>

<script>
  import {getAction} from "@/api/manage";
  export default {
    name: 'TimeSelect',
    methods: {

      onChange(date, dateString) {
        this.init({initTime:dateString[0]});
      },
      init(params){
        // 打断点取相照应的值
        this.result = [];
        getAction(this.url.refuelInfo,params).then(res => {
          if(res.success){
            this.result = res.result;
          }
        })
      },

    },
    props: {
      attr: {
        type: Object
      },
      item: {
        type: Object
      },
      bind: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  #app > div > div.element-row.ant-row-flex > div.element-col.top-nav-header-index.ant-col-15 > div.ant-col-24 > div > div > div > div > div:nth-child(2) > div > span:nth-child(4) > div > div > div{
    margin-bottom: 0px!important;
  }
</style>