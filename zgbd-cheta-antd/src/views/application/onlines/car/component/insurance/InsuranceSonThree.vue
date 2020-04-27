<template>
      <div class="loop">
        <a-carousel autoplay>
          <!--<div class="body-top-guanggao-tp"><img src="~@/assets/index/baoxianguanggao.png" alt=""></div>
          <div class="body-top-guanggao-tp"><img src="~@/assets/index/baoxianguanggao.png" alt=""></div>
          <div class="body-top-guanggao-tp"><img src="~@/assets/index/baoxianguanggao.png" alt=""></div>
          <div class="body-top-guanggao-tp"><img src="~@/assets/index/baoxianguanggao.png" alt=""></div>-->

          <div class="body-top-guanggao-tp" v-for="item in config[0].imgs"><img :src="item.img" alt=""></div>
        </a-carousel>
      </div>
</template>

<script>
  export default {
    name: 'InsuranceSonThree',
    props: {
      config: {
        type: Array,
        default: () => []
      }
    },
  }
</script>

<style scoped>
  .loop{
    height: 220px;
    /*max-width: 500px;*/
    box-shadow:0px 0px 5px 0px rgba(204,204,204,0.5);
    border-radius:3px;
    margin: 10px 0px 10px 0px;
    position: relative;
    display: block;
  }
  .body-top-guanggao-tp{
    width: 100%;
    height: 100%;
  }
  .body-top-guanggao-tp img{
    /*margin: 0 auto;*/
    width: 100%;
    height: 220px;
    padding: 20px 20px;
    display: block;
    box-sizing: border-box;
  }
</style>