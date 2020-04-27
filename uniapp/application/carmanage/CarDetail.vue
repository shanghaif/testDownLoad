<template>
	<view :style="{width:screenWidth + 'px',height:screenHeight + 'px'}" class="content">
		<uni-nav-bar class="cheta-bar" left-icon="arrowleft" :fixed="true" color="#333333" background-color="#ffffff" :status-bar="true" @clickLeft="back" title="用车管理">
		</uni-nav-bar>
		<!-- 工具栏 -->
		<view class="example-body">
			<uni-card mode="basic" isFull="true">
				<view class="cheta-cardetail">
					<view class="cheta-top-content">
						<span class="car-detail">
							{{carType}}
						</span>
						<image src="/static/img/icon/bigcar.png" class="uni-cardetail-img"></image>
					</view>	
					 <view class="uni-flex uni-row cheta-car-manager">
						<view class="flex-item car-digit">
							<text class="">车牌号</text>
							<text>{{registrationNo}}</text>
						</view>
						<!-- <view class="flex-item car-digit">
							<text>座位数</text>
							<text>{{sitCount}}</text>
						</view> -->
						<!-- <view class="flex-item car-digit">
							<text>时速</text>
							<text>{{speed}}</text>
						</view> -->
					</view>
				</view>
			</uni-card>
			<uni-card mode="basic" isFull="true">
				<form>
					<view class="cu-list menu">
						<view class="cu-item" @click="getOil">
							<view class="content">
								<image src="/static/img/icon/youka.png"/>
								<text class="car-font">车辆油量</text>
							</view>
							<view class="action">
								<text class="car-font">{{dispatchOil}}%</text>
							</view>
						</view>
						<uni-popup ref="oilpopup" type="bottom">
							<view style="background-color: #FFF;height: 700rpx;">
								<CarOil ref="carOil"></CarOil>
								<view class="uni-button-top">
									<button type="primary" class="cheta-button-wrap" @click="oilDetermine">确定</button>
									<button type="oilCancle" class="cheta-button-wrap" @click="oilCancle">取消</button>
								</view>
								
							</view>
						</uni-popup>
						<view class="cu-item" @click="getMileage">
							<view class="content">
								<image src="/static/img/icon/licheng.png"/>
								<text class="car-font">车辆里程</text>
							</view>
							<view class="action">
								<text class="car-font">{{dispatchMileage}}</text>
							</view>	
						</view>
						<uni-popup ref="mileagepopup" type="bottom">
							<view style="background-color: #FFF;height: 700rpx;">
								<CarMileage ref="carmileage" :dispatchMileage = "dispatchMileage"></CarMileage>
								<view class="uni-button-top">
									<button type="primary" class="cheta-button-wrap" @click="determine">确定</button>
									<button type="cancle" class="cheta-button-wrap" @click="mileageCancle">取消</button>
								</view>
							</view>
						</uni-popup>
						<view class="cu-item uni-display">
							<view class="content">
								<image src="/static/img/icon/waiguan.png"/>
								<view class="title uni-check">启动检查</view>
							</view>
							<view class="action uni-radio-grad">
								<radio-group name="gender" @change="startChange" class="uni-display">
									<view class="uni-radio-grad"><radio  value="正常" /><text>正常</text></view>
									<view  class="uni-radio-grad"><radio  value="异常" /><text>异常</text></view>
								</radio-group>
							</view>
						</view>
						<view class="cu-item uni-display">
							<view class="content">
								<image src="/static/img/icon/qidongpng.png"/>
								<view class="title uni-check">刹车检查</view>
							</view>
							<view class="action uni-radio-grad">
								<radio-group name="gender" @change="appearceChange" class="uni-display">
									<view class="uni-radio-grad"><radio  value="正常" /><text>正常</text></view>
									<view  class="uni-radio-grad"><radio  value="异常" /><text>异常</text></view>
								</radio-group>
							</view>
						</view>
						<view class="cu-item uni-display">
							<view class="content">
								<image src="/static/img/icon/luntai.png"/>
								<view class="title uni-check">胎压检查</view>
							</view>
							<view class="action uni-radio-grad">
								<radio-group name="gender" @change="tireChange" class="uni-display">
									<view class="uni-radio-grad"><radio  value="正常" /><text>正常</text></view>
									<view  class="uni-radio-grad"><radio  value="异常" /><text>异常</text></view>
								</radio-group>
							</view>
						</view>
							<view class="cu-item uni-display">
								<view class="content select-line">
									<image src="../../static/img/icon/linedetail.png"></image>
									<view class="title uni-check">线路</view>
								</view>
								
								<picker @change="PickerChange" :value="index" :range="lineValueList">
									<view class="picker">
										{{index>-1?lineList[index].name:'请选择线路'}}
									</view>
								</picker>
								<text class="cuIcon-right text-grey"></text>
							</view>	
						
							<!-- <mpvue-picker
								themeColor="#007AFF"
								ref="mpvuePicker"
								deepLength=1
								:pickerValueArray="lineValueList"
								@onConfirm="onConfirm"
								@onCancel="onCancel"
							>
							</mpvue-picker> -->
							
					
					</view>		
				</form>
				<view class="padding cu-bar cheta-amap-tool">
					<button class="cheta-button-primary" @click="carDetermine">
						<text>确定用车</text>
					</button>
				</view>
			</uni-card>	
		</view>	
	</view>
</template>

<script>
	const SystemInfo = uni.getSystemInfoSync();
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniBadge from '@/components/uni-badge/uni-badge.vue';
	import CarOil from '@/application/carmanage/CarOil.vue';
	import CarMileage from '@/application/carmanage/CarMileage.vue';
	import CarRoad from '@/application/carmanage/CarRoad.vue';
	import {lineData, doDispatch,useCar} from '@/common/api';
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	
	export default {
		components: {
			uniIcons,
			uniBadge,
			CarOil,
			CarMileage,
			CarRoad,
			mpvuePicker
		},
		
		data() {
			return {
				index: -1,
				carId:"",
				registrationNo:"",
				carType: '办公车OV型号',
				mileageVisible:false,
				oilVisible: false,
				appearce:"",
				type: 'center',
				typeOil:"bottom",
				lineList: [],
				lineValueList: [],
				pickerValueArray: [
					{
						label: '北京市',
						value: 110000
					},
					{
						label: '天津市',
						value: 120000
					},
					{
						label: '广州市',
						value: 440100
					},
					{
						label: '深圳市',
						value: 440300
					}
				],
				pickerValueDefault: [0],
				dispatchMileage: 0,
				sitCount:5,
				speed:100,
				dispatchOil:0,
				dispatchBrake:"",
				dispatchLaunch:"",
				dispatchTire:"",
				line: {
					text:"",
					id: ""
				},
				screenWidth: SystemInfo.screenWidth,
				screenHeight: SystemInfo.screenHeight
			}
		},
		onLoad: function (option) {
			this.registrationNo = option.registrationNo
			this.carId = option.carId
			this.carType = option.carType
			if (option.g === 'null' || !option.g) {
				this.dispatchMileage = 0;
			} else {
				this.dispatchMileage = option.g
			}
			var param = {
				pageNo:1,
				pageSize:10,
			}
			var $this = this
			lineData({data: param}).then(res=>{
				// $this.lineList.push("请选择线路")
				$this.lineList = res.data;
				$this.lineList.splice(0, 0, {name: '请选择线路', id: 'ces'})
				$this.lineList.forEach(inner=>{
					$this.lineValueList.push(inner.name)
				})
			})
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
				this.line.id = this.lineList[this.index].id
				this.line.text = this.lineList[this.index].name
				
			},
			oilDetermine () {
				this.dispatchOil = this.$refs.carOil.sliderValue()
				this.$refs.oilpopup.close()
			},
			oilCancle() {
				this.$refs.oilpopup.close()
			},
			determine () {
				this.dispatchMileage = this.$refs.carmileage.mileageValue()
				this.$refs.mileagepopup.close()
			},
			mileageCancle() {
				this.$refs.mileagepopup.close()
			},
			// getLine() {
			// 	this.showSinglePicker();
			// },
			// onCancel(e) {
			// 	console.log(e);
			// },
			// 单列
			// showSinglePicker() {
			// 	this.mode = 'selector';
			// 	this.deepLength = 1;
			// 	this.pickerValueDefault = [0];
			// 	this.$refs.mpvuePicker.show();
			// },
			// onConfirm(e) {
			// 	console.log(e.label);
			// 	this.line.id = e.value[0]
			// 	this.line.text = e.label
			// 	this.setStyle(0, e.label);
			// },
			// setStyle(index, text) {
			// 	let pages = getCurrentPages();
			// 	let page = pages[pages.length - 1];
			// 	if (text.length > 3) {
			// 		text = text.substr(0, 3) + '...';
			// 	}
			// 	// #ifdef APP-PLUS
			// 	let currentWebview = page.$getAppWebview();
			// 	let titleNView = currentWebview.getStyle().titleNView;
			// 	// 添加文字过长截取为3个字符，请根据自己业务需求更改
			// 	titleNView.buttons[0].text = text;
			// 	currentWebview.setStyle({
			// 		titleNView: titleNView
			// 	});
			// 	// #endif
			// 	// #ifdef H5
			// 	// h5 临时方案
			// 	document.getElementsByClassName('uni-btn-icon')[1].innerText = text;
			// 	// #endif
			// },
			getOil() {
				this.$nextTick(() => {
					this.$refs.oilpopup.open()
				})
			},
			getMileage () {
				this.$nextTick(() => {
					this.$refs.mileagepopup.open()
				})
			},
			back () {
				
				uni.redirectTo({
					url: '/application/carmanage/CarIndex'
				});
			},
		
			appearceChange (evt) {
				this.dispatchBrake = evt.target.value
			},
			startChange (evt) {
				this.dispatchLaunch = evt.target.value
			},
			tireChange (evt) {
				this.dispatchTire = evt.target.value
			},
			carDetermine(){
				if (!this.carId || !this.dispatchBrake || !this.dispatchLaunch || !this.dispatchTire  || this.dispatchOil==='0') {
					uni.showModal({
					    content: "内容不完善，请填写"
					})
				}
				else{
					var param = {
						carId: this.carId,
						dispatchBrake: this.dispatchBrake,	
						dispatchLaunch: this.dispatchLaunch,
						dispatchMileage: this.dispatchMileage,	
						dispatchOil: this.dispatchOil,		
						dispatchTire: this.dispatchTire,
						lineId:	this.line.id
					}
					doDispatch ({data: param}).then(res=>{
						if (res.success) {
							useCar().then(res=>{
								var carId = res.result.carId
								var registrationNo = res.result.registrationNo
								var carType = res.result.carType
								var lineStartSite = res.result.lineStartSite
								var lineEndSite = res.result.lineEndSite
								var dispatchMileage = res.result.dispatchMileage
								var lineId = res.result.lineId
								var dispatchTime = res.result.dispatchTime
								var statusRun = res.result.statusRun
								debugger
								uni.redirectTo({
									url: '/application/carmanage/CarLine?carId=' + carId + '&registrationNo=' + registrationNo+ '&carType=' + carType
									+ '&lineStartSite=' + lineStartSite + '&lineEndSite=' + lineEndSite + '&dispatchMileage=' + dispatchMileage + '&dispatchTime=' + dispatchTime + '&statusRun=' + statusRun
								});
							})
						}
					})
				}
			},
			
		}
	}
</script>
<style lang="scss" scoped>
	.content{
		// overflow-y: hidden;
	}
	.no-select-line uni-image {
	    width: 30rpx;
	    height: 30rpx;
		display: inline-block;
	}
	.select-line uni-image {
	    width: 30rpx;
	    height: 30rpx;
		display: inline-block;
	}
	.cu-list.menu>.cu-item .content>uni-image{
		width: 30rpx;
		height: 30rpx;
		display: inline-block;
	}
	.uni-check{
		display: inline-block;
		margin-left: 20rpx;
	}
	
	// .uni-navbar--border{
	// 	width: 100%!important;
	// }
	// .car-digit text:first-child{
	// 	font-size:12px;
	// 	font-family:PingFang SC;
	// 	font-weight:500;
	// 	color:rgba(153,153,153,1);
	// }
</style>

<style lang="less" scoped>
	.cheta-bar{
		width: 100%;
	}
	
	.cheta-cardetail{
		text-align: center;
		.cheta-top-content{
			text-align: center;
			.car-detail {
				font-size:21px;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
				display: inline-block;
				width: 100%;
				
			}
			.uni-cardetail-img{
				width: 538rpx;
				height: 290rpx;
			}
			
		}
		.cheta-car-manager{
			margin-top: 30rpx;
			justify-content: center;
		}
		.car-digit text:first-child{
			font-size:12px;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
			padding-right: 20rpx;
		}
		.car-digit text:last-child{
			font-size:20px;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
			padding-right: 40rpx;
		}
		.cheta-cardetail{
			width: 48rpx;
		}
		
	}
	.car-font{
		font-size:14px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
		margin-left: 20rpx;
	}
	
	.car-road{
		font-size:14px;
		font-family:Source Han Sans CN;
		font-weight:400;
		color:rgba(204,204,204,1);
		display: inline-block;
		margin-left: 20rpx;
	}
	.cheta-button-wrap{
		width: 50%;
		display: inline-block;
	}
	.uni-line-padding{
		padding-left: 24rpx;
		padding-right: 24rpx;
	}
	.uni-display{
		display: flex;
	}
	.uni-radio-grad{
		-webkit-flex: 1;flex: 1;
		text-align: center;
	}
	.uni-textarea-top{
		margin-top: 20rpx;
	}
	.uni-button-top{
		margin-top: 40rpx;
	}
</style>
