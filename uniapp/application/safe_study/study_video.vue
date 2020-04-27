<template>

	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">安全学习</view>
			<view slot="right" class="icon-item" @click="close()">{{countdown + countdownUnit}}</view>
		</uni-nav-bar>
		<view id='videoView' v-if="type == 'video'">
			<video style="width: 100%;" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			 @error="videoErrorCallback" controls></video>
		</view>
		<view id='pdfView' v-else-if="type == 'pdf'">
			沙发上
			<!-- <pdf 
			    ref="pdf"
			    :src="pdfUrl">
			  </pdf> -->
		</view>
		<view>安全学习</view>
	</view>
</template>

<script>
	export default {	
		data() {
			return {
				// pdfUrl:"https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf", 
				pdfUrl:"http://file.ctayun.com/cheta/1546003237411.pdf", 
				countdown: 10,
				countdownUnit: 's',
				timeOunt: 1,
				type: 'video',
			}
		},
		onReady: function(res) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
		},
		onLoad: function() {
			this.startTime();
			
		},
		methods: {
			back: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			close: function() {
				if (this.countdown == '关闭') {
					uni.navigateBack({
						delta: 1
					});
				}
			},
			startTime: function() {
				setTimeout(() => {
					this.countdown = this.countdown - 1;
					if (this.countdown == 0) {
						this.countdown = '关闭';
						this.countdownUnit = '';
					} else {
						this.startTime();
					}
				}, 1000);
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			}
		}
	}
</script>

<style>
</style>
