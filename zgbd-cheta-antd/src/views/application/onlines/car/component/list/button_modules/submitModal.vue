<template>
  <div>
    <a-modal
      :title="modalDetail.title"
      v-model="visibleButton"
      @ok="actionButton"
      width="800px"
      :okText="modalDetail.okText"
      :cancelText="modalDetail.cancelText"
    >
      <a-form class="cheta-form" :form="form" :layout="formLayout" @submit="actionButton">
        <a-row :gutter="0">
          <a-col :span="btnTemp.data[1].space" v-for="(btnTemp,btnIndex) in buttonTemp">
            <div class="element-list">
              <div v-if="config[0].isButtonDelete" class="element-list-del" @click="removeButton(btnIndex)"style="position: relative">
                <a-icon type="delete" style="font-size: 22px;position: absolute;z-index: 10;top:10px; right: 20px;"/>
              </div>
              <component v-if="btnTemp" :is="btnTemp.name" :config="btnTemp.data"></component>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
    import carMixin from '@/views/application/onlines/car/config/mixin.js'
    import {httpAction} from "@/api/manage";
    export default {
        name: "submitModal",
        components: Object.assign(
            carMixin.components,
        ),
        props: {
            config: {
                type: Array,
                default: () => []
            },
        },
        data() {
            return {
                formLayout: 'horizontal',
                form: this.$form.createForm(this, { name: 'coordinated' }),
                //当前点击的按钮
                btnCilckIndex: 0,
                fieldVisible: false,
                visibleButton: false,
                buttonTemp: [],
                modalDetail : {},
                modal : [],
              model:{}
            }
        },
        methods: {
            showButton(modal, modalDetail, index){
                if(modal.length == 0){
                    console.log("内部空组件！");
                    return;
                }
                var $that = this;
                $that.visibleButton = true;
                $that.form.resetFields();
                $that.btnCilckIndex = index;
                $that.modalDetail = modalDetail;
                $that.modal = modal;
                $that.buttonTemp = [];
                modal.forEach(item => {
                    var data = item.data;
                    $that.buttonTemp.push({
                        name: item.name,
                        data: data
                    })
                })
                if ($that.config[0] && $that.config[0].isButtonDelete || false) {
                    $that.fieldVisible = true;
                }
            },
            //表单提交
            actionButton() {
                var that = this;
                var url = that.modal[0].url;
                var type = that.modal[0].type;
                if (url == undefined || url == "") {
                    console.log("请绑定请求路径！")
                    return;
                }
                if (type == undefined || type == "") {
                    console.log("缺少请求类型！")
                    return;
                }
                //自定义车牌号绑定值
                var car = that.modal[0].data[0].components.find(item => item.name === 'c-carNumber');
                if(car){
                  let dt = {};
                  dt[car.data.bind.fieldName] = car.data.bind.value;
                  this.form.setFieldsValue(dt);
                }

                that.form.validateFields((err, values) => {
                    if (!err) {
                        that.submitForm(url,type,values);
                    }
                });
            },
            submitForm(url, method, datas){
                var $this = this;
                httpAction(url, datas, method).then(res => {
                    if (res.success) {
                        $this.$message.success(res.message);
                        $this.visibleButton = false
                        $this.$emit('submitSuccess',datas);
                    }else {
                        $this.$message.warning("操作异常");
                    }
                })
            },
            removeButton(index) {
                this.buttonTemp.splice(index, 1);
                this.config[0].buttons[this.btnCilckIndex].modal.splice(index, 1);
            },
        }
    }
</script>

<style scoped>

</style>