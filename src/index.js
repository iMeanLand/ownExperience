import React from 'react';
import ReactDOM from 'react-dom';
import routing from './router';
import * as serviceWorker from './serviceWorker';
import cookies from './cookies';

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();