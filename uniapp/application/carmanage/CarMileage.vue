<template>
	<view :style="{width:screenWidth + 'px'}">
		<!-- 地图 -->
		<view class="content">
			<picker-view :indicator-style="indicatorStyle" :value="value"  @change="bindChange">
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in first" :key="index">{{item}}</view>
			    </picker-view-column>
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in second" :key="index">{{item}}</view>
			    </picker-view-column>
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in third" :key="index">{{item}}</view>
			    </picker-view-column>
				<picker-view-column>
				    <view class="item" v-for="(item,index) in fourth" :key="index">{{item}}</view>
				</picker-view-column>
				<picker-view-column>
				    <view class="item" v-for="(item,index) in fifth" :key="index">{{item}}</view>
				</picker-view-column>
			</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	const SystemInfo = uni.getSystemInfoSync();
	module.exports = {
		components: {
			uniIcons,
		},
		props:{
			dispatchMileage:{
				type: Number
			},
			returnRunmileage:{
				type: Number
			},
		},
		data() {
			return {
				type: "" ,
				first:[0,1,2,3,4,5,6,7,8,9],
				second:[0,1,2,3,4,5,6,7,8,9],
				third:[0,1,2,3,4,5,6,7,8,9],
				fourth:[0,1,2,3,4,5,6,7,8,9],
				fifth:[0,1,2,3,4,5,6,7,8,9],
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
				// value: [2,0,0,0,0],
				value: [2,0,0,0,0],
				visible: true,
				roadValue: '',
				screenWidth: SystemInfo.screenWidth,
			}
		},	
		created () {
			if (this.dispatchMileage) {
				var b = this.dispatchMileage + ''
				var c = b.split("")
				this.value = c.map(item => parseInt(item))
			}else{
				var mileage = this.returnRunmileage + ''
				var c = mileage.split("")
				this.value = c.map(item => parseInt(item))
			}
		},
	    methods: {
	        chooseImage: async function () {
	            uni.chooseImage({
	                count: 6, //默认9
	                sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
	                sourceType: ['camera','album'], //从相册选择
	                success: function (res) {
	                    console.log(JSON.stringify(res.tempFilePaths));
	                }
	            });
	        },
			togglePopup(type, open) {
				this.type = type
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
			    const list = e.detail.value
				var str = "";
				for (var i = 0; i < 5; i++) {
					if (list[i]) {
						str += list[i]
					} else {
						str += "0";
					}
				}
				this.roadValue = str;
			},
			mileageValue () {
				return this.roadValue
			}
			
	    }
	}

</script>

<style lang="scss">
	
	picker-view {
		width: 750upx;
		height: 500upx;
		text-align: center;
	    margin-top:20rpx;
	}
	
	.item {
	    line-height: 100rpx;
	    text-align: center;
	}
</style>

