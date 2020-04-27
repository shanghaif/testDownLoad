<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :border="false" :status-bar="true" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">关于软件</view>
		</uni-nav-bar>
		<view style="margin: 50px auto 10px auto;width: 100px;height: 100px;background-image: url(../../static/img/mine/aboutMeLogo.png);background-size: 100% 99.9%;">
		</view>
		<view style="text-align: center;font-size: 14px;color: #333;margin-bottom: 30px;">
			车塔云 {{version}}
		</view>
		<view class="uni-flex uni-row" style="justify-content: space-between;margin: 0 16px;border: solid #E1E1E1;border-radius: 10px 10px 0 0;border-width: 1px 1px 0 1px;"
		 @click="clickAboutMeList()">
			<view style="height: 50px;line-height: 50px;color: #333;font-size: 15px;padding-left: 16px;">功能介绍</view>
			<view style="margin-right: 12px;">
				<text class="lg text-gray cuIcon-right" style="font-size: 20px;height: 50px;line-height: 50px;"></text>
			</view>
		</view>
		<view @click="clickCheckVersion()" style="padding-left: 16px;margin: 0 16px;height: 51px;line-height: 51px;border: 1px solid #E1E1E1;border-radius: 0 0 10px 10px;color: #333;font-size: 15px;">检测新版本</view>
	</view>
</template>

<script>
	const SystemInfo = uni.getSystemInfoSync();
	import {
		getVersion
	} from '@/common/api.js';
	export default {
		data() {
			return {
				screenWidth: SystemInfo.screenWidth,
				screenHeight: SystemInfo.screenHeight,
				version: "",
				getVersionData: {}
			}
		},
		onLoad: function() {
			// this.version = plus.runtime.version;
			getVersion({
				data: {}
			}).then(res => {
				console.log(res)
				var resultlast = res
				if (resultlast.success) {
					var result = JSON.parse(res.result);
					this.getVersionData = result;
				} else {
					uni.showModal({
						content: resultlast.message,
						confirmText: "确定",
						cancelText: "取消"
					})
				}
			});
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			versionStringToNumber: function(item) {
				var array = item.split(".");
				var string = array.join();
				return parseInt(string);
			},
			updata: function() {
				uni.getSystemInfo({
					success: function(res) {
						console.log(res);
						if (res.platform == 'android') {
							this.AndroidCheckUpdate();
						} else if (res.platform == 'ios') {
							console.log('苹果升级');
						}
					}
				});
			},
			clickAboutMeList: function() {
				uni.navigateTo({
					url: 'aboutMeLogoList?item=' + encodeURIComponent(JSON.stringify(this.getVersionData)),
				});
			},
			clickCheckVersion: function() {
				if (this.versionStringToNumber(this.getVersionData.version) > this.versionStringToNumber(plus.runtime.version)) {
					console.log('升级');
					this.updata();
				} else {
					console.log('不用升级');
					uni.showToast({
						icon: 'none',
						title: '当前版本已经是最新版本',
						duration: 1500
					});
				}
			},
			// 自动更新
			AndroidCheckUpdate: function() {
				//res.data.androidurl    是apk的下载链接
				var dtask = plus.downloader.createDownload('http://file.terrybg.com/cheta/app/cheta.apk', {}, function(d, status) {
					// 下载完成  
					if (status == 200) {
						plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename), {}, {}, function(error) {
							uni.showToast({
								title: '安装失败',
								mask: false,
								duration: 1500
							});
						})
					} else {
						uni.showToast({
							title: '更新失败',
							mask: false,
							duration: 1500
						});
					}
				});
				dtask.start();
			}
		}
	}
</script>

<style>
	.content {
		background-color: white;
		height: 100%;
	}
</style>
