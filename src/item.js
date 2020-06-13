import React, { Component } from 'react'

class item extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isSelected:false,
            selected:[]
        }
    }
    componentDidUpdate(x,y){

        if(x.isRectActive){
            // console.log(x,y)
            this.selected(x)
        }

    }
    selected = (props) => {
        // console.log(props)
        const domNode = this.item.getBoundingClientRect();
        const isRectSelected = !(props.top-props._rY + props.currentMousePositionY < domNode.top || props.top-props._rY   >  domNode.top + domNode.height || props.left-props._rX + props.currentMousePositionX < domNode.left || props.left-props._rX  > domNode.left + domNode.width )
        if(isRectSelected){
            console.log(isRectSelected)
        }
    };
    render() {
        // console.log("kac kez render oluyorsun?")
        return <div ref={(ref) => (this.item = ref)}>{this.props.children}</div>
    }
}
export default React.memo(item )