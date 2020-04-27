<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<uni-nav-bar class="cheta-bar" :fixed="true" color="#000" background-color="#ffffff" :status-bar="true" @clickLeft="back" title="我的">
			</uni-nav-bar><!-- 
			<view style="margin: 0px 20rpx;">
				<view class="cu-list grid col-2">
					<view>
						<view>
							<h1>EMS</h1>
							<text class="text-grey text-sm">中国邮政速递物流股份有限公司</text>
						</view>
					</view>
					<view>
						image
					</view>
				</view>
			</view> -->
			<!-- <view class="cu-avatar xl round margin-left" style="background-image:url(https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png);"></view> -->
			<view style="margin: 0px 40rpx;">
				<image src="/static/img/mine/res.png" style="height: 80px;width: 100%;"></image>
			</view>
			<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						<view class="cu-tag badge" v-if="item.badge!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
			<view class="cu-list menu"><!-- 
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-list"></text>
						<text>所属机构</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">中国邮政速递物流股份有限公司</text>
					</view>
				</view> -->
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-profile"></text>
						<text>账号</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{ user.nickName || 'cheta' }}</text>
					</view>
				</view>
				<view class="cu-item" @click="clickAboutMe">
					<view class="content">
						<text class="cuIcon-info"></text>
						<text>关于软件</text>
					</view>
					<view class="action">
						<text class="cuIcon-right text-grey"></text>
					</view>
				</view>
				<view class="cu-item" @click="logout">
					<view class="content">
						<text class="cuIcon-circlefill"></text>
						<text>退出登录</text>
					</view>
					<view class="action">
						<text class="cuIcon-right text-grey"></text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: '行驶路线'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '报警中心'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '通讯人员'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '我的任务'
				}],
				index: -1,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				gridCol: 4,
				user: {}
			};
		},
		created () {
			this.user = uni.getStorageSync('userInfo');
		},
		methods: {
			pickerChange(e) {
				this.index = e.detail.value
			},
			// 注销
			logout () {
				// 清楚storage
				uni.setStorage({key: 'token', data: null});
				uni.setStorage({key: 'userInfo', data: null});
				uni.navigateTo({
					url: '/application/login'
				});
			},
			clickAboutMe: function() {
				uni.navigateTo({
					url: '/application/mine/about_me'
				});
			}
		}
	}
</script>