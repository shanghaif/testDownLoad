<template>

	<view class="content">
		<uni-calendar ref="calendar" :insert="false" @confirm="confirm"></uni-calendar>
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;" @click="clickTitle()">{{navTitle}}
				<uni-icons style="margin-left: 10px;" type="arrowdown" size="18"></uni-icons>
			</view>
			<view slot="right" class="icon-item" @click="clickSearch()">
				<uni-icons type="search" size="24"></uni-icons>
			</view>
		</uni-nav-bar>
		<view class="uni-flex uni-row" style="margin-top: 22px;">
			<view class="flex-item background-hui">SUN</view>
			<view class="flex-item background-black">MON</view>
			<view class="flex-item background-black">TUE</view>
			<view class="flex-item background-black">WED</view>
			<view class="flex-item background-black">THU</view>
			<view class="flex-item background-black">FRI</view>
			<view class="flex-item background-hui">SAT</view>
		</view>
		<view class="uni-flex uni-row day" style="margin-top: 8px;">
			<view class="flex-item">
				<view class="background-hui" v-bind:class="{selectDayStyle:selectDay === 7}" @click="clickDay(7)">{{day7}}</view>
			</view>
			<view class="flex-item">
				<view class="background-black" v-bind:class="{selectDayStyle:selectDay === 1}" @click="clickDay(1)">{{day1}}</view>
			</view>
			<view class="flex-item">
				<view class="background-black" v-bind:class="{selectDayStyle:selectDay === 2}" @click="clickDay(2)">{{day2}}</view>
			</view>
			<view class="flex-item">
				<view class="background-black" v-bind:class="{selectDayStyle:selectDay === 3}" @click="clickDay(3)">{{day3}}</view>
			</view>
			<view class="flex-item">
				<view class="background-black" v-bind:class="{selectDayStyle:selectDay === 4}" @click="clickDay(4)">{{day4}}</view>
			</view>
			<view class="flex-item">
				<view class="background-black" v-bind:class="{selectDayStyle:selectDay === 5}" @click="clickDay(5)">{{day5}}</view>
			</view>
			<view class="flex-item">
				<view class="background-hui" v-bind:class="{selectDayStyle:selectDay === 6}" @click="clickDay(6)">{{day6}}</view>
			</view>
		</view>
		<view class="uni-flex uni-row" style="">
			<view class="flex-item point-green">●</view>
			<view class="flex-item point-orange">●</view>
			<view class="flex-item point-white">●</view>
			<view class="flex-item point-white">●</view>
			<view class="flex-item point-white">●</view>
			<view class="flex-item point-white">●</view>
			<view class="flex-item point-white">●</view>
		</view>

		<view class="uni-flex uni-row" style="justify-content: space-between;margin: 10px 16px;">
			<view class="flex-item left-title">今日学习进程</view>
			<view class="flex-item right-title">80%</view>
		</view>

		<view class="progress-background">
			<view class="uni-flex uni-row" style="justify-content: space-between;">
				<view class="flex-item left-progress"></view>
				<view class="flex-item right-progress"></view>
			</view>
		</view>

		<view class="gray-line"></view>

		<view class="uni-flex uni-row">
			<view class="text list-menu" v-bind:class="{selectMenu:showMenuClass}" @click="clickMenu(true)" style="margin-left: 16px;">
				已学习
			</view>
			<view class="pointWhiteStyle" v-bind:class="{showPointStyle:showPoint1}"></view>
			<view class="text list-menu" v-bind:class="{selectMenu:!showMenuClass}" @click="clickMenu(false)">
				未学习
			</view>
			<view class="pointWhiteStyle" v-bind:class="{showPointStyle:showPoint2}"></view>
		</view>
		<view class="uni-flex uni-row">
			<view class="text list-menu-line study-line" v-bind:class="{select_line:showMenuClass}">
			</view>
			<view class="text list-menu-line no-study-line" v-bind:class="{select_line:!showMenuClass}">
			</view>
		</view>
		<list>
			<cell v-for="(item, index) in dataList" @click="goStudy(item)">
				<view class="uni-flex uni-row">
					<view class="text uni-flex">
						<image src="http://img.mukewang.com/52b4113500018cf102000200.jpg" class="cellImage"></image>
					</view>
					<view class="uni-flex uni-column" style="width: 100%;margin-right: 16px;">
						<view class="uni-flex uni-row" style="justify-content: space-between;margin-top: 6px;min-height: 52px;">
							<view class="flex-item cell-left-title">{{item.title}}</view>
							<view class="flex-item cell_right_title_low" v-if="item.finish < 0.33">{{item.type}}</view>
							<view class="flex-item cell_right_title_high" v-else-if="item.finish > 0.66">{{item.type}}</view>
							<view class="flex-item cell_right_title_medium" v-else>{{item.type}}</view>
						</view>
						<view class="cell-progress-background">
							<view class="uni-flex uni-row">
								<view v-bind:style="{width:item.finish*100 + '%'}" class="flex-item cell-left-progress-low" v-if="item.finish < 0.33"></view>
								<view v-bind:style="{width:item.finish*100 + '%'}" class="flex-item cell-left-progress-high" v-else-if="item.finish > 0.66"></view>
								<view v-bind:style="{width:item.finish*100 + '%'}" class="flex-item cell-left-progress-medium" v-else></view>
								<!-- <view class="flex-item cell-right-progress"></view> -->
							</view>
						</view>
						<view class="uni-flex uni-row" style="justify-content: space-between;">
							<view class="flex-item cell-detail-left-title">已阅读 {{item.finish*100}} %</view>
							<view class="flex-item cell-detail-right-title">
								<image src="../../static/img/icon/licheng.png" style="width: 13px;height: 13px;top: 1.5px;right: 4px;"></image>{{item.time}}
							</view>
						</view>
					</view>
				</view>
			</cell>
		</list>

	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue';
	import list from '@/components/uni-list/uni-list.vue';
	module.exports = {
		components: {
			uniIcons,
			uniCalendar,
			list
		},
		data() {
			return {
				monthNameArray: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
				navTitle: '',
				selectDay: 1,
				day7: 7,
				day1: 1,
				day2: 2,
				day3: 3,
				day4: 4,
				day5: 5,
				day6: 6,
				showMenuClass: true,
				showPoint1: false,
				showPoint2: true,
				dataList: [],
				dataList1: [{
					title: "安全性质学习和行车规范",
					finish: '0.64',
					time: '03:40',
					type: 'pdf',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "“119消防安全”教育专题",
					finish: '1',
					time: '02:30',
					type: 'word',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "法规与安全生产",
					finish: '0.23',
					time: '01:24',
					type: 'video',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}],
				dataList2: [{
					title: "班组长如何当好兵头将尾",
					finish: '0.7',
					time: '03:20',
					type: 'pdf',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "标准化作业——岗位安全要素",
					finish: '0.32',
					time: '03:20',
					type: 'word',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "危害辨识由谁来做一",
					finish: '0.59',
					time: '03:20',
					type: 'video',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "工伤待遇计算器",
					finish: '0.96',
					time: '03:20',
					type: 'pdf',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "让培训鲜活起来",
					finish: '0.60',
					time: '03:20',
					type: 'word',
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
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			clickTitle() {
				this.$refs.calendar.open();
			},
			clickMenu(bo) {
				this.showMenuClass = bo;
				if (bo) {
					this.dataList = this.dataList1;
				} else {
					this.dataList = this.dataList2;
				}
			},
			clickDay(day) {
				this.selectDay = day;
			},
			confirm(e) {
				// console.log(e);
				var d = new Date();
				d.setFullYear(e.year, Number(e.month - 1), e.date);
				this.selectDay = d.getDay();
				this.initDateList(d);
				this.navTitle = this.monthNameArray[d.getMonth()] + " " + d.getFullYear();

			},
			initDateList(date) {
				var d = date;
				var today = new Date();
				if (date.getDay() != 7) {
					d.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
					this.day7 = d.getDate();
				} else {
					this.day7 = date.getDate();
				}
				if (d.getFullYear() == today.getFullYear() & d.getMonth() == today.getMonth() & d.getDate() == today.getDate()) {
					this.day7 = '今';
				}
				d.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() + 1);
				this.day1 = d.getDate();
				if (d.getFullYear() == today.getFullYear() & d.getMonth() == today.getMonth() & d.getDate() == today.getDate()) {
					this.day1 = '今';
				}
				d.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() + 1);
				this.day2 = d.getDate();
				if (d.getFullYear() == today.getFullYear() & d.getMonth() == today.getMonth() & d.getDate() == today.getDate()) {
					this.day2 = '今';
				}
				d.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() + 1);
				this.day3 = d.getDate();
				if (d.getFullYear() == today.getFullYear() & d.getMonth() == today.getMonth() & d.getDate() == today.getDate()) {
					this.day3 = '今';
				}
				d.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() + 1);
				this.day4 = d.getDate();
				if (d.getFullYear() == today.getFullYear() & d.getMonth() == today.getMonth() & d.getDate() == today.getDate()) {
					this.day4 = '今';
				}
				d.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() + 1);
				this.day5 = d.getDate();
				if (d.getFullYear() == today.getFullYear() & d.getMonth() == today.getMonth() & d.getDate() == today.getDate()) {
					this.day5 = '今';
				}
				d.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() + 1);
				this.day6 = d.getDate();
				if (d.getFullYear() == today.getFullYear() & d.getMonth() == today.getMonth() & d.getDate() == today.getDate()) {
					this.day6 = '今';
				}

			},
			clickSearch() {
				uni.navigateTo({
					url: './study_search',
				});
			},
			goStudy(item) {
				if (item.type == "video") {
					uni.navigateTo({
						url: './study_video',
					});
				} else {
					uni.downloadFile({
						url: item.objectUrl,
						success: function(res) {
							var filePath = res.tempFilePath;
							uni.openDocument({
								filePath: filePath,
								success: function(res) {
									console.log('打开文档成功');
								}
							});
						}
					});
				}
			}
		},
		onShow(options) {

			var today = new Date();
			this.selectDay = today.getDay();
			this.initDateList(today);
			this.navTitle = this.monthNameArray[today.getMonth()] + " " + today.getFullYear();
			this.dataList = this.dataList1;
		}
	}
</script>

<style>
	.content {
		background-color: white;
		height: 100%;
	}

	.selectMenu {
		font-size: 19px;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(51, 51, 51, 1)
	}

	.day>.flex-item {
		width: 100%;
	}

	.background-black {
		color: #2E2E2E;
		width: 100%;
		text-align: center;
		font-family: PingFang SC;
		font-size: 10pt;
	}

	.background-hui {
		color: #999999;
		width: 100%;
		text-align: center;
		font-family: PingFang SC;
		font-size: 10pt;
	}

	.background-jin {
		color: #2E2E2E;
		font-size: 10pt;
		text-align: center;
		font-family: PingFang SC;
	}

	.day>.flex-item>.background-black,
	.day>.flex-item>.background-hui,
	.day>.flex-item>.background-jin {
		font-size: 15pt;
		/* width: 100%;
		margin: auto;
		text-align: center;
		font-family: PingFang SC; */
		border-radius: 50%;
		width: 36px;
		margin: auto;
	}

	.selectDayStyle {
		color: white;
		background-color: #4ACF9A;
	}

	.point-green {
		color: #4ACF9A;
		width: 100%;
		text-align: center;
		font-family: PingFang SC;
		font-size: 10px;
	}

	.point-orange {
		color: #FF7E55;
		width: 100%;
		text-align: center;
		font-family: PingFang SC;
		font-size: 10px;
	}

	.point-white {
		color: white;
		width: 100%;
		text-align: center;
		font-family: PingFang SC;
		font-size: 10px;
	}

	.left-title {
		text-align: left;
		height: 31px;
		font-size: 17px;
		font-family: PingFang SC;
		color: rgba(46, 46, 46, 1);
	}

	.right-title {
		text-align: right;
		height: 31px;
		font-size: 17px;
		font-family: PingFang SC;
		color: rgba(74, 207, 154, 1);
	}

	.left-progress {
		background-color: #4ACF9A;
		height: 10px;
		border-radius: 4px 5px 5px 4px;
		width: 80%;
	}

	.right-progress {
		height: 10px;
		border-radius: 5px;
		width: 20%;
	}

	.progress-background {
		margin-left: 16px;
		margin-right: 16px;
		margin-bottom: 24px;
		border-radius: 5px;
		border-width: 1px;
		border-style: solid;
		border-color: #4ACF9A;
	}

	.gray-line {
		background-color: #EDF0F5;
		height: 10px;
	}

	.list-menu {
		width: 70px;
		text-align: center;
		margin-top: 10px;
		height: 34px;
		line-height: 34px;
	}

	.list-menu-line {
		width: 20px;
		height: 2px;
		background-color: white;
		border-radius: 1px;
	}

	.study-line {
		margin-left: 41px;

	}

	.no-study-line {
		margin-left: 59px;

	}

	.select_line {
		background-color: #000000;
	}

	.pointWhiteStyle {
		background-color: white;
		width: 10px;
		height: 10px;
		border-radius: 5px;
		margin-top: 10px;
	}

	.showPointStyle {
		background-color: #FF7E55;
	}


	.cell-left-title {
		text-align: left;
		font-size: 17px;
		font-family: PingFang SC;
		color: rgba(46, 46, 46, 1);
	}

	.cell_right_title_high {
		text-align: right;
		font-size: 12px;
		font-family: PingFang SC;
		width: 54px;
		border-radius: 4px;
		text-align: center;
		height: 23px;
		margin-top: 2px;
		color: #04B753;
		background-color: #E5F8ED;
	}

	.cell_right_title_medium {
		text-align: right;
		font-size: 12px;
		font-family: PingFang SC;
		width: 54px;
		border-radius: 4px;
		text-align: center;
		height: 23px;
		margin-top: 2px;
		color: #009EFB;
		background-color: #CCEDFB;
	}

	.cell_right_title_low {
		text-align: right;
		font-size: 12px;
		font-family: PingFang SC;
		width: 54px;
		border-radius: 4px;
		text-align: center;
		height: 23px;
		margin-top: 2px;
		color: #3D77FD;
		background-color: #E1E7FC;
	}

	.cell-detail-left-title {
		text-align: left;
		font-size: 13px;
		font-family: PingFang SC;
		color: #999999;
	}

	.cell-detail-right-title {
		text-align: right;
		font-size: 13px;
		font-family: PingFang SC;
		color: #999999;
	}

	.cellImage {
		width: 80px;
		height: 80px;
		margin: 10px;
		border-radius: 5px;
	}


	.cell-left-progress-high {
		background-color: #4ACF9A;
		border-radius: 4px 5px 5px 4px;
		height: 6px;
	}

	.cell-left-progress-medium {
		background-color: #3D77FD;
		border-radius: 4px 5px 5px 4px;
		height: 6px;
	}

	.cell-left-progress-low {
		background-color: #FF8E29;
		border-radius: 4px 5px 5px 4px;
		height: 6px;
	}

	.cell-progress-background {
		margin-bottom: 8px;
		border-radius: 5px;
		background-color: #F7F8FC;
	}
</style>
