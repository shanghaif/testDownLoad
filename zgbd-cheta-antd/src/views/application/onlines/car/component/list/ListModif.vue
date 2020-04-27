<template>
  <div>
    <a-spin :spinning="spinning">
      <c-table
        :columns="config[0].columns"
        :dataSource="config[0].data"
        rowKey="id">
        <div  slot="status"  slot-scope="text, record">
          <component :record="record" is="ListStatus"/>
        </div>
        <div  slot="action"  slot-scope="text, record">
          <component :record="record" :config="config[0].elements" is="ListAction"/>
        </div>
        <!--<span slot="penalty"  slot-scope="text, record">
          <span class="red">{{record.money}}</span>
        </span>
        <span slot="status"  slot-scope="text, record">
          <template v-if="statusType == 1">
              <span >{{record.status}}</span>
          </template>
          <template v-else-if="statusType == 2">
              <span class="blue" v-if="record.status == '审核中'">{{record.status}}</span>
              <span class="green" v-if="record.status == '审核通过'">{{record.status}}</span>
              <span class="red" v-if="record.status == '审核驳回'">{{record.status}}</span>
              <span class="yellow" v-if="record.status == '待审核'">{{record.status}}</span>
          </template>
          <template v-else-if="statusType == 3">
              <a-badge status="processing" v-if="record.status == '审核中' " :text="record.status" />
              <a-badge status="success" v-else-if="record.status == '审核通过' " :text="record.status" />
              <span v-else-if="record.status == '审核通过' ">上传资料</span>
              <a-badge status="error" v-else-if="record.status == '审核驳回' " :text="record.status" />
              <a-badge status="warning" v-else-if="record.status == '待审核' " :text="record.status" />
          </template>
          <template v-else-if="statusType == 4">
              <a-badge class="blue" status="processing" v-if="record.status == '审核中' " :text="record.status" />
              <a-badge class="green" status="success" v-else-if="record.status == '审核通过' " :text="record.status" />
              <a-badge class="red" status="error" v-else-if="record.status == '审核驳回' " :text="record.status" />
              <a-badge class="yellow" status="warning" v-else-if="record.status == '待审核' " :text="record.status" />
          </template>
        </span>
        <span slot="action"  slot-scope="text, record">
          <template v-if="actionType == 1">
              <a href="javascript:;">
                <a>{{config[0].detail}}</a>
              </a>
          </template>
          <template v-if="actionType == 2">
              <span class="orange" style="margin-right: 20px;">{{record.status}}</span>
              <a style="margin-right: 20px;" href="javascript:;">
                <a class="black6">{{config[0].edit}}</a>
              </a>
          </template>
          <template v-else-if="actionType == 3">
               <a href="javascript:;">{{config[0].join}}</a>
               <a-divider type="vertical" />
               <a class="black6" href="javascript:;">{{config[0].delay}}</a>
          </template>
          <template v-else-if="actionType == 4">
               <a href="javascript:;">{{record.currentHandle}}</a>
               <a-divider type="vertical" />
               <a class="blue" href="javascript:;">{{config[0].detail}}</a>
          </template>
          <template v-else-if="actionType == 5">
               <a class="black6" href="javascript:;">{{config[0].urge}}</a>
               <a-divider type="vertical" />
               <a class="black6" href="javascript:;">{{config[0].materials}}</a>
               <a-divider type="vertical" />
               <a href="javascript:;">{{config[0].close}}</a>
          </template>
          <template v-else-if="actionType == 6">
               <a style="margin-right: 20px;" href="javascript:;">{{config[0].detail}}</a>
                <a-dropdown>
                  <a-menu slot="overlay">
                    <a-menu-item>
                      {{config[0].renewal}}
                    </a-menu-item>
                    <a-menu-item>
                      {{config[0].addCoverage}}
                    </a-menu-item>
                  </a-menu>
                  <a href="javascript:;">
                    {{config[0].edit}} <a-icon type="down" />
                  </a>
                </a-dropdown>
          </template>
          <template v-else-if="actionType == 7">
              <a-button :class="{hidden: !record.handle}" style="margin-right: 20px;width: 64px;">{{record.handle}}</a-button>
              <a href="javascript:;">
                <a>{{config[0].detail}}</a>
              </a>
          </template>
        </span>-->
      </c-table>
    </a-spin>
  </div>
</template>

<script>
  import ListStatus from './modules/ListStatus'
  import ListAction from './modules/ListAction'
  import CTable from '@/views/chetaui/table/index.js'
  import {getAction} from "@/api/manage";

    export default {
      name: "ListModif",
      components: {CTable,ListStatus,ListAction},
      inject: ['reload'],
      data () {
        return {
          spinning : false,
          actionType: this.config[0].actionType?this.config[0].actionType : 1,
          statusType: this.config[0].statusType?this.config[0].statusType : 1,
          ListData : [{
            name : "ListStatus",
            slot : "status",
            data : {
              /*#e65225*/
              color : ""
            }
          },{
            name : "ListAction",
            slot : "action",
            data : {
              color : "",
            }
          }]
        }
      },
      props: {
        config: {
          type: Array,
          default: () => []
        },
      },
      created(){
        this.init();
      },
      mounted(){
        let self = this;
        this.$root.event.$on('ListModifDataAction',function (data) {
          self.actionType = data;
        });
        this.$root.event.$on('ListModifDataStatus',function (data) {
          self.statusType = data;
        });
      },
      methods: {
        init(){
          var that = this;
          var url = that.config[0].dataUrl;
          if (that.config[0] && that.config[0].dataUrl && that.config[0].dataUrl != "") {
            that.spinning = true;
            that.config[0].data = [];
            if(that.config[0].isFlow == true && that.config[0].flowId != ""){
                  url = url + "?id=" + that.config[0].flowId;
              }
            getAction(url).then(res => {
              that.config[0].data = res.result;
              that.spinning = false;
            })
          }
        }
      }
    }
</script>
<style scoped>
.blue .ant-badge-status-text{
  color: #1890ff;
}
.yellow .ant-badge-status-text{
  color: #faad14;
}
.green .ant-badge-status-text{
  color: #52c41a;
}
.red .ant-badge-status-text{
  color: #f5222d;
}
.status3.ant-alert-error{
  background: none;
  margin-left: -17px;
}
</style>
<style scoped>
.orange{
  color: #FF8400;
}
.ant-badge-status-dot.ant-badge-status-processing .ant-badge-status-text{
  color: #1890ff;
}
.blue{
  color: #1890ff;
}
.yellow{
  color: #faad14;
}
.green{
  color: #52c41a;
}
.red{
  color: #f5222d;
}
.black3{
  color: #333;
}
.black6{
  color: #666;
}
.hidden{
  visibility: hidden;
}
</style>