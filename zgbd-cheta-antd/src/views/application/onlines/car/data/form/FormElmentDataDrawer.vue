<template>
  <a-drawer
    title="按住组件拖拽可进行切换位置"
    width=400
    :closable="false"
    @close="visible = false"
    :visible="visible"
  >
      <a-row gutter="2">
        <Draggable v-model="config[0].components">
          <a-col v-for="item in config[0].components" :span="12">
            <a-card style="text-align: center;">
              <a-input style="width: 100px"  v-model="item.data.item.label"/>
              <a-input-number style="width: 100px"  :min="1" :max="24" v-model="item.space"/>
            </a-card>
          </a-col>
        </Draggable>
      </a-row>
  </a-drawer>
</template>

<script>
  import Draggable from 'vuedraggable';
  export default {
    name: 'FormElmentDrawer',
    components:{
      Draggable
    },
    data() {
      return {
        visible: false,
        items : {}
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      open(items) {
        this.visible = true;
        this.items = items;
      },
    }
  }
</script>

<style scoped>

</style>