<template>
  <div class="styleBorder">
    <a-tabs v-if="config[0].tabs" :value="tabKey" @change="(active) => tabKey = active">
      <a-tab-pane :tab="items.title" :key="(indexs+1)" v-for="(items,indexs) in config[0].tabs">
        <a-row :gutter="config[2].gutterKey">
          <a-col :span="item.data[1].space" v-for="(item,index) in config[0].list[indexs]">
            <div class="element-list" @click="changeDataItem(item)">
              <div v-if="config[0].isDelete" class="element-list-del" @click="removeElement(indexs,index)" style="position: relative">
                <a-icon type="delete" style="font-size: 22px;position: absolute;z-index: 10;top:10px; right: 20px;"/>
              </div>
              <component :finalSingleValue="finalSingleValue" v-if="item && tabKey === (indexs+1)" :is="item.name" :config="item.data"></component>
            </div>
          </a-col>
        </a-row>
      </a-tab-pane>
      <!--这里的给的数据要与data.js里面的ButtonTwo对应-->
      <div slot="tabBarExtraContent" style="margin: -10px -4px -10px 0;">
        <component is="CButton" :config="config"/>
      </div>
    </a-tabs>
  </div>
</template>

<script>
  import carMixin from '@/views/application/onlines/car/config/mixin.js'
  import CButton from '../list/ButtonTwo'

  export default {
    name: "tabs",
    components: Object.assign(
      carMixin.components,
      {CButton}
    ),
    data() {
      return {
        tabKey: 1
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
      finalSingleValue: {
        type: String,
        default: () => ''
      }
    },
    created() {
      //创建的时候没有gutterKey 会报错
      /*this.config[2] = {gutterKey: 10, current: 0};*/
    },
    methods: {
      removeElement(indexs, index) {
        this.config[0].list[indexs].splice(index, 1);
      },
      changeDataItem(item) {
        console.log(item);
        /*this.element = item;*/
      }
    },
  }
</script>

<style scoped>
  .element-list .element-list-del {
    display: none;
    cursor: pointer;
  }

  .element-list:hover .element-list-del {
    display: block;
  }
</style>
<style scoped>
  .styleBorder {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 0.5);
    border-radius: 3px;
    padding: 20px 30px;
    margin: 10px 0px;
  }
</style>