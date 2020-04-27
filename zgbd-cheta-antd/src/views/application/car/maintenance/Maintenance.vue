<template>
  <a-row>
    <div class="Whole">

      <!--头部-->
      <a-col span="24">
        <div class="button">
          <a-button class="buttonOne"><a-icon type="read" />保养手册</a-button>
          <a-button class="buttonOne"><a-icon type="file" />保养规则</a-button>
          <a-button class="buttonOne"><a-icon type="environment" /> 维修厂</a-button>
        </div>
      </a-col>
      <a-col span="24">
        <div style="padding: 15px">
          <template>
            <a-row :gutter="elements[0].data[2].gutterKey">
              <a-col v-for="item in elements"  :span="item.data[1].space">
                <component :is="item.name" :config="item.data"></component>
              </a-col>
            </a-row>
          </template>
        </div>
      </a-col>
    </div>
  </a-row>

</template>
<script>
  import homeMixin from '@/views/application/onlines/home/config/mixin.js'
  import elementMixin from '@/views/application/onlines/element/config/mixin.js'
  import carMixin from '@/views/application/onlines/car/config/mixin.js'
  import {getAction} from "@/api/manage";
  export default {
    data() {
      return {
        elements : [],
      }
    },
    components: Object.assign(
      homeMixin.components,
      elementMixin.components,
      carMixin.components,
    ),

    created() {
      var that = this;
      getAction('application/online/component/getComponentsById', {projectId: '812f5708cde04a528c638d58fff1a285'}).then(res => {
        res.result.forEach(item => {
          var data = item.data;
          that.elements.push({
            name: item.name,    //组件名字
            data: JSON.parse(data),  //组件数据
          })
        })
      });
    },
  }

</script>
<style scoped>
  .Whole{
    margin-left: 20px;
    margin-right: 10px;
  }
  .button{
    float: right;
    margin-right: 10px;
  }
  .buttonOne{
    margin: 0px 0 10px 10px;
  }
  .tabsOne{
    margin: 10px;
    padding: 20px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
  }
</style>