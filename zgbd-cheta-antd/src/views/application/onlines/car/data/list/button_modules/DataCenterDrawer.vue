<template>
    <a-drawer
      title="绑定初始数据"
      width="380"
      :closable="false"
      placement="right"
      @close="onChildrenLibraryClose"
      :visible="libraryVisibleChildren"
    >
      <a-spin :spinning="spinning">
        <a-row style="margin-bottom: 1rem">
          <a-col>
            <a-input-search class="input" placeholder="请输入要搜索的关键字" @search="onSelectData" enterButton="搜索"/>
          </a-col>
        </a-row>
        <a-table bordered :dataSource="dataCenterList" :customRow="clickrow" :columns="columns" size="small" >
          <span slot="url" slot-scope="text, record">
            {{briefUrl(text)}}
          </span>
        </a-table>
        <p>
          <a-tooltip placement="top" title="跳转数据中心">
            <a-button @click="openCenter" type="link">数据中心</a-button>
          </a-tooltip>
        </p>
      </a-spin>
    </a-drawer>
</template>

<script>
    import {getAction} from "@/api/manage";

    export default {
        name: "DataCenterDrawer",
        data(){
            return{
                columns: [
                    { title: '字段名', dataIndex: 'name', width: '30%', scopedSlots: { customRender: 'name' }, align: 'center'},
                    { title: '路径', dataIndex: 'url', scopedSlots: { customRender: 'url' }, align: 'center'},
                    { title: '类型', dataIndex: 'type', scopedSlots: { customRender: 'type' }, align: 'center'},
                ],
                //当前点击的是哪个按钮
                buttonIndex : 0,
                //图标库子项drawer
                libraryVisibleChildren : false,
                //加载中
                spinning : false,
                //按钮内部数据
                modal : [],
                //数据中心
                dataCenterList: [],
                url : {
                    getDataCenter : "/application/online/component/dataCenter/queryAll",
                },
            }
        },
        props: {
            config: {
                type: Array,
                default: () => []
            },
            params:{
              type : Object,
              default: () => {}
            }
        },
        created(){
            this.init(null);
        },
        methods:{
            openCenter(){
              window.open('/dataCenter')
            },
            clickrow (record,index) {
              var that = this;
              return {
                on: { // 事件
                  click: () => {
                    that.bindDataCenter(record);
                  },
                },
              }
            },
            onSelectData(value){
                this.init({name:value});
            },
            showDrawer(modal,index){
                var that = this;
                that.libraryVisibleChildren = !that.libraryVisibleChildren
                that.buttonIndex = index
                that.modal = modal
            },
            //libraryChildrenDrawer
            onChildrenLibraryClose(){
                this.libraryVisibleChildren = !this.libraryVisibleChildren
            },
            //绑定数据中心
            bindDataCenter(item){
                var that = this;
                that.modal.id = item.id;
                that.modal.url = item.url;
                that.modal.type = item.type;
                that.modal.tagName = item.tagName;
                that.modal.color = item.color;
                that.modal.httpName = item.name;
                try{
                  let arr = [],data = {} ,flowId = '';
                  arr = JSON.parse(item.params);
                  if(arr && arr.length){
                    arr.forEach(item =>{
                      data[item.title] = item.field;
                    })
                  }
                  that.modal.params = that.modal.params || {}
                  if(that.modal.params.flowId){
                    flowId = that.modal.params.flowId;
                  }
                  that.modal.params = {};
                  Object.assign(that.modal.params, data,{flowId:flowId});
                  if(that.modal.params.flowId === ''){
                    delete that.modal.params.flowId
                  }
                }catch (e) {
                  console.log('参数为null');
                }
                if(that.modal.url != ""){
                    that.$message.success("绑定 ("+(item.name||'接口')+") 成功");
                    /*绑定成功后管理数据流
                    that.libraryVisibleChildren = !this.libraryVisibleChildren;*/
                    that.$emit('ok',that.modal);
                }else{
                    that.$message.error("绑定失败!");
                }
            },
            //初始化 填充dataCenter
            init(params){
                let that = this;
                that.spinning = !that.spinning;
                that.dataCenterList = [];
                let tempParam = Object.assign({},that.params,params);
                getAction(that.url.getDataCenter,tempParam).then(res => {
                    res.result.forEach(item =>{
                        that.dataCenterList.push(item);
                    })
                    that.spinning = !that.spinning;
                });
            },
            briefUrl(url){
                if(url.lastIndexOf('/') == -1){
                    return url;
                }else{
                    url = url.substring(url.lastIndexOf('/'),url.length);
                    url = url.indexOf('?') != -1?url = url.substring(0,url.indexOf('?')):url;
                    return url;
                }
            },
        }
    }
</script>

<style scoped>
  .tag-sty {
    margin-left: 1rem;
    width: 50px;
    text-align: center;
  }
</style>