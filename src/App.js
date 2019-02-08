import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import AutorView from './view/autor/AutorView';

export default class App extends Component {
    render() {
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" className="menu-link">
                    <span></span>
                </a>
                <aside>
                    <div id="menu">
                        <div className="pure-menu">
                            <a className="pure-menu-heading" href="#empresa">Company</a>

                            <ul className="pure-menu-list">
                                <li className="pure-menu-item"><a href="#home" className="pure-menu-link">Home</a></li>
                                <li className="pure-menu-item"><a href="#autor" className="pure-menu-link">Autor</a></li>
                                <li className="pure-menu-item"><a href="#livro" className="pure-menu-link">Livro</a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <main>
                    <div id="main">
                        <AutorView/>
                    </div>
                </main>
            </div>
        );
    }
}