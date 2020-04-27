<template>
  <div>
    <template>
      <a-spin :spinning="spinning">
        <div class="gutter-example">
          <a-row :gutter="16">
            <a-col class="gutter-row" :xl="8" :lg="9" :md="12" :sm="12" :xs="24">
              <div class="gutter-box">工单号: {{ repair.id }}</div>
              <div class="gutter-box">审批人: {{ repair.approverId }}</div>
            </a-col>
            <a-col class="gutter-row" :xl="4" :lg="6" :md="12" :sm="12" :xs="24">
              <div class="gutter-box">申请人: {{ repair.userText }}</div>
              <div class="gutter-box">抄送人: {{ repair.copyerId }}</div>
            </a-col>
            <a-col class="gutter-row" :xl="6" :lg="8" :md="12" :sm="12" :xs="24">
              <div class="gutter-box">车牌号: {{ repair.vehicleText }}</div>
              <div class="gutter-box">申请时间: {{ repair.createTime }}</div>
            </a-col>
            <a-col class="gutter-row" :xl="4" :lg="4" :md="12" :sm="12" :xs="24">
              <div class="gutter-box">故障说明: {{ repair.description }}</div>
            </a-col>
            <a-col class="gutter-row" :xl="2" :lg="2" :md="0" :sm="0" :xs="0">
              <div class="gutter-box" v-for="item in files">
                <img :src="item" width="30px" height="30px" style="margin: 10px;"/>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-spin>
    </template>
    <!--yhmgngghhggh-->
    <div :dataSource="data">
      <div v-for="item in data" :class="item.title=='作废'?'disable':'abled'">
        <a-row :gutter="16">
          <a-col :span="14" :xl="14" :lg="14" :md="14" :sm="14" :xs="24" >
            <div class="name" v-if="statusTemplate[item.title].status === 'success'">
              <a-icon type="down-circle" theme="filled" class="icon_tu" style="margin-right: 10px"/><span class="focus_title">{{ statusTemplate[item.title].desc }}: </span>

              <span v-if="item.title=='报价'">
                <span class="focus_title">{{offer.cost}}
                </span>
                <div v-if="offer">
                  <div class="gutter-example" v-if="offer" style="margin-left: 24px">
                    <a-row :gutter="16">
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">维修厂: {{ offer.repairShop }}</div>
                        <div class="gutter-box" v-for="(project,index) in projects">
                          项目{{ index + 1 }}: {{ project.projectName }}
                        </div>
                      </a-col>
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">维修单号: {{ offer.repairNo }}</div>
                        <div class="gutter-box" v-for="(project) in projects">
                          单价：{{ project.price }}
                        </div>
                      </a-col>
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">负责人: {{ offer.header }}</div>
                        <div class="gutter-box" v-for="(project) in projects">
                          数量: {{ project.number }}
                        </div>
                      </a-col>
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">联系电话: {{ offer.phone }}</div>
                        <div class="gutter-box" v-for="(project) in projects">
                          工时：{{ project.workingHours }}
                        </div>
                      </a-col>
                    </a-row>
                  </div>
                </div>
              </span>
              <span v-else-if="item.title=='提交报价'">
                <span class="focus_title">{{offer.cost}}
                </span>
                <div v-if="offer">
                   <div class="gutter-example" v-if="offer" style="margin-left: 24px">
                    <a-row :gutter="16">
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">维修厂: {{ offer.repairShop }}</div>
                        <div class="gutter-box" v-for="(project,index) in projects">
                          项目{{ index + 1 }}: {{ project.projectName }}
                        </div>
                      </a-col>
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">维修单号: {{ offer.repairNo }}</div>
                        <div class="gutter-box" v-for="(project) in projects">
                          单价：{{ project.price }}
                        </div>
                      </a-col>
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">负责人: {{ offer.header }}</div>
                        <div class="gutter-box" v-for="(project) in projects">
                          数量: {{ project.number }}
                        </div>
                      </a-col>
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">联系电话: {{ offer.phone }}</div>
                        <div class="gutter-box" v-for="(project) in projects">
                          工时：{{ project.workingHours }}
                        </div>
                      </a-col>
                    </a-row>
                  </div>
                </div>
              </span>
              <span v-else-if="item.title=='开始验车'||item.title=='作废'">
                <span class="focus_title">{{ statusTemplate[item.title].desc }}</span>
                <div>
                    <a-row :gutter="16">
                      <a-col :span="12" v-if="fileList.length !== 0">
                        <div style="margin-left: 24px;padding-right: 0" class='photo_font'>
                          维修照片
                        </div>
                        <div style="margin-left: 24px;" class="photo"><!--
                           <a-upload
                             listType="picture"
                             :defaultFileList="fileList"
                           >
                           </a-upload>-->
                          <img :src="fileItem.url" v-for="fileItem in fileList" @click="openfile(fileItem.url)" style="width: 30px;height: 30px;"/>
                        </div>
                      </a-col>
                      <a-col :span="10" v-if="defaultFileList.length !== 0" style="padding-left: 0;margin-left: 30px" class="order_font">
                        <div>
                          维修清单：
                        </div>
                        <div>
                          <!--v-for="item1 in upType"-->
                          <a-upload :defaultFileList="defaultFileList" class="order">
                          <!--<span style="margin-left: 10px"></span>-->
                          </a-upload>
                        </div>
                      </a-col>
                    </a-row>

                  </div>
              </span>
              <span v-else-if="item.title=='OA审核'" class="focus_title">
                  {{ statusTemplate[item.title].desc }}
              </span>
              <span v-else-if="item.title=='OA通过'">
                <span class="focus_title">{{ statusTemplate[item.title].desc }}</span>
                <div>
                  <div class="gutter-example" style="margin-left: 24px">
                    <a-row :gutter="16">
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">OA单号:{{item.businessId}} </div>
                      </a-col>
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">审核备注: {{item.description}}</div>
                      </a-col>
                    </a-row>
                  </div>
                </div>
              </span>
              <span v-else-if="item.title=='验车完成'">
                <span class="focus_title">{{ statusTemplate[item.title].desc }}</span>
                <div>
                  <div class="gutter-example" style="margin-left: 24px">
                    <a-row :gutter="16">
                      <a-col class="gutter-row" :span="24" :lg="24" :md="24" :sm="24" :xs="24">
                        <div class="gutter-box">结算方式:
                          <a-radio-group>
                            <a-radio :value="1">财务付款</a-radio>
                            <a-radio :value="2">维修报销</a-radio>
                          </a-radio-group>
                        </div>
                      </a-col>
                    </a-row>
                  </div>
                </div>
              </span>
              <span v-else class="focus_title">
                {{item.title}}
              </span>
            </div>
            <div class="name" v-else>
              <a-icon type="close-circle" theme="filled" style="color: #FF0000;margin-right: 5px"/><span class="focus_title">{{ statusTemplate[item.title].desc }}:</span><span class="rejected" style="color: #FF0000;">{{item.title}}</span>
              <span v-if="item.title=='OA驳回'">
                <div>
                  <div class="gutter-example" style="margin-left: 19px">
                    <a-row :gutter="16">
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">OA单号:{{item.businessId}}</div>
                      </a-col>
                      <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                        <div class="gutter-box">审核备注: {{item.description}}</div>
                      </a-col>
                    </a-row>
                  </div>
                </div>
              </span>
              <span v-else-if="item.title=='验车驳回'">
                <div>
                  <a-row :gutter="16">
                    <a-col class="gutter-row" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                      <div class="gutter-box" style="margin-left: 24px;">审核备注: {{item.description}}</div>
                    </a-col>
                  </a-row>

                </div>
              </span>
            </div>
          </a-col>
          <a-col :span="4" :xl="4" :lg="4" :md="0" :sm="0" :xs="0">
            <div></div>
          </a-col>
          <a-col :span="6" :xl="6" :lg="6" :md="10" :sm="10" :xs="24">
            <div class="time">{{item.createTime}}</div>
            <div v-if="item.title=='作废'" class="invalid">
              <img src="../../weixiu_img/invalidicon.png">
            </div>
          </a-col>
          <!--<a-col :span="6" :xl="6" :lg="6" :md="10" :sm="10" :xs="24">-->

          <!--</a-col>-->
        </a-row>
        <a-row>
          <a-col :span="14" :xl="14" :lg="14" :md="14" :sm="14" :xs="24">
            <span v-if="item.title=='开始验车'">
            </span>
            <span v-else-if="item.title=='报价'">
            </span>
            <span v-else-if="item.title=='提交报价'">
            </span>
            <span v-else-if="item.title=='OA审核'">
            </span>
            <span v-else-if="item.title=='OA通过'">
            </span>
            <span v-else-if="item.title=='OA驳回'">
            </span>
            <span v-else-if="item.title=='验车驳回'">
            </span>
            <div v-else>
              <div class="note">审核备注:{{item.description}}</div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <!--<hr>-->
    <!-- 审核LOGS
    <div class="gutter-example" v-for="log in logs">
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="6" :lg="6" :md="8" :sm="24" :xs="24">
          <div class="gutter-box gutter-title">{{ log.status }}</div>
          <div class="gutter-box">{{ log.description }}</div>
        </a-col>
        <a-col class="gutter-row" :span="16" :lg="16" :md="16" :sm="12" :xs="0">
          <div class="gutter-box"></div>
          <div class="gutter-box">{{ log.status }}时间: {{ log.createTime }}</div>
        </a-col>
      </a-row>
      <hr>
    </div>-->
    <div>

        <a-row :gutter="16">
          <a-col :span="14" :xl="14" :lg="14" :md="14" :sm="14" :xs="24">
            <template v-if="flow[record.status].key === 'VALIDATE'">
              <authButton :name="'REPAIRE_CHECKCAR'">
                <a-button type="primary" @click="showModal1" style="margin-left: 24px;margin-top: 20px">
                  <a-icon type="file-done"/>开始验车</a-button>
                <span style="margin-left: 10px">请仔细查看相关信息,请确保验车无误</span>
              </authButton>
            </template>
            <a-modal
              title="开始验车"
              v-model="visible1"
              @ok="handleOk1"
              width="560px"
            >
              <div>
                <a-row :gutter="16">
                  <a-col class="gutter-row" :span="1">
                    <div class="gutter-box"><span class="focus">*</span></div>
                  </a-col>
                  <a-col class="gutter-row" :span="5" style="padding-left: 0">
                    <div class="gutter-box">验车是否通过:</div>
                  </a-col>
                  <a-col class="gutter-row" :span="18">
                    <div class="gutter-box">
                      <a-radio-group v-model="value">
                        <a-radio :value="1">通过</a-radio>
                        <a-radio :value="2">驳回</a-radio>
                        <a-radio :value="3">资料有误</a-radio>
                      </a-radio-group>
                    </div>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col class="gutter-row" :span="1">
                    <div class="gutter-box"></div>
                  </a-col>
                  <a-col class="gutter-row" :span="5" style="padding-left: 0">
                    <div class="gutter-box">验车备注:</div>
                    <div class="gutter-box"></div>
                    <div class="gutter-box"></div>
                  </a-col>
                  <a-col class="gutter-row" :span="18">
                    <div class="gutter-box"><a-textarea v-model="description" style="width: 398px;height: 120px;" defaultValue=""/></div>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col class="gutter-row" :span="1">
                    <div class="gutter-box"></div>
                  </a-col>
                  <a-col class="gutter-row" :span="5" style="padding-left: 0">
                    <div class="gutter-box"></div>
                  </a-col>
                  <a-col class="gutter-row" :span="18">
                    <div class="gutter-box" style="line-height: 20px;color:#999999">请仔细查看相关信息,请确保验车无误</div>
                  </a-col>
                </a-row>
              </div>
            </a-modal>
          </a-col>
        </a-row>


    </div>
    <div>
      <a-row :gutter="16">
        <a-col class="gutter-row">
          <div>
            <template v-if="flow[record.status].key === 'VALIDATE_REJECT'">
              <a-button type="primary" @click="showModal" style="margin-right: 10px;">
                <a-icon type="share-alt" class="icon"/>分享链接</a-button>
              <a-button @click="reloadData" style="margin-left: 10px"><a-icon type="reload"/>刷新</a-button>
            </template>
            <a-modal
              title="分享上传资料链接"
              v-model="visible"
              @ok="handleOk"
            >
              <div>
                <p class="send" style="margin: 0;font-size:15px">请将下面的链接发送给维修厂</p>
                <p class="instructions">维修厂将根据所发的链接填写相关报价信息,并且自动传回系统</p>
                <a-input placeholder="" v-model="h5Link" size="large"/>
                <a-button type="primary" style="margin-top: 20px" @click="copyLink"><a-icon type="link" />复制链接</a-button>
                <span class="time_yx" style="margin-left: 10px;margin-top: 20px">链接有效期7天</span>
              </div>
            </a-modal>
          </div>
        </a-col>
      </a-row>
    </div>

    <!-- 审核包含（审批、报价审核、OA审核） -->
    <AuditApply v-if="flow[record.status].key === 'APPLY'" :flow="flow" type="review" :repair="repair" @getData="getData"></AuditApply>
    <AuditApply v-if="flow[record.status].key === 'OFFER'" :flow="flow" type="offer" :repair="repair" @getData="getData"></AuditApply>
    <!--<AuditApply v-if="flow[record.status].key === 'OA_REVIEW'" :flow="flow" type="oa" :repair="repair" @getData="getData"></AuditApply>-->
    <AuditApply v-if="flow[record.status].key === 'OA_WRITE'" :flow="flow" type="oa" :repair="repair" @getData="getData"></AuditApply>
    <!-- OA填写（大于3000） -->
    <!--<OAWrite v-if="flow[record.status].key === 'OA_WRITE'" :flow="flow" :repair="repair" @getData="getData"></OAWrite>-->
    <!-- 驳回（审批驳回，报价驳回，OA驳回,验车驳回） -->
    <AuditReject v-if="flow[record.status].key === 'REVIEW_REJECT'" :repair="repair" @getData="getData"></AuditReject>
    <AuditReject v-if="flow[record.status].key === 'OFFER_REJECT'" type="offer_reject" :repair="repair" @getData="getData"></AuditReject>
    <AuditReject v-if="flow[record.status].key === 'OA_REJECT'" type="oa_reject" :repair="repair" @getData="getData"></AuditReject>
    <!-- 分享链接（审批通过） -->
    <AuditReviewApprove v-if="flow[record.status].key === 'REVIEW_APPROVE'" :flow="flow" :repair="repair"></AuditReviewApprove>
    <!-- 待验车（报价通过，OA通过） -->
    <AuditQuarantine v-if="flow[record.status].key === 'OFFER_APPROVE'" type="offer_approve" :flow="flow" :repair="repair" :fileList="fileList" @getData="getData"></AuditQuarantine>
    <AuditQuarantine v-if="flow[record.status].key === 'OA_APPROVE'" type="oa_approve" :flow="flow" :repair="repair" :fileList="fileList" @getData="getData"></AuditQuarantine>
    <!--维修信息-->
  </div>
</template>
<script>
  import AuditApply from './AuditApply'
  import AuditReject from './AuditReject'
  import AuditReviewApprove from './AuditReviewApprove'
  import AuditQuarantine from './AuditQuarantine'
  import OAWrite from './OAWrite'
  import { httpAction } from '@/api/manage'
  import authButton from '@views/result/authButton'

  let statusTemplate = {
    '审核通过': {status: 'success', desc: '维修审核'},
    '审核驳回': {status: 'error', desc: '维修审核'},
    '报价': {status: 'success', desc: '厂家报价'},
    '提交报价': {status: 'success', desc: '厂家报价'},
    '报价通过': {status: 'success', desc: '报价审核'},
    '报价驳回': {status: 'error', desc: '报价审核'},
    'OA审核': {status: 'success', desc: 'OA审核'},
    'OA通过': {status: 'success', desc: '通过'},
    'OA驳回': {status: 'error', desc: '驳回'},
    '开始验车': {status: 'success', desc: '维修信息'},
    '作废': {status: 'success', desc: '维修信息'},
    '验车完成': {status: 'success', desc: '验车完成'},
    '验车驳回': {status: 'error', desc: '验车驳回'},
  }
  export default {
    name: 'RepairDetail',
    components: {AuditApply, AuditReject, AuditReviewApprove, AuditQuarantine, OAWrite,authButton},
    props: {
      flow: {
        type: Object,
        default: () => {}
      },
      record: {
        type: Object,
        default: () => {}
      },
      repair: {
        type: Object,
        default: () => {
          return {
            id: 'WC00001GZ',
            userText: '张三三',
            approverId: '陈队长',
            copyerId: '王经理',
            vehicleText: '粤A-8888',
            createTime: '2019-05-29 15:06:37',
            description: '更换刹车片',
          }
        }
      }
    },
    data () {
      return {
        files: [
          'http://console.terrybg.com/img/cankaotu.bc7f0beb.png'
        ],
        visible: false,
        h5Link: '',
        visible1: false,
        value:1,
        description:'',
        statusTemplate,
        logs: [],
        spinning: true,
        offer: '',
        projects: [],
        offerFiles:[],
        // upType:[],
        data: [],
        // 下载
        Files:[],
        defaultFileList: [],
        fileList:[],
        // fileList: [{
        //   uid: '0',
        //   // name: 'xxx.png',
        //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // }],
      }
    },
    created () {
      this.loadDetail(this.record.id);
    },
    methods: {
      // 分享上传链接链接
      showModal () {
        this.visible = true;
        this.h5Link = 'http://static.terrybg.com/appwork/shangchancailiao.html?repairId=' + this.repair.id;
      },
      handleOk () {
        this.visible = false;
      },
      copyLink () {
        const input = document.createElement('input')
        document.body.appendChild(input)
        input.setAttribute('value',this.h5Link)
        input.select()
        if (document.execCommand('copy')) {
          document.execCommand('copy')
        }
        document.body.removeChild(input)
        this.$message.success('已复制！');
      },
      getData () {
        this.$emit('getData');
        this.loadDetail(this.record.id);

      },
      loadDetail (repairId) {
        var $this = this;
        $this.spinning = true;
        httpAction('/application/car/repair/detail/' + repairId, {}, 'get').then(res => {
          $this.spinning = false;
          this.repair = res.result.repair;
          this.files = res.result.repair.urls;
          this.logs = res.result.logs;
          this.offer = res.result.offer;
          this.projects = res.result.projects;
          this.Files=res.result.offerFiles;
          var that = this;
          that.data = [];
          // that.offerFiles=[]
          this.fileList=[]
          this.defaultFileList=[]
          res.result.logs.forEach(item => {
            that.data.push({
              title: item.status,
              description: item.description,
              createTime: item.createTime,
              businessId:item.businessId
            })
          })

          res.result.offerFiles.forEach(item => {

              if (item.filefm=='image/png'){
                this.fileList.push({
                  uid: item.fileurl,
                  url: item.fileurl
                })
              }
              else{
                this.defaultFileList.push({
                  uid: item.fileurl,
                  name: item.filename,
                  url: item.fileurl
                })
              }
            })
        });
      },
      openfile(url) {
        window.open(url);
      },
      close() {
        this.$emit('close');
        this.visible1 = false;
      },
      // 开始验车
      showModal1(){
        this.visible1 = true;
        this.description=''
      },
      handleOk1(){
        if(this.value==1){
          this.reviewApprove()
        }
        else if(this.value==2){
          this.reviewReject()
        }
      },
      reviewApprove () {
        var $this = this;
        console.log(this.repair.id)
        console.log(this.description)
        httpAction('/application/car/repair/validateApprove?repairId=' + this.repair.id + '&description=' + this.description, {}, 'get').then(res => {
          $this.getData()
          if(res.success){
            $this.$message.success(res.message);
          }else{
            $this.$message.error(res.message);
          }
        }).finally(()=> {
          $this.close()
        })
      },
      reviewReject () {
        var $this = this;
        httpAction('/application/car/repair/validateReject?repairId=' + this.repair.id + '&description=' + this.description,{}, 'get').then(res => {
            $this.getData()
          if(res.success){
            this.$message.success(res.message);
          }else{
            this.$message.error(res.message);
          }
        }).finally(() => {
          $this.close();
        })
      },
      // 验车驳回刷新
      reloadData(){
        // if(this.fileList!==[]||this.defaultFileList!==[]){
        //   this.fileList=[]
        //   this.defaultFileList=[]
        // }
        this.getData()
      }
    }
  }
</script>

<style lang="less" scoped>
  .gutter-box {height: 42px;background: white;line-height: 42px;color:rgba(153,153,153,1);}
  .gutter-title{font-weight: 500;color: rgba(0, 0, 0, 0.65);}

  .name{
    font-size:14px;
    color:rgba(102,102,102,1);
    line-height:30px;
  }
  .note{
    font-size:14px;
    font-family:"MicrosoftYaHei";
    font-weight:400;
    color:rgba(153,153,153,1);
  /*rgba(153,153,153,1);*/
    line-height:30px;
    margin-left: 24px;
  }
  hr{
    border:0.3px solid #dddddd;
  }
  .img_div{
    width: 60px;
    height: 60px;
    vertical-align: middle;
    display: table-cell;
    text-align: center;
    float: left;
  }
  .ant-radio-wrapper{
    color: #999;
  }
  .listing{
    text-align: center;
  }
  .focus_title{
    font-size:14px;
    font-family:"MicrosoftYaHei-Bold";
    font-weight:bold;
    color:rgba(102,102,102,1);
    line-height:30px;
  }

  /*分享上传链接*/
  hr{border:0.5px solid rgba(232, 232, 232, 1);}
  .gutter-box {height: 42px;background: white;line-height: 42px;}
  .icon{
    font-size: 16px;
  }
  .instructions{
    color:rgba(153,153,153,1);
    font-size: 10px;
    margin: 0;
  }
  .link{
    font-family:"MicrosoftYaHei";
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:40px;
    margin-top: 9px;
  }
  .focus{
    color: #F40000;
  }
  /*#E8E8E8*/
  .disable .focus_title,.disable .note,.disable .time,.disable .icon_tu{color: #CCCCCC;}
  .disable .photo_font,.disable .order_font,.disable .order{
    color: #CCCCCC;
  }
  .disable a{
    color: #CCCCCC;
  }
  /*photo_font*/
  .disable .photo{
    opacity:0.3;
  }
  .abled{

  }
  .time{
    color: #999;
    text-align: center;

  }

  .icon_tu{
    color: #52c41a;
  }
  .invalid{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>