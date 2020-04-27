<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" :border="false" background-color="#477DEF" title="车辆详情" color="#FFFFFF"
			 @clickLeft="back">
			</uni-nav-bar>
			<image src="/static/img/carnitor/moredetail.png"></image>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> {{carObject.registrationNo}} 
				</view>
			</view>
			<view class="cu-list menu text-left solid-top">
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">
                                所属机构: 
						</text>
						<text>{{carObject.organ}}</text>
					</view>
					<view class="content">
						<text class="text-grey">
                                车辆类型: 
						</text>
						<text>{{carObject.carType}}</text>
					</view>
				</view>
			</view>
			<!-- 定位信息 -->
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text>定位信息
				</view>
			</view>
			<view class="cu-list menu text-left solid-top">
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">
			                    定位时间: 
						</text>
					</view>
					<view class="action">
						<text>{{carObject.gt}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">
				                当前速度: 
						</text>
					</view>
					<view class="action">
						<text>{{carObject.sp}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">
				                当前方向: 
						</text>
					</view>
					<view class="action">
						<text>{{ direction }}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">
				                行驶里程: 
						</text>
					</view>
					<view class="action">
						<text>{{carObject.g}}</text>
					</view>
				</view>
			</view>
			<!-- 状态信息 -->
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text>当前状态
				</view>
			</view>
			<view class="cu-list menu text-left solid-top">
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">
			                    当前状态: 
						</text>
					</view>
					<view class="action">
						<text>{{carObject.gs.split("、")[0]}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey">
				                在线状态: 
						</text>
					</view>
					<view class="action">
						<text>在线</text>
					</view>
					<!-- carObject.statusRun -->
					<!-- {{getConstant().statusRun}} -->
				</view>
			</view>	
		</scroll-view>
	</view>
</template>

<script>
	import { getStatusSum,getCarDetailById } from '@/common/api.js'
	import {gpsUtil} from '@/common/util.js'
	import constant from '@/common/constant.js';
	export default {
		data() {
			return {
				carId:"",
				carObject:{},
				gpsUtil:gpsUtil,
				direction:'',
			}
		},
		onLoad(option) {
			this.carId = option.carId
			this.getData()
			
		},
		methods: {
			
			getData () {
				var $this = this
				var param = {
					id: this.carId
				}
				getCarDetailById ({data: param}).then(res=>{
					if (res.success) {
						$this.direction = $this.gpsUtil.angParse(res.result.ang)
						$this.carObject =  res.result
					}
				})
			},
			getConstant () {
				return constant;
			  },
			back() {
				uni.navigateTo({
					url: '/application/car_monitor/Map',
				});
			}
		}
	}
</script>

<style lang="scss">
	uni-image{
		width:756px
	}

</style>
