import moment from "moment";
/**
 *
 * @param value 日期
 * @param showDetailTime 是否显示具体时间
 * @returns {string}
 */
export function relativelyTaskTime (value, showDetailTime = false){
  let detailTime = moment(value).format('H:mm');
  if (!showDetailTime) {
    detailTime = '';
  }
  const currentDate = moment(value).format('YYYY-MM-DD');
  const currentMonday = moment().weekday(0).format('YYYY-MM-DD');
  const currentSunday = moment().weekday(6).format('YYYY-MM-DD');
  let weekDate = '';
  if (currentDate < currentMonday) {
    weekDate = '[上周]dd ' + detailTime;
  }else if (currentDate > currentSunday) {
    weekDate = '[下周]dd ' + detailTime;
  }else{
    weekDate = '[周]dd ' + detailTime;
  }
  return moment(value).calendar(null, {
    sameDay: '[今天 ]' + moment(value).format('H:mm'),
    nextDay: '[明天 ]' + detailTime,
    nextWeek: weekDate,
    lastDay: '[昨天 ]' + detailTime,
    lastWeek: weekDate,
    sameElse: 'M月D日 H:mm'
  });
}
export function formatTime(begin, end){
  //如果不是今天则不显示具体时间
  if (!end && begin) {
    return relativelyTaskTime(begin) + ' 开始';
  }
  if (!begin) {
    return relativelyTaskTime(end) + ' 截止';
  }
  return relativelyTaskTime(begin) + ' - ' + relativelyTaskTime(end);
}