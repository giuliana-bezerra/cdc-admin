import React, { Component } from 'react';
import '../../css/form.css';
import TableLivro from './TableLivro';
import LivroService from '../../service/LivroService';
import FormLivro from './FormLivro';

// High order function (box)
export default class LivroView extends Component {
    constructor() {
        super();
        this.state = {livros: []};
        this._service = new LivroService();
    }

    render() {
        return (
            <div id="livroView">
                <div className="header">
                    <h2>Livro</h2>
                    <h4>Realize o cadastro de livros</h4>
                </div>
                <br />
                <div className="content" id="content">
                    <FormLivro update={this.updateLivros}/>
                    <TableLivro livros={this.state.livros}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this._service.listar().then(livros => 
            this.setState({livros: livros}));
    }

    updateLivros = livros =>
        this.setState({livros: livros});
}