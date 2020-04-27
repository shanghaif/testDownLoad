import React from 'react';

const videoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'fill',
};

export default function Video() {
  return (
    <video key="test" autoPlay="autoplay" loop src="https://mdn.alipayobjects.com/afts/file/A*grJPTKqmP9QAAAAAAAAAAABjAQAAAQ?bz=antv_site" style={videoStyle} />
  );
}
