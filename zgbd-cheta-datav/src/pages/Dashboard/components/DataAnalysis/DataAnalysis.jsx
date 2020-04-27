/* eslint react/no-children-prop:0 */
import React, { Component } from 'react';
import { Icon } from '@alifd/next';
import TextLoop from 'react-text-loop';
import PieChart from './PieChart';
import TopList from './TopList';
import LineChart from './LineChart';
import Map from './Map';
import Title from './Title';

const data = {
  source: [
    {
      value: 335,
      name: '物流行业',
    },
    {
      value: 310,
      name: '商砼行业',
    },
    {
      value: 234,
      name: '环卫行业',
    },
    {
      value: 135,
      name: '客运行业',
    },
    {
      value: 1548,
      name: '其他类型',
    },
  ],
  topShop: [
    {
      name: '物流行业新增订单8693辆',
    },
    {
      name: '环卫行业新增订单3698辆',
    },
    {
      name: '新装定点视频监控安装965处',
    },
    {
      name: '商砼车辆带4G视频新装1895辆',
    },
  ],
  topItem: [
    {
      name: '昨日车机智能设备出库量：16389台',
    },
    {
      name: '"车塔"入围信息化建设重大贡献奖提名',
    },
    {
      name: '车塔信息化数据中心建设已完成交接',
    },
    {
      name: '"车塔云"成为行业商用车管理服务标杆',
    },
  ],
  target: [
    {
      value: 67,
      name: '完成',
    },
    {
      value: 23,
      name: '未完成',
    },
  ],
  member: [
    {
      value: 335,
      name: 'v1',
    },
    {
      value: 310,
      name: 'v2',
    },
    {
      value: 234,
      name: 'v3',
    },
  ],
};

export default class DataAnalysis extends Component {
  static displayName = 'DataAnalysis';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  updateDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    this.setState({
      date: `${year}-${month + 1}-${day} ${hour}:${
        minute < 10 ? `0${minute}` : minute
      }:${second < 10 ? `0${second}` : second}`,
    });
  };

  componentDidMount() {
    setInterval(this.updateDate, 1000);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.main}>
          <div style={styles.side}>
            <PieChart data={data.source} title="行业服务车辆占比" />
            <TopList data={data.topShop} title="大事记成果" />
            <LineChart data={data.source} title="行业入驻排行" />
          </div>
          <div style={styles.middle}>
            <div style={styles.header}>
              <h1 style={styles.pageTitle}>车塔云 大数据实时状况</h1>
              <p style={styles.time}>
                <Icon type="clock" size="xs" /> {this.state.date}
              </p>
              <Title data="今日交易额" />
              <h2 style={styles.sum}>
                1682
                <TextLoop
                  speed={1000}
                  children={['1242.12', '5356.32', '6518.28', '8739.69']}
                />
                元
              </h2>
            </div>
          </div>
          <div style={styles.side}>
            <PieChart data={data.target} title="信息化目标达成率" />
            <TopList data={data.topItem} title="新闻实时概览" />
            <PieChart data={data.member} title="会员等级占比" />
          </div>
        </div>
        <div style={styles.bg}>
          <Map />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    position: 'relative',
    height: '100vh',
  },
  main: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  bg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  side: {
    zIndex: 1,
    width: '320px',
    padding: '10px',
  },
  middle: {
    flex: 1,
  },
  header: {
    position: 'relative',
    zIndex: 9,
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: '36px',
    margin: 0,
  },
  time: {
    marginBottom: 20,
  },
  sum: {
    height: '44px',
    lineHeight: '44px',
    margin: '25px 0 0',
    color: '#f7d947',
    fontSize: '62px',
    fontWeight: 400,
  },
};
