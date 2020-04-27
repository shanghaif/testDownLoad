<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">搜索</view>
		</uni-nav-bar>
		<uni-search-bar bgColor="#F6F6F6" :radius="100" @confirm="search" placeholder="请输入关键词搜索" @input="input"></uni-search-bar>
		<view style="position: fixed;bottom: 0px;left: 0px;right: 0px;top: calc(94px + env(safe-area-inset-top));">
			<s-pull-scroll ref="pullScroll" :back-top="false" :pullUp="loadData" :fixed="false">
				<ul style="padding-left: 0px;padding-right: 0px;">
					<li v-for="(item, index) in dataList" :key="index" @click="clickCell(item)">
						<view class="uni-flex uni-row" style="background-color: white;margin: 15px 15px 0 15px;border-radius: 5px;box-shadow: 0px 0px 20px rgba(0,0,0,0.18);">
							<view class="uni-flex uni-column" style="width: 100%;">
								<view style="text-align: right;height: 0px;" v-show="item.new">
									<view style="font-size: 11px;color: white;padding-right: 3.5px;height: 24px; width: 24px;border-radius: 0 5px 0 24px;background-color: #FF7E55;display: inline-block;position: relative;bottom: 3px;">新</view>
								</view>
				
								<view style="margin: 0 15px;">
									<view class="uni-flex uni-row" style="margin-top: 15px;color: #333333;font-size: 14px;">
										任务编号：{{item.inspectCarId}}
									</view>
									<view class="uni-flex uni-row" style="margin-top: 12px;color: #333333;font-size: 14px;">
										处理人：{{item.name}}
									</view>
									<view class="uni-flex uni-row" style="margin-top: 12px;color: #333333;font-size: 14px;">
										备注：{{item.taskRemarks?item.taskRemarks:'无'}}
									</view>
									<view style="height: 1px;background-color: #E5E5E5;margin: 10px 0;"></view>
									<view class="uni-flex uni-row" style="justify-content: space-between;margin-bottom: 12px;">
										<view class="flex-item" style="color: #666666;font-size: 14px;">下发时间：{{item.taskStartTime}}</view>
										<view v-if="item.inspectState==2" class="uni-flex uni-row" style="justify-content: flex-end;">
											<text class="lg text-black" :class="'cuIcon-' + 'time'" style="font-size: 14px;color: #4ACF9A;margin-right: 4px;"></text>
											<view class="flex-item" style="color: #4ACF9A;font-size: 14px;">未处理</view>
										</view>
										<view v-if="item.inspectState==3" class="uni-flex uni-row" style="justify-content: flex-end;">
											<text class="lg text-black" :class="'cuIcon-' + 'roundclose'" style="font-size: 14px;color: #FC3D2F;margin-right: 4px;"></text>
											<view class="flex-item" style="color: #FC3D2F;font-size: 14px;">已驳回</view>
										</view>
										<view v-if="item.inspectState==6" class="uni-flex uni-row" style="justify-content: flex-end;">
											<text class="lg text-black" :class="'cuIcon-' + 'roundcheck'" style="font-size: 14px;color: #999999;margin-right: 4px;"></text>
											<view class="flex-item" style="color: #999999;font-size: 14px;">已审核</view>
										</view>
										<view v-if="item.inspectState==5" class="uni-flex uni-row" style="justify-content: flex-end;">
											<text class="lg text-black" :class="'cuIcon-' + 'text'" style="font-size: 14px;color: #3A7AFF;margin-right: 4px;"></text>
											<view class="flex-item" style="color: #3A7AFF;font-size: 14px;">已处理</view>
										</view>
										<view v-if="item.inspectState==1" class="uni-flex uni-row" style="justify-content: flex-end;">
											<text class="lg text-black" :class="'cuIcon-' + 'pick'" style="font-size: 14px;color: #FF7E55;margin-right: 4px;"></text>
											<view class="flex-item" style="color: #FF7E55;font-size: 14px;">待指派</view>
										</view>
									</view>
								</view>
				
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
	import {getCtInspectListWap} from '@/common/api.js'
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
					dataName: this.searchString,
					inspectState: this.inspectState,
					pageNo: pullScroll.page,
					pageSize: 10,
				}
				getCtInspectListWap({
					data: param
				}).then(res => {
					console.log(res)
					var resultlast = res
					if (resultlast.success) {
				
						if (pullScroll.page == 1) {
							this.dataList = res.data;
						} else {
							this.dataList = this.dataList.concat(res.data);
						}

						if (this.dataList.length == res.count) {
							pullScroll.finish(true);
						} else {
							pullScroll.success();
						}
					} else {
				
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
