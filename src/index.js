import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import state from './state';

ReactDOM.render(
    <Provider store={createStore(state)}>
        <App />
    </Provider>,
    document.querySelector("#root"))
