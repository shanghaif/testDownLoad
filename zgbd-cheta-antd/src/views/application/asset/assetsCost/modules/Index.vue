<template>
  <div class="cheta-height-full cheta-report-filed">
    <a-card :bordered="false" size="small" :bodyStyle="{padding: '0px'}">
      <div slot="title" class="cheta-report-title">
        <a-tooltip title="返回文档列表首页" class="cheta-events" @click="doHome">
          <a-icon type="left"/>
          <a-avatar src="/logo.png" class="cheta-ml-10"/>
        </a-tooltip>
        <a-input v-model="name" class="cheta-ml-10"/>
        <!--<div class="switch"  @click="onSearchretweet">-->
          <!--<span v-if="iconChooseVisible">成本明细报表</span>-->
          <!--<span v-else>成本汇总报表</span>-->
          <!--<a-tooltip>-->
            <!--<template slot="title" >-->
              <!--<span v-if="iconChooseVisible">-->
                <!--点击进行切换至成本汇总报表-->
              <!--</span>-->
              <!--<span v-else>-->
                <!--点击进行切换至成本明细报表-->
              <!--</span>-->
            <!--</template>-->
            <!--<span class="retweets"> <a-icon type="retweet" class="retweet" /> </span>-->
          <!--</a-tooltip>-->
        <!--</div>-->
      </div>
        <div class="chetaLeft">
          <div class="chetaLeftinput">
            <a-input-search placeholder="请输入关键字搜索" style="width: 200px" @search="onSearchmechanism"/>
          </div>
          <div class="chetaLeftData">
            <a-tree
              checkable
              @check="onCheck"
              @expand="onExpand"
              :expandedKeys="expandedKeys"
              :autoExpandParent="autoExpandParent"
              :defaultExpandParent="defaultExpandParent"
              :defaultExpandAll="defaultExpandAll"
              v-model="checkedKeys"
              @select="onSelect"
              :selectedKeys="selectedKeys"
              :treeData="treeData"
            />
          </div>
        </div>
        <div class="chetaRight">
          <div class="homeTopRight customList">
            <span class="ant-dropdown-link"> 自定义列表11 <a-icon type="down"/>
            <div class="floatingLayer">
              <a-row>
                <!--['1', '2', '3']-->
                <a-checkbox-group style="width: 100%;" :defaultValue="columnsValue">
                  <a-col :span="24" v-for="check in columns">
                    <a-checkbox class="floatingLayerChe" @change="onChangeTreeDatas" :value="check.key" >{{ check.title }}
                    </a-checkbox>
                  </a-col>
                </a-checkbox-group>
              </a-row>
            </div>
            </span>
            <span> <a-button>批量导出</a-button> </span>

          </div>
          <costSummary ref="costSummary" v-on:func="init" v-if="!iconChooseVisible"></costSummary>
          <costDetails ref="costDetails" v-on:func="init" v-if="iconChooseVisible"></costDetails>
          <div class="bottomList">
            <a-spin :spinning="spinning">
              <a-table
                :scroll="{ x: 1200, y: 600 }"
                :bordered="bordered"
                :columns="columns"
                :dataSource="data"
                rowKey="id"
                class="cheta-mt-10 cheta-positionr"
                :pagination="pagination"
                @change="changePagination"
              >
                <component
                  v-for="column in columns"
                  v-if="column.scopedSlots.customRender"
                  :is="column.scopedSlots.component"
                  :slot="column.key"
                  slot-scope="text, record, index"
                  :content="text"
                  :record="record"
                  :ind="index + countNo"
                  @refresh="init"
                />
              </a-table>
            </a-spin>
          </div>

          <div v-if="tableId === '3262'">
            <component ref="CurveAnalyze" is="Curve"></component>
          </div>
        </div>


      <!--<IframePageView :url="iframeUrl"></IframePageView>-->
    </a-card>
  </div>
</template>

<script>
  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      attrs: {}
    }
    if (index === 4) {
      obj.attrs.colSpan = 0
    }
    return obj
  }

  import formMixin from '@/views/application/onlines/car/data/list/modules/config/component.js'
  import { reportColumns } from '../../../firm/report/api/api'
  import Confirm from '../../../firm/report/system/Confirm'
  import { getAction } from '@/api/manage'
  import moment from 'moment'
  import { getRowSpanCount } from '@/views/application/onlines/car/api/table.js'
  import IframePageView from '@/components/layouts/IframePageView'
  import costDetails from './detailed/costDetails'
  import costSummary from './detailed/costSummary'



  export default {
    name: 'Template',
    components: {
      Confirm,
      IframePageView,
      formMixin,
      costDetails,
      costSummary,
    },

    data() {
      return {
        columnsValue:[],
        checked: '',
        treeDatas: [],
        spinning: true,
        // spinningList: true,
        buttonSwitch:false,
        defaultExpandParent:true,
        defaultExpandAll: true,
        expandedKeys: ['0-0-0', '0-0-1'],
        autoExpandParent: true,
        checkedKeys: [],
        ids:{},
        selectedKeys: [],
        treeData:[],
        iconChooseVisible:false,
        groupValue: '月度',
        size: 'default',
        iframeUrl: '',
        bordered: false,
        countNo: 0,
        value: '',
        carData: [],
        urlCar: {
          getData: '/application/car/account/getData',
          reportDetail: '/application/car/report/excel'
        },

        datePicker: [this.moment().subtract(7, 'days'), this.moment()],
        selectParams: [
          { name: '本周', key: 1 },
          { name: '本月', key: 2 },
          { name: '上月', key: 3 }
        ],
        typeList: [
          { name: '车务报表', key: 1 },
          { name: '维修报表', key: 1 },
          { name: '登记报表', key: 1 }
        ],
        columns: [],
        data: [],
        param: this.$route.params,
        name: this.$route.params.name || '',
        pagination: { current: 1, pageSize: 10, total: 100 },
        url: '',
        tableId: '',
        paramsValue:{},
        params: {},
      }
    },
    created() {
      /*this.initCar();*/
      debugger;
      this.paramsValue = this.$route.params
      this.getDetailData (this.paramsValue)
      // this.digit = Object.assign(this.columns)
      this.InitOrgan()//机构
    },
    watch: {
      checkedKeys(val) {
        console.log('onCheck', val);
      },
      '$route'() {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }
    },
    methods: {
      InitOrgan(){
        var $this = this
        getAction('/application/hworgan/organ/initOrganTree' ).then((res) => {
          if(res.success){
            debugger
            $this.treeData = res.result
          }
        })

      },

      getDetailData (param) {
        this.getColumns(param)
      },
      onExpand(expandedKeys) {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.expandedKeys = expandedKeys;
        this.autoExpandParent = false;
      },
      onCheck(checkedKeys) {
        debugger
        this.ids = checkedKeys.join(',')
        this.params = {pageNo: 1, pageSize: 10,type:3,ids:this.ids};
        this.init(this.params,this.url)

      },
      onSelect(selectedKeys, info) {
        console.log('onSelect', info);
        this.selectedKeys = selectedKeys;
      },
      callback(key) {//tabs切换
        console.log(key)
      },
      handleSizeChange(e) {//月度年度切换
        this.groupValue = e.target.value

      },
      onChangepickerTime(date, dateString) {//年月   日期搜索
        console.log(date, dateString)
      },
      onChangenumber(value) {//明细 数值搜索
        console.log('changed', value)
      },
      onSearchsearch(value) {//明细 搜索框搜索/车牌号/识别代码/发动机号
        console.log(value)
      },
      handleChangeselect(value) {//汇总 机构
        console.log(`selected ${value}`)
      },
      onSearchmechanism(value) {//机构
        debugger
        this.treeData = []
        this.InitOrgan()

      },
      onSearchretweet(){
        this.iconChooseVisible = !this.iconChooseVisible
        this.params = {pageNo: 1, pageSize: 10,type:3};
        if(this.iconChooseVisible == true){//
          this.url = '/application/hwreport/register/getMouthDetail'
          this.init(this.params,this.url);
          debugger
        }else if(this.iconChooseVisible == false){
          debugger
          this.url = '/application/hwreport/register/getMouthDetail'
          this.init(this.params,this.url);
        }
      },





      moment,
      getColumns(params) {
        this.spinning = true;
        var $this = this
        /*获取firm_report里面的表头*/
        /*$this.columns = JSON.parse(params.columns)*/
        reportColumns({ menuId: params.menuId }).then(res => {
          if (res.result) {
            debugger
            /*获取组件里面的表头component*/
            $this.columns =res.result.columns
            $this.data = res.result.data
            $this.tableId = res.result.id
            // 循环得到值
            debugger
            $this.columns.forEach(item=>{
              $this.columnsValue.push(item.key);
            })

            if (res.result.http.url) {
              //初始化表格数据
              debugger;
              $this.url = res.result.http.url
              $this.init(res.result.http.params);
              this.spinning = true;
              // var param = ''
              // if (res.result.user) {
              //   let user = res.result.user
              //   param = '?userid=' + user.id + '&username=' + user.username + '&userpid=' + user.orgid + '&rightid=02c659880a00000f25bc71a7a25765ae&industrytype=物流车&iv=null'
              // }
              /*param = '?userid=f90b3a3affffffc94eb41ef2250ce02c&username=杨铮强&userpid=f8c008b9ffffffc94eb41ef2e4911030';*/
              // $this.url = res.result.http.url
              // $this.iframeUrl = res.result.http.url + param
              // $this.params = res.result.http.params
            }
            //里程报表
            /*if($this.tableId == '3284'){
              $this.bordered = true;
            }*/
          }
        })
      },
      init(params,url) {
        var that = this
        that.spinning = true
        debugger
        getAction(this.url, params).then(res => {
          if (res.result) {
            that.data = res.result.data
            that.pagination.total = res.result.count
            that.spinning = false
          }
        })
      },
      customRender(value, row, index, name) {
        const obj = {
          children: value,
          attrs: {}
        }
        obj.attrs.rowSpan = getRowSpanCount(this.data, name, index)
        return obj
      },
      handleChange(value) {
        this.value = value
      },
      initCar() {
        let that = this
        getAction(that.urlCar.getData, { pageNo: 1, pageSize: 100000 }).then(res => {
          if (res.success) {
            that.carData = []
            res.result.data.forEach(item => {
              if (item.registrationNo && item.registrationNo != '') {
                that.carData.push({ id: item.id, registrationNo: item.registrationNo })
              }
            })
          }
        })
      },
      disabledDate(current) {
        return current && current > moment().endOf('day')
      },
      selectChange(value) {
        var that = this
        if (value === 1) {
          //本周
          that.datePicker = [that.moment().startOf('week'), that.moment().endOf('week')]
        } else if (value === 2) {
          //本月
          that.datePicker = [that.moment().startOf('month'), that.moment().endOf('month')]
        } else {
          //上月
          that.datePicker = [
            that.moment().month(that.moment().month() - 1).startOf('month'),
            that.moment().month(that.moment().month() - 1).endOf('month')]
        }
        //更改直接初始化
        /*that.spinning = true;
        var dateFormat = 'YYYY-MM-DD';
        var p = {beginDate:that.datePicker[0].format(dateFormat),endDate:that.datePicker[1].format(dateFormat)};
        Object.assign(that.params,p);
        that.init(that.url,that.params);
        if(that.tableId == '3262'){
          that.$refs.CurveAnalyze.initSaveDate(p);
        }*/
      },
      exportTable() {
        this.$message.info('该功能未开通！')
        /*var that = this;
          getAction(that.urlCar.reportDetail,null).then(res => {
          const aLink = document.createElement("a");
          let blob = new Blob([res], {type: "application/vnd.ms-excel"})
          aLink.href = URL.createObjectURL(blob)
          aLink.setAttribute('download', '哈哈哈哈' + '.xlsx') // 设置下载文件名称
          aLink.click()
          this.$refs.loadElement.appendChild(aLink)
          console.log("导出成功");
        })*/
      },
      // queryTable() {
      //   var that = this
      //   that.spinning = true
      //   var beginDate = that.datePicker[0].format('YYYY-MM-DD')
      //   var endDate = that.datePicker[1].format('YYYY-MM-DD')
      //   Object.assign(that.params, { beginDate: beginDate, endDate: endDate, carId: that.value })
      //   this.init( that.params,that.url)
      //   if (that.tableId == '3262') {
      //     that.$refs.CurveAnalyze.initSaveDate(that.params)
      //   }
      // },
      onChangeTime(date, dateString) {
        console.log('date:' + date + 'dateString : ' + dateString)
      },
      changePagination(pagination) {
        this.spinning = true
        const pager = { ...this.pagination }
        pager.current = pagination.current
        this.pagination = pager
        this.countNo = (pager.current - 1) * 10
        Object.assign(this.params, { pageSize: pager.pageSize, pageNo: pager.current })
        this.init(this.params,this.url)
      },
      doHome() {
        this.$router.push({ path: '/zichanAssetsCost' })
      },

    },

  }
</script>
<style lang="less" scoped>
  .customList{
    float: right;
  }
  .ant-dropdown-link:hover .floatingLayer {
    display: block;
    cursor: pointer;
  }
  .floatingLayer:hover .floatingLayer{
    display: block;
    cursor: pointer;
  }
  .floatingLayer {
    display: none;
    z-index: 2;
    width: 180px;
    max-height: 70%;
    overflow-y: scroll;
    overflow-x: scroll;
    padding: 15px 10px;
    position: absolute;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    background-clip: padding-box;
  }
  .bottomList{
   margin-top: 20px;
  }
  .retweet{
    font-size: 18px;
    color: #666666;
    padding: 8px;
  }
  .retweet:hover {
    color: #1890ff;
  }
  .switch{
    padding: 0 20px;
    display: inline-block;
    cursor: pointer;
  }
  .chetaLeftinput {
    position: absolute;
    padding: 19px 9px;
    border-radius: 6px;
    z-index: 1;
    background-color: white;
  }
  .chetaLeftData{
    margin-top: 60px;
    padding: 0 10px;
  }

  .chetaLeft {
    margin: 20px 10px;
    padding:0px 10px 10px 10px;
    width: 260px;
    height: 775px;
    /*height: calc(100% - 53px);*/
    display: inline-block;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    background-color: white;
    z-index: 2;
    overflow-y: scroll;
    overflow-x: scroll;
    vertical-align: top;
  }

  .chetaRight {
    padding: 20px;
    width: calc(100% - 280px);
    display: inline-block;
  }

  .homeTopRight, .homeBodyRight {
    float: right;
  }

  .homeBodyRight span {
    padding: 0 10px;
  }

  .homeTopLeftText, .homeBodyLeftText {
    padding: 0px 10px 0px 20px;
  }

  .homeTopLeft, .homeBodyLeft {
    padding: 0 10px;
  }

  .homeTop, .homeBody {
    height: 32px;
  }

  .homeTopBottomText {
    float: right;
    padding: 8px 10px 0 0;
  }

  .homebody {

  }
</style>
<style lang="less">
  .home .ant-input-number {
    border: 1px solid #ffffff;
  }

  .cheta-report-title .ant-input {
    width: 200px;
    border: 0px solid #d9d9d9;
  }

  .cheta-report-title .ant-input:hover {
    border: 1px solid #d9d9d9;
  }
</style>

<style lang="less" scoped>
  .query-table {
    margin-right: 10px
  }

  .cheta-button i {
    font-size: 12px;
    padding-right: 5px
  }

  .cheta-table {
    min-height: 580px;
  }

  .cheta-edit-icon {
    position: absolute;
    top: 142px;
    right: 10px;
  }

  .cheta-digit-border {
    border: 1px solid #e8e8e8;
  }

  .home {
    padding: 10px
  }

  .btn-right { /*margin-left: 10px*/
  }
</style>