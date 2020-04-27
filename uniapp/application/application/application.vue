<template>
	<view class="content">
		<uni-nav-bar class="cheta-bar" :fixed="true" color="#000" background-color="#ffffff" :status-bar="true" @clickLeft="back" title="应用">
		</uni-nav-bar>
		<image src="/static/img/empty/emptytext.jpg" :style="{width:screenWidth + 'px',height: screenHeight + 'px'}"></image>
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
		methods: {
			
		}
	}
</script>

<style>
	.content{
		overflow: hidden;
		image{
			height: 100%;
		}
	}
</style>
