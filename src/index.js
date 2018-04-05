import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import SelectionBox from "./selectionBox"
import SelectableItem from "./selectableitem"
export default class Selectable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marqueeSelection: false,
      marqueeStartPos: {
        x: 0,
        y: 0
      },
      marqueeEndPos: {
        x: 0,
        y: 0
      },
      marqueeOldMouse: {
        x: 0,
        y: 0
      },

      selected: {}
    }
  }
  onMouseDown = e => {
    document.body.addEventListener("click", this.mouseUp)
    const parentRect = e.currentTarget.getBoundingClientRect()
    const offsetX = e.clientX - parentRect.left
    const offsetY = e.clientY - parentRect.top
    this.setState({
      marqueeStartPos: {
        x: offsetX,
        y: offsetY
      },
      marqueeOldMouse: {
        x: e.clientX,
        y: e.clientY
      },
      marqueeEndPos: {
        x: 0,
        y: 0
      }
    })
    this.startSelection()
    e.preventDefault()
  }
  mouseUp = e => {
    document.body.removeEventListener("mouseup", this.mouseUp)
    document.body.removeEventListener("mousemove", this.onMouseMove)
    if (this.state.marqueeSelection === true) {
      e.stopPropagation()
      e.preventDefault()
      this.setState({
        marqueeSelection: false
      })
    }
    e.preventDefault()
  }
  onMouseMove = e => {
    const delta = {
      x: e.clientX - this.state.marqueeOldMouse.x,
      y: e.clientY - this.state.marqueeOldMouse.y
    }

    this.setState({
      marqueeEndPos: {
        x: this.state.marqueeEndPos.x + delta.x,
        y: this.state.marqueeEndPos.y + delta.y
      },
      marqueeOldMouse: {
        x: e.clientX,
        y: e.clientY
      }
    })
    e.preventDefault()
  }
  startSelection = () => {
    this.setState({
      marqueeSelection: true
    })

    document.body.addEventListener("mousemove", this.onMouseMove)
  }
  handleSelection = (id, isSelected) => {
    this.state.selected[id] = isSelected
  }
  renderChilds = () => {
    return this.props.children.map((childElement, i) => {
      return (
        <SelectableItem
          onSelection={this.handleSelection}
          key={i}
          selectKey={i}
          isSelected={this.state.selected[i]}
          marqueeStartPos={this.state.marqueeStartPos}
          marqueeOldMouse={this.state.marqueeOldMouse}
          marqueeEndPos={this.state.marqueeEndPos}
          selectedClass={this.props.selectedItemClassName}
        >
          {childElement}
        </SelectableItem>
      )
    })
  }
  render() {
    return (
      <Fragment>
        <div
          style={{ userSelect: "none" }}
          className={this.props.containerClassName}
          onMouseDown={this.onMouseDown}
        >
          {this.renderChilds()}
        </div>

        <SelectionBox
          isVisible={this.state.marqueeSelection}
          width={Math.abs(this.state.marqueeEndPos.x)}
          height={Math.abs(this.state.marqueeEndPos.y)}
          left={Math.min(
            this.state.marqueeStartPos.x,
            this.state.marqueeOldMouse.x
          )}
          top={Math.min(
            this.state.marqueeStartPos.y,
            this.state.marqueeOldMouse.y
          )}
        />
      </Fragment>
    )
  }
}
Selectable.propTypes = {
  selectedItemClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  onSelectChange: PropTypes.func,
  onSelectEnd: PropTypes.func
}

Selectable.defaultProps = {
  selectedItemClassName: "item-selected",
  containerClassName: "selectable-container"
}
