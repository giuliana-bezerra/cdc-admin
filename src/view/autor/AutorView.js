import React, { Component } from 'react';
import '../../css/form.css';
import FormAutor from './FormAutor.js';
import TableAutor from './TableAutor.js';
import AutorService from '../../service/AutorService';

// High order component (NomeBox)
export default class AutorView extends Component {
    constructor() {
        super();
        this.state = {autores: []};
        this._service = new AutorService();
    }

    render() {
        return (
            <div id="autorView">
                <div className="header">
                    <h2>Autor</h2>
                    <h4>Realize o cadastro de autores</h4>
                </div>
                <br />
                <div className="content" id="content">
                    <FormAutor update={this.updateAutores}/>
                    <TableAutor autores={this.state.autores}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this._service.listar().then(this.updateAutores);
    }

    updateAutores = novosAutores =>
        this.setState({autores: novosAutores});

    setNome = evento => {
        this.setState({nome: evento.target.value});
    }

    setEmail = evento => {
        this.setState({email: evento.target.value});
    }

    setSenha = evento => {
        this.setState({senha: evento.target.value});
    }
}