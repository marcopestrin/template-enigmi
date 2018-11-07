import React                from 'react';
import ReactDOM             from 'react-dom';
import {Provider}           from 'react-redux';
import {createStore,applyMiddleware}        from 'redux';
import {BrowserRouter}      from 'react-router-dom';
import App                  from './App';
import reducer              from './store/reducers/auth';
import thunk                from 'redux-thunk';

const store = createStore(reducer,applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
