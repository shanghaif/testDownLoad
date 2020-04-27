<template>
  <div style="padding: 15px">
    <template>
      <a-row :gutter="elements[0].data[2].gutterKey">
        <a-col v-for="item in elements"  :span="item.data[1].space">
          <component :is="item.name" :config="item.data"></component>
        </a-col>
      </a-row>
    </template>
  </div>
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
      getAction('application/online/component/getComponentsById', {projectId: '305ce5179f7a4217838650cf399cbe6a'}).then(res => {
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



</style>