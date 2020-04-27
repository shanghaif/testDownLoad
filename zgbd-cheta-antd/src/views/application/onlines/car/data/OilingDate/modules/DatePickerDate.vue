<template>
<a-row>
  <div v-if="config[0].button != 6">
    <a-col span="24">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].text"/>
      </a-form-item>
    </a-col>
  </div>
  <div v-else>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].texta"/>
      </a-form-item>
    </a-col>
    <a-col span="12">
      <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].textb"/>
      </a-form-item>
    </a-col>
  </div>


      <a-col span="24">
        <a-form-item label="是否显示日期" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-radio-group name="radioGroup" @change="onChange11" :defaultValue="1">
            <a-radio :value="1">是</a-radio>
            <a-radio :value="2">否</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-col>
      <a-col span="24">
        <a-form-item label="是否显示按钮" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-radio-group name="radioGroup" @change="onChange111" :defaultValue="1">
            <a-radio :value="1">是</a-radio>
            <a-radio :value="2">否</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-col>

      <a-col span="24">
        <a-form-item label="按钮样式选择" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-radio-group name="radioGroup" @change="onChange1" :defaultValue="1">
            <a-radio :value="1">样式1</a-radio>
            <a-radio :value="2">样式2</a-radio>
            <a-radio :value="3">样式3</a-radio>
            <br />
            <a-radio :value="4">样式4</a-radio>
            <a-radio :value="5">样式5</a-radio>
            <a-radio :value="6">样式6</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-col>

      <a-col span="24">
        <a-form-item label="日期样式选择" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-radio-group name="radioGroup" @change="onChange" :defaultValue="1">
            <a-radio :value="1">日期选择</a-radio>
            <a-radio :value="2">月份选择</a-radio>
            <a-radio :value="3">区间选择</a-radio>
            <a-radio :value="4">周选择</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-col>
</a-row>
</template>


<script>
  export default {
    name: 'DatePickerDate',
      props: {
        config: {
          type: Array,
          default: () => []
        },
      },
      data() {
        return {

        };
      },
      methods: {
        onChange (e) {
          this.config[0].select = e.target.value;
        },
        onChange1 (e) {
          this.config[0].button = e.target.value;
        },
        onChange11 (e) {
          this.config[0].DateOne = e.target.value;
        },
        onChange111 (e) {
          this.config[0].DateTwo = e.target.value;
        },
        // onChange(e) {
        //   console.log('radio checked', e.target.value);
        // },
      },
    }
</script>

<style scoped>

</style>