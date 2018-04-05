import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import mockData from "./data"
// yarn add selectable-react
import ReactSelectable from "selectable-react"

import "./App.css"
// import SelectableGroup from './SelectableGroup'
class App extends Component {
  // generates random items
  renderSelectableDivs() {
    return mockData.map((mockItem, index) => {
      return (
        <div key={index}>
          <br />

          <div style={{ width: 400, height: 50 }}>
            {mockItem.title} - {mockItem.year}
          </div>
          <br />
        </div>
      )
    })
  }

  render() {
    const dummyElements = this.renderSelectableDivs()
    return (
      <ReactSelectable
        selectedItemClassName="secili item-selected"
        containerClassName="selectable-container"
      >
        {dummyElements}
      </ReactSelectable>
    )
  }
}

export default App
