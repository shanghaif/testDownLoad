<template>
	<view class="uni-login-content" :style="{width:screenWidth + 'px',height:screenHeight + 'px'}">
		<view class="uni-title">
			<view class="uni-login">HI,欢迎登录</view>
			<view class="uni-start">赶快开启智慧管车吧</view>
		</view>
		<!-- <form @submit="formSubmit"> -->
			<view class="uni-common-mt">
				<view class="uni-form-item uni-column">
					 <view class="title">帐号</view>
					<input class="uni-input uni-input-border" :value="loginName" @input="keyChange" focus placeholder="请输入账号" />
				</view>
				<view class="uni-form-item uni-column">
					 <view class="title">密码</view>
					<input type="password" class="uni-input uni-input-border" :value="password" @input="dataChange" focus placeholder="请输入密码" />
				</view>
			</view>
		<!-- </form> -->
		<view class="uni-button-top button-attribute">
			<button type="primary" class="cheta-button-primary" @click="doLogin" v-if="password">
				登录
			</button>
			<button class="cheta-button-disabled" v-else>
				登录
			</button>
		</view>
	</view>
</template>

<script>
	import {login} from '@/common/api.js'
	const SystemInfo = uni.getSystemInfoSync();
	export default {
		data() {
			return {
				title: 'get/set/clearStorage',
				loginName: '',
				password: '',
				navigateFlag:false,
				screenWidth: SystemInfo.screenWidth,
				screenHeight: SystemInfo.screenHeight
			}
		},
		methods: {
			keyChange: function (e) {
				this.loginName = e.detail.value
			},
			dataChange: function (e) {
				this.password = e.detail.value
			},
			doLogin () {
				var data = {loginName: this.loginName, loginType: "PC", password: this.password};
				login({data: data}).then(res => {
					this.setStorage('userInfo', res.result.userInfo)
					// 设置 token
					uni.setStorage({
						key: 'token',
						data: res.result.token
					});
				});
			},
			// 设置缓存
			setStorage (key, data) {
				uni.setStorage({
					key: key,
					data: data,
					success: (res) => {
						uni.switchTab({
							url: '/application/home',
						});
					},
					fail: () => {
						uni.showModal({
							title: '登录失败',
							content: "找不到 key 对应的数据",
							showCancel:false
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.uni-login-content{
		background: white;
		padding-left: 31px;
		padding-right: 31px;
		padding-top: 50px;
	}
	.uni-title{
		line-height:75px;
	}
	.title{
		font-size:18px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height:44px;
	}
	.uni-input {
	    height: 35px;
	}
	.uni-login{
		font-size:30px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(0,0,0,1);
		
	}
	.uni-start{
		font-size:13px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.uni-input-border{
		border-bottom: 1px solid rgba(229,229,229,1);
	}
	.cheta-button-primary{
		background:rgba(74,207,154,1);
		border-radius:41px;
	}
	.cheta-button-disabled{
		background:#CCCCCC;
		border-radius:41px;
		color: white;
	}
	.cheta-button-primary uni-button:after{
		border: 0px solid rgba(0,0,0,.2)!important;
	}
	.button-attribute{
		text-align: center;
		// bottom: 100rpx;
	}
	.uni-button-top{
		margin-top: 260rpx;
	}
	
</style>
