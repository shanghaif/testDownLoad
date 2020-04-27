<template>
  <div>
    <a-card :bordered="false" title="流程进度" :bodyStyle="{'padding': '20px 0px'}">
      <a-steps :current="flow[record.status].current" progressDot>
        <a-step title="审核维修">
        </a-step>
        <a-step title="厂家报价">
        </a-step>
        <a-step title="报价核准">
        </a-step>
        <a-step title="维修中">
        </a-step>
        <a-step title="验车完成">
        </a-step>
      </a-steps>
      <a-row :gutter="24">
        <a-col :lg="24" :md="20" :sm="22" :xs="22">
          <a-card :bordered="false" title="" :bodyStyle="{'padding': '0px'}">
            <a-icon type="reload" @click="reloadData" style="position: relative;top: -100px;left: 110px;"/>
            <a-card title="工单详情">
              <RepairDetail :flow="flow" ref="repairDetail" :record="record" @getData="getData"></RepairDetail>
            </a-card>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>

  import RepairDetail from './RepairDetail'
  import { mixinDevice } from '@/utils/mixin.js'

  export default {
    name: 'Audit',
    mixins: [mixinDevice],
    components: {RepairDetail},
    props: {
      flow: {
        type: Object,
        default: () => {}
      },
      record: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      getData () {
        this.$emit('getData');
      },
      reloadData () {
        this.$refs.repairDetail.getData();
      }
    }
  }
</script>

<style scoped>

</style>