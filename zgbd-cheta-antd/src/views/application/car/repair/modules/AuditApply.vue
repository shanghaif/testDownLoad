<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="8">
        <div>
          <div v-if="type === 'review'">
            <a-button type="primary" @click="showModal">维修审核</a-button>
          </div>
          <div v-if="type === 'offer'">
            <a-button type="primary" @click="showModal1" class="offeraudit"><a-icon type="file-done" />报价审核</a-button><a-button @click="reloadData" style="margin-left: 10px"><a-icon type="reload" />刷新</a-button>
          </div>
          <div v-if="type === 'oa'">
            <a-button type="primary" @click="showModal2" class="oaaudit"><a-icon type="file-done" />OA审核</a-button><a-button @click="reloadData" style="margin-left: 10px"><a-icon type="reload" />刷新</a-button>
          </div>
          <!--维修审核-->
          <a-modal
            :title="title"
            v-model="visible"
            @ok="handleOk"
            width="560px"
            height="340px"
          >
            <div v-if="type === 'review'">
              <a-row :gutter="16">
                <a-col class="gutter-row" :span="1">
                  <div class="gutter-box"><span class="focus">*</span></div>
                </a-col>
                <a-col class="gutter-row" :span="4" style="padding-left: 0">
                  <div class="gutter-box">审核维修:</div>
                </a-col>
                <a-col class="gutter-row" :span="18">
                  <div class="gutter-box">
                    <a-radio-group v-model="value">
                      <a-radio :value="1">通过</a-radio>
                      <a-radio :value="2">驳回</a-radio>
                    </a-radio-group>
                  </div>
                </a-col>
              </a-row>
            </div>
            <div v-if="type === 'offer'">
              <a-row :gutter="16">
                <a-col class="gutter-row" :span="1">
                  <div class="gutter-box"><span class="focus">*</span></div>
                </a-col>
                <a-col class="gutter-row" :span="4" style="padding-left: 0">
                  <div class="gutter-box">审核选择:</div>
                </a-col>
                <a-col class="gutter-row" :span="18">
                  <div class="gutter-box">
                    <a-radio-group v-model="value">
                      <a-radio :value="1">通过</a-radio>
                      <a-radio :value="2">驳回</a-radio>
                      <a-radio :value="3">调整方案</a-radio>
                    </a-radio-group>
                  </div>
                </a-col>
              </a-row>
            </div>
            <div v-if="type === 'oa'">
              <a-row :gutter="16">
                <a-col class="gutter-row" :span="1">
                  <div class="gutter-box"><span class="focus">*</span></div>
                </a-col>
                <a-col class="gutter-row" :span="4" style="padding-left: 0">
                  <div class="gutter-box">OA单号:</div>
                </a-col>
                <a-col class="gutter-row" :span="12">
                  <div class="gutter-box">
                    <a-input placeholder="OA单号" style="width: 100%;margin-right: 10px;" v-model="orderNo" help=""/>
                  </div>
                </a-col>
                <a-col class="gutter-row" :span="7">
                  <div class="gutter-box">
                    <a-select v-model="oaStatus" @change="handleChange">
                      <a-icon slot="suffixIcon" type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                      <a-select-option value="pass">审核通过</a-select-option>
                      <a-select-option value="reject">调整方案</a-select-option>
                      <a-select-option value="oaReject">审批驳回</a-select-option>
                    </a-select>
                  </div>
                </a-col>
              </a-row>
            </div>
            <a-row :gutter="16">
              <a-col class="gutter-row" :span="1">
                <div class="gutter-box"></div>
              </a-col>
              <a-col class="gutter-row" :span="4" style="padding-left: 0">
                <div class="gutter-box">审核备注:</div>
                <div class="gutter-box"></div>
                <div class="gutter-box"></div>
              </a-col>
              <a-col class="gutter-row" :span="18">
                <div v-if="type ==='offer'">
                  <div v-if="this.value===3">
                    <div class="gutter-box"><a-textarea v-model="description" style="width: 398px;height: 120px;" defaultValue=""/></div>
                  </div>
                  <div v-else>
                    <div class="gutter-box"><a-textarea placeholder="可输入审核备注" v-model="description" style="width: 398px;height: 120px;"/></div>
                  </div>
                </div>

                <!--<div v-else-if="type ==='oa'">-->
                  <!--<div class="gutter-box" v-if="oaStatus !== 'write'"><a-textarea placeholder="可输入审核备注" v-model="description" style="width: 398px;height: 120px;"/></div>-->
                <!--</div>-->
                <div v-else>
                  <div v-if="type==='oa'">
                    <div class="gutter-box"><a-textarea placeholder="可输入审核备注" v-model="memo" style="width: 398px;height: 120px;"/></div>
                  </div>
                  <div v-else>
                    <div class="gutter-box"><a-textarea placeholder="可输入审核备注" v-model="description" style="width: 398px;height: 120px;"/></div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </a-modal>
        </div>

      </a-col>
    </a-row>
    <!--<a-row :gutter="16">-->
      <!--<a-col class="gutter-row" :span="8">-->
        <!--<div><a-textarea placeholder="备注信息" :rows="4" v-model="description"/></div>-->
      <!--</a-col>-->
    <!--</a-row>-->
    <!--<a-row :gutter="16" style="margin-top: 20px">-->
      <!--<a-col class="gutter-row" :span="6">-->
        <!--<div class="gutter-box"><a-button type="primary" @click="reviewApprove">通过</a-button></div>-->
      <!--</a-col>-->
      <!--<a-col class="gutter-row" :span="8">-->
        <!--<div class="gutter-box"><a-button @click="reviewReject">驳回</a-button></div>-->
      <!--</a-col>-->
    <!--</a-row>-->
  </div>

</template>

<script>

  import { httpAction } from '@/api/manage'
  import ARow from "ant-design-vue/es/grid/Row";

  export default {
    name: 'AuditApply',
    components: {ARow},
    data (){
      return {
        visible:false,
        value:1,
        description:'',
        title:'',
        orderNo:'',
        oaStatus: 'pass',
        memo:'',
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
      },
      type: {
        type: String,
        default: () => ''
      }
    },
    methods: {
      showModal(){
        this.visible=true
        this.title='维修审核'
      },
      showModal1(){
        this.visible=true
        this.title='报价审核'
      },
      showModal2(){
        this.visible=true
        this.title='OA审核'
        // this.OAWrite()
      },
      handleOk(){
        if(this.type==='oa'){
          this.OAWrite()
          return
        }
        console.log(this.value)
        if(this.value===1){
          this.reviewApprove()

        }
        else if(this.value===2){
          this.reviewReject()
        }
        else if(this.value===3){
          this.description='维修点更改为好易创新维修厂'
        }
        // else if(type==='oa'){
        //   this.OAWrite()
        // }
      },
      reloadData () {
        this.$parent.getData()
      },
      reviewApprove () {
        var $this = this;
        console.log(this.repair.id)
        console.log(this.description)

        httpAction('/application/car/repair/' + this.type + 'Approve?repairId=' + this.repair.id + '&description=' + this.description,{}, 'get').then(res => {
          $this.$emit('getData');
          if(res.success){
            $this.$message.success(res.message);
          }else{
            $this.$message.error(res.message);
          }
        })
      },
      reviewReject () {
        var $this = this;
        httpAction('/application/car/repair/' + this.type + 'Reject?repairId=' + this.repair.id + '&description=' + this.description,{}, 'get').then(res => {
          $this.$emit('getData');
          if(res.success){
            this.$message.success(res.message);
          }else{
            this.$message.error(res.message);
          }
        })
      },
      close() {
        this.$emit('close');
        this.visible = false;
      },
      OAWrite () {
        var $this = this;

        var param = {
          repairId: this.repair.id,
          oa: {
            orderNo: this.orderNo,
            memo: this.memo
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
            console.log(res)
            $this.$emit('getData', true);
          } else {
            $this.$message.warning(res.message);
          }
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .gutter-box {height: 42px;background: white;line-height: 42px;}
  .focus{
    color: #F40000;
  }
  .offeraudit,.oaaudit{margin-left: 24px}

</style>