<template>
	<view class="cheta-content">
		<!-- 工具栏 -->
		<uni-nav-bar class="cheta-bar" :fixed="true" color="#333333" :status-bar="true" background-color="#ffffff" @clickLeft="back" title="邮政" right-icon="bars">
			<span slot="left" class="uni-bar">
				<span class="cheta-place">广州</span>
				<!-- class="cheta-sun" -->
				<image src="/static/img/icon/sun.png"/>
				<span class="cheta-du">21&#8451</span>
			</span>
		</uni-nav-bar>
		<!-- 轮播图 -->
		<!-- 轮播图 -->
		<view class="uni-margin-wrap">
			<swiper  class="swiper-box shuff-img" circular indicator-dots="true" autoplay="true" interval="2000" duration="500">
				<swiper-item v-for="(item, index) in info" :key="index">
					<image class="image" :src="item.url" />
				</swiper-item>
			</swiper>
		</view>
		<!-- 宫格 -->
		<uni-card mode="basic">
			<view class="example-body uni-main-apply">
				<uni-grid :column="3" :show-border="false" :square="false">
					<uni-grid-item v-if="index < 8" v-for="(item ,index) in list" :index="index" :key="index">
						<view class="grid-item-box" @click="getDetail(item)">
							<image class="list-image" :src="item.url" mode="aspectFill" />
							<text class="list-text">{{item.text}}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
			<view>
				<uni-list v-if="!userShow">
					<uni-list-item title="" thumb="/static/img/icon/jingxuan.png">
						<template v-slot:default="">
							<text class="list-font">2020年国家针对物流新政策</text>
						</template>
					</uni-list-item>
				</uni-list>
				<uni-list v-else>
					<uni-list-item title="" thumb="">
						<template v-slot:default="">
							<text class="list-message">{{user}}正在使用{{registrationNo}}</text>
						</template>
					</uni-list-item>
				</uni-list>
			</view>
		</uni-card>
		<!-- 安全学习 -->
		<uni-card mode="basic">
			<view class="study" @click="goSafeStudy()"><image class="" src="/static/img/icon/anquanxuexi.png"/></view>
		</uni-card>
		<!-- 车辆统计 -->
		<uni-card mode="basic">
			<view class="example-body">
				<uni-list>
					<uni-list-item rightText="查看更多" title="" thumb="/static/img/icon/car.png">
						<template v-slot:default="">
							<text class="list-font">各网点车辆统计</text>
						</template>
					</uni-list-item>
				</uni-list>
				<view class="uni-car-statistical">
					<view class="uni-grey">网点</view>
					<view class="uni-total">总数</view>
					<view class="uni-running">运行</view>
					<view class="uni-grey">离线</view>
					<view class="uni-stop">停止</view>
				</view>
				<view class="uni-car-content" v-for="item in carTotal">
					<view class="uni-list-style">{{item.place}}</view>
					<view class="uni-list-style">{{item.countTotal}}</view>
					<view class="uni-list-style">{{item.running}}</view>
					<view class="uni-list-style">{{item.outline}}</view>
					<view class="uni-list-style">{{item.stop}}</view>
				</view>

			</view>
		</uni-card>
		<!-- 行程数据 -->
		<uni-card mode="basic">
			<view class="example-body">
				<uni-list>
					<uni-list-item title="" thumb="/static/img/icon/xingcheng.png" rightText="查看更多">
						<template v-slot:default="">
							<text class="list-font">今日行程数据</text>
						</template>
					</uni-list-item>
				</uni-list>
				<view class="example-body uni-car-digit">
					<uni-grid :column="3" :show-border="false" :square="false">
						<uni-grid-item v-if="index < 8" v-for="(item ,index) in listDigit" :index="index" :key="index">
							<view class="grid-item-box">
								<text class="uni-road-digit">较昨日<text class="addcount" :style="{color:item.color}">{{item.digit}}</text></text>
								<text class="uni-road-text" :style="{color:item.color}">{{item.name}}</text>
								<text class="uni-road-name">{{item.text}}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</view>
			</view>
		</uni-card>
		<!-- 实时咨询 -->
		<uni-card mode="basic">
				<uni-list>
					<uni-list-item title="" thumb="/static/img/icon/zixun.png" rightText="查看更多">
						<template v-slot:default="">
							<text class="list-font">实时资讯</text>
						</template>
					</uni-list-item>
				</uni-list>
				<view class="uni-car-digit">
					<uni-card :is-shadow="false" :is-full="false"  :note="item.time"  v-for="item in list2" @click="clickCard">
						<text class="content-box-text">{{item.desc}}</text>
					</uni-card>
				</view>
		</uni-card>
		<!-- 今日推荐 -->
		<uni-card title="今日推荐" note="" extra="" thumbnail="../static/img/icon/tuijian.png" @click="clickCard">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in listData" :key="key" @click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.cover"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top recommend-title">{{ value.title }}</view>
						<view class="uni-media-list-text-bottom">
							<text class="recommend-time">{{ value.time }}</text>
						</view>
					</view>
				</view>
			</view>
		</uni-card>
	</view>
</template>
<script>
	import { useCar } from '@/common/api.js'
	export default {
		data() {
			return {
				navigateFlag: false,
				info: [{
						colorClass: 'uni-bg-red',
						url: '/static/img/icon/banner.png',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: '/static/img/icon/banner.png',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: '/static/img/icon/banner.png',
						content: '内容 C'
					}
				],
				list: [
					{
						url: '/static/img/icon/carjiankong.png',
						text: '车辆监控',
					},
					{
						url: '/static/img/icon/yongche.png',
						text: '用车管理',
					},
					{
						url: '/static/img/icon/sanjian.png',
						text: '三检管理'
					},

					{
						url: '/static/img/icon/paiban.png',
						text: '排班管理',
					},
					{
						url: '/static/img/icon/shigu.png',
						text: '事故上报'
					},
					{
						url: '/static/img/icon/jiayou.png',
						text: '加油管理',
					},

					{
						url: '/static/img/icon/baojing.png',
						text: '报警中心'
					},
					{
						url: '/static/img/icon/moreyingyong.png',
						text: '更多应用'
					},

				],
				listDigit: [{
						text: '行程里数',
						name:'320',
						digit:"+16",
						color:"rgba(136,81,252,1)"
					},
					{
						text: '行程用时',
						name:'2h46min',
						digit:"-50min",
						color:"rgba(0,161,97,1)"
					},
					{
						text: '行程耗油',
						name:'10L',
						digit:"-20L",
						color:"rgba(71,125,239,1)"
					},
					{
						text: '急转弯',
						name:'8',
						digit:"-2",
						color:"rgba(242,58,59,1)"
					},
					{
						text: '急刹车',
						name:'6',
						digit:"+3",
						color:"rgba(255,136,0,1)"
					},
					{
						text: '急加速',
						name:'2',
						digit:"+1",
						color:"rgba(202,63,129,1)"
					},


				],
				list2: [{
					time:'2020年03月09日 12:58',
					desc:"广州事故车辆新增9辆增9辆增9辆增9辆辆事故正进一步调查中"
				}, {
					time:'2020年03月09日 12:58',
					desc:"广州事故车辆新增9辆增9辆增9辆增9辆辆事故正进一步调查中"
				}, {
					time:'2020年03月09日 12:58',
					desc:"广州事故车辆新增9辆增9辆增9辆增9辆辆事故正进一步调查中"
				}, {
					time:'2020年03月09日 12:58',
					desc:"广州事故车辆新增9辆增9辆增9辆增9辆辆事故正进一步调查中"
				}],
				listData:[
					{
						cover:"/static/img/icon/laba.png",
						title:"最新消息！广州地区开展线下安全学 习培训",
						time:"1小时"
					},
					{
						cover:"/static/img/icon/baole.png",
						title:"最新消息！广州地区开展线下安全学 习培训",
						time:"1小时"
					},
					{
						cover:"/static/img/icon/anquan.png",
						title:"最新消息！广州地区开展线下安全学 习培训",
						time:"1小时"
					}
				],
				carTotal:[
					{place:"天河区",countTotal:3500,running:3500,outline:1500,stop:1000},
					{place:"白云区",countTotal:3500,running:3500,outline:1500,stop:1000},
					{place:"番禺区",countTotal:3500,running:3500,outline:1500,stop:1000},
					{place:"海珠区",countTotal:3500,running:3500,outline:1500,stop:1000},
					{place:"越秀区",countTotal:3500,running:3500,outline:1500,stop:1000}
				],
				userShow: false,
				registrationNo: '',
				user:"",
				}

				},

				// onLoad () {
				// 	this.userCar()
				// },
				created () {
					this.userCar()

				},
				methods:{
					onShow: function() {
							this.userCar()
						},
					userCar () {
						useCar().then(res=>{
							if (!res.result) {
								this.userShow = false
							}else{
								this.userShow = true
								this.user = res.result.createBy
								this.registrationNo = res.result.registrationNo
							}
						})
					},
					getDetail (item) {
						if (item.text === "用车管理") {
							useCar().then(res=>{
								if (!res.result) {
									uni.navigateTo({
										url: '/application/carmanage/CarIndex'
									});
								}else{
									var carId = res.result.carId
									var registrationNo = res.result.registrationNo
									var carType = res.result.carType
									var lineStartSite = res.result.lineStartSite
									var lineEndSite = res.result.lineEndSite
									var dispatchMileage = res.result.dispatchMileage
									var lineId = res.result.lineId
									var dispatchTime = res.result.dispatchTime
									var statusRun = res.result.statusRun
									uni.navigateTo({
										url: '/application/carmanage/CarLine?carId=' + carId + '&registrationNo=' + registrationNo+ '&carType=' + carType
										+ '&lineStartSite=' + lineStartSite + '&lineEndSite=' + lineEndSite + '&dispatchMileage=' + dispatchMileage + '&dispatchTime=' + dispatchTime + '&statusRun=' + statusRun
									});

								}
							})

						}else if (item.text === "报警中心") {
							uni.navigateTo({
								url: '/application/alarm_center/alarm_center'
							});
						}else if (item.text === "三检管理") {
							uni.navigateTo({
								url: '/application/three_check/three_check'
							});
						}else if (item.text === "车辆监控") {
							uni.navigateTo({
								url: '/application/car_monitor/car_monitor'
							});
						}
						else if(item.text === "加油管理"){
							uni.navigateTo({
								url: '/application/refuelRegister/refuelRegister'
							});
						}
						else if(item.text === "事故上报"){
							uni.navigateTo({
								url: '/application/carmanage/AccidentReport'
							});
						}
						// else if(item.text === "车技管理"){
						// 	uni.navigateTo({
						// 		url: '/application/car_monitor/Map'
						// 	});
						// }

					},

					goSafeStudy () {
						uni.navigateTo({
							url: './safe_study/safe_study',
						});
					}
				}

				}
</script>
<style lang="less">
	.uni-navbar__header-btns-left {
		width: 100px!important;
	}
	.uni-main-apply .uni-grid-item {
		    width: 25%!important;
		    text-align: center;
	}
	.uni-car-digit .uni-grid-item {
		    width: 33%!important;
		    text-align: center;
			margin-bottom: 56rpx;
	}
	.uni-icons{
		font-size: 8px!important;
		color: rgb(243, 238, 238)!important;
	}
	.uni-card{
	margin: 0rpx!important;
	}
	.uni-media-list-body{
		height: 105rpx!important;
	}

</style>

<style lang="less" scoped>
	.uni-bar uni-image{
		width: 40rpx;
		height: 40rpx;
		padding-left: 10rpx;
	}

	.cheta-content {
		width: 750rpx;
		margin-bottom: 100rpx;
		.cheta-place{
			font-size:30rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
		}
		.cheta-sun{

		}
		.cheta-du{
			font-size:16px;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(4,183,83,1);
		}
		.shuff-img{
			image{
				width: 750rpx;
				height: 300rpx;
			}
		}
		.list-image{
			width: 100rpx;
			height: 100rpx;
		}
		.list-text{
			display: block;

		}
		.list-font{
			font-size:13px;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(51,51,51,1);

		}
		.list-message{
			background: rgba(204,204,204,0.2);
		}
		.study{
		    width: 100%;
		    height: 145.5rpx;
		    image{
				width: 710rpx!important;
				height: 145.5rpx!important;

			}

		}
		.list-recommend {
			.recommend-title {
				font-size:16px;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
			}
			.recommend-time{
				font-size:12px;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
			}
		}
		.uni-car-statistical{
			width: 100%;
			height: 50px;
			view{
				float: left;
				font-size:16px;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(102,102,102,1);
				padding: 35rpx;
			}
			.uni-grey{
				color:rgba(102,102,102,1);
			}
			.uni-total{
				color:rgba(71,125,239,1);
			}
			.uni-running{
				color:rgba(74,207,154,1);
			}

			.uni-stop{
				color:rgba(255,126,85,1);
			}
		}
		.uni-car-content{
			width: 100%;
			height: 50px;
			view{
				float: left;
				font-size:14px;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(68,68,68,1);
				padding: 33rpx;
			}
			.uni-list-style{
				background:rgba(245,245,245,1);
				border-radius: 10;
			}
		}
		.uni-road-text,.uni-road-name,.uni-road-digit{
			display: block;
		}
		.uni-road-text{
			font-size:24px;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(242,58,59,1);

		}
		.uni-road-name{
			font-size:14px;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(102,102,102,1);
		}
		.uni-road-digit{
			font-size:12px;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(153,153,153,1);
		}

	}
</style>
