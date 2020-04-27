<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :border="false" :status-bar="true" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">功能介绍</view>
		</uni-nav-bar>
		<scroll-view scroll-y="true" style="position:fixed;left: 0;right: 0;bottom: 0;top: calc(44px + env(safe-area-inset-top));">
			<view v-for="(item, index) in getVersionData" :key="index" class="scroll-view-item" style="padding: 15px 30px 0 30px;">
				<view style="font-size: 18px;color: rgba(0,0,0,0.8);">V {{item.version}}</view>
				<!-- <view style="font-size: 14px;color: rgba(0,0,0,0.6);">2019年10月23日</view> -->
				<view style="font-size: 16px;color: rgba(0,0,0,0.7);">{{item.content}}</view>
				<!-- <view style="font-size: 16px;color: rgba(0,0,0,0.7);">2.修改照片删除的bug。</view> -->
				<view style="height: 1px;background-color: rgba(0,0,0,0.05);margin-top: 16px;"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	const SystemInfo = uni.getSystemInfoSync();
	export default {
		data() {
			return {
				screenWidth: SystemInfo.screenWidth,
				screenHeight: SystemInfo.screenHeight,
				getVersionData: []
			}
		},
		onLoad: function(item) {
			var array = [];
			array[0] = JSON.parse(decodeURIComponent(item.item));
			this.getVersionData = array;
			
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style>
	.content {
		background-color: white;
		height: 100%;
	}
</style>
