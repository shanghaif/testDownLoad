<template>
    <div class="cheta-test-test">
      <div v-if="videoConfig">
        <div v-for="item in videoConfig.channels" v-if="channel != item" class="cheta-icon-hover cheta-event cheta-positionr">
          <VideoItem :videoConfig="videoConfig" :channel="item" ref="videoItem" @changeVideo="carPlay(item)"></VideoItem>
          <span class="cheta-positiona-tl15 cheta-font-color-white">{{ item }}/{{videoConfig.channels.length}}</span>
        </div>
      </div>
    </div>
</template>
<script>
  import VideoItem from './modules/VideoItem'
  export default {
    name: 'CarShow',
    components: { VideoItem },
    props: {
      videoConfig: {
        type: Object
      },
      channel: {
        type: Object
      }
    },
    methods:{
      carPlay (channel) {
        // this.videoConfig.channel = channel + 1
        // this.$refs.videoItem.videoPlay()
        // this.$emit('changeVideo',this.videoConfig)
      }
    },
  }
</script>

<style lang="less" scoped>
 .cheta-positiona-tl56-130{position: absolute;top:56px;left:130px;}
 .icon-zanting1{visibility: hidden}
 .cheta-icon-hover:hover .icon-zanting1{visibility: visible}
 .cheta-hidden{visibility: hidden}

</style>