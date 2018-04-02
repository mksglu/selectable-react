import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Item from './Item'

export default class SelectableGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {}
    }
  }

  handleSelection = (id, isSelected) => {
    //let index = this.state.selected.some(e > -1)
    
   // if (!index) {
      this.state.selected["item"+id] = isSelected;
   // }
  }

  render() {
    return this.props.items.map((item, i) => {
      const isElementSelected = this.state.selected["item"+i] === true;
      return (
        <Item
          selectedItem={isElementSelected}
          onSelection={this.handleSelection}
          item={item.title}
          key={i}
          selectKey={i}
          marqueeStartPos={this.props.marqueeStartPos}
          marqueeOldMouse={this.props.marqueeOldMouse}
          marqueeEndPos={this.props.marqueeEndPos}
        />
      )
    })
  }
}
