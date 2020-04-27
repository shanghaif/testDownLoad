<template>
  <div>
    <a-row>
      <a-card>
        是否允许删除内部组件：
        <a-switch style="margin-left: 10px"  v-model="config[0].isButtonDelete">
          <a-icon type="check" slot="checkedChildren"/>
          <a-icon type="close" slot="unCheckedChildren"/>
        </a-switch>
      </a-card>
      <a-card>
        <div>选择按钮位置浮动</div>
        <a-radio-group name="radioGroup" class="cheta-m10-20" @change="direction" :defaultValue="config[0].select">
          <a-radio value="left">左</a-radio>
          <a-radio value="right">右</a-radio>
        </a-radio-group>
        <template v-for="(item, index) in config[0].buttons">
          <a-form-item :label="'字段' + (index + 1)" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" style="margin-bottom:0;">
            <a-form-item :style="{ display: 'inline-block', width: 'calc(46% - 15px)', marginRight: '10px' }">
              <a-input placeholder="按钮名" v-model="item.title"/>
            </a-form-item>
            <a-button @click="showIconlibrary(item.modal,item.modalDetail,index)" :icon="item.icon" :type="item.type" style="margin-right: 10px">样式</a-button>
            <a-icon
              class="dynamic-delete-button"
              type="minus-circle-o"
              @click="(function(index){removeButtonField(index)})(index)"
            />
          </a-form-item>
        </template>
        <a-form-item label="新增" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
          <a-button
            type="dashed"
            @click="addButtonField"
          >
            <a-icon type="plus"/>
            添加字段
          </a-button>
          <a-button @click="cleanButtons" style="margin-left: 10px">清空</a-button>
        </a-form-item>
      </a-card>

    </a-row>
    <data-drawer ref="datadrawer" @showButtons="showButtons" :config="config"></data-drawer>
    <component-modal ref="componentmodal" @closeDrawer="closeDrawer" :config="config"></component-modal>
  </div>
</template>
<script>
    import ComponentModal from "./button_modules/ComponentModal";
    import DataDrawer from "./button_modules/DataDrawer";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";

    export default {
        name: "ButtonTwo",
        components: {DataDrawer, ACol, ARow,ComponentModal},
        data() {
            return {
                //当前按钮添加组件位置
                buttonIndex : 0,
                //modal类型
                modalType : 1,
            }
        },
        props: {
            config: {
                type: Array,
                default: () => []
            },
        },
        methods: {
            direction(e){
                this.config[0].select =  e.target.value
            },
            closeDrawer(){
                let that = this;
                //绑定组件之后触发的方法
                //TODO that.config[0].buttons[that.buttonIndex].modal modal没值，过去之后引用不了绑定的值
                that.$refs.datadrawer.$refs.datacenterdrawer.showDrawer(
                    this.config[0].buttons[that.buttonIndex].modal[0] || {},that.buttonIndex);
            },
            //显示按钮库
            showButtons() {
                let that = this;
                that.$refs.componentmodal.showModal(that.buttonIndex,that.modalType);
            },
            showIconlibrary(modal,modalDetail,index) {
                let that = this;
                that.buttonIndex  = index;
                that.$refs.datadrawer.showIconlibrary(modal,modalDetail,index);
            },
            //清除buttons
            cleanButtons() {
                this.config[0].buttons = [];
            },
            //添加 button
            addButtonField() {
                this.config[0].buttons.push({
                    title:'按钮',type: 'default',icon:'default',size:'default',shape:''
                    ,modalDetail : {title : "车牌登记",okText : "确认",cancelText : "取消"},
                    modal:[]
                });
            },
            //移除button
            removeButtonField(index) {
                this.config[0].buttons.splice(index, 1);
            },
        },
    }
</script>

<style scoped>
  .icon:hover {border:1px solid deepskyblue;cursor:pointer;}

</style>