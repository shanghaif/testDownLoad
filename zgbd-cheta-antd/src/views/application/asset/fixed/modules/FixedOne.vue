<template>
  <div class="top-hard">
    <a-row>
      <a-col :span="24">
        <h3>概览 <a-range-picker @change="onChange" class="top-har"/></h3>

      </a-col>
      <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12" class="top-hard-to top-hard-top">
        <div>
          <a-row>
            <a-col :span="12">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12" class="top-hard-t">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12" class="top-hard-t">
              <p>极群书</p>
              <span>168</span>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12" class="top-hard-to top-hard-top">
        <div>
          <a-row>
            <a-col :span="12">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12" class="top-hard-t">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12" class="top-hard-t">
              <p>极群书</p>
              <span>168</span>
            </a-col>
          </a-row>
        </div>

      </a-col>
      <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12" class="top-hard-to top-hard-top">
        <div>
          <a-row>
            <a-col :span="12">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12" class="top-hard-t">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12" class="top-hard-t">
              <p>极群书</p>
              <span>168</span>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12" class="top-hard-to">
        <div>
          <a-row>
            <a-col :span="12">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12" class="top-hard-t">
              <p>极群书</p>
              <span>168</span>
            </a-col>
            <a-col :span="12" class="top-hard-t">
              <p>极群书</p>
              <span>168</span>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'FixedOne',
    methods: {
      onChange(date, dateString) {
        console.log(date, dateString);
      }
    }
  }
</script>

<style scoped>
  .top-hard-to {
    padding: 20px;
  }

  .top-hard span {
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-size: 20px;
  }

  .top-hard p {
    margin: 5px 0px;
  }

  h3 {
    border-bottom: 1px solid #F4F3F3;
    padding: 10px 0px;
    margin: 15px 0px;
  }

  .top-hard-top {
    border-right: 1px solid #F4F3F3;
  }

  .top-hard-t {
    margin: 20px 0px;
  }
  .top-har{
    float: right;
    margin: -10px 0px;
  }
</style>