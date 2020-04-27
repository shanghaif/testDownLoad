<template>
  <a-form-item v-bind="item">
    <a-select
      v-decorator="[bind.fieldName, bind.rules]"
      v-bind="attr"
      :value="value"
      style="width: 100%;margin: 4px 0px"
      :defaultActiveFirstOption="false"
      :showArrow="false"
      :filterOption="true"
      @search="handleSearch"
      @change="handleChange"
      @focus="handleFocus"
      showSearch
      :notFoundContent="null"
      optionFilterProp="children"
    >
      <a-select-option v-for="d in data" :key="d.id">{{d.registrationNo}}</a-select-option>
    </a-select>
  </a-form-item>
</template>

<script>
  import {getAction} from "@/api/manage";
  export default {
    name: 'CarNo',
    props: {
      attr: {
        type: Object
      },
      item: {
        type: Object
      },
      bind: {
        type: Object
      }
    },
    data() {
      return {
        value: '',
        data : [],
        url:{
          getData:"/application/car/account/getData",
        },
      }
    },
    created(){
      this.initCar();
    },
    methods:{
      reKey(value){
        value = value.toString().substring(1,value.length);
        return value
      },
      initCar(){
        let that = this;
        getAction(that.url.getData,{pageNo:1,pageSize:100000}).then(res => {
          if (res.success) {
            that.data = [];
            res.result.data.forEach(item =>{
              if(item.registrationNo && item.registrationNo != ''){
                that.data.push({id:item.id,registrationNo:item.registrationNo})
              }
            })
          }
        })
      },
      handleSearch(value) {
        console.log(value);
      },
      handleChange(value) {
        this.value = value;
      },
      handleFocus() {
        console.log('focus');
      },
      filterOption(input, option) {
        return (
          option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
    }
  }
</script>

<style scoped>

</style>