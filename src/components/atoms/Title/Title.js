import React from 'react';

const Title = ({ children, tag, style }) => {
  const Tag = tag ? `${tag}` : 'h2';
  return <Tag style={style}>{children}</Tag>;
};

export default Title;
