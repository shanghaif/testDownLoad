<template>
    <div class="cheta-list">
      <div class="title">
        <span :style="One" >{{config[0].titleOne}}</span>
        <span class="titleOne">
          <a-input-search
          style="width: 200px;"
          @search="onSearch"
        /></span>
      </div>
      <div class="up">
        <a-table
          :columns="config[0].columns"
          :dataSource="config[0].data"
          size="middle"

        >
          <span slot="ranking" slot-scope="text">
            <span v-if=" text<2" >
              <a-icon type="trophy" theme="filled" class="cheta-icon cheta-iconOne"/>
            </span>
            <!--{{ text }}-->
            <span v-else-if="  text <3 " >
              <a-icon type="trophy" theme="filled" class="cheta-icon cheta-iconTwo"/>
            </span>
             <span v-else-if="  text <4 " >
              <a-icon type="trophy" theme="filled" class="cheta-icon cheta-iconThree"/>
            </span>
             <span v-else>
              <a-icon type="trophy" theme="filled" class="cheta-icon cheta-iconFour"/>
            </span>
            <!--{{ text }}-->

            {{ text }}
          </span>
        </a-table>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ListThree',
    data() {
      const One = this.config[0].styleColor;
      return {
        One,
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    created(){

    },
  };
</script>
<style lang="less">
  .cheta-list{
   margin: 10px;
  }
  .cheta-list .ant-input {
    border: 1px solid #ffffff!important;
  }
  .ant-table-middle > .ant-table-content > .ant-table-body > table > .ant-table-tbody > tr > td{
    padding: 7px 8px!important;
  }
</style>
<style scoped>

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid rgba(248,248,248,1);
    -webkit-transition: all 0.3s, border 0s;
    transition: all 0.3s, border 0s;

  }
  .ant-table-thead > tr > th,.ant-table table{
    text-align: center;
  }

.cheta-list{
  height: 527px;
  box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
  border-radius:3px;
}

  .title{
    padding: 20px;
  }
  .titleOne{
    float: right;
  }
  .title span {

  }
  .up{
    padding: 0 5px;
    margin-top: -30px;
  }
  .cheta-icon{
    font-size: 16px;
  }
  .cheta-iconOne{
    color: #F5222D;
  }
  .cheta-iconTwo{
    color: #F8BB47;
  }
  .cheta-iconThree{
    color: #D6D6D6;
  }
  .cheta-iconFour{
    color: white;
  }
</style>