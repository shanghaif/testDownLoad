"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 379);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 2);function _createSuper(Derived) {return function () {var Super = _getPrototypeOf(Derived),result;if (_isNativeReflectConstruct()) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 3).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 4).default || __webpack_require__(/*! uni-stat-config */ 4);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),

/***/ 152:
/*!*********************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-calendar/uni-calendar.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_calendar_vue_vue_type_template_id_09bb1ccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-calendar.vue?vue&type=template&id=09bb1ccc&scoped=true& */ 153);
/* harmony import */ var _uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-calendar.vue?vue&type=script&lang=js& */ 155);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-calendar.vue?vue&type=style&index=0&id=09bb1ccc&scoped=true&lang=css& */ 166).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-calendar.vue?vue&type=style&index=0&id=09bb1ccc&scoped=true&lang=css& */ 166).default)
            }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_calendar_vue_vue_type_template_id_09bb1ccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_calendar_vue_vue_type_template_id_09bb1ccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "09bb1ccc",
  "5ab44dc0",
  false,
  _uni_calendar_vue_vue_type_template_id_09bb1ccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/YF/web/uniapp/components/uni-calendar/uni-calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 153:
/*!****************************************************************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-calendar/uni-calendar.vue?vue&type=template&id=09bb1ccc&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_template_id_09bb1ccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar.vue?vue&type=template&id=09bb1ccc&scoped=true& */ 154);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_template_id_09bb1ccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_template_id_09bb1ccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_template_id_09bb1ccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_template_id_09bb1ccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 154:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/components/uni-calendar/uni-calendar.vue?vue&type=template&id=09bb1ccc&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["uni-calendar"], on: { touchmove: _vm.clean } },
    [
      !_vm.insert && _vm.show
        ? _c("view", {
            staticClass: ["uni-calendar__mask"],
            class: { "uni-calendar--mask-show": _vm.aniMaskShow },
            on: { click: _vm.clean }
          })
        : _vm._e(),
      _vm.insert || _vm.show
        ? _c(
            "view",
            {
              staticClass: ["uni-calendar__content"],
              class: {
                "uni-calendar--fixed": !_vm.insert,
                "uni-calendar--ani-show": _vm.aniMaskShow
              }
            },
            [
              !_vm.insert
                ? _c(
                    "view",
                    {
                      staticClass: [
                        "uni-calendar__header",
                        "uni-calendar--fixed-top"
                      ]
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: ["uni-calendar__header-btn-box"],
                          on: { click: _vm.close }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: [
                                "uni-calendar__header-text",
                                "uni-calendar--fixed-width"
                              ]
                            },
                            [_vm._v("取消")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["uni-calendar__header-btn-box"],
                          on: { click: _vm.confirm }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: [
                                "uni-calendar__header-text",
                                "uni-calendar--fixed-width"
                              ]
                            },
                            [_vm._v("确定")]
                          )
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _c("view", { staticClass: ["uni-calendar__header"] }, [
                _c(
                  "view",
                  {
                    staticClass: ["uni-calendar__header-btn-box"],
                    on: { click: _vm.pre }
                  },
                  [
                    _c("view", {
                      staticClass: [
                        "uni-calendar__header-btn",
                        "uni-calendar--left"
                      ]
                    })
                  ]
                ),
                _c("u-text", { staticClass: ["uni-calendar__header-text"] }, [
                  _vm._v(
                    _vm._s(
                      (_vm.nowDate.year || "") +
                        "年" +
                        (_vm.nowDate.month || "") +
                        "月"
                    )
                  )
                ]),
                _c(
                  "view",
                  {
                    staticClass: ["uni-calendar__header-btn-box"],
                    on: { click: _vm.next }
                  },
                  [
                    _c("view", {
                      staticClass: [
                        "uni-calendar__header-btn",
                        "uni-calendar--right"
                      ]
                    })
                  ]
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["uni-calendar__backtoday"],
                    on: { click: _vm.backtoday }
                  },
                  [_vm._v("回到今天")]
                )
              ]),
              _c(
                "view",
                { staticClass: ["uni-calendar__box"] },
                [
                  _vm.showMonth
                    ? _c("view", { staticClass: ["uni-calendar__box-bg"] }, [
                        _c(
                          "u-text",
                          { staticClass: ["uni-calendar__box-bg-text"] },
                          [_vm._v(_vm._s(_vm.nowDate.month))]
                        )
                      ])
                    : _vm._e(),
                  _vm._m(0),
                  _vm._l(_vm.weeks, function(item, weekIndex) {
                    return _c(
                      "view",
                      { key: weekIndex, staticClass: ["uni-calendar__weeks"] },
                      _vm._l(item, function(weeks, weeksIndex) {
                        return _c(
                          "view",
                          {
                            key: weeksIndex,
                            staticClass: ["uni-calendar__weeks-item"]
                          },
                          [
                            _c("uni-calendar-item", {
                              attrs: {
                                weeks: weeks,
                                calendar: _vm.calendar,
                                selected: _vm.selected,
                                lunar: _vm.lunar
                              },
                              on: { change: _vm.choiceDate }
                            })
                          ],
                          1
                        )
                      }),
                      0
                    )
                  })
                ],
                2
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["uni-calendar__weeks"] }, [
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("日")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("一")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("二")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("三")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("四")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("五")
        ])
      ]),
      _c("view", { staticClass: ["uni-calendar__weeks-day"] }, [
        _c("u-text", { staticClass: ["uni-calendar__weeks-day-text"] }, [
          _vm._v("六")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ 155:
/*!**********************************************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-calendar/uni-calendar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar.vue?vue&type=script&lang=js& */ 156);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 156:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/components/uni-calendar/uni-calendar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























































var _util = _interopRequireDefault(__webpack_require__(/*! ./util.js */ 157));
var _uniCalendarItem = _interopRequireDefault(__webpack_require__(/*! ./uni-calendar-item.vue */ 159));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 * Calendar 日历
 * @description 日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
 * @tutorial https://ext.dcloud.net.cn/plugin?id=56
 * @property {String} date 自定义当前时间，默认为今天
 * @property {Boolean} lunar 显示农历
 * @property {String} startDate 日期选择范围-开始日期
 * @property {String} endDate 日期选择范围-结束日期
 * @property {Boolean} range 范围选择
 * @property {Boolean} insert = [true|false] 插入模式,默认为false
 * 	@value true 弹窗模式
 * 	@value false 插入模式
 * @property {Array} selected 打点，期待格式[{date: '2019-06-27', info: '签到', data: { custom: '自定义信息', name: '自定义消息头',xxx:xxx... }}]
 * @property {Boolean} showMonth 是否选择月份为背景
 * @event {Function} change 日期改变，`insert :ture` 时生效
 * @event {Function} confirm 确认选择`insert :false` 时生效
 * @event {Function} monthSwitch 切换月份时触发
 * @example <uni-calendar :insert="true":lunar="true" :start-date="'2019-3-2'":end-date="'2019-5-20'"@change="change" />
 */var _default2 = { components: { uniCalendarItem: _uniCalendarItem.default }, props: { date: { type: String, default: '' }, selected: { type: Array, default: function _default() {return [];} }, lunar: { type: Boolean, default: false }, startDate: { type: String, default: '' }, endDate: { type: String, default: '' }, range: { type: Boolean, default: false }, insert: { type: Boolean, default: true }, showMonth: { type: Boolean, default: true } }, data: function data() {return { show: false, weeks: [], calendar: {}, nowDate: '', aniMaskShow: false };}, watch: { selected: function selected(newVal) {this.cale.setSelectInfo(this.nowDate.fullDate, newVal);this.weeks = this.cale.weeks;} }, created: function created() {// 获取日历方法实例
    this.cale = new _util.default({ date: this.date,
      selected: this.selected,
      startDate: this.startDate,
      endDate: this.endDate,
      range: this.range });

    this.init(this.cale.date.fullDate);
  },
  methods: {
    // 取消穿透
    clean: function clean() {},
    init: function init(date) {
      this.weeks = this.cale.weeks;
      this.nowDate = this.calendar = this.cale.getInfo(date);
    },
    open: function open() {var _this = this;
      this.show = true;
      this.$nextTick(function () {
        setTimeout(function () {
          _this.aniMaskShow = true;
        }, 50);
      });
    },
    close: function close() {var _this2 = this;
      this.aniMaskShow = false;
      this.$nextTick(function () {
        setTimeout(function () {
          _this2.show = false;
        }, 300);
      });
    },
    confirm: function confirm() {
      this.setEmit('confirm');
      this.close();
    },
    change: function change() {
      if (!this.insert) return;
      this.setEmit('change');
    },
    monthSwitch: function monthSwitch() {var _this$nowDate =



      this.nowDate,year = _this$nowDate.year,month = _this$nowDate.month;
      this.$emit('monthSwitch', {
        year: year,
        month: Number(month) });

    },
    setEmit: function setEmit(name) {var _this$calendar =







      this.calendar,year = _this$calendar.year,month = _this$calendar.month,date = _this$calendar.date,fullDate = _this$calendar.fullDate,lunar = _this$calendar.lunar,extraInfo = _this$calendar.extraInfo;
      this.$emit(name, {
        range: this.cale.multipleStatus,
        year: year,
        month: month,
        date: date,
        fulldate: fullDate,
        lunar: lunar,
        extraInfo: extraInfo || {} });

    },
    choiceDate: function choiceDate(weeks) {
      if (weeks.disable) return;
      this.calendar = weeks;
      // 设置多选
      this.cale.setMultiple(this.calendar.fullDate);
      this.weeks = this.cale.weeks;
      this.change();
    },
    backtoday: function backtoday() {
      this.cale.setDate(this.date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.calendar = this.cale.getInfo(this.date);
      this.change();
    },
    pre: function pre() {
      var preDate = this.cale.getDate(this.nowDate.fullDate, -1, 'month').fullDate;
      this.setDate(preDate);
      this.monthSwitch();

    },
    next: function next() {
      var nextDate = this.cale.getDate(this.nowDate.fullDate, +1, 'month').fullDate;
      this.setDate(nextDate);
      this.monthSwitch();
    },
    setDate: function setDate(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.cale.getInfo(date);
    } } };exports.default = _default2;

/***/ }),

/***/ 157:
/*!************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-calendar/util.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _calendar = _interopRequireDefault(__webpack_require__(/*! ./calendar.js */ 158));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Calendar = /*#__PURE__*/function () {
  function Calendar()





  {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},date = _ref.date,selected = _ref.selected,startDate = _ref.startDate,endDate = _ref.endDate,range = _ref.range;_classCallCheck(this, Calendar);
    // 当前日期
    this.date = this.getDate(date); // 当前初入日期
    // 打点信息
    this.selected = selected || [];
    // 范围开始
    this.startDate = startDate;
    // 范围结束
    this.endDate = endDate;
    this.range = range;
    // 多选状态
    this.multipleStatus = {
      before: '',
      after: '',
      data: [] };

    // 每周日期
    this.weeks = {};

    this._getWeek(this.date.fullDate);
  }

  /**
     * 获取任意时间
     */_createClass(Calendar, [{ key: "getDate", value: function getDate(
    date) {var AddDayCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var str = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
      if (!date) {
        date = new Date();
      }
      if (typeof date !== 'object') {
        date = date.replace(/-/g, '/');
      }
      var dd = new Date(date);
      switch (str) {
        case 'day':
          dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
          break;
        case 'month':
          if (dd.getDate() === 31) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            dd.setMonth(dd.getMonth() + AddDayCount); // 获取AddDayCount天后的日期
          }
          break;
        case 'year':
          dd.setFullYear(dd.getFullYear() + AddDayCount); // 获取AddDayCount天后的日期
          break;}

      var y = dd.getFullYear();
      var m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
      var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
      return {
        fullDate: y + '-' + m + '-' + d,
        year: y,
        month: m,
        date: d,
        day: dd.getDay() };

    }


    /**
       * 获取上月剩余天数
       */ }, { key: "_getLastMonthDays", value: function _getLastMonthDays(
    firstDay, full) {
      var dateArr = [];
      for (var i = firstDay; i > 0; i--) {
        var beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          lunar: this.getlunar(full.year, full.month - 1, beforeDate),
          disable: true });

      }
      return dateArr;
    }
    /**
       * 获取本月天数
       */ }, { key: "_currentMonthDys", value: function _currentMonthDys(
    dateData, full) {var _this = this;
      var dateArr = [];
      var fullDate = this.date.fullDate;var _loop = function _loop(
      i) {
        var isinfo = false;
        var nowDate = full.year + '-' + (full.month < 10 ?
        full.month : full.month) + '-' + (i < 10 ?
        '0' + i : i);
        // 是否今天
        var isDay = fullDate === nowDate;
        // 获取打点信息
        var info = _this.selected && _this.selected.find(function (item) {
          if (_this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });

        // 日期禁用
        var disableBefore = true;
        var disableAfter = true;
        if (_this.startDate) {
          var dateCompBefore = _this.dateCompare(_this.startDate, fullDate);
          disableBefore = _this.dateCompare(dateCompBefore ? _this.startDate : fullDate, nowDate);
        }

        if (_this.endDate) {
          var dateCompAfter = _this.dateCompare(fullDate, _this.endDate);
          disableAfter = _this.dateCompare(nowDate, dateCompAfter ? _this.endDate : fullDate);
        }

        var multiples = _this.multipleStatus.data;
        var checked = false;
        var multiplesStatus = -1;
        if (_this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex(function (item) {
              return _this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }

        var data = {
          fullDate: nowDate,
          year: full.year,
          date: i,
          multiple: _this.range ? checked : false,
          month: full.month,
          lunar: _this.getlunar(full.year, full.month, i),
          disable: !disableBefore || !disableAfter,
          isDay: isDay };

        if (info) {
          data.extraInfo = info;
        }

        dateArr.push(data);};for (var i = 1; i <= dateData; i++) {_loop(i);
      }
      return dateArr;
    }
    /**
       * 获取下月天数
       */ }, { key: "_getNextMonthDays", value: function _getNextMonthDays(
    surplus, full) {
      var dateArr = [];
      for (var i = 1; i < surplus + 1; i++) {
        dateArr.push({
          date: i,
          month: Number(full.month) + 1,
          lunar: this.getlunar(full.year, Number(full.month) + 1, i),
          disable: true });

      }
      return dateArr;
    }
    /**
       * 设置日期
       * @param {Object} date
       */ }, { key: "setDate", value: function setDate(
    date) {
      this._getWeek(date);
    }
    /**
       * 获取当前日期详情
       * @param {Object} date
       */ }, { key: "getInfo", value: function getInfo(
    date) {var _this2 = this;
      if (!date) {
        date = new Date();
      }
      var dateInfo = this.canlender.find(function (item) {return item.fullDate === _this2.getDate(date).fullDate;});
      return dateInfo;
    }

    /**
       * 比较时间大小
       */ }, { key: "dateCompare", value: function dateCompare(
    startDate, endDate) {
      // 计算截止时间
      startDate = new Date(startDate.replace('-', '/').replace('-', '/'));
      // 计算详细项的截止时间
      endDate = new Date(endDate.replace('-', '/').replace('-', '/'));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }

    /**
       * 比较时间是否相等
       */ }, { key: "dateEqual", value: function dateEqual(
    before, after) {
      // 计算截止时间
      before = new Date(before.replace('-', '/').replace('-', '/'));
      // 计算详细项的截止时间
      after = new Date(after.replace('-', '/').replace('-', '/'));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }


    /**
       * 获取日期范围内所有日期
       * @param {Object} begin
       * @param {Object} end
       */ }, { key: "geDateAll", value: function geDateAll(
    begin, end) {
      var arr = [];
      var ab = begin.split('-');
      var ae = end.split('-');
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
      for (var k = unixDb; k <= unixDe;) {
        k = k + 24 * 60 * 60 * 1000;
        arr.push(this.getDate(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    /**
       * 计算阴历日期显示
       */ }, { key: "getlunar", value: function getlunar(
    year, month, date) {
      return _calendar.default.solar2lunar(year, month, date);
    }
    /**
       * 设置打点
       */ }, { key: "setSelectInfo", value: function setSelectInfo(
    data, value) {
      this.selected = value;
      this._getWeek(data);
    }

    /**
       *  获取多选状态
       */ }, { key: "setMultiple", value: function setMultiple(
    fullDate) {var _this$multipleStatus =



      this.multipleStatus,before = _this$multipleStatus.before,after = _this$multipleStatus.after;
      if (!this.range) return;
      if (before && after) {
        this.multipleStatus.before = '';
        this.multipleStatus.after = '';
        this.multipleStatus.data = [];
        this._getWeek(fullDate);
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this._getWeek(fullDate);
        }
      }
    }

    /**
       * 获取每周数据
       * @param {Object} dateData
       */ }, { key: "_getWeek", value: function _getWeek(
    dateData) {var _this$getDate =






      this.getDate(dateData),fullDate = _this$getDate.fullDate,year = _this$getDate.year,month = _this$getDate.month,date = _this$getDate.date,day = _this$getDate.day;
      var firstDay = new Date(year, month - 1, 1).getDay();
      var currentDay = new Date(year, month, 0).getDate();
      var dates = {
        lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)), // 上个月末尾几天
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)), // 本月天数
        nextMonthDays: [], // 下个月开始几天
        weeks: [] };

      var canlender = [];
      var surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
      dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
      canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      var weeks = {};
      // 拼接数组  上个月开始几天 + 本月天数+ 下个月开始几天
      for (var i = 0; i < canlender.length; i++) {
        if (i % 7 === 0) {
          weeks[parseInt(i / 7)] = new Array(7);
        }
        weeks[parseInt(i / 7)][i % 7] = canlender[i];
      }
      this.canlender = canlender;
      this.weeks = weeks;
    }

    //静态方法
    // static init(date) {
    // 	if (!this.instance) {
    // 		this.instance = new Calendar(date);
    // 	}
    // 	return this.instance;
    // }
  }]);return Calendar;}();var _default =


Calendar;exports.default = _default;

/***/ }),

/***/ 158:
/*!****************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-calendar/calendar.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                     * @1900-2100区间内的公历、农历互转
                                                                                                     * @charset UTF-8
                                                                                                     * @github  https://github.com/jjonline/calendar.js
                                                                                                     * @Author  Jea杨(JJonline@JJonline.Cn)
                                                                                                     * @Time    2014-7-21
                                                                                                     * @Time    2016-8-13 Fixed 2033hex、Attribution Annals
                                                                                                     * @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
                                                                                                     * @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
                                                                                                     * @Version 1.0.3
                                                                                                     * @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
                                                                                                     * @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
                                                                                                     */
/* eslint-disable */
var calendar = {

  /**
                     * 农历1900-2100的润大小信息表
                     * @Array Of Property
                     * @return Hex
                     */
  lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049
  /** Add By JJonline@JJonline.Cn**/
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099
  0x0d520], // 2100

  /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number
      */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  /**
                                                                    * 天干地支之天干速查表
                                                                    * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
                                                                    * @return Cn string
                                                                    */
  Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],

  /**
                                                                                                                 * 天干地支之地支速查表
                                                                                                                 * @Array Of Property
                                                                                                                 * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
                                                                                                                 * @return Cn string
                                                                                                                 */
  Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],

  /**
                                                                                                                                     * 天干地支之地支速查表<=>生肖
                                                                                                                                     * @Array Of Property
                                                                                                                                     * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
                                                                                                                                     * @return Cn string
                                                                                                                                     */
  Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],

  /**
                                                                                                                                         * 24节气速查表
                                                                                                                                         * @Array Of Property
                                                                                                                                         * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
                                                                                                                                         * @return Cn string
                                                                                                                                         */
  solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],

  /**
                                                                                                                                                                                                                                                                                                                                                                                                                   * 1900-2100各年的24节气日期速查表
                                                                                                                                                                                                                                                                                                                                                                                                                   * @Array Of Property
                                                                                                                                                                                                                                                                                                                                                                                                                   * @return 0x string For splice
                                                                                                                                                                                                                                                                                                                                                                                                                   */
  sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',
  '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',
  'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',
  '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',
  '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',
  '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',
  '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',
  '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',
  '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',
  '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],

  /**
                                                                                                             * 数字转中文速查表
                                                                                                             * @Array Of Property
                                                                                                             * @trans ['日','一','二','三','四','五','六','七','八','九','十']
                                                                                                             * @return Cn string
                                                                                                             */
  nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],

  /**
                                                                                                                             * 日期转农历称呼速查表
                                                                                                                             * @Array Of Property
                                                                                                                             * @trans ['初','十','廿','卅']
                                                                                                                             * @return Cn string
                                                                                                                             */
  nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],

  /**
                                                       * 月份转农历称呼速查表
                                                       * @Array Of Property
                                                       * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
                                                       * @return Cn string
                                                       */
  nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],

  /**
                                                                                                                                       * 返回农历y年一整年的总天数
                                                                                                                                       * @param lunar Year
                                                                                                                                       * @return Number
                                                                                                                                       * @eg:var count = calendar.lYearDays(1987) ;//count=387
                                                                                                                                       */
  lYearDays: function lYearDays(y) {
    var i;var sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {sum += this.lunarInfo[y - 1900] & i ? 1 : 0;}
    return sum + this.leapDays(y);
  },

  /**
         * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
         * @param lunar Year
         * @return Number (0-12)
         * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
         */
  leapMonth: function leapMonth(y) {// 闰字编码 \u95f0
    return this.lunarInfo[y - 1900] & 0xf;
  },

  /**
         * 返回农历y年闰月的天数 若该年没有闰月则返回0
         * @param lunar Year
         * @return Number (0、29、30)
         * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
         */
  leapDays: function leapDays(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  },

  /**
         * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
         * @param lunar Year
         * @return Number (-1、29、30)
         * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
         */
  monthDays: function monthDays(y, m) {
    if (m > 12 || m < 1) {return -1;} // 月份参数从1至12，参数错误返回-1
    return this.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },

  /**
         * 返回公历(!)y年m月的天数
         * @param solar Year
         * @return Number (-1、28、29、30、31)
         * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
         */
  solarDays: function solarDays(y, m) {
    if (m > 12 || m < 1) {return -1;} // 若参数错误 返回-1
    var ms = m - 1;
    if (ms == 1) {// 2月份的闰平规律测算后确认返回28或29
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },

  /**
        * 农历年份转换为干支纪年
        * @param  lYear 农历年的年份数
        * @return Cn string
        */
  toGanZhiYear: function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0) ganKey = 10; // 如果余数为0则为最后一个天干
    if (zhiKey == 0) zhiKey = 12; // 如果余数为0则为最后一个地支
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },

  /**
        * 公历月、日判断所属星座
        * @param  cMonth [description]
        * @param  cDay [description]
        * @return Cn string
        */
  toAstro: function toAstro(cMonth, cDay) {
    var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"; // 座
  },

  /**
         * 传入offset偏移量返回干支
         * @param offset 相对甲子的偏移量
         * @return Cn string
         */
  toGanZhi: function toGanZhi(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },

  /**
         * 传入公历(!)y年获得该年第n个节气的公历日期
         * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
         * @return day Number
         * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
         */
  getTerm: function getTerm(y, n) {
    if (y < 1900 || y > 2100) {return -1;}
    if (n < 1 || n > 24) {return -1;}
    var _table = this.sTermInfo[y - 1900];
    var _info = [
    parseInt('0x' + _table.substr(0, 5)).toString(),
    parseInt('0x' + _table.substr(5, 5)).toString(),
    parseInt('0x' + _table.substr(10, 5)).toString(),
    parseInt('0x' + _table.substr(15, 5)).toString(),
    parseInt('0x' + _table.substr(20, 5)).toString(),
    parseInt('0x' + _table.substr(25, 5)).toString()];

    var _calday = [
    _info[0].substr(0, 1),
    _info[0].substr(1, 2),
    _info[0].substr(3, 1),
    _info[0].substr(4, 2),

    _info[1].substr(0, 1),
    _info[1].substr(1, 2),
    _info[1].substr(3, 1),
    _info[1].substr(4, 2),

    _info[2].substr(0, 1),
    _info[2].substr(1, 2),
    _info[2].substr(3, 1),
    _info[2].substr(4, 2),

    _info[3].substr(0, 1),
    _info[3].substr(1, 2),
    _info[3].substr(3, 1),
    _info[3].substr(4, 2),

    _info[4].substr(0, 1),
    _info[4].substr(1, 2),
    _info[4].substr(3, 1),
    _info[4].substr(4, 2),

    _info[5].substr(0, 1),
    _info[5].substr(1, 2),
    _info[5].substr(3, 1),
    _info[5].substr(4, 2)];

    return parseInt(_calday[n - 1]);
  },

  /**
         * 传入农历数字月份返回汉语通俗表示法
         * @param lunar month
         * @return Cn string
         * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
         */
  toChinaMonth: function toChinaMonth(m) {// 月 => \u6708
    if (m > 12 || m < 1) {return -1;} // 若参数错误 返回-1
    var s = this.nStr3[m - 1];
    s += "\u6708"; // 加上月字
    return s;
  },

  /**
         * 传入农历日期数字返回汉字表示法
         * @param lunar day
         * @return Cn string
         * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
         */
  toChinaDay: function toChinaDay(d) {// 日 => \u65e5
    var s;
    switch (d) {
      case 10:
        s = "\u521D\u5341";break;
      case 20:
        s = "\u4E8C\u5341";break;
        break;
      case 30:
        s = "\u4E09\u5341";break;
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];}

    return s;
  },

  /**
         * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
         * @param y year
         * @return Cn string
         * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
         */
  getAnimal: function getAnimal(y) {
    return this.Animals[(y - 4) % 12];
  },

  /**
         * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
         * @param y  solar year
         * @param m  solar month
         * @param d  solar day
         * @return JSON object
         * @eg:console.log(calendar.solar2lunar(1987,11,01));
         */
  solar2lunar: function solar2lunar(y, m, d) {// 参数区间1900.1.31~2100.12.31
    // 年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1; // undefined转换为数字变为NaN
    }
    // 公历传参最下限
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    // 未传参  获得当天
    if (!y) {
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i;var leap = 0;var temp = 0;
    // 修正ymd参数
    var y = objDate.getFullYear();
    var m = objDate.getMonth() + 1;
    var d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;i--;
    }

    // 是否今天
    var isTodayObj = new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    // 星期几
    var nWeek = objDate.getDay();
    var cWeek = this.nStr1[nWeek];
    // 数字表示周几顺应天朝周一开始的惯例
    if (nWeek == 0) {
      nWeek = 7;
    }
    // 农历年
    var year = i;
    var leap = this.leapMonth(i); // 闰哪个月
    var isLeap = false;

    // 效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      // 闰月
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;temp = this.leapDays(year); // 计算农历闰月天数
      } else {
        temp = this.monthDays(year, i); // 计算农历普通月天数
      }
      // 解除闰月
      if (isLeap == true && i == leap + 1) {isLeap = false;}
      offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;--i;
      }
    }
    if (offset < 0) {
      offset += temp;--i;
    }
    // 农历月
    var month = i;
    // 农历日
    var day = offset + 1;
    // 天干地支处理
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);

    // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
    var firstNode = this.getTerm(y, m * 2 - 1); // 返回当月「节」为几日开始
    var secondNode = this.getTerm(y, m * 2); // 返回当月「节」为几日开始

    // 依据12节气修正干支月
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }

    // 传入的日期的节气与否
    var isTerm = false;
    var Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    // 日柱 当月一日与 1900/1/1 相差天数
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    // 该日期所属的星座
    var astro = this.toAstro(m, d);

    return { 'lYear': year, 'lMonth': month, 'lDay': day, 'Animal': this.getAnimal(year), 'IMonthCn': (isLeap ? "\u95F0" : '') + this.toChinaMonth(month), 'IDayCn': this.toChinaDay(day), 'cYear': y, 'cMonth': m, 'cDay': d, 'gzYear': gzY, 'gzMonth': gzM, 'gzDay': gzD, 'isToday': isToday, 'isLeap': isLeap, 'nWeek': nWeek, 'ncWeek': "\u661F\u671F" + cWeek, 'isTerm': isTerm, 'Term': Term, 'astro': astro };
  },

  /**
         * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
         * @param y  lunar year
         * @param m  lunar month
         * @param d  lunar day
         * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
         * @return JSON object
         * @eg:console.log(calendar.lunar2solar(1987,9,10));
         */
  lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {// 参数区间1900.1.31~2100.12.1
    var isLeapMonth = !!isLeapMonth;
    var leapOffset = 0;
    var leapMonth = this.leapMonth(y);
    var leapDay = this.leapDays(y);
    if (isLeapMonth && leapMonth != m) {return -1;} // 传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {return -1;} // 超出了最大极限值
    var day = this.monthDays(y, m);
    var _day = day;
    // bugFix 2016-9-25
    // if month is leap, _day use leapDays method
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {return -1;} // 参数合法性效验

    // 计算农历的时间差
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0;var isAdd = false;
    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {// 处理闰月
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    // 转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {offset += day;}
    // 1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();

    return this.solar2lunar(cY, cM, cD);
  } };var _default =


calendar;exports.default = _default;

/***/ }),

/***/ 159:
/*!**************************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-calendar/uni-calendar-item.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_calendar_item_vue_vue_type_template_id_252074b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-calendar-item.vue?vue&type=template&id=252074b8&scoped=true& */ 160);
/* harmony import */ var _uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-calendar-item.vue?vue&type=script&lang=js& */ 162);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-calendar-item.vue?vue&type=style&index=0&id=252074b8&scoped=true&lang=css& */ 164).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-calendar-item.vue?vue&type=style&index=0&id=252074b8&scoped=true&lang=css& */ 164).default)
            }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_calendar_item_vue_vue_type_template_id_252074b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_calendar_item_vue_vue_type_template_id_252074b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "252074b8",
  "4dd9e5a0",
  false,
  _uni_calendar_item_vue_vue_type_template_id_252074b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/YF/web/uniapp/components/uni-calendar/uni-calendar-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 160:
/*!*********************************************************************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-calendar/uni-calendar-item.vue?vue&type=template&id=252074b8&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_template_id_252074b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar-item.vue?vue&type=template&id=252074b8&scoped=true& */ 161);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_template_id_252074b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_template_id_252074b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_template_id_252074b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_template_id_252074b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 161:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/components/uni-calendar/uni-calendar-item.vue?vue&type=template&id=252074b8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["uni-calendar-item__weeks-box"],
      class: {
        "uni-calendar-item--disable": _vm.weeks.disable,
        "uni-calendar-item--isDay":
          _vm.calendar.fullDate === _vm.weeks.fullDate && _vm.weeks.isDay,
        "uni-calendar-item--checked":
          _vm.calendar.fullDate === _vm.weeks.fullDate && !_vm.weeks.isDay,
        "uni-calendar-item--multiple": _vm.weeks.multiple
      },
      on: {
        click: function($event) {
          _vm.choiceDate(_vm.weeks)
        }
      }
    },
    [
      _c("view", { staticClass: ["uni-calendar-item__weeks-box-item"] }, [
        _vm.selected && _vm.weeks.extraInfo
          ? _c("u-text", {
              staticClass: ["uni-calendar-item__weeks-box-circle"]
            })
          : _vm._e(),
        _c(
          "u-text",
          {
            staticClass: ["uni-calendar-item__weeks-box-text"],
            class: {
              "uni-calendar-item--isDay-text": _vm.weeks.isDay,
              "uni-calendar-item--isDay":
                _vm.calendar.fullDate === _vm.weeks.fullDate && _vm.weeks.isDay,
              "uni-calendar-item--checked":
                _vm.calendar.fullDate === _vm.weeks.fullDate &&
                !_vm.weeks.isDay,
              "uni-calendar-item--multiple": _vm.weeks.multiple,
              "uni-calendar-item--disable": _vm.weeks.disable
            }
          },
          [_vm._v(_vm._s(_vm.weeks.date))]
        ),
        !_vm.lunar && !_vm.weeks.extraInfo && _vm.weeks.isDay
          ? _c(
              "u-text",
              {
                staticClass: ["uni-calendar-item__weeks-lunar-text"],
                class: {
                  "uni-calendar-item--isDay-text": _vm.weeks.isDay,
                  "uni-calendar-item--isDay":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    _vm.weeks.isDay,
                  "uni-calendar-item--checked":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    !_vm.weeks.isDay,
                  "uni-calendar-item--multiple": _vm.weeks.multiple
                }
              },
              [_vm._v("今天")]
            )
          : _vm._e(),
        _vm.lunar && !_vm.weeks.extraInfo
          ? _c(
              "u-text",
              {
                staticClass: ["uni-calendar-item__weeks-lunar-text"],
                class: {
                  "uni-calendar-item--isDay-text": _vm.weeks.isDay,
                  "uni-calendar-item--isDay":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    _vm.weeks.isDay,
                  "uni-calendar-item--checked":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    !_vm.weeks.isDay,
                  "uni-calendar-item--multiple": _vm.weeks.multiple,
                  "uni-calendar-item--disable": _vm.weeks.disable
                }
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.weeks.isDay
                      ? "今天"
                      : _vm.weeks.lunar.IDayCn === "初一"
                      ? _vm.weeks.lunar.IMonthCn
                      : _vm.weeks.lunar.IDayCn
                  )
                )
              ]
            )
          : _vm._e(),
        _vm.weeks.extraInfo && _vm.weeks.extraInfo.info
          ? _c(
              "u-text",
              {
                staticClass: ["uni-calendar-item__weeks-lunar-text"],
                class: {
                  "uni-calendar-item--extra": _vm.weeks.extraInfo.info,
                  "uni-calendar-item--isDay-text": _vm.weeks.isDay,
                  "uni-calendar-item--isDay":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    _vm.weeks.isDay,
                  "uni-calendar-item--checked":
                    _vm.calendar.fullDate === _vm.weeks.fullDate &&
                    !_vm.weeks.isDay,
                  "uni-calendar-item--multiple": _vm.weeks.multiple,
                  "uni-calendar-item--disable": _vm.weeks.disable
                }
              },
              [_vm._v(_vm._s(_vm.weeks.extraInfo.info))]
            )
          : _vm._e()
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 162:
/*!***************************************************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-calendar/uni-calendar-item.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar-item.vue?vue&type=script&lang=js& */ 163);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 163:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/components/uni-calendar/uni-calendar-item.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 =
{
  props: {
    weeks: {
      type: Object,
      default: function _default() {
        return {};
      } },

    calendar: {
      type: Object,
      default: function _default() {
        return {};
      } },

    selected: {
      type: Array,
      default: function _default() {
        return [];
      } },

    lunar: {
      type: Boolean,
      default: false } },


  methods: {
    choiceDate: function choiceDate(weeks) {
      this.$emit('change', weeks);
    } } };exports.default = _default2;

/***/ }),

/***/ 164:
/*!***********************************************************************************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-calendar/uni-calendar-item.vue?vue&type=style&index=0&id=252074b8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_252074b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar-item.vue?vue&type=style&index=0&id=252074b8&scoped=true&lang=css& */ 165);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_252074b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_252074b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_252074b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_252074b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_item_vue_vue_type_style_index_0_id_252074b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 165:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/components/uni-calendar/uni-calendar-item.vue?vue&type=style&index=0&id=252074b8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-calendar-item__weeks-box": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "uni-calendar-item__weeks-box-text": {
    "fontSize": "28rpx",
    "color": "#333333"
  },
  "uni-calendar-item__weeks-lunar-text": {
    "fontSize": "24rpx",
    "color": "#333333"
  },
  "uni-calendar-item__weeks-box-item": {
    "position": "relative",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100rpx",
    "height": "100rpx"
  },
  "uni-calendar-item__weeks-box-circle": {
    "position": "absolute",
    "top": "5",
    "right": "5",
    "width": "8",
    "height": "8",
    "borderRadius": "8",
    "backgroundColor": "#dd524d"
  },
  "uni-calendar-item--disable": {
    "backgroundColor": "rgba(249,249,249,0.3)",
    "color": "#c0c0c0"
  },
  "uni-calendar-item--isDay-text": {
    "color": "#007aff"
  },
  "uni-calendar-item--isDay": {
    "backgroundColor": "#007aff",
    "opacity": 0.8,
    "color": "#ffffff"
  },
  "uni-calendar-item--extra": {
    "color": "#dd524d",
    "opacity": 0.8
  },
  "uni-calendar-item--checked": {
    "backgroundColor": "#007aff",
    "color": "#ffffff",
    "opacity": 0.8
  },
  "uni-calendar-item--multiple": {
    "backgroundColor": "#007aff",
    "color": "#ffffff",
    "opacity": 0.8
  }
}

/***/ }),

/***/ 166:
/*!******************************************************************************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-calendar/uni-calendar.vue?vue&type=style&index=0&id=09bb1ccc&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_09bb1ccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-calendar.vue?vue&type=style&index=0&id=09bb1ccc&scoped=true&lang=css& */ 167);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_09bb1ccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_09bb1ccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_09bb1ccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_09bb1ccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_calendar_vue_vue_type_style_index_0_id_09bb1ccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 167:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/components/uni-calendar/uni-calendar.vue?vue&type=style&index=0&id=09bb1ccc&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-calendar": {
    "flexDirection": "column"
  },
  "uni-calendar__mask": {
    "position": "fixed",
    "bottom": 0,
    "top": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "transitionProperty": "opacity",
    "transitionDuration": 300,
    "opacity": 0
  },
  "@TRANSITION": {
    "uni-calendar__mask": {
      "property": "opacity",
      "duration": 300
    },
    "uni-calendar--fixed": {
      "property": "transform",
      "duration": 300
    }
  },
  "uni-calendar--mask-show": {
    "opacity": 1
  },
  "uni-calendar--fixed": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "transitionProperty": "transform",
    "transitionDuration": 300,
    "transform": "translateY(460px)"
  },
  "uni-calendar--ani-show": {
    "transform": "translateY(0)"
  },
  "uni-calendar__content": {
    "backgroundColor": "#ffffff"
  },
  "uni-calendar__header": {
    "position": "relative",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "50",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "uni-calendar--fixed-top": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "borderTopColor": "#e5e5e5",
    "borderTopStyle": "solid",
    "borderTopWidth": "1"
  },
  "uni-calendar--fixed-width": {
    "width": "50"
  },
  "uni-calendar__backtoday": {
    "position": "absolute",
    "right": 0,
    "top": "25rpx",
    "paddingTop": 0,
    "paddingRight": "5",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "height": "25",
    "lineHeight": "25",
    "fontSize": "12",
    "borderTopLeftRadius": "25",
    "borderBottomLeftRadius": "25",
    "color": "#333333",
    "backgroundColor": "#f1f1f1"
  },
  "uni-calendar__header-text": {
    "textAlign": "center",
    "width": "100",
    "fontSize": "28rpx",
    "color": "#333333"
  },
  "uni-calendar__header-btn-box": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "50",
    "height": "50"
  },
  "uni-calendar__header-btn": {
    "width": "10",
    "height": "10",
    "borderLeftColor": "#808080",
    "borderLeftStyle": "solid",
    "borderLeftWidth": "2",
    "borderTopColor": "#555555",
    "borderTopStyle": "solid",
    "borderTopWidth": "2"
  },
  "uni-calendar--left": {
    "transform": "rotate(-45deg)"
  },
  "uni-calendar--right": {
    "transform": "rotate(135deg)"
  },
  "uni-calendar__weeks": {
    "position": "relative",
    "flexDirection": "row"
  },
  "uni-calendar__weeks-item": {
    "flex": 1
  },
  "uni-calendar__weeks-day": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "45",
    "borderBottomColor": "#F5F5F5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "uni-calendar__weeks-day-text": {
    "fontSize": "14"
  },
  "uni-calendar__box": {
    "position": "relative"
  },
  "uni-calendar__box-bg": {
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "uni-calendar__box-bg-text": {
    "fontSize": "200",
    "fontWeight": "bold",
    "color": "#999999",
    "opacity": 0.1,
    "textAlign": "center"
  }
}

/***/ }),

/***/ 18:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-261120200409001","_inBundle":false,"_integrity":"sha512-iM1vsCzUEg80lCM7rSAkh+28ahjS9zQgiGsEoHxawCD9s7rTFnSRIaOuc7WHeQt6EclGUUIrMccYHXsLsNAXZg==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-261120200409001.tgz","_shasum":"e9daeef120f133bf3d4ca0505f5b2abed0e874a7","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"ff0877f516c1cc986cf2d7eae2bf5030c58050f9","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-261120200409001"};

/***/ }),

/***/ 264:
/*!*******************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-section/uni-section.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_section_vue_vue_type_template_id_7981b404_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-section.vue?vue&type=template&id=7981b404&scoped=true& */ 265);
/* harmony import */ var _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-section.vue?vue&type=script&lang=js& */ 267);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=7981b404&scoped=true&lang=css& */ 269).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=7981b404&scoped=true&lang=css& */ 269).default)
            }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_section_vue_vue_type_template_id_7981b404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_section_vue_vue_type_template_id_7981b404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7981b404",
  "1ef803f2",
  false,
  _uni_section_vue_vue_type_template_id_7981b404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/YF/web/uniapp/components/uni-section/uni-section.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 265:
/*!**************************************************************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-section/uni-section.vue?vue&type=template&id=7981b404&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_7981b404_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=template&id=7981b404&scoped=true& */ 266);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_7981b404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_7981b404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_7981b404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_7981b404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 266:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/components/uni-section/uni-section.vue?vue&type=template&id=7981b404&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["uni-section"], attrs: { nvue: true } },
    [
      _vm.type
        ? _c("view", { staticClass: ["uni-section__head"] }, [
            _c("view", {
              staticClass: ["uni-section__head-tag"],
              class: _vm.type
            })
          ])
        : _vm._e(),
      _c("view", { staticClass: ["uni-section__content"] }, [
        _c(
          "u-text",
          {
            staticClass: ["uni-section__content-title"],
            class: { distraction: !_vm.subTitle }
          },
          [_vm._v(_vm._s(_vm.title))]
        ),
        _vm.subTitle
          ? _c("u-text", { staticClass: ["uni-section__content-sub"] }, [
              _vm._v(_vm._s(_vm.subTitle))
            ])
          : _vm._e()
      ]),
      _vm._t("default")
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 267:
/*!********************************************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=script&lang=js& */ 268);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 268:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Section 标题栏
 * @description 标题栏
 * @property {String} type = [line|circle] 标题装饰类型
 * 	@value line 竖线
 * 	@value circle 圆形
 * @property {String} title 主标题
 * @property {String} subTitle 副标题
 */var _default =

{
  name: 'UniTitle',
  props: {
    type: {
      type: String,
      default: '' },

    title: {
      type: String,
      default: '' },

    subTitle: {
      type: String,
      default: '' } },


  data: function data() {
    return {};
  },
  watch: {
    title: function title(newVal) {
      if (uni.report && newVal !== '') {
        uni.report('title', newVal);
      }
    } },

  methods: {
    onClick: function onClick() {
      this.$emit('click');
    } } };exports.default = _default;

/***/ }),

/***/ 269:
/*!****************************************************************************************************************************!*\
  !*** /Users/YF/web/uniapp/components/uni-section/uni-section.vue?vue&type=style&index=0&id=7981b404&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_7981b404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=style&index=0&id=7981b404&scoped=true&lang=css& */ 270);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_7981b404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_7981b404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_7981b404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_7981b404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_7981b404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 270:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/components/uni-section/uni-section.vue?vue&type=style&index=0&id=7981b404&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-section": {
    "position": "relative",
    "marginTop": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "height": "50",
    "backgroundColor": "#f8f8f8",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "0.5",
    "fontWeight": "normal"
  },
  "uni-section__head": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "10"
  },
  "line": {
    "height": "15",
    "backgroundColor": "#c0c0c0",
    "borderRadius": "5",
    "width": "3"
  },
  "circle": {
    "width": "8",
    "height": "8",
    "borderTopRightRadius": "50",
    "borderTopLeftRadius": "50",
    "borderBottomLeftRadius": "50",
    "borderBottomRightRadius": "50",
    "backgroundColor": "#c0c0c0"
  },
  "uni-section__content": {
    "flex": 1,
    "color": "#333333"
  },
  "uni-section__content-title": {
    "fontSize": "28rpx",
    "color": "#333333"
  },
  "distraction": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-section__content-sub": {
    "fontSize": "24rpx",
    "color": "#999999"
  }
}

/***/ }),

/***/ 3:
/*!********************************************************!*\
  !*** /Users/YF/web/uniapp/pages.json?{"type":"style"} ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),

/***/ 379:
/*!***********************************************************************************!*\
  !*** /Users/YF/web/uniapp/main.js?{"page":"pages%2FextUI%2Fcalendar%2Fcalendar"} ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_extUI_calendar_calendar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/extUI/calendar/calendar.nvue?mpType=page */ 380);

        
        
        
        _pages_extUI_calendar_calendar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_extUI_calendar_calendar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/extUI/calendar/calendar'
        _pages_extUI_calendar_calendar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_extUI_calendar_calendar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 380:
/*!***************************************************************************!*\
  !*** /Users/YF/web/uniapp/pages/extUI/calendar/calendar.nvue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_nvue_vue_type_template_id_4d9d952c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.nvue?vue&type=template&id=4d9d952c&mpType=page */ 381);
/* harmony import */ var _calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.nvue?vue&type=script&lang=js&mpType=page */ 383);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./calendar.nvue?vue&type=style&index=0&lang=css&mpType=page */ 385).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./calendar.nvue?vue&type=style&index=0&lang=css&mpType=page */ 385).default)
            }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _calendar_nvue_vue_type_template_id_4d9d952c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _calendar_nvue_vue_type_template_id_4d9d952c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "61f6df5e",
  false,
  _calendar_nvue_vue_type_template_id_4d9d952c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/YF/web/uniapp/pages/extUI/calendar/calendar.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 381:
/*!*********************************************************************************************************!*\
  !*** /Users/YF/web/uniapp/pages/extUI/calendar/calendar.nvue?vue&type=template&id=4d9d952c&mpType=page ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_template_id_4d9d952c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./calendar.nvue?vue&type=template&id=4d9d952c&mpType=page */ 382);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_template_id_4d9d952c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_template_id_4d9d952c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_template_id_4d9d952c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_template_id_4d9d952c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 382:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/pages/extUI/calendar/calendar.nvue?vue&type=template&id=4d9d952c&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "uni-section": __webpack_require__(/*! @/components/uni-section/uni-section.vue */ 264).default,
  "uni-calendar": __webpack_require__(/*! @/components/uni-calendar/uni-calendar.vue */ 152).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _vm.showCalendar
        ? _c(
            "view",
            { staticClass: ["calendar-content"] },
            [
              _c("u-text", { staticClass: ["example-info"] }, [
                _vm._v(
                  "日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等。"
                )
              ]),
              _c("uni-section", { attrs: { title: "插入模式", type: "line" } }),
              _c(
                "view",
                [
                  _c("uni-calendar", {
                    attrs: { selected: _vm.info.selected, showMonth: false },
                    on: { change: _vm.change, monthSwitch: _vm.monthSwitch }
                  })
                ],
                1
              ),
              _c("uni-section", { attrs: { title: "弹出模式", type: "line" } }),
              _c(
                "view",
                { staticClass: ["example-body"] },
                [
                  _c(
                    "button",
                    {
                      staticClass: ["calendar-button"],
                      attrs: { type: "button" },
                      on: { click: _vm.open }
                    },
                    [_vm._v("打开日历")]
                  )
                ],
                1
              ),
              _c("uni-calendar", {
                ref: "calendar",
                attrs: {
                  date: _vm.info.date,
                  insert: _vm.info.insert,
                  lunar: _vm.info.lunar,
                  startDate: _vm.info.startDate,
                  endDate: _vm.info.endDate,
                  range: _vm.info.range
                },
                on: { confirm: _vm.confirm }
              })
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 383:
/*!***************************************************************************************************!*\
  !*** /Users/YF/web/uniapp/pages/extUI/calendar/calendar.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./calendar.nvue?vue&type=script&lang=js&mpType=page */ 384);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 384:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/pages/extUI/calendar/calendar.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
















var _uniSection = _interopRequireDefault(__webpack_require__(/*! @/components/uni-section/uni-section.vue */ 264));
var _uniCalendar = _interopRequireDefault(__webpack_require__(/*! @/components/uni-calendar/uni-calendar.vue */ 152));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { uniSection: _uniSection.default, uniCalendar: _uniCalendar.default }, data: function data() {return { showCalendar: false, info: { date: '2019-08-15', startDate: '2019-06-15', endDate: '2019-010-15', lunar: true, range: true, insert: false, selected: [] } };


  },
  onReady: function onReady() {var _this = this;
    this.$nextTick(function () {
      _this.showCalendar = true;
    });
    // TODO 模拟请求异步同步数据
    setTimeout(function () {
      _this.info.selected = [{
        date: '2019-08-20',
        info: '打卡' },

      {
        date: '2019-08-21',
        info: '签到',
        data: {
          custom: '自定义信息',
          name: '自定义消息头' } },


      {
        date: '2019-08-22',
        info: '已打卡' }];


    }, 500);
  },
  methods: {
    open: function open() {
      this.$refs.calendar.open();
    },
    change: function change(e) {
      __f__("log", 'change 返回:', e, " at pages/extUI/calendar/calendar.nvue:69");
      // 模拟动态打卡
      if (this.info.selected.length > 5) return;
      this.info.selected.push({
        date: e.fulldate,
        info: '打卡' });

    },
    confirm: function confirm(e) {
      __f__("log", 'confirm 返回:', e, " at pages/extUI/calendar/calendar.nvue:78");
    },
    monthSwitch: function monthSwitch(e) {
      __f__("log", 'monthSwitchs 返回:', e, " at pages/extUI/calendar/calendar.nvue:81");
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 51)["default"]))

/***/ }),

/***/ 385:
/*!***********************************************************************************************************!*\
  !*** /Users/YF/web/uniapp/pages/extUI/calendar/calendar.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./calendar.nvue?vue&type=style&index=0&lang=css&mpType=page */ 386);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_calendar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 386:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/pages/extUI/calendar/calendar.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "example": {
    "paddingTop": 0,
    "paddingRight": "15",
    "paddingBottom": 0,
    "paddingLeft": "15"
  },
  "example-info": {
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "color": "#3b4144",
    "backgroundColor": "#ffffff",
    "fontSize": "14",
    "lineHeight": "20"
  },
  "example-info-text": {
    "fontSize": "14",
    "lineHeight": "20",
    "color": "#3b4144"
  },
  "example-body": {
    "flexDirection": "row",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "backgroundColor": "#ffffff"
  },
  "word-btn-white": {
    "fontSize": "18",
    "color": "#FFFFFF"
  },
  "word-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6",
    "height": "48",
    "marginTop": "15",
    "marginRight": "15",
    "marginBottom": "15",
    "marginLeft": "15",
    "backgroundColor": "#007AFF"
  },
  "word-btn--hover": {
    "backgroundColor": "#4ca2ff"
  },
  "calendar-button": {
    "flex": 1,
    "fontWeight": "bold",
    "fontSize": "32rpx"
  }
}

/***/ }),

/***/ 4:
/*!*******************************************************!*\
  !*** /Users/YF/web/uniapp/pages.json?{"type":"stat"} ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__9C1D61F"});

/***/ }),

/***/ 5:
/*!********************************************************!*\
  !*** /Users/YF/web/uniapp/main.js?{"type":"appStyle"} ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 51:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type]['apply'](console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),

/***/ 6:
/*!********************************************************************!*\
  !*** /Users/YF/web/uniapp/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 7);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 7:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/YF/web/uniapp/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9jb21wb25lbnRzL3VuaS1jYWxlbmRhci91bmktY2FsZW5kYXIudnVlP2YwMmEiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ZRi93ZWIvdW5pYXBwL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWU/MGMxNiIsIndlYnBhY2s6Ly8vL1VzZXJzL1lGL3dlYi91bmlhcHAvY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLnZ1ZT81OTA4Iiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9jb21wb25lbnRzL3VuaS1jYWxlbmRhci91bmktY2FsZW5kYXIudnVlPzYxZjgiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWUiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3V0aWwuanMiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL2NhbGVuZGFyLmpzIiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9jb21wb25lbnRzL3VuaS1jYWxlbmRhci91bmktY2FsZW5kYXItaXRlbS52dWU/M2UxMyIsIndlYnBhY2s6Ly8vL1VzZXJzL1lGL3dlYi91bmlhcHAvY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLWl0ZW0udnVlP2I2ODciLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ZRi93ZWIvdW5pYXBwL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT8xNzcyIiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9jb21wb25lbnRzL3VuaS1jYWxlbmRhci91bmktY2FsZW5kYXItaXRlbS52dWU/OGZlYyIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLWl0ZW0udnVlIiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9jb21wb25lbnRzL3VuaS1jYWxlbmRhci91bmktY2FsZW5kYXItaXRlbS52dWU/ZTk1MSIsIndlYnBhY2s6Ly8vL1VzZXJzL1lGL3dlYi91bmlhcHAvY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLWl0ZW0udnVlPzFkMGUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ZRi93ZWIvdW5pYXBwL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWU/MGJjMSIsIndlYnBhY2s6Ly8vL1VzZXJzL1lGL3dlYi91bmlhcHAvY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLnZ1ZT9jNzQ5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1Iiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT8zODZlIiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT80YmMxIiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT9jYzIwIiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT9kNTVmIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL1lGL3dlYi91bmlhcHAvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWU/NWJiMCIsIndlYnBhY2s6Ly8vL1VzZXJzL1lGL3dlYi91bmlhcHAvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWU/ZTkyYiIsIndlYnBhY2s6Ly8vL1VzZXJzL1lGL3dlYi91bmlhcHAvcGFnZXMuanNvbj82NDAxIiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9tYWluLmpzPzFkOWMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ZRi93ZWIvdW5pYXBwL3BhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyLm52dWU/ZGYxOCIsIndlYnBhY2s6Ly8vL1VzZXJzL1lGL3dlYi91bmlhcHAvcGFnZXMvZXh0VUkvY2FsZW5kYXIvY2FsZW5kYXIubnZ1ZT9iN2EyIiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9wYWdlcy9leHRVSS9jYWxlbmRhci9jYWxlbmRhci5udnVlPzExM2UiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ZRi93ZWIvdW5pYXBwL3BhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyLm52dWU/M2M5ZSIsInVuaS1hcHA6Ly8vcGFnZXMvZXh0VUkvY2FsZW5kYXIvY2FsZW5kYXIubnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL1lGL3dlYi91bmlhcHAvcGFnZXMvZXh0VUkvY2FsZW5kYXIvY2FsZW5kYXIubnZ1ZT9lZGNmIiwid2VicGFjazovLy8vVXNlcnMvWUYvd2ViL3VuaWFwcC9wYWdlcy9leHRVSS9jYWxlbmRhci9jYWxlbmRhci5udnVlPzZhYTYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ZRi93ZWIvdW5pYXBwL3BhZ2VzLmpzb24/Y2Y2YSIsIndlYnBhY2s6Ly8vL1VzZXJzL1lGL3dlYi91bmlhcHAvbWFpbi5qcz83MWFkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL2xpYi9mb3JtYXQtbG9nLmpzPzBkZTkiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ZRi93ZWIvdW5pYXBwL0FwcC52dWU/YWFhOCIsIndlYnBhY2s6Ly8vL1VzZXJzL1lGL3dlYi91bmlhcHAvQXBwLnZ1ZT82ZTFmIl0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJDYWxlbmRhciIsImRhdGUiLCJzZWxlY3RlZCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJyYW5nZSIsImdldERhdGUiLCJtdWx0aXBsZVN0YXR1cyIsImJlZm9yZSIsImFmdGVyIiwid2Vla3MiLCJfZ2V0V2VlayIsImZ1bGxEYXRlIiwiQWRkRGF5Q291bnQiLCJkZCIsInNldERhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwic2V0RnVsbFllYXIiLCJnZXRGdWxsWWVhciIsInkiLCJtIiwiZCIsInllYXIiLCJtb250aCIsImRheSIsImdldERheSIsImZpcnN0RGF5IiwiZnVsbCIsImRhdGVBcnIiLCJiZWZvcmVEYXRlIiwibHVuYXIiLCJnZXRsdW5hciIsImRpc2FibGUiLCJkYXRlRGF0YSIsImlzaW5mbyIsIm5vd0RhdGUiLCJpc0RheSIsImZpbmQiLCJpdGVtIiwiZGF0ZUVxdWFsIiwiZGlzYWJsZUJlZm9yZSIsImRpc2FibGVBZnRlciIsImRhdGVDb21wQmVmb3JlIiwiZGF0ZUNvbXBhcmUiLCJkYXRlQ29tcEFmdGVyIiwibXVsdGlwbGVzIiwiY2hlY2tlZCIsIm11bHRpcGxlc1N0YXR1cyIsImZpbmRJbmRleCIsIm11bHRpcGxlIiwiZXh0cmFJbmZvIiwic3VycGx1cyIsIk51bWJlciIsImRhdGVJbmZvIiwiY2FubGVuZGVyIiwiYmVnaW4iLCJlbmQiLCJhYiIsInNwbGl0IiwiYWUiLCJkYiIsImRlIiwidW5peERiIiwidW5peERlIiwiayIsIkNBTEVOREFSIiwic29sYXIybHVuYXIiLCJnZURhdGVBbGwiLCJjdXJyZW50RGF5IiwiZGF0ZXMiLCJsYXN0TW9udGhEYXlzIiwiX2dldExhc3RNb250aERheXMiLCJjdXJyZW50TW9udGhEeXMiLCJfY3VycmVudE1vbnRoRHlzIiwibmV4dE1vbnRoRGF5cyIsIl9nZXROZXh0TW9udGhEYXlzIiwiY29uY2F0IiwiQXJyYXkiLCJjYWxlbmRhciIsImx1bmFySW5mbyIsInNvbGFyTW9udGgiLCJHYW4iLCJaaGkiLCJBbmltYWxzIiwic29sYXJUZXJtIiwic1Rlcm1JbmZvIiwiblN0cjEiLCJuU3RyMiIsIm5TdHIzIiwibFllYXJEYXlzIiwic3VtIiwibGVhcERheXMiLCJsZWFwTW9udGgiLCJtb250aERheXMiLCJzb2xhckRheXMiLCJtcyIsInRvR2FuWmhpWWVhciIsImxZZWFyIiwiZ2FuS2V5IiwiemhpS2V5IiwidG9Bc3RybyIsImNNb250aCIsImNEYXkiLCJzIiwidG9HYW5aaGkiLCJvZmZzZXQiLCJnZXRUZXJtIiwibiIsIl90YWJsZSIsIl9pbmZvIiwiX2NhbGRheSIsInRvQ2hpbmFNb250aCIsInRvQ2hpbmFEYXkiLCJnZXRBbmltYWwiLCJvYmpEYXRlIiwibGVhcCIsInRlbXAiLCJVVEMiLCJpc1RvZGF5T2JqIiwiaXNUb2RheSIsIm5XZWVrIiwiY1dlZWsiLCJpc0xlYXAiLCJzbSIsImd6WSIsImZpcnN0Tm9kZSIsInNlY29uZE5vZGUiLCJnek0iLCJpc1Rlcm0iLCJUZXJtIiwiZGF5Q3ljbGljYWwiLCJnekQiLCJhc3RybyIsImx1bmFyMnNvbGFyIiwiaXNMZWFwTW9udGgiLCJsZWFwT2Zmc2V0IiwibGVhcERheSIsIl9kYXkiLCJpc0FkZCIsInN0bWFwIiwiY2FsT2JqIiwiY1kiLCJnZXRVVENGdWxsWWVhciIsImNNIiwiZ2V0VVRDTW9udGgiLCJjRCIsImdldFVUQ0RhdGUiLCJ0eXBvZiIsInByb3RvdHlwZSIsInN1YnN0cmluZyIsImlzRGVidWdNb2RlIiwiX19jaGFubmVsSWRfXyIsImxvZyIsIl9sZW4iLCJhcmd1bWVudHMiLCJfa2V5IiwiYXBwbHkiLCJmb3JtYXRMb2ciLCJzaGlmdCIsInBvcCIsIm1zZ3MiLCJtYXAiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsInZUeXBlIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwiam9pbiIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBLDZEOztBQUVBLElBQU1BLFlBQVksR0FBR0MsZ0JBQXJCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLG1DQUFq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QUFDQSxFQUFFLDRHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3JDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLHFEQUFxRDtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUFBO0FBQUE7QUFBQTtBQUE4aUIsQ0FBZ0IsaWtCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMENsa0I7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxhQUZBLHNCQUVBO0FBQ0E7QUFDQSxPQUpBLEVBREE7O0FBT0E7QUFDQSxrQkFEQTtBQUVBO0FBQ0E7QUFDQSxPQUpBLEVBUEE7O0FBYUE7QUFDQSxpQkFEQTtBQUVBO0FBQ0E7QUFDQSxPQUpBLEVBYkE7O0FBbUJBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQW5CQSxFQURBOzs7QUF5QkE7QUFDQSxjQURBLHNCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQSxFQXpCQSxFOzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQUE7QUFBNDhCLENBQWdCLHU3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQWgrQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUFBO0FBQXU4QixDQUFnQixrN0JBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0EzOUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ25KQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QU9BLENBQVA7QUFDRCxHQTFCVSxDQUFYO0FBMkJBLE1BQUlnVCxHQUFHLEdBQUcsRUFBVjs7QUFFQSxNQUFJUCxJQUFJLENBQUN2WSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsUUFBSStZLE9BQU8sR0FBR1IsSUFBSSxDQUFDRCxHQUFMLEVBQWQ7QUFDQVEsT0FBRyxHQUFHUCxJQUFJLENBQUNTLElBQUwsQ0FBVSxhQUFWLENBQU47O0FBRUEsUUFBSUQsT0FBTyxDQUFDRSxPQUFSLENBQWdCLE1BQWhCLE1BQTRCLENBQWhDLEVBQW1DO0FBQ2pDSCxTQUFHLElBQUlDLE9BQVA7QUFDRCxLQUZELE1BRU87QUFDTEQsU0FBRyxJQUFJLGdCQUFnQkMsT0FBdkI7QUFDRDtBQUNGLEdBVEQsTUFTTztBQUNMRCxPQUFHLEdBQUdQLElBQUksQ0FBQyxDQUFELENBQVY7QUFDRDs7QUFFRG5VLFNBQU8sQ0FBQ3hCLElBQUQsQ0FBUCxDQUFja1csR0FBZDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3RFRDtBQUFBO0FBQUE7QUFBQTtBQUF1NEIsQ0FBZ0IsZzVCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBMzVCLG1CIiwiZmlsZSI6InBhZ2VzL2V4dFVJL2NhbGVuZGFyL2NhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM3OSk7XG4iLCJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcbmNvbnN0IFNUQVRfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdCc7XG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XG5jb25zdCBBUFBfUFZFUl9USU1FID0gMzAwO1xuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcblxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xuXG5mdW5jdGlvbiBnZXRVdWlkKCkge1xuICBsZXQgdXVpZCA9ICcnO1xuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xuICAgIHRyeSB7XG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdXVpZCA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZFxuICB9XG5cbiAgdHJ5IHtcbiAgICB1dWlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFVVSURfS0VZKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xuICB9XG5cbiAgaWYgKCF1dWlkKSB7XG4gICAgdXVpZCA9IERhdGUubm93KCkgKyAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNyk7XG4gICAgdHJ5IHtcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcbiAgbGV0IHNvcnRBcnIgPSBhcnIuc29ydCgpO1xuICBsZXQgc2dpbiA9IHt9O1xuICBsZXQgc2dpblN0ciA9ICcnO1xuICBmb3IgKHZhciBpIGluIHNvcnRBcnIpIHtcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XG4gIH1cbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XG4gIC8vIGNvbnN0IHNpID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShzZ2luU3RyKS5kaWdlc3QoJ2hleCcpO1xuICByZXR1cm4ge1xuICAgIHNpZ246ICcnLFxuICAgIG9wdGlvbnM6IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcbiAgfTtcbn07XG5cbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcbiAgbGV0IHN0ciA9ICcnO1xuICBmb3IgKHZhciBpIGluIGRhdGEpIHtcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XG4gIH1cbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIDEpXG59O1xuXG5jb25zdCBnZXRUaW1lID0gKCkgPT4ge1xuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcbn07XG5cbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xuICAgICdhcHAtcGx1cyc6ICduJyxcbiAgICAnaDUnOiAnaDUnLFxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxuICAgICdtcC1hbGlwYXknOiAnYWxpJyxcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcbiAgICAnbXAtcXEnOiAncXEnXG4gIH07XG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XG59O1xuXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcbiAgbGV0IHBhY2tOYW1lID0gJyc7XG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xuICAgIGlmKHVuaS5jYW5JVXNlKCdnZXRBY2NvdW50SW5mb1N5bmMnKSl7XG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhY2tOYW1lXG59O1xuXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XG59O1xuXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcbiAgbGV0IGNoYW5uZWwgPSAnJztcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XG4gICAgY2hhbm5lbCA9IHBsdXMucnVudGltZS5jaGFubmVsO1xuICB9XG4gIHJldHVybiBjaGFubmVsO1xufTtcblxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcbiAgbGV0IHNjZW5lID0gJyc7XG4gIGlmIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xuICAgIHNjZW5lID0gdW5pLmdldExhdW5jaE9wdGlvbnNTeW5jKCkuc2NlbmU7XG4gIH1cbiAgcmV0dXJuIHNjZW5lO1xufTtcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcblxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xuICBsZXQgdGltZSA9IDA7XG4gIGlmICh0aW1lU3RvcmdlKSB7XG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XG4gIH0gZWxzZSB7XG4gICAgdGltZSA9IGdldFRpbWUoKTtcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xuICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcbiAgfVxuICByZXR1cm4gdGltZTtcbn07XG5cbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XG4gIGxldCB0aW1lID0gMDtcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcbiAgfSBlbHNlIHtcbiAgICB0aW1lID0gJyc7XG4gIH1cbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XG4gIHJldHVybiB0aW1lO1xufTtcblxuXG5jb25zdCBQQUdFX1JFU0lERU5DRV9USU1FID0gJ19fcGFnZV9fcmVzaWRlbmNlX190aW1lJztcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xuXG5cbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xuICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xuICB9XG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXG59O1xuXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XG4gIH1cbiAgcmV0dXJuIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSAtIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcbn07XG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xuY29uc3QgZ2V0VG90YWxWaXNpdENvdW50ID0gKCkgPT4ge1xuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xuICBsZXQgY291bnQgPSAxO1xuICBpZiAodGltZVN0b3JnZSkge1xuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcbiAgICBjb3VudCsrO1xuICB9XG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XG4gIHJldHVybiBjb3VudDtcbn07XG5cbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcbiAgbGV0IGRhdGEgPSB7fTtcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xuICB9XG4gIHJldHVybiBkYXRhO1xufTtcblxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XG5cbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgU2V0X19GaXJzdF9fVGltZSA9IHRpbWU7XG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XG4gIHJldHVybiB0aW1lO1xufTtcblxuXG5jb25zdCBnZXRMYXN0VGltZSA9ICgpID0+IHtcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcbiAgcmV0dXJuIHRpbWU7XG59O1xuXG5cbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XG4gIGlmIChTZXRfX0ZpcnN0X19UaW1lICE9PSAwKSB7XG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XG4gIH1cblxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcbiAgaWYgKHR5cGUgPT09ICdhcHAnKSB7XG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc2lkZW5jZVRpbWUsXG4gICAgICBvdmVydGltZVxuICAgIH07XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzaWRlbmNlVGltZSxcbiAgICAgIG92ZXJ0aW1lXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVzaWRlbmNlVGltZVxuICB9O1xuXG59O1xuXG5jb25zdCBnZXRSb3V0ZSA9ICgpID0+IHtcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xuXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0UGFnZVJvdXRlID0gKHNlbGYpID0+IHtcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xuICAvLyBjbGVhclxuICBzZWxmLl9xdWVyeSA9ICcnO1xuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzICsgc3RyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XG4gIH1cbn07XG5cbmNvbnN0IGdldFBhZ2VUeXBlcyA9IChzZWxmKSA9PiB7XG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXG4gIGlmKCFldmVudE5hbWUpe1xuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmxlbmd0aCA+IDI1NSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcbiAgICBjb25zb2xlLmVycm9yKCd1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOS4uiB0aXRsZSDml7bvvIxbb3B0aW9uc10g5Y+C5pWw5Y+q6IO95Li6IFN0cmluZyDnsbvlnosnKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59O1xuXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xuY29uc3Qgc3RhdENvbmZpZyA9IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpLmRlZmF1bHQgfHwgcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJyk7XG5cbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblxuY2xhc3MgVXRpbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VsZiA9ICcnO1xuICAgIHRoaXMuX3JldHJ5ID0gMDtcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xuICAgIHRoaXMuX3F1ZXJ5ID0ge307XG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xuICAgICAgY29uZmlnOiAnJyxcbiAgICAgIHBhZ2U6ICcnLFxuICAgICAgcmVwb3J0OiAnJyxcbiAgICAgIGx0OiAnJ1xuICAgIH07XG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XG4gICAgICAnMSc6IFtdLFxuICAgICAgJzExJzogW11cbiAgICB9O1xuICAgIHRoaXMuX19wcmV2ZW50X3RyaWdnZXJpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xuICAgIHRoaXMuc3RhdERhdGEgPSB7XG4gICAgICB1dWlkOiBnZXRVdWlkKCksXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXG4gICAgICBhazogc3RhdENvbmZpZy5hcHBpZCxcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxuICAgICAgY2g6IGdldENoYW5uZWwoKSxcbiAgICAgIGNuOiAnJyxcbiAgICAgIHBuOiAnJyxcbiAgICAgIGN0OiAnJyxcbiAgICAgIHQ6IGdldFRpbWUoKSxcbiAgICAgIHR0OiAnJyxcbiAgICAgIHA6IHJlc3VsdE9wdGlvbnMucGxhdGZvcm0gPT09ICdhbmRyb2lkJyA/ICdhJyA6ICdpJyxcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXG4gICAgICBzdjogcmVzdWx0T3B0aW9ucy5zeXN0ZW0ucmVwbGFjZSgvKEFuZHJvaWR8aU9TKVxccy8sICcnKSxcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcbiAgICAgIGxhbmc6IHJlc3VsdE9wdGlvbnMubGFuZ3VhZ2UsXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXG4gICAgICB3aDogcmVzdWx0T3B0aW9ucy53aW5kb3dIZWlnaHQsXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxuICAgIH07XG5cbiAgfVxuXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcbiAgICAgIGdldExhc3RUaW1lKCk7XG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xuXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IHRydWU7XG4gICAgZ2V0TGFzdFRpbWUoKTtcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xuICAgIGdldEZpcnN0VGltZSgpO1xuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XG4gICAgICB1cmxyZWY6IHJvdXRlLFxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcbiAgICB9LCB0eXBlKTtcbiAgfVxuXG4gIF9wYWdlU2hvdygpIHtcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxuICAgICAgUGFnZXNKc29uICYmXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcblxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XG4gICAgICBnZXRGaXJzdFRpbWUoKTtcbiAgICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2V0TGFzdFRpbWUoKTtcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcbiAgICBpZiAodGltZS5vdmVydGltZSkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXG4gICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXG4gICAgICB9O1xuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuICAgIGdldEZpcnN0VGltZSgpO1xuICB9XG5cbiAgX3BhZ2VIaWRlKCkge1xuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xuICAgICAgZ2V0TGFzdFRpbWUoKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHRoaXMuX2xhc3RQYWdlUm91dGUsXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xuICAgICAgICBjb25maWc6ICcnLFxuICAgICAgICBwYWdlOiAnJyxcbiAgICAgICAgcmVwb3J0OiAnJyxcbiAgICAgICAgbHQ6ICcnXG4gICAgICB9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIF9sb2dpbigpIHtcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcbiAgICAgIGtleTogJ2xvZ2luJ1xuICAgIH0sIDApO1xuICB9XG5cbiAgX3NoYXJlKCkge1xuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xuICAgICAga2V5OiAnc2hhcmUnXG4gICAgfSwgMCk7XG4gIH1cbiAgX3BheW1lbnQoa2V5KSB7XG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XG4gICAgICBrZXlcbiAgICB9LCAwKTtcbiAgfVxuICBfc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucykge1xuXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xuICAgIGxldCBxdWVyeSA9IG9wdGlvbnMucXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSA6ICcnO1xuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xuICAgIHRoaXMuc3RhdERhdGEudCA9IGdldFRpbWUoKTtcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcbiAgICB0aGlzLnN0YXREYXRhLmx2dHMgPSBnZXRMYXN0VmlzaXRUaW1lKCk7XG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xuICAgICAgdGhpcy5nZXRQcm9wZXJ0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XG4gICAgfVxuICB9XG5cbiAgX3NlbmRQYWdlUmVxdWVzdChvcHQpIHtcbiAgICBsZXQge1xuICAgICAgdXJsLFxuICAgICAgdXJscmVmLFxuICAgICAgdXJscmVmX3RzXG4gICAgfSA9IG9wdDtcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMTEnO1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXG4gICAgICBsdDogJzExJyxcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxuICAgICAgdXJsLFxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXG4gICAgICB1cmxyZWYsXG4gICAgICB1cmxyZWZfdHMsXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXG4gICAgICB0OiBnZXRUaW1lKCksXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcbiAgICB9O1xuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgfVxuXG4gIF9zZW5kSGlkZVJlcXVlc3Qob3B0LCB0eXBlKSB7XG4gICAgbGV0IHtcbiAgICAgIHVybHJlZixcbiAgICAgIHVybHJlZl90c1xuICAgIH0gPSBvcHQ7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcbiAgICAgIGx0OiAnMycsXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcbiAgICAgIHVybHJlZixcbiAgICAgIHVybHJlZl90cyxcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcbiAgICAgIHQ6IGdldFRpbWUoKSxcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxuICAgIH07XG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xuICB9XG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcbiAgICBrZXkgPSAnJyxcbiAgICB2YWx1ZSA9IFwiXCJcbiAgfSA9IHt9KSB7XG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXG4gICAgICBsdDogJzIxJyxcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxuICAgICAgdXJsOiByb3V0ZSxcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxuICAgICAgZV9uOiBrZXksXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXG4gICAgICB0OiBnZXRUaW1lKCksXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcbiAgICB9O1xuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgfVxuXG4gIGdldE5ldHdvcmtJbmZvKCkge1xuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xuICAgICAgdGhpcy5zdGF0RGF0YS52ID0gd2d0aW5mby52ZXJzaW9uIHx8ICcnO1xuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TG9jYXRpb24oKSB7XG4gICAgaWYgKHN0YXRDb25maWcuZ2V0TG9jYXRpb24pIHtcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXG4gICAgICAgIGdlb2NvZGU6IHRydWUsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY24gPSByZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSByZXN1bHQubG9uZ2l0dWRlO1xuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcbiAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gMDtcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcbiAgICBsZXQgdGltZSA9IGdldFRpbWUoKTtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XG4gICAgZGF0YS50dHBqID0gdGl0bGUuY29uZmlnO1xuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xuXG4gICAgbGV0IHJlcXVlc3REYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xuICAgIH1cbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xuICAgIH1cbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xuXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XG4gICAgfVxuICAgIGlmIChnZXRQYWdlUmVzaWRlbmNlVGltZSgpIDwgT1BFUkFUSU5HX1RJTUUgJiYgIXR5cGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgdW5pU3RhdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XG4gICAgfVxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XG4gICAgbGV0IGZpcnN0QXJyID0gW107XG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcbiAgICAgIHJkLmZvckVhY2goKGVsbSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICBmaXJzdEFyci5wdXNoKG5ld0RhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmaXJzdEFyci5wdXNoKC4uLmNvbnRlbnRBcnIsIC4uLmxhc3RBcnIpO1xuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XG4gICAgICB0OiB0aW1lLCAvL+WPkemAgeivt+axguaXtueahOaXtumXtOaIrlxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcbiAgICB9O1xuXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xuICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnV0ID09PSAnaDUnKSB7XG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xuICB9XG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xuICAgIHVuaS5yZXF1ZXN0KHtcbiAgICAgIHVybDogU1RBVF9VUkwsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIC8vIGhlYWRlcjoge1xuICAgICAgLy8gICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxuICAgICAgLy8gfSxcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcbiAgICAgICAgLy8gfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IChlKSA9PiB7XG4gICAgICAgIGlmICgrK3RoaXMuX3JldHJ5IDwgMykge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIGg1IOivt+axglxuICAgKi9cbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XG4gIH1cblxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xuICAgIC8vIOagoemqjCB0eXBlIOWPguaVsFxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXG5cbiAgICBpZiAoa2V5ID09PSAndGl0bGUnKSB7XG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XG4gICAgICBrZXksXG4gICAgICB2YWx1ZTogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxuICAgIH0sIDEpO1xuICB9XG59XG5cblxuY2xhc3MgU3RhdCBleHRlbmRzIFV0aWwge1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0YXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAvLyDms6jlhozmi6bmiKrlmahcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdGhpcy5hZGRJbnRlcmNlcHRvckluaXQoKTtcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XG4gICAgICB0aGlzLmludGVyY2VwdFJlcXVlc3RQYXltZW50KCk7XG4gICAgfVxuICB9XG5cbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NldE5hdmlnYXRpb25CYXJUaXRsZScsIHtcbiAgICAgIGludm9rZShhcmdzKSB7XG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGludGVyY2VwdExvZ2luKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ2xvZ2luJywge1xuICAgICAgY29tcGxldGUoKSB7XG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghdHlwZSkge1xuICAgICAgc2VsZi5fc2hhcmUoKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xuICAgICAgc3VjY2VzcygpIHtcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcbiAgICAgIH0sXG4gICAgICBmYWlsKCkge1xuICAgICAgICBzZWxmLl9zaGFyZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XG4gICAgICBzdWNjZXNzKCkge1xuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGZhaWwoKSB7XG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9mYWlsJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xuICAgIHRoaXMuc2VsZiA9IHNlbGY7XG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcbiAgICAvLyB9XG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcbiAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zLCB0cnVlKTtcbiAgfVxuXG4gIGxvYWQob3B0aW9ucywgc2VsZikge1xuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICBzZWxmLiRzY29wZSA9IHBhZ2VbcGFnZS5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgdGhpcy5zZWxmID0gc2VsZjtcbiAgICB0aGlzLl9xdWVyeSA9IG9wdGlvbnM7XG4gIH1cblxuICBzaG93KHNlbGYpIHtcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcbiAgICAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XG4gICAgfVxuICB9XG5cbiAgcmVhZHkoc2VsZikge1xuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xuICAgIC8vICAgdGhpcy5fcGFnZVNob3coc2VsZik7XG4gICAgLy8gfVxuICB9XG4gIGhpZGUoc2VsZikge1xuICAgIHRoaXMuc2VsZiA9IHNlbGY7XG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xuICAgICAgdGhpcy5fcGFnZUhpZGUoc2VsZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgZXJyb3IoZW0pIHtcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0gPT09ICdkZXZ0b29scycpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZW1WYWwgPSAnJztcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxuICAgICAgbHQ6ICczMScsXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxuICAgICAgbXBzZGs6IHRoaXMuc3RhdERhdGEubXBzZGssXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxuICAgICAgZW06IGVtVmFsLFxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcbiAgICAgIHQ6IGdldFRpbWUoKSxcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxuICAgIH07XG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IHN0YXQgPSBTdGF0LmdldEluc3RhbmNlKCk7XG5sZXQgaXNIaWRlID0gZmFsc2U7XG5jb25zdCBsaWZlY3ljbGUgPSB7XG4gIG9uTGF1bmNoKG9wdGlvbnMpIHtcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcbiAgfSxcbiAgb25SZWFkeSgpIHtcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xuICB9LFxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UpIHtcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBzdGF0LmludGVyY2VwdFNoYXJlKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgb25TaG93KCkge1xuICAgIGlzSGlkZSA9IGZhbHNlO1xuICAgIHN0YXQuc2hvdyh0aGlzKTtcbiAgfSxcbiAgb25IaWRlKCkge1xuICAgIGlzSGlkZSA9IHRydWU7XG4gICAgc3RhdC5oaWRlKHRoaXMpO1xuICB9LFxuICBvblVubG9hZCgpIHtcbiAgICBpZiAoaXNIaWRlKSB7XG4gICAgICBpc0hpZGUgPSBmYWxzZTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzdGF0LmhpZGUodGhpcyk7XG4gIH0sXG4gIG9uRXJyb3IoZSkge1xuICAgIHN0YXQuZXJyb3IoZSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7fTtcbiAgfWVsc2V7XG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XG4gICAgKFZ1ZS5kZWZhdWx0IHx8IFZ1ZSkubWl4aW4obGlmZWN5Y2xlKTtcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgfVxufVxuXG5tYWluKCk7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1jYWxlbmRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDliYjFjY2Mmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktY2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktY2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLWNhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA5YmIxY2NjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktY2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDliYjFjY2Mmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDliYjFjY2NcIixcbiAgXCI1YWI0NGRjMFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJVc2Vycy9ZRi93ZWIvdW5pYXBwL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWNhbGVuZGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOWJiMWNjYyZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidmlld1wiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhclwiXSwgb246IHsgdG91Y2htb3ZlOiBfdm0uY2xlYW4gfSB9LFxuICAgIFtcbiAgICAgICFfdm0uaW5zZXJ0ICYmIF92bS5zaG93XG4gICAgICAgID8gX2MoXCJ2aWV3XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX21hc2tcIl0sXG4gICAgICAgICAgICBjbGFzczogeyBcInVuaS1jYWxlbmRhci0tbWFzay1zaG93XCI6IF92bS5hbmlNYXNrU2hvdyB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbGVhbiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5pbnNlcnQgfHwgX3ZtLnNob3dcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX19jb250ZW50XCJdLFxuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLS1maXhlZFwiOiAhX3ZtLmluc2VydCxcbiAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci0tYW5pLXNob3dcIjogX3ZtLmFuaU1hc2tTaG93XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uaW5zZXJ0XG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXJfX2hlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItLWZpeGVkLXRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9faGVhZGVyLWJ0bi1ib3hcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhcl9faGVhZGVyLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItLWZpeGVkLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlj5bmtohcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG4tYm94XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNvbmZpcm0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhcl9faGVhZGVyLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItLWZpeGVkLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnoa7lrppcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX19oZWFkZXJcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG4tYm94XCJdLFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnByZSB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhcl9faGVhZGVyLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItLWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9faGVhZGVyLXRleHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgKF92bS5ub3dEYXRlLnllYXIgfHwgXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCLlubRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLm5vd0RhdGUubW9udGggfHwgXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCLmnIhcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9faGVhZGVyLWJ0bi1ib3hcIl0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubmV4dCB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhcl9faGVhZGVyLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX2JhY2t0b2RheVwiXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5iYWNrdG9kYXkgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlm57liLDku4rlpKlcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX19ib3hcIl0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uc2hvd01vbnRoXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fYm94LWJnXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX2JveC1iZy10ZXh0XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5ub3dEYXRlLm1vbnRoKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ud2Vla3MsIGZ1bmN0aW9uKGl0ZW0sIHdlZWtJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHdlZWtJbmRleCwgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3NcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbSwgZnVuY3Rpb24od2Vla3MsIHdlZWtzSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHdlZWtzSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3MtaXRlbVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bmktY2FsZW5kYXItaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWVrczogd2Vla3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyOiBfdm0uY2FsZW5kYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGx1bmFyOiBfdm0ubHVuYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5jaG9pY2VEYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX193ZWVrc1wiXSB9LCBbXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX193ZWVrcy1kYXlcIl0gfSwgW1xuICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCJdIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLml6VcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5XCJdIH0sIFtcbiAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX193ZWVrcy1kYXktdGV4dFwiXSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5LiAXCIpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheVwiXSB9LCBbXG4gICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5LXRleHRcIl0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIuS6jFwiKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX193ZWVrcy1kYXlcIl0gfSwgW1xuICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCJdIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLkuIlcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5XCJdIH0sIFtcbiAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX193ZWVrcy1kYXktdGV4dFwiXSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5ZubXCIpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheVwiXSB9LCBbXG4gICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5LXRleHRcIl0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIuS6lFwiKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyX193ZWVrcy1kYXlcIl0gfSwgW1xuICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCJdIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLlha1cIilcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWNhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1jYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwidW5pLWNhbGVuZGFyXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJjbGVhblwiPlxuXHRcdDx2aWV3IHYtaWY9XCIhaW5zZXJ0JiZzaG93XCIgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX21hc2tcIiA6Y2xhc3M9XCJ7J3VuaS1jYWxlbmRhci0tbWFzay1zaG93JzphbmlNYXNrU2hvd31cIiBAY2xpY2s9XCJjbGVhblwiPjwvdmlldz5cblx0XHQ8dmlldyB2LWlmPVwiaW5zZXJ0IHx8IHNob3dcIiBjbGFzcz1cInVuaS1jYWxlbmRhcl9fY29udGVudFwiIDpjbGFzcz1cInsndW5pLWNhbGVuZGFyLS1maXhlZCc6IWluc2VydCwndW5pLWNhbGVuZGFyLS1hbmktc2hvdyc6YW5pTWFza1Nob3d9XCI+XG5cdFx0XHQ8dmlldyB2LWlmPVwiIWluc2VydFwiIGNsYXNzPVwidW5pLWNhbGVuZGFyX19oZWFkZXIgdW5pLWNhbGVuZGFyLS1maXhlZC10b3BcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG4tYm94XCIgQGNsaWNrPVwiY2xvc2VcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1jYWxlbmRhcl9faGVhZGVyLXRleHQgdW5pLWNhbGVuZGFyLS1maXhlZC13aWR0aFwiPuWPlua2iDwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9faGVhZGVyLWJ0bi1ib3hcIiBAY2xpY2s9XCJjb25maXJtXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX2hlYWRlci10ZXh0IHVuaS1jYWxlbmRhci0tZml4ZWQtd2lkdGhcIj7noa7lrpo8L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWNhbGVuZGFyX19oZWFkZXJcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG4tYm94XCIgQGNsaWNrPVwicHJlXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG4gdW5pLWNhbGVuZGFyLS1sZWZ0XCI+PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWNhbGVuZGFyX19oZWFkZXItdGV4dFwiPnt7IChub3dEYXRlLnllYXJ8fCcnKSArJ+W5tCcrKCBub3dEYXRlLm1vbnRofHwnJykgKyfmnIgnfX08L3RleHQ+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWNhbGVuZGFyX19oZWFkZXItYnRuLWJveFwiIEBjbGljaz1cIm5leHRcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9faGVhZGVyLWJ0biB1bmktY2FsZW5kYXItLXJpZ2h0XCI+PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWNhbGVuZGFyX19iYWNrdG9kYXlcIiBAY2xpY2s9XCJiYWNrdG9kYXlcIj7lm57liLDku4rlpKk8L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9fYm94XCI+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJzaG93TW9udGhcIiBjbGFzcz1cInVuaS1jYWxlbmRhcl9fYm94LWJnXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX2JveC1iZy10ZXh0XCI+e3tub3dEYXRlLm1vbnRofX08L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheVwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCI+5pelPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5LXRleHRcIj7kuIA8L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWNhbGVuZGFyX193ZWVrcy1kYXlcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWNhbGVuZGFyX193ZWVrcy1kYXktdGV4dFwiPuS6jDwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheVwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCI+5LiJPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3MtZGF5LXRleHRcIj7lm5s8L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWNhbGVuZGFyX193ZWVrcy1kYXlcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWNhbGVuZGFyX193ZWVrcy1kYXktdGV4dFwiPuS6lDwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheVwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCI+5YWtPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhcl9fd2Vla3NcIiB2LWZvcj1cIihpdGVtLHdlZWtJbmRleCkgaW4gd2Vla3NcIiA6a2V5PVwid2Vla0luZGV4XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktY2FsZW5kYXJfX3dlZWtzLWl0ZW1cIiB2LWZvcj1cIih3ZWVrcyx3ZWVrc0luZGV4KSBpbiBpdGVtXCIgOmtleT1cIndlZWtzSW5kZXhcIj5cblx0XHRcdFx0XHRcdDx1bmktY2FsZW5kYXItaXRlbSA6d2Vla3M9XCJ3ZWVrc1wiIDpjYWxlbmRhcj1cImNhbGVuZGFyXCIgOnNlbGVjdGVkPVwic2VsZWN0ZWRcIiA6bHVuYXI9XCJsdW5hclwiIEBjaGFuZ2U9XCJjaG9pY2VEYXRlXCI+PC91bmktY2FsZW5kYXItaXRlbT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBDYWxlbmRhciBmcm9tICcuL3V0aWwuanMnO1xuXHRpbXBvcnQgdW5pQ2FsZW5kYXJJdGVtIGZyb20gJy4vdW5pLWNhbGVuZGFyLWl0ZW0udnVlJ1xuXHQvKipcblx0ICogQ2FsZW5kYXIg5pel5Y6GXG5cdCAqIEBkZXNjcmlwdGlvbiDml6Xljobnu4Tku7blj6/ku6Xmn6XnnIvml6XmnJ/vvIzpgInmi6nku7vmhI/ojIPlm7TlhoXnmoTml6XmnJ/vvIzmiZPngrnmk43kvZzjgILluLjnlKjlnLrmma/lpoLvvJrphZLlupfml6XmnJ/pooTorqLjgIHngavovabmnLrnpajpgInmi6notK3kubDml6XmnJ/jgIHkuIrkuIvnj63miZPljaHnrYlcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTU2XG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRlIOiHquWumuS5ieW9k+WJjeaXtumXtO+8jOm7mOiupOS4uuS7iuWkqVxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGx1bmFyIOaYvuekuuWGnOWOhlxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gc3RhcnREYXRlIOaXpeacn+mAieaLqeiMg+WbtC3lvIDlp4vml6XmnJ9cblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGVuZERhdGUg5pel5pyf6YCJ5oup6IyD5Zu0Lee7k+adn+aXpeacn1xuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IHJhbmdlIOiMg+WbtOmAieaLqVxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGluc2VydCA9IFt0cnVlfGZhbHNlXSDmj5LlhaXmqKHlvI8s6buY6K6k5Li6ZmFsc2Vcblx0ICogXHRAdmFsdWUgdHJ1ZSDlvLnnqpfmqKHlvI9cblx0ICogXHRAdmFsdWUgZmFsc2Ug5o+S5YWl5qih5byPXG5cdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IHNlbGVjdGVkIOaJk+eCue+8jOacn+W+heagvOW8j1t7ZGF0ZTogJzIwMTktMDYtMjcnLCBpbmZvOiAn562+5YiwJywgZGF0YTogeyBjdXN0b206ICfoh6rlrprkuYnkv6Hmga8nLCBuYW1lOiAn6Ieq5a6a5LmJ5raI5oGv5aS0Jyx4eHg6eHh4Li4uIH19XVxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IHNob3dNb250aCDmmK/lkKbpgInmi6nmnIjku73kuLrog4zmma9cblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2hhbmdlIOaXpeacn+aUueWPmO+8jGBpbnNlcnQgOnR1cmVgIOaXtueUn+aViFxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjb25maXJtIOehruiupOmAieaLqWBpbnNlcnQgOmZhbHNlYCDml7bnlJ/mlYhcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gbW9udGhTd2l0Y2gg5YiH5o2i5pyI5Lu95pe26Kem5Y+RXG5cdCAqIEBleGFtcGxlIDx1bmktY2FsZW5kYXIgOmluc2VydD1cInRydWVcIjpsdW5hcj1cInRydWVcIiA6c3RhcnQtZGF0ZT1cIicyMDE5LTMtMidcIjplbmQtZGF0ZT1cIicyMDE5LTUtMjAnXCJAY2hhbmdlPVwiY2hhbmdlXCIgLz5cblx0ICovXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHR1bmlDYWxlbmRhckl0ZW1cblx0XHR9LFxuXHRcdHByb3BzOiB7XG5cdFx0XHRkYXRlOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH0sXG5cdFx0XHRzZWxlY3RlZDoge1xuXHRcdFx0XHR0eXBlOiBBcnJheSxcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFtdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRsdW5hcjoge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHN0YXJ0RGF0ZToge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9LFxuXHRcdFx0ZW5kRGF0ZToge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9LFxuXHRcdFx0cmFuZ2U6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRpbnNlcnQ6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHNob3dNb250aDoge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c2hvdzogZmFsc2UsXG5cdFx0XHRcdHdlZWtzOiBbXSxcblx0XHRcdFx0Y2FsZW5kYXI6IHt9LFxuXHRcdFx0XHRub3dEYXRlOiAnJyxcblx0XHRcdFx0YW5pTWFza1Nob3c6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0c2VsZWN0ZWQobmV3VmFsKSB7XG5cdFx0XHRcdHRoaXMuY2FsZS5zZXRTZWxlY3RJbmZvKHRoaXMubm93RGF0ZS5mdWxsRGF0ZSwgbmV3VmFsKVxuXHRcdFx0XHR0aGlzLndlZWtzID0gdGhpcy5jYWxlLndlZWtzXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0Ly8g6I635Y+W5pel5Y6G5pa55rOV5a6e5L6LXG5cdFx0XHR0aGlzLmNhbGUgPSBuZXcgQ2FsZW5kYXIoe1xuXHRcdFx0XHRkYXRlOiB0aGlzLmRhdGUsXG5cdFx0XHRcdHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxuXHRcdFx0XHRzdGFydERhdGU6IHRoaXMuc3RhcnREYXRlLFxuXHRcdFx0XHRlbmREYXRlOiB0aGlzLmVuZERhdGUsXG5cdFx0XHRcdHJhbmdlOiB0aGlzLnJhbmdlLFxuXHRcdFx0fSlcblx0XHRcdHRoaXMuaW5pdCh0aGlzLmNhbGUuZGF0ZS5mdWxsRGF0ZSlcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC8vIOWPlua2iOepv+mAj1xuXHRcdFx0Y2xlYW4oKSB7fSxcblx0XHRcdGluaXQoZGF0ZSkge1xuXHRcdFx0XHR0aGlzLndlZWtzID0gdGhpcy5jYWxlLndlZWtzXG5cdFx0XHRcdHRoaXMubm93RGF0ZSA9IHRoaXMuY2FsZW5kYXIgPSB0aGlzLmNhbGUuZ2V0SW5mbyhkYXRlKVxuXHRcdFx0fSxcblx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdHRoaXMuc2hvdyA9IHRydWVcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5hbmlNYXNrU2hvdyA9IHRydWVcblx0XHRcdFx0XHR9LCA1MClcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRjbG9zZSgpIHtcblx0XHRcdFx0dGhpcy5hbmlNYXNrU2hvdyA9IGZhbHNlXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuc2hvdyA9IGZhbHNlXG5cdFx0XHRcdFx0fSwgMzAwKVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGNvbmZpcm0oKSB7XG5cdFx0XHRcdHRoaXMuc2V0RW1pdCgnY29uZmlybScpXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0fSxcblx0XHRcdGNoYW5nZSgpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmluc2VydCkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuc2V0RW1pdCgnY2hhbmdlJylcblx0XHRcdH0sXG5cdFx0XHRtb250aFN3aXRjaCgpIHtcblx0XHRcdFx0bGV0IHtcblx0XHRcdFx0XHR5ZWFyLFxuXHRcdFx0XHRcdG1vbnRoXG5cdFx0XHRcdH0gPSB0aGlzLm5vd0RhdGVcblx0XHRcdFx0dGhpcy4kZW1pdCgnbW9udGhTd2l0Y2gnLCB7XG5cdFx0XHRcdFx0eWVhcixcblx0XHRcdFx0XHRtb250aDogTnVtYmVyKG1vbnRoKVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHNldEVtaXQobmFtZSkge1xuXHRcdFx0XHRsZXQge1xuXHRcdFx0XHRcdHllYXIsXG5cdFx0XHRcdFx0bW9udGgsXG5cdFx0XHRcdFx0ZGF0ZSxcblx0XHRcdFx0XHRmdWxsRGF0ZSxcblx0XHRcdFx0XHRsdW5hcixcblx0XHRcdFx0XHRleHRyYUluZm9cblx0XHRcdFx0fSA9IHRoaXMuY2FsZW5kYXJcblx0XHRcdFx0dGhpcy4kZW1pdChuYW1lLCB7XG5cdFx0XHRcdFx0cmFuZ2U6IHRoaXMuY2FsZS5tdWx0aXBsZVN0YXR1cyxcblx0XHRcdFx0XHR5ZWFyLFxuXHRcdFx0XHRcdG1vbnRoLFxuXHRcdFx0XHRcdGRhdGUsXG5cdFx0XHRcdFx0ZnVsbGRhdGU6IGZ1bGxEYXRlLFxuXHRcdFx0XHRcdGx1bmFyLFxuXHRcdFx0XHRcdGV4dHJhSW5mbzogZXh0cmFJbmZvIHx8IHt9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Y2hvaWNlRGF0ZSh3ZWVrcykge1xuXHRcdFx0XHRpZiAod2Vla3MuZGlzYWJsZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuY2FsZW5kYXIgPSB3ZWVrc1xuXHRcdFx0XHQvLyDorr7nva7lpJrpgIlcblx0XHRcdFx0dGhpcy5jYWxlLnNldE11bHRpcGxlKHRoaXMuY2FsZW5kYXIuZnVsbERhdGUpXG5cdFx0XHRcdHRoaXMud2Vla3MgPSB0aGlzLmNhbGUud2Vla3Ncblx0XHRcdFx0dGhpcy5jaGFuZ2UoKVxuXHRcdFx0fSxcblx0XHRcdGJhY2t0b2RheSgpIHtcblx0XHRcdFx0dGhpcy5jYWxlLnNldERhdGUodGhpcy5kYXRlKVxuXHRcdFx0XHR0aGlzLndlZWtzID0gdGhpcy5jYWxlLndlZWtzXG5cdFx0XHRcdHRoaXMubm93RGF0ZSA9IHRoaXMuY2FsZW5kYXIgPSB0aGlzLmNhbGUuZ2V0SW5mbyh0aGlzLmRhdGUpXG5cdFx0XHRcdHRoaXMuY2hhbmdlKClcblx0XHRcdH0sXG5cdFx0XHRwcmUoKSB7XG5cdFx0XHRcdGNvbnN0IHByZURhdGUgPSB0aGlzLmNhbGUuZ2V0RGF0ZSh0aGlzLm5vd0RhdGUuZnVsbERhdGUsIC0xLCAnbW9udGgnKS5mdWxsRGF0ZVxuXHRcdFx0XHR0aGlzLnNldERhdGUocHJlRGF0ZSlcblx0XHRcdFx0dGhpcy5tb250aFN3aXRjaCgpXG5cblx0XHRcdH0sXG5cdFx0XHRuZXh0KCkge1xuXHRcdFx0XHRjb25zdCBuZXh0RGF0ZSA9IHRoaXMuY2FsZS5nZXREYXRlKHRoaXMubm93RGF0ZS5mdWxsRGF0ZSwgKzEsICdtb250aCcpLmZ1bGxEYXRlXG5cdFx0XHRcdHRoaXMuc2V0RGF0ZShuZXh0RGF0ZSlcblx0XHRcdFx0dGhpcy5tb250aFN3aXRjaCgpXG5cdFx0XHR9LFxuXHRcdFx0c2V0RGF0ZShkYXRlKSB7XG5cdFx0XHRcdHRoaXMuY2FsZS5zZXREYXRlKGRhdGUpXG5cdFx0XHRcdHRoaXMud2Vla3MgPSB0aGlzLmNhbGUud2Vla3Ncblx0XHRcdFx0dGhpcy5ub3dEYXRlID0gdGhpcy5jYWxlLmdldEluZm8oZGF0ZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQudW5pLWNhbGVuZGFyIHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9XG5cblx0LnVuaS1jYWxlbmRhcl9fbWFzayB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdGJvdHRvbTogMDtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdHotaW5kZXg6IDk5O1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cblx0LnVuaS1jYWxlbmRhci0tbWFzay1zaG93IHtcblx0XHRvcGFjaXR5OiAxXG5cdH1cblxuXHQudW5pLWNhbGVuZGFyLS1maXhlZCB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0NjBweCk7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdHotaW5kZXg6IDk5O1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cblx0LnVuaS1jYWxlbmRhci0tYW5pLXNob3cge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXG5cdC51bmktY2FsZW5kYXJfX2NvbnRlbnQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdH1cblxuXHQudW5pLWNhbGVuZGFyX19oZWFkZXIge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICNlNWU1ZTU7XG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuXHR9XG5cblx0LnVuaS1jYWxlbmRhci0tZml4ZWQtdG9wIHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRib3JkZXItdG9wLWNvbG9yOiAjZTVlNWU1O1xuXHRcdGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuXHRcdGJvcmRlci10b3Atd2lkdGg6IDFweDtcblx0fVxuXG5cdC51bmktY2FsZW5kYXItLWZpeGVkLXdpZHRoIHtcblx0XHR3aWR0aDogNTBweDtcblx0XHQvKiBwYWRkaW5nOiAwIDE1cHg7XG4gKi9cblx0fVxuXG5cdC51bmktY2FsZW5kYXJfX2JhY2t0b2RheSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMjVycHg7XG5cdFx0cGFkZGluZzogMCA1cHg7XG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdGhlaWdodDogMjVweDtcblx0XHRsaW5lLWhlaWdodDogMjVweDtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xuXHRcdGNvbG9yOiAjMzMzO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG5cdH1cblxuXHQudW5pLWNhbGVuZGFyX19oZWFkZXItdGV4dCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHdpZHRoOiAxMDBweDtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdGNvbG9yOiAjMzMzO1xuXHR9XG5cblx0LnVuaS1jYWxlbmRhcl9faGVhZGVyLWJ0bi1ib3gge1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR3aWR0aDogNTBweDtcblx0XHRoZWlnaHQ6IDUwcHg7XG5cdH1cblxuXHQudW5pLWNhbGVuZGFyX19oZWFkZXItYnRuIHtcblx0XHR3aWR0aDogMTBweDtcblx0XHRoZWlnaHQ6IDEwcHg7XG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICM4MDgwODA7XG5cdFx0Ym9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuXHRcdGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogIzU1NTU1NTtcblx0XHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcblx0XHRib3JkZXItdG9wLXdpZHRoOiAycHg7XG5cdH1cblxuXHQudW5pLWNhbGVuZGFyLS1sZWZ0IHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXHR9XG5cblx0LnVuaS1jYWxlbmRhci0tcmlnaHQge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG5cdH1cblxuXG5cdC51bmktY2FsZW5kYXJfX3dlZWtzIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxuXG5cdC51bmktY2FsZW5kYXJfX3dlZWtzLWl0ZW0ge1xuXHRcdGZsZXg6IDE7XG5cdH1cblxuXHQudW5pLWNhbGVuZGFyX193ZWVrcy1kYXkge1xuXHRcdGZsZXg6IDE7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGhlaWdodDogNDVweDtcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjRjVGNUY1O1xuXHRcdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcblx0fVxuXG5cdC51bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0IHtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdH1cblxuXHQudW5pLWNhbGVuZGFyX19ib3gge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0fVxuXG5cdC51bmktY2FsZW5kYXJfX2JveC1iZyB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHR9XG5cblx0LnVuaS1jYWxlbmRhcl9fYm94LWJnLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMjAwcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0Y29sb3I6ICM5OTk7XG5cdFx0b3BhY2l0eTogMC4xO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0LyogI2VuZGlmICovXG5cdH1cbjwvc3R5bGU+IiwiaW1wb3J0IENBTEVOREFSIGZyb20gJy4vY2FsZW5kYXIuanMnXG5cbmNsYXNzIENhbGVuZGFyIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdGRhdGUsXG5cdFx0c2VsZWN0ZWQsXG5cdFx0c3RhcnREYXRlLFxuXHRcdGVuZERhdGUsXG5cdFx0cmFuZ2Vcblx0fSA9IHt9KSB7XG5cdFx0Ly8g5b2T5YmN5pel5pyfXG5cdFx0dGhpcy5kYXRlID0gdGhpcy5nZXREYXRlKGRhdGUpIC8vIOW9k+WJjeWIneWFpeaXpeacn1xuXHRcdC8vIOaJk+eCueS/oeaBr1xuXHRcdHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZCB8fCBbXTtcblx0XHQvLyDojIPlm7TlvIDlp4tcblx0XHR0aGlzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZVxuXHRcdC8vIOiMg+WbtOe7k+adn1xuXHRcdHRoaXMuZW5kRGF0ZSA9IGVuZERhdGVcblx0XHR0aGlzLnJhbmdlID0gcmFuZ2Vcblx0XHQvLyDlpJrpgInnirbmgIFcblx0XHR0aGlzLm11bHRpcGxlU3RhdHVzID0ge1xuXHRcdFx0YmVmb3JlOiAnJyxcblx0XHRcdGFmdGVyOiAnJyxcblx0XHRcdGRhdGE6IFtdXG5cdFx0fVxuXHRcdC8vIOavj+WRqOaXpeacn1xuXHRcdHRoaXMud2Vla3MgPSB7fVxuXG5cdFx0dGhpcy5fZ2V0V2Vlayh0aGlzLmRhdGUuZnVsbERhdGUpXG5cdH1cblxuXHQvKipcblx0ICog6I635Y+W5Lu75oSP5pe26Ze0XG5cdCAqL1xuXHRnZXREYXRlKGRhdGUsIEFkZERheUNvdW50ID0gMCwgc3RyID0gJ2RheScpIHtcblx0XHRpZiAoIWRhdGUpIHtcblx0XHRcdGRhdGUgPSBuZXcgRGF0ZSgpXG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZGF0ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdGRhdGUgPSBkYXRlLnJlcGxhY2UoLy0vZywgJy8nKVxuXHRcdH1cblx0XHRjb25zdCBkZCA9IG5ldyBEYXRlKGRhdGUpXG5cdFx0c3dpdGNoIChzdHIpIHtcblx0XHRcdGNhc2UgJ2RheSc6XG5cdFx0XHRcdGRkLnNldERhdGUoZGQuZ2V0RGF0ZSgpICsgQWRkRGF5Q291bnQpIC8vIOiOt+WPlkFkZERheUNvdW505aSp5ZCO55qE5pel5pyfXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdtb250aCc6XG5cdFx0XHRcdGlmIChkZC5nZXREYXRlKCkgPT09IDMxKSB7XG5cdFx0XHRcdFx0ZGQuc2V0RGF0ZShkZC5nZXREYXRlKCkgKyBBZGREYXlDb3VudClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkZC5zZXRNb250aChkZC5nZXRNb250aCgpICsgQWRkRGF5Q291bnQpIC8vIOiOt+WPlkFkZERheUNvdW505aSp5ZCO55qE5pel5pyfXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3llYXInOlxuXHRcdFx0XHRkZC5zZXRGdWxsWWVhcihkZC5nZXRGdWxsWWVhcigpICsgQWRkRGF5Q291bnQpIC8vIOiOt+WPlkFkZERheUNvdW505aSp5ZCO55qE5pel5pyfXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXHRcdGNvbnN0IHkgPSBkZC5nZXRGdWxsWWVhcigpXG5cdFx0Y29uc3QgbSA9IGRkLmdldE1vbnRoKCkgKyAxIDwgMTAgPyAnMCcgKyAoZGQuZ2V0TW9udGgoKSArIDEpIDogZGQuZ2V0TW9udGgoKSArIDEgLy8g6I635Y+W5b2T5YmN5pyI5Lu955qE5pel5pyf77yM5LiN6LazMTDooaUwXG5cdFx0Y29uc3QgZCA9IGRkLmdldERhdGUoKSA8IDEwID8gJzAnICsgZGQuZ2V0RGF0ZSgpIDogZGQuZ2V0RGF0ZSgpIC8vIOiOt+WPluW9k+WJjeWHoOWPt++8jOS4jei2szEw6KGlMFxuXHRcdHJldHVybiB7XG5cdFx0XHRmdWxsRGF0ZTogeSArICctJyArIG0gKyAnLScgKyBkLFxuXHRcdFx0eWVhcjogeSxcblx0XHRcdG1vbnRoOiBtLFxuXHRcdFx0ZGF0ZTogZCxcblx0XHRcdGRheTogZGQuZ2V0RGF5KClcblx0XHR9XG5cdH1cblxuXG5cdC8qKlxuXHQgKiDojrflj5bkuIrmnIjliankvZnlpKnmlbBcblx0ICovXG5cdF9nZXRMYXN0TW9udGhEYXlzKGZpcnN0RGF5LCBmdWxsKSB7XG5cdFx0bGV0IGRhdGVBcnIgPSBbXVxuXHRcdGZvciAobGV0IGkgPSBmaXJzdERheTsgaSA+IDA7IGktLSkge1xuXHRcdFx0Y29uc3QgYmVmb3JlRGF0ZSA9IG5ldyBEYXRlKGZ1bGwueWVhciwgZnVsbC5tb250aCAtIDEsIC1pICsgMSkuZ2V0RGF0ZSgpXG5cdFx0XHRkYXRlQXJyLnB1c2goe1xuXHRcdFx0XHRkYXRlOiBiZWZvcmVEYXRlLFxuXHRcdFx0XHRtb250aDogZnVsbC5tb250aCAtIDEsXG5cdFx0XHRcdGx1bmFyOiB0aGlzLmdldGx1bmFyKGZ1bGwueWVhciwgZnVsbC5tb250aCAtIDEsIGJlZm9yZURhdGUpLFxuXHRcdFx0XHRkaXNhYmxlOiB0cnVlXG5cdFx0XHR9KVxuXHRcdH1cblx0XHRyZXR1cm4gZGF0ZUFyclxuXHR9XG5cdC8qKlxuXHQgKiDojrflj5bmnKzmnIjlpKnmlbBcblx0ICovXG5cdF9jdXJyZW50TW9udGhEeXMoZGF0ZURhdGEsIGZ1bGwpIHtcblx0XHRsZXQgZGF0ZUFyciA9IFtdXG5cdFx0bGV0IGZ1bGxEYXRlID0gdGhpcy5kYXRlLmZ1bGxEYXRlXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gZGF0ZURhdGE7IGkrKykge1xuXHRcdFx0bGV0IGlzaW5mbyA9IGZhbHNlXG5cdFx0XHRsZXQgbm93RGF0ZSA9IGZ1bGwueWVhciArICctJyArIChmdWxsLm1vbnRoIDwgMTAgP1xuXHRcdFx0XHRmdWxsLm1vbnRoIDogZnVsbC5tb250aCkgKyAnLScgKyAoaSA8IDEwID9cblx0XHRcdFx0JzAnICsgaSA6IGkpXG5cdFx0XHQvLyDmmK/lkKbku4rlpKlcblx0XHRcdGxldCBpc0RheSA9IGZ1bGxEYXRlID09PSBub3dEYXRlXG5cdFx0XHQvLyDojrflj5bmiZPngrnkv6Hmga9cblx0XHRcdGxldCBpbmZvID0gdGhpcy5zZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkLmZpbmQoKGl0ZW0pID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuZGF0ZUVxdWFsKG5vd0RhdGUsIGl0ZW0uZGF0ZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXG5cdFx0XHQvLyDml6XmnJ/npoHnlKhcblx0XHRcdGxldCBkaXNhYmxlQmVmb3JlID0gdHJ1ZVxuXHRcdFx0bGV0IGRpc2FibGVBZnRlciA9IHRydWVcblx0XHRcdGlmICh0aGlzLnN0YXJ0RGF0ZSkge1xuXHRcdFx0XHRsZXQgZGF0ZUNvbXBCZWZvcmUgPSB0aGlzLmRhdGVDb21wYXJlKHRoaXMuc3RhcnREYXRlLCBmdWxsRGF0ZSlcblx0XHRcdFx0ZGlzYWJsZUJlZm9yZSA9IHRoaXMuZGF0ZUNvbXBhcmUoZGF0ZUNvbXBCZWZvcmUgPyB0aGlzLnN0YXJ0RGF0ZSA6IGZ1bGxEYXRlLCBub3dEYXRlKVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5lbmREYXRlKSB7XG5cdFx0XHRcdGxldCBkYXRlQ29tcEFmdGVyID0gdGhpcy5kYXRlQ29tcGFyZShmdWxsRGF0ZSwgdGhpcy5lbmREYXRlKVxuXHRcdFx0XHRkaXNhYmxlQWZ0ZXIgPSB0aGlzLmRhdGVDb21wYXJlKG5vd0RhdGUsIGRhdGVDb21wQWZ0ZXIgPyB0aGlzLmVuZERhdGUgOiBmdWxsRGF0ZSlcblx0XHRcdH1cblxuXHRcdFx0bGV0IG11bHRpcGxlcyA9IHRoaXMubXVsdGlwbGVTdGF0dXMuZGF0YVxuXHRcdFx0bGV0IGNoZWNrZWQgPSBmYWxzZVxuXHRcdFx0bGV0IG11bHRpcGxlc1N0YXR1cyA9IC0xXG5cdFx0XHRpZiAodGhpcy5yYW5nZSkge1xuXHRcdFx0XHRpZiAobXVsdGlwbGVzKSB7XG5cdFx0XHRcdFx0bXVsdGlwbGVzU3RhdHVzID0gbXVsdGlwbGVzLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0ZUVxdWFsKGl0ZW0sIG5vd0RhdGUpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobXVsdGlwbGVzU3RhdHVzICE9PSAtMSkge1xuXHRcdFx0XHRcdGNoZWNrZWQgPSB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdGZ1bGxEYXRlOiBub3dEYXRlLFxuXHRcdFx0XHR5ZWFyOiBmdWxsLnllYXIsXG5cdFx0XHRcdGRhdGU6IGksXG5cdFx0XHRcdG11bHRpcGxlOiB0aGlzLnJhbmdlID8gY2hlY2tlZCA6IGZhbHNlLFxuXHRcdFx0XHRtb250aDogZnVsbC5tb250aCxcblx0XHRcdFx0bHVuYXI6IHRoaXMuZ2V0bHVuYXIoZnVsbC55ZWFyLCBmdWxsLm1vbnRoLCBpKSxcblx0XHRcdFx0ZGlzYWJsZTogIWRpc2FibGVCZWZvcmUgfHwgIWRpc2FibGVBZnRlcixcblx0XHRcdFx0aXNEYXlcblx0XHRcdH1cblx0XHRcdGlmIChpbmZvKSB7XG5cdFx0XHRcdGRhdGEuZXh0cmFJbmZvID0gaW5mb1xuXHRcdFx0fVxuXG5cdFx0XHRkYXRlQXJyLnB1c2goZGF0YSlcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGVBcnJcblx0fVxuXHQvKipcblx0ICog6I635Y+W5LiL5pyI5aSp5pWwXG5cdCAqL1xuXHRfZ2V0TmV4dE1vbnRoRGF5cyhzdXJwbHVzLCBmdWxsKSB7XG5cdFx0bGV0IGRhdGVBcnIgPSBbXVxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc3VycGx1cyArIDE7IGkrKykge1xuXHRcdFx0ZGF0ZUFyci5wdXNoKHtcblx0XHRcdFx0ZGF0ZTogaSxcblx0XHRcdFx0bW9udGg6IE51bWJlcihmdWxsLm1vbnRoKSArIDEsXG5cdFx0XHRcdGx1bmFyOiB0aGlzLmdldGx1bmFyKGZ1bGwueWVhciwgTnVtYmVyKGZ1bGwubW9udGgpICsgMSwgaSksXG5cdFx0XHRcdGRpc2FibGU6IHRydWVcblx0XHRcdH0pXG5cdFx0fVxuXHRcdHJldHVybiBkYXRlQXJyXG5cdH1cblx0LyoqXG5cdCAqIOiuvue9ruaXpeacn1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0ZVxuXHQgKi9cblx0c2V0RGF0ZShkYXRlKSB7XG5cdFx0dGhpcy5fZ2V0V2VlayhkYXRlKVxuXHR9XG5cdC8qKlxuXHQgKiDojrflj5blvZPliY3ml6XmnJ/or6bmg4Vcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGVcblx0ICovXG5cdGdldEluZm8oZGF0ZSkge1xuXHRcdGlmICghZGF0ZSkge1xuXHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKClcblx0XHR9XG5cdFx0Y29uc3QgZGF0ZUluZm8gPSB0aGlzLmNhbmxlbmRlci5maW5kKGl0ZW0gPT4gaXRlbS5mdWxsRGF0ZSA9PT0gdGhpcy5nZXREYXRlKGRhdGUpLmZ1bGxEYXRlKVxuXHRcdHJldHVybiBkYXRlSW5mb1xuXHR9XG5cblx0LyoqXG5cdCAqIOavlOi+g+aXtumXtOWkp+Wwj1xuXHQgKi9cblx0ZGF0ZUNvbXBhcmUoc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdFx0Ly8g6K6h566X5oiq5q2i5pe26Ze0XG5cdFx0c3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlLnJlcGxhY2UoJy0nLCAnLycpLnJlcGxhY2UoJy0nLCAnLycpKVxuXHRcdC8vIOiuoeeul+ivpue7humhueeahOaIquatouaXtumXtFxuXHRcdGVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlLnJlcGxhY2UoJy0nLCAnLycpLnJlcGxhY2UoJy0nLCAnLycpKVxuXHRcdGlmIChzdGFydERhdGUgPD0gZW5kRGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOavlOi+g+aXtumXtOaYr+WQpuebuOetiVxuXHQgKi9cblx0ZGF0ZUVxdWFsKGJlZm9yZSwgYWZ0ZXIpIHtcblx0XHQvLyDorqHnrpfmiKrmraLml7bpl7Rcblx0XHRiZWZvcmUgPSBuZXcgRGF0ZShiZWZvcmUucmVwbGFjZSgnLScsICcvJykucmVwbGFjZSgnLScsICcvJykpXG5cdFx0Ly8g6K6h566X6K+m57uG6aG555qE5oiq5q2i5pe26Ze0XG5cdFx0YWZ0ZXIgPSBuZXcgRGF0ZShhZnRlci5yZXBsYWNlKCctJywgJy8nKS5yZXBsYWNlKCctJywgJy8nKSlcblx0XHRpZiAoYmVmb3JlLmdldFRpbWUoKSAtIGFmdGVyLmdldFRpbWUoKSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICog6I635Y+W5pel5pyf6IyD5Zu05YaF5omA5pyJ5pel5pyfXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBiZWdpblxuXHQgKiBAcGFyYW0ge09iamVjdH0gZW5kXG5cdCAqL1xuXHRnZURhdGVBbGwoYmVnaW4sIGVuZCkge1xuXHRcdHZhciBhcnIgPSBbXVxuXHRcdHZhciBhYiA9IGJlZ2luLnNwbGl0KCctJylcblx0XHR2YXIgYWUgPSBlbmQuc3BsaXQoJy0nKVxuXHRcdHZhciBkYiA9IG5ldyBEYXRlKClcblx0XHRkYi5zZXRGdWxsWWVhcihhYlswXSwgYWJbMV0gLSAxLCBhYlsyXSlcblx0XHR2YXIgZGUgPSBuZXcgRGF0ZSgpXG5cdFx0ZGUuc2V0RnVsbFllYXIoYWVbMF0sIGFlWzFdIC0gMSwgYWVbMl0pXG5cdFx0dmFyIHVuaXhEYiA9IGRiLmdldFRpbWUoKSAtIDI0ICogNjAgKiA2MCAqIDEwMDBcblx0XHR2YXIgdW5peERlID0gZGUuZ2V0VGltZSgpIC0gMjQgKiA2MCAqIDYwICogMTAwMFxuXHRcdGZvciAodmFyIGsgPSB1bml4RGI7IGsgPD0gdW5peERlOykge1xuXHRcdFx0ayA9IGsgKyAyNCAqIDYwICogNjAgKiAxMDAwXG5cdFx0XHRhcnIucHVzaCh0aGlzLmdldERhdGUobmV3IERhdGUocGFyc2VJbnQoaykpKS5mdWxsRGF0ZSlcblx0XHR9XG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cdC8qKlxuXHQgKiDorqHnrpfpmLTljobml6XmnJ/mmL7npLpcblx0ICovXG5cdGdldGx1bmFyKHllYXIsIG1vbnRoLCBkYXRlKSB7XG5cdFx0cmV0dXJuIENBTEVOREFSLnNvbGFyMmx1bmFyKHllYXIsIG1vbnRoLCBkYXRlKVxuXHR9XG5cdC8qKlxuXHQgKiDorr7nva7miZPngrlcblx0ICovXG5cdHNldFNlbGVjdEluZm8oZGF0YSwgdmFsdWUpIHtcblx0XHR0aGlzLnNlbGVjdGVkID0gdmFsdWVcblx0XHR0aGlzLl9nZXRXZWVrKGRhdGEpXG5cdH1cblxuXHQvKipcblx0ICogIOiOt+WPluWkmumAieeKtuaAgVxuXHQgKi9cblx0c2V0TXVsdGlwbGUoZnVsbERhdGUpIHtcblx0XHRsZXQge1xuXHRcdFx0YmVmb3JlLFxuXHRcdFx0YWZ0ZXJcblx0XHR9ID0gdGhpcy5tdWx0aXBsZVN0YXR1c1xuXHRcdGlmICghdGhpcy5yYW5nZSkgcmV0dXJuXG5cdFx0aWYgKGJlZm9yZSAmJiBhZnRlcikge1xuXHRcdFx0dGhpcy5tdWx0aXBsZVN0YXR1cy5iZWZvcmUgPSAnJ1xuXHRcdFx0dGhpcy5tdWx0aXBsZVN0YXR1cy5hZnRlciA9ICcnXG5cdFx0XHR0aGlzLm11bHRpcGxlU3RhdHVzLmRhdGEgPSBbXVxuXHRcdFx0dGhpcy5fZ2V0V2VlayhmdWxsRGF0ZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFiZWZvcmUpIHtcblx0XHRcdFx0dGhpcy5tdWx0aXBsZVN0YXR1cy5iZWZvcmUgPSBmdWxsRGF0ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5tdWx0aXBsZVN0YXR1cy5hZnRlciA9IGZ1bGxEYXRlXG5cdFx0XHRcdGlmICh0aGlzLmRhdGVDb21wYXJlKHRoaXMubXVsdGlwbGVTdGF0dXMuYmVmb3JlLCB0aGlzLm11bHRpcGxlU3RhdHVzLmFmdGVyKSkge1xuXHRcdFx0XHRcdHRoaXMubXVsdGlwbGVTdGF0dXMuZGF0YSA9IHRoaXMuZ2VEYXRlQWxsKHRoaXMubXVsdGlwbGVTdGF0dXMuYmVmb3JlLCB0aGlzLm11bHRpcGxlU3RhdHVzLmFmdGVyKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm11bHRpcGxlU3RhdHVzLmRhdGEgPSB0aGlzLmdlRGF0ZUFsbCh0aGlzLm11bHRpcGxlU3RhdHVzLmFmdGVyLCB0aGlzLm11bHRpcGxlU3RhdHVzLmJlZm9yZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fZ2V0V2VlayhmdWxsRGF0ZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635Y+W5q+P5ZGo5pWw5o2uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRlRGF0YVxuXHQgKi9cblx0X2dldFdlZWsoZGF0ZURhdGEpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRmdWxsRGF0ZSxcblx0XHRcdHllYXIsXG5cdFx0XHRtb250aCxcblx0XHRcdGRhdGUsXG5cdFx0XHRkYXlcblx0XHR9ID0gdGhpcy5nZXREYXRlKGRhdGVEYXRhKVxuXHRcdGxldCBmaXJzdERheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMSkuZ2V0RGF5KClcblx0XHRsZXQgY3VycmVudERheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKClcblx0XHRsZXQgZGF0ZXMgPSB7XG5cdFx0XHRsYXN0TW9udGhEYXlzOiB0aGlzLl9nZXRMYXN0TW9udGhEYXlzKGZpcnN0RGF5LCB0aGlzLmdldERhdGUoZGF0ZURhdGEpKSwgLy8g5LiK5Liq5pyI5pyr5bC+5Yeg5aSpXG5cdFx0XHRjdXJyZW50TW9udGhEeXM6IHRoaXMuX2N1cnJlbnRNb250aER5cyhjdXJyZW50RGF5LCB0aGlzLmdldERhdGUoZGF0ZURhdGEpKSwgLy8g5pys5pyI5aSp5pWwXG5cdFx0XHRuZXh0TW9udGhEYXlzOiBbXSwgLy8g5LiL5Liq5pyI5byA5aeL5Yeg5aSpXG5cdFx0XHR3ZWVrczogW11cblx0XHR9XG5cdFx0bGV0IGNhbmxlbmRlciA9IFtdXG5cdFx0Y29uc3Qgc3VycGx1cyA9IDQyIC0gKGRhdGVzLmxhc3RNb250aERheXMubGVuZ3RoICsgZGF0ZXMuY3VycmVudE1vbnRoRHlzLmxlbmd0aClcblx0XHRkYXRlcy5uZXh0TW9udGhEYXlzID0gdGhpcy5fZ2V0TmV4dE1vbnRoRGF5cyhzdXJwbHVzLCB0aGlzLmdldERhdGUoZGF0ZURhdGEpKVxuXHRcdGNhbmxlbmRlciA9IGNhbmxlbmRlci5jb25jYXQoZGF0ZXMubGFzdE1vbnRoRGF5cywgZGF0ZXMuY3VycmVudE1vbnRoRHlzLCBkYXRlcy5uZXh0TW9udGhEYXlzKVxuXHRcdGxldCB3ZWVrcyA9IHt9XG5cdFx0Ly8g5ou85o6l5pWw57uEICDkuIrkuKrmnIjlvIDlp4vlh6DlpKkgKyDmnKzmnIjlpKnmlbArIOS4i+S4quaciOW8gOWni+WHoOWkqVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2FubGVuZGVyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoaSAlIDcgPT09IDApIHtcblx0XHRcdFx0d2Vla3NbcGFyc2VJbnQoaSAvIDcpXSA9IG5ldyBBcnJheSg3KVxuXHRcdFx0fVxuXHRcdFx0d2Vla3NbcGFyc2VJbnQoaSAvIDcpXVtpICUgN10gPSBjYW5sZW5kZXJbaV1cblx0XHR9XG5cdFx0dGhpcy5jYW5sZW5kZXIgPSBjYW5sZW5kZXJcblx0XHR0aGlzLndlZWtzID0gd2Vla3Ncblx0fVxuXG5cdC8v6Z2Z5oCB5pa55rOVXG5cdC8vIHN0YXRpYyBpbml0KGRhdGUpIHtcblx0Ly8gXHRpZiAoIXRoaXMuaW5zdGFuY2UpIHtcblx0Ly8gXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgQ2FsZW5kYXIoZGF0ZSk7XG5cdC8vIFx0fVxuXHQvLyBcdHJldHVybiB0aGlzLmluc3RhbmNlO1xuXHQvLyB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXJcbiIsIi8qKlxuKiBAMTkwMC0yMTAw5Yy66Ze05YaF55qE5YWs5Y6G44CB5Yac5Y6G5LqS6L2sXG4qIEBjaGFyc2V0IFVURi04XG4qIEBnaXRodWIgIGh0dHBzOi8vZ2l0aHViLmNvbS9qam9ubGluZS9jYWxlbmRhci5qc1xuKiBAQXV0aG9yICBKZWHmnagoSkpvbmxpbmVASkpvbmxpbmUuQ24pXG4qIEBUaW1lICAgIDIwMTQtNy0yMVxuKiBAVGltZSAgICAyMDE2LTgtMTMgRml4ZWQgMjAzM2hleOOAgUF0dHJpYnV0aW9uIEFubmFsc1xuKiBAVGltZSAgICAyMDE2LTktMjUgRml4ZWQgbHVuYXIgTGVhcE1vbnRoIFBhcmFtIEJ1Z1xuKiBAVGltZSAgICAyMDE3LTctMjQgRml4ZWQgdXNlIGdldFRlcm0gRnVuYyBQYXJhbSBFcnJvci51c2Ugc29sYXIgeWVhcixOT1QgbHVuYXIgeWVhclxuKiBAVmVyc2lvbiAxLjAuM1xuKiBA5YWs5Y6G6L2s5Yac5Y6G77yaY2FsZW5kYXIuc29sYXIybHVuYXIoMTk4NywxMSwwMSk7IC8vW3lvdSBjYW4gaWdub3JlIHBhcmFtcyBvZiBwcmVmaXggMF1cbiogQOWGnOWOhui9rOWFrOWOhu+8mmNhbGVuZGFyLmx1bmFyMnNvbGFyKDE5ODcsMDksMTApOyAvL1t5b3UgY2FuIGlnbm9yZSBwYXJhbXMgb2YgcHJlZml4IDBdXG4qL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbnZhciBjYWxlbmRhciA9IHtcblxuICAvKipcbiAgICAgICog5Yac5Y6GMTkwMC0yMTAw55qE5ram5aSn5bCP5L+h5oGv6KGoXG4gICAgICAqIEBBcnJheSBPZiBQcm9wZXJ0eVxuICAgICAgKiBAcmV0dXJuIEhleFxuICAgICAgKi9cbiAgbHVuYXJJbmZvOiBbMHgwNGJkOCwgMHgwNGFlMCwgMHgwYTU3MCwgMHgwNTRkNSwgMHgwZDI2MCwgMHgwZDk1MCwgMHgxNjU1NCwgMHgwNTZhMCwgMHgwOWFkMCwgMHgwNTVkMiwgLy8gMTkwMC0xOTA5XG4gICAgMHgwNGFlMCwgMHgwYTViNiwgMHgwYTRkMCwgMHgwZDI1MCwgMHgxZDI1NSwgMHgwYjU0MCwgMHgwZDZhMCwgMHgwYWRhMiwgMHgwOTViMCwgMHgxNDk3NywgLy8gMTkxMC0xOTE5XG4gICAgMHgwNDk3MCwgMHgwYTRiMCwgMHgwYjRiNSwgMHgwNmE1MCwgMHgwNmQ0MCwgMHgxYWI1NCwgMHgwMmI2MCwgMHgwOTU3MCwgMHgwNTJmMiwgMHgwNDk3MCwgLy8gMTkyMC0xOTI5XG4gICAgMHgwNjU2NiwgMHgwZDRhMCwgMHgwZWE1MCwgMHgwNmU5NSwgMHgwNWFkMCwgMHgwMmI2MCwgMHgxODZlMywgMHgwOTJlMCwgMHgxYzhkNywgMHgwYzk1MCwgLy8gMTkzMC0xOTM5XG4gICAgMHgwZDRhMCwgMHgxZDhhNiwgMHgwYjU1MCwgMHgwNTZhMCwgMHgxYTViNCwgMHgwMjVkMCwgMHgwOTJkMCwgMHgwZDJiMiwgMHgwYTk1MCwgMHgwYjU1NywgLy8gMTk0MC0xOTQ5XG4gICAgMHgwNmNhMCwgMHgwYjU1MCwgMHgxNTM1NSwgMHgwNGRhMCwgMHgwYTViMCwgMHgxNDU3MywgMHgwNTJiMCwgMHgwYTlhOCwgMHgwZTk1MCwgMHgwNmFhMCwgLy8gMTk1MC0xOTU5XG4gICAgMHgwYWVhNiwgMHgwYWI1MCwgMHgwNGI2MCwgMHgwYWFlNCwgMHgwYTU3MCwgMHgwNTI2MCwgMHgwZjI2MywgMHgwZDk1MCwgMHgwNWI1NywgMHgwNTZhMCwgLy8gMTk2MC0xOTY5XG4gICAgMHgwOTZkMCwgMHgwNGRkNSwgMHgwNGFkMCwgMHgwYTRkMCwgMHgwZDRkNCwgMHgwZDI1MCwgMHgwZDU1OCwgMHgwYjU0MCwgMHgwYjZhMCwgMHgxOTVhNiwgLy8gMTk3MC0xOTc5XG4gICAgMHgwOTViMCwgMHgwNDliMCwgMHgwYTk3NCwgMHgwYTRiMCwgMHgwYjI3YSwgMHgwNmE1MCwgMHgwNmQ0MCwgMHgwYWY0NiwgMHgwYWI2MCwgMHgwOTU3MCwgLy8gMTk4MC0xOTg5XG4gICAgMHgwNGFmNSwgMHgwNDk3MCwgMHgwNjRiMCwgMHgwNzRhMywgMHgwZWE1MCwgMHgwNmI1OCwgMHgwNWFjMCwgMHgwYWI2MCwgMHgwOTZkNSwgMHgwOTJlMCwgLy8gMTk5MC0xOTk5XG4gICAgMHgwYzk2MCwgMHgwZDk1NCwgMHgwZDRhMCwgMHgwZGE1MCwgMHgwNzU1MiwgMHgwNTZhMCwgMHgwYWJiNywgMHgwMjVkMCwgMHgwOTJkMCwgMHgwY2FiNSwgLy8gMjAwMC0yMDA5XG4gICAgMHgwYTk1MCwgMHgwYjRhMCwgMHgwYmFhNCwgMHgwYWQ1MCwgMHgwNTVkOSwgMHgwNGJhMCwgMHgwYTViMCwgMHgxNTE3NiwgMHgwNTJiMCwgMHgwYTkzMCwgLy8gMjAxMC0yMDE5XG4gICAgMHgwNzk1NCwgMHgwNmFhMCwgMHgwYWQ1MCwgMHgwNWI1MiwgMHgwNGI2MCwgMHgwYTZlNiwgMHgwYTRlMCwgMHgwZDI2MCwgMHgwZWE2NSwgMHgwZDUzMCwgLy8gMjAyMC0yMDI5XG4gICAgMHgwNWFhMCwgMHgwNzZhMywgMHgwOTZkMCwgMHgwNGFmYiwgMHgwNGFkMCwgMHgwYTRkMCwgMHgxZDBiNiwgMHgwZDI1MCwgMHgwZDUyMCwgMHgwZGQ0NSwgLy8gMjAzMC0yMDM5XG4gICAgMHgwYjVhMCwgMHgwNTZkMCwgMHgwNTViMiwgMHgwNDliMCwgMHgwYTU3NywgMHgwYTRiMCwgMHgwYWE1MCwgMHgxYjI1NSwgMHgwNmQyMCwgMHgwYWRhMCwgLy8gMjA0MC0yMDQ5XG4gICAgLyoqIEFkZCBCeSBKSm9ubGluZUBKSm9ubGluZS5DbioqL1xuICAgIDB4MTRiNjMsIDB4MDkzNzAsIDB4MDQ5ZjgsIDB4MDQ5NzAsIDB4MDY0YjAsIDB4MTY4YTYsIDB4MGVhNTAsIDB4MDZiMjAsIDB4MWE2YzQsIDB4MGFhZTAsIC8vIDIwNTAtMjA1OVxuICAgIDB4MGEyZTAsIDB4MGQyZTMsIDB4MGM5NjAsIDB4MGQ1NTcsIDB4MGQ0YTAsIDB4MGRhNTAsIDB4MDVkNTUsIDB4MDU2YTAsIDB4MGE2ZDAsIDB4MDU1ZDQsIC8vIDIwNjAtMjA2OVxuICAgIDB4MDUyZDAsIDB4MGE5YjgsIDB4MGE5NTAsIDB4MGI0YTAsIDB4MGI2YTYsIDB4MGFkNTAsIDB4MDU1YTAsIDB4MGFiYTQsIDB4MGE1YjAsIDB4MDUyYjAsIC8vIDIwNzAtMjA3OVxuICAgIDB4MGIyNzMsIDB4MDY5MzAsIDB4MDczMzcsIDB4MDZhYTAsIDB4MGFkNTAsIDB4MTRiNTUsIDB4MDRiNjAsIDB4MGE1NzAsIDB4MDU0ZTQsIDB4MGQxNjAsIC8vIDIwODAtMjA4OVxuICAgIDB4MGU5NjgsIDB4MGQ1MjAsIDB4MGRhYTAsIDB4MTZhYTYsIDB4MDU2ZDAsIDB4MDRhZTAsIDB4MGE5ZDQsIDB4MGEyZDAsIDB4MGQxNTAsIDB4MGYyNTIsIC8vIDIwOTAtMjA5OVxuICAgIDB4MGQ1MjBdLCAvLyAyMTAwXG5cbiAgLyoqXG4gICAgICAqIOWFrOWOhuavj+S4quaciOS7veeahOWkqeaVsOaZrumAmuihqFxuICAgICAgKiBAQXJyYXkgT2YgUHJvcGVydHlcbiAgICAgICogQHJldHVybiBOdW1iZXJcbiAgICAgICovXG4gIHNvbGFyTW9udGg6IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcblxuICAvKipcbiAgICAgICog5aSp5bmy5Zyw5pSv5LmL5aSp5bmy6YCf5p+l6KGoXG4gICAgICAqIEBBcnJheSBPZiBQcm9wZXJ0eSB0cmFuc1tcIueUslwiLFwi5LmZXCIsXCLkuJlcIixcIuS4gVwiLFwi5oiKXCIsXCLlt7FcIixcIuW6mlwiLFwi6L6bXCIsXCLlo6xcIixcIueZuFwiXVxuICAgICAgKiBAcmV0dXJuIENuIHN0cmluZ1xuICAgICAgKi9cbiAgR2FuOiBbJ1xcdTc1MzInLCAnXFx1NGU1OScsICdcXHU0ZTE5JywgJ1xcdTRlMDEnLCAnXFx1NjIwYScsICdcXHU1ZGYxJywgJ1xcdTVlOWEnLCAnXFx1OGY5YicsICdcXHU1OGVjJywgJ1xcdTc2NzgnXSxcblxuICAvKipcbiAgICAgICog5aSp5bmy5Zyw5pSv5LmL5Zyw5pSv6YCf5p+l6KGoXG4gICAgICAqIEBBcnJheSBPZiBQcm9wZXJ0eVxuICAgICAgKiBAdHJhbnNbXCLlrZBcIixcIuS4kVwiLFwi5a+FXCIsXCLlja9cIixcIui+sFwiLFwi5bezXCIsXCLljYhcIixcIuacqlwiLFwi55SzXCIsXCLphYlcIixcIuaIjFwiLFwi5LqlXCJdXG4gICAgICAqIEByZXR1cm4gQ24gc3RyaW5nXG4gICAgICAqL1xuICBaaGk6IFsnXFx1NWI1MCcsICdcXHU0ZTExJywgJ1xcdTViYzUnLCAnXFx1NTM2ZicsICdcXHU4ZmIwJywgJ1xcdTVkZjMnLCAnXFx1NTM0OCcsICdcXHU2NzJhJywgJ1xcdTc1MzMnLCAnXFx1OTE0OScsICdcXHU2MjBjJywgJ1xcdTRlYTUnXSxcblxuICAvKipcbiAgICAgICog5aSp5bmy5Zyw5pSv5LmL5Zyw5pSv6YCf5p+l6KGoPD0+55Sf6IKWXG4gICAgICAqIEBBcnJheSBPZiBQcm9wZXJ0eVxuICAgICAgKiBAdHJhbnNbXCLpvKBcIixcIueJm1wiLFwi6JmOXCIsXCLlhZRcIixcIum+mVwiLFwi6JuHXCIsXCLpqaxcIixcIue+ilwiLFwi54y0XCIsXCLpuKFcIixcIueLl1wiLFwi54yqXCJdXG4gICAgICAqIEByZXR1cm4gQ24gc3RyaW5nXG4gICAgICAqL1xuICBBbmltYWxzOiBbJ1xcdTlmMjAnLCAnXFx1NzI1YicsICdcXHU4NjRlJywgJ1xcdTUxNTQnLCAnXFx1OWY5OScsICdcXHU4NmM3JywgJ1xcdTlhNmMnLCAnXFx1N2Y4YScsICdcXHU3MzM0JywgJ1xcdTllMjEnLCAnXFx1NzJkNycsICdcXHU3MzJhJ10sXG5cbiAgLyoqXG4gICAgICAqIDI06IqC5rCU6YCf5p+l6KGoXG4gICAgICAqIEBBcnJheSBPZiBQcm9wZXJ0eVxuICAgICAgKiBAdHJhbnNbXCLlsI/lr5JcIixcIuWkp+WvklwiLFwi56uL5pilXCIsXCLpm6jmsLRcIixcIuaDiuibsFwiLFwi5pil5YiGXCIsXCLmuIXmmI5cIixcIuiwt+mbqFwiLFwi56uL5aSPXCIsXCLlsI/mu6FcIixcIuiKkuenjVwiLFwi5aSP6IezXCIsXCLlsI/mmpFcIixcIuWkp+aakVwiLFwi56uL56eLXCIsXCLlpITmmpFcIixcIueZvemcslwiLFwi56eL5YiGXCIsXCLlr5LpnLJcIixcIumcnOmZjVwiLFwi56uL5YasXCIsXCLlsI/pm6pcIixcIuWkp+mbqlwiLFwi5Yas6IezXCJdXG4gICAgICAqIEByZXR1cm4gQ24gc3RyaW5nXG4gICAgICAqL1xuICBzb2xhclRlcm06IFsnXFx1NWMwZlxcdTViZDInLCAnXFx1NTkyN1xcdTViZDInLCAnXFx1N2FjYlxcdTY2MjUnLCAnXFx1OTZlOFxcdTZjMzQnLCAnXFx1NjBjYVxcdTg2ZjAnLCAnXFx1NjYyNVxcdTUyMDYnLCAnXFx1NmUwNVxcdTY2MGUnLCAnXFx1OGMzN1xcdTk2ZTgnLCAnXFx1N2FjYlxcdTU5MGYnLCAnXFx1NWMwZlxcdTZlZTEnLCAnXFx1ODI5MlxcdTc5Y2QnLCAnXFx1NTkwZlxcdTgxZjMnLCAnXFx1NWMwZlxcdTY2OTEnLCAnXFx1NTkyN1xcdTY2OTEnLCAnXFx1N2FjYlxcdTc5Y2InLCAnXFx1NTkwNFxcdTY2OTEnLCAnXFx1NzY3ZFxcdTk3MzInLCAnXFx1NzljYlxcdTUyMDYnLCAnXFx1NWJkMlxcdTk3MzInLCAnXFx1OTcxY1xcdTk2NGQnLCAnXFx1N2FjYlxcdTUxYWMnLCAnXFx1NWMwZlxcdTk2ZWEnLCAnXFx1NTkyN1xcdTk2ZWEnLCAnXFx1NTFhY1xcdTgxZjMnXSxcblxuICAvKipcbiAgICAgICogMTkwMC0yMTAw5ZCE5bm055qEMjToioLmsJTml6XmnJ/pgJ/mn6XooahcbiAgICAgICogQEFycmF5IE9mIFByb3BlcnR5XG4gICAgICAqIEByZXR1cm4gMHggc3RyaW5nIEZvciBzcGxpY2VcbiAgICAgICovXG4gIHNUZXJtSW5mbzogWyc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLCAnOTdiNmI5N2JkMTk4MDFlYzkyMTBjOTY1Y2M5MjBlJywgJzk3YmNmOTdjMzU5ODA4MmM5NWY4Yzk2NWNjOTIwZicsXG4gICAgJzk3YmQwYjA2YmRiMDcyMmM5NjVjZTFjZmNjOTIwZicsICdiMDI3MDk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLCAnOTdiNmI5N2JkMTk4MDFlYzkyMTBjOTY1Y2M5MjBlJyxcbiAgICAnOTdiY2Y5N2MzNTk4MDFlYzk1ZjhjOTY1Y2M5MjBmJywgJzk3YmQwYjA2YmRiMDcyMmM5NjVjZTFjZmNjOTIwZicsICdiMDI3MDk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLFxuICAgICc5N2I2Yjk3YmQxOTgwMWVjOTIxMGM5NjVjYzkyMGUnLCAnOTdiY2Y5N2MzNTk4MDFlYzk1ZjhjOTY1Y2M5MjBmJywgJzk3YmQwYjA2YmRiMDcyMmM5NjVjZTFjZmNjOTIwZicsXG4gICAgJ2IwMjcwOTdiZDA5N2MzNmIwYjZmYzkyNzRjOTFhYScsICc5Nzc4Mzk3YmQxOTgwMWVjOTIxMGM5NjVjYzkyMGUnLCAnOTdiNmI5N2JkMTk4MDFlYzk1ZjhjOTY1Y2M5MjBmJyxcbiAgICAnOTdiZDA5ODAxZDk4MDgyYzk1ZjhlMWNmY2M5MjBmJywgJzk3YmQwOTdiZDA5N2MzNmIwYjZmYzkyMTBjOGRjMicsICc5Nzc4Mzk3YmQxOTdjMzZjOTIxMGM5Mjc0YzkxYWEnLFxuICAgICc5N2I2Yjk3YmQxOTgwMWVjOTVmOGM5NjVjYzkyMGUnLCAnOTdiZDA5ODAxZDk4MDgyYzk1ZjhlMWNmY2M5MjBmJywgJzk3YmQwOTdiZDA5N2MzNmIwYjZmYzkyMTBjOGRjMicsXG4gICAgJzk3NzgzOTdiZDA5N2MzNmM5MjEwYzkyNzRjOTFhYScsICc5N2I2Yjk3YmQxOTgwMWVjOTVmOGM5NjVjYzkyMGUnLCAnOTdiY2Y5N2MzNTk4MDgyYzk1ZjhlMWNmY2M5MjBmJyxcbiAgICAnOTdiZDA5N2JkMDk3YzM2YjBiNmZjOTIxMGM4ZGMyJywgJzk3NzgzOTdiZDA5N2MzNmM5MjEwYzkyNzRjOTFhYScsICc5N2I2Yjk3YmQxOTgwMWVjOTIxMGM5NjVjYzkyMGUnLFxuICAgICc5N2JjZjk3YzM1OTgwODJjOTVmOGM5NjVjYzkyMGYnLCAnOTdiZDA5N2JkMDk3YzM1YjBiNmZjOTIwZmIwNzIyJywgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyNzRjOTFhYScsXG4gICAgJzk3YjZiOTdiZDE5ODAxZWM5MjEwYzk2NWNjOTIwZScsICc5N2JjZjk3YzM1OTgwODJjOTVmOGM5NjVjYzkyMGYnLCAnOTdiZDA5N2JkMDk3YzM1YjBiNmZjOTIwZmIwNzIyJyxcbiAgICAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJywgJzk3YjZiOTdiZDE5ODAxZWM5MjEwYzk2NWNjOTIwZScsICc5N2JjZjk3YzM1OTgwMWVjOTVmOGM5NjVjYzkyMGYnLFxuICAgICc5N2JkMDk3YmQwOTdjMzViMGI2ZmM5MjBmYjA3MjInLCAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJywgJzk3YjZiOTdiZDE5ODAxZWM5MjEwYzk2NWNjOTIwZScsXG4gICAgJzk3YmNmOTdjMzU5ODAxZWM5NWY4Yzk2NWNjOTIwZicsICc5N2JkMDk3YmQwOTdjMzViMGI2ZmM5MjBmYjA3MjInLCAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJyxcbiAgICAnOTdiNmI5N2JkMTk4MDFlYzkyMTBjOTY1Y2M5MjBlJywgJzk3YmNmOTdjMzU5ODAxZWM5NWY4Yzk2NWNjOTIwZicsICc5N2JkMDk3YmQwN2Y1OTViMGI2ZmM5MjBmYjA3MjInLFxuICAgICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5MjEwYzhkYzInLCAnOTc3ODM5N2JkMTk4MDFlYzkyMTBjOTI3NGM5MjBlJywgJzk3YjZiOTdiZDE5ODAxZWM5NWY4Yzk2NWNjOTIwZicsXG4gICAgJzk3YmQwN2Y1MzA3ZjU5NWIwYjBiYzkyMGZiMDcyMicsICc3ZjBlMzk3YmQwOTdjMzZiMGI2ZmM5MjEwYzhkYzInLCAnOTc3ODM5N2JkMDk3YzM2YzkyMTBjOTI3NGM5MjBlJyxcbiAgICAnOTdiNmI5N2JkMTk4MDFlYzk1ZjhjOTY1Y2M5MjBmJywgJzk3YmQwN2Y1MzA3ZjU5NWIwYjBiYzkyMGZiMDcyMicsICc3ZjBlMzk3YmQwOTdjMzZiMGI2ZmM5MjEwYzhkYzInLFxuICAgICc5Nzc4Mzk3YmQwOTdjMzZjOTIxMGM5Mjc0YzkxYWEnLCAnOTdiNmI5N2JkMTk4MDFlYzkyMTBjOTY1Y2M5MjBlJywgJzk3YmQwN2YxNDg3ZjU5NWIwYjBiYzkyMGZiMDcyMicsXG4gICAgJzdmMGUzOTdiZDA5N2MzNmIwYjZmYzkyMTBjOGRjMicsICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLCAnOTdiNmI5N2JkMTk4MDFlYzkyMTBjOTY1Y2M5MjBlJyxcbiAgICAnOTdiY2Y3ZjE0ODdmNTk1YjBiMGJiMGI2ZmIwNzIyJywgJzdmMGUzOTdiZDA5N2MzNWIwYjZmYzkyMGZiMDcyMicsICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLFxuICAgICc5N2I2Yjk3YmQxOTgwMWVjOTIxMGM5NjVjYzkyMGUnLCAnOTdiY2Y3ZjE0ODdmNTk1YjBiMGJiMGI2ZmIwNzIyJywgJzdmMGUzOTdiZDA5N2MzNWIwYjZmYzkyMGZiMDcyMicsXG4gICAgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyNzRjOTFhYScsICc5N2I2Yjk3YmQxOTgwMWVjOTIxMGM5NjVjYzkyMGUnLCAnOTdiY2Y3ZjE0ODdmNTMxYjBiMGJiMGI2ZmIwNzIyJyxcbiAgICAnN2YwZTM5N2JkMDk3YzM1YjBiNmZjOTIwZmIwNzIyJywgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyNzRjOTFhYScsICc5N2I2Yjk3YmQxOTgwMWVjOTIxMGM5NjVjYzkyMGUnLFxuICAgICc5N2JjZjdmMTQ4N2Y1MzFiMGIwYmIwYjZmYjA3MjInLCAnN2YwZTM5N2JkMDdmNTk1YjBiNmZjOTIwZmIwNzIyJywgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyNzRjOTFhYScsXG4gICAgJzk3YjZiOTdiZDE5ODAxZWM5MjEwYzkyNzRjOTIwZScsICc5N2JjZjdmMGU0N2Y1MzFiMGIwYmIwYjZmYjA3MjInLCAnN2YwZTM5N2JkMDdmNTk1YjBiMGJjOTIwZmIwNzIyJyxcbiAgICAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTIxMGM5MWFhJywgJzk3YjZiOTdiZDE5N2MzNmM5MjEwYzkyNzRjOTIwZScsICc5N2JjZjdmMGU0N2Y1MzFiMGIwYmIwYjZmYjA3MjInLFxuICAgICc3ZjBlMzk3YmQwN2Y1OTViMGIwYmM5MjBmYjA3MjInLCAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTIxMGM4ZGMyJywgJzk3NzgzOTdiZDA5N2MzNmM5MjEwYzkyNzRjOTIwZScsXG4gICAgJzk3YjZiN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMicsICc3ZjBlMzdmNTMwN2Y1OTViMGIwYmM5MjBmYjA3MjInLCAnN2YwZTM5N2JkMDk3YzM2YjBiNmZjOTIxMGM4ZGMyJyxcbiAgICAnOTc3ODM5N2JkMDk3YzM2YjBiNzBjOTI3NGM5MWFhJywgJzk3YjZiN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsICc3ZjBlMzdmMTQ4N2Y1OTViMGIwYmIwYjZmYjA3MjInLFxuICAgICc3ZjBlMzk3YmQwOTdjMzViMGI2ZmM5MjEwYzhkYzInLCAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJywgJzk3YjZiN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsXG4gICAgJzdmMGUyN2YxNDg3ZjU5NWIwYjBiYjBiNmZiMDcyMicsICc3ZjBlMzk3YmQwOTdjMzViMGI2ZmM5MjBmYjA3MjInLCAnOTc3ODM5N2JkMDk3YzM2YjBiNmZjOTI3NGM5MWFhJyxcbiAgICAnOTdiNmI3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIxJywgJzdmMGUyN2YxNDg3ZjUzMWIwYjBiYjBiNmZiMDcyMicsICc3ZjBlMzk3YmQwOTdjMzViMGI2ZmM5MjBmYjA3MjInLFxuICAgICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLCAnOTdiNmI3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIxJywgJzdmMGUyN2YxNDg3ZjUzMWIwYjBiYjBiNmZiMDcyMicsXG4gICAgJzdmMGUzOTdiZDA5N2MzNWIwYjZmYzkyMGZiMDcyMicsICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLCAnOTdiNmI3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIxJyxcbiAgICAnN2YwZTI3ZjE0ODdmNTMxYjBiMGJiMGI2ZmIwNzIyJywgJzdmMGUzOTdiZDA3ZjU5NWIwYjBiYzkyMGZiMDcyMicsICc5Nzc4Mzk3YmQwOTdjMzZiMGI2ZmM5Mjc0YzkxYWEnLFxuICAgICc5N2I2YjdmMGU0N2Y1MzFiMDcyM2IwNzg3YjA3MjEnLCAnN2YwZTI3ZjBlNDdmNTMxYjBiMGJiMGI2ZmIwNzIyJywgJzdmMGUzOTdiZDA3ZjU5NWIwYjBiYzkyMGZiMDcyMicsXG4gICAgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyMTBjOTFhYScsICc5N2I2YjdmMGU0N2YxNDliMDcyM2IwNzg3YjA3MjEnLCAnN2YwZTI3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIyJyxcbiAgICAnN2YwZTM5N2JkMDdmNTk1YjBiMGJjOTIwZmIwNzIyJywgJzk3NzgzOTdiZDA5N2MzNmIwYjZmYzkyMTBjOGRjMicsICc5Nzc4MzdmMGUzN2YxNDliMDcyM2IwNzg3YjA3MjEnLFxuICAgICc3ZjA3ZTdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjInLCAnN2YwZTM3ZjUzMDdmNTk1YjBiMGJjOTIwZmIwNzIyJywgJzdmMGUzOTdiZDA5N2MzNWIwYjZmYzkyMTBjOGRjMicsXG4gICAgJzk3NzgzN2YwZTM3ZjE0OTk4MDgyYjA3ODdiMDcyMScsICc3ZjA3ZTdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjEnLCAnN2YwZTM3ZjE0ODdmNTk1YjBiMGJiMGI2ZmIwNzIyJyxcbiAgICAnN2YwZTM5N2JkMDk3YzM1YjBiNmZjOTIxMGM4ZGMyJywgJzk3NzgzN2YwZTM3ZjE0OTk4MDgyYjA3ODdiMDZiZCcsICc3ZjA3ZTdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjEnLFxuICAgICc3ZjBlMjdmMTQ4N2Y1MzFiMGIwYmIwYjZmYjA3MjInLCAnN2YwZTM5N2JkMDk3YzM1YjBiNmZjOTIwZmIwNzIyJywgJzk3NzgzN2YwZTM3ZjE0OTk4MDgyYjA3ODdiMDZiZCcsXG4gICAgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsICc3ZjBlMjdmMTQ4N2Y1MzFiMGIwYmIwYjZmYjA3MjInLCAnN2YwZTM5N2JkMDk3YzM1YjBiNmZjOTIwZmIwNzIyJyxcbiAgICAnOTc3ODM3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNmJkJywgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsICc3ZjBlMjdmMTQ4N2Y1MzFiMGIwYmIwYjZmYjA3MjInLFxuICAgICc3ZjBlMzk3YmQwN2Y1OTViMGIwYmM5MjBmYjA3MjInLCAnOTc3ODM3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNmJkJywgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsXG4gICAgJzdmMGUyN2YxNDg3ZjUzMWIwYjBiYjBiNmZiMDcyMicsICc3ZjBlMzk3YmQwN2Y1OTViMGIwYmM5MjBmYjA3MjInLCAnOTc3ODM3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNmJkJyxcbiAgICAnN2YwN2U3ZjBlNDdmMTQ5YjA3MjNiMDc4N2IwNzIxJywgJzdmMGUyN2YwZTQ3ZjUzMWIwYjBiYjBiNmZiMDcyMicsICc3ZjBlMzk3YmQwN2Y1OTViMGIwYmM5MjBmYjA3MjInLFxuICAgICc5Nzc4MzdmMGUzN2YxNDk5ODA4MmIwNzIzYjA2YmQnLCAnN2YwN2U3ZjBlMzdmMTQ5YjA3MjNiMDc4N2IwNzIxJywgJzdmMGUyN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMicsXG4gICAgJzdmMGUzOTdiZDA3ZjU5NWIwYjBiYzkyMGZiMDcyMicsICc5Nzc4MzdmMGUzN2YxNDg5ODA4MmIwNzIzYjAyZDUnLCAnN2VjOTY3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNzIxJyxcbiAgICAnN2YwN2U3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIyJywgJzdmMGUzN2YxNDg3ZjU5NWIwYjBiYjBiNmZiMDcyMicsICc3ZjBlMzdmMGUzN2YxNDg5ODA4MmIwNzIzYjAyZDUnLFxuICAgICc3ZWM5NjdmMGUzN2YxNDk5ODA4MmIwNzg3YjA3MjEnLCAnN2YwN2U3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIyJywgJzdmMGUzN2YxNDg3ZjUzMWIwYjBiYjBiNmZiMDcyMicsXG4gICAgJzdmMGUzN2YwZTM3ZjE0ODk4MDgyYjA3MjNiMDJkNScsICc3ZWM5NjdmMGUzN2YxNDk5ODA4MmIwNzg3YjA2YmQnLCAnN2YwN2U3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIxJyxcbiAgICAnN2YwZTM3ZjE0ODdmNTMxYjBiMGJiMGI2ZmIwNzIyJywgJzdmMGUzN2YwZTM3ZjE0ODk4MDgyYjA3MjI5N2MzNScsICc3ZWM5NjdmMGUzN2YxNDk5ODA4MmIwNzg3YjA2YmQnLFxuICAgICc3ZjA3ZTdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjEnLCAnN2YwZTI3ZjE0ODdmNTMxYjBiMGJiMGI2ZmIwNzIyJywgJzdmMGUzN2YwZTM3ZjE0ODk4MDgyYjA3MjI5N2MzNScsXG4gICAgJzdlYzk2N2YwZTM3ZjE0OTk4MDgyYjA3ODdiMDZiZCcsICc3ZjA3ZTdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjEnLCAnN2YwZTI3ZjE0ODdmNTMxYjBiMGJiMGI2ZmIwNzIyJyxcbiAgICAnN2YwZTM3ZjBlMzY2YWE4OTgwMWViMDcyMjk3YzM1JywgJzdlYzk2N2YwZTM3ZjE0OTk4MDgyYjA3ODdiMDZiZCcsICc3ZjA3ZTdmMGU0N2YxNDliMDcyM2IwNzg3YjA3MjEnLFxuICAgICc3ZjBlMjdmMTQ4N2Y1MzFiMGIwYmIwYjZmYjA3MjInLCAnN2YwZTM3ZjBlMzY2YWE4OTgwMWViMDcyMjk3YzM1JywgJzdlYzk2N2YwZTM3ZjE0OTk4MDgyYjA3MjNiMDZiZCcsXG4gICAgJzdmMDdlN2YwZTQ3ZjE0OWIwNzIzYjA3ODdiMDcyMScsICc3ZjBlMjdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjInLCAnN2YwZTM3ZjBlMzY2YWE4OTgwMWViMDcyMjk3YzM1JyxcbiAgICAnN2VjOTY3ZjBlMzdmMTQ5OTgwODJiMDcyM2IwNmJkJywgJzdmMDdlN2YwZTM3ZjE0OTk4MDgzYjA3ODdiMDcyMScsICc3ZjBlMjdmMGU0N2Y1MzFiMDcyM2IwYjZmYjA3MjInLFxuICAgICc3ZjBlMzdmMGUzNjZhYTg5ODAxZWIwNzIyOTdjMzUnLCAnN2VjOTY3ZjBlMzdmMTQ4OTgwODJiMDcyM2IwMmQ1JywgJzdmMDdlN2YwZTM3ZjE0OTk4MDgyYjA3ODdiMDcyMScsXG4gICAgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMicsICc3ZjBlMzY2NjViNjZhYTg5ODAxZTk4MDgyOTdjMzUnLCAnNjY1ZjY3ZjBlMzdmMTQ4OTgwODJiMDcyM2IwMmQ1JyxcbiAgICAnN2VjOTY3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNzIxJywgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMicsICc3ZjBlMzY2NjViNjZhNDQ5ODAxZTk4MDgyOTdjMzUnLFxuICAgICc2NjVmNjdmMGUzN2YxNDg5ODA4MmIwNzIzYjAyZDUnLCAnN2VjOTY3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNmJkJywgJzdmMDdlN2YwZTQ3ZjUzMWIwNzIzYjBiNmZiMDcyMScsXG4gICAgJzdmMGUzNjY2NWI2NmE0NDk4MDFlOTgwODI5N2MzNScsICc2NjVmNjdmMGUzN2YxNDg5ODA4MmIwNzIyOTdjMzUnLCAnN2VjOTY3ZjBlMzdmMTQ5OTgwODJiMDc4N2IwNmJkJyxcbiAgICAnN2YwN2U3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIxJywgJzdmMGUyNjY2NWI2NmE0NDk4MDFlOTgwODI5N2MzNScsICc2NjVmNjdmMGUzN2YxNDg5ODAxZWIwNzIyOTdjMzUnLFxuICAgICc3ZWM5NjdmMGUzN2YxNDk5ODA4MmIwNzg3YjA2YmQnLCAnN2YwN2U3ZjBlNDdmNTMxYjA3MjNiMGI2ZmIwNzIxJywgJzdmMGUyN2YxNDg3ZjUzMWIwYjBiYjBiNmZiMDcyMiddLFxuXG4gIC8qKlxuICAgICAgKiDmlbDlrZfovazkuK3mlofpgJ/mn6XooahcbiAgICAgICogQEFycmF5IE9mIFByb3BlcnR5XG4gICAgICAqIEB0cmFucyBbJ+aXpScsJ+S4gCcsJ+S6jCcsJ+S4iScsJ+WbmycsJ+S6lCcsJ+WFrScsJ+S4gycsJ+WFqycsJ+S5nScsJ+WNgSddXG4gICAgICAqIEByZXR1cm4gQ24gc3RyaW5nXG4gICAgICAqL1xuICBuU3RyMTogWydcXHU2NWU1JywgJ1xcdTRlMDAnLCAnXFx1NGU4YycsICdcXHU0ZTA5JywgJ1xcdTU2ZGInLCAnXFx1NGU5NCcsICdcXHU1MTZkJywgJ1xcdTRlMDMnLCAnXFx1NTE2YicsICdcXHU0ZTVkJywgJ1xcdTUzNDEnXSxcblxuICAvKipcbiAgICAgICog5pel5pyf6L2s5Yac5Y6G56ew5ZG86YCf5p+l6KGoXG4gICAgICAqIEBBcnJheSBPZiBQcm9wZXJ0eVxuICAgICAgKiBAdHJhbnMgWyfliJ0nLCfljYEnLCflu78nLCfljYUnXVxuICAgICAgKiBAcmV0dXJuIENuIHN0cmluZ1xuICAgICAgKi9cbiAgblN0cjI6IFsnXFx1NTIxZCcsICdcXHU1MzQxJywgJ1xcdTVlZmYnLCAnXFx1NTM0NSddLFxuXG4gIC8qKlxuICAgICAgKiDmnIjku73ovazlhpzljobnp7DlkbzpgJ/mn6XooahcbiAgICAgICogQEFycmF5IE9mIFByb3BlcnR5XG4gICAgICAqIEB0cmFucyBbJ+atoycsJ+S4gCcsJ+S6jCcsJ+S4iScsJ+WbmycsJ+S6lCcsJ+WFrScsJ+S4gycsJ+WFqycsJ+S5nScsJ+WNgScsJ+WGrCcsJ+iFiiddXG4gICAgICAqIEByZXR1cm4gQ24gc3RyaW5nXG4gICAgICAqL1xuICBuU3RyMzogWydcXHU2YjYzJywgJ1xcdTRlOGMnLCAnXFx1NGUwOScsICdcXHU1NmRiJywgJ1xcdTRlOTQnLCAnXFx1NTE2ZCcsICdcXHU0ZTAzJywgJ1xcdTUxNmInLCAnXFx1NGU1ZCcsICdcXHU1MzQxJywgJ1xcdTUxYWMnLCAnXFx1ODE0YSddLFxuXG4gIC8qKlxuICAgICAgKiDov5Tlm57lhpzljoZ55bm05LiA5pW05bm055qE5oC75aSp5pWwXG4gICAgICAqIEBwYXJhbSBsdW5hciBZZWFyXG4gICAgICAqIEByZXR1cm4gTnVtYmVyXG4gICAgICAqIEBlZzp2YXIgY291bnQgPSBjYWxlbmRhci5sWWVhckRheXMoMTk4NykgOy8vY291bnQ9Mzg3XG4gICAgICAqL1xuICBsWWVhckRheXM6IGZ1bmN0aW9uICh5KSB7XG4gICAgdmFyIGk7IHZhciBzdW0gPSAzNDhcbiAgICBmb3IgKGkgPSAweDgwMDA7IGkgPiAweDg7IGkgPj49IDEpIHsgc3VtICs9ICh0aGlzLmx1bmFySW5mb1t5IC0gMTkwMF0gJiBpKSA/IDEgOiAwIH1cbiAgICByZXR1cm4gKHN1bSArIHRoaXMubGVhcERheXMoeSkpXG4gIH0sXG5cbiAgLyoqXG4gICAgICAqIOi/lOWbnuWGnOWOhnnlubTpl7DmnIjmmK/lk6rkuKrmnIjvvJvoi6V55bm05rKh5pyJ6Zew5pyIIOWImei/lOWbnjBcbiAgICAgICogQHBhcmFtIGx1bmFyIFllYXJcbiAgICAgICogQHJldHVybiBOdW1iZXIgKDAtMTIpXG4gICAgICAqIEBlZzp2YXIgbGVhcE1vbnRoID0gY2FsZW5kYXIubGVhcE1vbnRoKDE5ODcpIDsvL2xlYXBNb250aD02XG4gICAgICAqL1xuICBsZWFwTW9udGg6IGZ1bmN0aW9uICh5KSB7IC8vIOmXsOWtl+e8lueggSBcXHU5NWYwXG4gICAgcmV0dXJuICh0aGlzLmx1bmFySW5mb1t5IC0gMTkwMF0gJiAweGYpXG4gIH0sXG5cbiAgLyoqXG4gICAgICAqIOi/lOWbnuWGnOWOhnnlubTpl7DmnIjnmoTlpKnmlbAg6Iul6K+l5bm05rKh5pyJ6Zew5pyI5YiZ6L+U5ZueMFxuICAgICAgKiBAcGFyYW0gbHVuYXIgWWVhclxuICAgICAgKiBAcmV0dXJuIE51bWJlciAoMOOAgTI544CBMzApXG4gICAgICAqIEBlZzp2YXIgbGVhcE1vbnRoRGF5ID0gY2FsZW5kYXIubGVhcERheXMoMTk4NykgOy8vbGVhcE1vbnRoRGF5PTI5XG4gICAgICAqL1xuICBsZWFwRGF5czogZnVuY3Rpb24gKHkpIHtcbiAgICBpZiAodGhpcy5sZWFwTW9udGgoeSkpIHtcbiAgICAgIHJldHVybiAoKHRoaXMubHVuYXJJbmZvW3kgLSAxOTAwXSAmIDB4MTAwMDApID8gMzAgOiAyOSlcbiAgICB9XG4gICAgcmV0dXJuICgwKVxuICB9LFxuXG4gIC8qKlxuICAgICAgKiDov5Tlm57lhpzljoZ55bm0beaciO+8iOmdnumXsOaciO+8ieeahOaAu+WkqeaVsO+8jOiuoeeul23kuLrpl7DmnIjml7bnmoTlpKnmlbDor7fkvb/nlKhsZWFwRGF5c+aWueazlVxuICAgICAgKiBAcGFyYW0gbHVuYXIgWWVhclxuICAgICAgKiBAcmV0dXJuIE51bWJlciAoLTHjgIEyOeOAgTMwKVxuICAgICAgKiBAZWc6dmFyIE1vbnRoRGF5ID0gY2FsZW5kYXIubW9udGhEYXlzKDE5ODcsOSkgOy8vTW9udGhEYXk9MjlcbiAgICAgICovXG4gIG1vbnRoRGF5czogZnVuY3Rpb24gKHksIG0pIHtcbiAgICBpZiAobSA+IDEyIHx8IG0gPCAxKSB7IHJldHVybiAtMSB9Ly8g5pyI5Lu95Y+C5pWw5LuOMeiHszEy77yM5Y+C5pWw6ZSZ6K+v6L+U5ZueLTFcbiAgICByZXR1cm4gKCh0aGlzLmx1bmFySW5mb1t5IC0gMTkwMF0gJiAoMHgxMDAwMCA+PiBtKSkgPyAzMCA6IDI5KVxuICB9LFxuXG4gIC8qKlxuICAgICAgKiDov5Tlm57lhazljoYoISl55bm0beaciOeahOWkqeaVsFxuICAgICAgKiBAcGFyYW0gc29sYXIgWWVhclxuICAgICAgKiBAcmV0dXJuIE51bWJlciAoLTHjgIEyOOOAgTI544CBMzDjgIEzMSlcbiAgICAgICogQGVnOnZhciBzb2xhck1vbnRoRGF5ID0gY2FsZW5kYXIubGVhcERheXMoMTk4NykgOy8vc29sYXJNb250aERheT0zMFxuICAgICAgKi9cbiAgc29sYXJEYXlzOiBmdW5jdGlvbiAoeSwgbSkge1xuICAgIGlmIChtID4gMTIgfHwgbSA8IDEpIHsgcmV0dXJuIC0xIH0gLy8g6Iul5Y+C5pWw6ZSZ6K+vIOi/lOWbni0xXG4gICAgdmFyIG1zID0gbSAtIDFcbiAgICBpZiAobXMgPT0gMSkgeyAvLyAy5pyI5Lu955qE6Zew5bmz6KeE5b6L5rWL566X5ZCO56Gu6K6k6L+U5ZueMjjmiJYyOVxuICAgICAgcmV0dXJuICgoKHkgJSA0ID09IDApICYmICh5ICUgMTAwICE9IDApIHx8ICh5ICUgNDAwID09IDApKSA/IDI5IDogMjgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAodGhpcy5zb2xhck1vbnRoW21zXSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAgICog5Yac5Y6G5bm05Lu96L2s5o2i5Li65bmy5pSv57qq5bm0XG4gICAgICogQHBhcmFtICBsWWVhciDlhpzljoblubTnmoTlubTku73mlbBcbiAgICAgKiBAcmV0dXJuIENuIHN0cmluZ1xuICAgICAqL1xuICB0b0dhblpoaVllYXI6IGZ1bmN0aW9uIChsWWVhcikge1xuICAgIHZhciBnYW5LZXkgPSAobFllYXIgLSAzKSAlIDEwXG4gICAgdmFyIHpoaUtleSA9IChsWWVhciAtIDMpICUgMTJcbiAgICBpZiAoZ2FuS2V5ID09IDApIGdhbktleSA9IDEwLy8g5aaC5p6c5L2Z5pWw5Li6MOWImeS4uuacgOWQjuS4gOS4quWkqeW5slxuICAgIGlmICh6aGlLZXkgPT0gMCkgemhpS2V5ID0gMTIvLyDlpoLmnpzkvZnmlbDkuLow5YiZ5Li65pyA5ZCO5LiA5Liq5Zyw5pSvXG4gICAgcmV0dXJuIHRoaXMuR2FuW2dhbktleSAtIDFdICsgdGhpcy5aaGlbemhpS2V5IC0gMV1cbiAgfSxcblxuICAvKipcbiAgICAgKiDlhazljobmnIjjgIHml6XliKTmlq3miYDlsZ7mmJ/luqdcbiAgICAgKiBAcGFyYW0gIGNNb250aCBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICBjRGF5IFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcmV0dXJuIENuIHN0cmluZ1xuICAgICAqL1xuICB0b0FzdHJvOiBmdW5jdGlvbiAoY01vbnRoLCBjRGF5KSB7XG4gICAgdmFyIHMgPSAnXFx1OWI1NFxcdTdmYWZcXHU2YzM0XFx1NzRmNlxcdTUzY2NcXHU5YzdjXFx1NzY3ZFxcdTdmOGFcXHU5MWQxXFx1NzI1YlxcdTUzY2NcXHU1YjUwXFx1NWRlOFxcdTg3ZjlcXHU3MmVlXFx1NWI1MFxcdTU5MDRcXHU1OTczXFx1NTkyOVxcdTc5ZTRcXHU1OTI5XFx1ODc0ZVxcdTVjMDRcXHU2MjRiXFx1OWI1NFxcdTdmYWYnXG4gICAgdmFyIGFyciA9IFsyMCwgMTksIDIxLCAyMSwgMjEsIDIyLCAyMywgMjMsIDIzLCAyMywgMjIsIDIyXVxuICAgIHJldHVybiBzLnN1YnN0cihjTW9udGggKiAyIC0gKGNEYXkgPCBhcnJbY01vbnRoIC0gMV0gPyAyIDogMCksIDIpICsgJ1xcdTVlYTcnLy8g5bqnXG4gIH0sXG5cbiAgLyoqXG4gICAgICAqIOS8oOWFpW9mZnNldOWBj+enu+mHj+i/lOWbnuW5suaUr1xuICAgICAgKiBAcGFyYW0gb2Zmc2V0IOebuOWvueeUsuWtkOeahOWBj+enu+mHj1xuICAgICAgKiBAcmV0dXJuIENuIHN0cmluZ1xuICAgICAgKi9cbiAgdG9HYW5aaGk6IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICByZXR1cm4gdGhpcy5HYW5bb2Zmc2V0ICUgMTBdICsgdGhpcy5aaGlbb2Zmc2V0ICUgMTJdXG4gIH0sXG5cbiAgLyoqXG4gICAgICAqIOS8oOWFpeWFrOWOhighKXnlubTojrflvpfor6XlubTnrKxu5Liq6IqC5rCU55qE5YWs5Y6G5pel5pyfXG4gICAgICAqIEBwYXJhbSB55YWs5Y6G5bm0KDE5MDAtMjEwMCnvvJtu5LqM5Y2B5Zub6IqC5rCU5Lit55qE56ys5Yeg5Liq6IqC5rCUKDF+MjQp77yb5LuObj0xKOWwj+WvkinnrpfotbdcbiAgICAgICogQHJldHVybiBkYXkgTnVtYmVyXG4gICAgICAqIEBlZzp2YXIgXzI0ID0gY2FsZW5kYXIuZ2V0VGVybSgxOTg3LDMpIDsvL18yND00O+aEj+WNszE5ODflubQy5pyINOaXpeeri+aYpVxuICAgICAgKi9cbiAgZ2V0VGVybTogZnVuY3Rpb24gKHksIG4pIHtcbiAgICBpZiAoeSA8IDE5MDAgfHwgeSA+IDIxMDApIHsgcmV0dXJuIC0xIH1cbiAgICBpZiAobiA8IDEgfHwgbiA+IDI0KSB7IHJldHVybiAtMSB9XG4gICAgdmFyIF90YWJsZSA9IHRoaXMuc1Rlcm1JbmZvW3kgLSAxOTAwXVxuICAgIHZhciBfaW5mbyA9IFtcbiAgICAgIHBhcnNlSW50KCcweCcgKyBfdGFibGUuc3Vic3RyKDAsIDUpKS50b1N0cmluZygpLFxuICAgICAgcGFyc2VJbnQoJzB4JyArIF90YWJsZS5zdWJzdHIoNSwgNSkpLnRvU3RyaW5nKCksXG4gICAgICBwYXJzZUludCgnMHgnICsgX3RhYmxlLnN1YnN0cigxMCwgNSkpLnRvU3RyaW5nKCksXG4gICAgICBwYXJzZUludCgnMHgnICsgX3RhYmxlLnN1YnN0cigxNSwgNSkpLnRvU3RyaW5nKCksXG4gICAgICBwYXJzZUludCgnMHgnICsgX3RhYmxlLnN1YnN0cigyMCwgNSkpLnRvU3RyaW5nKCksXG4gICAgICBwYXJzZUludCgnMHgnICsgX3RhYmxlLnN1YnN0cigyNSwgNSkpLnRvU3RyaW5nKClcbiAgICBdXG4gICAgdmFyIF9jYWxkYXkgPSBbXG4gICAgICBfaW5mb1swXS5zdWJzdHIoMCwgMSksXG4gICAgICBfaW5mb1swXS5zdWJzdHIoMSwgMiksXG4gICAgICBfaW5mb1swXS5zdWJzdHIoMywgMSksXG4gICAgICBfaW5mb1swXS5zdWJzdHIoNCwgMiksXG5cbiAgICAgIF9pbmZvWzFdLnN1YnN0cigwLCAxKSxcbiAgICAgIF9pbmZvWzFdLnN1YnN0cigxLCAyKSxcbiAgICAgIF9pbmZvWzFdLnN1YnN0cigzLCAxKSxcbiAgICAgIF9pbmZvWzFdLnN1YnN0cig0LCAyKSxcblxuICAgICAgX2luZm9bMl0uc3Vic3RyKDAsIDEpLFxuICAgICAgX2luZm9bMl0uc3Vic3RyKDEsIDIpLFxuICAgICAgX2luZm9bMl0uc3Vic3RyKDMsIDEpLFxuICAgICAgX2luZm9bMl0uc3Vic3RyKDQsIDIpLFxuXG4gICAgICBfaW5mb1szXS5zdWJzdHIoMCwgMSksXG4gICAgICBfaW5mb1szXS5zdWJzdHIoMSwgMiksXG4gICAgICBfaW5mb1szXS5zdWJzdHIoMywgMSksXG4gICAgICBfaW5mb1szXS5zdWJzdHIoNCwgMiksXG5cbiAgICAgIF9pbmZvWzRdLnN1YnN0cigwLCAxKSxcbiAgICAgIF9pbmZvWzRdLnN1YnN0cigxLCAyKSxcbiAgICAgIF9pbmZvWzRdLnN1YnN0cigzLCAxKSxcbiAgICAgIF9pbmZvWzRdLnN1YnN0cig0LCAyKSxcblxuICAgICAgX2luZm9bNV0uc3Vic3RyKDAsIDEpLFxuICAgICAgX2luZm9bNV0uc3Vic3RyKDEsIDIpLFxuICAgICAgX2luZm9bNV0uc3Vic3RyKDMsIDEpLFxuICAgICAgX2luZm9bNV0uc3Vic3RyKDQsIDIpXG4gICAgXVxuICAgIHJldHVybiBwYXJzZUludChfY2FsZGF5W24gLSAxXSlcbiAgfSxcblxuICAvKipcbiAgICAgICog5Lyg5YWl5Yac5Y6G5pWw5a2X5pyI5Lu96L+U5Zue5rGJ6K+t6YCa5L+X6KGo56S65rOVXG4gICAgICAqIEBwYXJhbSBsdW5hciBtb250aFxuICAgICAgKiBAcmV0dXJuIENuIHN0cmluZ1xuICAgICAgKiBAZWc6dmFyIGNuTW9udGggPSBjYWxlbmRhci50b0NoaW5hTW9udGgoMTIpIDsvL2NuTW9udGg9J+iFiuaciCdcbiAgICAgICovXG4gIHRvQ2hpbmFNb250aDogZnVuY3Rpb24gKG0pIHsgLy8g5pyIID0+IFxcdTY3MDhcbiAgICBpZiAobSA+IDEyIHx8IG0gPCAxKSB7IHJldHVybiAtMSB9IC8vIOiLpeWPguaVsOmUmeivryDov5Tlm54tMVxuICAgIHZhciBzID0gdGhpcy5uU3RyM1ttIC0gMV1cbiAgICBzICs9ICdcXHU2NzA4Jy8vIOWKoOS4iuaciOWtl1xuICAgIHJldHVybiBzXG4gIH0sXG5cbiAgLyoqXG4gICAgICAqIOS8oOWFpeWGnOWOhuaXpeacn+aVsOWtl+i/lOWbnuaxieWtl+ihqOekuuazlVxuICAgICAgKiBAcGFyYW0gbHVuYXIgZGF5XG4gICAgICAqIEByZXR1cm4gQ24gc3RyaW5nXG4gICAgICAqIEBlZzp2YXIgY25EYXkgPSBjYWxlbmRhci50b0NoaW5hRGF5KDIxKSA7Ly9jbk1vbnRoPSflu7/kuIAnXG4gICAgICAqL1xuICB0b0NoaW5hRGF5OiBmdW5jdGlvbiAoZCkgeyAvLyDml6UgPT4gXFx1NjVlNVxuICAgIHZhciBzXG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICBzID0gJ1xcdTUyMWRcXHU1MzQxJzsgYnJlYWtcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIHMgPSAnXFx1NGU4Y1xcdTUzNDEnOyBicmVha1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAzMDpcbiAgICAgICAgcyA9ICdcXHU0ZTA5XFx1NTM0MSc7IGJyZWFrXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgcyA9IHRoaXMublN0cjJbTWF0aC5mbG9vcihkIC8gMTApXVxuICAgICAgICBzICs9IHRoaXMublN0cjFbZCAlIDEwXVxuICAgIH1cbiAgICByZXR1cm4gKHMpXG4gIH0sXG5cbiAgLyoqXG4gICAgICAqIOW5tOS7vei9rOeUn+iCllsh5LuF6IO95aSn6Ie06L2s5o2iXSA9PiDnsr7noa7liJLliIbnlJ/ogpbliIbnlYznur/mmK/igJznq4vmmKXigJ1cbiAgICAgICogQHBhcmFtIHkgeWVhclxuICAgICAgKiBAcmV0dXJuIENuIHN0cmluZ1xuICAgICAgKiBAZWc6dmFyIGFuaW1hbCA9IGNhbGVuZGFyLmdldEFuaW1hbCgxOTg3KSA7Ly9hbmltYWw9J+WFlCdcbiAgICAgICovXG4gIGdldEFuaW1hbDogZnVuY3Rpb24gKHkpIHtcbiAgICByZXR1cm4gdGhpcy5BbmltYWxzWyh5IC0gNCkgJSAxMl1cbiAgfSxcblxuICAvKipcbiAgICAgICog5Lyg5YWl6Ziz5Y6G5bm05pyI5pel6I635b6X6K+m57uG55qE5YWs5Y6G44CB5Yac5Y6Gb2JqZWN05L+h5oGvIDw9PkpTT05cbiAgICAgICogQHBhcmFtIHkgIHNvbGFyIHllYXJcbiAgICAgICogQHBhcmFtIG0gIHNvbGFyIG1vbnRoXG4gICAgICAqIEBwYXJhbSBkICBzb2xhciBkYXlcbiAgICAgICogQHJldHVybiBKU09OIG9iamVjdFxuICAgICAgKiBAZWc6Y29uc29sZS5sb2coY2FsZW5kYXIuc29sYXIybHVuYXIoMTk4NywxMSwwMSkpO1xuICAgICAgKi9cbiAgc29sYXIybHVuYXI6IGZ1bmN0aW9uICh5LCBtLCBkKSB7IC8vIOWPguaVsOWMuumXtDE5MDAuMS4zMX4yMTAwLjEyLjMxXG4gICAgLy8g5bm05Lu96ZmQ5a6a44CB5LiK6ZmQXG4gICAgaWYgKHkgPCAxOTAwIHx8IHkgPiAyMTAwKSB7XG4gICAgICByZXR1cm4gLTEvLyB1bmRlZmluZWTovazmjaLkuLrmlbDlrZflj5jkuLpOYU5cbiAgICB9XG4gICAgLy8g5YWs5Y6G5Lyg5Y+C5pyA5LiL6ZmQXG4gICAgaWYgKHkgPT0gMTkwMCAmJiBtID09IDEgJiYgZCA8IDMxKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgLy8g5pyq5Lyg5Y+CICDojrflvpflvZPlpKlcbiAgICBpZiAoIXkpIHtcbiAgICAgIHZhciBvYmpEYXRlID0gbmV3IERhdGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb2JqRGF0ZSA9IG5ldyBEYXRlKHksIHBhcnNlSW50KG0pIC0gMSwgZClcbiAgICB9XG4gICAgdmFyIGk7IHZhciBsZWFwID0gMDsgdmFyIHRlbXAgPSAwXG4gICAgLy8g5L+u5q2jeW1k5Y+C5pWwXG4gICAgdmFyIHkgPSBvYmpEYXRlLmdldEZ1bGxZZWFyKClcbiAgICB2YXIgbSA9IG9iakRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICB2YXIgZCA9IG9iakRhdGUuZ2V0RGF0ZSgpXG4gICAgdmFyIG9mZnNldCA9IChEYXRlLlVUQyhvYmpEYXRlLmdldEZ1bGxZZWFyKCksIG9iakRhdGUuZ2V0TW9udGgoKSwgb2JqRGF0ZS5nZXREYXRlKCkpIC0gRGF0ZS5VVEMoMTkwMCwgMCwgMzEpKSAvIDg2NDAwMDAwXG4gICAgZm9yIChpID0gMTkwMDsgaSA8IDIxMDEgJiYgb2Zmc2V0ID4gMDsgaSsrKSB7XG4gICAgICB0ZW1wID0gdGhpcy5sWWVhckRheXMoaSlcbiAgICAgIG9mZnNldCAtPSB0ZW1wXG4gICAgfVxuICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICBvZmZzZXQgKz0gdGVtcDsgaS0tXG4gICAgfVxuXG4gICAgLy8g5piv5ZCm5LuK5aSpXG4gICAgdmFyIGlzVG9kYXlPYmogPSBuZXcgRGF0ZSgpXG4gICAgdmFyIGlzVG9kYXkgPSBmYWxzZVxuICAgIGlmIChpc1RvZGF5T2JqLmdldEZ1bGxZZWFyKCkgPT0geSAmJiBpc1RvZGF5T2JqLmdldE1vbnRoKCkgKyAxID09IG0gJiYgaXNUb2RheU9iai5nZXREYXRlKCkgPT0gZCkge1xuICAgICAgaXNUb2RheSA9IHRydWVcbiAgICB9XG4gICAgLy8g5pif5pyf5YegXG4gICAgdmFyIG5XZWVrID0gb2JqRGF0ZS5nZXREYXkoKVxuICAgIHZhciBjV2VlayA9IHRoaXMublN0cjFbbldlZWtdXG4gICAgLy8g5pWw5a2X6KGo56S65ZGo5Yeg6aG65bqU5aSp5pyd5ZGo5LiA5byA5aeL55qE5oOv5L6LXG4gICAgaWYgKG5XZWVrID09IDApIHtcbiAgICAgIG5XZWVrID0gN1xuICAgIH1cbiAgICAvLyDlhpzljoblubRcbiAgICB2YXIgeWVhciA9IGlcbiAgICB2YXIgbGVhcCA9IHRoaXMubGVhcE1vbnRoKGkpIC8vIOmXsOWTquS4quaciFxuICAgIHZhciBpc0xlYXAgPSBmYWxzZVxuXG4gICAgLy8g5pWI6aqM6Zew5pyIXG4gICAgZm9yIChpID0gMTsgaSA8IDEzICYmIG9mZnNldCA+IDA7IGkrKykge1xuICAgICAgLy8g6Zew5pyIXG4gICAgICBpZiAobGVhcCA+IDAgJiYgaSA9PSAobGVhcCArIDEpICYmIGlzTGVhcCA9PSBmYWxzZSkge1xuICAgICAgICAtLWlcbiAgICAgICAgaXNMZWFwID0gdHJ1ZTsgdGVtcCA9IHRoaXMubGVhcERheXMoeWVhcikgLy8g6K6h566X5Yac5Y6G6Zew5pyI5aSp5pWwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wID0gdGhpcy5tb250aERheXMoeWVhciwgaSkvLyDorqHnrpflhpzljobmma7pgJrmnIjlpKnmlbBcbiAgICAgIH1cbiAgICAgIC8vIOino+mZpOmXsOaciFxuICAgICAgaWYgKGlzTGVhcCA9PSB0cnVlICYmIGkgPT0gKGxlYXAgKyAxKSkgeyBpc0xlYXAgPSBmYWxzZSB9XG4gICAgICBvZmZzZXQgLT0gdGVtcFxuICAgIH1cbiAgICAvLyDpl7DmnIjlr7zoh7TmlbDnu4TkuIvmoIfph43lj6Dlj5blj41cbiAgICBpZiAob2Zmc2V0ID09IDAgJiYgbGVhcCA+IDAgJiYgaSA9PSBsZWFwICsgMSkge1xuICAgICAgaWYgKGlzTGVhcCkge1xuICAgICAgICBpc0xlYXAgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNMZWFwID0gdHJ1ZTsgLS1pXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICBvZmZzZXQgKz0gdGVtcDsgLS1pXG4gICAgfVxuICAgIC8vIOWGnOWOhuaciFxuICAgIHZhciBtb250aCA9IGlcbiAgICAvLyDlhpzljobml6VcbiAgICB2YXIgZGF5ID0gb2Zmc2V0ICsgMVxuICAgIC8vIOWkqeW5suWcsOaUr+WkhOeQhlxuICAgIHZhciBzbSA9IG0gLSAxXG4gICAgdmFyIGd6WSA9IHRoaXMudG9HYW5aaGlZZWFyKHllYXIpXG5cbiAgICAvLyDlvZPmnIjnmoTkuKTkuKroioLmsJRcbiAgICAvLyBidWdmaXgtMjAxNy03LTI0IDExOjAzOjM4IHVzZSBsdW5hciBZZWFyIFBhcmFtIGB5YCBOb3QgYHllYXJgXG4gICAgdmFyIGZpcnN0Tm9kZSA9IHRoaXMuZ2V0VGVybSh5LCAobSAqIDIgLSAxKSkvLyDov5Tlm57lvZPmnIjjgIzoioLjgI3kuLrlh6Dml6XlvIDlp4tcbiAgICB2YXIgc2Vjb25kTm9kZSA9IHRoaXMuZ2V0VGVybSh5LCAobSAqIDIpKS8vIOi/lOWbnuW9k+aciOOAjOiKguOAjeS4uuWHoOaXpeW8gOWni1xuXG4gICAgLy8g5L6d5o2uMTLoioLmsJTkv67mraPlubLmlK/mnIhcbiAgICB2YXIgZ3pNID0gdGhpcy50b0dhblpoaSgoeSAtIDE5MDApICogMTIgKyBtICsgMTEpXG4gICAgaWYgKGQgPj0gZmlyc3ROb2RlKSB7XG4gICAgICBnek0gPSB0aGlzLnRvR2FuWmhpKCh5IC0gMTkwMCkgKiAxMiArIG0gKyAxMilcbiAgICB9XG5cbiAgICAvLyDkvKDlhaXnmoTml6XmnJ/nmoToioLmsJTkuI7lkKZcbiAgICB2YXIgaXNUZXJtID0gZmFsc2VcbiAgICB2YXIgVGVybSA9IG51bGxcbiAgICBpZiAoZmlyc3ROb2RlID09IGQpIHtcbiAgICAgIGlzVGVybSA9IHRydWVcbiAgICAgIFRlcm0gPSB0aGlzLnNvbGFyVGVybVttICogMiAtIDJdXG4gICAgfVxuICAgIGlmIChzZWNvbmROb2RlID09IGQpIHtcbiAgICAgIGlzVGVybSA9IHRydWVcbiAgICAgIFRlcm0gPSB0aGlzLnNvbGFyVGVybVttICogMiAtIDFdXG4gICAgfVxuICAgIC8vIOaXpeafsSDlvZPmnIjkuIDml6XkuI4gMTkwMC8xLzEg55u45beu5aSp5pWwXG4gICAgdmFyIGRheUN5Y2xpY2FsID0gRGF0ZS5VVEMoeSwgc20sIDEsIDAsIDAsIDAsIDApIC8gODY0MDAwMDAgKyAyNTU2NyArIDEwXG4gICAgdmFyIGd6RCA9IHRoaXMudG9HYW5aaGkoZGF5Q3ljbGljYWwgKyBkIC0gMSlcbiAgICAvLyDor6Xml6XmnJ/miYDlsZ7nmoTmmJ/luqdcbiAgICB2YXIgYXN0cm8gPSB0aGlzLnRvQXN0cm8obSwgZClcblxuICAgIHJldHVybiB7ICdsWWVhcic6IHllYXIsICdsTW9udGgnOiBtb250aCwgJ2xEYXknOiBkYXksICdBbmltYWwnOiB0aGlzLmdldEFuaW1hbCh5ZWFyKSwgJ0lNb250aENuJzogKGlzTGVhcCA/ICdcXHU5NWYwJyA6ICcnKSArIHRoaXMudG9DaGluYU1vbnRoKG1vbnRoKSwgJ0lEYXlDbic6IHRoaXMudG9DaGluYURheShkYXkpLCAnY1llYXInOiB5LCAnY01vbnRoJzogbSwgJ2NEYXknOiBkLCAnZ3pZZWFyJzogZ3pZLCAnZ3pNb250aCc6IGd6TSwgJ2d6RGF5JzogZ3pELCAnaXNUb2RheSc6IGlzVG9kYXksICdpc0xlYXAnOiBpc0xlYXAsICduV2Vlayc6IG5XZWVrLCAnbmNXZWVrJzogJ1xcdTY2MWZcXHU2NzFmJyArIGNXZWVrLCAnaXNUZXJtJzogaXNUZXJtLCAnVGVybSc6IFRlcm0sICdhc3Rybyc6IGFzdHJvIH1cbiAgfSxcblxuICAvKipcbiAgICAgICog5Lyg5YWl5Yac5Y6G5bm05pyI5pel5Lul5Y+K5Lyg5YWl55qE5pyI5Lu95piv5ZCm6Zew5pyI6I635b6X6K+m57uG55qE5YWs5Y6G44CB5Yac5Y6Gb2JqZWN05L+h5oGvIDw9PkpTT05cbiAgICAgICogQHBhcmFtIHkgIGx1bmFyIHllYXJcbiAgICAgICogQHBhcmFtIG0gIGx1bmFyIG1vbnRoXG4gICAgICAqIEBwYXJhbSBkICBsdW5hciBkYXlcbiAgICAgICogQHBhcmFtIGlzTGVhcE1vbnRoICBsdW5hciBtb250aCBpcyBsZWFwIG9yIG5vdC5b5aaC5p6c5piv5Yac5Y6G6Zew5pyI56ys5Zub5Liq5Y+C5pWw6LWL5YC8dHJ1ZeWNs+WPr11cbiAgICAgICogQHJldHVybiBKU09OIG9iamVjdFxuICAgICAgKiBAZWc6Y29uc29sZS5sb2coY2FsZW5kYXIubHVuYXIyc29sYXIoMTk4Nyw5LDEwKSk7XG4gICAgICAqL1xuICBsdW5hcjJzb2xhcjogZnVuY3Rpb24gKHksIG0sIGQsIGlzTGVhcE1vbnRoKSB7IC8vIOWPguaVsOWMuumXtDE5MDAuMS4zMX4yMTAwLjEyLjFcbiAgICB2YXIgaXNMZWFwTW9udGggPSAhIWlzTGVhcE1vbnRoXG4gICAgdmFyIGxlYXBPZmZzZXQgPSAwXG4gICAgdmFyIGxlYXBNb250aCA9IHRoaXMubGVhcE1vbnRoKHkpXG4gICAgdmFyIGxlYXBEYXkgPSB0aGlzLmxlYXBEYXlzKHkpXG4gICAgaWYgKGlzTGVhcE1vbnRoICYmIChsZWFwTW9udGggIT0gbSkpIHsgcmV0dXJuIC0xIH0vLyDkvKDlj4LopoHmsYLorqHnrpfor6Xpl7DmnIjlhazljoYg5L2G6K+l5bm05b6X5Ye655qE6Zew5pyI5LiO5Lyg5Y+C55qE5pyI5Lu95bm25LiN5ZCMXG4gICAgaWYgKHkgPT0gMjEwMCAmJiBtID09IDEyICYmIGQgPiAxIHx8IHkgPT0gMTkwMCAmJiBtID09IDEgJiYgZCA8IDMxKSB7IHJldHVybiAtMSB9Ly8g6LaF5Ye65LqG5pyA5aSn5p6B6ZmQ5YC8XG4gICAgdmFyIGRheSA9IHRoaXMubW9udGhEYXlzKHksIG0pXG4gICAgdmFyIF9kYXkgPSBkYXlcbiAgICAvLyBidWdGaXggMjAxNi05LTI1XG4gICAgLy8gaWYgbW9udGggaXMgbGVhcCwgX2RheSB1c2UgbGVhcERheXMgbWV0aG9kXG4gICAgaWYgKGlzTGVhcE1vbnRoKSB7XG4gICAgICBfZGF5ID0gdGhpcy5sZWFwRGF5cyh5LCBtKVxuICAgIH1cbiAgICBpZiAoeSA8IDE5MDAgfHwgeSA+IDIxMDAgfHwgZCA+IF9kYXkpIHsgcmV0dXJuIC0xIH0vLyDlj4LmlbDlkIjms5XmgKfmlYjpqoxcblxuICAgIC8vIOiuoeeul+WGnOWOhueahOaXtumXtOW3rlxuICAgIHZhciBvZmZzZXQgPSAwXG4gICAgZm9yICh2YXIgaSA9IDE5MDA7IGkgPCB5OyBpKyspIHtcbiAgICAgIG9mZnNldCArPSB0aGlzLmxZZWFyRGF5cyhpKVxuICAgIH1cbiAgICB2YXIgbGVhcCA9IDA7IHZhciBpc0FkZCA9IGZhbHNlXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtOyBpKyspIHtcbiAgICAgIGxlYXAgPSB0aGlzLmxlYXBNb250aCh5KVxuICAgICAgaWYgKCFpc0FkZCkgeyAvLyDlpITnkIbpl7DmnIhcbiAgICAgICAgaWYgKGxlYXAgPD0gaSAmJiBsZWFwID4gMCkge1xuICAgICAgICAgIG9mZnNldCArPSB0aGlzLmxlYXBEYXlzKHkpOyBpc0FkZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb2Zmc2V0ICs9IHRoaXMubW9udGhEYXlzKHksIGkpXG4gICAgfVxuICAgIC8vIOi9rOaNoumXsOaciOWGnOWOhiDpnIDooaXlhYXor6XlubTpl7DmnIjnmoTliY3kuIDkuKrmnIjnmoTml7blt65cbiAgICBpZiAoaXNMZWFwTW9udGgpIHsgb2Zmc2V0ICs9IGRheSB9XG4gICAgLy8gMTkwMOW5tOWGnOWOhuato+aciOS4gOaXpeeahOWFrOWOhuaXtumXtOS4ujE5MDDlubQx5pyIMzDml6Uw5pe2MOWIhjDnp5Io6K+l5pe26Ze05Lmf5piv5pys5Yac5Y6G55qE5pyA5byA5aeL6LW35aeL54K5KVxuICAgIHZhciBzdG1hcCA9IERhdGUuVVRDKDE5MDAsIDEsIDMwLCAwLCAwLCAwKVxuICAgIHZhciBjYWxPYmogPSBuZXcgRGF0ZSgob2Zmc2V0ICsgZCAtIDMxKSAqIDg2NDAwMDAwICsgc3RtYXApXG4gICAgdmFyIGNZID0gY2FsT2JqLmdldFVUQ0Z1bGxZZWFyKClcbiAgICB2YXIgY00gPSBjYWxPYmouZ2V0VVRDTW9udGgoKSArIDFcbiAgICB2YXIgY0QgPSBjYWxPYmouZ2V0VVRDRGF0ZSgpXG5cbiAgICByZXR1cm4gdGhpcy5zb2xhcjJsdW5hcihjWSwgY00sIGNEKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGVuZGFyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNTIwNzRiOCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWNhbGVuZGFyLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLWNhbGVuZGFyLWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjUyMDc0Yjgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1jYWxlbmRhci1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1MjA3NGI4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI1MjA3NGI4XCIsXG4gIFwiNGRkOWU1YTBcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvWUYvd2ViL3VuaWFwcC9jb21wb25lbnRzL3VuaS1jYWxlbmRhci91bmktY2FsZW5kYXItaXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWNhbGVuZGFyLWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1MjA3NGI4JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3hcIl0sXG4gICAgICBjbGFzczoge1xuICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1kaXNhYmxlXCI6IF92bS53ZWVrcy5kaXNhYmxlLFxuICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1pc0RheVwiOlxuICAgICAgICAgIF92bS5jYWxlbmRhci5mdWxsRGF0ZSA9PT0gX3ZtLndlZWtzLmZ1bGxEYXRlICYmIF92bS53ZWVrcy5pc0RheSxcbiAgICAgICAgXCJ1bmktY2FsZW5kYXItaXRlbS0tY2hlY2tlZFwiOlxuICAgICAgICAgIF92bS5jYWxlbmRhci5mdWxsRGF0ZSA9PT0gX3ZtLndlZWtzLmZ1bGxEYXRlICYmICFfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLW11bHRpcGxlXCI6IF92bS53ZWVrcy5tdWx0aXBsZVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uY2hvaWNlRGF0ZShfdm0ud2Vla3MpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtYm94LWl0ZW1cIl0gfSwgW1xuICAgICAgICBfdm0uc2VsZWN0ZWQgJiYgX3ZtLndlZWtzLmV4dHJhSW5mb1xuICAgICAgICAgID8gX2MoXCJ1LXRleHRcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyLWl0ZW1fX3dlZWtzLWJveC1jaXJjbGVcIl1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWNhbGVuZGFyLWl0ZW1fX3dlZWtzLWJveC10ZXh0XCJdLFxuICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItaXRlbS0taXNEYXktdGV4dFwiOiBfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5XCI6XG4gICAgICAgICAgICAgICAgX3ZtLmNhbGVuZGFyLmZ1bGxEYXRlID09PSBfdm0ud2Vla3MuZnVsbERhdGUgJiYgX3ZtLndlZWtzLmlzRGF5LFxuICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1jaGVja2VkXCI6XG4gICAgICAgICAgICAgICAgX3ZtLmNhbGVuZGFyLmZ1bGxEYXRlID09PSBfdm0ud2Vla3MuZnVsbERhdGUgJiZcbiAgICAgICAgICAgICAgICAhX3ZtLndlZWtzLmlzRGF5LFxuICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1tdWx0aXBsZVwiOiBfdm0ud2Vla3MubXVsdGlwbGUsXG4gICAgICAgICAgICAgIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWRpc2FibGVcIjogX3ZtLndlZWtzLmRpc2FibGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS53ZWVrcy5kYXRlKSldXG4gICAgICAgICksXG4gICAgICAgICFfdm0ubHVuYXIgJiYgIV92bS53ZWVrcy5leHRyYUluZm8gJiYgX3ZtLndlZWtzLmlzRGF5XG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtbHVuYXItdGV4dFwiXSxcbiAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItaXRlbS0taXNEYXktdGV4dFwiOiBfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1pc0RheVwiOlxuICAgICAgICAgICAgICAgICAgICBfdm0uY2FsZW5kYXIuZnVsbERhdGUgPT09IF92bS53ZWVrcy5mdWxsRGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1jaGVja2VkXCI6XG4gICAgICAgICAgICAgICAgICAgIF92bS5jYWxlbmRhci5mdWxsRGF0ZSA9PT0gX3ZtLndlZWtzLmZ1bGxEYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICFfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1tdWx0aXBsZVwiOiBfdm0ud2Vla3MubXVsdGlwbGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLku4rlpKlcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLmx1bmFyICYmICFfdm0ud2Vla3MuZXh0cmFJbmZvXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtbHVuYXItdGV4dFwiXSxcbiAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItaXRlbS0taXNEYXktdGV4dFwiOiBfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1pc0RheVwiOlxuICAgICAgICAgICAgICAgICAgICBfdm0uY2FsZW5kYXIuZnVsbERhdGUgPT09IF92bS53ZWVrcy5mdWxsRGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1jaGVja2VkXCI6XG4gICAgICAgICAgICAgICAgICAgIF92bS5jYWxlbmRhci5mdWxsRGF0ZSA9PT0gX3ZtLndlZWtzLmZ1bGxEYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICFfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1tdWx0aXBsZVwiOiBfdm0ud2Vla3MubXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1kaXNhYmxlXCI6IF92bS53ZWVrcy5kaXNhYmxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBfdm0ud2Vla3MuaXNEYXlcbiAgICAgICAgICAgICAgICAgICAgICA/IFwi5LuK5aSpXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS53ZWVrcy5sdW5hci5JRGF5Q24gPT09IFwi5Yid5LiAXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF92bS53ZWVrcy5sdW5hci5JTW9udGhDblxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLndlZWtzLmx1bmFyLklEYXlDblxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS53ZWVrcy5leHRyYUluZm8gJiYgX3ZtLndlZWtzLmV4dHJhSW5mby5pbmZvXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtbHVuYXItdGV4dFwiXSxcbiAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItaXRlbS0tZXh0cmFcIjogX3ZtLndlZWtzLmV4dHJhSW5mby5pbmZvLFxuICAgICAgICAgICAgICAgICAgXCJ1bmktY2FsZW5kYXItaXRlbS0taXNEYXktdGV4dFwiOiBfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1pc0RheVwiOlxuICAgICAgICAgICAgICAgICAgICBfdm0uY2FsZW5kYXIuZnVsbERhdGUgPT09IF92bS53ZWVrcy5mdWxsRGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1jaGVja2VkXCI6XG4gICAgICAgICAgICAgICAgICAgIF92bS5jYWxlbmRhci5mdWxsRGF0ZSA9PT0gX3ZtLndlZWtzLmZ1bGxEYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICFfdm0ud2Vla3MuaXNEYXksXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1tdWx0aXBsZVwiOiBfdm0ud2Vla3MubXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgICBcInVuaS1jYWxlbmRhci1pdGVtLS1kaXNhYmxlXCI6IF92bS53ZWVrcy5kaXNhYmxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ud2Vla3MuZXh0cmFJbmZvLmluZm8pKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktY2FsZW5kYXItaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktY2FsZW5kYXItaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwidW5pLWNhbGVuZGFyLWl0ZW1fX3dlZWtzLWJveFwiIDpjbGFzcz1cIntcblx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWRpc2FibGUnOndlZWtzLmRpc2FibGUsXG5cdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1pc0RheSc6Y2FsZW5kYXIuZnVsbERhdGUgPT09IHdlZWtzLmZ1bGxEYXRlICYmIHdlZWtzLmlzRGF5LFxuXHRcdCd1bmktY2FsZW5kYXItaXRlbS0tY2hlY2tlZCc6KGNhbGVuZGFyLmZ1bGxEYXRlID09PSB3ZWVrcy5mdWxsRGF0ZSAmJiAhd2Vla3MuaXNEYXkpICxcblx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLW11bHRpcGxlJzogd2Vla3MubXVsdGlwbGVcblx0XHR9XCIgQGNsaWNrPVwiY2hvaWNlRGF0ZSh3ZWVrcylcIj5cblx0XHQ8dmlldyBjbGFzcz1cInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gtaXRlbVwiPlxuXHRcdFx0PHRleHQgdi1pZj1cInNlbGVjdGVkJiZ3ZWVrcy5leHRyYUluZm9cIiBjbGFzcz1cInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gtY2lyY2xlXCI+PC90ZXh0PlxuXHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtYm94LXRleHRcIiA6Y2xhc3M9XCJ7XG5cdFx0XHRcdCd1bmktY2FsZW5kYXItaXRlbS0taXNEYXktdGV4dCc6IHdlZWtzLmlzRGF5LFxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5JzpjYWxlbmRhci5mdWxsRGF0ZSA9PT0gd2Vla3MuZnVsbERhdGUgJiYgd2Vla3MuaXNEYXksXG5cdFx0XHRcdCd1bmktY2FsZW5kYXItaXRlbS0tY2hlY2tlZCc6Y2FsZW5kYXIuZnVsbERhdGUgPT09IHdlZWtzLmZ1bGxEYXRlICYmICF3ZWVrcy5pc0RheSxcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1tdWx0aXBsZSc6IHdlZWtzLm11bHRpcGxlLFxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWRpc2FibGUnOndlZWtzLmRpc2FibGUsXG5cdFx0XHRcdH1cIj57e3dlZWtzLmRhdGV9fTwvdGV4dD5cblx0XHRcdDx0ZXh0IHYtaWY9XCIhbHVuYXImJiF3ZWVrcy5leHRyYUluZm8gJiYgd2Vla3MuaXNEYXlcIiBjbGFzcz1cInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1sdW5hci10ZXh0XCIgOmNsYXNzPVwie1xuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5LXRleHQnOndlZWtzLmlzRGF5LFxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5JzpjYWxlbmRhci5mdWxsRGF0ZSA9PT0gd2Vla3MuZnVsbERhdGUgJiYgd2Vla3MuaXNEYXksXG5cdFx0XHRcdCd1bmktY2FsZW5kYXItaXRlbS0tY2hlY2tlZCc6Y2FsZW5kYXIuZnVsbERhdGUgPT09IHdlZWtzLmZ1bGxEYXRlICYmICF3ZWVrcy5pc0RheSxcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1tdWx0aXBsZSc6IHdlZWtzLm11bHRpcGxlLFxuXHRcdFx0XHR9XCI+5LuK5aSpPC90ZXh0PlxuXHRcdFx0PHRleHQgdi1pZj1cImx1bmFyJiYhd2Vla3MuZXh0cmFJbmZvXCIgY2xhc3M9XCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtbHVuYXItdGV4dFwiIDpjbGFzcz1cIntcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1pc0RheS10ZXh0Jzp3ZWVrcy5pc0RheSxcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1pc0RheSc6Y2FsZW5kYXIuZnVsbERhdGUgPT09IHdlZWtzLmZ1bGxEYXRlICYmIHdlZWtzLmlzRGF5LFxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWNoZWNrZWQnOmNhbGVuZGFyLmZ1bGxEYXRlID09PSB3ZWVrcy5mdWxsRGF0ZSAmJiAhd2Vla3MuaXNEYXksXG5cdFx0XHRcdCd1bmktY2FsZW5kYXItaXRlbS0tbXVsdGlwbGUnOiB3ZWVrcy5tdWx0aXBsZSxcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1kaXNhYmxlJzp3ZWVrcy5kaXNhYmxlLFxuXHRcdFx0XHR9XCI+e3t3ZWVrcy5pc0RheT8n5LuK5aSpJzogKHdlZWtzLmx1bmFyLklEYXlDbiA9PT0gJ+WIneS4gCc/d2Vla3MubHVuYXIuSU1vbnRoQ246d2Vla3MubHVuYXIuSURheUNuKX19PC90ZXh0PlxuXHRcdFx0PHRleHQgdi1pZj1cIndlZWtzLmV4dHJhSW5mbyYmd2Vla3MuZXh0cmFJbmZvLmluZm9cIiBjbGFzcz1cInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1sdW5hci10ZXh0XCIgOmNsYXNzPVwie1xuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWV4dHJhJzp3ZWVrcy5leHRyYUluZm8uaW5mbyxcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1pc0RheS10ZXh0Jzp3ZWVrcy5pc0RheSxcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1pc0RheSc6Y2FsZW5kYXIuZnVsbERhdGUgPT09IHdlZWtzLmZ1bGxEYXRlICYmIHdlZWtzLmlzRGF5LFxuXHRcdFx0XHQndW5pLWNhbGVuZGFyLWl0ZW0tLWNoZWNrZWQnOmNhbGVuZGFyLmZ1bGxEYXRlID09PSB3ZWVrcy5mdWxsRGF0ZSAmJiAhd2Vla3MuaXNEYXksXG5cdFx0XHRcdCd1bmktY2FsZW5kYXItaXRlbS0tbXVsdGlwbGUnOiB3ZWVrcy5tdWx0aXBsZSxcblx0XHRcdFx0J3VuaS1jYWxlbmRhci1pdGVtLS1kaXNhYmxlJzp3ZWVrcy5kaXNhYmxlLFxuXHRcdFx0XHR9XCI+e3t3ZWVrcy5leHRyYUluZm8uaW5mb319PC90ZXh0PlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiB7XG5cdFx0XHR3ZWVrczoge1xuXHRcdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xuXHRcdFx0XHRcdHJldHVybiB7fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2FsZW5kYXI6IHtcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0XHRkZWZhdWx0OiAoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHt9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzZWxlY3RlZDoge1xuXHRcdFx0XHR0eXBlOiBBcnJheSxcblx0XHRcdFx0ZGVmYXVsdDogKCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBbXVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0bHVuYXI6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGNob2ljZURhdGUod2Vla3MpIHtcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywgd2Vla3MpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblx0LnVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gge1xuXHRcdGZsZXg6IDE7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cblx0LnVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gtdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHRjb2xvcjogIzMzMztcblx0fVxuXG5cdC51bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtbHVuYXItdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAyNHJweDtcblx0XHRjb2xvcjogIzMzMztcblx0fVxuXG5cdC51bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtYm94LWl0ZW0ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0d2lkdGg6IDEwMHJweDtcblx0XHRoZWlnaHQ6IDEwMHJweDtcblx0fVxuXG5cdC51bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtYm94LWNpcmNsZSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogNXB4O1xuXHRcdHJpZ2h0OiA1cHg7XG5cdFx0d2lkdGg6IDhweDtcblx0XHRoZWlnaHQ6IDhweDtcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2RkNTI0ZDtcblxuXHR9XG5cblx0LnVuaS1jYWxlbmRhci1pdGVtLS1kaXNhYmxlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuMyk7XG5cdFx0Y29sb3I6ICNjMGMwYzA7XG5cdH1cblxuXHQudW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5LXRleHQge1xuXHRcdGNvbG9yOiAjMDA3YWZmO1xuXHR9XG5cblx0LnVuaS1jYWxlbmRhci1pdGVtLS1pc0RheSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN2FmZjtcblx0XHRvcGFjaXR5OiAwLjg7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblxuXHQudW5pLWNhbGVuZGFyLWl0ZW0tLWV4dHJhIHtcblx0XHRjb2xvcjogI2RkNTI0ZDtcblx0XHRvcGFjaXR5OiAwLjg7XG5cdH1cblxuXHQudW5pLWNhbGVuZGFyLWl0ZW0tLWNoZWNrZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdhZmY7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0b3BhY2l0eTogMC44O1xuXHR9XG5cblx0LnVuaS1jYWxlbmRhci1pdGVtLS1tdWx0aXBsZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN2FmZjtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRvcGFjaXR5OiAwLjg7XG5cdH1cbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktY2FsZW5kYXItaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNTIwNzRiOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktY2FsZW5kYXItaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNTIwNzRiOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3hcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3gtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1sdW5hci10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyLWl0ZW1fX3dlZWtzLWJveC1pdGVtXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcnB4XCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItaXRlbV9fd2Vla3MtYm94LWNpcmNsZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogXCI1XCIsXG4gICAgXCJyaWdodFwiOiBcIjVcIixcbiAgICBcIndpZHRoXCI6IFwiOFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RkNTI0ZFwiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWRpc2FibGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNDksMjQ5LDI0OSwwLjMpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNjMGMwYzBcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhci1pdGVtLS1pc0RheS10ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2FmZlwiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyLWl0ZW0tLWlzRGF5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdhZmZcIixcbiAgICBcIm9wYWNpdHlcIjogMC44LFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItaXRlbS0tZXh0cmFcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZGQ1MjRkXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuOFxuICB9LFxuICBcInVuaS1jYWxlbmRhci1pdGVtLS1jaGVja2VkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdhZmZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwib3BhY2l0eVwiOiAwLjhcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItaXRlbS0tbXVsdGlwbGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2FmZlwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuOFxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktY2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDliYjFjY2Mmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWNhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA5YmIxY2NjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidW5pLWNhbGVuZGFyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9fbWFza1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC40KVwiLFxuICAgIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IFwib3BhY2l0eVwiLFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDMwMCxcbiAgICBcIm9wYWNpdHlcIjogMFxuICB9LFxuICBcIkBUUkFOU0lUSU9OXCI6IHtcbiAgICBcInVuaS1jYWxlbmRhcl9fbWFza1wiOiB7XG4gICAgICBcInByb3BlcnR5XCI6IFwib3BhY2l0eVwiLFxuICAgICAgXCJkdXJhdGlvblwiOiAzMDBcbiAgICB9LFxuICAgIFwidW5pLWNhbGVuZGFyLS1maXhlZFwiOiB7XG4gICAgICBcInByb3BlcnR5XCI6IFwidHJhbnNmb3JtXCIsXG4gICAgICBcImR1cmF0aW9uXCI6IDMwMFxuICAgIH1cbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItLW1hc2stc2hvd1wiOiB7XG4gICAgXCJvcGFjaXR5XCI6IDFcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItLWZpeGVkXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiBcInRyYW5zZm9ybVwiLFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDMwMCxcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoNDYwcHgpXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItLWFuaS1zaG93XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMClcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9fY29udGVudFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXJfX2hlYWRlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2U1ZTVlNVwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItLWZpeGVkLXRvcFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2U1ZTVlNVwiLFxuICAgIFwiYm9yZGVyVG9wU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItLWZpeGVkLXdpZHRoXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTBcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9fYmFja3RvZGF5XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ0b3BcIjogXCIyNXJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjVcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyNVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxMlwiLFxuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjI1XCIsXG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IFwiMjVcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YxZjFmMVwiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyX19oZWFkZXItdGV4dFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9faGVhZGVyLWJ0bi1ib3hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiNTBcIixcbiAgICBcImhlaWdodFwiOiBcIjUwXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXJfX2hlYWRlci1idG5cIjoge1xuICAgIFwid2lkdGhcIjogXCIxMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTBcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiM4MDgwODBcIixcbiAgICBcImJvcmRlckxlZnRTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIyXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiM1NTU1NTVcIixcbiAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMlwiXG4gIH0sXG4gIFwidW5pLWNhbGVuZGFyLS1sZWZ0XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInJvdGF0ZSgtNDVkZWcpXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXItLXJpZ2h0XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInJvdGF0ZSgxMzVkZWcpXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXJfX3dlZWtzXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9fd2Vla3MtaXRlbVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheVwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDVcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0Y1RjVGNVwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxXCJcbiAgfSxcbiAgXCJ1bmktY2FsZW5kYXJfX3dlZWtzLWRheS10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTRcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9fYm94XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9fYm94LWJnXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMFxuICB9LFxuICBcInVuaS1jYWxlbmRhcl9fYm94LWJnLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMDBcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcIm9wYWNpdHlcIjogMC4xLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfVxufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIW9wdGlvbnMuY29tcG9uZW50cykge1xuICAgICAgb3B0aW9ucy5jb21wb25lbnRzID0ge31cbiAgICB9XG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgICBmb3IgKHZhciBuYW1lIGluIGNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChoYXNPd24uY2FsbChjb21wb25lbnRzLCBuYW1lKSAmJiAhaGFzT3duLmNhbGwob3B0aW9ucy5jb21wb25lbnRzLCBuYW1lKSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnRzW25hbWVdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTgxYjQwNCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzk4MWI0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc5ODFiNDA0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc5ODFiNDA0XCIsXG4gIFwiMWVmODAzZjJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvWUYvd2ViL3VuaWFwcC9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLnJlY3ljbGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk4MWI0MDQmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvblwiXSwgYXR0cnM6IHsgbnZ1ZTogdHJ1ZSB9IH0sXG4gICAgW1xuICAgICAgX3ZtLnR5cGVcbiAgICAgICAgPyBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2hlYWRcIl0gfSwgW1xuICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19oZWFkLXRhZ1wiXSxcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS50eXBlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2NvbnRlbnRcIl0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvbl9fY29udGVudC10aXRsZVwiXSxcbiAgICAgICAgICAgIGNsYXNzOiB7IGRpc3RyYWN0aW9uOiAhX3ZtLnN1YlRpdGxlIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uc3ViVGl0bGVcbiAgICAgICAgICA/IF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19jb250ZW50LXN1YlwiXSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN1YlRpdGxlKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cInVuaS1zZWN0aW9uXCIgbnZ1ZT5cblx0XHQ8dmlldyB2LWlmPVwidHlwZVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2hlYWRcIj5cblx0XHRcdDx2aWV3IDpjbGFzcz1cInR5cGVcIiBjbGFzcz1cInVuaS1zZWN0aW9uX19oZWFkLXRhZ1wiIC8+XG5cdFx0PC92aWV3PlxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLXNlY3Rpb25fX2NvbnRlbnRcIj5cblx0XHRcdDx0ZXh0IDpjbGFzcz1cInsnZGlzdHJhY3Rpb24nOiFzdWJUaXRsZX1cIiBjbGFzcz1cInVuaS1zZWN0aW9uX19jb250ZW50LXRpdGxlXCI+e3sgdGl0bGUgfX08L3RleHQ+XG5cdFx0XHQ8dGV4dCB2LWlmPVwic3ViVGl0bGVcIiBjbGFzcz1cInVuaS1zZWN0aW9uX19jb250ZW50LXN1YlwiPnt7IHN1YlRpdGxlIH19PC90ZXh0PlxuXHRcdDwvdmlldz5cblx0XHQ8c2xvdCAvPlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHQvKipcblx0ICogU2VjdGlvbiDmoIfpopjmoI9cblx0ICogQGRlc2NyaXB0aW9uIOagh+mimOagj1xuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSA9IFtsaW5lfGNpcmNsZV0g5qCH6aKY6KOF6aWw57G75Z6LXG5cdCAqIFx0QHZhbHVlIGxpbmUg56uW57q/XG5cdCAqIFx0QHZhbHVlIGNpcmNsZSDlnIblvaJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHRpdGxlIOS4u+agh+mimFxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gc3ViVGl0bGUg5Ymv5qCH6aKYXG5cdCAqL1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnVW5pVGl0bGUnLFxuXHRcdHByb3BzOiB7XG5cdFx0XHR0eXBlOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH0sXG5cdFx0XHR0aXRsZToge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9LFxuXHRcdFx0c3ViVGl0bGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7fVxuXHRcdH0sXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHRpdGxlKG5ld1ZhbCkge1xuXHRcdFx0XHRpZiAodW5pLnJlcG9ydCAmJiBuZXdWYWwgIT09ICcnKSB7XG5cdFx0XHRcdFx0dW5pLnJlcG9ydCgndGl0bGUnLCBuZXdWYWwpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdG9uQ2xpY2soKSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJylcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cblx0LnVuaS1zZWN0aW9uIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMCAxMHB4O1xuXHRcdGhlaWdodDogNTBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICNlNWU1ZTU7XG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMC41cHg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0fVxuXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0LnVuaS1zZWN0aW9uOmFmdGVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0aGVpZ2h0OiAxcHg7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSguNSk7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG5cdH1cblxuXHQvKiAjZW5kaWYgKi9cblxuXHQudW5pLXNlY3Rpb25fX2hlYWQge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdH1cblxuXHQubGluZSB7XG5cdFx0aGVpZ2h0OiAxNXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdHdpZHRoOiAzcHg7XG5cdH1cblxuXHQuY2lyY2xlIHtcblx0XHR3aWR0aDogOHB4O1xuXHRcdGhlaWdodDogOHB4O1xuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcblx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xuXHR9XG5cblx0LnVuaS1zZWN0aW9uX19jb250ZW50IHtcblx0XHRmbGV4OiAxO1xuXHRcdGNvbG9yOiAjMzMzO1xuXHR9XG5cblx0LnVuaS1zZWN0aW9uX19jb250ZW50LXRpdGxlIHtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdGNvbG9yOiAjMzMzO1xuXHR9XG5cblx0LmRpc3RyYWN0aW9uIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblxuXHQudW5pLXNlY3Rpb25fX2NvbnRlbnQtc3ViIHtcblx0XHRmb250LXNpemU6IDI0cnB4O1xuXHRcdGNvbG9yOiAjOTk5O1xuXHR9XG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzk4MWI0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzk4MWI0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ1bmktc2VjdGlvblwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBcIixcbiAgICBcImhlaWdodFwiOiBcIjUwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOGY4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNlNWU1ZTVcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMC41XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwibm9ybWFsXCJcbiAgfSxcbiAgXCJ1bmktc2VjdGlvbl9faGVhZFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwibGluZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxNVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2MwYzBjMFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNVwiLFxuICAgIFwid2lkdGhcIjogXCIzXCJcbiAgfSxcbiAgXCJjaXJjbGVcIjoge1xuICAgIFwid2lkdGhcIjogXCI4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjUwXCIsXG4gICAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCI6IFwiNTBcIixcbiAgICBcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2MwYzBjMFwiXG4gIH0sXG4gIFwidW5pLXNlY3Rpb25fX2NvbnRlbnRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJ1bmktc2VjdGlvbl9fY29udGVudC10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImRpc3RyYWN0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInVuaS1zZWN0aW9uX19jb250ZW50LXN1YlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1wicGFnZXNcIjp7fSxcImdsb2JhbFN0eWxlXCI6e319IiwiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvZXh0VUkvY2FsZW5kYXIvY2FsZW5kYXIubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvZXh0VUkvY2FsZW5kYXIvY2FsZW5kYXInXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2FsZW5kYXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDlkOTUyYyZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2FsZW5kYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYWxlbmRhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jYWxlbmRhci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2FsZW5kYXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNjFmNmRmNWVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvWUYvd2ViL3VuaWFwcC9wYWdlcy9leHRVSS9jYWxlbmRhci9jYWxlbmRhci5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhbGVuZGFyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ5ZDk1MmMmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzID0ge1xuICBcInVuaS1zZWN0aW9uXCI6IHJlcXVpcmUoXCJAL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlXCIpLmRlZmF1bHQsXG4gIFwidW5pLWNhbGVuZGFyXCI6IHJlcXVpcmUoXCJAL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWVcIikuZGVmYXVsdFxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHsgc2Nyb2xsWTogdHJ1ZSwgZW5hYmxlQmFja1RvVG9wOiB0cnVlLCBidWJibGU6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93Q2FsZW5kYXJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY2FsZW5kYXItY29udGVudFwiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWluZm9cIl0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwi5pel5Y6G57uE5Lu25Y+v5Lul5p+l55yL5pel5pyf77yM6YCJ5oup5Lu75oSP6IyD5Zu05YaF55qE5pel5pyf77yM5omT54K55pON5L2c44CC5bi455So5Zy65pmv5aaC77ya6YWS5bqX5pel5pyf6aKE6K6i44CB54Gr6L2m5py656Wo6YCJ5oup6LSt5Lmw5pel5pyf44CB5LiK5LiL54+t5omT5Y2h562J44CCXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcInVuaS1zZWN0aW9uXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi5o+S5YWl5qih5byPXCIsIHR5cGU6IFwibGluZVwiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidW5pLWNhbGVuZGFyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2VsZWN0ZWQ6IF92bS5pbmZvLnNlbGVjdGVkLCBzaG93TW9udGg6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmNoYW5nZSwgbW9udGhTd2l0Y2g6IF92bS5tb250aFN3aXRjaCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcInVuaS1zZWN0aW9uXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi5by55Ye65qih5byPXCIsIHR5cGU6IFwibGluZVwiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImV4YW1wbGUtYm9keVwiXSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImNhbGVuZGFyLWJ1dHRvblwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaJk+W8gOaXpeWOhlwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJ1bmktY2FsZW5kYXJcIiwge1xuICAgICAgICAgICAgICAgIHJlZjogXCJjYWxlbmRhclwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkYXRlOiBfdm0uaW5mby5kYXRlLFxuICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBfdm0uaW5mby5pbnNlcnQsXG4gICAgICAgICAgICAgICAgICBsdW5hcjogX3ZtLmluZm8ubHVuYXIsXG4gICAgICAgICAgICAgICAgICBzdGFydERhdGU6IF92bS5pbmZvLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICAgIGVuZERhdGU6IF92bS5pbmZvLmVuZERhdGUsXG4gICAgICAgICAgICAgICAgICByYW5nZTogX3ZtLmluZm8ucmFuZ2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNvbmZpcm06IF92bS5jb25maXJtIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhbGVuZGFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhbGVuZGFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJjYWxlbmRhci1jb250ZW50XCIgdi1pZj1cInNob3dDYWxlbmRhclwiPlxuXHRcdDx0ZXh0IGNsYXNzPVwiZXhhbXBsZS1pbmZvXCI+5pel5Y6G57uE5Lu25Y+v5Lul5p+l55yL5pel5pyf77yM6YCJ5oup5Lu75oSP6IyD5Zu05YaF55qE5pel5pyf77yM5omT54K55pON5L2c44CC5bi455So5Zy65pmv5aaC77ya6YWS5bqX5pel5pyf6aKE6K6i44CB54Gr6L2m5py656Wo6YCJ5oup6LSt5Lmw5pel5pyf44CB5LiK5LiL54+t5omT5Y2h562J44CCPC90ZXh0PlxuXHRcdDx1bmktc2VjdGlvbiB0aXRsZT1cIuaPkuWFpeaooeW8j1wiIHR5cGU9XCJsaW5lXCI+PC91bmktc2VjdGlvbj5cblx0XHQ8dmlldz5cblx0XHRcdDwhLS0g5o+S5YWl5qih5byPIC0tPlxuXHRcdFx0PHVuaS1jYWxlbmRhciA6c2VsZWN0ZWQ9XCJpbmZvLnNlbGVjdGVkXCIgOnNob3dNb250aD1cImZhbHNlXCIgQGNoYW5nZT1cImNoYW5nZVwiIEBtb250aFN3aXRjaD1cIm1vbnRoU3dpdGNoXCIgLz5cblx0XHQ8L3ZpZXc+XG5cdFx0PHVuaS1zZWN0aW9uIHRpdGxlPVwi5by55Ye65qih5byPXCIgdHlwZT1cImxpbmVcIj48L3VuaS1zZWN0aW9uPlxuXHRcdDx2aWV3IGNsYXNzPVwiZXhhbXBsZS1ib2R5XCI+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY2FsZW5kYXItYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cIm9wZW5cIj7miZPlvIDml6XljoY8L2J1dHRvbj5cblx0XHQ8L3ZpZXc+XG5cdFx0PHVuaS1jYWxlbmRhciByZWY9XCJjYWxlbmRhclwiIDpkYXRlPVwiaW5mby5kYXRlXCIgOmluc2VydD1cImluZm8uaW5zZXJ0XCIgOmx1bmFyPVwiaW5mby5sdW5hclwiIDpzdGFydERhdGU9XCJpbmZvLnN0YXJ0RGF0ZVwiIDplbmREYXRlPVwiaW5mby5lbmREYXRlXCIgOnJhbmdlPVwiaW5mby5yYW5nZVwiIEBjb25maXJtPVwiY29uZmlybVwiIC8+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB1bmlTZWN0aW9uIGZyb20gJ0AvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWUnXG5cdGltcG9ydCB1bmlDYWxlbmRhciBmcm9tICdAL2NvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci52dWUnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHR1bmlTZWN0aW9uLFxuXHRcdFx0dW5pQ2FsZW5kYXJcblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzaG93Q2FsZW5kYXI6IGZhbHNlLFxuXHRcdFx0XHRpbmZvOiB7XG5cdFx0XHRcdFx0ZGF0ZTogJzIwMTktMDgtMTUnLFxuXHRcdFx0XHRcdHN0YXJ0RGF0ZTogJzIwMTktMDYtMTUnLFxuXHRcdFx0XHRcdGVuZERhdGU6ICcyMDE5LTAxMC0xNScsXG5cdFx0XHRcdFx0bHVuYXI6IHRydWUsXG5cdFx0XHRcdFx0cmFuZ2U6IHRydWUsXG5cdFx0XHRcdFx0aW5zZXJ0OiBmYWxzZSxcblx0XHRcdFx0XHRzZWxlY3RlZDogW11cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25SZWFkeSgpIHtcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zaG93Q2FsZW5kYXIgPSB0cnVlXG5cdFx0XHR9KVxuXHRcdFx0Ly8gVE9ETyDmqKHmi5/or7fmsYLlvILmraXlkIzmraXmlbDmja5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmluZm8uc2VsZWN0ZWQgPSBbe1xuXHRcdFx0XHRcdFx0ZGF0ZTogJzIwMTktMDgtMjAnLFxuXHRcdFx0XHRcdFx0aW5mbzogJ+aJk+WNoSdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRhdGU6ICcyMDE5LTA4LTIxJyxcblx0XHRcdFx0XHRcdGluZm86ICfnrb7liLAnLFxuXHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRjdXN0b206ICfoh6rlrprkuYnkv6Hmga8nLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiAn6Ieq5a6a5LmJ5raI5oGv5aS0J1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGF0ZTogJzIwMTktMDgtMjInLFxuXHRcdFx0XHRcdFx0aW5mbzogJ+W3suaJk+WNoSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sIDUwMClcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuY2FsZW5kYXIub3BlbigpXG5cdFx0XHR9LFxuXHRcdFx0Y2hhbmdlKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2NoYW5nZSDov5Tlm546JywgZSlcblx0XHRcdFx0Ly8g5qih5ouf5Yqo5oCB5omT5Y2hXG5cdFx0XHRcdGlmICh0aGlzLmluZm8uc2VsZWN0ZWQubGVuZ3RoID4gNSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuaW5mby5zZWxlY3RlZC5wdXNoKHtcblx0XHRcdFx0XHRkYXRlOiBlLmZ1bGxkYXRlLFxuXHRcdFx0XHRcdGluZm86ICfmiZPljaEnXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Y29uZmlybShlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjb25maXJtIOi/lOWbnjonLCBlKVxuXHRcdFx0fSxcblx0XHRcdG1vbnRoU3dpdGNoKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ21vbnRoU3dpdGNocyDov5Tlm546JywgZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC8qIOWktOadoeWwj+eoi+W6j+e7hOS7tuWGheS4jeiDveW8leWFpeWtl+S9kyAqL1xuXHQvKiAjaWZkZWYgTVAtVE9VVElBTyAqL1xuXHRAZm9udC1mYWNlIHtcblx0XHRmb250LWZhbWlseTogdW5paWNvbnM7XG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0c3JjOiB1cmwoJ35AL3N0YXRpYy91bmkudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuXHR9XG5cblx0LyogI2VuZGlmICovXG5cblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRwYWdlIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmY0O1xuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG5cblx0dmlldyB7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuXHR9XG5cblx0LmV4YW1wbGUge1xuXHRcdHBhZGRpbmc6IDAgMTVweCAxNXB4O1xuXHR9XG5cblx0LmV4YW1wbGUtaW5mbyB7XG5cdFx0cGFkZGluZzogMTVweDtcblx0XHRjb2xvcjogIzNiNDE0NDtcblx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXHR9XG5cblx0LmV4YW1wbGUtYm9keSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0fVxuXG5cdC8qICNlbmRpZiAqL1xuXHQuZXhhbXBsZSB7XG5cdFx0cGFkZGluZzogMCAxNXB4O1xuXHR9XG5cblx0LmV4YW1wbGUtaW5mbyB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0Y29sb3I6ICMzYjQxNDQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdH1cblxuXHQuZXhhbXBsZS1pbmZvLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRsaW5lLWhlaWdodDogMjBweDtcblx0XHRjb2xvcjogIzNiNDE0NDtcblx0fVxuXG5cblx0LmV4YW1wbGUtYm9keSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdH1cblxuXHQud29yZC1idG4td2hpdGUge1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0fVxuXG5cdC53b3JkLWJ0biB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRoZWlnaHQ6IDQ4cHg7XG5cdFx0bWFyZ2luOiAxNXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XG5cdH1cblxuXHQud29yZC1idG4tLWhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhMmZmO1xuXHR9XG5cblx0LmV4YW1wbGUtYm9keSB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0fVxuXG5cdC5jYWxlbmRhci1idXR0b24ge1xuXHRcdGZsZXg6IDE7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0Zm9udC1zaXplOiAzMnJweDtcblx0fVxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhbGVuZGFyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhbGVuZGFyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiZXhhbXBsZVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNVwiXG4gIH0sXG4gIFwiZXhhbXBsZS1pbmZvXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNVwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNVwiLFxuICAgIFwiY29sb3JcIjogXCIjM2I0MTQ0XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjBcIlxuICB9LFxuICBcImV4YW1wbGUtaW5mby10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTRcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyMFwiLFxuICAgIFwiY29sb3JcIjogXCIjM2I0MTQ0XCJcbiAgfSxcbiAgXCJleGFtcGxlLWJvZHlcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE1XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJ3b3JkLWJ0bi13aGl0ZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcIndvcmQtYnRuXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI2XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0OFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdBRkZcIlxuICB9LFxuICBcIndvcmQtYnRuLS1ob3ZlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNGNhMmZmXCJcbiAgfSxcbiAgXCJjYWxlbmRhci1idXR0b25cIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzJycHhcIlxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIl9fVU5JX185QzFENjFGXCJ9IiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcbiAgdmFyIHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcbn1cblxuZnVuY3Rpb24gaXNEZWJ1Z01vZGUgKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICByZXR1cm4gdHlwZW9mIF9fY2hhbm5lbElkX18gPT09ICdzdHJpbmcnICYmIF9fY2hhbm5lbElkX19cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyAodHlwZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICBjb25zb2xlW3R5cGVdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvZyAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICB2YXIgdHlwZSA9IGFyZ3Muc2hpZnQoKVxuICBpZiAoaXNEZWJ1Z01vZGUoKSkge1xuICAgIGFyZ3MucHVzaChhcmdzLnBvcCgpLnJlcGxhY2UoJ2F0ICcsICd1bmktYXBwOi8vLycpKVxuICAgIHJldHVybiBjb25zb2xlW3R5cGVdWydhcHBseSddKGNvbnNvbGUsIGFyZ3MpXG4gIH1cblxuICB2YXIgbXNncyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodikudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IG9iamVjdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IGFycmF5XScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxuXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHYgPSBTdHJpbmcodilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2XG4gIH0pXG4gIHZhciBtc2cgPSAnJ1xuXG4gIGlmIChtc2dzLmxlbmd0aCA+IDEpIHtcbiAgICB2YXIgbGFzdE1zZyA9IG1zZ3MucG9wKClcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcblxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xuICAgICAgbXNnICs9IGxhc3RNc2dcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1zZyA9IG1zZ3NbMF1cbiAgfVxuXG4gIGNvbnNvbGVbdHlwZV0obXNnKVxufVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge30iXSwic291cmNlUm9vdCI6IiJ9