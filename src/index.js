import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers/root-reducer';
import promise from  'redux-promise';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import './css/bootstrap.min.css';

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

import './css/align-student.css';
import './css/overview.css';
import './css/style.css';

import Header from './components/header';
import Navbar from './react-redux-mixed/left_navbar';
import Analytics from './react-redux-mixed/analytics';

import AlignStudent from './components/align-student/AlignStudent';
import NavBarAlt from './components/NavBarAlt';

const createStoreWithMiddleware = applyMiddleware(promise,thunkMiddleware)(createStore);

// We use switch to handle the route problem of '/' as both index page
// and /posts/new page showed up

// ReactDOM.render(
//     <Provider store={createStoreWithMiddleware(rootReducer)}>
//         <BrowserRouter>
//             <div className="col-xs-12">
//                 <Header />
//                 <Route path='/' component={Navbar} />
//                 <Switch>
//                     <Route path='/analytics' component={Analytics} />
//                     {/*<Route path='/profile/:id' component={StudentProfile} />*/}
//                     <Route path='/' component={AlignStudent} />
//                 </Switch>
//
//             </div>
//         </BrowserRouter>
//     </Provider>
//     , document.getElementById('root'));

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <div>
                <NavBarAlt/>
                <Switch>
                    <Route path='/analytics' component={Analytics} />
                    {/*<Route path='/profile/:id' component={StudentProfile} />*/}
                    <Route path='/students' component={AlignStudent} />
                </Switch>

            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


registerServiceWorker();