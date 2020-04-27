<template>
  <div class="cheta-car-info cheta-ml-20">
    <Search @search="searchChange"/>
    <div class="cheta-schdule-scroll">
      <ul v-if="key === 'ASSIGNMENT'">
        <li v-for="item in carData" class="clearfix cheta-mtb15">
          <span class="cheta-floatl">{{ item.registrationNo}}</span>
          <span class="cheta-floatr cheta-mr-20">{{ item.userName}}</span>
        </li>
      </ul>
      <ul v-else-if="key === 'LEAVE'">
        <div class="cheta-flex-between cheta-mt-10" >
          <div class="">{{carCount}}/{{checkedList.length}}</div>
          <div>
            <a-button class="" v-if="!managers" @click="applyCar" :disabled="!checkedList.length > 0 ">申请</a-button>
            <a-button class="" v-else @click="scheduleCar" :disabled="!checkedList.length > 0">调度</a-button>
          </div>
        </div>
        <li v-for="item in carData" class="clearfix cheta-mtb15">
          <a-checkbox @change="change(item)">
            <span class="">{{ item.registrationNo}}</span>
            <span class="schedule-span">{{ item.carType}}</span>
          </a-checkbox>
        </li>
      </ul>
      <ul v-else-if="key === 'UNUSUAL'">
        <div class="cheta-flex-between cheta-mt-10">
        </div>
        <li v-for="item in carData" class="clearfix cheta-mtb15">
          <span class="cheta-floatl">{{ item.registrationNo}}</span>
          <span class="cheta-floatr cheta-mr-20">{{ item.userName}}</span>
        </li>
      </ul>
      <ul v-else>
        <li v-for="item in carData" class="clearfix cheta-mtb15">
          <span class="cheta-floatl">{{ item.registrationNo}}</span>
          <span class="cheta-floatr cheta-mr-20" :style="{color:getConstant(item.statusDispatch).color}">{{ getConstant(item.statusDispatch).status }}</span>
        </li>
      </ul>
      <div
        slot="loadMore"
        :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
      >
        <a-spin v-if="loading" />
        <div>
          <a-button v-if="!loading && (param.pageNo + 1) * (param.pageSize) <=carCount" @click="loadMore(param.pageNo + 1, param.pageSize)">加载更多</a-button>
          <p v-else>没有更多</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from '@views/chetaui/input/search/Index'
  import {getAction} from '@/api/manage'
  import constant from '@/views/application/car/api/constant.js';
  export default {
    name: 'typeCarData',
    props:{
      carKey:{
        type:Number,
        default:1
      }
    },
    components: {Search},
    data () {
      return {
        carData:[],
        carCount:0,
        key:'',
        loading:false,
        pageShow: false,
        param:{
          pageNo:1,
          pageSize:10,
          status:'',
          keyword:"",
        },
        checkedList:[],
        managers:false,
      }
    },
    mounted () {
      this.$route.meta.children.forEach(inner=>{
        if (inner.perms== 'DISPATCH_ADMIN') {
          this.managers = inner.status === 'Y'
        }
      })
      this.getType({})
    },
    methods: {
      empty () {
        this.param = {
          pageNo:1,
          pageSize:10,
          status:'',
          keyword:"",
        };
        this.checkedList = [];
      },
      searchChange (keyword) {
        this.checkedList = [];
        this.getType({key: this.key,keyword: keyword})
      },
      applyCar () {
        this.$router.push({name:"申请用车", params: {key: this.checkedList}})
      },
      scheduleCar () {
        this.$router.push({name:"调度审批", params: {key: this.checkedList}})
      },
      loadMore (pageNo, pageSize) {
        this.param = {
          pageNo:pageNo,
          pageSize:pageSize,
          keyword:this.param.keyword,
          status:this.param.status
        }
        var $this = this
        getAction('/application/car/dispatch/getDataByType',this.param).then(res => {
          $this.carCount = res.count
          $this.carData = $this.carData.concat(res.data)
          $this.loading = false;
        })
      },
      getConstant (type) {
        var obj = constant[type];
        return obj;
      },
      getType (item) {
        if (item) {
          this.key = item.key
        }
        var $this = this;
        this.param = {
          pageNo:this.param.pageNo,
          pageSize:this.param.pageSize,
        }
        if (item.key) {
          this.param.status = this.getConstant(item.key).key
        }
        if (item.keyword) {
          this.param.keyword = item.keyword
        }
        $this.carData = []
        $this.loading = true;
        var url = '/application/car/dispatch/getDataByType'
        // if (item.key === 'APPLY') {
        //   url = '/application/car/dispatch/applyList'
        // }
        getAction(url,this.param).then(res => {
          $this.carCount = res.count
          $this.carData = res.data
          $this.loading = false;
        })
      },
      change (item) {
        var flag = false
        var tmp = Object.assign(item,{checked:true})
        this.checkedList.forEach((inner,index)=>{
          if (inner.id == item.id) {
            item.checked = false
            flag = true
            this.checkedList.splice(index,1)
          }
        })
        if (!flag) {
          this.checkedList.push(tmp)
        }

      }
    }
  }
</script>

<style lang="less" scoped>
  .cheta-schdule-scroll {
    height: calc(100% - 35px);
    overflow-y: scroll;
  }
  .cheta-car-info .ant-checkbox-wrapper{
    width: 100%;
  }

  .schedule-span{
    display: inline-block;
    width: 56%;
    text-align: end;
  }
</style>