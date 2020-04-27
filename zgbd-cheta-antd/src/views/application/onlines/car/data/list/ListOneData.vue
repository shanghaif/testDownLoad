<template>
  <a-row>
  <a-tabs defaultActiveKey="1" @change="callback">
    <a-tab-pane tab="第一列" key="1">
      <a-col span="20">
        <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
      <a-form-item label="属性" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].title1"/>
      </a-form-item>
    </a-col>
      <a-col span="12">
        <a-form-item label="值" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].registrationNO"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title2"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].brandType"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title3"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].carType"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title4"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].chassisNumber"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title5"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].engineNumber"/>
        </a-form-item>
      </a-col>


    </a-tab-pane>
    <a-tab-pane tab="第二列" key="2" forceRender>
      <a-col span="12">
        <a-form-item label="属性" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title6"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item label="值" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].buyVehiclePrice"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title7"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].buyVehicleRevenue"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title8"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].supplier"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title9"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].buyDate"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title10"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].vehicleOwnerShip"/>
        </a-form-item>
      </a-col>

    </a-tab-pane>
    <a-tab-pane tab="第三列" key="3">
      <a-col span="12">
      <a-form-item label="属性" :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
        <a-input v-model="config[0].title11"/>
      </a-form-item>
    </a-col>
      <a-col span="12">
        <a-form-item label="值" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].state"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title12"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].projectOwner"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title13"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].insurance"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title14"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].details"/>
        </a-form-item>
      </a-col>

      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title15"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].mainDriver"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].mainte1"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].detailed1"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title16"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].colDriver"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].mainte2"/>
        </a-form-item>
      </a-col>
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].detailed2"/>
        </a-form-item>
      </a-col>
    </a-tab-pane>
    <a-tab-pane tab="第四列" key="4">
      <a-col span="12">
        <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
          <a-input v-model="config[0].title17"/>
        </a-form-item>
      </a-col>
    </a-tab-pane>
  </a-tabs>


  </a-row>
</template>

<script>
  export default {
    name: 'CardTwoData',
    data(){
      return{

      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    methods:{
    callback (key) {
      console.log(key)
    },
  },
  }
</script>

<style scoped>

</style>