<template>
  <a-modal
    :title="title"
    v-model="visible"
    cancelText="关闭"
    width="60%"
    @ok="save"
  >
    <monaco-editor
      class="editor"
      v-model="content"
      theme="vs-dark"
      style="width: 100%;height: 500px"
      language="javascript">
    </monaco-editor>
    <!--<mavon-editor ref="md" style="min-height: 600px" v-model="content"  />-->
  </a-modal>
</template>

<script>
  import MonacoEditor from 'vue-monaco'
  export default {
    name: 'EditorModal',
    components:{
      MonacoEditor
    },
    data() {
      return {
        title : '报表数据',
        visible : false,
        content : ``,
      }
    },
    methods:{
      open(content){
        this.visible = true;
        this.content = content;
      },
      save(){
        try {
          let data = JSON.parse(this.content);
          this.$emit("save",data);
          this.visible = false;
          this.$message.success("操作成功");
        }catch (e) {
          this.$message.warning(e.message);
        }
      }
    }
  }
</script>

<style scoped>

</style>