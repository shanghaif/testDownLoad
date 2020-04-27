<template>
  <div>
    <a-icon type="plus" class="cheta-mb-10" @click="showComponent"/>
    <a-row :gutter="0">
      <Draggable v-model="config[0].list">
        <a-col v-for="(items,index) in config[0].element || config[0].list" :span="items[items.length-1].space">
          <div class="element-list-del" @click="removeElement(index)" style="position: relative">
            <a-icon type="delete" style="font-size: 22px;position: absolute;z-index: 10;top:10px; right: 20px;"/>
          </div>
          <a-card style="text-align: center;">
            <a-input-number :min="1" :max="24" v-model="items[items.length-1].space"/>
          </a-card>
        </a-col>
      </Draggable>
    </a-row>

    <component-modal ref="componentmodal" @closeDrawer="closeDrawer" :config="config"></component-modal>
  </div>
</template>
<script>

  import Draggable from 'vuedraggable';
  import ComponentModal from "./button_modules/ComponentModal";
  export default {
    name: 'BlankDate',
    components:{
      ComponentModal,Draggable
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    methods:{
      removeElement(index){
        this.config[0].list.splice(index,1);
      }
      ,
      showComponent(){
        this.$refs.componentmodal.showModal(0,3);
      }
    }
  }
</script>

<style scoped>
  .element-list .element-list-del {
    display: none;
    cursor: pointer;
  }

  .element-list:hover .element-list-del, .element-list-check {
    display: block;
  }
</style>