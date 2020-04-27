<template>
  <div>
    <div class="cheta-font18 cheta-task-title">工时</div>
    <div class="cheta-flex-between-end cheta-row cheta-hours-record">
      <div>
        <div class="cheta-hours">
          <p>总计登记</p>
          <p v-if="detailObject.taskItem"><span>{{totalHours}}</span>小时</p>
        </div>
        <div class="cheta-hours">
          <p>工时记录</p>
          <p v-if="detailObject.taskItem"><span>{{ detailObject.taskItem.length}}</span>条</p>
        </div>
        <div class="cheta-hours">
          <p>预估工时</p>
          <p>
            <span v-if="detailObject.hours">{{ detailObject.hours}} <span id="cheta-set">小时</span></span>
            <span v-else><span id="cheta-set">未设置工时</span></span>
            <a-icon type="edit" @click="showModelHours"/>
          </p>
          <ForecastHours ref="forecasthours" @showModelHours="showModelHours" :detailObject="detailObject"></ForecastHours>
        </div>
      </div>
      <div class="cheta-event" @click="showModel">
        <a-icon type="plus"></a-icon><span class="cheta-ml-10">添加工时记录</span>
      </div>
      <AddHours ref="addhours" @showModel="showModel" :detailObject="detailObject" @refreshlData="refreshlData"></AddHours>
    </div>
    <div class="">
      <a-list>
        <a-list-item  class="cheta-task-item" :key="index" v-for="(item, index) in detailObject.taskItem">
          <a-list-item-meta>
                  <span slot="title">
                <p class="cheta-lable">{{detailObject.nickName}}</p><span>{{item.startTime}} 开始</span>
              </span>
            <div slot="description" style="width:205px;">
              {{item.name}}
              <!--<a-tag>{{item.nickName}}</a-tag>-->
            </div>
          </a-list-item-meta>
          <h3 slot="actions" style="color:#00a0e9">
                  <span class="hours-text cheta-space5">
                  {{item.hours}}小时
                  </span>
            <span class="hours-event cheta-space5">
                    <a-icon type="edit" @click="editDate(item)"></a-icon>
                    <a-icon type="delete" @click="deleteDate(item,index)"></a-icon>
                  </span>
          </h3>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
  import AddHours from './AddHours'
  import ForecastHours from './ForecastHours'
  import {taskItemDelete} from '@/views/application/firm/project/api/api'

  export default {
    name: 'HoursIndex',
    props: {
      detailObject: {
        type:Object
      }
    },

    computed: {
      isEdit() {
        return this.loginUserId === this.detailObject.userId
      },
      totalHours() {
        var total = 0
        this.detailObject.taskItem.forEach(item => total += parseInt(item.hours))
        return total;
      },
    },
    components:{
      AddHours,
      ForecastHours,
    },
    methods:{
      showModel (){
        if (this.isEdit) {
          this.$refs.addhours.showModel()
        }
      },
      showModelHours (){
        this.$refs.forecasthours.showModelHours()
      },
      refreshlData (){
        this.$emit('refreshlData')
      },
      editDate (item) {
        this.$refs.addhours.edit(item)
      },
      deleteDate (item) {
        var that =this
        var param = {
          id: item.id
        }
        taskItemDelete(param).then(res=>{
          console.log(res)
          if(res.success){
            that.$message.success(res.message);
            that.$emit('refreshlData');
          }else{
            that.$message.warning(res.message);
          }
        })
      }
    }

  }
</script>

<style lang="less" scoped>
  .cheta-hours-record{
    border-bottom: 1px solid #e8e8e8;
  }
  .cheta-hours{display: inline-block;margin-right: 30px;}
  .cheta-hours p:first-child{font-size: 12px;color: #999999;line-height: 36px;}
  .cheta-hours span:first-child{font-size: 24px;color: #333333}
  #cheta-set{font-size: 14px;}
  .cheta-task-item:hover{background: #f8f8f8;}
  .cheta-task-item .hours-event{display: none}
  .cheta-task-item:hover .hours-text{display: none}
  .cheta-task-item:hover .hours-event{display: inline-block}
  .cheta-lable{width:100px;display: inline-block;}
  .cheta-task-title{margin-bottom: 10px}
</style>