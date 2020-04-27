<template>
  <!--汇总-->
  <div class="homeBody">
            <span class="homeBodyLeft">机构：
              <a-select defaultValue="lucy" style="width: 220px" @change="handleChangeselect">
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
              </a-select>
            </span>
    <span class="homeBodyLeft">
               <a-month-picker :size="size" placeholder="请选择月份" />
            </span>
    <span class="homeBodyLeft">
              <span class="homeBodyLeft">费用金额 </span>≥
              <a-input-number
                :defaultValue="4500"
                style="width: 100px;"
                :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                @change="onChangenumber"/></span>
    <span class="homeBodyLeft"> <a-input-search placeholder="请输入关键字搜索" style="width: 200px" @search="onSearchsearch"/> </span>
    <!--<span>  <a-button type="primary">查询</a-button> </span>-->
    <div class="homeBodyRight">
      <span> <a-button type="primary">批量导出</a-button> </span>
      <span> <a-button>自定义列表</a-button> </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Screen'
  }
</script>

<style scoped>

</style>