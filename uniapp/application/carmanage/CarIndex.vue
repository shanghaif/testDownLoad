<template>
    <view class="content">
		<uni-nav-bar left-icon="arrowleft"  :fixed="true" :status-bar="true" title="用车管理" @clickLeft="back">
		</uni-nav-bar>
        <map class="map" id="map1" ref="map1" :style="{width:screenWidth + 'px',height:screenHeight - 200 + 'px'}" :longitude="longitude" :latitude="latitude" :markers="carList"></map>
		<view class="padding cu-bar foot cheta-amap-tool">
			<button class="cheta-button-primary" @tap="chooseImage">
				<uniIcons :style="{ color: 'white', 'font-size': '20px', 'margin': '10px' }" type="scan" size="20"/><text class="san-code">车牌识别</text>
			</button>
			<button class="cheta-button-primary" @tap="scanCodeImage">
				<uniIcons :style="{ color: 'white', 'font-size': '20px', 'margin': '10px' }" type="scan" size="20"/><text class="san-code">扫码用车</text>
			</button>
            <!-- <button class="button" @click="getRegion">getRegion</button> -->
		</view>
		<!-- <button class="button" @click="getRegion">getRegion</button> -->
    </view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import {carMapData,scanCode,carParse } from '@/common/api.js'
	var util = require('@/common/util.js');
	 var formatLocation = util.formatLocation;
	const SystemInfo = uni.getSystemInfoSync();

    module.exports = {
		components: {
			uniIcons,
		},
        onReady() {
            this.map = uni.createMapContext("map1", this);
        },
		created () {
			// this.doGetLocation()
			// this.addCar()
			// this.addCar()
		},
		data() {
			return {
				screenWidth: SystemInfo.screenWidth,
				screenHeight: SystemInfo.screenHeight,
				longitude:113.41,
				latitude:23.15,
				map: {},
				street:"",
				startLatitude:"",
				startlongitude:"",
				endLatitude:"",
				endLongitude:"",
				carList:[],
				
			}
		},
        methods: {
			doGetLocation() {
				var $this = this
			    uni.getLocation({
					geocode: true,
			        success: (res) => {
						$this.latitude = res.latitude;
						$this.longitude = res.longitude;
						$this.street = res.address.street
						$this.getRegion()
			        },
			           
			    })
			},
			getRegion() { 
				var $this = this
			    this.map.getRegion({
			        success: ret => {
						$this.startLatitude = ret.southwest.latitude
						$this.startlongitude = ret.southwest.longitude
						$this.endLatitude = ret.northeast.latitude
						$this.endLongitude = ret.northeast.longitude
						$this.addCar();
			        }
			    }) 
			},
			back () {
				uni.switchTab({
					url: '/application/home',
				});
			},
			
			addCar () {
				var param = {
					start: '23.141355,113.404358',
					end: '23.158646,113.415641',
					name: "新塘街道",
					grade:5,
				} 
				var $this = this
				carMapData ({data:param}).then(res=>{
					res.result.forEach(inner=>{
						$this.carList.push({latitude:inner.lat,longitude:inner.lng})
					})
				}) 
			},
			scanCodeImage: function() {
				uni.scanCode({
					success: function (res) {
						if (res.result.lastIndexOf('/') > 0) {
							var id = res.result.substring(res.result.lastIndexOf('/') + 1);
							carParse({data: {id: id}}).then(res => {
								var resultlast = res
								if (resultlast.success) {
									var result = resultlast.result;
									var registrationNo = result.registrationNo;
									var carId = result.id;
									var carType = result.carType;
									var g = result.g;
									
									uni.navigateTo({
										url: '/application/carmanage/CarDetail?registrationNo=' + registrationNo + '&carId=' + carId + '&carType=' + carType + '&g=' + g
									});
								}else{
									uni.showModal({
										content: resultlast.message,
										confirmText: "确定",
										cancelText: "取消"
									})
								}
							})
						} else {
							uni.showModal({
								content: '扫码失败！',
								confirmText: "确定",
								cancelText: "取消"
							})
						}
					}
				})
			},
            chooseImage: async function () {
                uni.chooseImage({
                    count: 6, //默认9
                    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['camera'], //从相册选择
                    success: function (res) {
                        const tempFilePaths = res.tempFilePaths;
						
						scanCode({name: 'file', filePath: tempFilePaths[0]}).then(res => {
							console.log(res)
							var resultlast = JSON.parse(res)
							if (resultlast.success) {
								var result = resultlast.result;
								var registrationNo = result.registrationNo;
								var carId = result.id;
								var carType = result.carType;
								var g = result.g;
								uni.navigateTo({
									url: '/application/carmanage/CarDetail?registrationNo=' + registrationNo + '&carId=' + carId + '&carType=' + carType + '&g=' + g
								});
							}else{
								uni.showModal({
									content: resultlast.message,
									confirmText: "确定",
									cancelText: "取消"
								})
							}
						});
                    },
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
	
</style>
