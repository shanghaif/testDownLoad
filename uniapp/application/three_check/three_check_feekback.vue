<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">任务处理</view>
			<!-- <view slot="right" class="icon-item" @click="clickRight()">
				关闭
			</view> -->
		</uni-nav-bar>

		<view class="text uni-flex" style="margin-left: 20px;padding-top: 13px;flex: 1 1 0%;align-items: center;">
			<text class="lg text-black" :class="'cuIcon-' + 'text'" style="font-size: 20px;color: black;margin-right: 6px;"></text>
			<view class="flex-item" style="color: #333333;font-size: 15px;">分类标签</view>
		</view>

		<scroll-view style="margin-top: 12px;" scroll-x class="bg-white nav" scroll-with-animation>
			<view class="cu-item" :class="index==TabCur?'seletTab cur':''" v-for="(item,index) in tabArray" :key="index" @tap="tabSelect(index)"
			 :data-id="index">
				{{item.contentName}}
			</view>
		</scroll-view>

		<view style="margin: 22px 0 0 22px;">
			<text style="color: #666666;font-size: 14px;">项目一</text>
			<text style="color: #999999;font-size: 12px;">（0/1000）</text>
		</view>

		<view class="uni-textarea" style="background-color: #F7F7F7;margin: 12px 18px 0 18px;width: auto;border-radius: 6px;">
			<textarea v-text="tabArray[TabCur].isInspect==2?tabArray[TabCur].inspectSituation:''" style="height: 170px;" @blur="bindTextAreaBlur" placeholder-style="color:#CCCCCC" placeholder="请输入你要反馈的内容......" />
		</view>
		
		<view class="uni-flex uni-row" style="margin: 12px 9px 0 9px;flex-wrap: wrap;">
			<view style="width: 50px;height: 50px;background-color: #F3F4F6;margin: 9px;border-radius: 6px;text-align: center;" @tap="chooseImage()">
				<image style="width: 19px;height: 19px;margin-top: 15.5px;" src="../../static/img/three_check/add_photo.png"></image>
			</view>
			<view v-for="(image, index) in photoArray" :key="index" style="width: 50px;height: 50px;background-color: #F3F4F6;margin: 9px;border-radius: 6px;">
				<image style="width: 100%;height: 100%;" :src="image" :data-src="image">
				</image>
				<view style="position: relative;height: 0px;max-width: none;bottom: 66px;left: 40px;">
					<image style="width: 19px;height: 19px;background-color: white;border-radius: 9.5px;" src="../../static/img/three_check/sub_photo.png" @click="clickClosePhoto(index)"></image>
				</view>
			</view>
		</view>
		
		<view class="menuBottomView" style="background-color: rgba(0,0,0,0);position: fixed;left: 0px;right: 0;bottom: 0;height: 43px;margin-bottom: 20px;">
			<button type="primary" style="margin: 0 20px;" @click="clickBottomButton()">提交反馈</button>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import {
		updataPhoto,basePhotoUrl,handleCtInspectCarProjec
	} from '@/common/api.js';
	export default {
		components: {
			uniIcons,
		},
		data() {
			return {
				baseInfo: {},
				TabCur: 0,
				photoArray: [],
				urlArray: [],
				tabArray: [],
				textValue: "",
			}
		},
		onLoad: function(item) {
			this.baseInfo = JSON.parse(decodeURIComponent(item.baseInfo));
			this.tabArray = JSON.parse(decodeURIComponent(item.dataArray));
			console.log(this.baseInfo);
			console.log(this.tabArray);
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			chooseImage: async function () {
				var that = this;
				console.log(that.refuel);
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'],
					sourceType: ['camera','album'],
					success: function (res) {
							console.log(res);
							that.photoArray = that.photoArray.concat(res.tempFilePaths);
							
							uni.showLoading({});
							for (var i=0;i<that.photoArray.length;i++)
							{
								uni.uploadFile({
								    url: basePhotoUrl, //仅为示例，非真实的接口地址
								    filePath: that.photoArray[i],
								    name: 'file',
								    success: (uploadFileRes) => {
										console.log(uploadFileRes);
										that.urlArray = that.urlArray.concat(uploadFileRes.data);
										if (that.urlArray.length == that.photoArray.length) {
											uni.hideLoading();
										}
								    }
								});
							}
							// uni.uploadFile({
							//             url: basePhotoUrl, //仅为示例，非真实的接口地址
							//             filePath: res.tempFilePaths[0],
							//             name: 'file',
							//             success: (uploadFileRes) => {
							// 				console.log(uploadFileRes.data);
							//             }
							//         });
					}
				});
			},
			clickClosePhoto: function (i) {
				this.photoArray.splice(i,1);
				this.urlArray.splice(i,1);
			},
			tabSelect: function(i) {
				this.TabCur = i;
				if (this.tabArray[this.TabCur].isInspect==2) {
					this.photoArray = [];
					this.urlArray = [];
					if (this.tabArray[this.TabCur].imgOne) {
						this.photoArray.push(this.tabArray[this.TabCur].imgOne);
						this.urlArray.push(this.tabArray[this.TabCur].imgOne);
					}
					if (this.tabArray[this.TabCur].imgTwo) {
						this.photoArray.push(this.tabArray[this.TabCur].imgTwo);
						this.urlArray.push(this.tabArray[this.TabCur].imgTwo);
					}
					if (this.tabArray[this.TabCur].imgThree) {
						this.photoArray.push(this.tabArray[this.TabCur].imgThree);
						this.urlArray.push(this.tabArray[this.TabCur].imgThree);
					}
					if (this.tabArray[this.TabCur].imgFour) {
						this.photoArray.push(this.tabArray[this.TabCur].imgFour);
						this.urlArray.push(this.tabArray[this.TabCur].imgFour);
					}
				}
			},
			bindTextAreaBlur: function (e) {
				console.log(e.detail.value);
				this.textValue = e.detail.value;
			},
			clickBottomButton: function() {
				console.log(this.urlArray);
				var param = {
					inspectCarId: this.baseInfo.inspectCarId,
					abnormalRemarks: "", //暂时没用
					id: this.tabArray[this.TabCur].id,
					imgOne: this.urlArray[0],
					imgTwo: this.urlArray[1],
					imgThree: this.urlArray[2],
					imgFour: this.urlArray[3],
					inspectSituation: this.textValue,
					isInspect: 2
				}
				handleCtInspectCarProjec({
					data: param
				}).then(res => {
					console.log(res)
					var resultlast = res
					if (resultlast.success) {
						uni.navigateTo({
							url: 'three_check_feekback_succes',
						});
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
	.content{
		height: 100%;
		background-color: white;
	}
	.nav .cu-item.cur {
	    border-bottom: 0px solid;
		background-color: #21D59D;
		color: white;
		font-size: 12px;
		height: 29px;
		border-radius: 14.5px;
		line-height: 29px;
	}
	.nav .cu-item {
	    border-bottom: 0px solid;
		background-color: rgba(0,0,0,0.05);
		color: rgba(0,0,0,0.5);
		font-size: 12px;
		height: 29px;
		border-radius: 14.5px;
		line-height: 29px;
	}
	
	.menuBottomView button{
		background-color: #4ACF9A;
		border-radius: 21.5px;
		font-size: 17px;
	}
	
	.menuBottomView button::after{
		border-radius: 21.5px;
		font-size: 17px;
	}
	
	.button-hover[type=primary] {
		background-color:rgba(74, 207, 154, 0.3);
	}
</style>
