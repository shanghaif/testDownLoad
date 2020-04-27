<template>
  <div>
    <a-row :gutter="16">
      <a-col class="gutter-row" :xs="24" :sm="12" :md="12" :xl="12">
        <a-card title="查询信息">
          <a-form-item label="车辆种类" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <a-select :style="inputStyle" v-model="carType">
              <a-select-option value="02">小型汽车</a-select-option>
              <a-select-option value="03">大型汽车</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="车牌号码" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <a-input @change="autocode" v-model="plateNo"/>
          </a-form-item>
          <a-form-item label="发动机号" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" help="发动机即车架号，输入后六位即可">
            <a-input @change="change" v-model="engNo"/>
          </a-form-item>
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
            <a-button type="primary" @click="loadData" html-type="submit">查询</a-button>
          </a-form-item>
        </a-card>
      </a-col>
      <a-spin :spinning="spinning">
        <a-col class="gutter-row" :xs="24" :sm="12" :md="12" :xl="12">
          <a-card title="违章信息" v-if="result.msg === 'success'">
            <a-row>
              <a-col :span="24" style="margin-bottom: 20px">{{ result.result.hphm }}</a-col>
              <a-col :span="8" style="margin-bottom: 20px">
                {{ result.result.undeal_count }}<br/>违章
              </a-col>
              <a-col :span="8" style="text-align: center;margin-bottom: 20px">
                {{ result.result.undeal_amount_of_money }}<br/>罚款
              </a-col>
              <a-col :span="8" style="text-align: center;margin-bottom: 20px">
                {{ result.result.undeal_amount_of_score }}<br/>扣分
              </a-col>
              <a-col :span="24" style="margin-bottom: 10px">检验有效期值：{{ result.result.valid_date }}</a-col>
              <a-col :span="24" style="margin-bottom: 10px">强制报废时间：{{ result.result.invalidated_date }}</a-col>
              <a-col :span="24" style="margin-bottom: 20px">状态：{{ result.result.status }}</a-col>
            </a-row>
            <a-row v-for="item in result.result_set">
              <a-col :span="24" style="color: rgba(0, 0, 0, 0.65)">
                {{ item.cjjgmc }}
              </a-col>
              <a-col :span="12" style="color: rgba(0, 0, 0, 0.45)">
                违法时间
              </a-col>
              <a-col :span="12" style="color: rgba(0, 0, 0, 0.45)">
                {{ item.wfsj }}
              </a-col>
              <a-col :span="12" style="color: rgba(0, 0, 0, 0.45)">
                违法地址
              </a-col>
              <a-col :span="12" style="color: rgba(0, 0, 0, 0.45)">
                {{ item.wfdz }}
              </a-col>
              <a-col :span="12" style="color: rgba(0, 0, 0, 0.45)">
                违法行为
              </a-col>
              <a-col :span="12" style="color: rgba(0, 0, 0, 0.45)">
                {{ item.wfxw }}
              </a-col>
              <a-col :span="12" style="color: rgba(0, 0, 0, 0.45)">
                罚款金额
              </a-col>
              <a-col :span="12" style="color: rgba(0, 0, 0, 0.45)">
                {{ item.fkje }}
              </a-col>
              <a-col :span="12" style="color: rgba(0, 0, 0, 0.45)">
                违纪记分
              </a-col>
              <a-col :span="12" style="color: rgba(0, 0, 0, 0.45)">
                {{ item.wfjfs }}
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-spin>
    </a-row>
  </div>
</template>

<script>

  import {getAction} from '@/api/manage'

  export default {
    name: 'Violation',
    data () {
      return {
        inputStyle: {
          width: '100%',
          marginRight: '10px'
        },
        carType: '02',
        plateNo: '粤A4HX24',
        engNo: '250179',
        data: [
          {
            title: 'Ant Design Title 1',
          },
          {
            title: 'Ant Design Title 2',
          },
          {
            title: 'Ant Design Title 3',
          },
          {
            title: 'Ant Design Title 4',
          },
        ],
        spinning: true,
        result: {

        }
      }
    },
    created () {
      this.loadData();
    },
    methods: {
      loadData () {
        this.spinning = true;
        getAction('https://gdjmt.gdsecurity.cn:8081/jmt-api/aladdin/getCarInfo',{
          plate_no: this.plateNo, car_type: this.carType, eng_no: this.engNo
        }).then(res => {
          this.spinning = false;
          this.result = res;
        });
      }
    }
  }
</script>

<style scoped>

</style>