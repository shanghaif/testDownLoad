import React from 'react';
import { Button } from 'antd';

const fontStyle = {
  display: 'inline-block',
  marginRight: '20px',
  fontSize: '17px',
}
const aStyle = {
  color: '#FFF',
}

export default function Header(props) {
  return (
    <header {...props}>
      <a className="logo-wrapper" href="http://console.terrybg.com" target="_blank">
        <i className="logo" />
      </a>
      <div className="button">
        <div style={fontStyle}>
          <a style={aStyle} href="http://console.terrybg.com" target="_blank">控制台</a>
        </div>
        <div style={fontStyle}>
          <a style={aStyle} href="http://console.terrybg.com/doc" target="_blank">文档</a>
        </div>
      </div>
    </header>
  );
}
