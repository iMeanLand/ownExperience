import React from 'react';
import ReactDOM from 'react-dom';
import routing from './router';
import * as serviceWorker from './serviceWorker';


global.all_my_data = {

    'user_data': '',
};


global.all_my_data['user_data'] = 'wdqdqwdqwdwq';





ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();