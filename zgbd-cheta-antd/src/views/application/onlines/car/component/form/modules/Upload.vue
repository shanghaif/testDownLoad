<template>
  <a-form-item v-bind="item">
    <a-upload
      action="../fileUpload"
      @change="handleChange"
      accept=".jpg, .jpeg, .png"
      :showUploadList="false"
      v-decorator="[
      bind.fieldName, bind.rules,
      {
      valuePropName: 'fileList',
      getValueFromEvent: normFile,
      }]"
    >
      <a-avatar v-bind="attr"  :size="64" :src="image"></a-avatar>
    </a-upload>
  </a-form-item>
</template>

<script>
  export default {
    name: 'upload',
    props: {
      item: {
        type: Object
      },
      attr: {
        type: Object
      },
      bind: {
        type: Object
      }
    },
    data () {
      return {
        image: null
      }
    },
    methods: {
      handleChange(info) {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-2);
        var $this = this;
        fileList.map((file) => {
          if (file.response) {
            $this.image = file.response;
          }
          return null;
        });
      },
    }
  }
</script>

<style scoped>

</style>