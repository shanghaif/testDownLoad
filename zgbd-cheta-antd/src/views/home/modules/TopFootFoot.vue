<template>

  <div>
    <a-row>
      <a-col :span="24">
        <div class="up-beijing">
          <a-row>
            <!--下-->
            <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
            <a-col  :xl="16" :lg="16" :md="20" :sm="24" :xs="24">
              <div class="up-tupian">
                <img src="@/assets/index/uptupian.jpg" alt="">
              </div>
            </a-col>
            <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :span="24">
        <div class="up-gengduo">
          <a-row>
            <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
            <a-col  :xl="16" :lg="16" :md="20" :sm="24" :xs="24">
              <div class="up-gengduo-">
                <div class="up-gengduo-o">{{config[0].title}}</div>
                <div class="up-gengduo-t">{{config[0].description}}</div>
              </div>
            </a-col>
            <a-col  :xl="4" :lg="4" :md="2" :sm="0" :xs="0"></a-col>
          </a-row>
        </div>
      </a-col>

    </a-row>
  </div>

</template>
<script>
  export default {
    name: 'TopFootFoot',
    props: {
      config: {
        type: Array,
        default: () => []
      },
    }
  }
</script>
<style>
  .up-gengduo{
    width: 100%;
    padding: 0px;
    background-color: #3C9CFF;
    background-image: linear-gradient(90deg, #3C9CFF, #A7D3FC 100%);
  }
  .up-gengduo-{
    width: 100%;
    height: 70px;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .up-gengduo-o{
    text-align: left;
    line-height: 30px;
    font-size: 24px;
    color: #fff;
  }
  .up-gengduo-t{
    text-align: left;
    line-height: 8px;
    font-size: 16px;
    color: #fff;
    padding-top: 12px;
  }
  .up-beijing{
    background-color: #181818;
  }
  .up-tupian img{
    text-align: center;
    background-size: cover;
    display: block;
    width: 100%;
  }



</style>



