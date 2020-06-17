import React from 'react';
const selectionRect = ({
  height, left, top, width, mouseInContainer,mouseUp, background, border,
}) => {
  const rectDisplay = !mouseUp && mouseInContainer ? { display: 'block' } : { display: 'none' };
  const rectResize =  {
    height, left, top, width,
  };
  const rectStyle = {
    position: 'absolute', cursor: 'default', zIndex: '1000', background, border, pointerEvents: 'none', boxSizing: 'border-box',
  };
  return <div style={{ ...rectResize, ...rectDisplay, ...rectStyle }} />;
};

selectionRect.defaultProps = {
  background: 'rgba(0,115,255,.07)',
  border: 'solid 1px rgba(72,155,255,.5)',
};

export default selectionRect;
