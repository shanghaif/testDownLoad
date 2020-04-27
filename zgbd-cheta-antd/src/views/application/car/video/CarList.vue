<template>
    <div>
      <div style="display: inline-block;width: 200px;" class="cheta-ml-10">
        <a-input-search placeholder="请输入关键字" @search="search"/>
      </div>
      <a-spin :spinning="!carList.length">
        <ul class="cheta-font-align">
          <li v-for="item in carList" class="cheta-mt-10 cheta-mr-42">
            <i v-if="!item.title.indexOf('摄像头')" class="iconfont icon-camera cheta-color cheta-pr-10"></i>
            <i v-else class="iconfont icon-che1 cheta-color cheta-pr-10"></i>
            <span @click="carCheckShow(item)" class="cheta-event">{{item.title}}</span>
          </li>
        </ul>
      </a-spin>
    </div>
</template>

<script>
  // import carList from './modules/data.json'
  import { getAction } from '@/api/manage'
  import moment from 'moment';

  export default {
    name: 'carList',
    data () {
      return {
        carList: []
      }
    },
    mounted () {
      var that = this;/*
      getAction('../bysk/login/login.do?userName=admin&password=bsjkj').then(res => {
        debugger;
        res.obj.
      });*/
      that.carList = [{"title":"车架号00473","terminalNumber":"13301929737","channels":[1,2,3,4],"player":{}},{"title":"车架号00690","terminalNumber":"13301929777","channels":[1,2,3,4],"player":{}},{"title":"车架号00693","terminalNumber":"13301929786","channels":[1,2,3,4],"player":{}},{"title":"车架号026907","terminalNumber":"13301929707","channels":[1,2,3,4],"player":{}},{"title":"车架号27699","terminalNumber":"13301929723","channels":[1,2,3,4],"player":{}},{"title":"车架号27998","terminalNumber":"13301929741","channels":[1,2,3,4],"player":{}},{"title":"冀J1G223","terminalNumber":"13302037072","channels":[1,2,3,4],"player":{}},{"title":"冀JH3889","terminalNumber":"13301929758","channels":[1,2,3,4],"player":{}},{"title":"冀JN0081","terminalNumber":"13301929783","channels":[1,2,3,4],"player":{}},{"title":"冀JP1327","terminalNumber":"13301929746","channels":[1,2,3,4],"player":{}}]
      /*getAction('../bysk/monitor/loadVehicles.do?token=4d76dbab-acca-40dc-921b-01e82861b304&ids=16&posTime=0&vehicleTime=0&state=0').then(res => {
        if (res.flag) {
          that.setCarList(res.obj.data);
        } else {

        }
      })*/
    },
    methods: {
      moment,
      search () {},
      setCarList (list) {
        var that = this;
        list.forEach((item) => {
          if (item.recorderSpeed) {
            if (that.carList.length < 10) {
              that.carList.push({
                title: item.P,
                terminalNumber: item.N,
                channels: [1, 2, 3, 4],
                player: {}
              });
            }
          }
        })
      },
      carCheckShow (item) {
        this.$emit('carCheckShow', item)
      },
    }
  }
</script>

<style scoped>

</style>