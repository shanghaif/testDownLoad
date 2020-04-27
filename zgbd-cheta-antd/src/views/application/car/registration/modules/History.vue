<template>
    <div class="cheta-car-history cheta-plr-24">
      <div class="cheta-flex-start cheta-mt-10 cheta-mb-10">
        <Search @search="searchChange" style="width: 200px"/>
        <a-range-picker @ok="ok" class="cheta-ml-10" showTime/>
        <!--<a-date-picker-->
          <!--placeholder="请输入日期"-->
          <!--@change="onChange"-->
          <!--class="cheta-ml-10"-->
          <!--style="width: 200px;height: 35px;"-->
          <!--v-decorator="['appointment',{'initialValue':now}, {rules: [{required: true,message: '请输入购买日期!'}]}]"-->
        <!--/>-->
      </div>

      <!--<div class="cheta-mtb-20">车牌号：<a-input-search placeholder="请输入用车人姓名" style="width: 200px" /></div>-->
      <c-table
        ref="table"
        :columns="columns"
        :expandRowByClick="true"
        url="/application/car/dispatch/getLogPage"
        rowKey="id">
      </c-table>
    </div>
</template>

<script>
  import HistoryDetail from './childmodules/HistoryDetail'
  import {httpAction} from "@/api/manage";
  import CTable from '@/views/chetaui/table/index.js'
  import Search from '@views/chetaui/input/search/Index'
  export default {
    name: 'History',
    components: { HistoryDetail,CTable,Search},
    data () {
      return {
        expandRowByClick: false,
        iconShow: false,
        columns: [
          {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
          { title: '用车人', dataIndex: 'userName', key: 'userName',align: 'center' },
          { title: '车牌号', dataIndex: 'registrationNo', key: 'registrationNo', align: 'center' },
          { title: "里程(出车/回车)", dataIndex: "", key: "" , align: "center",customRender: (t, r) =>{
              if (r.dispatchMileage && r.returnRunmileage) {
                return r.dispatchMileage + '/' + r.returnRunmileage
              } else if (r.dispatchMileage) {
                return r.dispatchMileage + "/无"
              } else if (r.returnRunmileage) {
                return "无/" + r.returnRunmileage
              }
              return "无" + "/无"
            }  },
          { title: "油量(出车/回车)", dataIndex: "", key: "" , align: "center",customRender: (t, r) =>{
              if (r.dispatchOil && r.returnOil) {
                return r.dispatchOil + '/' + r.returnOil
              } else if (r.dispatchOil) {
                return r.dispatchOil + "/无"
              } else if (r.returnOil) {
                return "无/" + r.returnOil
              }
              return "无" + "/无"
            }  },
          { title: "外观(出车/回车)", dataIndex: "", key: "" , align: "center",customRender: (t, r) =>{
              if (r.dispatchBrake && r.returnBrake) {
                return r.dispatchBrake + "/" + r.returnBrake
              }
              else if (r.dispatchBrake) {
                return r.dispatchBrake + "/无"
              }
              else if (r.returnBrake) {
                return  "无/" + r.returnBrake
              }
              return "无" + "/无"
            }  },
          { title: "胎压(出车/回车)", dataIndex: "", key: "" , align: "center",customRender: (t, r) =>{
            if (r.dispatchTire && r.returnTire) {
              return r.dispatchTire + "/" + r.returnTire
            }
            else if (r.dispatchTire) {
              return r.dispatchTire + "/无"
            }
            else if (r.returnTire) {
                return + "无/" + r.returnTire
              }

              return "无" + "/无"
            }  },
          { title: "启动(出车/回车)", dataIndex: "", key: "" , align: "center",customRender: (t, r) =>{
              if (r.dispatchLaunch && r.returnLaunch) {
                return r.dispatchLaunch + "/" + r.returnLaunch
              }
              else if (r.dispatchLaunch) {
                return r.dispatchLaunch + "/无"
              }
              else if (r.returnLaunch) {
                return + "无/" + r.returnLaunch
              }
              return "无" + "/无"
            }  },
          { title: "时间(出车/回车)", dataIndex: "", key: "" , align: "center",customRender: (t, r) =>{
              if (r.dispatchTime && r.returnTime) {
                return r.dispatchTime + "/" + r.returnTime
              }
              else if (r.dispatchTime) {
                return r.dispatchTime + "/无"
              }
              else if (r.returnTime) {
                return "无/" + r.returnTime
              }
              return "无" + "/无"
            }  },
        ],
        keyword: '',
        startDate: '',
        endDate: ''
      }
    },
    created () {
      this.$refs.table.reload()

    },
    methods: {
      searchChange (keyword) {
        this.keyword = keyword;
        this.reload();
        // this.$refs.table.reload({keyword:keyword})
      },
      ok (dates) {
        this.dateStart = dates[0].format('YYYY-MM-DD hh:mm:ss');
        this.dateEnd = dates[1].format('YYYY-MM-DD hh:mm:ss');
        this.reload();
      },

      reload () {
        this.$refs.table.reload({
          keyword: this.keyword,
          dateStart: this.dateStart,
          dateEnd: this.dateEnd
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .cheta-car-history{height: calc(100% - 125px);}
</style>