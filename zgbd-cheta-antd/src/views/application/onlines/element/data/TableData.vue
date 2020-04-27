<template>
  <div>
    <a-row>
      <a-card>
        <template  v-for="(item, index) in config[0].columns" >
          <a-form-item :label="'字段' + (index + 1)" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" style="margin-bottom:0;">
            <a-form-item :style="{ display: 'inline-block', width: 'calc(46% - 15px)', marginRight: '10px' }">
              <a-input placeholder="字段名" v-model="item.title" />
            </a-form-item>
            <a-form-item :style="{ display: 'inline-block', width: 'calc(47% - 15px)', marginRight: '10px' }">
              <a-input placeholder="主键名" v-model="item.dataIndex"/>
            </a-form-item>
            <a-icon
              class="dynamic-delete-button"
              type="minus-circle-o"
              @click="(function(index){removeTableField(index)})(index)"
            />
          </a-form-item>
        </template>
        <a-form-item label="新增" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
          <a-button
            type="dashed"
            :style="inputStyle"
            @click="addTableField"
          >
            <a-icon type="plus" /> 添加字段
          </a-button>
          <a-button style="margin-left: 0.2rem" @click="revert" type="dashed">重置</a-button>
        </a-form-item>
      </a-card>

      <a-card :bordered="true">
        <a-col span="24">
          <a-form-item label="DATA：" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-radio-group name="radioGroupTable" @change="onChangeTable" :defaultValue="1">
              <a-radio :value="1">JSON</a-radio>
              <a-radio :value="2">URL</a-radio>
            </a-radio-group>

            <template v-if="table == 1">
              <a-textarea v-model="tableJson" autosize="true" placeholder="请输入获取表数据的json数据" :rows="6"/>
            </template>

            <template v-else-if="table == 2" >
              <a-textarea v-model="tableUrl" autosize="true" placeholder="请输入获取表数据的url地址"/>
            </template>

            <a-button id="tablebtn" @click="tableBtn">确认</a-button>
          </a-form-item>
        </a-col>
      </a-card>
    </a-row>
  </div>
</template>

<script>
    /*export default {
        name: "TableData"
    }*/

    export default {
      name: 'Table',
      data () {
        return {
          /*头部 header*/
          tableFields : [],

          /*尾部 fooder*/
          table : 1,
          tableUrl : '',
          tableJson : [],
        }
      },
      props: {
        config: {
          type: Array,
          default: () => []
        },
      },
      created(){
        this.tableJson = JSON.stringify(this.config[0].data);
      },
      methods : {
        //header 页头
        addTableField(){
          this.config[0].columns.push({fieldType: '1-varchar(50)'});
          this.tableFields.push({fieldType: '1-varchar(50)'});
        },
        removeTableField(index){
          this.config[0].columns.splice(index,1);
          this.tableFields.splice(index,1);
        },
        revert(){
          this.config[0].columns = [];
          this.tableFields = [];
        },

        //fooder 页眉
        onChangeTable (e) {
          this.table = e.target.value;
        },
        tableBtn(){
          if(this.table === 1){
            if(this.tableJson != "") {
              this.config[0].data = JSON.parse(this.tableJson);
            }else{
              this.$message.warning('Json不能为空！');
            }
          }else{
            if(this.tableUrl != "") {
              this.getList(this.tableUrl);

             /* if(){
                this.$message.warning('没有找到这个url！');
              }*/
            }else{
              this.$message.warning('URL不能为空！');
            }
          }
        },
        getList (url) {
          const params = { }
          this.$http.get(url, {params}).then(res => {
            this.config[0].data = res.result
          })

        }
      }
    }
</script>


<style scoped>

</style>