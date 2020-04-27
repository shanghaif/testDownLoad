<template>
  <a-row>
    <div class="nputSearch">
      <!--<a-input-search placeholder="请输入关键字" @search="onSearch"/>-->

      <a-form
        :form="form"
        @submit="onSearch"
      >
        <div class="inforLeft">
          <a-form-item :label-col="{ span: 18 }" :wrapper-col="{ span: 24 }">
            <a-input
              v-decorator="[
          'carName',
          {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          },
        ]"
              style="width: 100%"
            >
              <a-select
                slot="addonBefore"
                v-decorator="['isSchduling', { initialValue: '1' }]"
                style="width: 140%;"
              >
                <a-select-option value="1">
                  有排班
                </a-select-option>
                <a-select-option value="2">
                  无排班
                </a-select-option>
              </a-select>
            </a-input>
          </a-form-item>
        </div>
        <div class="inforRight">
          <a-form-item :label-col="{ span: 6 }" :wrapper-col="{ span: 24 }">
            <a-button type="primary" html-type="submit">
              查询
            </a-button>
          </a-form-item>
        </div>
      </a-form>
    </div>
    <!--人员排班-->
    <div class="peopleInformation" v-if="carList.length != 0">
      <ul>
        <li v-for="(item,lookValue) in carList">
          <a-col span="10">
            <!--图片-->
            <div class="peopleInformationImg">
              <img src="~@/assets/image/parameter/car.png" class="peopleInformationImgimg" alt="">
              <span class="peopleInformationImgtext">查看详细信息>></span>
            </div>
          </a-col>
          <a-col :span="14">
            <!--信息-->
            <div class="peopleInformationS" @click="LookInformation(lookValue)">
              <ul>
                <li class="peopleInformationSLi">
                  <span class="pInformation">车&nbsp;&nbsp;牌&nbsp;&nbsp;号：</span>
                  <span class="pInformationS peopleInformationSCar">{{item.registrationNo}}</span>
                </li>
                <li class="peopleInformationSLi">
                  <span class="pInformation">状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：</span>
                  <span class="pInformationS">{{item.status}}</span>
                </li>
                <li class="peopleInformationSLi">
                  <span class="pInformation">车辆类型：</span>
                  <span class="pInformationS">{{item.carType}}</span>
                </li>
                <li class="peopleInformationSLi">
                  <span class="pInformation">识别代号：</span>
                  <span class="pInformationS">{{item.code || 暂无数据}}</span>
                </li>
                <li class="peopleInformationSLi">
                  <span class="pInformation">所&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;属：</span>
                  <span class="pInformationS">{{item.organName}}</span>
                </li>
                <li class="peopleInformationSLi">
                  <span class="pInformation">入网时间：</span>
                  <span class="pInformationS">{{item.regTime}}</span>
                </li>
              </ul>
            </div>
          </a-col>
        </li>
      </ul>
      <div>
        <a-pagination
          class="pagination" size="small" :defaultCurrent="1" pageSize="6" @change="onShowSizeChange" :total="count"/>
      </div>
    </div>
    <div v-else style=" padding:25px;height:100%">
      <a-col span="24">
        <template>
          <a-empty/>
        </template>
      </a-col>
    </div>
  </a-row>
</template>

<script>
  import { getAction, postAction } from '@/api/manage'

  export default {
    name: 'informationSchedulingTableCar',
    data() {
      return {
        lookValue: {},
        infoId: '',
        fatherMethod: {},
        inForData: [],
        dataSource: [],
        // isSchduling:{},
        // carName:'',
        form: this.$form.createForm(this, { name: 'coordinated' })
      }
    },
    props: {
      carList: {
        type: Object,
        default: () => []
      },
      count: {
        type: Object,
        default: () => []
      }
    },
    watch: {
      pageSize(val) {
        console.log('pageSize', val)
      },
      current(val) {
        console.log('current', val)
      }
    },
    methods: {
      handleChange(value) {
        this.dataSource =
          !value || value.indexOf('@') >= 0
            ? []
            : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`]
      },
      LookInformation: function(lookValue) {
        var $this = this
        $this.carList.forEach(inner => {
          this.infoId = inner.id//车的Id
          var params = { pageNo: 1, pageSize: 4, carId: 'f93ded499493449d9fffcde4375c88f1' }
          this.carInfo(params)
          debugger
          this.$emit('infoId', params.carId)//调用方法
          debugger
        })
      },
      carInfo(params) {
        getAction('/application/car/scheduling/getSchedulingListPage', params).then(res => {
          debugger
          this.$emit('message', res.data)//传值出去
          // this.data.push({
          //   // 班制名称
          //   // 排版方式
          //   // 时间
          //   address: res.name,
          //   addresss: res.gender,
          //   addressss: res.fixationStart + '至' + res.fixation_end||res.week||res.durationStart + '至' + res.durationEnd
          // })

        })
      },
      onSearch(value) {
        var that = this
        console.log(value)
        this.form.validateFields((err, values) => {
          if (!err) {
            that.carList = []
            that.count = []
            var isSchduling = parseInt(values.isSchduling)// 是否有排班
            var carName = values.carName // 名字
            var param = { pageNo: 1, pageSize: 4, carName: value, isSchduling: isSchduling, carName: carName }
            debugger
            // this.$emit('infoId', params.carId)
            that.$emit('changesValue', param)
            debugger
          }
        })
      },
      initPersonnelInfo(params) {
        debugger
        getAction('/application/car/scheduling/getCarListPage', params).then(res => {
          debugger
          let $this = this
          $this.carList = []
          $this.carList = res.result.carList
          $this.count = []
          $this.count = res.result.count

        })
      },
      onShowSizeChange(current, pageSize) {
        debugger
        console.log(current, pageSize)
        this.initPersonnelInfo({ pageNo: current, pageSize: 4 })
      }

    }
  }
</script>

<style scoped>
  .inforLeft{
    width: 68%;
    display: inline-block;
  }
  .inforLeft{
    display: inline-block;
    margin-left: 6px;
  }
  .pagination {
    float: right;
  }

  .dati {
    height: 100%;
  }

  .nputSearch {
    padding: 0px 24px 4px 24px;
    height: 45px;
  }

  .peopleInformation {
    overflow-y: scroll;
    height: 720px;
  }

  .peopleInformationImg {
    padding: 12px 0px 12px 10px;
    margin-right: 6px;
  }

  .peopleInformationImgtext {
    font-size: 12px;
    font-family: Microsoft YaHei;
    color: rgba(255, 255, 255, 1);
    padding: 4px 0px;
    text-align: center;
    position: absolute;
    display: inline-block;
    background: rgba(28, 192, 159, 1);
    opacity: 0.6;
    left: 10px;
    bottom: 12px;
    width: 95px;
  }

  .peopleInformationImgimg {
    width: 95px;
  }

  .pInformation {
    font-size: 13px;
    font-family: Microsoft YaHei;
    color: rgba(153, 153, 153, 1);
  }

  .pInformationS {
    font-size: 13px;
    font-family: MicrosoftYaHei;
    font-weight: Regular;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .peopleInformationSCar {
    color: #1CC09F !important;
  }

  .peopleInformationSLi {
    height: 19px;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .peopleInformationS {
    padding: 12px 0px;
  }
</style>
