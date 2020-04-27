<template>
  <div>
    <component :is="element.name" :record="record" :bind="element.data" v-for="element in config"/>
  </div>
</template>

<script>
  import CButton from './modules/Button'
  import CDropdown from './modules/Dropdown'
  import CHref from './modules/Href'
  import CSpan from './modules/Span'
  import CVertical from './modules/Vertical'

    export default {
      name: "ListAction",
      components: {
        CButton, CDropdown, CHref, CSpan, CVertical
      },
      props: {
        //表格数据
        record: {
          type: Object
        },
        //附加操作数据
        config:{
          type: Object
        }
      },
    }
</script>

<style scoped>

</style>