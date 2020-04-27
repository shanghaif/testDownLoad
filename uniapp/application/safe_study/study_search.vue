<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">搜索</view>
		</uni-nav-bar>
		<view class="search-textfield-background">
			<view class="uni-flex uni-row">
				<uni-icons type="search" size="24" style="color: #999999; margin: 2px 0px 0px 12px;"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	export default {
		components: {
			uniIcons,
		},
		data() {
			return {
				
			}
		},
		onLoad: function() {
			
		},
		methods: {
			back: function() {
				uni.navigateBack({
					delta: 1
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
	
	.search-textfield-background {
		margin: 10px 10px 10px 10px;
		border-radius: 22px;
		background-color: #F6F6F6;
		height: 44px;
	}
</style>
