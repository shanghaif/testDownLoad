<template>
    <div class="plan">
      <a href="#">
        <a-badge count="5"  :numberStyle="{minWidth:'12px',height: '12px',padding: '0',fontSize: '5px',borderRadius:'50%',lineHeight:'12px'}">
            <a-icon type="schedule" style="color: #999999;"/>
        </a-badge>
      </a>
      <span class="text">我的计划</span>
    </div>
</template>

<script>
  export default {
    name: 'IconText'
  }
</script>

<style scoped>
  .plan{
    height: 40px;
    line-height: 40px;
  }
 .text{
   font-size:14px;
   margin-left: 10px;
   font-family:Microsoft YaHei;
   font-weight:400;
   color:rgba(153,153,153,1);
 }
 #app > div > div.element-row.ant-row-flex > div.element-col.top-nav-header-index.ant-col-15 > div.ant-col-24 > div > div > div > div > div:nth-child(2) > div > span > div > div > span.ant-badge > sup{
   height: 12px;
   line-height: 12px;
 }
</style>