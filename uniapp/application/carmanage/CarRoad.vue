<template>
	<view>
		<!-- 地图 -->
		<view class="content">
			<picker-view :indicator-style="indicatorStyle" :value="value">
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in lineList" :key="index">{{item.name}} ({{item.startSite}} - {{item.endSite}})</view>
			    </picker-view-column>
			</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeOil: "" ,
				first:[0,1,2,3,4,5,6,7,8,9],
				second:[0,1,2,3,4,5,6,7,8,9],
				third:[0,1,2,3,4,5,6,7,8,9],
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
				value: [2, 0, 0],
				visible: true,
				pickerValueArray: [
					{
						label: '北京市',
						value: 110000
					},
					{
						label: '天津市',
						value: 120000
					},
					{
						label: '广州市',
						value: 440100
					},
					{
						label: '深圳市',
						value: 440300
					}
				],
			}
		},
		props:{
			lineList: {
				type: Array,
				default: () => []
			},
		},
		created () {
			this.togglePopup("bottom", "popup")
		},
		methods: {
			togglePopup(typeOil, open) {
				this.typeOil = typeOil
				this.$nextTick(() => {
					this.$refs['show' + open].open()
				})
			},
			back () {
				uni.navigateBack({
					delta: 1
				})
			},
			bindChange (e) {
			    const val = e.detail.value
			    this.year = this.years[val[0]]
			    this.month = this.months[val[1]]
			    this.day = this.days[val[2]]
			}
		}
	}
</script>

<style lang="scss">
	picker-view {
		width: 600upx;
		height: 500upx;
		text-align: center;
	  
	    margin-top:20rpx;
	}
	
	.item {
	    line-height: 100rpx;
	    text-align: center;
	}
</style>
