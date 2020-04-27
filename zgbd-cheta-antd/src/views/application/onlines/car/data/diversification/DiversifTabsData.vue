<template>
  <a-tabs>
    <a-tab-pane tab="标签" key="1">
      <a-row>
        <a-card>
          是否允许删除内部组件：
          <a-switch style="margin-left: 10px"  v-model="config[0].isDelete">
            <a-icon type="check" slot="checkedChildren"/>
            <a-icon type="close" slot="unCheckedChildren"/>
          </a-switch>
        </a-card>
        <a-card>
          <template v-for="(item, index) in config[0].tabs">
            <a-form-item :label="'字段' + (index + 1)" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" style="margin-bottom:0;">
              <a-form-item :style="{ display: 'inline-block', width: 'calc(46% - 15px)', marginRight: '10px' }">
                <a-input placeholder="字段名" v-model="item.title"/>
              </a-form-item>
              <a-button style="margin-right: 15px;" @click="showComponents(index)">填充</a-button>
              <a-icon
                class="dynamic-delete-button"
                type="minus-circle-o"
                @click="(function(index){removeTabField(index)})(index)"
              />
              <span style="margin-left: 20px">
                  <a-badge :count="config[0].list[index].length" :numberStyle="{backgroundColor: '#52c41a'} "/>
              </span>
            </a-form-item>
          </template>
          <a-form-item label="新增" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <a-button
              type="dashed"
              @click="addTabField"
            >
              <a-icon type="plus"/>
              添加字段
            </a-button>
          </a-form-item>
        </a-card>
      </a-row>
    </a-tab-pane>

    <a-tab-pane tab="按钮" key="2">
      <component is="CButtonData" :config="config"/>
    </a-tab-pane>

    <!--组件库-->
    <component-modal ref="componentmodal" :config="config"></component-modal>
  </a-tabs>
</template>

<script>
  import ComponentModal from "@/views/application/onlines/car/data/list/button_modules/ComponentModal";
  import CButtonData from '../list/ButtonTwoData'

  export default {
    name: "tabs",
    components: {
        CButtonData,
        ComponentModal
    },
    data() {
      return {
        modalType : 2,
        //获取data.js里面的数据
        currentData: {},
        //车务组件数据
        data: [],
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      //显示组件库
      showComponents(index) {
          let that = this;
          that.$refs.componentmodal.showModal(index,that.modalType);
      },
      //添加tab
      addTabField() {
        this.config[0].tabs.push({title: '标签页'});
        this.config[0].list.push([]);
      },
      //移除tab
      removeTabField(index) {
        this.config[0].list.splice(index, 1);
        this.config[0].tabs.splice(index, 1);
      },
    }
  }
</script>

<style scoped>
</style>