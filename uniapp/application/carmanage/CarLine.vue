<template>
	<view class="content" :style="{width:screenWidth + 'px',height:screenHeight + 'px'}">
		<uni-nav-bar left-icon="arrowleft"  :fixed="true" :status-bar="true" title="用车管理" @clickLeft="back">
			<view slot="right">
				<uniIcons :style="{ color: 'rgba(234,70,91,1)', 'font-size': '16px' }" type="info" size="16"/>
				<text class="cheta-declare" @click="report">事故上报</text>
			</view>
		</uni-nav-bar>
	    <map class="map" id="map1" ref="map1" :style="{width:screenWidth + 'px',height:screenHeight - 400 + 'px'}" :longitude="longitude" :latitude="latitude"></map>
			<view class="example-body">
				<uni-card title="" note="" extra="" thumbnail="../static/img/icon/tuijian.png" @click="clickCard">
						<view class="uni-flex uni-row cheta-car-manager">
							<view class="flex-item">
								<view class="cheta-registernum">{{registrationNo}}</view>
								<view class="uni-media-list-text-bottom">
									<text class="recommend-time">
										{{ carType}}
									</text>
								</view>
							</view>
							<view class="flex-item car-first">
								<image src="../../static/img/icon/smallcar.png"></image>
							</view>
						</view>
						<view class="uni-flex uni-row car-second">
							<view class="flex-item" style="-webkit-flex: 1;flex: 1;">
								<image src="../../static/img/icon/linedetail.png" class="car-line"></image>
								<view class="car-road">行车线路</view>
								
							</view>
							<view class="flex-item car-road" style="-webkit-flex: 2;flex: 2;">
								{{ lineStartSite}} — {{ lineEndSite }}
							</view>
						</view>
						<view class="uni-list list-recommend">
							<view class="uni-flex uni-row cheta-car-manager">
								<view class="flex-item car-digit" style="-webkit-flex: 2;flex: 2;">
									<view class="">{{ statusRun || '暂无'}}</view>
									<view>状态(实时)</view>
								</view>
								<view class="flex-item car-digit" style="-webkit-flex: 2;flex: 2;">
									<view>{{ this.dispatchTime.split(" ")[1] || '暂无' }}</view>
									<view>出车时间</view>
								</view>
								<view class="flex-item car-digit" style="-webkit-flex: 2;flex: 2;">
									<view>{{ dispatchMileage || 0}}</view>
									<view>出车里程</view>
								</view>
							</view>
						</view>
						<view class="uni-button-width uni-common-mt button-attribute">
							<button type="primary" class="cheta-button-primary" @click="lockBack">
								锁门并确定还车</text>
							</button>
						</view>	
					</uni-card>
			</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	
	const SystemInfo = uni.getSystemInfoSync();
	export default {
		data() {
			return {
				type: "",
				registrationNo:"粤A8HX55",
				carId:"",
				carType:"全自动干式吸尘车",
				lineStartSite:"广州市小新塘",
				lineEndSite:"广州市棠下",
				dispatchMileage:"23000",
				dispatchTime:"09:25:33",
				statusRun:"正常",
				screenWidth: SystemInfo.screenWidth,
				screenHeight: SystemInfo.screenHeight,
				longitude:113.41,
				latitude:23.15,
				navigateFlag: false
			}
		},
		created () {
			this.togglePopup('bottom',"center")
			this.doGetLocation()
		},
		onReady() {
		    this.map = uni.createMapContext("map1", this);
		},
		onLoad: function (option) {
			this.carId = option.carId
			this.registrationNo = option.registrationNo
			this.carType = option.carType
			this.dispatchMileage = option.dispatchMileage
			this.dispatchTime = option.dispatchTime
			// this.statusRun = option.statusRun
			// this.lineStartSite = option.lineStartSite
			// this.lineEndSite = option.lineEndSite
			if (option.statusRun==='null' || !option.statusRun) {
				this.statusRun = '暂无数据'
			}
			else{
				this.statusRun = option.statusRun
			}
			if (option.lineStartSite==='null' || !option.lineStartSite) {
				this.lineStartSite = '暂无数据'
			}
			else{
				this.lineStartSite = option.lineStartSite
			}
			if (option.lineEndSite==='null' || !option.lineEndSite) {
				this.lineEndSite = '暂无数据'
			}
			else{
				this.lineEndSite = option.lineEndSite
			}
		},
		
		methods: {
			report () {
				this.navigateFlag = true;
				uni.navigateTo({
					url: '/application/carmanage/AccidentReport?carId=' + this.carId + "&registrationNo=" + this.registrationNo,
				});
				setTimeout(() => {
					this.navigateFlag = false;
				}, 200)
			},
			doGetLocation() {
				var $this = this
			    uni.getLocation({
					geocode: true,
			        success: (res) => {
						$this.latitude = res.latitude;
						$this.longitude = res.longitude;
						uni.showModal({
							content:res
						})
			        },
					
			           
			    })
			},
			togglePopup(type, open) {
				this.type = type
				this.$nextTick(() => {
					this.$refs['showpopup'].open()
				})
			},
			lockBack () {
				uni.redirectTo({
					url: '/application/carmanage/EndRoad?carId=' + this.carId + '&dispatchMileage=' + this.dispatchMileage
				});
			},
			back () {
				uni.switchTab({
					url: '/application/home',
				});
			}
		}
	}
</script>
<style lang="scss">
	.car-first uni-image {
	    width: 160px!important;
	    height: 100px!important;
	}
	.car-second uni-image{
		width: 18px!important;
		height: 18px!important;
		display: inline-block!important;
	}
	
</style>

<style lang="scss">
	.content {
	    flex: 1;
	    ;
	}
	
	.map {
	    background-color: #f0f0f0;
	}
	.uni-card{
		margin: 0!important;
	}
	.cheta-declare{
		font-size:14px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(234,70,91,1);
		width: 120rpx;
		display: inline-block;
	},
	.cheta-car-manager{
		margin-top: 30rpx;
		justify-content: center;
	}
	.car-digit view:first-child{
		font-size:20px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		padding-right: 40rpx;
	}
	.car-digit view:last-child{
		
		font-size:12px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
		padding-right: 20rpx;
	}
	.cheta-registernum{
		font-size:30px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.recommend-time{
		font-size:17px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.car-road {
		font-size:15px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
		display: inline-block;
	}
	.cheta-button-primary{
		background:rgba(74,207,154,1);
		border-radius:41px;
	}
	.cheta-button-primary uni-button:after{
		border: 0px solid rgba(0,0,0,.2)!important;
	}
	.button-attribute{
		text-align: center;
		bottom: 20rpx;
	}
	.uni-button-width{
		width: 690rpx;
		padding: 0!important;
	}

</style>
