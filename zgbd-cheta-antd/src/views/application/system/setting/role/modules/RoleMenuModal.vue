<template>
  <a-drawer
    :title="title"
    :maskClosable="true"
    width="650"
    placement="right"
    :closable="true"
    @close="close"
    :visible="visible"
    style="height: calc(100% - 55px);overflow: auto;padding-bottom: 53px;">

    <a-form>
      <a-form-item label="所拥有的权限">
        <a-tree
          checkable
          @check="onCheck"
          :checkedKeys="checkedKeys"
          :treeData="treeData"
          @expand="onExpand"
          :expandedKeys="expandedKeysss"
          :checkStrictly="checkStrictly"/>
      </a-form-item>
    </a-form>

    <div class="drawer-bootom-button">
      <a-dropdown style="float: left" :trigger="['click']" placement="topCenter">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="switchCheckStrictly(1)">父子关联</a-menu-item>
          <a-menu-item key="2" @click="switchCheckStrictly(2)">取消关联</a-menu-item>
          <a-menu-item key="3" @click="checkALL">全部勾选</a-menu-item>
          <a-menu-item key="4" @click="cancelCheckALL">取消全选</a-menu-item>
          <a-menu-item key="5" @click="expandAll">展开所有</a-menu-item>
          <a-menu-item key="6" @click="closeAll">合并所有</a-menu-item>
        </a-menu>
        <a-button>
          树操作 <a-icon type="up" />
        </a-button>
      </a-dropdown>
      <a-popconfirm title="确定放弃编辑？" @confirm="close" okText="确定" cancelText="取消">
        <a-button style="margin-right: .8rem">取消</a-button>
      </a-popconfirm>
      <a-button @click="handleSubmit" type="primary" :loading="loading">提交</a-button>
    </div>
  </a-drawer>

</template>
<script>
  import {queryTreeList,queryRolePermission,saveRolePermission} from '@/api/api'
  import {getAction, postAction} from '@/api/manage'
  export default {
    name: "RoleModal",
    data(){
      return {
        roleId:"",
        treeData: [],
        defaultCheckedKeys:[],
        checkedKeys:[],
        expandedKeysss:[],
        allTreeKeys:[],
        autoExpandParent: true,
        //默认角色菜单取消父子关联
        checkStrictly: true,
        title:"角色权限配置",
        visible: false,
        loading: false,
      }
    },
    methods: {
      onCheck (o) {
        if(this.checkStrictly){
          this.checkedKeys = o.checked;
        }else{
          this.checkedKeys = o
        }
      },
      show(roleId){
        this.roleId=roleId
        this.visible = true;
      },
      close () {
        this.reset()
        this.$emit('close');
        this.visible = false;
      },
      onExpand(expandedKeys){
        this.expandedKeysss = expandedKeys;
        this.autoExpandParent = false
      },
      reset () {
        this.expandedKeysss = []
        this.checkedKeys = []
        this.defaultCheckedKeys = []
        this.loading = false
      },
      expandAll () {
        this.expandedKeysss = this.allTreeKeys
      },
      closeAll () {
        this.expandedKeysss = []
      },
      checkALL () {
        this.checkedKeys = this.allTreeKeys
      },
      cancelCheckALL () {
        this.checkedKeys = []
      },
      switchCheckStrictly (v) {
        if(v==1){
          this.checkStrictly = false
        }else if(v==2){
          this.checkStrictly = true
        }
      },
      handleCancel () {
        this.close()
      },
      handleSubmit(){
        let that = this;
        let params =  {
          permissionIds:that.checkedKeys,
          roleId:that.roleId
        };
        that.loading = true;
        postAction('/application/setting/rolemenu/saveRoleMenu',params).then((res) =>{
          if(res.success){
            that.loading = false;
            that.close();
          }else{
            this.$message.warning(res.message);
            that.loading = false;
            that.close();
          }
        })
      },
    },
    watch: {
      visible () {
        if (this.visible) {
          postAction('/application/setting/rolemenu/getData',{}).then(res => {
            if(res.success){
              //this.$message.success(res.message);
              this.treeData = res.result.treeList;
              this.allTreeKeys = res.result.ids;
              postAction('/application/setting/rolemenu/getRoleMenu',{roleId:this.roleId}).then((res) =>{
                if(res.success){
                  //this.$message.success(res.message);
                  this.checkedKeys = [...res.result];
                  this.defaultCheckedKeys = [...res.result];
                  //默认角色菜单合并所有
                  this.expandedKeysss = [];
                  //this.expandedKeysss = this.allTreeKeys;
                }else{
                  this.$message.warning(res.message);
                }
              })

            }else{
              this.$message.warning(res.message);
            }
          })

        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  .drawer-bootom-button {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    left: 0;
    background: #fff;
    border-radius: 0 0 2px 2px;
  }
</style>