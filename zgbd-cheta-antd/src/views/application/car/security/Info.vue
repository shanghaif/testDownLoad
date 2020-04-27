<template>
    <div class="cheta-height-full cheta-overflow-s cheta-car-security">
      <a-table
        :expandRowByClick="true"
        :columns="columns"
        :dataSource="data"
        @expand = "expand"
        rowKey="id">
        <span slot="carTitle">
          <i class="iconfont icon-sousuo cheta-icon-size14"></i><span class="cheta-ml-10">实验时间</span>
        </span>
        <span slot="check" slot-scope="record,text">
          <span>
            <span v-if="text.check==='异常'" class="cheta-color-check">
            {{ text.check }}
          </span>
          <span v-else-if="text.check==='正常'">
            {{ text.check }}
          </span>
            <span v-if="iconShow">
              <i class="iconfont icon-xiangshang"></i>
            </span>
            <span v-else>
              <i class="iconfont icon-xiangxia"></i>
            </span>
          </span>
        </span>
        <span slot="status" slot-scope="record,text">
          <span v-if="text.status==='超速150km/h行驶10s'" class="cheta-color-check">
            {{ text.status }}
          </span>
           <span v-else>
            {{ text.status }}
          </span>
        </span>
        <div slot="expandedRowRender" slot-scope="record">
          <SecurityInfo class="cheta-positionr"></SecurityInfo>
        </div>
      </a-table>
    </div>
</template>

<script>
  import CTable from '@/views/chetaui/table/index.js'
  import SecurityInfo from './modules/SecurityInfo'
  export default {
    name: 'Info',
    components: { SecurityInfo, CTable},
    data () {
      return {
        iconShow: false,
        columns: [
          {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
          { title: '实验时间', dataIndex: 'dateTime', key: 'dateTime', align: 'center' },
          { dataIndex: 'carNum', key: 'carNum', slots: { title: 'carTitle' }, scopedSlots: { customRender: 'carNum' },align: 'center'},
          { title: '视频', dataIndex: 'video', key: 'video', align: 'center' },
          { title: '终端', dataIndex: 'terminal', key: 'terminal', align: 'center' },
          { title: '出车点检', dataIndex: 'check', key: 'check', align: 'center', scopedSlots: { customRender: 'check' }},
          { title: '行车状态', dataIndex: 'status', key: 'status', scopedSlots: { customRender: 'status' } ,align: 'center' },
        ],
        data:[{
          dateTime: '2019-08-10 08:00:00',
          carNum: '粤A-58969',
          video: '4',
          terminal: '3',
          check: '异常',
          status: '正常行驶',
          key: '1'
        },
          {
            dateTime: '2019-08-10 08:00:00',
            carNum: '粤A-58969',
            video: '4',
            terminal: '3',
            check: '正常',
            status: '正常行驶',
            key: '2'
          },
          {
            dateTime: '2019-08-10 08:00:00',
            carNum: '粤A-58969',
            video: '4',
            terminal: '3',
            check: '正常',
            status: '超速150km/h行驶10s',
            key: '3'
          },
        ],
      }
    },
    methods: {
      expand (expanded, record) {
        this.iconShow = !this.iconShow
      }
    }

  }
</script>
<style lang="less">
  .cheta-car-security .ant-table-tbody .ant-table-row td:first-child{display: none!important;}
  .cheta-car-security .ant-table-thead tr th:first-child{display: none!important;}
</style>

<style lang="less" scoped>
  .cheta-info-height{height:calc(100% - 60px);}
  .cheta-color-check{color:#F5222D;}
  /*.cheta-security-table{height:60%;}*/
</style>