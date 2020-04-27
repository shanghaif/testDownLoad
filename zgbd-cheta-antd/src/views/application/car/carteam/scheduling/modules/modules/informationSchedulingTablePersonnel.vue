<template>
  <div class="dati">
    <a-row>
      <!--搜索框-->

        <div class="nputSearch">
          <a-input-search placeholder="请输入关键字" @search="onSearch"/>
        </div>
        <!--人员-->
        <div  v-if="driverList.length != 0" class="peopleInformation">
          <ul>
            <li  class="personnelDetails" v-for="driver in driverList">
              <!--左边 图片头像-->
              <a-col span="8">
                <div class="headPortrait">
                  <img src="/image/scheduling/schedulingTX.png" alt="">
                </div>
              </a-col>
              <!--右边 姓名文字-->
              <a-col span="16">
                <div class="personnelInformation">
                  <a-row>
                    <!--第一行 姓名-->
                    <a-col span="24">
                      <div class="headName">
                        {{driver.nickName}}
                      </div>
                    </a-col>
                    <!--第二行详情-->
                    <a-col span="24">
                    <!--<div>
                      <span class="headLeft">
                        白
                      </span>
                            <span class="headRight">
                        粤A5643
                      </span>
                    </div>-->
                    </a-col>
                  </a-row>
                </div>
              </a-col>
            </li>
          </ul>

        </div>
      <div v-else style=" padding:25px;height:100%">
        <a-col  span="24">
          <template>
            <a-empty />
          </template>
        </a-col>
      </div>
    </a-row>
  </div>
</template>

<script>
  import { getAction, postAction } from '@/api/manage'
  import ACol from 'ant-design-vue/es/grid/Col'
  export default {
    name: 'informationSchedulingTablePersonnel',
    components: { ACol },
    props: {
      driverList: {
        type: Object,
        default: () => []
      }
    },
    methods: {
      onSearch(value) {
        console.log(value)
        this.driverList = [];
        var params = {pageNo: 1, pageSize: 8,name:value};
        this.initPersonnelInfo(params);
      },
      initPersonnelInfo(params) {
        getAction('/application/car/scheduling/getCarListPage', params).then(res => {
          let $this = this
          $this.driverList = []
          $this.driverList = res.result.userlist
        })
      },
    }
  }
</script>

<style scoped>
  .personnelDetails {
    height: 54px!important;
  }

  .headPortrait {
    width: 100%;
    height: 54px;
    line-height: 54px;
    text-align: center;
  }

  .headPortrait img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    text-align: center;
  }

  .headName {
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: rgba(51, 51, 51, 1);
  }

  .headLeft {
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    color: rgba(102, 102, 102, 1);
  }

  .headRight {
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    color: rgba(102, 102, 102, 1);
    margin: 0 10px;
  }

  .personnelInformation {
    height: 54px;
    padding: 8px 0px;
  }
  .peopleInformation{
    overflow-y: scroll;
    height: 325px;
  }
  .nputSearch {
    padding: 4px 24px;
  }
</style>