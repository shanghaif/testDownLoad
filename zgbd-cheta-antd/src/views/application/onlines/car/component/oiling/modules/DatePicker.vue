<template>
<div class="Date">
  <div class="DateOne" v-if="config[0].DateOne == 1">
    <div class="One" v-if="config[0].select == 1">
      <a-date-picker @change="onChange" />
    </div>
    <div class="Two" v-else-if="config[0].select == 2">
      <a-month-picker @change="onChange" placeholder="Select month" />
    </div>
    <div class="Three" v-else-if="config[0].select == 3">
      <a-range-picker @change="onChange" />
    </div>
    <div class="Foue" v-else-if="config[0].select == 4">
      <a-week-picker @change="onChange" placeholder="Select week" />
    </div>
  </div>



  <div class="DateTwo" v-if="config[0].DateTwo == 1">
      <div v-if="config[0].button == 1">
        <a-button type="primary">{{config[0].text}}</a-button>
      </div>
      <div v-if="config[0].button == 2">
        <a-button>{{config[0].text}}</a-button>
      </div>
      <div v-if="config[0].button == 3">
        <a-button type="dashed">{{config[0].text}}</a-button>
      </div>
      <div v-if="config[0].button == 4">
        <a-button type="danger">{{config[0].text}}</a-button>
      </div>
      <div v-if="config[0].button == 5">
        <a-button type="link">{{config[0].text}}</a-button>
      </div>
      <div v-if="config[0].button == 6">
        <a-radio-group :value="size" @change="handleSizeChange">
          <a-radio-button value="1">{{config[0].texta}}</a-radio-button>
          <a-radio-button value="2">{{config[0].textb}}</a-radio-button>
        </a-radio-group>
  </div>
  </div>




</div>
</template>

<script>
  export default {
    name: 'DatePicker',
    data(){
      return {
        size: '1',
      };
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    methods: {
      onChange(date, dateString) {
        console.log(date, dateString);
      },
      handleSizeChange(e) {
        this.size = e.target.value;
      },
    },
    handleSizeChange : {

    }
  };
</script>

<style scoped>
.Date{
  margin: 10px;
  height: 40px;
  line-height: 40px;
}
.Date div{
  margin: 0 10px;
  float: right;
  height: 32px;
}
</style>