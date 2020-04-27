<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">OA填写</div>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="10">
        <div class="gutter-box">
          <a-input placeholder="OA单号" style="width: 80%;margin-right: 10px;" v-model="orderNo" help=""/>
          <span>
            <a-tooltip title="填写完OA单号 可选择（OA审批中、审批通过、调整方案、审批驳回）">
              <a-icon type="question-circle-o" />
            </a-tooltip>
          </span>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="16" v-if="orderNo">
      <a-col class="gutter-row" :span="10">
        <div class="gutter-box">
          <a-select v-model="oaStatus" style="width: 80%" @change="handleChange">
            <a-icon slot="suffixIcon" type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
            <a-select-option value="write">OA审批</a-select-option>
            <a-select-option value="pass">审核通过</a-select-option>
            <a-select-option value="reject">调整方案</a-select-option>
            <a-select-option value="oaReject">审批驳回</a-select-option>
          </a-select>
        </div>
      </a-col>

    </a-row>
    <a-row :gutter="16" v-if="oaStatus !== 'write'">
      <a-col class="gutter-row" :span="10">
        <div><a-textarea placeholder="备注信息" style="width: 80%" v-model="description"/></div>
      </a-col>
    </a-row>
    <a-row :gutter="16" v-if="oaStatus !== 'write'">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box"><a-button type="primary" @click="OAWrite">提交</a-button></div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import { httpAction } from '@/api/manage'
  import ARow from "ant-design-vue/es/grid/Row";

  export default {
    name: 'AudituQarantine',
    components: {ARow},
    data (){
      return {
        orderNo:'',
        oaStatus: 'write',
        description: ''
      }
    },
    props: {
      flow: {
        type: Object,
        default: () => {}
      },
      repair: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      OAWrite () {
        var $this = this;
        var param = {
          repairId: this.repair.id,
          oa: {
            orderNo: this.orderNo
          }
        }
        if (this.oaStatus === 'pass') {
          param.status = 'OA_APPROVE';
        } else if (this.oaStatus === 'reject') {
          param.status = 'OA_REJECT';
        } else if (this.oaStatus === 'oaReject') {
          param.status = 'OA_REJECT';
        }
        httpAction('/application/car/oa/saveOA', param, 'post').then((res) => {
          if (res.success) {
            $this.$message.success(res.message);
            $this.$emit('getData', true);
          } else {
            $this.$message.warning(res.message);
          }
        }).finally(() => {
          $this.close();
        })
      },
    }
  }
</script>

<style scoped>
  hr{border:0.5px solid rgba(232, 232, 232, 1);}
  .gutter-box {height: 42px;background: white;line-height: 42px;}
</style>