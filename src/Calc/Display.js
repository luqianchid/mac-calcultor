import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Display extends Component {
  static propTypes = {
    value: PropTypes.string
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
          <p id="output-value" className="output-value">{this.props.value}</p>
        </div>
      </div>
    )
  }
}
