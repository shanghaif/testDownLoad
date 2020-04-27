<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal :title="title" v-model="visible"  @ok="handleOk">



    </a-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title:"新增记录",
        visible: false,
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        console.log(e);
        this.visible = false;
      },
    },
  };
</script>