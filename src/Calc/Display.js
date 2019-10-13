import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Display extends Component {
  static propTypes = {
    value: PropTypes.string,
    size: PropTypes.string // 字体大小
  }
  render() {
    return (
      <div id="display">
        <div className="btn-grp">
          <div className="btn"><div>x</div></div>
          <div className="btn"><div>-</div></div>
          <div className="btn"><div>=</div></div>
        </div>         
        <div id="output">
          <input ref="output" readOnly  className="output-value"  style={{fontSize:this.props.size}} value={this.props.value}/>
        </div>
      </div>
    )
  }
}
