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
						command: ''
        }
    }
    userClick = (btnName)=> {
				this.setState(judge(this.state,btnName))
				console.log(this.state)				
		}
    render() {
        return (
            <div id="calcultor">              
                <Display value={this.state.result || this.state.next || '0'}/>
                <div className="loading">
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
