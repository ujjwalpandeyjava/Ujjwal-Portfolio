import AnimatedCursor from "react-animated-cursor";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="App">
    {/* <AnimatedCursor
      innerSize={13}
      outerSize={10}
      // color='41, 203, 232'
      color='0, 237, 170'
      outerAlpha={0.4}
      innerScale={0.8}
      outerScale={3.5}
      showSystemCursor={false}
      trailingSpeed={7}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'img'
      ]} /> */}
    <App />
  </div>,
  document.getElementById('root')
);
// <React.StrictMode>
// </React.StrictMode>,

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
