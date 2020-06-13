import React from 'react';
import Container from './s'


function App() {
  const data = [
    { name: "Bumblebee" },
    { name: "Jazz" },
    { name: "İronhide" },
    { name: "Megatron" },
    { name: "Blackout" },
    { name: "Scorponok" }
  ]
  return (
  <Container>{data.map((mockItem, index) => {
    return <div key={index}>{mockItem.name}</div>
  })}</Container>
  );
}

export default App;
