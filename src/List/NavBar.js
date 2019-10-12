import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div className="tab-nav">
        <div className="nav-bar">
          <Link id="calu" className="tab active" to="/calu">
            计算器
          </Link>
          <Link id="list" className="tab" to="/list">
            收入分析
          </Link>
        </div>
      </div>
    )
  }
}
