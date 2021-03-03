import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App/app';
import rootReducer from './reducers/reducers';
import {addUserByID} from './actions/actions';

import {Provider} from 'react-redux';
import {createStore} from 'redux';


const store = createStore(rootReducer);
console.log("Store 1", store.getState());
store.subscribe(() =>console.log('store.subscribe after change', store.getState()));
store.dispatch(addUserByID(2));

ReactDom.render( <Provider store={store}>
                    <App/>
                </Provider>
                , document.querySelector('#root'));