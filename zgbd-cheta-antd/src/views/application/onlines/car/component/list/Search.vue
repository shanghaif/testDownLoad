<template>
  <div>
    <a-row>
      <span v-for="(element,index) in config[0].components">
        <div class="element-list-del" v-if="config[0].isDelete" @click.stop="removeElement(index)" style="position: relative">
          <a-icon type="delete" style="font-size: 22px;position: absolute;z-index: 10;top:10px; right: 20px;"/>
        </div>
        <a-col  @click="edit(element)">
          <component @refreshList="refresh" :is="element.name" :data="element.data" class="cheta-m-10"/>
        </a-col>
      </span>
    </a-row>
    <search-drawer ref="searchdrawer"></search-drawer>
  </div>
</template>

<script>
  import CSearch from '@/views/application/onlines/car/component/list/search_modules/CSearch'
  import SearchDrawer from './search_modules/SearchDrawer'

  export default {
    name: 'Search',
    components: {
      SearchDrawer,
      CSearch
    },
    data() {
      return {
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      //编辑内部组件
      edit(item) {
        if (this.config[0].isDelete) {
          this.$refs.searchdrawer.open(item.data)
        }
      },
      refresh(value){
        this.$emit('refresh',value)
      },
      removeElement(index) {
        this.config[0].components[index] = null;
        this.config[0].components.splice(index, 1);
      },
    }
  }
</script>

<style scoped>
  .dati {
    margin: 10px 15px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }
  .element-list .element-list-del {
    display: none;
    cursor: pointer;
  }

  .element-list .element-list-del, .element-list-check {
    display: block;
  }
</style>