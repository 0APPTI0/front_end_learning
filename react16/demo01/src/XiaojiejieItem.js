import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {

    constructor(props)
    {
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    render() { 
        return (
            <li onClick={this.handleClick}>
                {this.props.avname}为你服务{this.props.content}
            </li>
        );
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

/* 父组件向子组件进行传值的校验 */
XiaojiejieItem.prototypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

XiaojiejieItem.defaultProps={
    avname:'松岛枫'
}

export default XiaojiejieItem;