<template>
	<view class="content" :style="{width:screenWidth + 'px',height:screenHeight + 'px'}">
		<swiper class="swiper" :indicator-dots="false" :autoplay="false" :interval="2000" :duration="500">
		<swiper-item v-for="(item,index) in imgList" :key="index">
			<view class="swiper-item swiper-wrap">
				<image :src="item.url" :style="{width:screenWidth + 'px'}"></image>
				<view v-if="index===2" class="uni-button-width uni-common-mt button-attribute">
					<button type="primary" class="cheta-button-primary" @click="getIndex">
						<uniIcons :style="{ color: 'white', 'font-size': '20px', 'margin': '10px' }" type="scan" size="20"/><text class="san-code">立即体验</text>
					</button>
				</view>
			</view>
		</swiper-item>
	</swiper>
	</view>
</template>

<script>
	const SystemInfo = uni.getSystemInfoSync();

	export default {
		data() {
			return {
				screenWidth: SystemInfo.screenWidth,
				screenHeight: SystemInfo.screenHeight,
				imgList: [
					{url:"/static/img/icon/lead.jpg"},
					{url:"/static/img/icon/lead2.jpg"},
					{url:"/static/img/icon/lead3.jpg"}
				]
			}
		},
				
		methods: {
			getIndex () {
				this.setStorage("guide",true)
			},
			// 设置缓存
			setStorage (key, data) {
				uni.setStorage({
					key: key,
					data: data,
					success: (res) => {
						uni.redirectTo({
							url: '/application/login',
						});
					},
					fail: () => {
						uni.redirectTo({
							url: '/application/login',
						});
					}
				})
			}
		}
	}
</script>
<style>
	uni-swiper{
		height: 100%!important;
		position: relative;
	}
</style>

<style lang="scss" scoped>
	
	.content{
		overflow: hidden;
		
		.swiper-wrap{
			height: 100%;
		}
		image{
			height: 100%;
		}
		.cheta-button-primary{
			background:rgba(74,207,154,1);
			border-radius:41px;
		}
		.cheta-button-primary uni-button:after{
			border: 0px solid rgba(0,0,0,.2)!important;
		}
		.button-attribute{
			text-align: center;
			// bottom: 100rpx;
			position: absolute;
			left: 20%;
			top: 86%;
		}
		.uni-button-width{
			width: 430rpx;
		}
	}
</style>