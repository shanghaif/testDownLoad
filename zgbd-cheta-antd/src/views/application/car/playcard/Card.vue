<template>
    <a-row class="cheta-Card">

      <!--第一个-->
      <a-col :xl="12" :md="24" :sm="24" :xs="24">

        <!--第一行-->
        <a-row style="border-radius: 6px;box-shadow:1px 1px 5px #EAEAEA;padding: 15px;margin: 0px 40px 20px 30px">
          <a-col :span="12">
            <div>
              <span style="font-size:18px"> 临时牌车辆数</span>
            </div>
          </a-col>

          <!--日历-->
          <a-col :span="11">
            <div>
              <a-range-picker>
                <template slot="renderExtraFooter">
                </template>
              </a-range-picker>
            </div>
          </a-col>

          <!--圆环-->
          <a-col :span="11">
            <a-progress type="circle" style="float: right;padding: 10px;font-size: 40px" :width="150" :percent="75" :format="() => '10000'" strokeColor="#9B56FF" />
          </a-col>
          <a-col :span="11">
            <div style="display: inline-block">
              <p class="approvallarge">
                <span class="shangpaiOne"></span>上牌中：
                <b class="approval">6000</b>
              </p>
            </div>
            <br/>
            <div style="display: inline-block">
              <p class="new">
                <span class="WshangpaiTwo"></span>未登记上牌：
                <b style="font-size: 22px;margin-top: -4px;color: #666666">4000</b>
              </p>
            </div>
          </a-col>
        </a-row>
      </a-col>

      <!--第二个-->
      <a-col :xl="12" :md="24" :sm="24" :xs="24">

        <!--第一行-->
        <a-row style="border-radius: 6px;box-shadow:1px 1px 5px #EAEAEA;padding: 15px;margin: 0px 40px 20px 30px">
          <a-col :span="12">
            <div>
              <span style="font-size:18px"> 正式牌变更</span>
            </div>
          </a-col>

          <!--日历-->
          <a-col :span="11">
            <div>
              <a-range-picker>
                <template slot="renderExtraFooter">
                </template>
              </a-range-picker>
            </div>
          </a-col>

          <!--圆环-->
          <a-col :span="11">
            <a-progress type="circle" style="float: right;padding: 10px;font-size: 40px" :width="150" :percent="75" :format="() => '10000'" strokeColor="#D789FF" />
          </a-col>
          <a-col :span="11">
            <div style="display: inline-block">
              <p class="approvallarge">
                <span class="shangpaiTwo"></span>审批中：
                <b class="approval" >4000</b>
              </p>
            </div>
            <br/>
            <div style="display: inline-block">
              <p class="new">
                <span class="WshangpaiTwo"></span>已完成：
                <b class="approval">6000</b>
              </p>
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="23" style="margin-left: 30px">
          <tabs defaultActiveKey="1" @change="callback">
            <pane label="临时牌登记" name="1">
              <CardSonThree></CardSonThree>
            </pane>
            <pane label="正式牌变更" name="2">
              <CardSonFour></CardSonFour>
            </pane>
            <pane label="逾期历史" name="3">
              <CardSonFive></CardSonFive>
            </pane>
          </tabs>
      </a-col>


    </a-row>
</template>

<script>
  import ACol from 'ant-design-vue/es/grid/Col'
  import Tabs from './modules/CardSonOne'
  import pane from './modules/CardSonTwo'
  import CardSonThree from './modules/CardSonThree'
  import CardSonFour from './modules/CardSonFour'
  import CardSonFive from './modules/CardSonFive'
  import ARow from 'ant-design-vue/es/grid/Row'
  import CardDaughter from './modules/CardDaughter'


  const dataSource = []
  dataSource.push(null)

  export default {

    components: {
      ARow,
      ACol,
      Tabs,
      pane,
      CardSonThree,
      CardSonFour,
      CardDaughter,
      CardSonFive,
    },
    name: 'CardList',
    data() {
      return {
        value: '1',
        formLayout: 'horizontal',
        form: this.$form.createForm(this),
        Total: '10000',
        visible: false,
        visiblee: false,
        dataSource,
        checkNick: false,
        formItemLayout,
        formTailLayout,
        current: 3,
      }
    },
    methods: {
      onChange(current) {
        this.current = current
      },
      showModal() {
        this.visible = true
      },
      onSearch(value) {
        console.log(value)
      },

      showModall() {
        this.visiblee = true
      },
      callback (key) {
        console.log(key)
      },

    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if(!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  }
  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    labelColl: { span: 4 },
    wrapperColl: { span: 20 },
  };
  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };
</script>
<style>
  .cheta-Card .ant-progress-circle .ant-progress-text {
    color: rgba(0, 0, 0, 0.65)!important;
  }
</style>
<style lang="less" scoped>

  .shangpaiOne {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #9B56FF;
    display: block;
    margin-top: 8px;
    margin-left: -25px;
    margin-right: 15px;
  }

  .shangpaiTwo {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #D789FF;
    display: block;
    margin-top: 8px;
    margin-left: -25px;
    margin-right: 15px;
  }

  .WshangpaiTwo {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #E5E5E5;
    display: block;
    margin-top: 8px;
    margin-left: -25px;
    margin-right: 15px;
  }
  .approval{
    font-size: 22px;
    margin-top: -4px;
  margin-left:33px;
    color: #666666;
  }
  .approvallarge{
    padding: 20px 0px 20px 60px;
    display: flex;
    font-size: 17px;
  }
  .new{
    padding:  10px 0px  10px 60px;
    display: flex;
    font-size: 17px;
  }
  @media screen and (max-width: 750px){
    .approval{
      margin-left: 0px;
    }
    .approvallarge {
       padding: 40px 0px 10px 40px;
     }
    .new{
      padding:  10px 0px  10px 40px;
    }
  }
  @media screen and (max-width: 610px){
    .approvallarge {
      padding: 40px 0px 10px 40px;
    }
      /*.approval{*/
      /*margin-left: 0px;*/
      /*}*/

  }
</style>