import React, { Component, Fragment } from 'react'
import './style.css'

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue: "",
            list:['基础按摩','精油推背']
        }
    }




    render()
    {
        return(
            <Fragment>
                <div>
                    <label htmlFor="jspang">增加服务：</label>
                    <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                        return (
                            <li key={index+item} 
                                onClick={this.deleteItem.bind(this,index)}
                                dangerouslySetInnerHTML = {{__html:item}}
                            >
                            </li>
                        )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e)
    {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }

    addList()
    {
        this.setState({
            // ...是扩展运算符，这里可以将inputvalue的值添加到列表之中
            list:[...this.state.list,this.state.inputValue]
        })
    }

    deleteItem(index)
    {
        //console.log(index)
        // 复制出一个局部的list
        let list = this.state.list
        list.splice(index,1)
        /* 
            this.state.list.splice(index,1),为什么不能这么写（进行直接操作）？
            在react后期优化的时候会产生很大的性能障碍
            应该先声明一个局部变量，然后用局部变量对原本的变量进行赋值
        */
        this.setState({
            list:list
        })

    }
}

export default Xiaojiejie