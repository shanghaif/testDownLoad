<template>
    <div class="from">
      <span class="">日期：</span>
      <a-range-picker >
        <template slot="renderExtraFooter">
          extra footer
        </template>
      </a-range-picker>

      <span class="from-text">状态：</span>
      <a-select
        showSearch
        placeholder="请选择状态"
        optionFilterProp="children"
        style="width: 200px"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        :filterOption="filterOption"
      >
        <a-select-option value="状态A">状态A</a-select-option>
        <a-select-option value="状态A">状态B</a-select-option>
        <a-select-option value="状态C">状态C</a-select-option>
      </a-select>


      <span class="from-text">车牌号：</span>
      <a-input-search placeholder="请输入车牌号" style="width: 200px" @search="onSearch" />


    </div>
</template>

<script>
  export default {
    name: 'InsuranceSonFive',
    methods: {
      onSearch (value) {
        console.log(value)
      },
      handleChange (value) {
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
      }
    }
  }
</script>

<style scoped>
.from-text{
  padding-left:40px;
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:40px;
}
</style>