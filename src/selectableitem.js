import React, { Component } from "react"
import { findDOMNode } from "react-dom"

export default class SelectableItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const isNextPropsSelected = this.selected(nextProps)
    this.props.onSelection(this.props.selectKey, isNextPropsSelected)
  }

  selected = props => {
    const domNode = findDOMNode(this.item).getBoundingClientRect()
    return !(
      Math.min(
        props.rect.y + props.marqueeStartPos.y,
        props.marqueeOldMouse.y
      ) +
        Math.abs(props.marqueeEndPos.y) <
        domNode.top ||
      Math.min(
        props.rect.y + props.marqueeStartPos.y,
        props.marqueeOldMouse.y
      ) >
        domNode.top + domNode.height ||
      Math.min(
        props.rect.x + props.marqueeStartPos.x,
        props.marqueeOldMouse.x
      ) +
        Math.abs(props.marqueeEndPos.x) <
        domNode.left ||
      Math.min(
        props.rect.x + props.marqueeStartPos.x,
        props.marqueeOldMouse.x
      ) >
        domNode.left + domNode.width
    )
  }
  render() {
    return (
      <div
        ref={ref => (this.item = ref)}
        className={
          this.props.isSelected ? this.props.selectedClass : "item-selected"
        }
      >
        {this.props.children}
      </div>
    )
  }
}
