<template>
    <div>
      <div>
        <span>状态：</span>
        <a-select defaultValue="全部" style="width: 120px">
        <a-select-option v-for="(item,index) in stateList" :key="index" :value="item.id">{{item.text}}</a-select-option>
      </a-select>
        <div class="">
          <a-input-search style="width: 535px;" placeholder="输入关键字" @search="onSearch" enterButton />
        </div>
        <a-button style="margin-right: 10px;"><em style="font-size: 18px;">+ </em>新增</a-button>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Index",
    data () {
      return {
        stateList:[{id:1,text:"太空车"},{id:2,text:"摩托车"}]
      }
    }
  }
</script>

<style scoped>

</style>