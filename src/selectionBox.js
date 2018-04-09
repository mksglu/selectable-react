import React, { Component } from "react"

export default class selectionBox extends Component {
  render() {
    const { height, left, top, width } = this.props
    return (
      <div
        style={{
          display: !this.props.isVisible ? "none" : "block",
          width,
          height,
          position: "absolute",
          cursor: "default",
          zIndex: "99999",
          border: "1px dashed red",
          position: "absolute",
          background: "rgba(0,115,255,.07)",
          border: "solid 1px rgba(72,155,255,.5)",
          pointerEvents: "none",
          boxSizing: "border-box",
          left,
          top
        }}
      />
    )
  }
}
