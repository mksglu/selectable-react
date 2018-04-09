import React, { Component } from "react"
import "../App.css"
import mockData from "./data"
import ReactSelectable from "../Selectable"
import logo from "./logo.svg"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: [],
      selectedItem: []
    }
  }

  componentDidMount() {
    this.setState({
      item: mockData
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="output">
            {this.state.selectedItem.map((itemList, index) => (
              <li key={index}>{itemList}</li>
            ))}
          </div>
          <img src={logo} className="App-logo" alt="logo" />{" "}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ReactSelectable
          selectedItemClassName="secili item-selected"
          containerClassName="selectable-container"
          onSelectChange={item => this.setState({ selectedItem: item })}
        >
          {this.state.item.map((mockItem, index) => {
            return <div key={index}>{mockItem.name}</div>
          })}
        </ReactSelectable>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />{" "}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
