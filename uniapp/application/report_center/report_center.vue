<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" :border="false" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">报表中心</view>
			<view slot="right" class="icon-item">
				<text class="lg text-black" :class="'cuIcon-' + 'search'" style="font-size: 23px;" @click="clickSearch()"></text>
				<text class="lg text-black" :class="'cuIcon-' + 'filter'" style="font-size: 23px;padding-right: 10px;margin-left: 10px;"
				 @click="clickFilter()"></text>
			</view>
		</uni-nav-bar>

		<view style="position: fixed;bottom: 0px;left: 0px;right: 0px;top: calc(44px + env(safe-area-inset-top));">
			<s-pull-scroll ref="pullScroll" :back-top="false" :pullDown="pullDown" :pullUp="loadData" :fixed="false">
				<ul style="padding-left: 16px;padding-right: 16px;">
					<li v-for="(item, index) in dataList2" :key="index">
						<view class="uni-flex uni-row" @click="clickItem(item)">
							<view class="text uni-flex">
								<image src="http://img.mukewang.com/52b4113500018cf102000200.jpg" class="cellImage"></image>
							</view>
							<view class="uni-flex uni-column" style="width: 100%;margin: 10px auto;">
								<view class="uni-flex uni-row" style="justify-content: space-between;min-height: 42px;">
									<view class="flex-item cell-left-title">{{item.title}}</view>
									<view class="flex-item cell_right_title_low" v-if="item.finish < 0.33">{{item.type}}</view>
									<view class="flex-item cell_right_title_high" v-else-if="item.finish > 0.66">{{item.type}}</view>
									<view class="flex-item cell_right_title_medium" v-else>{{item.type}}</view>
								</view>
								<view class="flex-item cell-detail-left-title">已阅读 {{item.finish*100}} %</view>
								<view class="flex-item cell-detail-right-title">{{item.time}}</view>
							</view>
							<view style="height: 1px;background-color: rgb(255);"></view>
						</view>
					</li>
				</ul>
			</s-pull-scroll>
		</view>
		<uni-drawer mode="right" width="288" :visible=showMenu @close="closeMenu()">
			<view style="padding:30rpx;margin-top: env(safe-area-inset-top);">
				<view class="uni-title" style="font-size: 19px;margin-top: 0px;">报警类型</view>
			</view>
			<view class="uni-flex uni-row button-view" style="justify-content: space-between;">
				<button class="drawer_button" v-if="selectMenu===1" type="primary" @click="clickMenu(1)">超速报警</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(1)">超速报警</button>
				<button class="drawer_button" v-if="selectMenu===2" type="primary" @click="clickMenu(2)">断电报警</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(2)">断电报警</button>
			</view>
			<view class="uni-flex uni-row button-view" style="justify-content: space-between;">
				<button class="drawer_button" v-if="selectMenu===3" type="primary" @click="clickMenu(3)">疲劳报警</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(3)">疲劳报警</button>
				<button class="drawer_button" v-if="selectMenu===4" type="primary" @click="clickMenu(4)">终端拆除报警</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(4)">终端拆除报警</button>
			</view>
			<view class="uni-flex uni-row button-view" style="justify-content: space-between;">
				<button class="drawer_button" v-if="selectMenu===9" type="primary" @click="clickMenu(9)">非工作时间用车报警</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(9)">非工作时间用车报警</button>
				<button class="drawer_button" v-if="selectMenu===0" type="primary" @click="clickMenu(0)">全部</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(0)">全部</button>
			</view>

			<view style="padding:30rpx;margin-top: 20px;">
				<view class="uni-title" style="font-size: 19px;margin-top: 0px;">报表时间</view>
			</view>

			<view class="uni-flex uni-row">
				<view style="flex: 1 1 0%;text-align: center;" v-bind:class="{select_list_menu:selectTimeMenu==0}" @click="clickTimeMenu(0)">
					<text style="font-size: 15px;color: #999999;margin: 0 4px;">当天</text>
				</view>
				<view style="flex: 1 1 0%;text-align: center;" v-bind:class="{select_list_menu:selectTimeMenu==1}" @click="clickTimeMenu(1)">
					<text style="font-size: 15px;color: #999999;margin: 0 4px;">当周</text>
				</view>
				<view style="flex: 1 1 0%;text-align: center;" v-bind:class="{select_list_menu:selectTimeMenu==2}" @click="clickTimeMenu(2)">
					<text style="font-size: 15px;color: #999999;margin: 0 4px;">当月</text>
				</view>
			</view>

			<view style="margin-left: 14px;font-size: 14px;color: #4ACF9A;margin-top: 10px;">开始时间</view>
			<view style="height: 1px;background-color: rgba(0,0,0,0.05);margin-left: 14px;"></view>
			<view style="border:1px solid rgba(0,0,0,0.05);height: 39px;border-radius: 4px;margin:14px;justify-content: space-between;padding: 0 8px;"
			 class="uni-flex uni-row">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<text style="color: #666666;font-size: 14px;line-height: 39px;">{{date}}</text>
				</picker>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
					<text style="color: #666666;font-size: 14px;line-height: 39px;">{{time}}</text>
				</picker>
			</view>
			<view style="margin-left: 14px;font-size: 14px;color: #4ACF9A;margin-top: 10px;">结束时间</view>
			<view style="height: 1px;background-color: rgba(0,0,0,0.05);margin-left: 14px;"></view>
			<view style="border:1px solid rgba(0,0,0,0.05);height: 39px;border-radius: 4px;margin:14px;justify-content: space-between;padding: 0 8px;"
			 class="uni-flex uni-row">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<text style="color: #666666;font-size: 14px;line-height: 39px;">{{date}}</text>
				</picker>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
					<text style="color: #666666;font-size: 14px;line-height: 39px;">{{time}}</text>
				</picker>

			</view>

			<view class="uni-flex uni-row menuBottomView" style="justify-content: space-between;position: fixed;bottom: 0px;left: 0px;right: 0px;">
				<button style="color: #999999;" @click="clickReset">重置</button>
				<button style="color: #666666;" @click="clickSure">确定</button>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue";
	import sPullScroll from '@/components/s-pull-scroll';
	export default {
		components: {
			uniDrawer,
			uniIcons,
			sPullScroll
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				showMenu: false,
				dataList: [],
				selectMenu: 0,
				date: currentDate,
				time: '12:01',
				selectTimeMenu: 0,
				dataList2: [{
					title: "班组长如何当好兵头将尾",
					finish: '0.7',
					time: '03:20',
					type: '行车报表',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "标准化作业——岗位安全要素",
					finish: '0.32',
					time: '03:20',
					type: '停车报表',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "危害辨识由谁来做一",
					finish: '0.59',
					time: '03:20',
					type: '里程报表',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "工伤待遇计算器",
					finish: '0.96',
					time: '03:20',
					type: '里程报表',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "让培训鲜活起来",
					finish: '0.60',
					time: '03:20',
					type: '里程报表',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "班组长如何当好兵头将尾",
					finish: '0.22',
					time: '03:20',
					type: 'pdf',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "主要安全生产法规及内容",
					finish: '0.88',
					time: '03:20',
					type: 'video',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}]
			}
		},
		onLoad: function() {

		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
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
			clickFilter: function() {
				this.showMenu = true;
			},
			closeMenu: function() {
				this.showMenu = false;
			},
			clickMenu: function(item) {
				this.selectMenu = item;
			},
			clickReset: function() {
				this.selectMenu = 0;
				this.showMenu = false;
			},
			clickSure: function() {
				this.showMenu = false;
			},
			clickTimeMenu: function(i) {
				this.selectTimeMenu = i;
			},

			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			},
			getDate: function(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},

			//上下拉刷新组件
			refresh: function() {
				this.$nextTick(() => {
					this.$refs.pullScroll.refresh();
				});
			},
			pullDown: function(pullScroll) {
				this.loadData(pullScroll);
			},
			loadData: function(pullScroll) {
				var param = {
					status: this.selectMenu == 0 ? 'TRAVEL' : (this.selectMenu == 2 ? 'OFF_LINE' : 'STOP'),
					pageNo: pullScroll.page,
					pageSize: 10,
				}
				getCarByStatus({
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
						pullScroll.success();

						// if (this.list.length > 60) {
						// 	pullScroll.finish(this.list.length > 5);
						// } else {
						// 	pullScroll.success();
						// }
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
		list-style: none;
	}

	.cell-left-title {
		text-align: left;
		font-size: 16px;
		font-family: PingFang SC;
		color: rgba(46, 46, 46, 1);
		line-height: normal;
	}

	.cell_right_title_high {
		font-weight: 400;
		text-align: right;
		font-size: 11px;
		font-family: PingFang SC;
		width: 58px;
		border-radius: 11.5px;
		text-align: center;
		height: 14px;
		line-height: 14px;
		margin-top: 2px;
		color: #04B753;
		background-color: #E5F8ED;
	}

	.cell_right_title_medium {
		font-weight: 400;
		text-align: right;
		font-size: 11px;
		font-family: PingFang SC;
		width: 58px;
		border-radius: 11.5px;
		text-align: center;
		height: 14px;
		line-height: 14px;
		margin-top: 2px;
		color: #009EFB;
		background-color: #CCEDFB;
	}

	.cell_right_title_low {
		font-weight: 400;
		text-align: right;
		font-size: 11px;
		font-family: PingFang SC;
		width: 58px;
		border-radius: 11.5px;
		text-align: center;
		height: 14px;
		line-height: 14px;
		margin-top: 2px;
		color: #3D77FD;
		background-color: #E1E7FC;
	}

	.cell-detail-left-title {
		text-align: left;
		font-size: 12px;
		font-family: PingFang SC;
		color: #999999;
	}

	.cell-detail-right-title {
		font-size: 10px;
		font-family: PingFang SC;
		color: #CCCCCC;
	}

	.cellImage {
		width: 80px;
		height: 80px;
		margin: 10px 10px 10px 0px;
		border-radius: 5px;
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

	.select_list_menu>text {
		color: #4ACF9A !important;
	}
</style>
