import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TableBody.scss'
class TableBody extends Component {     
    static propstype = {
        source: PropTypes.string
    }
    constructor(props) {
        super(props)
        this.state = {
            lists: [],
            source: 'http://ittool.aiyongbao.com/api/getdayreport'
        }
    }       
    componentDidMount() {        
        fetch(this.state.source, {
            method: 'POST', 
            body: 'app=trade&start=2019-09-26&end=2019-10-12&pageno=1&pagesize=10', // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            mode:'cors'
        }).then(res => {return res.json()})
        .then(res => {
        this.setState({lists: res.content}) 
        })
        .catch(error => console.error('Error:', error));        
    }
    render() {
        let rows = [];
        this.state.lists.forEach((list, index) => {
          let row =  <div className="trade-item" key={index}>
              <span className="date">{list.day}</span> 
              <span>{list.payorder}</span>
              <span>{list.freeorder}</span>
              <span>{list.singleprice}</span>
              <span>{list.totalprice}</span>
              <span>{list.vipafterdatenum}</span>
              <span className="bigger">{list.neworder}({list.neworderpay}元)</span>
              <span className="bigger">{list.againorder}({list.againorderpay}元)</span>
              <span className="bigger">{list.updateorder}({list.updateorderpay})元</span>
              <span>{list.getbackorder}</span>
              <span>{list.vipagainpaynum}%</span>
              <span>{list.monthcycle}({list.monthcyclepay}元)</span>
              <span className="bigger">{list.aquartercycle}({list.aquartercyclepay}元)</span>
              <span className="bigger">{list.sixmonthscycle}({list.sixmonthscyclepay}元)</span>
              <span className="bigger">{list.ayearcycle}({list.ayearcyclepay}元)</span>
              <span><a href="/">分析</a></span>
          </div>
          rows.push(row)
        })
        return (               
            <div className='trade'>
              <div className="table-head">      
                <div className="head-item">
                    <span>日期</span>
                    <span>付费人数</span>
                    <span>免费人数</span>
                    <span>客单价</span>
                    <span>总收入</span>
                    <span>到期(人)</span>
                    <span className="bigger">新订(单)</span>
                    <span className="bigger">续订(单)</span>
                    <span className="bigger">升级(单)</span>
                    <span>后台(单)</span>
                    <span>续订率</span>
                    <span>一个月(单)</span>
                    <span className="bigger">一季度(单)</span>
                    <span className="bigger">半年(单)</span>
                    <span className="bigger">一年(单)</span>
                    <span>来源</span>                             
                </div>
              </div>
              <div className="table-body">
                  {rows}
              </div>
            </div>
        );
      }
}
export default TableBody