<template>
  <div class="dati">
    <div class="search">
      <a-input-search placeholder="关键字" style="width: 200px" @search="onSearch"/>
    </div>
    <div class="table" @click="change">
      <a-table :columns="columns" :pagination="{ pageSize: 5 }" :dataSource="valueList"
               class="components-table-demo-nested">
        <span slot="operation" slot-scope="text, information" class="table-operation">
          <!--<a class="textOpen" @click="onDetails(information)"> 查看详情 </a>-->
          <a class="textOpen" @click="onMultiplex(information)"> 复用 </a>
          <a class="textOpen" @click="onModify(information)"> 修改 </a>
          <a class="textOpen" @click="onDelect(information)"> 删除 </a>
      </span>
        <a-table
          slot="expandedRowRender"
          slot-scope="text"
          :columns="datas"
          :dataSource="valueResult"
          :pagination="false"
        >
        </a-table>
      </a-table>
    </div>
  </div>
</template>

<script>
  import { getAction, postAction } from '@/api/manage'

  const columns = [
    { title: '班制名称', dataIndex: 'name', key: 'name' },
    { title: '排版方式', dataIndex: 'gender', key: 'gender' },
    {
      title: '时间', dataIndex: '', key: '', customRender: function(t, r, index) {
        if (t.fixationStart && t.fixation_end) {
          return t.fixationStart + '  至  ' + t.fixation_end
        }
        else if (t.durationStart && t.durationEnd) {
          return t.durationStart + '  至  ' + t.durationEnd
        }
        // if (t.fixationStart ){
        //   return t.fixationStart
        // }
      }
    },
    { title: '操作', key: '', scopedSlots: { customRender: 'operation' } }
  ]


  const datas = [

    { title: '排班名称', dataIndex: 'property', key: 'property' },
    { title: '开始时间', dataIndex: 'startTime', key: 'startTime' },
    // { title: '排班结束时间', key: 'endTime', scopedSlots: { customRender: 'status' } },
    { title: '结束时间', dataIndex: 'endTime', key: 'endTime' },
    { title: '线路/片区名称', dataIndex: 'name', key: 'name' },
    { title: '起点', dataIndex: 'startSite', key: 'startSite', width: 250 },
    { title: '终点', dataIndex: 'endSite', key: 'endSite', width: 250 },
    { title: '范围', dataIndex: 'radius', key: 'radius', width: 150 },
    { title: '地址', dataIndex: 'address', key: 'address', width: 150 }
  ]

  export default {
    name: 'informationSchedulingTableGunters',
    data() {
      return {
        columns,
        datas,
        schedulingId: '',
        onMultiplexId: ''
      }
    },
    props: {
      valueList: {
        type: Array,
        default: () => []
      },
      names: {
        type: String,
        default: () => []
      }

    },
    watch: {},
    methods: {
      onModify(information) {//修改
        information.type = 'updatevalue'
        this.toggles(information)
      },
      onDelect(information) {//删除
        this.schedulingId = information.id//所点击的id
        var params = { schedulingId: this.schedulingId }
        getAction('/application/car/scheduling/deleteScheduling', params).then(res => {
          // 调用页面刷新方法
          this.change()
        })
      },
      onMultiplex(information) {//复用
        debugger
        this.onMultiplexId = information.id//所点击的id
        information.type = 'copy'
        this.toggles(information)
      },
      // 复用
      toggles: function(information) {//点击进入排班详情
        var $this = this
        this.$router.push({ name: '新建排班', params: { information: information } })
      },
      onSearch(value) {//查询排班
        // 清空 调方法
        this.valueResult = []
        this.count = []
        debugger
        var params = { pageNo: 1, pageSize: 4, name: value, carId: this.names }
        debugger
        getAction('/application/car/scheduling/getSchedulingListPage', params).then(res => {
          debugger
          if (res.count == 0) {
            this.valueList = 0//测试
          } else {
            this.valueList = res.date
          }
          // this.data.push({
          //   // 班制名称
          //   // 排版方式
          //   // 时间
          //   address: res.name,
          //   addresss: res.gender,
          //   addressss: res.fixationStart + '至' + res.fixation_end||res.week||res.durationStart + '至' + res.durationEnd
          // })

        })

      },
      change(params) {
        this.schedulingId = this.valueList[0].id
        debugger
        params = {
          schedulingId: this.schedulingId
        }
        getAction('/application/car/scheduling/getSchedulingList', params).then(res => {
          var that = this
          that.valueResult = res.result
          that.valueResult.forEach(item => {
            debugger
            this.datas.push({
              property: item.property || '-',//排班名称
              startTime: item.startTime || '-',//排班开始时间
              endTime: item.endTime || '-',//排班结束时间
              name: item.lineName || item.name || '-',//线路/片区名称
              startSite: item.startSite || '-',//起点
              endSite: item.endSite || '-',//终点
              radius: item.radius || '-',//范围
              address: item.address || '-'//地址
            })
          })
        })
      }
    },
    created() {
      this.$parent.carInfo()
    }
  }
</script>

<style scoped>
  .textOpen {
    margin: 0 4px;
    cursor: pointer;
  }

  .dati {
    margin: 10px 0px 10px 20px;
  }

  .table {
    margin-top: 10px;
  }

</style>