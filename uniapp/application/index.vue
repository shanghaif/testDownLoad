<template>
	<view class="content" :style="{width:screenWidth + 'px',height:screenHeight + 'px'}">
		<image src="/static/img/icon/start.jpg" :style="{width:screenWidth + 'px'}"></image>
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
		created () {
			setTimeout(() => {
				this.load()
			}, 2000)
		},
		methods: {
			load () {
				var user = uni.getStorageSync('userInfo');
				if (user) {
					uni.switchTab({
						url: '/application/home',
					});
				}
				else{
					var isGuide = uni.getStorageSync('guide');
					if (isGuide) {
						uni.redirectTo({
							url: '/application/login',
						});
					} else {
						uni.redirectTo({
							url: '/application/guide',
						});
					}
				}
				
			}
		}
	}
</script>

<style lang="scss">
	
	.content{
		overflow: hidden;
		image{
			height: 100%;
		}
	}
</style>
