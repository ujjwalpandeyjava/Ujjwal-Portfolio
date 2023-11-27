import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
    {/* <AnimatedCursor innerSize={13} outerSize={10} color='0, 237, 170' outerAlpha={0.4} innerScale={0.8} outerScale={3.5} showSystemCursor={false} trailingSpeed={7} clickables={['a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link', 'img']} /> */}
    <App />
  </div>
);