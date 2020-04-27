Table 重封装组件说明
====


封装说明
----

>  基础的使用方式与 API 与 [官方版(Table)](https://vue.ant.design/components/table-cn/) 本一致，在其基础上，封装了加载数据的方法。
>
> 你无需在你是用表格的页面进行分页逻辑处理，仅需向 Table 设置 url ，column



例子1
----
（基础使用）

```vue

<template>
  <div>
    <c-table :columns="columns" url="/application/car/violation/getPage">
      
    </c-table>
  </div>
</template>

<script>

  import CTable from '@/views/chetaui/table/index.js'

  export default {
    name: 'Violation',
    components: { CTable },
    data () {
      return {
        columns: [
          { title: '车牌号', dataIndex: 'plateNo', key: 'plateNo' , width : '150px' },
          { title: '车量种类', dataIndex: 'type', key: 'type',width : '250px', scopedSlots: { customRender: 'type' }},
          { title: '车型', dataIndex: 'carType', key: 'carType',width : '250px' },
          { title: '发动机号', dataIndex: 'engNo', key: 'engNo' }
        ],
      }
    },
  }
</script>
```



更新时间
----

该文档最后更新于： 2019-06-20 PM 16:07



--- 

过滤项，排序项

过滤加在 param.filter 参数
排序加在 param.sort 参数




