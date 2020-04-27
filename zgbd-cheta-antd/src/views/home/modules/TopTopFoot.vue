<template>
  <div style="height: 820px">
    <!--<a-row>-->
      <a-col :span="24">
        <div class="top-top-right" >
          <img :src="config[0].imgOne" alt="">
        </div>
      </a-col>
      <a-col :span="24">
        <div class="top-right-">
          <a-row>
            <a-col  :xl="4" :lg="2" :md="0" :sm="0" :xs="0"></a-col>
            <a-col  :xl="4" :lg="5" :md="6" :sm="12" :xs="12">
              <!--小的-->
              <div style="text-align: center">
                <a-row>
                  <a-col>
                    <a href="#">
                      <div class="top-right-up">
                        <div class="top-right-up-o"> {{config[0].titleOne}}</div>
                        <div class="top-right-up-yunfuwu"> {{config[0].textOne}}</div>
                        <p><img :src="config[0].imgTwo" alt=""></p>
                      </div>
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col  :xl="4" :lg="5" :md="6" :sm="12" :xs="12">
              <!--小的-->
              <div style="text-align: center">
                <a-row>
                  <a-col>
                    <a href="#">
                      <div class="top-right-up">
                        <div class="top-right-up-o"> {{config[0].titleTwo}}</div>
                        <div class="top-right-up-yunfuwu"> {{config[0].textTwo}}</div>
                        <p><img :src="config[0].imgThree" alt=""></p>
                      </div>
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col  :xl="4" :lg="5" :md="6" :sm="12" :xs="12">
              <!--小的-->
              <div style="text-align: center">
                <a-row>
                  <a-col>
                    <a href="#">
                      <div class="top-right-up">
                        <div class="top-right-up-o"> {{config[0].titleThree}}</div>
                        <div class="top-right-up-yunfuwu"> {{config[0].textThree}}</div>
                        <p><img :src="config[0].imgFour" alt=""></p>
                      </div>
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col  :xl="4" :lg="5" :md="6" :sm="12" :xs="12">
              <!--小的-->
              <div style="text-align: center">
                <a-row>
                  <a-col>
                    <a href="#">
                      <div class="top-right-upp">
                        <div class="top-right-up-o"> {{config[0].titleFour}}</div>
                        <div class="top-right-up-yunfuwu"> {{config[0].textFour}}</div>
                        <p><img :src="config[0].imgFive" alt=""></p>
                      </div>
                    </a>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col  :xl="4" :lg="2" :md="0" :sm="0" :xs="0"></a-col>
          </a-row>
        </div>
      </a-col>
    <!--</a-row>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        indexHead: [],
      }
    },
    props: {
      config: {
        type: Array,
        default: () => []
      },
    },
    created() {
    }
  }
</script>

<style scoped>
  .top-top-right img{
    width: 100%;
  }
  .top-right-{
    background-color: white;
  }
  .top-right-upp:hover .top-right-up-o{
    color: #3C9CFF;
  }
  .top-right-upp:hover .top-right-up-o{
    color: #3C9CFF;
  }
  .top-right-up:hover .top-right-up-o{
    color: #3C9CFF;
  }
  .top-right-up {
    border-right: 1px solid #EEEEEE;
  }
  .top-right-upp:hover .top-right-up-o{
    color: #3C9CFF;
  }
  .top-right- {
    padding: 0 0px 10px 0px;
    text-align: center;
  }
  .top-right-up-o{
    line-height: 70px;
    font-size: 22px;
    color: rgb(0, 0, 0);
    font-family: Raleway;
  }
  .top-right-up-yunfuwu{
    color: #AFB3BE;
    padding: 10px 15px;
    line-height: 30px;
    /*margin-bottom: 5px;*/
  }
  .top-right-up-yunfuwuu{
    color: #AFB3BE;
    line-height: 50px;
  }
  .top-right-up p,.top-right-upp p{
    line-height: 90px;
    margin: 5px 0;
  }
  .top-right a, xiaode a, .top-right-up a,.top-right-upp a{
    color: #9C9C9C;
  }
  .top-right-up-yunfuwu img{
      text-align: center;
    }



















</style>
<style>

</style>