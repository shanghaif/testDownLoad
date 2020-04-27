<template>
  <div class="cheta-search">
    <a-input placeholder="车牌号码" v-model="keyword" style="height: 35px" @change="searchChange" @pressEnter="search" maxLength="5">
      <a-select v-if="addonBefore" slot="addonBefore" style="width: 70px;" v-model="isTemporary">
        <a-select-option value="0">正式</a-select-option>
        <a-select-option value="1">临时</a-select-option>
      </a-select>
      <div v-if="showSearch" slot="suffix" @click="search" style="cursor: pointer">
        <a-icon type="search"></a-icon>
      </div>
      <div slot="prefix" id="cheta-serach-res">
        <a-popover placement="bottomLeft" trigger="click">
          <template slot="content">
            <ul class="clearfix select-list" style="list-style:none;">
              <li v-for="item in prefixData.first" @click="changePrefixFirst(item)">{{ item }}</li>
            </ul>
          </template>
          <div class="cheta-search-res">{{ prefix.first }}</div>
        </a-popover>
        <a-popover placement="bottomLeft" trigger="click">
          <template slot="content">
            <ul class="clearfix select-list" style="list-style:none;">
              <!--<li v-for="item in prefixData.first" @click="() => prefix.first = item">{{ item }}</li>-->
              <li v-for="item in prefixData.second" @click="changePrefixSecond(item)">{{ item }}</li>
            </ul>
          </template>
          <div class="cheta-search-res">{{ prefix.second }}</div>
        </a-popover>
      </div>
    </a-input>
  </div>
</template>
<script>
  import prefixData from './data'
  export default {
    name: 'Index',
      data(){
      return {
        prefixData: prefixData,
        prefix: {first: '粤', second:'A'},
        keyword:'',
        isTemporary:"0",
        searchVal:'',
        registrationNo:''
      }
    },
    props:{
      showSearch:{
        default:true,
        type:Boolean
      },
      addonBefore: {
        default:false,
        type:Boolean
      },
      defaultVal:{
        type: String
      }
    },
    created(){
      if (this.defaultVal) {
        this.prefix.first = this.defaultVal.substring(0,1);
        this.prefix.second = this.defaultVal.substring(1,2);
        this.keyword = this.defaultVal.substring(2);
      }
    },
    methods:{
      search(){
        var keyword = this.prefix.first + this.prefix.second + this.keyword || ''
        this.$emit('search',keyword)
      },
      searchChange (e)  {
        const { value } = e.target
        this.keyword = value.replace(/[\W]/g,'')
        this.searchVal = this.prefix.first + this.prefix.second + this.keyword || '';
        this.$emit('searchChange',this.searchVal, this.isTemporary)
      },
      changePrefixFirst (item) {
        this.prefix.first = item;
        this.searchChange();
      },
      changePrefixSecond (item) {
        this.prefix.second = item;
        this.searchChange();
      },
    }
  }
</script>
<style lang="scss">
  .cheta-search .ant-input-affix-wrapper .ant-input:not(:first-child) {
    padding-left: 90px;
  }
  .cheta-search .ant-input-affix-wrapper .ant-input-prefix :not(.anticon), .ant-input-affix-wrapper .ant-input-suffix :not(.anticon) {
    line-height: 0;
  }
</style>

<style lang="scss" scoped>
  .cheta-search-res{
    display: inline-block;
    width: 40px;
    position: relative;
    color: #000;
    cursor: pointer;
  }
  .cheta-search-res:after{
    content: '';
    position: absolute;
    right: 13px;
    /*top: 11px;*/
    border-top: 3px solid rgba(0, 0, 0, 0.4);
    border-right: 3px solid transparent;
    border-left: 3px solid transparent;
  }
  .select-list{
    width: 300px;
  }
  .select-list li{
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #E6E6E6;
    border-radius: 8px;
    text-align: center;
    margin: 10px 10px;
  }

</style>