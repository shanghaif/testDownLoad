/*
 公共请求封装
 */

// 基础地址
const base = 'http://49.234.21.239:9002/system';

// 登录
export function login(config) {
	return action('/application/auth/login', config, 'POST')
}


/* 用车管理*/

// 识别用车
export function scanCode(config) {
	return uploadFile('/application/ocr/car/licenseDiscern', config)
}

// 二维码 车辆
export function carParse(config) {
	return tokenAction('/application/ocr/car/qr', config)
}

// 车辆地图数据
export function carMapData(config) {
	return tokenAction('/application/car/gps/get', config)
}

// 线路接口
export function lineData(config) {
	return tokenAction('/application/car/line/page', config)
}

// 出车登记
export function doDispatch(config) {
	return tokenAction('/application/car/dispatch/doDispatch', config, 'post')
}

// 回车登记
export function doReturn(config) {
	return tokenAction('/application/car/dispatch/doReturn', config, 'post')
}

// 获取登录用户的车辆状态
export function useCar(config) {
	return tokenAction('/application/car/dispatch/useCar', config)
}


/* 加油登记添加记录*/
export function insertOrUpdate(config) {
	return tokenAction('/application/car/vehicle/refuel/insertOrUpdate', config, 'post')
}


/* 车辆监控 */
// 获取各运行状态数据
export function getStatusSum(config) {
	return tokenAction('/application/car/vehicle/monitor/getStatusSum', config)
}
// 根据状态获取车辆
export function getCarByStatus(config) {
	return tokenAction('/application/car/vehicle/monitor/getCarByStatus', config)
}
// 获取车辆详情
export function getCarDetailById(config) {
	return tokenAction('/application/car/vehicle/monitor/getCarDetailById', config)
}
// 获取轨迹月份数据
export function getTrackDayByDate(config) {
	return tokenAction('/application/car/vehicle/monitor/getTrackDayByDate', config)
}
// 获取轨迹数据
export function getTrackListByDate(config) {
	return tokenAction('/application/car/vehicle/monitor/getTrackListByDate', config)
}
//事故上报的数据
export function TrackAccidentByData(config) {
	return tokenAction('/application/car/vehicle/accident/edit', config,'post')
}



/* 三检 */
// 获取各运行状态数据
export function getCtInspectListWap(config) {
	return tokenAction('/application/car/inspect/wap/getCtInspectListWap', config)
}
// 获取统计数据
export function getCtInspectListCountWap(config) {
	return tokenAction('/application/car/inspect/wap/getCtInspectListCountWap', config, 'post')
}
// 获取任务详情
export function getCtInspectInfoWap(config) {
	return tokenAction('/application/car/inspect/wap/getCtInspectInfoWap', config)
}
// 获取机构树结构
export function getOrganTree(config) {
	return tokenAction('/application/auth/organ/getOrganTree', config)
}
// 获取机构树结构
export function getOrganUserList(config) {
	return tokenAction('/application/auth/user/getOrganUserList', config)
}
// 获取指派任务处理人
export function handleInspectCar(config) {
	return tokenAction('/application/car/inspect/wap/handleInspectCar', config, 'post')
}
// 上传图片
export function updataPhoto(config) {
	return uploadPhoto(config)
}
// 上传图片基础地址
export const basePhotoUrl = 'http://49.234.21.239:9001/zgbd/file/cheta/uniFileUpload';
// 任务处理
export function handleCtInspectCarProjec(config) {
	return tokenAction('/application/car/inspect/wap/handleCtInspectCarProjec', config, 'post')
}

/* 版本 */
// 获取版本
export function getVersion(config) {
	return tokenAction('/application/notice/getAppVersion', config)
}


// 基础请求
function action(url, config, method){
	let param = Object.assign({method: 'get'}, {
		url: base + url,
		method: method
	}, config);
	uni.showLoading({});
	return uni.request(param).then(data => {
		uni.hideLoading();
		if (data[0]) {
			uni.showModal({
				content: '系统错误！',
				confirmText: "确定",
				cancelText: "取消"
			})
		}
		return data[1].data
	})
}

// 设置 登录请求头
function tokenAction(url, config, method) {
	var token = uni.getStorageSync('token');
	let param = Object.assign({
		header: {
			'X-Access-Token': token
		}
	}, config);
	return action(url, param, method);
}

// 文件上传
function uploadFile(url, config) {
	let param = Object.assign({}, {
		url: base + url
	}, config);
	uni.showLoading({});
	return uni.uploadFile(param).then(data => {
		uni.hideLoading();
		if (data[0]) {
			uni.showModal({
				content: '系统错误！',
				confirmText: "确定",
				cancelText: "取消"
			})
		}
		return data[1].data
	})
}
// 图片上传
function uploadPhoto(config) {
	// let param = Object.assign({}, {url: basePhotoUrl}, config);
	// uni.showLoading({});
	// return uni.uploadFile(param).then(data => {
	// 	uni.hideLoading();
	// 	if (data[0]) {
	// 		uni.showModal({
	// 			content: '系统错误！',
	// 			confirmText: "确定",
	// 			cancelText: "取消"
	// 		})
	// 	}
	// 	return data[1].data
	// })

	uni.showLoading({});
	// uni.uploadFile({
	//     url:basePhotoUrl,     // 后端api接口
	//     filePath: config, // uni.chooseImage函数调用后获取的本地文件路劲
	//     name:'file',     //后端通过'file'获取上传的文件对象
	//     header:{"Content-Type": "multipart/form-data"},
	//     success:(res) => {
	//         if (res.data.code == 200){
	//             console.log('文件上传成功')
	//         }
	//     }
	// });

	return uni.uploadFile({
		url: basePhotoUrl, //仅为示例，非真实的接口地址
		filePath: config,
		name: 'file',
		success: (res) => {
			uni.hideLoading();
			if (res.data.code == 200) {
				console.log('文件上传成功')
			}
		}
	});
}
