import React, { Component } from 'react'
import Display from './Display'
import KeyBoard from './KeyBoard'
import judge from './judge'
import './calu.scss'

export default class Calcultor extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            result: '',
            next: '',
            command: '',
            show: 'none'
        }
    }
    userClick = (btnName)=> {
        console.log(this.state)	
        if (btnName === '=') {
            this.showLoading()
        }      
        this.setState(judge(this.state,btnName))
    }
    reSize = (result) =>{
        if (result.length > 10) {
            return '20px'
        }
        return '45px'
    }
    showLoading() {
        this.setState({show: 'block'})
        setTimeout(() => {
            this.setState({show: 'none'})
        }, 1500);
        clearTimeout()        
    }
    render() {
        return (
            <div id="calcultor">              
                <Display size={this.reSize(this.state.result)} value={this.state.next || this.state.result || '0'}/>
                <div className="loading" style={{display: this.state.show}}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <KeyBoard clickBtn={this.userClick}/>
            </div>
        )
    }
}
