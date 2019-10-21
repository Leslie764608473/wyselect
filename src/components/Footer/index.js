import React from 'react'
import './Footer.styl'
import {Link} from 'react-router-dom'

class Footer extends React.Component{

  render(){
    return (
      <div className="footer-container">
        <div>
          <Link className="iconfont icon-xuanxiang" to="/">首页</Link>
        </div>
        <div>
          <Link className="iconfont icon-Search" to="/classify">分类</Link>
        </div>
        <div>
          <Link className="iconfont icon-shopping_cart" to="/shopcart">购物车</Link>
        </div>
        <div>
          <Link className="iconfont icon-geren" to="/profile">个人</Link>
        </div>
      </div>
    )
  }
}
export default Footer