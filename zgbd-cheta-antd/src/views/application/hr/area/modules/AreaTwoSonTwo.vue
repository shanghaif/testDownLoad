<template>
    <div>
      <a-row>
        <a-col :span="24" class="biang card-botton">
          <div>
            <a-row>
              <a-col :span="24">
                <div class="top">男</div>
              </a-col>
              <a-col :span="24">
                <a-progress type="circle" strokeColor="#3080FE" strokeWidth="9" :width="140"  :percent="75" />
              </a-col>
            </a-row>
          </div>

        </a-col>

        <a-col :span="24" class="biang">
          <div>
            <a-row>
              <a-col :span="24">
                <div class="top">女</div>
              </a-col>
              <a-col :span="24">
                <a-progress type="circle" strokeColor="#FF3000" strokeWidth="9"  :width="140" :percent="25" />
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>

    </div>
</template>

<script>
  export default {
    name: 'AreaTwoSonTwo'
  }
</script>

<style scoped>
.card-botton{
  border-bottom: #EEEEEE 1px solid;
}
  .biang{
    padding: 16px;
    text-align: center;
  }
  .top{
    margin: 5px 0px;
    font-size: 18px;
  }
</style>