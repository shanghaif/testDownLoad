<template>
  <span>
    <!--{{`${parseSite(record.lo,record.la)}`}}-->
    {{value}}
  </span>
</template>

<script>
  import { getAddress } from '@/views/application/car/api/util'
  export default {
    name: 'Speed',
    props: {
      record: {
        type: Object,
        default: () => {}
      },
    },
    data() {
      return {
        value : ""
      }
    },
    watch :{
      "record" : function(e) {
        this.parseSite(e.lo || e.slo, e.la || e.sla);
      }
    },
    created(){
      this.parseSite(this.record.lo || this.record.slo ,this.record.la || this.record.sla);
    },
    methods:{
      parseSite(lo,la){
        /*lo = 113.673398, la =  23.038006;*/
        getAddress([[lo, la]], geo => {
          this.value = geo.geo.formattedAddress;
        })
      }
    }
  }
</script>

<style scoped>

</style>