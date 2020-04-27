<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" :border="false" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">三检</view>
			<view slot="right" class="icon-item" @click="clickSearch()">
				<text class="lg text-black" :class="'cuIcon-' + 'search'" style="font-size: 23px;"></text>
			</view>
		</uni-nav-bar>
		<scroll-view scroll-x class="bg-white nav text-center" scroll-with-animation :scroll-left="scrollLeft">
		<!-- <scroll-view scroll-x class="bg-white nav" :class="[tabArray.length<5?'text-center':'']" scroll-with-animation
		 :scroll-left="scrollLeft"> -->
			<view class="cu-item" :class="index==TabCur?'seletTab cur':''" v-for="(item,index) in tabArray" :key="index" @tap="tabSelect"
			 :data-id="index">
				<view style="height: 0px;" v-show="item.redPointTips">
					<view style="background-color: #FF7E55;width: 8px;height: 8px;margin: 0 0 0 auto;position: relative;left: 12px;top: 5px;border-radius: 4px;"></view>
				</view>
				{{item.name}}{{countArray[index]}}
			</view>
		</scroll-view>

		<view style="position: fixed;bottom: 0px;left: 0px;right: 0px;top: calc(93px + env(safe-area-inset-top));">
			<s-pull-scroll ref="pullScroll" :back-top="false" :pullDown="pullDown" :pullUp="loadData" :fixed="false">
				<ul style="padding-left: 0px;padding-right: 0px;">
					<li v-for="(item, index) in dataList" :key="index" @click="clickCell(item)">
						<view class="uni-flex uni-row" style="background-color: white;margin: 15px 15px 0 15px;border-radius: 5px;box-shadow: 0px 0px 20px rgba(0,0,0,0.18);">
							<view class="uni-flex uni-column" style="width: 100%;">
								<view style="text-align: right;height: 0px;" v-show="item.new">
									<view style="font-size: 11px;color: white;padding-right: 3.5px;height: 24px; width: 24px;border-radius: 0 5px 0 24px;background-color: #FF7E55;display: inline-block;position: relative;bottom: 3px;">新</view>
								</view>

								<view style="margin: 0 15px;">
									<view class="uni-flex uni-row" style="margin-top: 15px;color: #333333;font-size: 14px;">
										任务编号：{{item.taskName}}
									</view>
									<view class="uni-flex uni-row" style="margin-top: 12px;color: #333333;font-size: 14px;">
										车牌号：{{item.registrationNo}}
									</view>
									<view class="uni-flex uni-row" style="margin-top: 12px;color: #333333;font-size: 14px;">
										处理人：{{item.handleBy}}
									</view>
									<view class="uni-flex uni-row" style="margin-top: 12px;color: #333333;font-size: 14px;">
										备注：{{item.taskRemarks?item.taskRemarks:'无'}}
									</view>
									<view style="height: 1px;background-color: #E5E5E5;margin: 10px 0;"></view>
									<view class="uni-flex uni-row" style="justify-content: space-between;margin-bottom: 12px;">
										<view class="flex-item" style="color: #666666;font-size: 14px;">开始时间：{{item.taskStartTime}}</view>
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
										<view v-if="item.inspectState==5 || item.inspectState==4" class="uni-flex uni-row" style="justify-content: flex-end;">
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
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import list from '@/components/uni-list/uni-list.vue';
	import sPullScroll from '@/components/s-pull-scroll';
	import {
		getCtInspectListWap,
		getCtInspectListCountWap
	} from '@/common/api.js';
	export default {
		components: {
			uniIcons,
			list,
			sPullScroll
		},
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				isCar: true,
				inspectState: '',
				countArray: [],
				tabArray: [{
							"name": "全部",
							"redPointTips": 0,
						}, {
							"name": "待处理",
							"redPointTips": 0,
						}, {
							"name": "已处理",
							"redPointTips": 0,
						}, {
							"name": "已审核",
							"redPointTips": 0,
						}],
				dataList: []
			}
		},
		onShow: function() {
			this.refresh();
		},
		onLoad: function() {
			var _this = this;
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					if (res.data.isCar == 1) {
						_this.isCar = true;
					} else {
						_this.isCar = false;
						_this.tabArray = [{
							"name": "全部",
							"redPointTips": 0,
						}, {
							"name": "待指派",
							"redPointTips": 0,
						}, {
							"name": "待处理",
							"redPointTips": 0,
						}, {
							"name": "已处理",
							"redPointTips": 0,
						}, {
							"name": "已审核",
							"redPointTips": 0,
						}];
					}
				}
			});
			
			getCtInspectListCountWap({
				data: {}
			}).then(res => {
				console.log(res)
				var resultlast = res
				if (resultlast.success) {
					var allCount = 0;
					var daiZhiPaiCount = 0;
					var daiChuLiCount = 0;
					var yiChuLiCount = 0;
					var yiShenHeCount = 0;
					for (var i=0;i<resultlast.result.length;i++)
					{ 
						var obj = resultlast.result[i];
						if (obj.inspectState == 1) {
							allCount += obj.taskCount;
							daiZhiPaiCount = obj.taskCount;
						}else if (obj.inspectState == 2 || obj.inspectState == 3 || obj.inspectState == 4) {
							allCount += obj.taskCount;
							daiChuLiCount += obj.taskCount;
						}else if (obj.inspectState == 5) {
							allCount += obj.taskCount;
							yiChuLiCount = obj.taskCount;
						}else if (obj.inspectState == 6) {
							allCount += obj.taskCount;
							yiShenHeCount = obj.taskCount;
						}
					}
					if (_this.tabArray.length == 4) {
						_this.countArray = [allCount?allCount:"", daiChuLiCount?daiChuLiCount:"", yiChuLiCount?yiChuLiCount:"", yiShenHeCount?yiShenHeCount:""];
					}else{
						_this.countArray = [allCount?allCount:"", daiZhiPaiCount?daiZhiPaiCount:"", daiChuLiCount?daiChuLiCount:"", yiChuLiCount?yiChuLiCount:"", yiShenHeCount?yiShenHeCount:""];
					}
				} else {
					uni.showModal({
						content: resultlast.message,
						confirmText: "确定",
						cancelText: "取消"
					})
				}
			});
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				
				if (this.TabCur == 0) {
					this.inspectState = '';
				}else if (this.TabCur == 1) {
					this.inspectState = 1;
				}else if (this.TabCur == 2) {
					this.inspectState = 2;
				}else if (this.TabCur == 3) {
					this.inspectState = 5;
				}else if (this.TabCur == 4) {
					this.inspectState = 6;
				}
				this.refresh();
			},
			clickCell: function(item) {
				uni.navigateTo({
					url: 'three_check_detail?item=' + encodeURIComponent(JSON.stringify(item)),
				});
			},
			clickSearch: function() {
				uni.navigateTo({
					url: 'three_check_seacrh',
				});
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
		background-color: #F3F4F6;
		height: 100%;
	}

	.seletTab {
		color: #4ACF9A;
	}

	li {
		list-style: none;
	}
</style>
