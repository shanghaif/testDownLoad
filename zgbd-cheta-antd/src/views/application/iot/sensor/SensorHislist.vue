<template>
  <div>
    <a-spin :spinning="spinning">
      <a-span style="font-size: 25px;">设备历史记录</a-span>
      <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection" bordered>
      </a-table>
    </a-spin>
  </div>
</template>

<script>
  import { getAction ,deleteAction } from '@/api/manage'
  import SpinLoad from  '../../util/SpinLoad'


  const columns = '';

  const data = '';
  export default {
    components: {
      SpinLoad,
    },
    data() {
      return {
        spinning : '',
        data,
        columns,
        addIframe: false
      }
    },
    created() {
      this.loadData();
    },
    methods :{

      //获取设备历史记录方法
      getHis(record){
        this.loadData(record)
      },

      loadData(record){
        var that = this;

        that.data = [];
        this.spinning = true;

        //let termNo = record.termNo;
        that.columns = [];

        if(record){
          let termNo = record.termNo;
          //根据stId获取Table数据并解析obd
          let id = record.stId;

          //var that = this;
          getAction('/application/type/getHeader', { id:id }).then((res) => {
            if (res.success) {
              console.log('返回表头数据res.result：',res.result)
              that.columns = res.result;
              that.spinning = false;
            }
          });

          if(that.columns){
            getAction('/application/sensor/getHistory', { termNo:termNo,id:id }).then((res) => {
              if (res.success) {
                console.log('record有值,getHistory返回数据res.result：',res.result)
                console.log('record有值,getHistory返回数据res：',res)
                that.data = res.result;
                that.spinning = false;
              }
              console.log('表数据this.data:',this.data)
            })
          }


        }else{
          //var that = this;
          getAction('/application/sensor/getHistory', { termNo:'',id:'' }).then((res) => {
            if (res.success) {
              console.log('getHistory返回数据res.result：',res.result)
              that.data = res.result;
              this.spinning = false;
            }
          })
        }

      },

    }
  }

</script>

<style scoped>
</style>