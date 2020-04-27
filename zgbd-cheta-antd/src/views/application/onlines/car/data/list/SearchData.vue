<template>
  <div>
    <a-card>
      是否允许编辑内部组件：
      <a-switch style="margin-left: 10px"  v-model="config[0].isDelete">
        <a-icon type="check" slot="checkedChildren"/>
        <a-icon type="close" slot="unCheckedChildren"/>
      </a-switch>
    </a-card>
    <a-card>
      <a-row>
        <span @click="edit(element)" v-for="element in config[0].library">
          <a-col>
             <component :is="element.name" :data="element.data" class="cheta-m-10"/>
          </a-col>
        </span>
      </a-row>
    </a-card>
  </div>
</template>

<script>
  import CSearch from '@/views/application/onlines/car/component/list/search_modules/CSearch'
  export default {
    name: 'SearchData',
    components: {
      CSearch
    },
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods:{
      edit(item){
        this.config[0].components.push(Object.assign(item,{}));
      }
    }
  }
</script>

<style scoped>
</style>