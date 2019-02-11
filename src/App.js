import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div id="layout">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">SCB</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/autor">Autor</Nav.Link>
                    <Nav.Link href="/livro">Livro</Nav.Link>
                    </Nav>
                </Navbar>
                <div id="main">
                    <main>
                        <div className="content" id="content">
                            {this.props.children}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}