import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
    static propTypes = {
        username: PropTypes.string, // 用户名
        isLogin: PropTypes.bool, // 是否登陆
        title: PropTypes.string // 标语
    }
    constructor(props) {
        super(props)
        this.state = {
            login: false
        }
    }

    render() {
        if (this.props.isLogin) {
            return (
                <div className="head">
                     <div className="logo">
                        <p className="intro">{this.props.title}</p>
                    </div>
                    <div className="info">
                        <div className="name">{this.props.username}</div>
                        <div className="exit">退出</div>
                    </div>  
                </div>
            )
        } else {
            return (
                <div className="head">
                     <div className="logo">
                        <p className="intro">{this.props.title}</p>
                    </div>
                    <div className="info">
                        <div className="name">登陆</div>
                        <div className="exit">注册</div>
                    </div>  
                </div>
            )
        }
        
    }
}
