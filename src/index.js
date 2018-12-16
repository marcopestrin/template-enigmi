import React                from 'react';
import {createStore,applyMiddleware, compose} from 'redux';
import ReactDOM                 from 'react-dom';
import {BrowserRouter}          from 'react-router-dom';
import {Provider}               from 'react-redux';
import { composeWithDevTools }  from 'redux-devtools-extension/logOnlyInProduction';
import logger                   from 'redux-logger';
import thunk                    from 'redux-thunk';
import promise                  from 'redux-promise-middleware'
import App                      from './App';
import reducer                  from './store/reducers/';


const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });
  
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(promise(),thunk /*, logger */ )
));


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));