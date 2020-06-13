import React, { Component } from 'react';
import SelectionRect from './selectionRect';
import Container from './container';
class S extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPositions: {
        currentMousePositionX: 0,
        currentMousePositionY: 0,
      },
      selectionRect:{
        mouseInContainer: false, // The mouse in container condition because mouseEvents will must be only mouse into container position.
        mouseUp:true
      },
      selectionRectLeft:0,
      selectionRectTop:0,
      resizeDistanceY: 0,
      resizeDistanceX: 0,
    };
    this.removeMouseEvents();
  }
  shouldComponentUpdate(nextProps, nextState){
     if(nextState.selectionRect.mouseInContainer){
       return true
     }
     return false
  }
  componentDidMount() {
    this.addMouseEvents();
  }

  selectableActive(e) {
    const containerRectangle = this.container.getBoundingClientRect();
    const containerRectanglePositions = {
      distanceTop: containerRectangle.top, distanceBottom: containerRectangle.bottom, distanceLeft: containerRectangle.left, distanceRight: containerRectangle.right,
    };
    const mouseInContainer = e.clientX >= containerRectanglePositions.distanceLeft && e.clientX <= containerRectanglePositions.distanceRight && e.clientY >= containerRectanglePositions.distanceTop && e.clientY <= containerRectanglePositions.distanceBottom;
    this.setState(prevState=>{
      return {selectionRect:{...prevState.selectionRect,mouseInContainer}}
      //{selectionRect:{...this.state.selectionRect,mouseInContainer}}
    })
  }

  initialPositions(e) {
    // container
    const initialSelectionRectTop =   e.clientY + this.state.resizeDistanceY;
    const initialSelectionRectLeft =  e.clientX + this.state.resizeDistanceX;
    this.selectableActive(e);
    // mouse
    const containerRectangle = this.container.getBoundingClientRect();
    const initialMousePositionX = Math.round(e.clientX - containerRectangle.left);
    const initialMousePositionY = Math.round(e.clientY - containerRectangle.top);

    this.setState({
      initialMousePositionX, initialMousePositionY, initialSelectionRectTop, initialSelectionRectLeft,
    });
  }

  setSelectionRectPositions(e) {
    const selectionRectTop = Math.min(e.clientY + this.state.resizeDistanceY, this.state.initialSelectionRectTop );
    const selectionRectLeft = Math.min(e.clientX + this.state.resizeDistanceX, this.state.initialSelectionRectLeft);
    this.setState({ selectionRectLeft, selectionRectTop });
  }

  setCurrentMousePosition=(e) => {
    // console.log("setCurrentMousePosition")
    const parentRect =this.container.getBoundingClientRect();
    const currentMousePositionX = Math.abs(e.clientX - parentRect.left - this.state.initialMousePositionX   );
    const currentMousePositionY = Math.abs(e.clientY - parentRect.top - this.state.initialMousePositionY  );
    this.setState({ currentPositions: { currentMousePositionX, currentMousePositionY } });
  }

  addMouseEvents() {
    window.addEventListener('scroll', this.onResize, false);
    window.addEventListener('resize', this.onResize, false);
    document.addEventListener('mouseup', this.onMouseUp, false);
    document.addEventListener('mousedown', this.onMouseDown, false); document.addEventListener('click', this.onMouseClick, false);
  }

  removeMouseEvents() {
    window.removeEventListener('scroll', this.onResize, false);
    window.removeEventListener('resize', this.onResize, false);
    document.removeEventListener('mouseup', this.onMouseUp, false);
    document.removeEventListener('mousedown', this.onMouseDown, false);
    document.removeEventListener('click', this.onMouseClick, false);
  }
  resetState=()=>{
    this.setState({ selectionRect:{mouseInContainer:false, mouseUp:true}, selectionRectTop:0,selectRectLeft:0, currentPositions: { currentMousePositionX: 0, currentMousePositionY: 0 } }); //reset
  }
  onResize=() => {
    const distanceY = window.pageYOffset;
    const distanceX = window.pageXOffset;
    this.setState({ resizeDistanceX: distanceX, resizeDistanceY: distanceY });
  }
  onMouseClick=(e)=>{
    this.handleSelection(e);
    this.resetState()
  }
  onMouseUp = (e) => {
    document.removeEventListener('pointermove', this.onMouseMove, false);
    this.resetState()
  }

  onMouseDown = (e) => {
    document.addEventListener('pointermove', this.onMouseMove, false);
    this.setState(prevState=>{
      return {selectionRect:{...prevState.selectionRect,mouseUp:false}}
      //{selectionRect:{...this.state.selectionRect,mouseInContainer}}
    })
    this.initialPositions(e);
  }
  handleSelection=(e)=>{
    this.selectableActive(e);
    if (this.state.selectionRect.mouseInContainer) {
      this.setSelectionRectPositions(e);
      this.setCurrentMousePosition(e);
    }
  }
  onMouseMove = (e) => {
    this.handleSelection(e);
  }

  render() {
    // console.log(this.state)
    return (
      <>
        <Container _rX={this.state.resizeDistanceX} _rY={this.state.resizeDistanceY} _currentMousePositionX={this.state.initialMousePositionX} _currentMousePositionY={this.state.initialMousePositionY} _top={this.state.initialSelectionRectTop} _left={this.state.initialSelectionRectLeft} currentMousePositionY={this.state.currentPositions.currentMousePositionY} currentMousePositionX={this.state.currentPositions.currentMousePositionX} left={this.state.selectionRectLeft} top={this.state.selectionRectTop}
        isRectActive={!this.state.selectionRect.mouseUp && this.state.selectionRect.mouseInContainer} children={this.props.children} className={this.props.className} container={(ref) => this.container = ref} />
        <SelectionRect mouseInContainer={this.state.selectionRect.mouseInContainer} mouseUp={this.state.selectionRect.mouseUp} height={this.state.currentPositions.currentMousePositionY} top={this.state.selectionRectTop} width={this.state.currentPositions.currentMousePositionX} left={this.state.selectionRectLeft} />
      </>
    );
  }
}

export default S