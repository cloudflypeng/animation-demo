import React from 'react';
import logo from './logo.svg';
import './App.css'

import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  bounce: {
    animation: 'infinite 1s',
    animationDuration: 'infinite',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

export default class CssAnimation extends React.Component {
  render() {
    return (
      <div style={{ width: '100vw', height: '20vh' }}>
        <h3>基于Radium和react-animations的动画</h3>
        <StyleRoot>
          <img src={logo} alt="logo" className="img" style={styles.bounce} />
        </StyleRoot>
      </div>
    )
  }
}
