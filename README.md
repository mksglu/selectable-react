# selectable-react

## Getting started

[![selectable-react](https://nodei.co/npm/selectable-react.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/selectable-react)

![Alt Text](https://i.imgur.com/TZMXx0v.gif)

```shell
npm install selectable-react --save
```

```javascript
import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import mockData from "./data"
import ReactSelectable from "selectable-react"

import "./App.css"
class App extends Component {
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
```

```javascript
const data = [
  { title: "My Aim is True", year: "1977" },
  { title: "This Year's Model", year: "1978" },
  { title: "Armed Forces", year: "1979" },
  { title: "Get Happy", year: "1980" },
  { title: "Trust", year: "1981" },
  { title: "Almost Blue", year: "1981" },
  { title: "Imperial Bedroom", year: "1982" },
  { title: "Punch the Clock", year: "1983" },
  { title: "Goodbye Cruel World", year: "1984" },
  { title: "King of America", year: "1986" },
  { title: "Blood and Chocolate", year: "1986" },
  { title: "Spike", year: "1989" },
  { title: "Mighty Like a Rose", year: "1991" },
  { title: "The Juliette Letters", year: "1993" },
  { title: "Brutal Youth", year: "1994" },
  { title: "Kojak Variety", year: "1995" },
  { title: "All This Useless Beauty", year: "1996" },
  { title: "Painted from Memory", year: "1998" },
  { title: "When I Was Cruel", year: "2002" },
  { title: "North", year: "2003" },
  { title: "The Delivery Man", year: "2004" },
  { title: "The River in Reverse", year: "2006" },
  { title: "Momofuku", year: "2008" },
  { title: "Secret, Profane & Sugarcane", year: "2009" },
  { title: "National Ransom", year: "2009" },
  { title: "Wise Up Ghost", year: "2013" }
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
