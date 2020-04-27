<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft"  :fixed="true" :status-bar="true" title="粤AUD581轨迹" @clickLeft="back">
			<view slot="right" @click="showModal">
				<text class="cuIcon-calendar"></text>
				<text class="cheta-declare">日期</text>
			</view>
		</uni-nav-bar>
		<map class="map" id="map1" ref="map1" :style="{width:screenWidth + 'px',height: screenHeight - 240 + 'px'}" :longitude="longitude" :latitude="latitude" :polyline="polyline"></map>
		<view class="cheta-bottom-frame">
			<view class="cheta-track-image">
				<view>
					<image class="positionsmall" src="/static/img/carnitor/positionsmall.png"></image>进入环视东路
				</view>
				<image class="smallcar" src="/static/img/carnitor/smallcar.png"/>
				<view>
					07:16:59
				</view>
			</view>
			<view class="cu-progress round margin-top xs">
				<view class="bg-green" :style="[{ width: '1%'}]"></view>
			</view>
			<view class="flex flex-wrap">
				<view class="basis-xs">
					<text class="cuIcon-refresh"></text>
				</view>
				<view class="basis-xs">
					<text class="cuIcon-back icon-green"></text>
				</view>
				<view class="basis-xs">
					<image class="play" src="/static/img/carnitor/play.png"></image>
				</view>
				<view class="basis-xs">
					<text class="cuIcon-right icon-green"></text>
				</view>
				<view class="basis-xs">
					1.5 X
				</view>
			</view>
		</view>

		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-green" @tap="loadTrack">确定</view>
					<view class="action text-blue" @tap="hideModal">取消</view>
				</view>
				<calendar ref="calendar" @change="change"></calendar>
			</view>
		</view>
	</view>
</template>
<script>
	import calendar from '@/application/car_monitor/modules/calendar.vue'
	import { getTrackDayByDate,getTrackListByDate } from '@/common/api.js'
	import { dateUtils } from '@/common/util.js'
	const SystemInfo = uni.getSystemInfoSync();
	export default {
		components: {
			calendar
		},
		data() {
			return {
				screenWidth: SystemInfo.screenWidth,
				screenHeight: SystemInfo.screenHeight,
				longitude:113.41,
				latitude:23.15,
				terminalNum: "14532623352",
				id: "",
				modalName: "bottomModal",
				dateUtils: dateUtils,
				polyline: {points: []}
			}
		},
		onLoad (option) {
			if (option.terminalNum) {
				this.terminalNum = option.terminalNum
			}
			this.id = option.id
		},
		methods:{
			close(){
				this.bottomsize = false;
			},
			back () {
				uni.navigateBack({
					delta: 1
				});
			},

			// 历史轨迹
			showModal() {
				this.modalName = 'bottomModal'
			},
			loadTrack(){
				this.modalName = null
			},
			hideModal() {
				this.modalName = null
			}
		},
		onReady() {
			this.map = uni.createMapContext("map1", this);
			var data = {
				date: this.dateUtils.formatDate(new Date(), 'YYYY-mm-dd'),
				terminalNum: this.terminalNum
			}
			var $this = this;
			getTrackDayByDate({data: data}).then(res => {
				res.result.forEach(item => {item.date = item.days})
				$this.$refs.calendar.setSelected(res.result)
			})
			getTrackListByDate({data: data}).then(res => {
				var polyline = $this.polyline;
				res.result.forEach(item => {
					polyline.points.push({
						latitude: item.latitude,
						longitude: item.longitude
					})
				})
				if (res.result.length) {
					$this.longitude = polyline[0].longitude
					$this.latitude = polyline[0].latitude
				}
			})
		},
	}
</script>
<style scoped>
	.cheta-bottom-frame{
		height:380rpx;
		background-color: #fff;
		border-radius:20px 20px 0px 0px;
		position: relative;
		padding: 0rpx 30rpx;
	}
	.play{width:100rpx;height:100rpx;}
	.smallcar{ width: 60px; height: 32px; }
	.positionsmall{ width:17px; height:21px;}
	.basis-xs{text-align: center;line-height: 50px;font-size: 25px;color: #999999;}
	.icon-green{color: #4ACF9A}

	.cu-progress{margin-top: 150rpx;margin-bottom: 30px;}
	.cheta-track-image{position: absolute;top: 10px;}
</style>
