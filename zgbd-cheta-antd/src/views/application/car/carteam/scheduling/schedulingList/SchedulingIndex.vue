<template>
  <div class="dati">
    <!--排版列表-->
    <a-row>
      <!--头部-->
      <div class="listTop">
        <span class="listTopSort">排序：</span>
        <div class="listTopSelect">
          <a-select defaultValue="2" style="width: 98px" @change="handleChange">
            <a-select-option value="1">时间正序</a-select-option>
            <a-select-option value="2">时间倒序</a-select-option>
            <a-select-option value="3">周期较短</a-select-option>
            <a-select-option value="4">周期较长</a-select-option>
          </a-select>
        </div>
        <div class="listTopInput">
          <a-input-search placeholder="排班名称关键字" style="width: 200px" @search="onSearch"/>
        </div>
        <div class="listTopDate">
          <a-range-picker @change="onChange"/>
        </div>
        <div class="listTopButton">
          <a-button type="primary" @click="newSchedulings()">
            <a-icon type="plus"/>
            新建排班
          </a-button>
        </div>
      </div>
      <!--身体-->
      <div>
      </div>
      <div class="body" v-if="informationList.length != 0">
        <!--单个-->
        <div class="bodyList">
          <div>
            <!--<a-col :xs="{ span: 24}" :md="{ span: 12}" :lg="{ span: 12}" :xl="{ span: 6}"-->
            <!--v-for="(information,index) in informationList" v-if="informationList.length !='0'">-->
            <!--<div class="bodyDati" >-->
            <!--<div class="bodyDatiTime">-->
            <!--<span class="bodyDatiTimeTwo">{{information.createTime}}</span>-->
            <!--<span class="bodyDatiTimeThree">-->
            <!--<a-dropdown>-->
            <!--<a class="ant-dropdown-link" @click="e => e.preventDefault()"> <a-icon type="ellipsis" /> </a>-->
            <!--<a-menu slot="overlay">-->
            <!--<a-menu-item>-->
            <!--<a href="javascript:;" @click="doRouterCopy(information)">复用</a>-->
            <!--</a-menu-item>-->
            <!--<a-menu-item>-->
            <!--<a href="javascript:;" @click="doRouter(information)">修改</a>-->
            <!--</a-menu-item>-->
            <!--<a-menu-item>-->
            <!--<a href="javascript:;">删除</a>-->
            <!--</a-menu-item>-->
            <!--</a-menu>-->
            <!--</a-dropdown>-->
            <!--</span>-->
            <!--</div>-->
            <!--<div>-->

            <!--</div>-->
            <!--<div class="bodyDatiText">-->
            <!--<div class="bodyDatiArrange">-->
            <!--<span class="bodyDatiArrangeOne">{{information.name}}</span>-->
            <!--<span class="bodyDatiArrangeTwo">生效中</span>-->
            <!--&lt;!&ndash;<span class="bodyDatiArrangeThree">已失效</span>&ndash;&gt;-->
            <!--</div>-->
            <!--<div class="bodyDatiDay">-->
            <!--<span class="bodyDatiDayOne">排班天数</span>-->
            <!--<span class="bodyDatiDayTwo">{{information.number}}</span>-->
            <!--</div>-->
            <!--<div class="bodyDatiColor">-->
            <!--<span class="bodyDatiColorone">颜色表示</span>-->
            <!--<span class="bodyDatiColorTwo" :style="{backgroundColor: information.color}"></span>-->

            <!--</div>-->
            <!--<div class="bodyDatiRemarks">-->
            <!--<span class="bodyDatiRemarksOne">备注说明</span>-->
            <!--<span class="bodyDatiRemarksTwo">{{information.comment}}</span>-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--</a-col>-->
          </div>
          <!--表-->
          <div class="bodyListTa">
            <a-table :columns="columns" :dataSource="informationList" :scroll="{ x: 1500, y: 300 }">
              <span slot="operation"  slot-scope="text, information" class="table-operation">
              <!--<a class="textOpen" @click="onDetails(information)"> 查看详情 </a>-->
              <a class="textOpen" @click="onMultiplex(information)"> 复用 </a>
              <a class="textOpen" @click="onModify(information)"> 修改 </a>
              <a class="textOpen" @click="onDelect(information)"> 删除 </a>
          </span>
            </a-table>
          </div>


        </div>
        <!--<div class="bodyPage">-->
          <!--<a-col span="24"> &lt;!&ndash;翻页&ndash;&gt;-->
            <!--<div style="height: 72px;padding: 20px;background-color: #F0F2F5;width: 100%">-->
              <!--<div style="float: right">-->
                <!--<a-pagination :defaultCurrent="1" @change="onShowSizeChange" :total="driverTotal"/>-->
              <!--</div>-->
            <!--</div>-->
          <!--</a-col>-->
        <!--</div>-->

      </div>
      <!--未搜索到相关内容-->
      <div v-else style=" padding: 200px 25px;height: 662px;margin-top: 2px solid F0F2F5">
        <a-col span="24">
          <template>
            <a-empty/>
          </template>
        </a-col>
      </div>
    </a-row>
  </div>
</template>

<script>
  import { getAction } from '@/api/manage'
  const columns = [
    { title: '名称', dataIndex: 'name', key: 'name', width: 200 ,align: "center", },
    { title: '颜色', dataIndex: 'color', key: 'color', width: 150 ,align: "center",},
    { title: '备注', dataIndex: 'comment', key: 'comment', width: 150,align: "center", },
    { title: '排班模式', dataIndex: 'gender', key: 'gender', width: 150,align: "center", },
    {title: '排班日期', dataIndex: '', key: '', width: 250,align: "center",
      customRender: function(t, r, index) {
        if (t.fixationStart && t.fixation_end) {
          return t.fixationStart + '  至  ' + t.fixation_end
        }
        else if (t.durationStart && t.durationEnd) {
          return t.durationStart + '  至  ' + t.durationEnd
        }
        else if (t.complete) {
          var completesValue = t.complete
          var ss = completesValue.split(',')
          var array = []
          var sa = ''
          ss.forEach(item => {
            if (item == 1) {
              array = array + sa + '周一'
              sa = ','
            } else if (item == 2) {
              array = array + sa + '周二'
              sa = ','

            } else if (item == 3) {
              array = array + sa + '周三'
              sa = ','

            } else if (item == 4) {
              array = array + sa + '周四'
              sa = ','

            } else if (item == 5) {
              array = array + sa + '周五'
              sa = ','

            } else if (item == 6) {
              array = array + sa + '周六'
              sa = ','

            } else if (item == 7) {
              array = array + sa + '周日'
              sa = '  ,  '
            }
          })
          return array
        }
      }
    },
    { title: '操作', key: '', scopedSlots: { customRender: 'operation' },width:250,align: "center", },
  ]

  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`
    })
  }
  export default {
    name: 'SchedulingIndex',
    data() {
      return {
        spinning: false,
        informationList: [],
        driverTotal: this.count * 10 / 8,
        informations: {},
        information: {},
        data,
        columns
      }
    },
    created() {
      this.initDriverInfo({ pageNo: 1, pageSize: 8 })

    },
    watch: {
      // 监听路由
      '$route'() {
        this.initDriverInfo({ pageNo: 1, pageSize: 8 })
      }
    },
    methods: {
      onDelect(information){//删除
        this.schedulingId = information.id//所点击的id
        var params = { schedulingId:this.schedulingId }
        getAction('/application/car/scheduling/deleteScheduling',params).then(res => {
          // 调用页面刷新方法
          this.initDriverInfo({ pageNo: 1, pageSize: 8 })
        })
      },
      doRouterCopy(information){
        information.type = 'copy';
        this.toggles(information);
      },
      doRouter(information){
        information.type = 'updatevalue';
        this.toggles(information);
      },

      // onMultiplex(information){//复用
      //   debugger
      //   this.onMultiplexId = information.id//所点击的id
      //   information.type = 'copy';
      //   this.toggles(information);
      // },
      // 复用
      toggles: function(information) {//点击进入排班详情
        var $this = this
        this.$router.push({ name: '新建排班', params: { information: information } })
      },
      onModify(information){//修改
        information.type = 'updatevalue';
        this.toggles(information);
      },
      onMultiplex(information){//复用
        debugger
        this.onMultiplexId = information.id//所点击的id
        information.type = 'copy';
        this.toggles(information);
      },
      doRouterCopy(information) {
        information.type = 'copy'
        this.toggles(information)
      },
      doRouter(information) {
        information.type = 'updatevalue'
        this.toggles(information)
      },

      handleChange(value) {
        console.log(`selected ${value}`)
        this.informationList = []
        var params = { pageNo: 1, pageSize: 8, type: value }
        this.initDriverInfo(params)
      },
      onChange(date, dateString) {
        console.log(date, dateString)
      },
      onSearch(value) {
        this.informationList = []
        var params = { pageNo: 1, pageSize: 8, name: value }
        this.initDriverInfo(params)
      },
      newSchedulings() {
        this.$router.push({ path: '/newScheduling' })
      },
      // 复用
      toggles: function(information) {//点击进入排班详情
        var $this = this

        this.$router.push({ name: '新建排班', params: { information: information } })
      },

      onShowSizeChange(current, pageSize) {//翻页
        this.initDriverInfo({ pageNo: current, pageSize: 8, organid: this.organValue })
      },
      initDriverInfo(params) {
        // organId: this.userOrgan,
        // getAction('/application/car/scheduling/getPage', params).then(res => {//获取分页
          getAction('/application/car/scheduling/getPage', params).then(res => {
          debugger
          let $this = this
          $this.informationList = []
          $this.count = res.count
          $this.informationList = res.data//数组
          $this.pageSizes = res.data.length

          this.informationList.forEach(item => {
            debugger
            this.data.push({
              name: item.name || '-',//名称
              color: item.color || '-',//颜色
              comment: item.comment || '-',//备注
              gender: item.gender || '-',//排班模式
              fixationStart: item.fixationStart || '-',//排班起始日期
              fixation_end: item.fixation_end || '-',//排班结束日期
              durationStart: item.durationStart || '-',//排班起始日期
              durationEnd: item.durationEnd || '-',//排班起始日期
              complete: item.complete || '-'//排班周

            })
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .textOpen{
    margin: 0 4px;
  }
  .bodyListTa {
    margin: 10px;
  }
  .dati {
    background: #f0f2f5;
    padding: 0px 20px 10px 10px;
  }

  .listTop {
    height: 73px;
    line-height: 73px;
    padding: 0 20px;
    background: #ffffff;
    border-radius: 8px;
    margin: 6px;
  }

  .listTopSort {
    display: inline-block;
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: rgba(102, 102, 102, 1);
  }

  .listTopSelect {
    display: inline-block;
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: rgba(102, 102, 102, 1);
  }

  .listTopInput {
    margin: 0 15px;
    display: inline-block;
  }

  .listTopDate {
    display: inline-block;
  }

  .listTopButton {
    display: inline-block;
    float: right;
    margin: 0 10px;
  }

  .body {
    margin: 8px 0px;
    height: calc(100vh - 180px) !important;
  }
  .bodyList{
    height: 550px;
  }

  .bodyDati {
    margin: 8px;
    padding: 15px 0px 15px 10px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    height: 245px;
    cursor: pointer;

  }

  .bodyDati:hover {
    opacity: 1;
    box-shadow: 1px 1px 5px #C4C4C4;
  }

  .bodyDatiTime {
    width: 100%;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    font-size: 14px;
    font-family: Arial;
    padding-right: 25px;
    color: rgba(153, 153, 153, 1);
    border-bottom: 1px solid rgba(230, 230, 230, 1);
  }

  .bodyDatiText {
    padding: 14px 0px 14px 8px;
  }

  .bodyDatiTimeTwo {
    margin: 0 15px 0 8px;
  }

  .bodyDatiTimeThree{
    float: right;
  }

  .bodyDatiTimeIcon {
    margin: 0 6px;
  }

  .bodyDatiTimeOne {
    float: right;
  }

  .bodyDatiArrange {
    height: 30px;
    line-height: 30px;
    margin-bottom: 14px;
  }

  .bodyDatiArrangeOne {
    font-weight: Bold;
    font-size: 20px;
    font-family: Microsoft YaHei;
    color: #333333;
  }

  .bodyDatiArrangeTwo {
    float: right;
    font-size: 14px;
    display: inline-block;
    width: 75px;
    text-align: center;
    border-radius: 15px 0px 0px 15px;
    color: rgba(255, 255, 255, 1);
    background: #1CC09F;

  }

  .bodyDatiArrangeThree {
    float: right;
    font-size: 14px;
    display: inline-block;
    width: 75px;
    text-align: center;
    border-radius: 15px 0px 0px 15px;
    color: rgba(255, 255, 255, 1);
    background: #CCCCCC;

  }

  .bodyDatiDay, .bodyDatiColor, .bodyDatiRemarks {
    height: 32px;
    line-height: 32px;
    color: #666666;
    font-size: 16px;
  }

  .bodyDatiRemarksTwo {
    color: #777777;
  }

  .bodyDatiDayTwo, .bodyDatiColorTwo {
    float: right;
    margin: 0 18px;
    color: #777777;
  }

  .bodyDatiColorTwo {
    width: 34px;
    height: 12px;
    /*background-color: #4D7CFE;*/
    border-radius: 2px;
    margin: 10px 18px;
  }

  .bodyDatiRemarksTwo {
    float: right;
    margin: 0 18px;
    white-space: nowrap;
    overflow: hidden;
    max-width: 220px;
    text-overflow: ellipsis;
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: rgba(51, 51, 51, 1);
  }

  .listTopSort {
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: rgba(102, 102, 102, 1);
  }
</style>
<style lang="less">
  .listTopSelect .ant-select-selection {
    border: none;
  }
</style>