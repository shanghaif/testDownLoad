<template>
  <a-drawer
    title="更改数据"
    width=400
    :closable="false"
    @close="visible = false"
    :visible="visible"
  >
    <a-card>
      <a-form-item label="标题" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }"  style="margin-bottom:0;">
          <a-input placeholder="标题" v-model="items.title" style="width: 180px;"/>
      </a-form-item>
      <a-form-item label="宽度" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
        <a-input-number placeholder="宽度" :min="1" :max="1000" v-model="items.width" style="width: 180px;"/>
      </a-form-item>
    </a-card>
    <a-card>
     <a-row>
      <a-col :span="24">
        <span>条件字段：</span>
        <div v-if="items.fields">
          <a-form-item v-for="(item, ind) in items.fields" :label="'条件' + (ind + 1)" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }" style="margin-bottom:0;">
            <a-form-item :style="{ display: 'inline-block', width: 'calc(35% - 12px)', marginRight: '65px' }">
              <a-input placeholder="条件" v-model="item.fieldName" style="width: 180px;"/>
            </a-form-item>
            <a-icon style="margin-left: 45px;" class="dynamic-delete-button" type="minus-circle-o" @click="removeTableField(ind)"/>
          </a-form-item>
          <a-form-item label="新增" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <a-button type="dashed" @click="addTableField">
              <a-icon type="plus"/>
              添加字段
            </a-button>
          </a-form-item>
        </div>
      </a-col>
    </a-row>
    </a-card>
  </a-drawer>
</template>

<script>
  export default {
    name: 'SearchDrawer',
    data() {
      return {
        visible: false,
        items : []
      }
    },
    methods: {
      open(item) {
        this.visible = true;
        this.items = item;
      },
      //添加选择框字段
      addTableField() {
        this.items.fields.push({ fieldName: ''})
      },
      //select 组件的方法
      removeTableField(index) {
        this.items.fields.splice(index, 1)
      },
    }
  }
</script>

<style scoped>

</style>