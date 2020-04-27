车辆 搜索 封装组件说明
====

例子1
----
（基础使用）

```vue
<template>
  <Search :showSearch="false" @searchChange="searchChange"></Search>
</template>

<script>

  import Search from '@views/chetaui/input/search/Index'

  export default {
    name: 'Violation',
    components: { Search },
    data () {
      carId:''
    },
    methods: {
      // 搜索框
      searchChange(carId) {
        this.carId = carId;
      },
    }
  }
</script>
```



更新时间
----

该文档最后更新于： 2019-8-27 PM 16:07

author sgh



