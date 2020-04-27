<template>
    <div>
      <a-row>
        <a-col span="24">
          <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].title"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].content.sign"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].content.price"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].foot.price"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].foot.priceTwo"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 20 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].foot.desc"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].foot.descTwo"/>
          </a-form-item>
        </a-col>
      </a-row>
    </div>
</template>

<script>
    export default {
        name: "ViolationSonOne",
      props: {
        config: {
          type: Array,
          default: () => []
        }
      },
      methods:{
        onChange (e) {
          this.config[0].visible = e.target.value;
        },
      }
    }
</script>

<style scoped>

</style>