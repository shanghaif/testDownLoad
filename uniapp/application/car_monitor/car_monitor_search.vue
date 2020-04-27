<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">搜索</view>
		</uni-nav-bar>
		<uni-search-bar bgColor="#F6F6F6" :radius="100" @confirm="search" placeholder="请输入关键词搜索" @input="input"></uni-search-bar>
		<view style="position: fixed;bottom: 0px;left: 0px;right: 0px;top: calc(94px + env(safe-area-inset-top));">
			<s-pull-scroll ref="pullScroll" :back-top="false" :pullUp="loadData" :fixed="false">
				<ul style="padding-left: 16px;padding-right: 16px;">
					<li v-for="(item, index) in dataList" :key="index">
						<view class="uni-flex uni-row" @click="clickItem(item)">
							<view class="uni-flex uni-column" style="width: 100%;">
								<view class="uni-flex uni-row" style="justify-content: space-between;margin-top: 12px;min-height: 30px;">
									<view class="flex-item">
										<label class="flex-item cell-left-title1">{{item.registrationNo}}</label>
										<label class="flex-item cell-left-title2">{{item.gt}}</label>
									</view>
									<view class="flex-item cell_right_title" v-bind:style="{color: (item.statusRun=='STOP'?'#FF7E55':(item.statusRun=='OFF_LINE'?'rgba(153, 153, 153, 1)':'#4ACF9A')),background: (item.statusRun=='STOP'?'rgba(255, 126, 85, 0.3)':(item.statusRun=='OFF_LINE'?'rgba(153, 153, 153, 0.3)':'rgba(74, 207, 154, 0.3)'))}">{{selectMenu==0?'运行':(selectMenu==2?'离线':'停止')}}</view>
								</view>
								<view class="uni-flex uni-row" style="justify-content: space-between;margin-bottom: 12px;">
									<view class="flex-item cell-detail-left-title">行驶里程:{{item.g}}km 速度:{{item.ang>315&&item.ang<45?'北':(item.ang>45&&item.ang<135?'东':(item.ang>135&&item.ang<225?'南':'西'))}}
										{{item.sp}}km/h</view>
									<view class="flex-item cell-detail-right-title">驾驶员:{{item.driverName?item.driverName:'未绑定'}}</view>
								</view>
								<view style="width: 100%;height: 1px;background-color: rgba(0,0,0,0.05);"></view>
							</view>
						</view>
					</li>
				</ul>
			</s-pull-scroll>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue';
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import sPullScroll from '@/components/s-pull-scroll';
	import {getStatusSum,getCarByStatus} from '@/common/api.js'
	export default {
		components: {
			uniIcons,
			uniSearchBar,
			sPullScroll
		},
		data() {
			return {
				searchString:"",
				dataList: []
			}
		},
		onLoad: function() {
			
		},
		methods: {
			back: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			input: function(s) {
				this.searchString = s.value;
				this.refresh();
			},
			//上下拉刷新组件
			refresh() {
				this.$nextTick(() => {
					this.$refs.pullScroll.refresh();
				});
			},
			pullDown(pullScroll) {
				this.loadData(pullScroll);
			},
			loadData(pullScroll) {
				var param = {
					status: 'TRAVEL',
					pageNo: pullScroll.page,
					pageSize: 10,
					keyword: this.searchString
				} 
				getCarByStatus({data:param}).then(res => {
					console.log(res)
					var resultlast = res
					if (resultlast.success) {
						
						if (pullScroll.page == 1) {
							this.dataList = res.data;
						}else{
							this.dataList = this.dataList.concat(res.data);
						}
						pullScroll.success();
						
						// if (this.list.length > 60) {
						// 	pullScroll.finish(this.list.length > 5);
						// } else {
						// 	pullScroll.success();
						// }
					}else{
						uni.showModal({
							content: resultlast.message,
							confirmText: "确定",
							cancelText: "取消"
						})
					}
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
	li {
		list-style:none;
	}
	
	.cell-left-title1 {
		font-size: 16px;
		font-weight: 400;
	}
	
	.cell-left-title2 {
		margin-left: 10px;
		color: rgba(0, 0, 0, 0.4);
		font-size: 12px;
	}
	
	.cell_right_title {
		color: #4ACF9A;
		background-color: rgba(74, 207, 154, 0.3);
		height: 16px;
		border-radius: 12.5px;
		font-size: 12px;
		width: 58px;
		text-align: center;
		margin-top: 4px;
		line-height: 16px;
	}
	
	.cell-detail-left-title {
		color: rgba(0, 0, 0, 0.5);
		font-size: 12px;
	}
	
	.cell-detail-right-title {
		color: rgba(0, 0, 0, 0.5);
		font-size: 12px;
	}
</style>
