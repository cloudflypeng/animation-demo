import React from 'react';
import logo from './logo.svg';
import './App.css'
import 'animate.css'
export default class CssAnimation extends React.Component {
  render() {
    return (
      <div style={{ width: '100vw', height: '20vh' }}>
        <h3>基于Animate.css的动画</h3>
        <img src={logo} alt="logo" className="img animate__animated animate__infinite animate__bounce" />
      </div>
    )
  }
}
