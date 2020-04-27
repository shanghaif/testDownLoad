<template>
  <div class="tree-cheta">
    <div style="display: inline-block;margin: 10px;">
      <Search @searchChange="changeTree"></Search>
    </div>
    <a-spin :spinning="spinning" style="margin-top: -10px">
      <a-tree
        @expand="onExpand"
        @select="onSelect"
        :treeData="treeData"
        :defaultExpandAll="defaultExpandAll"
        :expandedKeys="expandedKeys"
        :defaultExpandParent="defaultExpandParent"
        :autoExpandParent="autoExpandParent"
        :selectedKeys="selectedKeys"
      >
        <span slot="organ" slot-scope="record" class="cheta-no-select">
          <a-icon type="aliyun"/><ellipsis :length="28" tooltip> {{ record.title }}</ellipsis>({{getChildrenCount(record)}})
        </span>
        <span slot="car" slot-scope="record" :style="{'color': getConstant(record.statusRun).color}"
              class="cheta-no-select">
          <i class="iconfont icon-cheliang-"></i> {{record.title}}
        </span>
      </a-tree>
    </a-spin>
  </div>
</template>

<script>
  import { getAction } from '@/api/manage'
  import Search from '@views/chetaui/input/search/Index'
  import constant from '@views/application/car//api/constant.js'
  import Ellipsis from '@/components/Ellipsis'

  export default {
    name: 'carData',
    components: {
      Search, Ellipsis
    },
    props: {
      carType: {
        type: String,
        default: "allSum",
      }
    },
    data() {
      return {
        visible: false,
        expandedKeys: [],
        autoExpandParent: true,
        selectedKeys: [],
        treeData: [],
        spinning: true,
        defaultExpandAll: true,
        defaultExpandParent: true,
        visible1: true,
        result: []
      }
    },


    methods: {
      getData(item) {
        var action = null
        if (item.key == "allSum") {
          action = getAction('/application/car/vehiclenetwork/getcount')
        }
        else if (item.key == "assignmentSum") {
          action = getAction('/application/auth/base/getOrganTree')
        }
        else if (item.key == "leaveSum") {
          action = getAction('/application/auth/base/getOrganTree')
        }
        else if (item.key == "unusualSum") {
          action = getAction('/application/auth/base/getOrganTree')
        }

        var $this = this
        action.then(res => {
          $this.result = res.result
          $this.initTree(res.result, $this.treeData)
          $this.openChildren($this.treeData[0])
          $this.spinning = false
        })

      },
      onExpand(expandedKeys) {
        console.log('onExpand', expandedKeys)
        this.expandedKeys = expandedKeys
        this.autoExpandParent = false
      },
      initTree(arr, result) {
        var $this = this
        arr.forEach(inner => {
          if (inner) {
            var innerItem = {
              'title': inner.name,
              'key': inner.id,
              'treeType': inner.treeType,
              'lng': inner.lng,
              'lat': inner.lat,
              children: [],
              'statusRun': inner.statusRun,
              terminalNum: inner.terminalNum
            }
            // var innerItem = Object.assign(inner, tmp)
            if (inner.children) {
              $this.initTree(inner.children, innerItem.children)
            }
            if (inner.treeType != 2) {
              innerItem.scopedSlots = { title: 'organ' }
            } else {
              innerItem.scopedSlots = { title: 'car' }
            }
            if (inner.treeType != 2) {
              result.push(innerItem)
            } else if (!$this.keyword) {
              result.push(innerItem)
            } else if (innerItem.title.indexOf($this.keyword) != -1) {
              result.push(innerItem)
            }

          }
        })
      },
      getChildrenCount(item) {
        var count = 0
        item.children.forEach(inner => {
          if (inner.treeType == 2) {
            count += 1
          }
        })
        item.children.forEach(inner => {
          count += this.getChildrenCount(inner)
        })
        return count
      },
      openChildren(item) {
        this.expandedKeys.push(item.key)
        /*item.children.forEach(inner => {
          this.openChildren(inner);
        })*/
      },
      closeChildren(item) {
        this.expandedKeys.forEach((inner, index) => {
          if (inner === item.key) {
            this.expandedKeys.splice(index, 1)
          }
        })
        item.children.forEach(inner => {
          this.closeChildren(inner)
        })
      },
      onSelect(selectedKeys, info) {
        this.visible1 = true
        this.defaultExpandAll = true
        var data = info.node.dataRef
        var flag = true
        if (!flag) {
          this.closeChildren(data)
        } else {
          this.openChildren(data)
        }

        this.selectedKeys = selectedKeys
      },
      getConstant(type) {
        var obj = constant[type]
        return obj
      },
      changeTree(value) {
        this.keyword = value
        this.treeData = []
        this.initTree(this.result, this.treeData)
      }
    }
  }
</script>

<style lang="less" scoped>
  .tree-cheta {
    height: calc(100% - 4px) !important;
  }
</style>