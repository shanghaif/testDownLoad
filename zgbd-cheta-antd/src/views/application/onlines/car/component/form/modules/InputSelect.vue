<template>
  <a-form-item v-bind="item" >
    <a-input
      v-bind="attr"
      v-decorator="[bind.fieldName, bind.rules]"
      style="width: 100%"
    >
      <a-select
        slot="addonBefore"
        defaultValue="现金"
        v-decorator="[bind.cradType]"
        style="width: 70px"
      >
        <a-select-option value="油卡">
          油卡
        </a-select-option>
        <a-select-option value="现金">
          现金
        </a-select-option>
      </a-select>
    </a-input>
  </a-form-item>
</template>

<script>
  export default {
    name: 'InputSelect',
    props: {
      attr: {
        type: Object
      },
      item: {
        type: Object
      },
      bind: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .ant-input-group-wrapper{
    padding: 4px 0;
  }

</style>