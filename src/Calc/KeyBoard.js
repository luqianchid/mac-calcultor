import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
export default class KeyBoard extends Component {
  static propTypes = {
    clickBtn: PropTypes.func
  }
  handleClick = (btnName) => {
    this.props.clickBtn(btnName)
  }
  render() {
    return (
      <div id="keyboard">
        <Button clickEvent = {this.handleClick} value="AC" />
        <Button clickEvent = {this.handleClick} value="+/-" />
        <Button clickEvent = {this.handleClick} value="%" />
        <Button clickEvent = {this.handleClick} value="÷" specialColor/>
        <Button clickEvent = {this.handleClick} value="7" />
        <Button clickEvent = {this.handleClick} value="8" />
        <Button clickEvent = {this.handleClick} value="9" />             
        <Button clickEvent = {this.handleClick} value="x" specialColor/>
        <Button clickEvent = {this.handleClick} value="4" />
        <Button clickEvent = {this.handleClick} value="5" />
        <Button clickEvent = {this.handleClick} value="6" />
        <Button clickEvent = {this.handleClick} value="-" specialColor/>
        <Button clickEvent = {this.handleClick} value="1" />
        <Button clickEvent = {this.handleClick} value="2" />
        <Button clickEvent = {this.handleClick} value="3" />
        <Button clickEvent = {this.handleClick} value="+" specialColor/>
        <Button clickEvent = {this.handleClick} value="0" isLarge/>
        <Button clickEvent = {this.handleClick} value="." />
        <Button clickEvent = {this.handleClick} value="=" specialColor/> 
      </div>
    )
  }
}
