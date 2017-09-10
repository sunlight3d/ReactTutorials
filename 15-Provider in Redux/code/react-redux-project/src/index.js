import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import registerServiceWorker from './registerServiceWorker';

import allReducers from './reducers';
import {createStore} from 'redux';

const store = createStore(allReducers);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
