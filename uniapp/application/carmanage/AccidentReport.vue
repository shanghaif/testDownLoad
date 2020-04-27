<template>
	<view class="content" :style="{width:screenWidth + 'px',height:screenHeight + 'px'}">
		<uni-nav-bar left-icon="arrowleft"  :fixed="true" :status-bar="true" title="事故上报" @clickLeft="back">
		</uni-nav-bar>
		<map class="map" @tap="maptap" id="map1" ref="map1" :style="{width:screenWidth -20 + 'px',height:screenHeight - 500 + 'px'}" :longitude="longitude" :latitude="latitude">
		</map>
		<form>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					车牌号: 
				</view>
				<view class="action">
					{{registrationNo}}
				</view>
			</view>
			
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					事故地址: 
				</view>
				<view class="action">
					{{ address }}
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">事故类型</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择事故类型'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-bar bg-white">
				<view class="action">
					事故描述({{description.length}})
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<textarea maxlength="-1" placeholder="请输入事故描述" v-model="description"></textarea>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>ss
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					备注
				</view>
			</view>
			<view class="cu-form-group">
				<textarea maxlength="-1" placeholder="请输入备注" v-model="remark"></textarea>
			</view>
			<view class="cu-form-group">
				<view class="uni-button-width uni-common-mt button-attribute cheta-bg-white">
					<button type="primary" class="cheta-button-primary" @click="determinReport">
						<text class="san-code" @click="determinReport">确定上报</text>
					</button>
				</view>
			</view>
		</form>
	</view>	
</template>

<script>
	import {TrackAccidentByData} from '@/common/api.js'
	const SystemInfo = uni.getSystemInfoSync();
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		data() {
			return {
				index: -1,
				picker: ['一般事故', '较大事故', '重大事故'],
				description:"",
				title: 'choose/previewImage',
				imgList:[],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				screenWidth: SystemInfo.screenWidth,
				screenHeight: SystemInfo.screenHeight,
				remark:'',
				files:'',
				imgfiles:[],
				latitude: 23.173282,
				longitude: 113.574520,
				address:"",
				map:{},
				carId:'',
				registrationNo:""
			}
			
		},
		onReady() {
		    this.map = uni.createMapContext("map1", this);
		},
		created () {
			this.doGetLocation()
		}, 
		onLoad: function (option) {
			this.carId = option.carId
			this.registrationNo = option.registrationNo
		},
		methods: {
            maptap(e) {
                uni.showModal({
                    content: JSON.stringify(e)
                })
            },
			doGetLocation() {
				var $this = this
				uni.showModal({
					title: 'ces'
				}) 
			    uni.getLocation({
					geocode: true,
			        success: (res) => {
						$this.latitude = res.latitude;
						$this.longitude = res.longitude;
						if (res.address) {
							var address = res.address
							$this.address = address.province + address.city + address.district + address.street + address.streetNum
						} else {
							$this.address = '北京东城'
						}
			        }
			    })
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			back () {
				uni.switchTab({
					url: '/application/home',
				});
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], 
				    success: (res) => {
				        const tempFilePaths = res.tempFilePaths;
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
						var $this = this
				        uni.uploadFile({
				            url: 'http://49.234.21.239:9001/zgbd/file/cheta/uniFileUpload', //仅为示例，非真实的接口地址
				            filePath: this.imgList[0],
				            name: 'file',
				            success: (uploadFileRes) => {
								$this.imgfiles.push(uploadFileRes.data)
								$this.files = $this.imgfiles.join(",")
				            }
				        });
				    }
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '删除图片',
					content: '确定要删除这个图片吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
		
			determinReport () {
				var param = {
					 carId: this.carId,
					 address: this.address,
					 description: this.description,
					 type: this.picker[this.index],
					 remark: this.remark,
					 files: this.files
				}
				TrackAccidentByData({data:param}).then(res=>{
					if (res.success){
						uni.switchTab({
							url: '/application/home',
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '/static/css/chetaui-main.css';
	.uni-uploader__input-box{
		width:100rpx;
		height: 100rpx;
	}
	.uni-uploader-head{
		margin-left: 20rpx;
	}
	.content {
	    flex: 1;
		background: white;
		padding-bottom: 64rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}
	
	.map {
	    // width: 710rpx;
	    // height: 358rpx;
	    background-color: #f0f0f0;
		background: white;
	}
	
	.cheta-desc{
		width: 690rpx;
		height: 170px;
		background:rgba(247,247,247,1);
		border-radius:10px;
		margin-left: 10rpx;
		margin-right: 10rpx;
		
	}
	.desc-font{
		font-size:16px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(102,102,102,1);
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-top: 20rpx;
	}
	.desc-font text{
		font-size:20px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
		margin-left: 20rpx;
	}
	.uni-uploader__img {
	    display: block;
	    width: 50px;
	    height: 50px;
	}
	.uni-uploader__file {
	    // margin: 5px;
	    width: 50px;
	    height: 50px;
		
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
		bottom: 100rpx;
	}
	.uni-button-width{
		width: 690rpx;
	}
	
	

</style>
