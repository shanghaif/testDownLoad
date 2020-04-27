<template>
  <div>
    <!--栅格-->
    <template>
      <div class="gutter-example">
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="10">
            <div class="gutter-box"> <!--              button按钮-->
              <template>
                <div class="btn">
                  <a-button type="primary" class="anniu" @click="showModal" style="margin-bottom: 20px">新增</a-button>
                  <a-modal
                    title="新增"
                    v-model="visible"
                    @ok="handleOk"
                    width="800px"
                    cancelText="关闭"
                    okText="提交"
                  >
                    <!--                      表单start-->
                    <a-form-item id="components-form-demo-advanced-search">
                      <a-form
                        class="ant-advanced-search-form"
                        :form="form"
                        @submit="handleSearch"
                      >
                        <a-row :gutter="24">
                          <a-col
                            v-for="i in 5" :span="12">
                            <a-form-item v-if="i===1" :label="`司机:`" :label-col="{ span: 8 }"
                                         :wrapper-col="{ span: 12 }">
                              <a-input
                                placeholder="请输入姓名"
                              />
                            </a-form-item>
                            <a-form-item v-if="i===2" :label="`车牌号码:`" :label-col="{ span: 8 }"
                                         :wrapper-col="{ span: 12 }">
                              <a-input
                                placeholder="请输入车牌号码"
                              />
                            </a-form-item>
                            <a-form-item v-if="i===3" :label="`审批人:`" :label-col="{ span: 8 }"
                                         :wrapper-col="{ span: 12 }">
                              <a-select
                                showSearch
                                placeholder="请选择审批人"
                                optionFilterProp="children"
                                style="width: 170px"
                                @focus="handleFocus"
                                @blur="handleBlur"
                                @change="handleChange"
                                :filterOption="filterOption"
                              >
                                <a-select-option value="王大力">王大力</a-select-option>
                                <a-select-option value="王大力">王大力</a-select-option>
                                <a-select-option value="王俊凯">王俊凯</a-select-option>
                              </a-select>
                            </a-form-item>
                            <a-form-item v-if="i===4" :label="`抄送人:`" :label-col="{ span: 8 }"
                                         :wrapper-col="{ span: 12 }">
                              <a-select
                                showSearch
                                placeholder="请选择抄送人"
                                optionFilterProp="children"
                                style="width: 170px"
                                @focus="handleFocus"
                                @blur="handleBlur"
                                @change="handleChange"
                                :filterOption="filterOption"
                              >
                                <a-select-option value="王大力">王大力</a-select-option>
                                <a-select-option value="王大力">王大力</a-select-option>
                                <a-select-option value="王俊凯">王俊凯</a-select-option>
                              </a-select>
                            </a-form-item>
                            <a-form-item v-if="i===5" :label="`故障说明:`" :span="24" :label-col="{ span: 8 }"
                                         :wrapper-col="{ span: 12 }">
                              <a-select
                                showSearch
                                placeholder="请输入故障说明"
                                optionFilterProp="children"
                                style="width: 170px"
                                @focus="handleFocus"
                                @blur="handleBlur"
                                @change="handleChange"
                                :filterOption="filterOption"
                              >
                                <a-select-option value="刹车片破损">刹车片破损</a-select-option>
                                <a-select-option value="刹车片破损">刹车片破损</a-select-option>
                                <a-select-option value="刹车片破损">刹车片破损</a-select-option>
                              </a-select>
                            </a-form-item>
                          </a-col>
                          <a-col :span="24">
                            <div><span style="margin-left: 40px">图片</span><a-button type="primary" style="margin-left:20px; background:rgba(28,192,159,1);border-radius:2px;height: 20px;">上传</a-button></div>
                          </a-col>
                        </a-row>
                        <a-row>
                          <a-col
                            :span="24"
                            :style="{ textAlign: 'right' }"
                          >
                          </a-col>
                        </a-row>
                      </a-form>
                    </a-form-item>
                    <!--                      end-->
                  </a-modal>
                </div>
              </template>
            </div>
          </a-col>
        </a-row>
      </div>
    </template>
    <div></div>
  </div>
</template>
<script>
  export default {
    name: "xinzeng",
    data(){
      return{
        visible:false,
        // 表单
        expand: false,
        form: this.$form.createForm(this),

      }
    },
    computed: {
      count () {
        return this.expand ? 11 : 7;
      },
    },
    methods:{
      // select选择器
      handleChange (value) {
        console.log(`selected ${value}`);
      },
      handleBlur() {
        console.log('blur');
      },
      handleFocus() {
        console.log('focus');
      },
      filterOption(input, option) {
        return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      },

      // 确认modal对话框
      showModal() {
          this.visible = true
        },
      handleOk(e) {
        console.log(e);
        this.visible = false
        // this.data.push( {gdnum: 'WC00001GZ', carnum: '粤A-8888', btime: '2019-04-26 15:30:00',state: '审核中'})

      },
      // 表单
      handleSearch  (e) {
        e.preventDefault();
        this.form.validateFields((error, values) => {
          console.log('error', error);
          console.log('Received values of form: ', values);
        });
      },

      handleReset () {
        this.form.resetFields();
      },

      toggle  () {
        this.expand = !this.expand;
      },
    },
    changevalue(value) {
      this.current=value;
      this.$emit('childByValue', this.current)
      console.log(this.current)
      console.log("1111111111")
    },


  }
</script>

<style scoped>
  /*新增表单modal*/
  .ant-advanced-search-form {
    padding: 23px;
    /*background: #fbfbfb;*/
    border: 1px solid #d9d9d9;
    border-radius: 6px;
  }

  hr{
    border:0.5px solid rgba(232, 232, 232, 1);
  }
</style>