import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

export default class Home extends Component {
    render() {
        return (
            <main>
                <div>
                <LazyHero imageSrc="https://unsplash.it/2000/1000">
                    <h1>Home</h1>
                    <h4 className="center">Realize o cadastro de autores e livros.</h4>
                </LazyHero>
                </div>
            </main>
        );
    }
}