import React from 'react';
// import logo from './logo.svg';
import './App.css'
import 'animate.css'
import { fabric } from 'fabric'
import { Button } from 'antd'
export default class Test extends React.Component {

  state = {
    canvas: '',
    rect: '',
    top: 0
  }
  componentDidMount = () => {
    var canvas = new fabric.Canvas('main');
    var rect = new fabric.Rect({
      left: 0,//距离画布左侧的距离，单位是像
      fill: 'red',//填充的颜色
      width: 30,//方形的宽度
      height: 100,//方形的高度

    });

    const zhuzi = new fabric.Rect({
      left: 100,
      top: 0,
      width: 30,
      height: 100,
      fill: 'red'
    })
    const zhuzikong = new fabric.Rect({
      left: 100,
      top: 20,
      width: 30,
      height: 40,
      fill: 'blue'
    })

    canvas.add(rect);
    canvas.add(zhuzi);
    canvas.add(zhuzikong);
    this.setState({ rect, canvas })
  }
  oncilck = () => {
    const { top } = this.state;
    const restop = top < 30 ? 0 : top - 50
    this.setState({ top: restop })
    this.state.rect.set({ top: restop })
    this.state.canvas.renderAll()
  }
  drop = () => {
    const { top } = this.state;
    if (top > 100) return
    this.setState({ top: top + 1 })
    this.state.rect.set({ top: top + 1 })
    this.state.canvas.renderAll()
  }
  componentWillUpdate = () => {
    requestAnimationFrame(this.drop)
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <canvas id="main" style={{ width: '100%', height: '100%' }}></canvas>
        <Button onClick={this.start}>开始</Button>
        <Button onClick={this.oncilck}>跳跃</Button>
        {/* <img src={logo} alt="logo" className="img animate__animated animate__infinite animate__bounceInLeft" /> */}
      </div>
    )
  }
}
