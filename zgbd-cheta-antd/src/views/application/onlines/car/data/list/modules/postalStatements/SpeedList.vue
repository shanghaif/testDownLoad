<template>
  <span>
    {{value}}
  </span>
</template>

<script>
  import { getAddress } from '@/views/application/car/api/util'
  export default {
    name: 'SpeedList',
    props: {
      record: {
        type: Object,
        default: () => {}
      },
      content: {
        type: Object,
        default: () => ''
      }
    },
    data() {
      return {
        value : '',
        district : '',
        township : '',
        street : '',
        streetNumber : '',
      }
    },
    watch :{
      "record" : function(e) {
        this.parseSite(this.content);
      }
    },
    created(){
      this.parseSite(this.content);
    },
    methods:{
      parseSite(str){
        try{
          var list = str.split(',');
          var lola = [];
          var count = 1;
          var that = this;
          if(list.length){
            list.forEach((item,index) =>{
              //默认最长五个沿途路径
              if(index < 10){
                if(index % 2 !== 0){
                  //单 lo
                  lola[count - 1].push(item);
                  count = count + 1;
                }else{
                  //双 la
                  lola.push([item])
                }
              }
            })
            //[[lo, la],[lo, la],[lo, la]]
            /*lo = 113.673398, la =  23.038006;*/
            var i = 0;
            if(lola.length){
              getAddress(lola, geo => {
                that.quchon(that,geo,i);
                i=i+1;
              })
          }
          }else{
            this.value = '';
          }
        }catch (e) {
          this.value = this.content;
        }
      },
      //去重
      quchon(that,geo,i){
        if(i == 0){

          that.value = geo.geo.formattedAddress;
          that.district = geo.geo.addressComponent.district;
          that.township = geo.geo.addressComponent.township;
          that.street = geo.geo.addressComponent.street;
          that.streetNumber = geo.geo.addressComponent.streetNumber;
        }else{
          //如果 广州市
          if(that.district === geo.geo.addressComponent.district){
            //天河区
            if(that.township == geo.geo.addressComponent.township){
              //某某街道
              if(that.street === geo.geo.addressComponent.street){
                //多少号
                if(that.streetNumber !== geo.geo.addressComponent.streetNumber){
                  this.value += ' -> '+geo.geo.addressComponent.streetNumber;
                }
              }else{
                this.value += ' -> '+
                  geo.geo.addressComponent.street+
                  geo.geo.addressComponent.streetNumber;
              }
            }else{
              this.value += ' -> '+
                geo.geo.addressComponent.township+
                geo.geo.addressComponent.street+
                geo.geo.addressComponent.streetNumber;
            }
          }else{
            this.value += ' -> '+
              geo.geo.addressComponent.district+
              geo.geo.addressComponent.township+
              geo.geo.addressComponent.street+
              geo.geo.addressComponent.streetNumber;
          }
        }
      },
    }
  }
</script>

<style scoped>

</style>