<template>
  <div style="border: 1px solid rgb(232, 232, 232);border-top:0px;    padding: 10px;">
    <a-spin :spinning="spinning">
      <a-collapse v-bind:activeKey="['1','2','3']" :bordered="false">
        <a-collapse-panel key="1" style=" border-bottom: 10px solid #F2F2F2;">
          <div slot="header">
            <span class="title">用户信息</span>
            <a-button type="default" class="btn_font" @click="edit">
              <a-icon type="form"/>
              编辑
            </a-button>
          </div>
          <div class="gutter-example font">
            <a-row :gutter="16">
              <a-col class="gutter-row first" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                <div class="gutter-box">
                  姓名：{{this.infoperson.nickName}}
                </div>
                <div class="gutter-box">
                  登录账号：{{this.infoperson.loginName}}
                </div>
                <div class="gutter-box">
                  联系方式：{{this.infoperson.phone}}
                </div>
                <div class="gutter-box">
                  住址：{{this.infoperson.address}}
                </div>
                <div class="gutter-box">
                  简介：{{this.infoperson.instructions}}
                </div>
              </a-col>
              <a-col class="gutter-row first" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                <div class="gutter-box">
                  性别：{{this.infoperson.gender}}
                </div>
                <div class="gutter-box">
                  登录密码： *******
                </div>
                <div class="gutter-box">
                  生日：{{this.infoperson.birthday}}
                </div>
              </a-col>
              <a-col class="gutter-row first" :span="6" :lg="6" :md="24" :sm="24" :xs="24">
                <div class="gutter-box">
                  <a-upload
                    action="../fileUpload"
                    @change="handleChange"
                    accept=".jpg, .jpeg, .png"
                    :showUploadList="false"
                  >
                    <img v-if="infoperson.headImage" :src="this.infoperson.headImage" style="width:79px;height:78px;border-radius:50%;cursor:pointer;"/>
                    <img v-else src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" style="width:79px;height:78px;border-radius:50%;cursor:pointer;"/>
                  </a-upload>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-collapse-panel>
        <a-collapse-panel key="2" style=" border-bottom: 10px solid #F2F2F2;">
          <div slot="header">
            <span class="title">职务资料</span>
            <a-button type="default" class="btn_font" @click="() => { $message.warning('无权限访问！')}">
              <a-icon type="form"/>
              编辑
            </a-button>
          </div>
          <div class="gutter-example font">
            <a-row :gutter="16">
              <a-col class="gutter-row first" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                <div class="gutter-box">
                  公司：{{this.infoperson.organName}}
                </div>
                <div class="gutter-box">
                  职位： {{this.infoperson.positionText}}
                </div>
                <div class="gutter-box">
                  职位说明：{{this.infoperson.introduction}}
                </div>
              </a-col>
              <a-col class="gutter-row first" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                <div class="gutter-box">
                  部门：{{this.infoperson.departmentText}}
                </div>
                <div class="gutter-box">
                  入职时间：{{this.infoperson.entryTime}}
                </div>
              </a-col>

            </a-row>
          </div>
        </a-collapse-panel>
        <a-collapse-panel key="3" style=" border-bottom: 10px solid #F2F2F2;">
          <div slot="header">
            <span class="title">证件信息</span>
            <a-button type="default" class="btn_font" @click="() => { $message.warning('无权限访问！')}">
              <a-icon type="form"/>
              编辑
            </a-button>
          </div>
          <div class="gutter-example font">
            <a-row :gutter="16">
              <a-col class="gutter-row first" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                <div class="gutter-box">
                  身份证：{{this.infoperson.idcard}}
                </div>
              </a-col>
              <a-col class="gutter-row first" :span="6" :lg="6" :md="12" :sm="12" :xs="24">
                <div class="gutter-box">
                  驾驶证：{{this.infoperson.drivingLicence}}
                </div>
              </a-col>
            </a-row>
          </div>
        </a-collapse-panel>
      </a-collapse>
      <Edit ref="Edit" @getData="reloadData"></Edit>
    </a-spin>
  </div>
</template>
<script>
  import ARow from 'ant-design-vue/es/grid/Row'
  import { httpAction, putAction } from '@/api/manage'
  import Edit from './Edit'

  export default {
    name: 'Info',
    components: { ARow,Edit },
    props: {
      id: {
        type: String
      }
    },
    data() {
      return {
        infoperson: {}
      }
    },
    created() {
      this.reloadData();
    },
    methods: {
      reloadData () {
        // 获取账户详情
        this.spinning = true
        var id = this.id;
        if (!id) {
          let userInfo = this.$store.getters.userInfo;
          id = userInfo.id;
        }
        httpAction('/application/auth/user/getDetail?userId=' + id, {}, 'get').then(res => {
          if (res.success) {
            this.infoperson = res.result.result
            this.spinning = false
          }
          else {
            this.$message.warning(res.message)
          }
        })
      },
      edit () {
        if (!this.id) {
          let userInfo = this.$store.getters.userInfo;
          this.$refs.Edit.edit(userInfo)
        } else {
          this.$message.warning('无权限访问！')
        }
      },
      handleChange(info) {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-2);
        var $this = this;
        fileList.map((file) => {
          if (file.response) {
            var headImage = file.response;
            $this.infoperson.headImage = headImage;
            let userInfo = $this.$store.getters.userInfo;

            putAction('/application/auth/user/update', {id: userInfo.id, headImage: headImage}).then(res => {
              if (res.success) {
                $this.$message.success(res.message)
                $this.$emit('getData', true)
                $this.close()
              } else {
                $this.$message.warning(res.message)
              }
            })
          }
          return null;
        });
      },
    }
  }
</script>
<style lang="less" scoped>
  .title {
    font-size: 14px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 40px;
  }
  .font {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 36px;
  }
  .btn_font {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #666666;
    margin-right: 31px;
    float: right;
  }
  .first {
    margin-left: 40px;
  }
  .ant-tabs-bar {
    margin: 0;
  }
</style>