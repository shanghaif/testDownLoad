<template>
  <a-spin :spinning="spinning">
    <div class="parameter">
      <div class="content" v-if="noAdd">
        <div v-if="item">
          <div class="select_wrap clearfix">
            <span class="state">状态：</span>
            <a-select defaultValue="全部" style="width: 120px" @change="handleChange">
              <a-select-option v-for="(item,index) in stateList" :key="index" :value="item.id">{{item.text}}</a-select-option>
            </a-select>
            <div class="filter"   > <!--点击筛选-->
                <span class="filter-text" @click="filterShow = !filterShow" > 筛选 </span>
                <span class="filter-icon" @click="filterShow = !filterShow" ><a-icon type="filter" /></span>
              <div class="condition" v-if="!filterShow">

                <a-select defaultValue="车辆类型" style="width: 100px;margin: 0 5px" @change="handleChangeType">
                  <a-select-option v-for="(item,index) in stateList" :key="index" :value="item.carType">{{item.text}}</a-select-option>
                </a-select>
                <a-select defaultValue="品牌车型" style="width: 100px;margin: 0 5px" @change="handleChangeType">
                  <a-select-option v-for="(item,index) in stateList" :key="index" :value="item.carType">{{item.text}}</a-select-option>
                </a-select>
                <a-select defaultValue="所属" style="width: 100px;margin: 0 5px" @change="handleChangeType">
                  <a-select-option v-for="(item,index) in stateList" :key="index" :value="item.carType">{{item.text}}</a-select-option>
                </a-select>
                <a-select defaultValue="状态" style="width: 100px;margin: 0 5px" @change="handleChangeType">
                  <a-select-option v-for="(item,index) in stateList" :key="index" :value="item.carType">{{item.text}}</a-select-option>
                </a-select>
                <a-select defaultValue="入网日期" style="width: 100px;margin: 0 5px" @change="handleChangeType">
                  <a-select-option v-for="(item,index) in stateList" :key="index" :value="item.carType">{{item.text}}</a-select-option>
                </a-select>
                <a-select defaultValue="车牌归属地" style="width: 100px;margin: 0 5px" @change="handleChangeType">
                  <a-select-option v-for="(item,index) in stateList" :key="index" :value="item.carType">{{item.text}}</a-select-option>
                </a-select>

              </div>
              <div v-else></div>
            </div>

            <div class="table-page-search-wrapper">
              <a-input-search style="width: 246px;margin-top: -5px" placeholder="输入关键字" @search="onSearch" enterButton />
            </div>
            <a-button style="margin-right: 10px;" @click="add"><em style="font-size: 18px;">+ </em>新增</a-button>
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1">批量导入</a-menu-item>
                <a-menu-item key="2">批量导出</a-menu-item>
                <a-menu-item key="3" @click="$refs.parameterTransfer.open()">车辆转移</a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                ···
              </a-button>
            </a-dropdown>
            <div class="showWay">
              <span @click="showChange($event,'card')" :class="{cheta_color : type == 'card'}" id="showWay-card"><i class="iconfont icon-yinhangka"></i><em> 卡片</em></span>
              <span @click="showChange($event,'state')" :class="{cheta_color : type == 'state'}" id="showWay-sate"><i class="iconfont icon-zhuangtai"></i><em> 状态</em></span>
              <span @click="showChange($event,'table')" :class="{cheta_color : type == 'table'}" id="showWay-table"><i class="iconfont icon-liebiao"></i><em> 列表</em></span>
            </div>
          </div>

          {{item.organId}}
          <c-table v-if="type == 'table'"
                   ref="list"
                   :columns="columns"
                   :pageSize="10"
                   :url="url.list"
                   :param="param"
          >
            <span slot="regTime" slot-scope="text, record">
              <span>
                {{`${dateFormats(text)}`}}
              </span>
            </span>
            <span slot="action" slot-scope="text, record">
              <template>
                <a style="margin-right: 20px;" href="javascript:;" @click="handleDetail(record)">详情</a>
                <a style="margin-right: 20px;" href="javascript:;">
                  <a class="edit" @click.stop="handleEdit(record.id)">编辑</a>
                </a>
              </template>
            </span>
          </c-table>
          <!--@stateInfoData="editInfo"-->
          <cardtype ref="list" :listUrl="url.list" :param="param1" @cardtypeData="toDetail"  @stateInfoData="editInfo" v-else-if="type == 'card'"></cardtype>
          <statetype ref="list" :listUrl="url.list" :param="param2" @statetypeData="toDetail" @stateInfoData="editInfo" v-else-if="type == 'state'"></statetype>
          <ParameterModal ref="ParameterModal" :data="data" @getData="getData" @reload="reload"></ParameterModal>
          <ParameterTransfer ref="parameterTransfer"></ParameterTransfer>
        </div>
      </div>
    </div>
  </a-spin>
</template>

<script>
  import moment from 'moment'
  import parameterDetail from './parameterDetail';
  import addinfoTmp from './addinfoTmp';
  import cardtype from './cardtype';
  import statetype from './statetype';
  import { getAction } from '@/api/manage';
  import CTable from '@/views/chetaui/table.js';
  import ParameterModal from './modules/ParameterModal'
  import ParameterTransfer from './modules/ParameterTransfer'
  export default {
    name: "ParameterList",
    components: {
      parameterDetail,
      CTable,
      cardtype,
      statetype,
      ParameterModal,
      addinfoTmp,
      ParameterTransfer
    },
    props:{
      localHistory: {
        type: Object
      }
    },
    data() {
      return {
        filterShow: true,
        type: 'card',
        name: "ParameterList",
        item :{},
        isShow1: true,
        noAdd: true,
        spinning: false,
        // id:'81160318465e47eb856d828aa994f816',
        id:'1',
        stateList:[
          {
            id: 0,
            text: '全部'
          },
          {
            id: 1,
            text: '正常'
          },
          {
            id: 2,
            text: '维修中'
          },
          {
            id: 3,
            text: '故障中'
          }
        ],
        pagination: {
          current: 1,
          pageSize: 10,
          total: 0
        },
        param: {
          pageNo: 0,
          pageSize: 10,
          pid: 'dg1168',
          keyword: ''
        },
        param1: {
          pageNo: 0,
          pageSize: 9,
          pid: 'dg1168',
          keyword: ''
        },
        param2: {
          pageNo: 0,
          pageSize: 8,
          pid: 'dg1168',
          keyword: ''
        },
        // 表头
        columns: [{
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: '5%',
          align: "center",
          customRender: function(t, r, index) {
            return parseInt(index) + 1;
          }
        },

          {
            title: '所属',
            width: '15%',
            align: "center",
            dataIndex: 'organId'
          },
          {
            title: '状态',
            width: '6%',
            align: "center",
            dataIndex: 'statusNormal',
            scopedSlots: {customRender: 'addressNine'}
          },
          {
            title: '车辆类型',
            width: '10%',
            align: "center",
            dataIndex: 'carType'
          },
          {
            title: '车牌号',
            width: '9%',
            align: "center",
            dataIndex: 'registrationNo'
          },
          {
            title: '自编号',
            width: '9%',
            align: "center",
            dataIndex: 'sinceNumber'
          },
          {
            title: '车辆车架号',
            width: '9%',
            align: "center",
            dataIndex: 'frameNumber'
          },
          {
            title: '车辆发动机号',
            width: '9%',
            align: "center",
            dataIndex: 'engineNumber'
          },
          {
            title: '入网时间',
            width: '15%',
            align: "center",
            dataIndex: 'regTime',
            scopedSlots: {
              customRender: 'regTime'
            },
          },
          {
            title: '操作',
            width: '20%',
            dataIndex: 'action',
            align: "left",
            scopedSlots: {
              customRender: 'action'
            },
          }
        ],
        dataSource: [],//数据集
        infoData: {},
        url: {
          list: "/application/car/account/getData",
          detail: "/application/car/account/detail"
        },
      }
    },
    methods: {
      moment,
      dateFormats(date){
        return moment(date).format('YYYY-MM-DD')
      },
      add(){
        this.noAdd = false;
        localStorage.removeItem('addinfoParams');
    		this.$router.push({path:`/xinzengcheliang/${this.id}`})
      },
      onSearch(val){
        this.param.keyword = val;
        this.param1.keyword = val;
        this.param2.keyword = val;
        this.$refs.list.getData();
      },
      handleEdit(id){
        getAction('/application/car/account/getCarDetail',{id})
        .then((res)=>{
          this.infoData = res.result;
          this.noAdd = false;
          localStorage.removeItem('addinfoParams');
        })
        // debugger
        this.$router.push({path:`/xinzengcheliang/${id}`})
      },
      handleDetail(record){
        this.item = record
        this.$router.push({path:`/cheliangxiangqing/${record.id}`})
      },
      toDetail(detailId){
        this.$router.push({path:`/cheliangxiangqing/${detailId}`})
      },
      editInfo(res){
        this.infoData = res;
        this.noAdd = false;
        localStorage.removeItem('addinfoParams');
      },
      showChange(e,type){
        this.type = type;
            if(this.type === 'card'){
              document.getElementById("showWay-card").style.color="#1CC09F";
              document.getElementById("showWay-sate").style.color="#314659";
              document.getElementById("showWay-table").style.color="#314659";
            }else  if (this.type ==='state'){
              document.getElementById("showWay-sate").style.color="#1CC09F";
              document.getElementById("showWay-card").style.color="#314659";
              document.getElementById("showWay-table").style.color="#314659";
            }else if(this.type === 'table'){
              document.getElementById("showWay-table").style.color="#1CC09F";
              document.getElementById("showWay-card").style.color="#314659";
              document.getElementById("showWay-sate").style.color="#314659";
            }
      },
      showParameterList2(){
        this.noAdd = true;
        this.localHistory.currentIndex = 0;
        this.infoData = {};
        this.$refs.list.getData();
      }
    }
  }
</script>
<style lang="less" scoped>
  .select_wrap{
    .state,.ant-select,.table-page-search-wrapper,.ant-btn-default {
      /*float: left;*/
      display: inline-block;
    }
    .state{
      font-size: 14px;
      color: #666;
      height: 32px;
      line-height: 32px;
    }
    .ant-select{
      margin-right: 10px;
    }
    .table-page-search-wrapper{
      margin-right: 20px;
      margin-left: 10px;
    }
    .showWay{
      float: right;
      height: 32px;
      line-height: 32px;
      span{
        cursor: pointer;
      }
      em{
        margin-right: 20px;
      }
    }
  }
  #showWay-card{
    color:#1CC09F;
  }
  #showWay-sate{
    color: #314659;
  }
  #showWay-table{
    color: #314659;
  }
  .filter{
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
  }
  .filter:hover  .filter-text{
    color: #1CC09F!important;
  }
  .filter:hover  .filter-icon{
    color: #1CC09F!important;
  }
  .filter-text{
    font-size: 14px;
    color: #666;
    height: 32px;
    line-height: 32px;
    display: inline-block;
  }

  .filter-icon{
    font-size: 14px;
  }
  .condition{
    display: inline-block;
  }

</style>
