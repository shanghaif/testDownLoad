<template>
  <div class="occupy">
    <!--TODO 这里的权限没绑定  :name="item.size"-->
    <authButton :name="item.size" v-for="(item,index) in config[0].buttons">
        <a-button
          :style="`${styRight(index)}`"
          @click="showButton(item.modal,item.modalDetail,index)"
          :size="item.size"
          :shape="item.shape"
          :type="item.type"
          v-if="config[0].buttons">
          <a-icon :type="item.icon"/>
          {{item.title}}
        </a-button>
    </authButton>
    <buttonModal ref="button_modal" :config="config"></buttonModal>
  </div>
</template>

<script>
  import buttonModal from './button_modules/submitModal'
  export default {
    name: "ButtonTwo",
    components :{
        buttonModal
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    created(){
      if(this.config[0].select == undefined){
        this.config[0].select = 'right';
      }
    },
    methods: {
      styRight(index){
        let that = this;
        let direction = that.config[0].select;
        if(index == 0){
          return 'margin-'+direction+':15px;'+(direction=='right'?'margin-left':'margin-right')+':5px;float:'+direction;
        }else{
          return 'margin:0px 5px;float: '+direction;
        }
      },
      // 点击 出弹框
      showButton(modal, modalDetail,index) {
        /*数据结构 其他地方调用form表单是只需调用下面这个方法，
        传相应的组件（组件通过projectid去查）和modal属性即可
        "modalDetail" : {
            //对话框属性
            title: "新增记录",
            okText : "确认",
            cancelText : "取消"
        },
        "modal" : [{
            //组件
            name: item.name,
            data: JSON.parse(item.data),
            type: "post",
            url: "/application/car/vehicle/refuel/insertOrUpdate",
            color: "blue",
            tagName: "加油登记"
          }]
          index:当前点击的按钮 默认传0*/
        this.$refs.button_modal.showButton(modal,modalDetail,index);
      },
    }
  }
</script>

<style scoped>
  .occupy div{
    display: inline;
    /*margin: 10px;*/
  }
  .styleOne {
    text-align: right;
    padding-left: 0px !important;
    margin-bottom: 10px;
  }

  .occupy {
    width: 100%;
    height: 32px;
    margin: 10px 0px;
  }

</style>