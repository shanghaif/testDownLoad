<template>
  <div class="cheta-width-full cheta-video">
    <div class="cheta-box-flex cheta-height-full">
      <div class="cheta-width-full">
        <div>
          <!-- new -->
          <a-row :getter="16">
            <a-col v-for="item in carList" :span="8" :xs="24" :sm="12" :md="12" :lg="12" :xl="8" class="cheta-p-5">
              <VideoItem :videoConfig="item" @videoPlay="videoPlay(item)"></VideoItem>
            </a-col>
          </a-row>
          <div class="cheta-font-align cheta-mt-20"><span class="cheta-font14 cheta-font14-color">点击加载更多</span><i class="iconfont icon-shuaxin1 cheta-icon-size14 cheta-pl-5"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import VideoItem from './VideoItem'
  import carList from './data.json'
  export default {
    name: 'Guide',
    components: { VideoItem },
    data () {
      return {
        disabled: false,
        carList: carList
      }
    },
    methods: {
      moment,
      videoPlay (item) {
        this.$emit('carCheckShow', item)
      }
    },
  }
</script>
<style lang="less">
  .cheta-video .ant-slider{
    width: 40%!important;
    margin: 0px 0px 0px 7px!important;
    display: inline-block!important;
  }
</style>
<style lang="less" scoped>

</style>