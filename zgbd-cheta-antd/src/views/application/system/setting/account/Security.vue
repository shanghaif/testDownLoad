<template xmlns="http://www.w3.org/1999/html">
  <a-row>
    <a-spin :spinning="spinning">
      <a-col span="18">
        <a-list
          itemLayout="horizontal"
          :dataSource="data"
        >
          <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
            <a-list-item-meta>
              <span slot="title">
                <a-icon :type="item.icon"/>
                <span class="title_font">{{ item.title }}</span>
              </span>
              <span slot="description">
                <span v-if="item.title=='紧急联系人'" style="padding-left: 16px;">
                  <span class="name">姓名：<span>{{item.person.name}}</span></span>
                  <span class="relation">关系：<span>{{item.person.solution}}</span></span>
                  <span class="phone">电话：<span>{{item.person.phone}}</span></span>
                </span>
                <span v-else-if="item.title=='安全设备'" slot="description">
                  <p style="margin: 0;padding-left: 16px;line-height: 30px;">
                    <span>常用IP：{{item.equipment.ip}}</span><br>
                    <span>常用手机：{{item.equipment.commonphone}}</span><br>
                    <span>绑定设备：已绑定</span>
                  </p>
                </span>
                <span v-else style="padding-left: 16px;">
                  <span class="security-list-description">{{ item.description }}</span>
                  <span v-if="item.value"> :
                    <span class="security-list-value" v-html="item.value"></span>
                  </span>
                </span>
              </span>
            </a-list-item-meta>
            <p style="width: 60px;text-align: center;margin: 0">
              <a slot="actions" v-if="item.actions" @click="() => { $message.warning('无权限访问！')}">{{ item.actions.title }}</a>
              <span slot="actions" v-else><a-icon type="check" style="color:#1CC09F"/></span>
            </p>
          </a-list-item>
        </a-list>
      </a-col>
    </a-spin>
  </a-row>
</template>
<script>
  import { httpAction } from '@/api/manage'
  export default {
    data() {
      return {
        data: []
      }
    },
    props: {
      id: {
        type: String
      }
    },
    created() {
      this.spinning = true
      httpAction('/application/auth/user/getDetail?userId=' + this.id, {}, 'get').then(res => {
        if (res.success) {
          let data = res.result.result
          this.data = [
            { title: '账户密码', description: '当前密码强度', icon: 'lock', actions: { title: '提醒修改' } },
            { title: '密保手机', description: '未绑定手机', icon: 'mobile', actions: { title: '提醒修改' } },
            { title: '密保邮箱', description: '未绑定邮箱', icon: 'mail', actions: { title: '提醒绑定' } },
            {
              title: '密保问题',
              description: '未设置，当您忘记密码时，设置的密保问题可以方便帮您找回或修改密码',
              icon: 'question-circle',
              actions: { title: '提醒绑定' }
            },
            { title: '支付安全', description: '未添加支付密码，为确保支付安全，请添加', icon: 'safety', actions: { title: '提醒绑定' } },
            {
              title: '紧急联系人',
              icon: 'contacts',
              value: '',
              person: { name: '肖倩云', solution: '夫妻', phone: '15037187026' },
              actions: { title: '提醒添加' }
            },
            {
              title: '安全设备',
              icon: 'desktop',
              value: '',
              equipment: { ip: '192.168.0.123', commonphone: '华为P30' },
              actions: { title: '' }
            }
          ]

          // 密码强度
          if (data.pwdStrength === '1') {
            this.data[0].value = '<span style="color: red;">弱</span>'
          } else if (data.pwdStrength === '2') {
            this.data[0].value = '<span style="color: yellow;">中</span>'
          } else if (data.pwdStrength === '3') {
            this.data[0].value = '<span style="color: green;">高</span>'
            this.data[0].actions = undefined
          }

          // 密保手机
          if (data.phone) {
            this.data[1].value = data.phone
            this.data[1].description = '已绑定手机'
            this.data[1].actions = undefined
          }

          // 密保邮箱
          if (data.email) {
            this.data[2].value = data.email
            this.data[2].description = '已绑定邮箱'
            this.data[2].actions = undefined
          }

          // 密保问题
          if (data.encrypteds) {
            this.data[3].description = '已设置了' + data.encrypteds.length + '个密保问题，请牢记！'
            this.data[3].actions = undefined
          }

          // 支付安全
          if (data.payPassword) {
            this.data[4].description = '您的支付环境很安全，请放心使用！'
            this.data[4].actions = undefined
          }

          // 紧急联系人
          this.data[5].actions = undefined
          this.spinning = false

        } else {
          this.$message.warning(res.message)
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  .relation, .phone {
    margin-left: 39px;
  }

  .title_font {
    font-size: 14px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-left: 5px;
  }
</style>