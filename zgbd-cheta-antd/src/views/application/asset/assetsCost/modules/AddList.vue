<template>
  <div class="cheta-height-full cheta-report-filed">
    <a-card :bordered="false" size="small" :bodyStyle="{padding: '0px'}">
      <div slot="title" class="cheta-report-title">
        <a-tooltip title="返回文档列表首页" class="cheta-events" @click="doHome">
          <a-icon type="left" />
          <a-avatar src="/logo.png" class="cheta-ml-10"/>
        </a-tooltip>
      </div>
      <div class="clearfix cheta-mtl-20">
        <div class="cheta-floatl">
          报表类别：
          <a-cascader
            :options="options"
            :showSearch="{filter}"
            @change="onChange"
            placeholder="请选择报表类别"
            class="cheta-mr-20 cheta-cascader"
          />
          报表名称：
          <a-input  placeholder="请输入报表名称" style="width: 120px" class="cheta-mr-20" v-model="reportObject.name"/>
          封面上传：
          <a-upload
            action="../fileUpload"
            :fileList="fileList"
            @preview="handlePreview"
            @change="handleChange"
            accept=".jpg, .jpeg, .png"
            class="cheta-mr-20"
          >
            <a-button> <a-icon type="upload" />上传图片</a-button>
          </a-upload>
        </div>
      </div>
      <a-table
        :columns="columns"
        :dataSource="data"
        rowKey="id"
        class="cheta-mt-10 cheta-table cheta-positionr"
        :pagination="false"
      >
        <component
          v-for="column in columns"
          v-if="column.scopedSlots.customRender"
          :is="column.scopedSlots.component"
          :slot="column.key"
          slot-scope="text, record, index"
          :content="text"
          :record="record"
          :ind="index"
          @refresh="init"
        />
      </a-table>
      <a-dropdown :trigger="['click']">
        <span class="cheta-edit-icon" @click="fieldVisible = true"><a-icon type="filter" /></span>
        <div slot="overlay" v-if="fieldVisible = true" style="box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1)">
          <a-menu style=";height: 400px;overflow-y: scroll;">
            <a-menu-item>
              <a-checkbox><span>全部</span></a-checkbox>
            </a-menu-item>
            <a-menu-item v-for="(item,index) in digit">
              <a-checkbox  @change="onChangeSingle(item)" :checked="item.checked"><span>{{item.title}}</span></a-checkbox>
            </a-menu-item>
          </a-menu>
          <div class="cheta-digit-border">
            <a-button-group class="cheta-m-10">
              <a-button type="primary" @click="determine">确认</a-button><a-button>取消</a-button>
            </a-button-group>
          </div>
        </div>
      </a-dropdown>
      <div class="cheta-ml-20 cheta-mt-20">
        <a-button  @click="Submit">取消</a-button>
        <a-button type="primary" @click="Submit" class="cheta-ml-20" :disabled="columns.length ==0">提交</a-button>
      </div>
      <Confirm ref="confirm" :reportObject="reportObject" :columns="columns"></Confirm>
    </a-card>

  </div>
</template>

<script>
  import Confirm from '../../../firm/report/system/Confirm'
  import { reportColumns, permissionList} from '../../../firm/report/api/api'
  import { getAction } from '@/api/manage'
  import formMixin from '@/views/application/onlines/car/data/list/modules/config/component.js'


  export default {
    name: 'Template',
    components: Object.assign(
      formMixin.components,
      {Confirm}
    ),
    data() {
      return {
        fieldVisible: false,
        previewImage: '',
        typeList: [
          {name:'车务报表',key:1},
          {name:'维修报表',key:1},
          {name:'登记报表',key:1},
        ],
        fileList: [{}],
        columns: [],
        data: [],
        options: [],
        digit: [],
        reportObject: {
          name: '',
          coverImage: '/image/firm/report/blueimg.png',
          reportType:{
          }
        },
        disabled: false,
      }
    },
    created () {
      this.init()
      // this.digit = Object.assign(this.columns)
    },
    methods:{
      init() {
        let $this = this;
        permissionList().then(res => {
          $this.options = $this.initChildren(res);
        });
      },
      onChange(value, selectedOptions) {
        var text = selectedOptions.map(item => item.title).join('/');
        this.reportObject.reportType = {text: text,id: value[value.length - 1]}
        this.getColumns(value)
      },
      getColumns (valueList) {
        var param= {
          menuId: valueList[valueList.length - 1]
        }
        var $this = this
        reportColumns(param).then(res => {
          if (res.result) {
            $this.columns =res.result.columns
            /*$this.data =res.result.data*/
            $this.columns.forEach(item=>{
              // item.checked
              var tmp = {
                sorter: item.sorter,
                dataIndex: item.dataIndex,
                key: item.key,
                title: item.title,
                scopedSlots: item.scopedSlots,
                checked: true
              }
              $this.digit.push(tmp)
            })
            if(res.result.http.url){
              getAction(res.result.http.url,res.result.http.params).then(res => {
                if(res.result){
                  $this.data = res.result.data;
                }
              })
            }
          }
        })
      },
      filter(inputValue, path) {
        return path.some(
          option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
        );
      },
      handlePreview (file) {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisible = true
      },
      handleChange ({ fileList }) {
        this.fileList = fileList
        if (this.fileList[1].status === 'done') {
          this.reportObject.coverImage = fileList[1].response;
        }
      },
      Submit () {
        this.$refs.confirm.showMadal()
      },
      initChildren (menus) {
        if (menus.length!==0) {
          var array = [];
          menus.forEach(menu =>{
            var result = {value: menu.id, title: menu.name, label: menu.name,children:[]}
            if (menu.children) {
              result.children = this.initChildren(menu.children)
            }
            array.push(result)
          })
          return array
        }
      },
      onChangeSingle(item){
        item.checked = !item.checked
      },
      determine () {
        var $this = this
        var arr = []
        this.digit.forEach(inner=>{
          if (inner.checked) {
            arr.push(inner)
          }
        })
        $this.columns = arr
      },
      doHome () {
        this.$router.push({path: '/baobiaozhongxin'});
      },
    }
  }
</script>

<style lang="less" scoped>

  .cheta-button i {font-size: 12px;padding-right: 5px}
  .cheta-table{min-height:580px;}
  .cheta-edit-icon{
    position: absolute;
    top: 142px;
    right: 10px;
  }
  .cheta-digit-border{ border: 1px solid #e8e8e8;}
  .cheta-cascader{
    width: 335px;
  }


</style>