<template>
	<view style="height: 100%;position: relative;">
		<uni-nav-bar
				left-icon="arrowleft"
				:fixed="true"
				:status-bar="true"
				title="加油登记"
				right-text="完成"
				color="#fff"
				background-color="#4ACF9A"
				@clickLeft="back"
				@clickRight="finish">
		</uni-nav-bar>
		<view class="content_top"></view>
		<view class="container">
			<image src="/static/img/refuelRegister/car.png"></image>
			<form>
				<view class="cu-form-group">
					<view class="title"><i>*</i>车牌号</view>
					<input placeholder="请输入车牌号" name="input"  v-model="carNum"></input>
				</view>
				<view class="cu-form-group">
					<view class="title"><i>*</i>油卡卡号</view>
					<input placeholder="请输入油卡卡号" name="input"  v-model="OilCardNumber"></input>
				</view>
				<view class="cu-form-group">
					<view class="title"><i>*</i>里程数</view>
					<input placeholder="请输入里程数" name="input"  v-model="mileage"></input>
				</view>
				<view class="cu-form-group">
					<view class="title"><i>*</i>加油升数</view>
					<input placeholder="请输入加油升数" name="input"  v-model="refuel"></input>
				</view>
				<view class="cu-form-group">
					<view class="title"><i>*</i>加油金额</view>
					<input placeholder="请输入加油金额" name="input"  v-model="money"></input>
				</view>
				<view class="cu-form-group">
					<view class="title"><i>*</i>加油品种</view>
					<input placeholder="请输入加油品种" name="input"  v-model="variety"></input>
				</view>

				<view class="cu-form-group">
					<view class="title"><i>*</i>加油供应商</view>
					<input placeholder="请输入加油供应商" name="input"  v-model="stationName"></input>
				</view>
				<view class="cu-form-group">
					<view class="title"><i>*</i>加油日期</view>
					<picker mode="date" fields='day' :start="startDay" :end="endDate" @change="bindDateChange">  <!--  @change="startTime" -->
					  <view class="uni-input txt_s">{{date}}</view>  
					</picker>
				</view>
				<!-- <view class="cu-form-group">
					<view class="title">备注</view>
					<textarea class="remarks" placeholder="请输入备注" name="input"  v-model="remarks"></textarea>
				</view> -->
			</form>
			<view class="sweep-code" @tap="scanCodeImage">
				<text>车辆扫码</text>
			</view>
			<view class="ewm" @tap="chooseImage">
				<!-- <uniIcons :style="{ color: 'white', 'font-size': '20px', 'margin': '10px' }" type="scan" size="20"/> -->
				<text>票据扫描</text>
			</view>
			<view class="sample" @tap="showSample">
				<uni-icons type="help" size="14" color="#EB8757"></uni-icons>
				<text>示例</text>
			</view>
			<view class="invoice" v-if="invoiceShow">  <!-- 发票层 -->
				<image src="/static/img/refuelRegister/invoice.png" >
					<text class="reminder">请将发票置入拍照区识别登记!</text>
					<text class="close"  @tap="close">×</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import {insertOrUpdate} from '@/common/api';
	var util = require('@/common/util.js');
	var formatLocation = util.formatLocation;
	const SystemInfo = uni.getSystemInfoSync();
	export default {
		components: {
			uniIcons,
			uniList,
			uniListItem
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				title: 'nav-button',
				carNum: '',
				OilCardNumber: '',
				mileage: '',
				refuel: '',
				money: '',
				variety: '',
				stationName: '',
				date:currentDate,
				time: '12:01',
				value_startTime: '点击打开 picker',   
				startDay:'2019-10-19'  
			}
		},
		methods:{
			back() {
				uni.switchTab({
					url: '/application/home',
				});
			},
			finish(){
				if(this.carNum.trim().length&&
						this.OilCardNumber.trim().length&&
						this.mileage.trim().length&&
						this.money.trim().length&&
						this.variety.trim().length&&
						this.stationName.trim().length&&
						this.date.trim().length){
					let param = {
						registrationNo: this.carNum, 		//车辆号
						mileage: this.mileage,             //里程数
						oilCapacity: this.refuel,		   //加油升数
						money: this.money,			       //加油金额
						oilQuality: this.variety,          //加油品种
						cardNumber: this.OilCardNumber,       //油卡卡号
						stationName: this.stationName,		   //加油供应商
						date: this.date.replace(/(.+?)\年(.+?)\月(.+)\日/,"$1-$2-$3")
					}
					console.log(this.date.replace(/(.+?)\年(.+?)\月(.+)\日/,"$1-$2-$3"));
					console.log(param)
					insertOrUpdate({data: param}).then(res=>{
						console.log(res);
						uni.switchTab({
							url: '/application/home'
						});
					})
				}
				else{
					uni.showModal({
						title: '登记还没完成',
						content: '请继续完善资料填写!',
						confirmText: "确定",
						cancelText: "取消",
						success: function (res) {
							if (res.confirm) {
								console.log('点击确定')// doReg()
							} else if (res.cancel) {
								console.log('点击取消');
							}
						}
					})
				}

			},
			chooseImage: async function () {
				var that = this;
				console.log(that.refuel);
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //从相册选择
					success: function (res) {
						const tempFilePaths = res.tempFilePaths;
						uni.uploadFile({
							url: 'http://49.234.21.239:9002/system/application/ocr/car/vatInvoice', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0], // uni.chooseImage函数调用后获取的本地文件路劲
							name:'file',     //后端通过'file'获取上传的文件对象
							success:(res) => {
								// console.log(JSON.parse(res.data).result);
								let refuelObj = JSON.parse(JSON.parse(res.data).result).words_result;
								console.log(refuelObj.CommodityNum[0].word);
								that.refuel = refuelObj.CommodityNum[0].word;
								that.money = refuelObj.TotalAmount;
								that.variety = refuelObj.CommodityName[0].word;
								that.supplier = refuelObj.SellerName;
								that.date = refuelObj.InvoiceDate;
							}
						});
					}
				});
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
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
				this.value_startTime = `${year}-${month}-${day}`
				console.log(this.value_startTime)
				return `${year}-${month}-${day}`;
			},
			showSample(){
				this.invoiceShow = true;
			},
			close(){
				this.invoiceShow = false;
			},
			scanCodeImage: function() {
				uni.scanCode({
					success: function (res) {
						if (res.result.lastIndexOf('/') > 0) {
							var id = res.result.substring(res.result.lastIndexOf('/') + 1);
							carParse({data: {id: id}}).then(res => {
								var resultlast = res
								if (resultlast.success) {
									var result = resultlast.result;
									this.carNum = result.registrationNo;
								}else{
									uni.showModal({
										content: resultlast.message,
										confirmText: "确定",
										cancelText: "取消"
									})
								}
							})
						} else {
							uni.showModal({
								content: '扫码失败！',
								confirmText: "确定",
								cancelText: "取消"
							})
						}
					}
				})
			},
		},
		components:{
			uniIcons
		}
	}
</script>

<style scoped>
	.uni-navbar >>> .uni-navbar--border{
		border-bottom-color: #4ACF9A!important;
	}
	.uni-input-placeholder{
		color: #ddd;
	}
</style>

<style lang="scss" scoped>
	html,body{
		width: 100%;
		height: 100%;
	}
	body{
		background-color: #F3F4F6;
	}
	.uni-input{
		height: 43px;
		padding:0;
		line-height: 46px;
	}
	.remarks{
		margin:10rpx 0;
		padding:10rpx;
		border:1px solid #eaeaea;
		color:#eaeaea;
	}
	.remarks:placeholder{color:#eaeaea;}
	.cu-form-group i{color:red;}
	.content_top{
		background-color: #4ACF9A;
		width: 100%;
		height: 33%;
	}
	.container{
		position: absolute;
		display: flex;
		flex-direction: column;
		width: 690rpx;
		height: calc(100% - 54px);
		left: 0;
		right: 0;
		padding: 0 10px;
		top: 44px;
		margin: auto;
		background: url(../../static/img/refuelRegister/bg.png);
		background-size: 100% 100%;
		image{
			display: block;
			width: 240rpx;
			height: 65px;
			margin: 43px auto 0;
		}
		form{
			padding: 0 24rpx;
			box-sizing: border-box;
			height: calc(100% - 190px);
			overflow: auto;
			margin-bottom: 10px;
		}
		.ewm{
			position: absolute;
			left:280rpx;
			bottom:15px;
			height: 45px;
			line-height: 45px;
			text-align: center;
			width: 240rpx;
			border-radius: 23px;
			background: #4ACF9A;
			color: #fff;
			font-size: 18px;
		}
		.sweep-code{
			position: absolute;
			left:30rpx;
			bottom:15px;
			width:240rpx;
			height:45px;
			border-radius:23px;
			background:#4acf9a;
			text-align:center;
			text{
				color:#fff;
				line-height:45px;
				font-size:18px;
				
			}
		}
		.sample{
			position: absolute;
			bottom: 25px;
			right: 50rpx;
			color: #EB8757;
			font-size: 14px;
			text{
				margin-left: 4px;
			}
		}
		.invoice{
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: #7F7F7F;
			z-index: 33333333;
			image{
				position: absolute;
				height: 70%;
				width: 80%;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				margin: auto;
			}
			.reminder{
				position: absolute;
				text-align: center;
				left: 0;
				bottom: 10%;
				right: 0;
				margin: auto;
				color: #fff;
			}
			.close{
				position: absolute;
				right: 10px;
				top: 10px;
				width: 36px;
				height: 36px;
				line-height: 36px;
				text-align: center;
				font-size: 36px;
				color: #fff;
				border-radius: 50%;
			}
		}
	}


</style>


