import React from 'react';
import ReactDOM from 'react-dom';
import {routes} from './router';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {globalReducer} from './redux/store/globalreducer';
import {Provider} from 'react-redux';

const store = createStore(globalReducer);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();