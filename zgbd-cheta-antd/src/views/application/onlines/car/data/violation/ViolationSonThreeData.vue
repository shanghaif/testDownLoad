<template>
    <div>
      <a-row>
        <a-col span="24">
          <a-form-item :label-col="{ span: 21 }" :wrapper-col="{ span: 21 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].one"/>
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].two"/>
          </a-form-item>
        </a-col>
        <a-col span="24">
          <a-form-item  :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }" style="margin-bottom: 10px">
            <a-input v-model="config[0].percent"/>
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
      }
    }
</script>

<style scoped>

</style>