<template>
    <div class="maintain">
       <span class="maintainButton">
         <a-button><a-icon type="environment"  style="color: #0091E4"/>维修厂</a-button>
      </span>
      <span class="maintainButton">
         <a-button><a-icon type="file-text"  style="color: #1CC09F"/>保养规则</a-button>
      </span>
      <span class="maintainButton">
        <a-button><a-icon type="book"  style="color: #FF7854"/>保养手册</a-button>
      </span>

    </div>
</template>

<script>
  export default {
    name: 'MaintenanceTopData',
    props: {
      config: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>

<style scoped>
  .maintain{
    height: 40px;
    padding: 4px 0px;
  }
  .maintainButton{
    display: inline-block;
    float: right;
    margin-left: 10px;
  }
  .maintainButton span{
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
</style>