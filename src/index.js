import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AutorView from './view/autor/AutorView';
import Home from './view/Home';

ReactDOM.render(
    (
        <Router>
            <App>
                <Route exact path="/" component={Home}/>
                <Route path="/autor" component={AutorView}/>
                <Route path="/livro"/>
            </App>
        </Router>
    ), 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
