<template>
  <a-form-item v-bind="item">
    <a-date-picker
      v-bind="attr"
      v-decorator="[bind.fieldName, bind.rules]"
      style="width: 100%"
      format="YYYY-MM-DD HH:mm:ss"
      :disabledDate="disabledDate"
      :disabledTime="disabledDateTime"
      :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
    />
  </a-form-item>
</template>

<script>
  import moment from 'moment';
  export default {
    name: 'DateTime',
    props: {
      attr: {
        type: Object
      },
      item: {
        type: Object
      },
      bind: {
        type: Object
      },
    },
    methods: {
      moment,
      disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
      },

      disabledDateTime() {
        return {
          disabledHours: () => this.range(0, 24).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56],
        };
      },
    },
  }
</script>

<style scoped>

</style>