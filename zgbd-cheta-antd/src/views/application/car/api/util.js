
//秒转时间
export function secondsToHour(value){
  var secondTime = parseInt(value);// 秒
  var minuteTime = 0;// 分
  var hourTime = 0;// 小时
  if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
    //获取分钟，除以60取整数，得到整数分钟
    minuteTime = parseInt(secondTime / 60);
    //获取秒数，秒数取佘，得到整数秒数
    secondTime = parseInt(secondTime % 60);
    //如果分钟大于60，将分钟转换成小时
    if(minuteTime > 60) {
      //获取小时，获取分钟除以60，得到整数小时
      hourTime = parseInt(minuteTime / 60);
      //获取小时后取佘的分，获取分钟除以60取佘的分
      minuteTime = parseInt(minuteTime % 60);
    }
  }
  var result = "" + parseInt(secondTime) + "秒";

  if(minuteTime > 0) {
    result = "" + parseInt(minuteTime) + "分" + result;
  }
  if(hourTime > 0) {
    result = "" + parseInt(hourTime) + "小时" + result;
  }
  return result;
}



// 初始化树结构
export function listToTree (list, fn) {
  var tree = []
  list.forEach(item => {
    if (item.children) {
      item.children = listToTree(item.children, fn)
    }
    if (fn(item)) {
      tree.push(item);
    }
  })
  return tree;
}

// 树结构
export function treeToList (tree, list, fn) {
  tree.forEach(item => {
    if (item.children) {
      treeToList(item.children, list, fn);
    }
    if (fn(item)) {
      list.push(item);
    }
  })
}

const addressEnum = {
  '白云区': '广东省广州市白云区'
}

// 高德地图批量地址逆编码 (地址 转 经纬度)
export function getLocation(array, fn){
  var list = [[]];
  // 批量请求最多十个
  array.forEach(item => {
    if (list[list.length - 1].length === 10) {
      list.push([]);
    }
    list[list.length - 1].push(addressEnum[item.address] || item.address);
  });
  var geocoder = new AMap.Geocoder({})
  list.forEach((item, index) => {
    geocoder.getLocation(item, function(status, result) {
      if (status === 'complete' && result.geocodes.length) {
        result.geocodes.forEach((geo, innerIndex) => {
          var param = {};
          if (index > 0) {
            param = array[index * 10 + innerIndex];
          } else {
            param = array[innerIndex];
          }
          param.geo = geo;
          fn(param);
        })
      }
    });
  })
}

// 高德地图批量地址逆编码 ( 经纬度 转 地址)
export function getAddress(array, fn){
  var list = [[]];
  // 批量请求最多十个
  array.forEach(item => {
    if (list[list.length - 1].length === 10) {
      list.push([]);
    }
    list[list.length - 1].push(item);
  });
  var geocoder = new AMap.Geocoder({})
  list.forEach((item, index) => {
    geocoder.getAddress(item, function(status, result) {
      if (status === 'complete' && result.regeocodes.length) {
        result.regeocodes.forEach((geo, innerIndex) => {
          var param = {};
          if (index > 0) {
            param = array[index * 10 + innerIndex];
          } else {
            param = array[innerIndex];
          }
          param.geo = geo;
          fn(param);
        })
      }
    });
  })
}
// gps 转 高德地图
export const GPS = {
  PI : 3.14159265358979324,
  x_pi : 3.14159265358979324 * 3000.0 / 180.0,
  delta : function (lat, lon) {
    // Krasovsky 1940
    //
    // a = 6378245.0, 1/f = 298.3
    // b = a * (1 - f)
    // ee = (a^2 - b^2) / a^2;
    var a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
    var ee = 0.00669342162296594323; //  ee: 椭球的偏心率。
    var dLat = this.transformLat(lon - 105.0, lat - 35.0);
    var dLon = this.transformLon(lon - 105.0, lat - 35.0);
    var radLat = lat / 180.0 * this.PI;
    var magic = Math.sin(radLat);
    magic = 1 - ee * magic * magic;
    var sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * this.PI);
    dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * this.PI);
    return {'lat': dLat, 'lon': dLon};
  },

  //GPS---高德
  gcj_encrypt : function ( wgsLat , wgsLon ) {
    if (this.outOfChina(wgsLat, wgsLon))
      return {'lat': wgsLat, 'lon': wgsLon};

    var d = this.delta(wgsLat, wgsLon);
    return {'lat' : wgsLat + d.lat,'lon' : wgsLon + d.lon};
  },
  outOfChina : function (lat, lon) {
    if (lon < 72.004 || lon > 137.8347)
      return true;
    if (lat < 0.8293 || lat > 55.8271)
      return true;
    return false;
  },
  transformLat : function (x, y) {
    var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * this.PI) + 40.0 * Math.sin(y / 3.0 * this.PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * this.PI) + 320 * Math.sin(y * this.PI / 30.0)) * 2.0 / 3.0;
    return ret;
  },
  transformLon : function (x, y) {
    var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * this.PI) + 40.0 * Math.sin(x / 3.0 * this.PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * this.PI) + 300.0 * Math.sin(x / 30.0 * this.PI)) * 2.0 / 3.0;
    return ret;
  }
};
