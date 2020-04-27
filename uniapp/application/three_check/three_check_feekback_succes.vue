<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :border="false" :status-bar="true" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">反馈完成</view>
		</uni-nav-bar>
		<view style="width: 100%;height: 240px;">
			<view :style="{height: screenWidth*652/721 + 'px'}" style="z-index: 1;width: 100%;background-image: url(../../static/img/three_check/feekback_succes.png);background-size: 100% 99.9%;background-repeat: no-repeat;">
			</view>
		</view>
		<view class="menuBottomView" style="background-color: rgba(0,0,0,0);width: 100%;height: 43px;margin-top: 120px;">
			<button type="primary" style="margin: 30px 80px;" @click="clickBottomButton()">我知道了</button>
		</view>
	</view>
</template>

<script>
	const SystemInfo = uni.getSystemInfoSync();
	export default {
		data() {
			return {
				screenWidth: SystemInfo.screenWidth,
				screenHeight: SystemInfo.screenHeight
			}
		},
		onLoad: function() {

		},
		methods: {
			clickBottomButton: function() {
				uni.navigateBack({
				    delta: 3
				});
			}
		}
	}
</script>

<style>
	.content {
		background-color: white;
		height: 100%;
	}
	
	.menuBottomView button{
		background-color: #4ACF9A;
		border-radius: 21.5px;
		font-size: 17px;
	}
	
	.menuBottomView button::after{
		border-radius: 21.5px;
		font-size: 17px;
	}
	
	.button-hover[type=primary] {
		background-color:rgba(74, 207, 154, 0.3);
	}
</style>
