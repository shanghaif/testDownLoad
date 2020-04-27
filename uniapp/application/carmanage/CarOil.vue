<template>
	<view :style="{width:screenWidth + 'px',height:screenHeight + 'px'}">
		<!-- 地图 -->
		<view class="qiun-charts" :style="{width:screenWidth + 'px'}">
			<canvas canvas-id="canvasGauge" id="canvasGauge" class="charts"></canvas>
		</view>
		<slider :value="oilCount" @change="sliderChange" step="1" activeColor="#44CB97" />
        
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	const SystemInfo = uni.getSystemInfoSync();
	var _self;
	var canvaGauge=null;
	module.exports = {
		data() {
			return {
				type: "" ,
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				gaugeWidth:15,
				oilCount:0,
				Gauge: {},
				screenWidth: SystemInfo.screenWidth,
			}
		},
		created () {
			this.init();
		},
	    methods: {
			init: function() {
				_self = this;
				this.cWidth=uni.upx2px(750);
				this.cHeight=uni.upx2px(500);
				this.getServerData();
			},
			getServerData(){
				var $this = this;
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data:{
					},
					success: function(res) {
						console.log(res.data.data)
						let Gauge={categories:[],series:[]};
						Gauge.categories=[{
							"value": 0.2,
							"color": "#44CB97"
						  }, {
							"value": 0.8,
							"color": "#44CB97"
						  }, {
							"value": 1,
							"color": "#44CB97"
						  }];
						Gauge.series = [{name: "", data: 0}];
						$this.Gauge = Gauge;
						_self.showGauge("canvasGauge",Gauge);
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			showGauge(canvasId,chartData){
				canvaGauge = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize:11,
					legend:false,
					title: {
						name: Math.round(chartData.series[0].data*100)+'%',
						color: chartData.categories[1].color,
						fontSize: 25*_self.pixelRatio,
						offsetY:50*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15*_self.pixelRatio,
						offsetY:-50*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge:{
							type:'default',
							width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
							startAngle:0.75,
							endAngle:0.25,
							startNumber:0,
							endNumber:100,
							splitLine:{
								fixRadius:0,
								splitNumber:10,
								width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
								color:'#FFFFFF',
								childNumber:5,
								childWidth:_self.gaugeWidth*0.4*_self.pixelRatio,//仪表盘背景的宽度
							},
							pointer:{
								width: _self.gaugeWidth*0.8*_self.pixelRatio,//指针宽度
								color:'auto'
							}
						}
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
				});
			},
			sliderChange (e) {
				this.oilCount = e.detail.value
				this.Gauge.series[0].data = e.detail.value / 100
				this.showGauge("canvasGauge",this.Gauge);
			},
			sliderValue () {
				return this.oilCount
			}
		}
	}

</script>

<style lang="scss" scoped>

	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		height: 500upx;
		background-color: #FFFFFF;
		padding-top: 30rpx;
	}
	
	.charts {
		width: 750upx;
		height: 600upx;
		background-color: #FFFFFF;
	}
	uni-slider {
	  
	    margin: 0% 12% 0 15%;
	}
</style>
