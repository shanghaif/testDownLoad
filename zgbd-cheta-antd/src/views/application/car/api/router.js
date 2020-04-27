
// 历史轨迹
export function trackIndex (router) {
  router.push('/Car/Annal')
}

// 轨迹详情
export function trackCar (router, id) {
  router.push(`/Car/Annal/${id}`)
}

// 车辆详情
export function detailCar (router, id) {
  router.push(`/Car/Annal/${id}`)
}

// 历史视频
export function videoCar (router) {
  router.push(`/Car/Video`)
}

// 行车报表
export function runCar (router) {
  router.push(`/xingchebaobiao`)
}