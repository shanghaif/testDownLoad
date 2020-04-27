/**
 * 地区 mark
 * @param top
 * @param bottom
 * @returns {string}
 */
export function areaMark (top, bottom) {
  return `
    <div class="cheta-map-mark">
      <div class="cheta-map-mark-inner">
        <span class="cheta-map-mark-top">${ top }</span><br>
        <span class="cheta-map-mark-bottom">${ bottom }</span>
      </div>
    </div>`;
}

/**
 * 街道 mark
 * @param top
 * @param bottom
 * @returns {string}
 */
export function streetMark (top, bottom) {
  return `
    <div class="cheta-map-mark-street ol-commu-info">
      <span class="ol-commu-price"><em>${ top }</em></span>
      <span class="ol-commu-name">${ bottom }</span>
      <span class="ol-commu-count"></span>
      <i class="i-arr-down"></i>
    </div>`;
}

/**
 * 车辆 mark
 * @param top
 * @param bottom
 * @returns {string}
 */
export function carMark (ang, image, registrationNo) {
  return `
    <div class="cheta-mark-car cheta-event" style="text-align: center;width: 100px">
      <div style="padding-left: 5px;height: 45px;"><img class="img${ang}" src="/image/car/${image}.png"/></div>
      <div class="cheta-mark-car-text">
        <span class="cheta-mark-car-prefix" style="">${registrationNo.substring(0,2)}</span>
        <span class="cheta-mark-car-suffix">${registrationNo.substring(2)}</span>
      </div>
    </div>`;
}

/**
 * 车辆 信息窗口
 * @param top
 * @param bottom
 * @returns {string}
 */
export function carInfo (car,desc,color) {
  var tpl = `
    <div>
      <div class="cheta-map-info" style="border-radius:10px;">
        <div class="cheta-map-head cheta-bg" style="height:54px;color:rgba(255,255,255,1);line-height: 46px;padding: 0px 10px;font-size: 24px">
          <i class="iconfont icon-fangxiangpan" style="font-size: 25px"></i>
            NO. ${car.registrationNo}
           <i class="iconfont icon-shuaxin car-refresh" style="font-size: 26px;float: right;height:54px;margin-right: 30px;line-height: 48px;"></i>
        </div>
        <div class="cheta-map-content" style="line-height: 45px;padding: 0px 10px;font-weight:400;color: #999999FF;">
          <div>
            <div style="width: 69%;display: inline-block;border-right: 1px solid rgba(232,232,232,1)">
              <div style="border-bottom: 1px solid rgba(232,232,232,1)" class="cheta-font-ellipsis">驾驶员：吴成建
                <span style="padding-left: 55px;" title="${car.g}（km）">行驶里程：${car.g}（km）</span>
              </div>
              <div style="border-bottom: 1px solid rgba(232,232,232,1);overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">状态：
                <span  style="font-family:Arial-BoldMT;font-weight:bold;color :${color}" title="${desc}">
                ${desc}
                </span>
              </div>
              <div style="border-bottom: 1px solid rgba(232,232,232,1)">速度：
                <span class="cheta-color" style="font-family:Arial-BoldMT;font-weight:bold;">正北 ${car.sp}km / h</span>
              </div>
              <div style="border-bottom: 1px solid rgba(232,232,232,1)">上报时间：
                <span class="cheta-color" style="font-family:Arial-BoldMT;font-weight:bold;">${car.gt}</span>
              </div>
            </div>
            <div class="cheta-color" style="width: 30%;display: inline-block;text-align: center;border-bottom: 1px solid rgba(232,232,232,1);">
              <i class="iconfont icon-shisu-" style="font-size: 120px"></i>
              <br>
              <span style="font-family:Arial-BoldMT;font-weight:bold;">
                <span style="font-size:25px;">${car.sp}</span>
                <span style="font-size:20px;">km/h</span>
              </span>
            </div>
          </div>
          <div style="border-bottom: 1px solid rgba(232,232,232,1)" class="cheta-font-ellipsis">
            车辆位置：<span title="${car.address}">${ car.address }</span>
          </div>
          <div style="font-size: 14px;display: flex">
            <div class="cheta-map-event cheta-map-info-detail" data-id="${car.id}" style="text-align: center;flex:1;border-right: 1px solid rgba(232,232,232,1)">
              <i class="iconfont icon-sijixinxi" style="font-size: 14px;padding-right: 7px;"></i>司机信息 >>
            </div>
            <div class="cheta-map-info-gps" data-id="" style="text-align: center;flex:1;cursor:pointer;border-right: 1px solid rgba(232,232,232,1)">
              <i class="iconfont icon-gengduoxiangqing" style="font-size: 14px;padding-right: 7px;"></i>更多详情 >>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  tpl += `
        <div class="cheta-map-info cheta-hide" style="border-radius:10px;">
          <div class="cheta-map-head cheta-bg" style="height:54px;line-height:46px;color:rgba(255,255,255,1);padding: 0px 10px;font-size: 24px">
            <i class="iconfont icon-fangxiangpan" style="font-size: 25px"></i>
              NO. ${car.registrationNo}
          </div>
          <div class="cheta-map-content" style="padding: 0px 10px;font-weight:400;color: #999999FF;">
                <div style=" background-color: white;border-radius: 8px;">
                  <div class="clearfix">
                    <div style="float: left;width: 4%"></div>
                    <div style="float: left;width: 16%">
                      <div class="top-left-img" >
                        <img src="/image/workplace/touxiang.png" alt="" style=" width: 85%;border-radius: 4px;margin: 30px 10px 10px 7px;">
                      </div>
                      <div class="top-left-jiashi button" style="margin: 45px 0px 20px 0px;text-align: center;cursor: pointer;">
                        <span class="top-left-jiashi-span" type="primary" style="width:56px;height:47px;font-size:30px;font-family:ArialMT;font-weight:400;color:rgba(28,192,159,1);line-height:9px;">C1</span>
                        <p class="top-left-jiashi-p" style="margin: 5px 0;">准驾驶证</p>
                      </div>
                    </div>
                    <div style="float:left;width: 4%">
                      <div class="top-left-fengexian">
                        <img src="/image/workplace/fengexian.png" alt="" style="float: right;">
                      </div>
                    </div>
                    <div style="float: left;width: 76%" class="cheta-message">
                      <div class="top-right cheta-front-message"    style="margin:15px 0px 15px 20px;">

                        <div class="top-right-dati clearfix">
                          <div class="top-right-dati-one" style="float: left">
                            <span style="width:166px;height:28px;font-size:30px;font-family:ArialMT;font-weight:400;color:rgba(51,51,51,1);">林小小</span>
                            <p style=" width:158px;height:17px;font-size:16px;font-weight:400;margin-top: 5px;color:rgba(102,102,102,1);line-height: 18px;">广州市XXX集团</p>
                          </div>
                          <div class="top-right-dati-two" style="float: right">
                            <span style="width:57px;height:40px;font-size:30px;font-family:ArialMT;font-weight:400;color:rgba(255,94,86,1);line-height:40px;">9.3</span>
                            <p style="color: #999999;font-size: 14px;line-height: 36px;">安全评分</p>
                          </div>

                        </div>
                        <div class="top-right-wenzi">
                          <ul>
                            <li>车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：<span>${car.registrationNo}</span></li>
                            <li>驾&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：<span>10年</span> </li>
                            <li>联系方式：<span>${car.carphoto}</span> </li>
                            <li>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：<span>19463459350@163.com</span></li>
                          </ul>
                        </div>
                      </div>
                      <div class="top-right-qiehuan cheta-front-message cheta-hide"  style="margin:15px 0px 15px 20px;">
                        <ul>
                          <li>证&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>34634563567456746746</span></li>
                          <li>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：<span>男</span> </li>
                          <li>出生日期：<span>1992-03-11</span> </li>
                          <li>初次领证：<span>2008-09-25</span> </li>
                          <li>有效开始：<span>2008-07-19</span></li>
                          <li>有效期限: <span>10年</span></li>
                          <li>住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：<span>${ car.address }</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
            <div style="text-align: center;line-height:2px;text-decoration:underline;color:rgba(153,153,153,1);" class="cheta-font14 cheta-map-event">
              <a href="#"><i class="iconfont icon-jibenxinxi"></i>车辆信息>></a>
            </div>
          </div>
        </div>
        </div>`;

  return tpl;
}

