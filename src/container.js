import React from 'react'
import Item from './item'
const container = (props) => {
  return (
    <div   ref={(ref) => props.container(ref)}>
     <div style={{display:"flex"}}>
      <div style={{
         userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'}}>sdsadsdsa</div>
      <div style={{        userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'}}>sdsadsdsa</div>
     <div style={{        userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'}}>sdsadsdsa</div>
      <div style={{        userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'}}>sdsadsdsa</div>
    </div>
    <div style={{display:"flex"}}>
      <div style={{
         userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'}}>sdsadsdsa</div>
      <div style={{        userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'}}>sdsadsdsa</div>
      <div
      style={{
        userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'
      }}

    >
      <div style={{  margin:"200px",

        border: '1px solid red'}}>


          <Item  {...props}>{props.children}</Item>


          </div>
    </div>
      <div style={{        userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'}}>sdsadsdsa</div>
    </div>
    <div style={{display:"flex"}}>
      <div style={{
         userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'}}>sdsadsdsa</div>
      <div style={{        userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'}}>sdsadsdsa</div>
     <div style={{        userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'}}>sdsadsdsa</div>
      <div style={{        userSelect: 'none',
        width: '500px',
        height: '500px',
        margin: '100px',
        border: '1px solid red'}}>sdsadsdsa</div>
    </div>
    </div>
  )
}
export default  React.memo(container)
