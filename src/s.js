import React, { Component } from 'react';
import SelectionRect from './selectionRect';
import Container from './container';
export default class S extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseInContainer: false, // The mouse in container condition because mouseEvents will must be only mouse into container position.
      currentPositions: {
        currentMousePositionX: 0,
        currentMousePositionY: 0,
      },
      selectionRectLeft:0,
      selectionRectTop:0,
      resizeDistanceY: 0,
      resizeDistanceX: 0,
    };
    this.removeMouseEvents();
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
    this.setState({ mouseInContainer });
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
    const parentRect =this.container.getBoundingClientRect();
    const currentMousePositionX = Math.abs(e.clientX - parentRect.left - this.state.initialMousePositionX   );
    const currentMousePositionY = Math.abs(e.clientY - parentRect.top - this.state.initialMousePositionY  );
    this.setState({ currentPositions: { currentMousePositionX, currentMousePositionY } });
  }

  addMouseEvents() {
    window.addEventListener('scroll', this.onResize, false);
    window.addEventListener('resize', this.onResize, false);
    document.addEventListener('click', this.onMouseClick, false);
    document.addEventListener('mouseup', this.onMouseUp, false);
    document.addEventListener('mousedown', this.onMouseDown, false);
  }

  removeMouseEvents() {
    window.removeEventListener('scroll', this.onResize, false);
    window.removeEventListener('resize', this.onResize, false);
    document.removeEventListener('mouseup', this.onMouseUp, false);
    document.removeEventListener('mousedown', this.onMouseDown, false);
  }

  onResize=() => {
    const distanceY = window.pageYOffset;
    const distanceX = window.pageXOffset;
    this.setState({ resizeDistanceX: distanceX, resizeDistanceY: distanceY });
  }

  onMouseUp = (e) => {
    document.removeEventListener('pointermove', this.onMouseMove, false);
    this.setState({ mouseInContainer: false, currentPositions: { currentMousePositionX: 0, currentMousePositionY: 0 } });
  }

  onMouseDown = (e) => {
    document.addEventListener('pointermove', this.onMouseMove, false);
    this.initialPositions(e);
  }

  onMouseMove = (e) => {
    if (this.state.mouseInContainer) {
      this.selectableActive(e);
      this.setSelectionRectPositions(e);
      this.setCurrentMousePosition(e);
    }
  }

  render() {
    return (
      <>
        <Container _rX={this.state.resizeDistanceX} _rY={this.state.resizeDistanceY} _currentMousePositionX={this.state.initialMousePositionX} _currentMousePositionY={this.state.initialMousePositionY} _top={this.state.initialSelectionRectTop} _left={this.state.initialSelectionRectLeft} currentMousePositionY={this.state.currentPositions.currentMousePositionY} currentMousePositionX={this.state.currentPositions.currentMousePositionX} left={this.state.selectionRectLeft} top={this.state.selectionRectTop} isRectActive={this.state.mouseInContainer} children={this.props.children} className={this.props.className} container={(ref) => this.container = ref} />
        <SelectionRect isRectActive={this.state.mouseInContainer} height={this.state.currentPositions.currentMousePositionY} top={this.state.selectionRectTop} width={this.state.currentPositions.currentMousePositionX} left={this.state.selectionRectLeft} />
      </>
    );
  }
}
