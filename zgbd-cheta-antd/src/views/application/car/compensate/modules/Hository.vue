<template>
  <div class="whole">
    <!--<a-row>
      <a-col>
        车牌号：
        <a-input-search
          placeholder="请输入车牌号"
          style="width: 200px"
          @search="onSearch"
        />
      </a-col>
      <a-col>
        <components :is="elements[0].name" :config="elements[0].data"></components>
      </a-col>
    </a-row>-->
  </div>
</template>

<script>
  import {getAction} from "@/api/manage";
  import carMixin from '@/views/application/onlines/car/config/mixin.js'

  export default {
    name: "Hository",
    components: Object.assign(
      carMixin.components,
    ),
    data() {
      return {
        elements: [],
      }
    },
    methods: {
      onSearch(value) {
        console.log(value)
      },
    },
    created() {
      /*var that = this;
      getAction('application/online/component/getComponentsById', {projectId: '64bde8104c704ac8a34ed02fa0b89921'}).then(res => {
        res.result.forEach(item => {
          var data = item.data;
          that.elements.push({
            name: item.name,    //组件名字
            data: JSON.parse(data),  //组件数据
          })
        })
      });*/
    }
  }
</script>

<style scoped>
  .increase{
    margin: 20px;
  }
</style>