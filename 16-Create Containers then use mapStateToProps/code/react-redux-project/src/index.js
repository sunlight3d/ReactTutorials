import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import registerServiceWorker from './registerServiceWorker';

import allReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));
registerServiceWorker();
