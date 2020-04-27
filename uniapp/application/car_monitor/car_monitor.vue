<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" :border="false" background-color="#477DEF" color="#FFFFFF"
		 @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">车辆监控</view>
			<view slot="right" class="icon-item" @click="clickSearch()">
				<text class="lg text-white" :class="'cuIcon-' + 'search'" style="font-size: 23px;"></text>
			</view>
		</uni-nav-bar>
		<view style="width: 100%;height: 240px;">
			<view style="position: fixed;z-index: 1;width: 100%;height: 240px;background-image: url(../../static/img/car_monitor/car_monitor_bg.png);background-size: 100% 99.9%;background-repeat: no-repeat;">
				<cCircle style="padding-top: 20px;" :size="160" :percent="60" :animation="true" :animationSpeed="10" :circleWidth="8"
				 :direction="185" defaultColor="rgba(255,255,255,0.5)" circleColor="white" :clockwise="false">
					<view slot="content" style="text-align: center;height: 40px;padding-top: 36px;font-size: 40px;color: white;">{{all_count}}</view>
					<view slot="content" style="text-align: center;height: 30%;font-size: 16px;color: white;padding-top: 48px;">车辆总数</view>
				</cCircle>
				<view class="uni-flex uni-row">
					<view class="text list-menu" v-bind:class="{select_list_menu:selectMenu==0}" @click="clickMenu(0)">
						<text class="lg text-white" :class="'cuIcon-' + 'global'" style="font-size: 18px;color: rgba(255,255,255,0.6);"></text>
						<text style="font-size: 15px;color: rgba(255,255,255,0.6);position: relative;margin: 0 4px;bottom: 1.5px;">{{TRAVEL}}</text>
						<text style="font-size: 18px;color: rgba(255,255,255,0.6);">{{TRAVEL_count}}</text>
					</view>
					<view class="text list-menu" v-bind:class="{select_list_menu:selectMenu==1}" @click="clickMenu(1)">
						<text class="lg text-white" :class="'cuIcon-' + 'cardboardforbid'" style="font-size: 18px;color: rgba(255,255,255,0.6);"></text>
						<text style="font-size: 15px;color: rgba(255,255,255,0.6);position: relative;margin: 0 4px;bottom: 1.5px;">{{STOP}}</text>
						<text style="font-size: 18px;color: rgba(255,255,255,0.6);">{{STOP_count}}</text>
					</view>
					<view class="text list-menu" v-bind:class="{select_list_menu:selectMenu==2}" @click="clickMenu(2)">
						<text class="lg text-white" :class="'cuIcon-' + 'all'" style="font-size: 18px;color: rgba(255,255,255,0.6);"></text>
						<text style="font-size: 15px;color: rgba(255,255,255,0.6);position: relative;margin: 0 4px;bottom: 1.5px;">{{OFF_LINE}}</text>
						<text style="font-size: 18px;color: rgba(255,255,255,0.6);">{{OFF_LINE_count}}</text>
					</view>
				</view>
				<view class="uni-flex uni-row">
					<view style="flex: 1 1 0%;">
						<view class="text list-menu-line" v-bind:class="{select_line:selectMenu==0}">
						</view>
					</view>
					<view style="flex: 1 1 0%;text-align: center;">
						<view class="text list-menu-line" v-bind:class="{select_line:selectMenu==1}">
						</view>
					</view>
					<view style="flex: 1 1 0%;text-align: center;">
						<view class="text list-menu-line" v-bind:class="{select_line:selectMenu==2}">
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view style="position: fixed;bottom: 0px;left: 0px;right: 0px;top: calc(284px + env(safe-area-inset-top));">
		<s-pull-scroll ref="pullScroll" :back-top="false" :pullDown="pullDown" :pullUp="loadData" :fixed="false">
			<ul style="padding-left: 16px;padding-right: 16px;">
				<li v-for="(item, index) in dataList" :key="index"><view class="uni-flex uni-row" @click="clickItem(item)">
					<view class="uni-flex uni-column" style="width: 100%;">
						<view class="uni-flex uni-row" style="justify-content: space-between;margin-top: 12px;min-height: 30px;">
							<view class="flex-item">
								<label class="flex-item cell-left-title1">{{item.registrationNo}}</label>
								<label class="flex-item cell-left-title2">{{item.gt}}</label>
							</view>
							<view class="flex-item cell_right_title" v-bind:style="{color: (item.statusRun=='STOP'?'#FF7E55':(item.statusRun=='OFF_LINE'?'rgba(153, 153, 153, 1)':'#4ACF9A')),background: (item.statusRun=='STOP'?'rgba(255, 126, 85, 0.3)':(item.statusRun=='OFF_LINE'?'rgba(153, 153, 153, 0.3)':'rgba(74, 207, 154, 0.3)'))}">{{selectMenu==0?'运行':(selectMenu==2?'离线':'停止')}}</view>
						</view>
						<view class="uni-flex uni-row" style="justify-content: space-between;margin-bottom: 12px;">
							<view class="flex-item cell-detail-left-title">行驶里程:{{item.g}}km  速度:{{item.ang>315&&item.ang<45?'北':(item.ang>45&&item.ang<135?'东':(item.ang>135&&item.ang<225?'南':'西'))}} {{item.sp}}km/h</view>
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
	import cCircle from "../../components/Your_Exios-Circle.vue";
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import list from '@/components/uni-list/uni-list.vue';
	import constant from '@/common/constant.js';
	import {getStatusSum,getCarByStatus} from '@/common/api.js'
	import sPullScroll from '@/components/s-pull-scroll';
	export default {
		components: {
			uniIcons,
			cCircle,
			list,
			sPullScroll
		},
		data() {
			return {
				TRAVEL: '运行',
				STOP: '停止',
				OFF_LINE: '离线',
				TRAVEL_count: '',
				STOP_count: '',
				OFF_LINE_count: '',
				all_count: 0,
				selectMenu: 0,
				dataList: []
			}
		},
		onLoad: function(option) {
			var statusRun = option.statusRun
			if (statusRun === 'TRAVEL') {
				this.clickMenu(0)
			}
			else if (statusRun === 'STOP') {
				this.clickMenu(1)
			}
			else if (statusRun === 'OFF_LINE') {
				this.clickMenu(2)
			}
			var arr = this.getConstant().statusRun;
			for (var i=0;i<arr.length;i++){ 
			    var item = arr[i];
				if (i==0){
					this.TRAVEL = item.desc;
				}else if (i==1){
					this.STOP = item.desc;
				}else if (i==2){
					this.OFF_LINE = item.desc;
				}
			}
			getStatusSum().then(res => {
				console.log(res)
				var resultlast = res
				if (resultlast.success) {
					this.TRAVEL_count = resultlast.result[0].lineSum > 0?resultlast.result[0].lineSum:"";
					this.STOP_count = resultlast.result[0].stopSum > 0?resultlast.result[0].stopSum:"";
					this.OFF_LINE_count = resultlast.result[0].travelSum > 0?resultlast.result[0].travelSum:"";
					this.all_count = Number(resultlast.result[0].lineSum)+Number(resultlast.result[0].stopSum)+Number(resultlast.result[0].travelSum);
				}else{
					uni.showModal({
						content: resultlast.message,
						confirmText: "确定",
						cancelText: "取消"
					})
				}
			});
			this.refresh();
		},
		methods: {
			back: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			clickSearch: function() {
				uni.navigateTo({
					url: 'car_monitor_search',
				});
			},
			clickMenu: function(i) {
				this.selectMenu = i;
				this.refresh();
			},
			getConstant () {
				return constant;
			},
			clickItem (item) {
				uni.navigateTo({
					url: '/application/car_monitor/Map?id=' + item.id
				});
				// debugger
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
					status: this.selectMenu==0?'TRAVEL':(this.selectMenu==2?'OFF_LINE':'STOP'),
					pageNo: pullScroll.page,
					pageSize: 10,
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

	/*选中状态背景颜色*/
	switch>>>.uni-switch-input::after,
	switch>>>.wx-switch-input.wx-switch-input-checked::after,
	switch>>>.uni-switch-input.uni-switch-input-checked::after {
		background-color: #FF8B74;
	}

	switch::after,
	switch::before {
		content: "";
	}

	/*未选中状态背景颜色*/
	switch>>>.uni-switch-input {
		background-color: #FFFFFF !important;
		border-color: #FFFFFF !important;
	}

	/*ios背景没变色*/
	switch>>>.wx-switch-input:not([class*="bg-"]),
	switch>>>.uni-switch-input:not([class*="bg-"]) {
		background: #FFFFFF !important;
	}

	switch>>>.uni-switch-input.uni-switch-input-checked {
		background-color: rgba(255, 255, 255, 0.7) !important;
		border-color: rgba(255, 255, 255, 0.7) !important;
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

	.drawer_button {
		width: 122px;
		height: 29px;
		font-size: 12px;
		border-radius: 14.5px;
	}

	.drawer_button::after {
		border-width: 0;
	}

	.drawer_button[type="primary"] {
		background-color: #21D59D;
	}

	.drawer_button[type="default"] {
		color: #666666;
	}


	.button-view {
		margin-bottom: 20px;
	}

	.menuBottomView button {
		width: 50%;
		background-color: white;
		border-radius: 0;
		border-color: #E6E6E6;
		font-size: 17px;
	}

	.menuBottomView button::after {
		border-radius: 0;
		border-color: #E6E6E6;
		font-size: 17px;
	}
	
	.list-menu {
		text-align: center;
		color: white;
		flex: 1 1 0%;
	}
	
	.list-menu-line {
		width: 40px;
		height: 2px;
		background-color: rgba(255,255,255,0);
		border-radius: 1px;
		margin: 0 auto;
	}
	
	.select_list_menu>text {
		color: white !important;
	}
	
	.select_line {
		background-color: white;
	}
</style>
