<template>
	<view style="background-color: #fff;">
		<uni-nav-bar class="cheta-bar" left-icon="arrowleft" :fixed="true" color="#333333" background-color="#ffffff" :status-bar="true" @clickLeft="back" title="应用">
		</uni-nav-bar>
		<uni-search-bar radius="100" placeholder="请输入关键词搜索" clearButton="none" cancelButton="none" @confirm="search" />
		<view class="h3">
			车务应用
		</view>
		<uni-card mode="basic">
			<view class="example-body uni-main-apply">
				<uni-grid :column="3" :show-border="false" :square="false" @change="change">
					<uni-grid-item v-if="index < 8" v-for="(item ,index) in trafficList" :index="index" :key="index">
						<view class="grid-item-box" @click="getDetail(item)">
							<image class="list-image" :src="item.url" mode="aspectFill" />
							<text class="list-text">{{item.text}}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</uni-card>
		<view class="h3">
			紧急应用
		</view>
		<uni-card mode="basic">
			<view class="example-body uni-main-apply">
				<uni-grid :column="3" :show-border="false" :square="false" @change="change">
					<uni-grid-item v-if="index < 8" v-for="(item ,index) in urgencyList" :index="index" :key="index">
						<view class="grid-item-box" @click="getDetail(item)">
							<image class="list-image" :src="item.url" mode="aspectFill" />
							<text class="list-text">{{item.text}}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</uni-card>
		<view class="h3">
			办公应用
		</view>
		<uni-card mode="basic">
			<view class="example-body uni-main-apply">
				<uni-grid :column="3" :show-border="false" :square="false" @change="change">
					<uni-grid-item v-if="index < 8" v-for="(item ,index) in officeList" :index="index" :key="index">
						<view class="grid-item-box" @click="getDetail(item)">
							<image class="list-image" :src="item.url" mode="aspectFill" />
							<text class="list-text">{{item.text}}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				trafficList: [{
						url: '/static/img/icon/carjiankong.png',
						text: '车辆监控',
					},
					{
						url: '/static/img/icon/yongche.png',
						text: '用车管理',
					},
					{
						url: '/static/img/icon/jiayou.png',
						text: '加油管理',
					},
					{
						url: '/static/img/icon/sanjian.png',
						text: '三检管理'
					}
				],
				urgencyList: [
					{
						url: '/static/img/icon/shigu.png',
						text: '事故上报'
					},
					{
						url: '/static/img/icon/baojing.png',
						text: '报警中心'
					},
				],
				officeList: [
					{
						url: '/static/img/icon/paiban.png',
						text: '排班管理',
					},
					{
						url: '/static/img/icon/reportCenter.png',
						text: '报表中心',
					},
				]
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 2
				})
			},
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			change(){
				
			},
			getDetail: function(item) {
				if (item.text == '三检管理') {
					uni.navigateTo({
						url: '/application/three_check/three_check'
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body{
		background-color: #fff;
	}
	.uni-main-apply .uni-grid-item {
		    width: 25%!important;
		    text-align: center;
	}
	uni-image{
		width: 50px;
		height: 50px;
	}
	.grid-item-box{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.uni-card{
		border-color: #fff;
		margin: 0;
	}
	.h3{
		font-size: 16px;
		margin: 20px 0 15px;
		padding-left: 20px;
		font-weight: bold;
	}
	.uni-card__content{
		padding: 0!important;
	}	
	
		
</style>
