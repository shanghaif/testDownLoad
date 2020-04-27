<template>
    <div>
      <a-list itemLayout="horizontal" :dataSource="data">
        <a-list-item slot="renderItem" class="hostiry" slot-scope="item, index" @click="dohository(item)">
          <a-list-item-meta
            :description="item.address"
          >
            <span slot="title" class="hostiry-title">
              <!--<a-icon type="clock-circle" class="cheta-mr-5"/>-->
              <span class="cheta-mr-5">{{item.name}}</span>
              <span class="cheta-mr-5" v-if="item.radius">半径{{item.radius}}米</span>
            </span>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
</template>

<script>
  import { getAction } from '@/api/manage';

  export default {
    name: 'AreaHository',
    data() {
      return {
        data: []
      };
    },
    created () {

    },
    mounted(){
      this.init();
    },
    methods: { //定义函数
      dohository(item){
        this.$emit('look',item)
      },
      init() {
        var url = "/application/car/area/page"; //定义引入地址
        var that = this; //改变this指向
        getAction(url,{pageSize:10000,pageNo:1}).then((res)=>{
          if(res.data.length > 0){
            that.data = res.data;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .hostiry{
    margin: 0px 10px 0px 10px;
  }
  .hostiry:hover{
    /*border: 1px solid #a3ffec;*/
    cursor:pointer;
  }
  .hostiry-title{
    font-weight: bold;
  }
</style>