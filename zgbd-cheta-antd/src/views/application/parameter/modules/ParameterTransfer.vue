<template>
  <div>
    <a-modal
      title="车辆转移"
      :width="900"
      :visible="visible"
      @cancel="handleCancel"
      @ok="submit"
      cancelText="关闭"
      :okType="(checkedKeys.length > 0 && currentOrgan.title) ? 'primary' : 'disabled'"
      wrapClassName="ant-modal-cust-warp">
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="12">
          <a-card title="选择需要转移的车辆：" style="width: 400px;" :loading="treeLoading">
            <span slot="extra"> {{ checkedKeys.length }} 项 </span>
            <Search @searchChange="changeTree"></Search>
            <a-tree
              checkable
              @expand="onExpand"
              @select="onSelect"
              @check="onCheck"
              :treeData="treeData"
              :defaultExpandAll="defaultExpandAll"
              :expandedKeys="expandedKeys"
              :defaultExpandParent="defaultExpandParent"
              :autoExpandParent="autoExpandParent"
              :selectedKeys="selectedKeys"
              :checkedKeys="checkedKeys"
              class="cheta-mt-10"
              style="height: 300px;overflow-y: scroll"
            >
              <span slot="organ" slot-scope="record" class="cheta-no-select">
                <a-icon type="aliyun"/> {{ record.title }}({{getChildrenCount(record)}})
              </span>
              <span slot="car" slot-scope="record" :style="{'color': getConstant(record.statusRun).color}" class="cheta-no-select">
                <i class="iconfont icon-cheliang-"></i> {{record.title}}
              </span>
            </a-tree>
          </a-card>
        </a-col>
        <a-col class="gutter-row" :span="12">
          <a-card title="选择需要转移到的机构：" style="width: 400px;" :loading="organLoading">
            <span slot="extra"> {{ currentOrgan.title }} </span>
            <Search @searchChange="changeTree"></Search>
            <a-tree
              :treeData="organTree"
              @select="onSelectOrgan"
              class="cheta-mt-10"
              style="height: 300px;overflow-y: scroll"
            >
              <span slot="organ" slot-scope="record" class="cheta-no-select">
                <a-icon type="aliyun"/> {{ record.title }}({{getChildrenCount(record)}})
              </span>
              <span slot="car" slot-scope="record" :style="{'color': getConstant(record.statusRun).color}" class="cheta-no-select">
                <i class="iconfont icon-cheliang-"></i> {{record.title}}
              </span>
            </a-tree>
          </a-card>
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>

<script>
  import { getAction,postAction } from '@/api/manage';
  import Search from '@views/chetaui/input/search/Index';
  import constant from '@/views/application/car/api/constant.js';
  export default {
    name: 'ParameterTransfer',
    components: {Search},
    data () {
      return {
        visible: false,
        expandedKeys: [],
        checkedKeys: [],
        autoExpandParent: true,
        selectedKeys: [],
        treeData: [],
        defaultExpandAll: true,
        defaultExpandParent:true,
        organTree: [],
        currentOrgan: {},
        treeLoading: false,
        organLoading: false
      }
    },
    methods: {
      reloadData () {
        this.treeData = []
        this.organTree = []
        this.checkedKeys = [];
        this.currentOrgan = {};
        this.treeLoading = true;
        this.organLoading = true;
        // 车辆树
        getAction('/application/auth/base/getOrganTree', {}).then(res => {
          this.initTree(res.result, this.treeData);
          this.openChildren(this.treeData[0]);
          this.treeLoading = false;
        })
        // 机构树
        getAction('/application/auth/organ/getOrganTree', {}).then(res => {
          this.initTree(res.result, this.organTree);
          this.openChildren(this.organTree[0]);
          this.organLoading = false;
        })
      },
      open () {
        this.visible = true;
        this.reloadData();
      },
      handleCancel () {
        this.visible = false;
      },
      onExpand(expandedKeys) {
        this.expandedKeys = expandedKeys
        this.autoExpandParent = false
      },
      onCheck(checkedKeys,info){
        this.checkedKeys=checkedKeys
        var list = info.checkedNodes.map(item => item.data.props.dataRef);
        this.$emit('carCheckShow',list)
      },
      initTree(arr, result){
        var $this = this;
        arr.forEach(inner => {
          if (inner) {
            var innerItem = {
              'title': inner.name, 'key': inner.id,'treeType': inner.treeType ,'lng': inner.lng,'lat': inner.lat, children: [], 'statusRun': inner.statusRun, terminalNum:inner.terminalNum
            }
            if (inner.children) {
              $this.initTree(inner.children, innerItem.children);
            }
            if (inner.treeType != 2) {
              innerItem.scopedSlots = {title: 'organ'}
            } else {
              innerItem.scopedSlots = {title: 'car'}
            }
            if (inner.treeType != 2) {
              result.push(innerItem);
            } else if (!$this.keyword) {
              result.push(innerItem);
            } else if (innerItem.title.indexOf($this.keyword) != -1) {
              result.push(innerItem);
            }

          }
        })
      },
      getChildrenCount(item){
        var count=item.children.length
        if(count>0) {
          item.children.forEach(inner=>{
            count += this.getChildrenCount(inner)
          })
        }
        return count
      },
      openChildren(item){
        this.expandedKeys.push(item.key);
        item.children.forEach(inner => {
          this.openChildren(inner);
        })
      },
      closeChildren(item){
        this.expandedKeys.forEach((inner,index) => {
          if (inner === item.key) {
            this.expandedKeys.splice(index,1);
          }
        })
        item.children.forEach(inner => {
          this.closeChildren(inner);
        })
      },
      onSelect(selectedKeys, info) {
        this.defaultExpandAll = true
        var data = info.node.dataRef;
        var flag = true;
        this.expandedKeys.forEach((inner,index) => {
          if (inner === data.key) {
            flag = false;
          }
        });
        if (!flag) {
          this.closeChildren(data);
        } else {
          data.children.forEach(item => {
            this.expandedKeys.push(item.key);
          })
        }
        this.selectedKeys = selectedKeys
      },
      onSelectOrgan (selectedKeys, info) {
        this.currentOrgan = info.node.dataRef;
      },
      getConstant (type) {
        var obj = constant[type];
        return obj;
      },
      changeTree (value) {
        this.keyword = value;
        this.treeData = [];
        this.initTree(this.result, this.treeData);
      },
      submit () {
        var carIds = this.checkedKeys;
        var currentOrgan = this.currentOrgan;
        var $this = this;
        postAction('/application/car/account/carTransfer', {
          carIds: carIds,
          organId: currentOrgan.key
        }).then(res => {
          $this.$message.success(res.message)
          $this.handleCancel();
        })
      }
    }
  }
</script>

<style scoped>

</style>