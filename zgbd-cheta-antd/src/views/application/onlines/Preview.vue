<template>
<div style="padding: 15px">
    <template>
      <a-row :gutter="elements[0].data[2].gutterKey || 5">
        <a-col v-for="item in elements"  :span="item.data[1].space || 24">
          <component :is="item.name" :finalSingleValue="finalSingleValue" @refresh="refresh" :config="item.data"></component>
        </a-col>
      </a-row>
    </template>
</div>
</template>

<script>
  import {getAction} from "@/api/manage";
  import homeMixin from './home/config/mixin.js'
  import elementMixin from './element/config/mixin.js'
  import carMixin from './car/config/mixin.js'

/*  const elements = [];*/
  export default {
    name: 'preview',
    components: Object.assign(
      homeMixin.components,
      elementMixin.components,
      carMixin.components,
    ),
    data() {
      return {
        elements: [],
        finalSingleValue : {},
        ispc: true,
        id : this.$route.params.id,
        url: 'application/online/component/getComponentsById'
      }
    },
    methods: {
      refresh(finalSingleValue){
        this.finalSingleValue = finalSingleValue;
      },
      previewView() {
        var that = this;
        this.id = location.href.substring(location.href.lastIndexOf('/') + 1);
        getAction(that.url, {projectId: this.id,}).then(res => {
          that.elements = []
          res.result.forEach(item => {
            let data = item.data;
            that.elements.push({
              name: item.name,
              data: JSON.parse(data),
            })
          })
        });
      },
    },
    created () {
      this.previewView();
    },
    watch: {
      // 监听路由
      '$route'() {
        this.previewView()
      }
    },

  }

</script>

<style scoped>

</style>