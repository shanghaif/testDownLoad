<template>
    <div>

      <!--选择-->

      <!--搜索框-->
      <a-row>
        <!--<a-col span="12">-->
          <!--<a-form-item label="是否显示搜索框" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-radio-group name="radioGroup" @change="onChange1" :defaultValue="1">-->
              <!--<a-radio :value="1">是</a-radio>-->
              <!--<a-radio :value="2">否</a-radio>-->
            <!--</a-radio-group>-->
          <!--</a-form-item>-->
        <!--</a-col>-->
        <!--<a-col span="12"  v-if="config[0].ifOne != 2">-->
          <a-form-item label="搜索框样式选择" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-radio-group name="radioGroup" @change="onChange11" :defaultValue="1">
              <a-radio :value="1">样式1</a-radio>
              <a-radio :value="2">样式2</a-radio>
            </a-radio-group>
          </a-form-item>
        <!--</a-col>-->
        <!--<a-col span="24"  v-if="config[0].ifOne != 2" >-->
          <a-form-item  v-if="config[0].ifRadioOne != 1"  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].title12"/>
          </a-form-item>
        <!--</a-col>-->
        <!--<a-col span="24"  v-if="config[0].ifOne != 2">-->
          <a-form-item  v-if="config[0].ifRadioOne != 2"  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].title11"/>
          </a-form-item>
        <!--</a-col>-->
      </a-row>



      <!--&lt;!&ndash;日期 自定义&ndash;&gt;-->
      <!--<a-row>-->
        <!--<a-col span="12">-->
          <!--<a-form-item label="是否显示日期（自定义）" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-radio-group  name="radioGroup" @change="onChange2"  :defaultValue="2">-->
              <!--<a-radio :value="1">是</a-radio>-->
              <!--<a-radio :value="2">否</a-radio>-->
            <!--</a-radio-group>-->
          <!--</a-form-item>-->
        <!--</a-col>-->
        <!--<a-col span="12" v-if="config[0].ifTwo != 2" >-->
          <!--<a-form-item label="样式选择" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-radio-group name="radioGroup" @change="onChange22" :defaultValue="1">-->
              <!--<a-radio :value="1">样式1</a-radio>-->
              <!--<a-radio :value="2">样式2</a-radio>-->
            <!--</a-radio-group>-->
          <!--</a-form-item>-->

        <!--</a-col>-->
        <!--<a-col span="24"   v-if="config[0].ifTwo != 2">-->
          <!--<a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-date-picker :format="dateFormat" v-model="config[0].dateOne" />-->
          <!--</a-form-item>-->
        <!--</a-col>-->

        <!--<a-col span="24"  v-if="config[0].ifTwo != 2">-->
          <!--<a-form-item  v-if="config[0].ifRadioTwo != 1"  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-input v-model="config[0].title13"/>-->
          <!--</a-form-item>-->
        <!--</a-col>-->
        <!--<a-col span="24"  v-if="config[0].ifTwo != 2" >-->
          <!--<a-form-item  v-if="config[0].ifRadioTwo != 2"  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-input v-model="config[0].title14"/>-->
          <!--</a-form-item>-->
        <!--</a-col>-->

      <!--</a-row>-->
      <!--&lt;!&ndash;日期 区间&ndash;&gt;-->
      <!--<a-row>-->
        <!--<a-col span="12">-->
          <!--<a-form-item label="是否显示日期（区间）" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-radio-group name="radioGroup" @change="onChange3" :defaultValue="2">-->
              <!--<a-radio :value="1">是</a-radio>-->
              <!--<a-radio :value="2">否</a-radio>-->
            <!--</a-radio-group>-->
          <!--</a-form-item>-->
        <!--</a-col>-->
        <!--<a-col span="12"  v-if="config[0].ifThree != 2">-->
          <!--<a-form-item label="样式选择" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-radio-group name="radioGroup" @change="onChange33" :defaultValue="1">-->
              <!--<a-radio :value="1">样式1</a-radio>-->
              <!--<a-radio :value="2">样式2</a-radio>-->
            <!--</a-radio-group>-->
          <!--</a-form-item>-->
        <!--</a-col>-->
        <!--<a-col span="24"  v-if="config[0].ifThree != 2">-->
          <!--<a-form-item  v-if="config[0].ifRadioThree != 2"  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-input v-model="config[0].title16"/>-->
          <!--</a-form-item>-->
        <!--</a-col>-->
        <!--<a-col span="24"  v-if="config[0].ifThree != 2" >-->
          <!--<a-form-item  v-if="config[0].ifRadioThree != 1"  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-input v-model="config[0].title15"/>-->
          <!--</a-form-item>-->
        <!--</a-col>-->

      <!--</a-row>-->
      <!--&lt;!&ndash;下拉框&ndash;&gt;-->
      <!--<a-row>-->

        <!--<a-col span="12">-->
          <!--<a-form-item label="是否显示下拉框" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-radio-group  name="radioGroup" @change="onChange4"  :defaultValue="2">-->
              <!--<a-radio :value="1">是</a-radio>-->
              <!--<a-radio :value="2">否</a-radio>-->
            <!--</a-radio-group>-->
          <!--</a-form-item>-->
        <!--</a-col>-->
        <!--<a-col span="12"  v-if="config[0].ifFour != 2">-->
          <!--<a-form-item label="样式选择" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
            <!--<a-radio-group name="radioGroup" @change="onChange44" :defaultValue="1">-->
              <!--<a-radio :value="1">样式1</a-radio>-->
              <!--<a-radio :value="2">样式2</a-radio>-->
            <!--</a-radio-group>-->
          <!--</a-form-item>-->
        <!--</a-col>-->
        <!--<a-col span="24">-->
        <!--<div   v-if="config[0].ifFour != 2">-->
          <!--<a-row  v-if="config[0].ifRadioFour != 1">-->
            <!--<a-col span="24">-->
              <!--<a-form-item label="下拉框①" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
              <!--</a-form-item>-->
            <!--</a-col>-->
            <!--<a-col span="6">-->
              <!--<a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
                <!--<a-input v-model="config[0].title3"/>-->
              <!--</a-form-item>-->
            <!--</a-col>-->
            <!--<a-col span="6">-->
              <!--<a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
                <!--<a-input v-model="config[0].title4"/>-->
              <!--</a-form-item>-->
            <!--</a-col>-->
            <!--<a-col span="6">-->
              <!--<a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
                <!--<a-input v-model="config[0].title5"/>-->
              <!--</a-form-item>-->
            <!--</a-col>-->
            <!--<a-col span="6">-->
              <!--<a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
                <!--<a-input v-model="config[0].title6"/>-->
              <!--</a-form-item>-->
            <!--</a-col>-->
            <!--<a-col span="24"  v-if="config[0].ifFour != 2" >-->
              <!--<a-form-item   :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
                <!--<a-input v-model="config[0].title17"/>-->
              <!--</a-form-item>-->
            <!--</a-col>-->
          <!--</a-row>-->
          <!--<a-row  v-if="config[0].ifRadioFour != 2">-->
            <!--<a-col span="24">-->
              <!--<a-form-item label="下拉框②" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
              <!--</a-form-item>-->
            <!--</a-col>-->
            <!--<a-col span="8">-->
              <!--<a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
                <!--<a-input v-model="config[0].title7"/>-->
              <!--</a-form-item>-->
            <!--</a-col>-->
            <!--<a-col span="8">-->
              <!--<a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
                <!--<a-input v-model="config[0].title8"/>-->
              <!--</a-form-item>-->
            <!--</a-col>-->
            <!--<a-col span="8">-->
              <!--<a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
                <!--<a-input v-model="config[0].title9"/>-->
              <!--</a-form-item>-->
            <!--</a-col>-->
            <!--<a-col span="24"  v-if="config[0].ifFour != 2" >-->
              <!--<a-form-item    :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">-->
                <!--<a-input v-model="config[0].title18"/>-->
              <!--</a-form-item>-->
            <!--</a-col>-->

          <!--</a-row>-->
        <!--</div>-->
        <!--</a-col>-->
      <!--</a-row>-->
    </div>
</template>

<script>
  export default {
    name: 'ButtonOneData',
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods:{
      onChange1 (e) {
        this.config[0].ifOne = e.target.value;
      },
      onChange2 (e) {
        this.config[0].ifTwo = e.target.value;
      },
      onChange3 (e) {
        this.config[0].ifThree = e.target.value;
      },
      onChange4 (e) {
        this.config[0].ifFour = e.target.value;
      },

      onChange11 (e) {
        this.config[0].ifRadioOne = e.target.value;
      },
      onChange22 (e) {
        this.config[0].ifRadioTwo = e.target.value;
      },
      onChange33 (e) {
        this.config[0].ifRadioThree = e.target.value;
      },
      onChange44 (e) {
        this.config[0].ifRadioFour = e.target.value;
      },
    }
  }
</script>

<style scoped>

</style>