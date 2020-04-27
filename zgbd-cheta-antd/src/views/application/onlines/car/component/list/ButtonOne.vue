<template>
    <div class="dati">
      <!--第一种      文字加搜索框-->
      <div  v-if="config[0].ifRadioOne != 2" class="changeStyle">
      <div   v-if="config[0].ifOne != 2" class="changeStyle changeStyleRight">
        <span>{{config[0].title11}}</span>
        <a-input-search
          placeholder="请输入要搜索内容"
          style="width: 200px"
          @search="onSearch"
        />
      </div>
      </div>
        <!--第一种      文字加搜索框-->
      <div  v-if="config[0].ifRadioOne != 1" class="changeStyle">
      <div  v-if="config[0].ifOne != 2" class="changeStyle changeStyleRight">
        <span>{{config[0].title12}}</span>
        <a-input-search
          placeholder="请输入要搜索内容"
          style="width: 200px"
          @search="onSearch"
          enterButton
        />
      </div>
      <!--</div>-->
      <!--&lt;!&ndash;第二种      日期 第一种&ndash;&gt;-->
      <!--<div  v-if="config[0].ifRadioTwo != 1" class="changeStyle">-->
        <!--<div   v-if="config[0].ifTwo != 2" class="changeStyle changeStyleRight">-->
          <!--<span>{{config[0].title13}}</span>-->
          <!--<a-month-picker :defaultValue="moment(config[0].dateOne, monthFormat)" v-model="config[0].dateOne"  :format="monthFormat" />-->
        <!--</div>-->
      <!--</div>-->
      <!--<div  v-if="config[0].ifRadioTwo != 2" class="changeStyle">-->
        <!--<div   v-if="config[0].ifTwo != 2" class="changeStyle  changeStyleRight">-->
          <!--<span>{{config[0].title14}}</span>-->
          <!--<a-date-picker @change="onChange" placeholder="请选择日期"/>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash;第二种      日期 第二种&ndash;&gt;-->
      <!--<div  v-if="config[0].ifRadioThree != 1" class="changeStyle">-->
        <!--<div   v-if="config[0].ifThree != 2" class="changeStyle  changeStyleRight">-->
          <!--<span>{{config[0].title15}}</span>-->
          <!--<a-range-picker @change="onChange" />-->
        <!--</div>-->
      <!--</div>-->
      <!--<div  v-if="config[0].ifRadioThree != 2" class="changeStyle" >-->
        <!--<div   v-if="config[0].ifThree != 2" class="changeStyle changeStyleRight">-->
          <!--<span>{{config[0].title16}}</span>-->
          <!--<a-range-picker-->
            <!--:defaultValue="[moment('2019/10/01', dateFormat), moment('2019/11/01', dateFormat)]"-->
            <!--:format="dateFormat"-->
          <!--/>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash;下拉框    第一种&ndash;&gt;-->
      <!--<div v-if="config[0].ifRadioFour != 1" class="changeStyle">-->
        <!--<div v-if="config[0].ifFour != 2" class="changeStyle changeStyleRight">-->
          <!--<span>{{config[0].title17}}</span>-->
        <!--<a-select  style="width: 120px"  @change="handleChange" v-model="config[0].title4" >-->
          <!--<a-select-option :value="config[0].title4">{{config[0].title4}}</a-select-option>-->
          <!--<a-select-option :value="config[0].title5">{{config[0].title5}}</a-select-option>-->
          <!--<a-select-option :value="config[0].title6">{{config[0].title6}}</a-select-option>-->
        <!--</a-select>-->
        <!--</div>-->
      <!--</div>-->
        <!--&lt;!&ndash;下拉框    第二种&ndash;&gt;-->
      <!--<div v-if="config[0].ifRadioFour != 2" class="changeStyle">-->
        <!--<div v-if="config[0].ifFour != 2" class="changeStyle changeStyleRight">-->
          <!--<span>{{config[0].title18}}</span>-->
          <!--<a-select-->
            <!--showSearch-->
            <!--placeholder="请选择"-->
            <!--optionFilterProp="children"-->
            <!--style="width: 200px"-->
            <!--@focus="handleFocus"-->
            <!--@blur="handleBlur"-->
            <!--@change="handleChange"-->
            <!--:filterOption="filterOption"-->
          <!--&gt;-->

            <!--<a-select-option :value="config[0].title7">{{config[0].title7}}</a-select-option>-->
            <!--<a-select-option :value="config[0].title8">{{config[0].title8}}</a-select-option>-->
            <!--<a-select-option :value="config[0].title9">{{config[0].title9}}</a-select-option>-->
          <!--</a-select>-->
        <!--</div>-->
      </div>







      <!--按钮-->















    </div>
</template>

<script>
  import moment from 'moment';
  export default {
    data(){
      return {
        dateFormat: 'YYYY/MM/DD',
        monthFormat: 'YYYY/MM',
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    name: 'ButtonOne',
    methods: {
      moment,
      onSearch (value) {
        console.log(value)
      },
      onChange(date, dateString) {
        console.log(date, dateString);
      },
      range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
          result.push(i);
        }
        return result;
      },

      disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
      },

      disabledDateTime() {
        return {
          disabledHours: () => this.range(0, 24).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56],
        };
      },

      disabledRangeTime(_, type) {
        if (type === 'start') {
          return {
            disabledHours: () => this.range(0, 60).splice(4, 20),
            disabledMinutes: () => this.range(30, 60),
            disabledSeconds: () => [55, 56],
          };
        }
        return {
          disabledHours: () => this.range(0, 60).splice(20, 4),
          disabledMinutes: () => this.range(0, 31),
          disabledSeconds: () => [55, 56],
        };
      },
      handleChange(value) {
        console.log(`selected ${value}`);
      },
      handleBlur() {
        console.log('blur');
      },
      handleFocus() {
        console.log('focus');
      },
      filterOption(input, option) {
        return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      },


    },
  }
</script>

<style scoped>
  .dati{
    height: 40px;
    line-height: 40px;
    margin: 10px 15px;
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
    .changeStyle{
      display: inline;
      height: 32px;
      line-height: 32px;
    }
  .changeStyleRight{
    margin: 20px 30px 20px 0px;
    /*margin-right: 40px;*/
  }

</style>