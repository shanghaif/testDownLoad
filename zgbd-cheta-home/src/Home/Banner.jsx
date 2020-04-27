import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import { Element } from 'rc-scroll-anim';
import BannerImage from './BannerImage';
import { assets } from './data';

const titleStyle = {
  opacity: 1,
  transform: 'translate(0px, 0px)',
  fontSize: '40px',
  fontWeight: 'bolder',
};

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner',
  }
  render() {
    const { className, isMobile, navToShadow } = this.props;
    const videoStyle = {width: '100%',height: '100%',objectFit: 'fill',display: isMobile ? 'none' : ''};
    return (
      <Element component="section" className={`${className}-wrapper page`} onChange={navToShadow}>
        <video autoPlay="autoplay" loop="loop" muted="muted" src="https://mdn.alipayobjects.com/afts/file/A*grJPTKqmP9QAAAAAAAAAAABjAQAAAQ?bz=antv_site" style={videoStyle} />,
        <div className={className}>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <div key="h1" style={titleStyle}>车联网平台服务专家</div>
            <p className="main-info" key="p">
              以汽车物联网发展为目标，为行业提供车载电子硬件终端，<br />
              及商用车tsp运营服务
            </p>
            <a target="_blank" href="http://console.terrybg.com" key="a">
              <button>开始使用</button>
            </a>
          </QueueAnim>
          <img id="arrow" src="https://gw.alipayobjects.com/zos/rmsportal/cfUeahyjXCvoeUHrZDcE.svg" width="64" height="64" />
        </div>
      </Element>
    );
  }
}

export default Banner;
