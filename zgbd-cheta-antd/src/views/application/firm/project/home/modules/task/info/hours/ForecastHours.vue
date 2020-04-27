<template>
  <a-modal
    title="设置预估工时"
    width="500px"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="取消"
    class="cheta-project-hours"
  >
    <a-form :form="form">
      <a-row :gutter="24">
        <a-col :span="24" :xs="24" :sm="24" :md="24" :xl="24">
          <a-form-item
            label="预估工时:"
            v-bind="formItemLayout"

          >
            <a-input-number :min="1" :max="100" v-model="detailObject.hours" style="width: 100%"/>
          </a-form-item>
        </a-col>

      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
  import {taskEdit} from '@/views/application/firm/project/api/api'
  export default {
    name: 'ForecastHours',
    components: {  },
    data() {
      return {
        visible: false,
        form: this.$form.createForm(this),
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },

          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
          },
        },
      }
    },
    props: {
      detailObject: {
        type: Object
      }
    },
    methods: {
      handleOk () {
        // debugger
        var $this = this
        var param = {
          id: this.detailObject.id,
          hours: this.detailObject.hours
        }
        taskEdit(param).then(res => {
          if (res.success) {
            $this.$message.success(res.message);
            $this.visible = false
            $this.$emit('getDetail',this.detailObject)
          } else {
            $this.$message.warning(res.message);
          }

        })
      },
      handleCancel () {
        this.visible = false
      },
      showModelHours () {
        this.visible = true
      },
    }
  }
</script>

<style scoped>

</style>