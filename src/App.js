// import logo from './logo.svg';
import './App.css';
import Animation from './animation'
import CssAnimation from './animation-css'
import Radium from './radium'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CssAnimation />
        <Radium />
        <Animation />
        {/* <img src={logo} alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
