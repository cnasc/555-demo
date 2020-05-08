import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './Pages';
import './index.css';
import './html5-device-mockups/dist/device-mockups.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div className="device-wrapper">
      <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
        <div className="screen">
          <div className="gradient-background">
            <Pages />
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
