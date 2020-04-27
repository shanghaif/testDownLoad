<template>
	<view class="main" :style="{width:screenWidth + 'px',height:screenHeight + 'px'}">
		<uni-nav-bar left-icon="arrowleft"  :fixed="true" :status-bar="true" title="结束行程" @clickLeft="back">
		</uni-nav-bar>
		<map class="map" id="map1" ref="map1">
		</map>
		<view class="cheta-warn"><image src="../../static/img/icon/warn.png"></image>你所还的车定位不处于停车点，请停至规定范围！</view>
		<uni-card mode="basic" isFull="true">
			<form>
				<view class="cu-list menu">
					<view class="cu-item" @click="getOil">
						<view class="content">
							<image src="/static/img/icon/youka.png"/>
							<text class="car-font">车辆油量</text>
						</view>
						<view class="action">
							<text class="car-font">{{returnOil}}%</text>
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
							<text class="car-font">{{returnRunmileage || 0}}</text>
						</view>	
					</view>
					<uni-popup ref="mileagepopup" type="bottom">
						<view style="background-color: #FFF;height: 700rpx;">
							<CarMileage ref="carmileage" :returnRunmileage = "returnRunmileage"></CarMileage>
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
								<view class="uni-radio-grad"><radio  value="正常" :checked="checked" /><text>正常</text></view>
								<view  class="uni-radio-grad"><radio  value="异常" :checked="checked" /><text>异常</text></view>
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
								<view class="uni-radio-grad"><radio  value="正常" :checked="checked"/><text>正常</text></view>
								<view  class="uni-radio-grad"><radio  value="异常" :checked="checked"/><text>异常</text></view>
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
								<view class="uni-radio-grad"><radio  value="正常" :checked="checked"/><text>正常</text></view>
								<view  class="uni-radio-grad"><radio  value="异常" :checked="checked"/><text>异常</text></view>
							</radio-group>
						</view>
					</view>
					<view class="cu-item" v-if="appearanceShow">
						<view class="content">
							<textarea @blur="bindTextAreaBlur" placeholder="请输入异常原因" auto-height />
						</view>
						
						
					</view>
				</view>	
				
				<view class="uni-padding-button uni-common-mt button-attribute">
					<button type="primary" class="cheta-button-primary" @click="carBackDetermine">
						确定还车</text>
					</button>
				</view>
				
				
			</form>
		</uni-card>
	</view>
</template>

<script>
	// import uniCombox from '@/components/uni-combox/uni-combox.vue'
	import { doReturn,useCar } from '@/common/api';
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	import CarOil from '@/application/carmanage/CarOil.vue';
	import CarMileage from '@/application/carmanage/CarMileage.vue';
	const SystemInfo = uni.getSystemInfoSync();
		
	export default {
		components: {
			CarOil,
			CarMileage,
			mpvuePicker
		},
		data() {
			return {
				current: 0,
				appearanceShow: false,
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				returnRunmileage: 0,
				returnOil:0,
				dispatchBrake:"",
				dispatchLaunch:"",
				dispatchTire:"",
				carId:"",
				checked: false,
				screenWidth: SystemInfo.screenWidth,
				screenHeight: SystemInfo.screenHeight
			}
		},
		onReady() {
		    this.map = uni.createMapContext("map1", this);
		},
		
		onLoad: function (option) {
			this.carId = option.carId
			this.returnRunmileage = option.dispatchMileage
		},
		methods: {
		
			oilDetermine () {
				this.returnOil = this.$refs.carOil.sliderValue()
				this.$refs.oilpopup.close()
			},
			oilCancle() {
				this.$refs.oilpopup.close()
			},
			determine () {
				this.returnRunmileage = this.$refs.carmileage.mileageValue()
				this.$refs.mileagepopup.close()
			},
			cancle() {
				this.$refs.mileagepopup.close()
			},
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
			appearceChange (evt) {
				this.dispatchBrake = evt.target.value
				if (this.dispatchBrake === '异常') {
					this.appearanceShow = true
				}
				else{
					this.appearanceShow = false
				}
			},
			startChange (evt) {
				this.dispatchLaunch = evt.target.value
				if (this.dispatchLaunch === '异常') {
					this.appearanceShow = true
				}
				else{
					this.appearanceShow = false
				}
			},
			tireChange (evt) {
				this.dispatchTire = evt.target.value
				if (this.dispatchTire === '异常') {
					this.appearanceShow = true
				}
				else{
					this.appearanceShow = false
				}
			},
			back () {
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
					uni.navigateTo({
						url: '/application/carmanage/CarLine?carId=' + carId + '&registrationNo=' + registrationNo+ '&carType=' + carType
						+ '&lineStartSite=' + lineStartSite + '&lineEndSite=' + lineEndSite + '&dispatchMileage=' + dispatchMileage + '&dispatchTime=' + dispatchTime + '&statusRun=' + statusRun
					});
				})
				// uni.navigateBack({
				//     delta: 1
				// });
			},
			carBackDetermine(){
				if (!this.carId || !this.dispatchBrake || !this.dispatchLaunch || !this.dispatchTire || this.returnRunmileage=== '0' || this.returnOil==='0') {
					uni.showModal({
					    content: "内容不完善，请填写"
					})
					
				}else{
					var param = {
						carId: this.carId,
						returnBrake: this.dispatchBrake,	
						returnLaunch: this.dispatchLaunch,
						returnRunmileage: this.returnRunmileage,	
						returnOil: this.returnOil,		
						returnTire: this.dispatchTire,	
					}
					doReturn ({data: param}).then(res=>{
						if (res.success) {
							uni.switchTab({
								url: '/application/home',
							});
						}
					})
				}
				
				
				
			},
		}
	}
</script>
<style>
	.cheta-warn uni-image {
	
	    width: 25px;
	    height: 18px;
		margin: 20rpx 10rpx 0rpx 10rpx;
		
		}
	.uni-card{
		border-bottom: 0rpx!important;
	}
	
</style>

<style lang="scss" scoped>
	
	.main {
	    flex: 1;
		background: white;
		padding-bottom: 64rpx;
	}
	
	.map {
	    width: 710rpx;
	    height: 358rpx;
	    background-color: #f0f0f0;
		padding-left: 20rpx;
		padding-right: 20rpx;
		background: white;
	}
	.cheta-img{
		width: 36rpx;
		height: 36rpx;
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
		// position: absolute;
		bottom: 100rpx;
	}
	.cheta-warn{
		width: 710rpx;
		height: 45px;
		font-size:12px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,125,67,1);
		line-height: 45px;
		background: rgba(255,125,67,0.2);
		margin-left: 20rpx;
	}
	.uni-padding-button{
		width: 690rpx;
	}
	
	.cheta-button-wrap{
		width: 50%;
		display: inline-block;
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
	.uni-display{
		display: flex;
	}
	.uni-radio-grad{
		-webkit-flex: 1;flex: 1;
		text-align: center;
	}
	.uni-check{
		display: inline-block;
		margin-left: 20rpx;
	}
	.uni-button-top{
		margin-top: 40rpx;
	}

</style>
