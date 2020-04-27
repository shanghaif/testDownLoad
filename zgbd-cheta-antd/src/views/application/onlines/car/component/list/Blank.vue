<template>
    <div>
      <a-row>
        <a-col v-for="items in config[0].element || config[0].list"  :span="items[items.length-1].space">
          <a-col v-for="(item,ind) in items" :span="ind===items.length-1?0:item.data[1].space">
            <component :is="item.name" :config="item.data"></component>
          </a-col>
        </a-col>
      </a-row>
  </div>
</template>

<script>
  import homeMixin from '@/views/application/onlines/home/config/mixin'
  import elementMixin from '@/views/application/onlines/element/config/mixin'
  import carMixin from '@/views/application/onlines/car/config/mixin'
  export default {
    name: 'Blank',
    components: Object.assign(
      homeMixin.components,
      elementMixin.components,
      carMixin.components,
    ),
    methods:{
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
  }
</script>

<style scoped>
  .Blank{
    padding: 10px;
    height: 100%;
    width: 100%;
  }
</style>