<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" :border="false" background-color="#FF6646" color="#FFFFFF"
		 @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">报警中心</view>
			<view slot="right" class="icon-item" @click="clickSearch()">
				<text class="lg text-white" :class="'cuIcon-' + 'filter'" style="font-size: 23px;"></text>
			</view>
		</uni-nav-bar>
		<view style="width: 100%;height: 240px;background-image: url(../../static/img/alarm_center/alarm_center_bg.png);background-size: 100% 99.9%;background-repeat: no-repeat;">
			<cCircle style="padding-top: 20px;" :size="160" :percent="60" :animation="true" :animationSpeed="10" :circleWidth="8"
			 :direction="185" defaultColor="rgba(255,255,255,0.5)" circleColor="white" :clockwise="false">
				<view slot="content" style="text-align: center;height: 40px;padding-top: 36px;font-size: 40px;color: white;">356</view>
				<view slot="content" style="text-align: center;height: 30%;font-size: 16px;color: white;padding-top: 48px;">总警讯</view>
			</cCircle>
			<view class="uni-flex uni-row" style="justify-content: flex-end;">
				<text class="lg text-white" :class="'cuIcon-' + 'notification'" style="font-size: 20px;padding-top: 2px;"></text>
				<text style="font-size: 15px;color: white;margin: auto 10px auto 6px;">警示音</text>
				<switch style="margin: auto 16px auto 0;" type="switch" @change="switch1Change" />
			</view>
		</view>
		<list id="list">
			<cell v-for="(item, index) in dataList" @click="goStudy(item)">
				<view class="uni-flex uni-row">
					<view class="uni-flex uni-column" style="width: 100%;">
						<view class="uni-flex uni-row" style="justify-content: space-between;margin-top: 12px;min-height: 30px;">
							<view class="flex-item">
								<label class="flex-item cell-left-title1">{{item.title}}</label>
								<label class="flex-item cell-left-title2">{{item.time}}</label>
							</view>
							<view class="flex-item cell_right_title">{{item.type}}</view>
						</view>
						<view class="uni-flex uni-row" style="justify-content: space-between;margin-bottom: 12px;">
							<view class="flex-item cell-detail-left-title">{{item.finish}}</view>
							<view class="flex-item cell-detail-right-title">{{item.time}}</view>
						</view>
						<view style="width: 100%;height: 1px;background-color: rgba(0,0,0,0.05);"></view>
					</view>
				</view>
			</cell>
		</list>
		
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
				<button class="drawer_button" v-if="selectMenu===5" type="primary" @click="clickMenu(5)">进出路线报警</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(5)">进出路线报警</button>
				<button class="drawer_button" v-if="selectMenu===6" type="primary" @click="clickMenu(6)">线路偏移报警</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(6)">线路偏移报警</button>
			</view>
			<view class="uni-flex uni-row button-view" style="justify-content: space-between;">
				<button class="drawer_button" v-if="selectMenu===7" type="primary" @click="clickMenu(7)">离开指定区域报警</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(7)">离开指定区域报警</button>
				<button class="drawer_button" v-if="selectMenu===8"type="primary" @click="clickMenu(8)">进入指定区域报警</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(8)">进入指定区域报警</button>
			</view>
			<view class="uni-flex uni-row button-view" style="justify-content: space-between;">
				<button class="drawer_button" v-if="selectMenu===9" type="primary" @click="clickMenu(9)">非工作时间用车报警</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(9)">非工作时间用车报警</button>
				<button class="drawer_button" v-if="selectMenu===0" type="primary" @click="clickMenu(0)">全部</button>
				<button class="drawer_button" v-else type="default" @click="clickMenu(0)">全部</button>
			</view>
			<view class="uni-flex uni-row menuBottomView" style="justify-content: space-between;position: fixed;bottom: 0px;left: 0px;right: 0px;">
				<button style="color: #999999;" @click="clickReset">重置</button>
				<button style="color: #666666;" @click="clickSure">确定</button>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue";
	import cCircle from "../../components/Your_Exios-Circle.vue";
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import list from '@/components/uni-list/uni-list.vue';
	export default {
		components: {
			uniDrawer,
			uniIcons,
			cCircle,
			list
		},
		data() {
			return {
				showMenu:false,
				selectMenu:0,
				dataList: [{
					title: "粤AUD568",
					finish: '报警信息: 线路偏移报警, 线路：趟线测试',
					time: '8/9 03:40',
					type: '线路偏移',
					sudu: '速度: 90 km/h',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "粤AUD568",
					finish: '报警信息: 超速报警63.0',
					time: '8/9 02:30',
					type: '断电提醒',
					sudu: '速度: 90 km/h',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}, {
					title: "粤AUD568",
					finish: '报警信息: 超速报警63.0',
					time: '8/9 01:24',
					type: '线路偏移',
					sudu: '速度: 90 km/h',
					url: 'http://img.mukewang.com/52b4113500018cf102000200.jpg',
					objectUrl: 'http://file.ctayun.com/cheta/1546003237411.pdf'
				}]
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
			clickSearch: function(){
				this.showMenu = true;
			},
			closeMenu: function(){
				this.showMenu = false;
			},
			clickMenu: function(item) {
				this.selectMenu = item;
			},
			clickReset: function(){
				this.selectMenu = 0;
				this.showMenu = false;
			},
			clickSure: function(){
				this.showMenu = false;
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

	cell>.uni-row {
		margin: 0 16px;
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
		color: #FF7E55;
		background-color: rgba(255, 126, 85, 0.3);
		height: 16px;
		border-radius: 12.5px;
		font-size: 12px;
		width: 68px;
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
	
	.menuBottomView button{
		width: 50%;
		background-color: white;
		border-radius: 0;
		border-color: #E6E6E6;
		font-size: 17px;
	}
	
	.menuBottomView button::after{
		border-radius: 0;
		border-color: #E6E6E6;
		font-size: 17px;
	}
</style>
