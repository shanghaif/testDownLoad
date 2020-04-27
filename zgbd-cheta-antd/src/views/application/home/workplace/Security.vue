<template>
  <a-modal v-model="visible" @ok="handleOk" :closable="false">
    <Info icon="info-circle" description="您使用的是系统默认密码，请修改密码！" title="温馨提示: ">
    </Info>
    <a-form class="cheta-form" :form="form">
      <a-form-item v-bind="{label: ''}" class="cheta-font-align">
        <a-tooltip title="修改头像">
          <a-avatar icon="user" :size="84" :src="headImage"></a-avatar>
        </a-tooltip>
        <br>
        <a-upload
          action="../fileUpload"
          @change="handleChange"
          accept=".jpg, .jpeg, .png"
          :showUploadList="false"
        >
          <a-button class="cheta-mt-10">更换头像</a-button>
        </a-upload>
      </a-form-item>
      <a-form-item v-bind="{label: '输入密码：'}">
        <a-input placeholder="请输入密码：" :type="!password[0].eye ? 'password' : ''" @change="changePassword"  v-decorator="['password',{ rules: [{ validator: firstPassword }] }]">
          <a-icon slot="prefix" type="lock" />
          <a-icon slot="suffix" :type="password[0].eye ? 'eye' : 'eye-invisible'" @click="password[0].eye = !password[0].eye"/>
        </a-input>
      </a-form-item>
      <a-form-item v-bind="{label: '再次输入密码：'}" v-show="nextPassword">
        <a-input placeholder="请输入密码：" :type="!password[1].eye ? 'password' : ''" v-decorator="['secondPassword',{ rules: [{ validator: secondPassword }] }]">
          <a-icon slot="prefix" type="lock" />
          <a-icon slot="suffix" :type="password[1].eye ? 'eye' : 'eye-invisible'" @click="password[1].eye = !password[1].eye"/>
        </a-input>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  import { putAction } from '@/api/manage'
  import Info from '@/views/result/Info'
  import { mapActions } from "vuex"

  export default {
    name: 'Security',
    components: { Info },
    data() {
      return {
        visible: false,
        password: [
          {res: '', eye: false},
          {res: '', eye: false}
        ],
        form: this.$form.createForm(this),
        nextPassword: false,
        headImage: ''
      };
    },
    created () {
      this.headImage = this.$store.getters.userInfo.headImage || 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
      // 第一次登录 显示
      let userInfo = this.$store.getters.userInfo
      if (!userInfo.loginTime) {
        this.visible = true
        userInfo.loginTime = new Date().getTime()
        this.SetInfo(userInfo);
      }
    },
    methods: {
      ...mapActions([ "SetInfo" ]),
      userInfo () {
        return this.$store.getters.userInfo;
      },
      changePassword (v) {
        var value = v.target.value
        if (value && value.length >= 6) {
          this.nextPassword = true;
        } else {
          this.nextPassword = false;
        }
      },
      firstPassword (rule, value, callback) {
        const form = this.form;
        if (value && value.length >= 6) {
          form.validateFields(['password'], { force: true });
          callback();
        } else {
          callback('密码长度不低于6位数！');
        }
      },
      secondPassword (rule, value, callback) {
        const form = this.form;
        if (value !== form.getFieldValue('password')) {
          callback('密码不一致!');
        } else {
          callback();
        }
      },
      handleChange(info) {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-2);
        var $this = this;
        fileList.map((file) => {
          if (file.response) {
            var headImage = file.response;
            $this.headImage = headImage;
          }
          return null;
        });
      },
      handleOk () {
        this.form.validateFields((err, values) => {
          if (!err) {
            var param = {
              id: this.userInfo().id,
              headImage: this.headImage,
              password: values.password
            }
            this.visible = false
            var $this = this;
            putAction('/application/auth/user/update', param).then(res => {
              if (res.success) {
                let userInfo = Object.assign($this.$store.getters.userInfo, param)
                $this.SetInfo(userInfo);
                $this.$message.success(res.message)
              } else {
                $this.$message.warning(res.message)
              }
            })
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>