<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">任务详情</view>
			<!-- <view slot="right" class="icon-item" @click="clickSearch()">
				关闭
			</view> -->
		</uni-nav-bar>
		<view class="uni-flex uni-row" style="justify-content: space-between;background-color: white;">
			<view class="flex-item" style="color: #000000;font-size: 17px;margin: 13px 20px;">任务编号：{{baseInfo.taskName}}</view>
			<view v-if="baseInfo.inspectState==0" class="uni-flex uni-row" style="margin: auto 12px;">
				<text class="lg text-black" :class="'cuIcon-' + 'time'" style="font-size: 14px;color: #4ACF9A;margin-right: 4px;"></text>
				<view class="flex-item" style="color: #4ACF9A;font-size: 14px;">未处理</view>
			</view>
			<view v-if="baseInfo.inspectState==1" class="uni-flex uni-row" style="margin: auto 12px;">
				<text class="lg text-black" :class="'cuIcon-' + 'time'" style="font-size: 14px;color: #FC3D2F;margin-right: 4px;"></text>
				<view class="flex-item" style="color: #FC3D2F;font-size: 14px;">已驳回</view>
			</view>
			<view v-if="baseInfo.inspectState==2" class="uni-flex uni-row" style="margin: auto 12px;">
				<text class="lg text-black" :class="'cuIcon-' + 'time'" style="font-size: 14px;color: #999999;margin-right: 4px;"></text>
				<view class="flex-item" style="color: #999999;font-size: 14px;">已审核</view>
			</view>
			<view v-if="baseInfo.inspectState==3" class="uni-flex uni-row" style="margin: auto 12px;">
				<text class="lg text-black" :class="'cuIcon-' + 'time'" style="font-size: 14px;color: #3A7AFF;margin-right: 4px;"></text>
				<view class="flex-item" style="color: #3A7AFF;font-size: 14px;">已处理</view>
			</view>
			<view v-if="baseInfo.inspectState==4" class="uni-flex uni-row" style="margin: auto 12px;">
				<text class="lg text-black" :class="'cuIcon-' + 'time'" style="font-size: 14px;color: #FF7E55;margin-right: 4px;"></text>
				<view class="flex-item" style="color: #FF7E55;font-size: 14px;">待指派</view>
			</view>
		</view>
		<view style="height: 9px;background-color: #F3F4F6;"></view>
		<view style="background-color: white;">
			<view class="text uni-flex" style="margin-left: 20px;padding-top: 13px;flex: 1 1 0%;align-items: center;">
				<text class="lg text-black" :class="'cuIcon-' + 'newshot'" style="font-size: 20px;color: #4ACF9A;margin-right: 6px;"></text>
				<view class="flex-item" style="color: #333333;font-size: 15px;">任务信息</view>
			</view>
			<view class="text uni-flex" style="margin-left: 20px;margin-top: 10px;flex: 1 1 0%;align-items: center;">
				<view class="flex-item" style="color: #999999;font-size: 14px;margin-right: 20px;width: 56px;">处理人</view>
				<view class="flex-item" style="color: #333333;font-size: 14px;">{{baseInfo.handleBy}}</view>
			</view>
			<view class="text uni-flex" style="margin-left: 20px;margin-top: 10px;flex: 1 1 0%;align-items: center;">
				<view class="flex-item" style="color: #999999;font-size: 14px;margin-right: 20px;">车牌号</view>
				<view class="flex-item" style="color: #333333;font-size: 14px;">{{baseInfo.registrationNo}}</view>
			</view>
			<view class="text uni-flex" style="margin-left: 20px;margin-top: 10px;flex: 1 1 0%;align-items: center;">
				<view class="flex-item" style="color: #999999;font-size: 14px;margin-right: 20px;">开始时间</view>
				<view class="flex-item" style="color: #333333;font-size: 14px;">{{baseInfo.taskStartTime}}</view>
			</view>
			<view class="text uni-flex" style="margin-left: 20px;margin-top: 10px;flex: 1 1 0%;align-items: center;">
				<view class="flex-item" style="color: #999999;font-size: 14px;margin-right: 20px;">结束时间</view>
				<view class="flex-item" style="color: #333333;font-size: 14px;">{{baseInfo.taskEndTime}}</view>
			</view>
			<view style="height: 0.5px;background:#E5E5E5;margin: 10px 20px 0 20px;"></view>
			<view class="text uni-flex" style="margin-left: 20px;margin-top: 10px;flex: 1 1 0%;align-items: center;">
				<view class="flex-item" style="color: #999999;font-size: 14px;margin-right: 20px;">备注内容</view>
			</view>
			<view class="text uni-flex" style="margin-left: 20px;padding-bottom: 15px;flex: 1 1 0%;align-items: center;">
				<view class="flex-item" style="color: #333333;font-size: 14px;">{{baseInfo.taskRemarks?baseInfo.taskRemarks:"此任务暂无备注内容"}}</view>
			</view>
		</view>
		<view style="height: 9px;background-color: #F3F4F6;padding-bottom: 16px;"></view>
		<view style="background-color: white;padding-bottom: 100px;">
			<view class="text uni-flex" style="margin-left: 20px;padding-top: 13px;flex: 1 1 0%;align-items: center;">
				<text class="lg text-black" :class="'cuIcon-' + 'text'" style="font-size: 20px;color: #4ACF9A;margin-right: 6px;"></text>
				<view class="flex-item" style="color: #333333;font-size: 15px;">任务明细</view>
			</view>

			<view v-for="(item, index) in this.keyArray" :key="index">
				<view class="text uni-flex" style="margin-left: 20px;padding-top: 13px;flex: 1 1 0%;align-items: center;">
					
					<view style="height: 0;width: 0px;">
						<view style="width: 2px;height: 53px;background-color: #EAEAEA;position: relative;left: 9px;top: 10px;"></view>
					</view>
					
					<view class="text uni-flex" style="margin-right: 6px;background-color: rgba(74, 207, 154, 0.15);width: 20px;height: 20px;align-items: center;border-radius: 10px;">
						<view style="background-color: #4ACF9A;width: 8px;height: 8px;margin: auto;border-radius: 4px;"></view>
					</view>
					<view class="flex-item" style="color: #333333;font-size: 15px;">{{getInspectTypeName(item.toString())}}</view>
				</view>
				<view class="text uni-flex" style="margin-left: 20px;padding-top: 6px;flex: 1 1 0%;align-items: center;" @click="openDetailView(item)">
					<view class="flex-item" style="color: #CCCCCC;font-size: 14px;margin-left: 26px;">有{{taskDetails[item.toString()]}}项任务待处理</view>
					<text class="lg text-black" :class="'cuIcon-' + 'pullright'" style="font-size: 15px;color: #4ACF9A;margin-left: 6px;"></text>
				</view>
			</view>

		</view>
	
		<view :style="{display: (showBottomButton()?'block':'none')}" class="menuBottomView" style="background-color: rgba(0,0,0,0);position: fixed;left: 0px;right: 0;bottom: 0;height: 43px;margin-bottom: 20px;">
			<button type="primary" style="margin: 0 20px;" @click="clickBottomButton()">{{this.isCar?"处理任务":"指派任务"}}</button>
		</view>

		<uni-popup ref="popup" type="bottom">
			<view style="height: 285.5px;background-color: white;border-radius: 10px 10px 0 0;">
				<view class="text uni-flex" style="margin-left: 56.5px;padding-top: 30px;flex: 1 1 0%;align-items: center;">
					<view class="flex-item" style="color: #333333;font-size: 15px;line-height: normal;">{{getInspectTypeName(this.selectItem.toString())}}</view>
				</view>
				<view class="text uni-flex" style="margin-left: 56.5px;padding-top: 6px;flex: 1 1 0%;align-items: center;" @click="openDetailView()">
					<view class="flex-item" style="color: #CCCCCC;font-size: 14px;">有{{taskDetails[this.selectItem.toString()]}}项任务待处理</view>
				</view>
				
				<view v-for="(item, index) in this.getArrayForInspectTypeId(this.selectItem)" :style="{'padding-top':(index==0?13+'px':30+'px')}" class="text uni-flex" style="margin-left: 38px;flex: 1 1 0%;align-items: center;">
					<view class="flex-item" style="color: #333333;font-size: 15px;line-height: normal;">{{item.inspectTypefatherName}}</view>
					<view style="height: 0;width: 0px;">
						<view style="width: 2px;height: 33px;background-color: #EAEAEA;position: relative;left: 12px;top: 10px;"></view>
					</view>
					<view class="text uni-flex" style="margin-left: 7px;background-color: #4ACF9A;width: 12px;height: 12px;align-items: center;border-radius: 6px;">
						<view style="background-color: white;width: 5px;height: 5px;margin: auto;border-radius: 2.5px;"></view>
					</view>
					<view class="flex-item" style="color: #CCCCCC;font-size: 14px;margin-left: 20px;">{{item.contentName}}</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	import {
		getCtInspectInfoWap
	} from '@/common/api.js';
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				baseInfo: {},
				dataArray: [],
				dataDetailArray: [],
				taskDetails: {},
				keyArray: [],
				selectItem: "",
				isCar: true
			}
		},
		onLoad: function(item) {
			this.baseInfo = JSON.parse(decodeURIComponent(item.item));
			console.log(this.baseInfo);
			var _this = this;
			var param = {
				inspectCarId: this.baseInfo.inspectCarId
			}
			getCtInspectInfoWap({
				data: param
			}).then(res => {
				console.log(res)
				var resultlast = res
				if (resultlast.success) {
					_this.filterData(resultlast.result);
					_this.dataArray = resultlast.result;
				} else {
					uni.showModal({
						content: resultlast.message,
						confirmText: "确定",
						cancelText: "取消"
					})
				}
			});
			
			var _this = this;
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					if (res.data.isCar == 1) {
						_this.isCar = true;
					} else {
						_this.isCar = false;
					}
				}
			});
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			showBottomButton: function(){
				
					if (this.isCar ) {
						if (this.baseInfo.inspectState==2 || this.baseInfo.inspectState==3) {
							return true;
						}else{
							return false;
						}
					}else{
						if (this.baseInfo.inspectState==1) {
							return true;
						}else{
							return false;
						}
					}
			},
			openDetailView(item) {
				this.selectItem = item;
				this.dataDetailArray = [];
				for (var i=0;i<this.dataArray.length;i++){
					var obj = this.dataArray[i];
					if (obj.inspectTypeId == item){
						this.dataDetailArray.push(obj);
					}
				}
				
				this.$refs.popup.open();
			},
			clickBottomButton: function() {
				if (this.isCar) {
					uni.navigateTo({
						url: 'three_check_feekback?dataArray=' + encodeURIComponent(JSON.stringify(this.dataArray)) + '&baseInfo=' + encodeURIComponent(JSON.stringify(this.baseInfo)),
					});
				}else{
					uni.navigateTo({
						url: 'three_check_selectPeople?item=' + encodeURIComponent(JSON.stringify(this.baseInfo)),
					});
				}
			},
			getInspectTypeName(item) {
				
				for (var i in this.dataArray) {
					var obj = this.dataArray[i];
					if (item == obj.inspectTypeId) {
						return obj.inspectTypeName;
					}
				}
			},
			getArrayForInspectTypeId(item) {
				var array = [];
				for (var i in this.dataArray) {
					var obj = this.dataArray[i];
					if (item == obj.inspectTypeId) {
						array.push(obj);
					}
				}
				return array
			},
			getCount(item) {
				return Object.keys(this.taskDetails).sort();
			},
			arrHasValue(v, arr) {
				var output = false;
				for (var i in arr) {
					if (v == arr[i]) {
						output = true;
						return output;
					}
				}
				output = false;
				return output;
			},
			filterData: function(OArray) {
				
				for (var i=0;i<OArray.length;i++)
				{
					var obj = OArray[i];
					var res = Object.keys(this.taskDetails).sort(); 
					if (this.arrHasValue(obj.inspectTypeId, res)){
						this.taskDetails[obj.inspectTypeId] += 1;
					}else{
						this.taskDetails[obj.inspectTypeId] = 1;
						this.keyArray.push(obj.inspectTypeId);
					}
				}
			}
		}
	}
</script>

<style>
	.content {
		height: 100%;
		background-color: white;
	}

	.menuBottomView button {
		background-color: #4ACF9A;
		border-radius: 21.5px;
		font-size: 17px;
	}

	.menuBottomView button::after {
		border-radius: 21.5px;
		font-size: 17px;
	}

	.button-hover[type=primary] {
		background-color: rgba(74, 207, 154, 0.3);
	}
</style>
