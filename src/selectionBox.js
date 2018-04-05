import React, { Component } from 'react'

export default class selectionBox extends Component {
  render() {
    const { height, left, top, width } = this.props
    return (
      <div
        style={{
          display: !this.props.isVisible ? 'none' : 'block',
          width,
          height,
          position: 'absolute',
          cursor: 'default',
          zIndex: '99999',
          border: '3px solid #000',
          left,
          top,
        }}
      />
    )
  }
}
