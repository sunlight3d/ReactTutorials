import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
