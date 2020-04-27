// 项目性质
export const NATURE = [
  {key: 'private', text: '私有'},
  {key: 'public', text: '公开'}
]

// 项目状态
export const STATUS = {
  'not_started': {
    text: '未开始',
    icon: 'clock-circle',
    color: 'blue'
  },
  'underway': {
    text: '进行中',
    icon: 'arrow-right',
    color: 'orange'
  },
  'completed': {
    text: '已完成',
    icon: 'check',
    color: 'green'
  },
  'close': {
    text: '关闭任务',
    icon: 'tag',
    color: 'grey',
    ignore: true
  },
}

// 项目优先级
export const PRIORITY = {
  'highest': {
    text: '最高',
    color: 'red'
  },
  'higher': {
    text: '较高',
    color: 'orange'
  },
  'common': {
    text: '普通',
    color: 'blue'
  },
  'lower': {
    text: '较低',
    color: 'brown'
  },
  'lowest': {
    text: '最低',
    color: 'grey'
  },
}

// 编辑字段
export const FILED = {
  'userId': {
    text: '负责人',
    icon: 'user'
  },
  'status': {
    text: '状态',
    icon: 'tag'
  },
  'prority': {
    text: '优先级',
    icon: 'tag'
  },
  'hours': {
    text: '预估工时',
    icon: 'tag'
  }
}