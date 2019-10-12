import React, {Component} from 'react';
import PropTypes from "prop-types";

class Button extends Component {
  static propTypes = {
    value: PropTypes.string, // button value
    specialColor: PropTypes.bool, // 特殊按钮
    isLarge: PropTypes.bool, // 按键 0 
    clickEvent: PropTypes.func // 点击事件
  }
  handleClick = () => {
    this.props.clickEvent(this.props.value) // 处理按钮点击
  }
  render() {
    let className = {
      name: 'button-click',
      special: this.props.specialColor ? 'special' : '',
      isLarge: this.props.isLarge ? 'large' : ''
    }
    return (   
      <button className={`${className.name} ${className.special} ${className.isLarge}`} onClick={this.handleClick}>{this.props.value}</button>  
    )
  }
}

export default Button