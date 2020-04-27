<template>
	<view class="cu-list menu">
		<view class="cu-item" @click="getOil">
			<view class="content">
				<p class="cheta-font40">粤ADU145</p>
				<p class="">车辆油量</p>
			</view>
			
			<view class="content uni-car-img">
				<image src="/static/img/icon/smallcar.png"/>
			</view>
		</view>
		<view class="cu-item cheta-box-flex">
			<view class="content">
				<text class="cheta-font-grey cheta-block">驾驶员:</text>
				<text class="cheta-block">不少地方</text>
			</view>
			<view class="uni-grade">
				<text class="cheta-font-grey">上报时间:</text>
				<text class="">2019-06-25 02:41:22</text>
			</view>
		</view>
		<view class="cu-item cheta-box-flex">
			<view class="content">
				<text class="cheta-font-bold cheta-block">ACC开</text>
				<text class="cheta-font24 cheta-font-grey cheta-block">状态(实时）</text>
			</view>
			<view class="content">
				<text class="cheta-font-bold cheta-block">ACC开</text>
				<text class="cheta-font24 cheta-font-grey cheta-block">方向（实时）</text>
			</view>
			<view class="content">
				<text class="cheta-font-bold cheta-block">ACC开</text>
				<text class="cheta-font24 cheta-block">里程（km/h）</text>
			</view>
		</view>
		<view class="cu-item cheta-box-flex">
			<view class="content">
				<text class="cheta-font-grey">位置: </text>
				<text class="">广东省广州市花都区花东镇花都大道东74号xxxxx</text>
			</view>
		</view>
		<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
			<view class="cu-item" v-for="(item,index) in cuIconList" :key="index">
				<view>
					<view class="uni-trace-img">
						<image :src="item.url">
						</image>
					</view>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
	
	</view>	
		
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import '/static/css/chetaui-main.css';
	.uni-car-img uni-image{
		width: 216rpx!important;
		height: 115rpx!important;
	}

</style>
