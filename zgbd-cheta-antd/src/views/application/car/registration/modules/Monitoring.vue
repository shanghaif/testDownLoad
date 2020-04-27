<template>
    <div class="cheta-car-monitor cheta-m10-20 cheta-box-flex">
      <div class="cheta-flex-grow4">
        <Map ref="map" @changeList="changeList"></Map>
      </div>
      <div class="cheta-flex-grow2 cheta-m10-20">
        <div>
          状态：
          <a-select placeholder="请选择状态" class="cheta-mr-20" style="width: 200px">
            <a-select-option v-for="item in statusList" :value="item.name">{{ item.name}}</a-select-option>
          </a-select>
          车牌号：
          <a-input-search placeholder="请输入用车人姓名" style="width: 200px" />
        </div>
        <c-table
          :columns="columns"
          rowKey="id"
          url="/application/car/gps/getCarDispatch"
          ref="table"
          class="cheta-mt-10"
        >
          <div slot="statusDispatch" slot-scope="text, record">
            <span  v-if="getConstant(record.statusDispatch).status === '闲置中'">
              <span class="cheta-idle-color"> 闲置中 </span>
            </span>
            <span  v-if="getConstant(record.statusDispatch).status === '外派中'">
              <span class="cheta-assigning-color"> 外派中 </span>
            </span>
            <span  v-if="getConstant(record.statusDispatch).status === '异常中'">
              <span class="cheta-error-color"> 异常中 </span>
            </span>
          </div>
          <div slot="position" slot-scope="text, record">
            <span v-if="getConstant(record.statusDispatch).status==='闲置中'">
              <a-icon type="environment" class="cheta-idle-color"/>
            </span>
            <span v-if="getConstant(record.statusDispatch).status==='外派中'">
              <a-icon type="environment" class="cheta-assigning-color"/>
            </span>
            <span v-if="getConstant(record.statusDispatch).status==='异常中'">
              <a-icon type="environment" class="cheta-error-color"/>
            </span>
          </div>
          <div slot="driverName" slot-scope="text, record">
            <span>
              <!--{{ record }}-->
              <span v-if="record.driverName">
                <span>{{ record.driverName }}</span>
              </span>
              <span v-else class="cheta-idle-color">
                驾驶员信息未录入
              </span>
            </span>

          </div>
        </c-table>
      </div>
    </div>
</template>

<script>
  import Map from '@/components/Map/GaoDeMap'
  import constant from '@/views/application/car/api/constant.js';
  import { getAction } from '@/api/manage';
  import CTable from '@/views/chetaui/table/index.js'

  export default {
    name: 'Monitoring',
    components: {Map,CTable},
    data () {
      return {
        statusList: [
          {name:"在线"},
          {name:"离线"},
        ],
        columns: [
          {title: '序号', dataIndex: '', key: '', align: 'center', customRender: function(t, r, index) {return parseInt(index) + 1}},
          { title: '车牌号', dataIndex: 'registrationNo', key: 'registrationNo', align: 'center' },
          { title: '驾驶员',dataIndex: 'driverName', key: 'driverName',align: 'center',scopedSlots: { customRender: 'driverName' }},
          { title: '车辆状态',dataIndex: 'statusDispatch', key: 'statusDispatch',scopedSlots: { customRender: 'statusDispatch' },align: 'center'},
          { title: '定位', dataIndex: 'position', key: 'position' ,scopedSlots: { customRender: 'position' },align: 'center' },
        ]
      }
    },
    methods:{
      changeList(gradeParam){
        this.$refs.table.reload(gradeParam)
      },
      getConstant (type) {
        return constant[type];
      }
    },
    watch: {
      '$route' () {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
</script>

<style lang="less" scoped>
  .cheta-car-monitor{height:calc(100% - 150px)}
  .cheta-idle-color{color:#999999}
  .cheta-assigning-color{color:#1CC09F}
  .cheta-error-color{color:#FF7373}

</style>