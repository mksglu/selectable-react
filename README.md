# Selectable React JS

## Getting started

[![selectable-react](https://nodei.co/npm/selectable-react.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/selectable-react)

## Demo

[Try it out](https://frozen-depths-40634.herokuapp.com/)

![Alt Text](https://thumbs.gfycat.com/AliveMilkyHypacrosaurus-size_restricted.gif)

```shell
npm install selectable-react --save
```

```javascript
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
          <img src={logo} className="App-logo" alt="logo" /> <h1 className="App-title">Welcome to React</h1>
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
```

```javascript
const data = [
  { name: "Bumblebee" },
  { name: "Jazz" },
  { name: "İronhide" },
  { name: "Megatron" },
  { name: "Blackout" },
  { name: "Scorponok" }
]

export default data
```

```css
.selectable-container {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: flex-start;
}

.item-selected {
  height: 100px;
  width: 100px;
  background-color: #b93c2f;
  border: 1px solid #626262;
  margin: 3px;
  user-select: none;
}

.secili {
  background-color: chartreuse;
}
```

## Configuration

The `<ReactSelectable />` component accepts a few optional props:

* `onSelectChange` (Function) Callback returns selected elements.
* `containerClassName` Wrapper element style.
* `selectedItemClassName` Selected ıtem style.
