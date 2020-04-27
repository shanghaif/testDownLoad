<template>
  <a-form-item v-bind="item">
    <a-radio-group defaultValue="1" v-bind="attr" style="margin:0px 5px;float:right"  @change="handleSizeChange">
      <a-radio-button value="1">日</a-radio-button>
      <a-radio-button value="2">月</a-radio-button>
    </a-radio-group>
  </a-form-item>
</template>

<script>
  export default {
    name: 'LifeDayMonth',
    created(){
      if(this.config[0].select == undefined){
        this.config[0].select = 'right';
      }
    },
  props: {
    attr: {
      type: Object
    },
    item: {
      type: Object
    },
    bind: {
      type: Object
    },
    options: {
      type: Array
    }
  },
      data() {
        return {
          size: 'large',
        };
      },
      methods: {
        handleSizeChange(e) {
          this.size = e.target.value;
        },
      },
  }
</script>

<style scoped>

</style>