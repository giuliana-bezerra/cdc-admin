import React, { Component } from 'react';
import '../css/pure-min.css';
import '../css/side-menu.css';
import '../css/autores.css';
import AutorService from '../service/AutorService';
import AutorDTO from '../model/AutorDTO';
import InputCustomizado from '../component/InputCustomizado';

class AutorView extends Component {
    constructor() {
        super();
        this.state = { autores: [], nome: '', email: '', senha: '' };
        this._service = new AutorService();
    }

    // Chamado depois da primeira renderização
    componentDidMount() {
        this._service.listar()
            .then(autores => this.setState({autores: autores}));
    }

    render() {
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" className="menu-link">
                    <span></span>
                </a>

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

                <div id="main">
                    <div className="header">
                        <h1>Autor</h1>
                        <h2>Realize o cadastro de autores</h2>
                    </div>
                    <br />
                    <div className="content" id="content">
                        <div className="pure-form">
                            <form className="pure-form pure-form-aligned" onSubmit={this.gravarAutor} method="post">
                                <InputCustomizado label="Nome:" id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome}/>
                                <InputCustomizado label="Email:" id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail}/>
                                <InputCustomizado label="Senha:" id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha}/>
                                <div className="pure-control-group">
                                    <label></label>
                                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <table className="pure-table pure-table-aligned">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.autores.map((autor => {
                                            return (
                                                <tr key={autor.id}>
                                                    <td>{autor.nome}</td>
                                                    <td>{autor.email}</td>
                                                </tr>
                                            );
                                        }))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    gravarAutor = eventoReact => {
        eventoReact.preventDefault();
        this._service.gravar(new AutorDTO(
            this.state.nome, 
            this.state.email,
            this.state.senha
        ))
        .then(autores => this.setState({autores: autores}))
        .catch(console.log);
    }

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

export default AutorView;