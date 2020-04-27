<template>
  <div class="dati">
    <a-table :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o"/> Name</span>
      <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        :key="tag"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
      <span slot="action" slot-scope="text, record">
      <span style="color: #007AFF">编辑</span>
      <a-divider type="vertical"/>
      <span style="color: #1CC09F" @click="examine">审核</span>
          <a-modal
            title="合同HTFO353644635 审批"
            :visible="visible"
            @ok="examineOk"
            :confirmLoading="confirmLoading"
            @cancel="examineOkCancel"
          >
      <div class="examineElastic">
        <span class="examineElasticxing">*</span>
        <div class="examineElTop">
         <span>审批选择：</span>
        <a-radio-group @change="examineChange" v-model="groupValue">
          <a-radio :value="1">通过</a-radio>
          <a-radio :value="2">驳回</a-radio>
        </a-radio-group>
        </div>
        <div class="examineElBody">
           <span>审批备注：</span>
          <span>
            <a-textarea style="width: 85%" placeholder="备注" allowClear @change="textareaChange"/>
          </span>

        </div>

      </div>
    </a-modal>
      <a-divider type="vertical"/>
      <span style="color: #666666">详情</span>
      <a-divider type="vertical"/>
      <span style="color: #FF0024">删除</span>
    </span>
    </a-table>
  </div>
</template>

<script>
  const columns = [
    {
      dataIndex: 'name',
      key: 'name',
      slots: { title: 'customTitle' },
      scopedSlots: { customRender: 'name' }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      scopedSlots: { customRender: 'tags' }
    },
    {
      title: 'Action',
      key: 'action',
      scopedSlots: { customRender: 'action' }
    }
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]
  export default {
    name: 'contractList',
    data() {
      return {
        data,
        columns,
        visible: false,
        confirmLoading: false,
        groupValue: 1

      }
    },
    methods: {
      examine() {
        this.visible = true
      },
      examineOk(e) {
        this.ModalText = 'The modal will be closed after two seconds'
        this.confirmLoading = true
        setTimeout(() => {
          this.visible = false
          this.confirmLoading = false
        }, 2000)
      },
      examineOkCancel(e) {
        console.log('Clicked cancel button')
        this.visible = false
      },
      examineChange(e) {//单选
        console.log('radio checked', e.target.value)
      },
      textareaChange(e) {//备注
        console.log(e)
      }
    }
  }
</script>

<style scoped>
  .examineElasticxing {
    color: #F40000;
    display: inline-block;
    height: 19px;
    line-height: 25px;
    margin-right: 4px;
    position: absolute;
  }
  .examineElTop,.examineElBody{
    padding-left: 10px;
  }
  .examineElBody{
    margin: 10px 0px;
  }
  .examineElBody span{
    vertical-align:top;
  }

</style>