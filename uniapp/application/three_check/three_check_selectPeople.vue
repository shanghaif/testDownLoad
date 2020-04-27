<template>
	<view class="content">
		<uni-nav-bar left-icon="arrowleft" :fixed="true" :status-bar="true" @clickLeft="back">
			<view style="width: 100%;text-align: center;font-size: 19px;">成员</view>
			<view slot="right" class="icon-item" @click="clickRight()">确定</view>
		</uni-nav-bar>

		<uni-search-bar style="margin-top: 12px;margin: 12px 8px;" bgColor="#F6F6F6" :radius="100" @confirm="search"
		 placeholder="请输入关键词搜索" @input="input"></uni-search-bar>


		<view>
			<s-pull-scroll v-if="isSearch" ref="pullScroll" :back-top="false" :pullDown="pullDown" :pullUp="loadData" :fixed="false" style="position:fixed;left: 0;right: 0;bottom: 0;top: calc(76px + 44px + env(safe-area-inset-top));">
				<ul style="padding-left: 0px;padding-right: 0px;">
					<li v-for="(item, index) in manListData" :key="index" @click="clickSeletPeople(item)">
						<view v-if="item.nickName" class="scroll-view-item people_item uni-flex uni-row" @click="clickSeletPeople(item)">
							<view>
								<image src="../../static/img/three_check/head_icon.png"></image>
								<label>{{item.nickName}}</label>
							</view>
							<view style="margin-right: 12px;">
								<text class="lg text-gray" :class="arrHasValue(item.id, markSelectArray)?'cuIcon-squarecheck':'cuIcon-square'"></text>
							</view>
						</view>
					</li>
				</ul>
			</s-pull-scroll>
			
			<scroll-view v-else scroll-y="true" style="position:fixed;left: 0;right: 0;bottom: 0;top: calc(76px + 44px + env(safe-area-inset-top));">
				<view class="scroll-view-item company_item">
					<image src="../../static/img/three_check/EMSLOGO.png"></image>
					<label>{{this.headOffice}}</label>
					<view style="height: 1px;background-color: rgba(0,0,0,0.05);"></view>
				</view>
				
				<view class="scroll-view-item" v-for="(item, index) in listData" :key="index" style="background-color: white;">

					<view v-if="item.nickName" class="scroll-view-item people_item uni-flex uni-row" @click="clickSeletPeople(item)">
						<view>
							<image src="../../static/img/three_check/head_icon.png"></image>
							<label>{{item.nickName}}</label>
						</view>
						<view style="margin-right: 12px;">
							<text class="lg text-gray" :class="arrHasValue(item.id, markSelectArray)?'cuIcon-squarecheck':'cuIcon-square'"></text>
						</view>
					</view>

					<view v-else class="department_item" @click="clickCell(item,index)">
						<view class="uni-flex uni-row">
							<view>
								<image src="../../static/img/three_check/tree.png"></image>
								<label>{{item.name}}</label>
							</view>

							<view style="margin-right: 12px;">
								<text class="lg text-gray" :class="isSelectOrg(item)?'cuIcon-unfold':'cuIcon-right'" style="font-size: 20px;height: 50px;line-height: 50px;"></text>
							</view>
						</view>
						<view style="height: 1px;background-color: rgba(0,0,0,0.05);margin: 0 16px;"></view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import sPullScroll from '@/components/s-pull-scroll';
	import {
		getOrganTree,
		getOrganUserList,
		handleInspectCar
	} from '@/common/api.js';
	module.exports = {
		components: {
			uniIcons,
			sPullScroll
		},
		data() {
			return {
				baseInfo: {},
				markSelectArray: [],//记录选择了的人员
				listData: [],
				headOffice: '',
				isSearch: false,
				manListData: [],
				searchString: "",
				markSelectOrg: {} //记录打开了的机构
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			//监听搜索栏输入
			input: function(s) {
				this.searchString = s.value;
				if (s.value.length > 0) {
					this.isSearch = true;
					this.refresh();
				}else{
					this.isSearch = false;
				}
			},
			//判断数组是否包含对象v
			arrHasValue: function(v, arr) {
				var output = false;
				for (var i in arr) {
					if (v == arr[i]) {
						output = true;
						return output;
					}
				}
				output = false;
				return output;
			},
			//返回对象v在数组中的index
			arrIndexValue: function(v, arr) {
				for (var i in arr) {
					if (v == arr[i]) {
						return i;
					}
				}
				return -1;
			},
			//获取数据中指定id的机构
			getChildArray: function(item, searchString) {
				var children = item.children;
				for (var i = 0; i < children.length; i++) {
					var obj = children[i];
					if (obj.id == searchString) {
						return obj;
					} else {
						if (obj.children) {
							this.getChildArray(obj, searchString);
						}
					}
				}
			},
			//缩减机构
			subOrgData: function(item,isFirst) {
				//减机构
				if (!isFirst) {
					for (var i = 0; i < this.listData.length; i++) {
						if (this.listData[i].id == item.id) {
							this.listData.splice(i, 1);
						}
					}
				}
				
				//减人
				var manIDArray = this.markSelectOrg[item.id];
				if (manIDArray && manIDArray.length) {
					for (var i = 0; i < this.listData.length; i++) {
						if (this.arrHasValue(this.listData[i].id,manIDArray)) {
							this.listData.splice(i, 1);
						}
					}
				}
				
				//删除记录
				delete this.markSelectOrg[item.id];
				
				//删除下属机构的人和机构
				if (item.children.length) {
					for (var i = 0; i < item.children.length; i++) {
						this.subOrgData(item.children[i],false);
					}
				}
			},
			//拼接子机构，拼接机构人员
			selectOrgData: function(item, index) {
				var children = item.children;
				for (var i = 0; i < children.length; i++) {
					this.listData.splice(index + i, 0, item.children[i]);
				}

				getOrganUserList({
					data: {
						organId: item.id,
						pageNo: '1',
						pageSize: '500'
					}
				}).then(res => {
					console.log(res);
					var resultlast = res;
					if (resultlast.status == 10000) {
						for (var i = 0; i < resultlast.data.length; i++) {
							this.listData.splice(index + children.length, 0, resultlast.data[i]);
						}
						this.markSelectOrg[item.id] = resultlast.data;
					} else {
						uni.showModal({
							content: resultlast.message,
							confirmText: "确定",
							cancelText: "取消"
						})
					}
				});
			},
			//判断是否是已选择的机构
			isSelectOrg: function(item) {
				var keyArray = Object.keys(this.markSelectOrg).sort();
				console.log(item.id);
				console.log(keyArray);
				if (this.arrHasValue(item.id,keyArray)) {
					return true;
				}else{
					return false;
				}
			},
			//选择机构
			clickCell: function(item, index) {
				if (this.isSelectOrg(item)) {
					this.subOrgData(item,true);
				}else{
					this.selectOrgData(item, index + 1);
				}
			},
			//选择人员
			clickSeletPeople: function(item) {
				if (this.markSelectArray.length) {
					this.markSelectArray.pop(item.id);
				}
				this.markSelectArray.push(item.id);
			},
			// 确认提交
			clickRight: function() {
				var _this = this;
				if (this.markSelectArray.length) {
					uni.showModal({
					    title: '提示',
					    content: '是否指派任务？',
					    success: function (res) {
					        if (res.confirm) {
					            _this.requestHandleInspectCar();
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
					
				} else {
					uni.showModal({
						content: '请选择人员',
						confirmText: "确定",
						cancelText: "取消"
					})
				}
			},
			//提交指派
			requestHandleInspectCar: function() {
				handleInspectCar({
					data: {
						"handleBy": this.markSelectArray[0],
						"id": this.baseInfo.inspectCarId,
						"inspectState": 2
					}
				}).then(res => {
					console.log(res)
					var resultlast = res
					if (resultlast.success) {
						uni.navigateBack({
							delta: 1
						});
					} else {
						uni.showModal({
							content: resultlast.message,
							confirmText: "确定",
							cancelText: "取消"
						})
					}
				});
			},
			
			
			//上下拉刷新组件
			refresh() {
				this.$nextTick(() => {
					this.$refs.pullScroll.refresh();
				});
			},
			pullDown(pullScroll) {
				this.loadData(pullScroll);
			},
			loadData(pullScroll) {
				var param = {
					name: this.searchString,
					pageNo: pullScroll.page,
					pageSize: 10,
				}
				getOrganUserList({
					data: param
				}).then(res => {
					console.log(res)
					var resultlast = res
					if (resultlast.status == 10000) {

						if (pullScroll.page == 1) {
							this.manListData = res.data;
						} else {
							if (res.data.length > 0) {
								this.manListData = this.manListData.concat(res.data);
							}
						}
						// pullScroll.success();

						if (this.manListData.length == res.count) {
							pullScroll.finish(true);
						} else {
							pullScroll.success();
						}
					} else {

						uni.showModal({
							content: resultlast.message,
							confirmText: "确定",
							cancelText: "取消"
						})
					}
				});

			}
		},
		onLoad: function(item) {
			this.baseInfo = JSON.parse(decodeURIComponent(item.item));
			// this.baseInfo = JSON.parse(item.item);
			console.log(this.baseInfo);
			
			getOrganTree({
				data: {}
			}).then(res => {
				console.log(res)
				var resultlast = res
				if (resultlast.success) {
					var result = resultlast.result;
					var ems = result[0];
					this.headOffice = ems.name;
					//写死邮政id
					this.selectOrgData(ems, 0);
				} else {
					uni.showModal({
						content: resultlast.message,
						confirmText: "确定",
						cancelText: "取消"
					})
				}
			});
		}
	}
</script>

<style>
	.content {
		background-color: white;
		height: 100%;
	}

	.company_item {
		height: 60px;
	}

	.company_item image {
		background-color: #4ACF9A;
		width: 40px;
		height: 40px;
		margin: 10px 16px 0px 16px;
		padding: 8px;
		border-radius: 20px;
	}

	.company_item label {
		vertical-align: top;
		height: 60px;
		line-height: 60px;
		font-size: 14px;
	}

	.department_item .uni-row {
		height: 50px;
		justify-content: space-between;
	}

	.department_item image {
		width: 40px;
		height: 40px;
		margin: 5px 16px;
		padding: 8px;
	}

	.department_item label {
		vertical-align: top;
		height: 50px;
		line-height: 50px;
		font-size: 14px;
	}

	.people_item {
		height: 60px;
		justify-content: space-between;
	}

	.people_item image {
		width: 40px;
		height: 40px;
		margin: 10px 16px 10px 74px;
	}

	.people_item label {
		vertical-align: top;
		height: 60px;
		line-height: 60px;
		font-size: 14px;
	}

	.people_item text {
		font-size: 20px;
		height: 60px;
		line-height: 60px;
	}
</style>
