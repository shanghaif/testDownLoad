<template>
  <div class="cheta-dropdown-content cheta-check-avatar">
    <a-list
      itemLayout="horizontal"
      :dataSource="projectWork"
    >
<!--      @click.native="changeStatus(item)"-->
      <a-list-item class="member-list-item" slot="renderItem" slot-scope="item,index" @click.native="changeWork(item)">
        <a-list-item-meta>
          <span slot="title">{{item.name}}</span>
          <a-avatar :class="`badge-${item.color}`" slot="avatar" :icon="item.icon" />
        </a-list-item-meta>
        <a-icon slot="actions" type="check" v-if="item.id === workObject.flowId"/>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
  import { STATUS } from '@/views/application/firm/project/api/constant.js'
  export default {
    name: 'Avatar',
    data () {
      return {
        // projectId: this.$route.params.projectId,
        STATUS,
        check:true,
      }
    },
    props: {
      workObject: {
        type: Object
      },
      projectWork: {
        type: Array
      },
    },
    created () {

    },

    methods: {
      changeWork (item) {
        this.workObject.flowId = item.id
      },
    }
  }
</script>
<style lang="less">
  .cheta-avatar-content .ant-dropdown {
    width: 257px!important;
    height: 420px!important;
  }
  .cheta-dropdown-content .ant-list{
    height:235px!important;
    overflow-y: scroll!important;
  }
  .cheta-dropdown-content .ant-input-affix-wrapper .ant-input-prefix {
    left: 10px!important;
  }
</style>
<style lang="less" scoped>
  @import url("../../../../base.less");
  .cheta-font-Quote14{font-size: 14px;font-family: Chinese Quote;color: rgba(0,0,0,.45);}
  .cheta-avatar{width:32px;height:32px;border-radius: 50%;}
  .cheta-check-avatar{background-color: #FFF;border-radius: 4px;box-shadow: 0 2px 20px rgba(0,0,0,.1);margin-top: 5px; padding: 10px 0px;}
  .ant-btn-lg{
    padding: 0 15px;
    border-radius: 4px;
    height: 40px;
    font-size: 14px;
    width: 100%;
  }
  .cheta-footer{
    padding: 12px 12px 0px;
    border-top: 1px solid #e8e8e8;
  }
  .member-list-item {
    padding: 12px 24px;

    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }

</style>