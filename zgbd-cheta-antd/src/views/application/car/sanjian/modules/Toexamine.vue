<template>
  <a-modal v-model="toexamine" @ok="auditpost" title="审核" width="720px">
    <div class="addinput">
      <span>审核评价：</span>
      <textarea placeholder="请输入审核说明,驳回必须填写原因" class="bz flex1" v-model="audit"></textarea>
    </div>
    <div class="starh">
      <!-- <span class="starsize" v-show="shvalue === 2">请输入审核说明,驳回必须填写原因!</span> -->
      <div class="shstar" v-show="shvalue === 1">
        <span>审核评分：</span>
        <a-rate slot="starscore" class="ml" v-model="starsize" />
      </div>
    </div>
    <a-radio-group class="stat" v-model="shvalue">  <!-- @change="onChange" -->
      <a-radio :value="1">通过</a-radio>
      <a-radio :value="2">驳回</a-radio>
    </a-radio-group>
  </a-modal>
</template>

<script>
  import { postAction } from '@/api/manage'
  export default {
    data(){
      return {
        toexamine:false,
        starscore:2,
        shvalue:1,
        audit:'',
        starsize:1,
        id:1,
        inspectState:1,
      }
    },
    methods:{
      auditpost(){
        let param = {
          evaluateContent:this.audit,
          evaluateScore:this.starsize,
          id: this.id,
          inspectState: 1
        }
        var $this = this
        postAction('/application/car/inspect/car/evaluateInspectCar', param ).then(res=>{
          console.log(res)
          $this.$emit('reload');   //添加成功后调用父组件
          $this.toexamine = false;
        })
      },
      open(inspectCarId,examine){
        this.toexamine = true
        this.id = inspectCarId
        this.inspectState = examine
      },
      close(){
        this.toexamine = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.addinput{
  display: flex;
  justify-content: space-between;
  padding:0 22px 5px 26px;
  .flex1{flex:1}
  span{
    font-size:14px;
    color:#666;
    padding-right:10px;
    line-height:32px;
  }
  .bz{
    height:74px;
    border:1px solid #ddd;
    border-radius: 4px;
    padding:5px;
  }
  textarea::-webkit-input-placeholder {color: #ccc;}
  textarea:-moz-placeholder {color: #ccc;}
  textarea::-moz-placeholder {color: #ccc;}
  textarea::-ms-input-placeholder {color: #ccc;}
}
.shstar{
  padding:0 22px 0 26px;
  .ml{margin-left:10px;}
}
.starh{height:33px;}
.stat{
  padding:15px 22px 0 106px;
}
</style>
