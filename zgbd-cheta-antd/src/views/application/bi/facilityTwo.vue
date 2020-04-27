<template>
    <div class="right_total" id="container" style="width:100%; height:750px;margin: 0px -15px 40px 0px ;align-content: center"></div>
</template>

<script>
  // import AMap from 'AMap'
  import { httpAction } from '@/api/manage'
  export default {
    data() {
      return {
        visible: true,
        expandedKeys: ['0-0-0', '0-0-1'],
        autoExpandParent: true,
        selectedKeys: [],
        treeData: [],
        current: ['mail'],
        openKeys: ['sub1']
      }
    },
    mounted() {
      this.init()
    },
    created() {
      httpAction('/application/auth/base/getOrgan', {}, 'get').then(res => {
        res.result.forEach(item => {
          var result = { 'title': item.name, 'key': item.id, children: [] }
          if (item.children) {
            item.children.forEach(item1 => {
              var result1 = { 'title': item1.name, 'key': item1.id, children: [] }
              if (item1.children) {
                item1.children.forEach(item2 => {
                  var result2 = { 'title': item2.name, 'key': item2.id, children: [] }
                  result1.children.push(result2)
                })
              }
              result.children.push(result1)
            })
          }
          this.treeData.push(result)
        })
      })
    },
    methods: {
      onExpand(expandedKeys) {
        console.log('onExpand', expandedKeys)
        this.expandedKeys = expandedKeys
        this.autoExpandParent = false
      },
      handleClick(e) {
        console.log('click', e)
      },
      titleClick(e) {
        console.log('titleClick', e)
      },
      onClose() {
        this.visible = false
      },
      toggle() {
        this.visible = !this.visible

      },
      init: function() {
        var map = new AMap.Map('container', {
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom: 11, //初始化地图层级
          center: [116.397428, 39.90923] //初始化地图中心点
        })
      }
    }
  }
</script>
<style>
</style>